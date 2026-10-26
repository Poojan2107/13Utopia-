import * as THREE from "three";
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass.js";

/**
 * Authentic Studio Mirage 2D GPU Fluid Simulation & DisplacedEffect Pass
 * Reverse-engineered directly from Studio Mirage production bundle.
 */

const FLUID_SIM_VERTEX = `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`;

const FLUID_SIM_HELPERS = `
vec2 canvasUvToIso(vec2 uv, float aspect) {
  vec2 q = uv - 0.5;
  if (aspect >= 1.0) q.x *= aspect;
  else               q.y /= aspect;
  return q;
}

vec2 simUvToIso(vec2 simUv, float aspect) {
  vec2 q = simUv - 0.5;
  float aspect2 = aspect * aspect;
  if (aspect >= 1.0) q.x *= aspect2;
  else               q.y /= aspect2;
  return q;
}
`;

// Splat shader
const SPLAT_FRAGMENT = `
precision highp float;
varying vec2 vUv;
uniform sampler2D uTarget;
uniform float uAspect;
uniform vec2 uPoint;
uniform vec2 uPointValue;
uniform float uRadius;
uniform float uInkAmount;
uniform float uInkRadius;

${FLUID_SIM_HELPERS}

void main() {
  vec2 pIso = simUvToIso(vUv, uAspect);
  vec2 mIso = canvasUvToIso(uPoint, uAspect);
  vec2 d = pIso - mIso;
  float d2 = dot(d, d);

  vec2 velSplat = pow(2.0, -d2 / max(uRadius, 1e-6)) * uPointValue;
  float inkSplat = pow(2.0, -d2 / max(uInkRadius, 1e-6)) * uInkAmount;

  vec3 base = texture2D(uTarget, vUv).xyz;
  vec2 velocity = base.xy + velSplat;
  float ink = clamp(base.z + inkSplat, 0.0, 1.0);

  gl_FragColor = vec4(velocity, ink, 1.0);
}
`;

// Advection + Dissipation shader
const ADVECTION_FRAGMENT = `
precision highp float;
varying vec2 vUv;
uniform sampler2D uVelocity;
uniform float uDt;
uniform float uVelocityDissipation;
uniform float uInkDissipation;

void main() {
  vec2 velocity = texture2D(uVelocity, vUv).xy;
  vec2 coord = vUv - uDt * velocity;
  vec3 advected = texture2D(uVelocity, coord).xyz;
  gl_FragColor = vec4(advected.xy * uVelocityDissipation, advected.z * uInkDissipation, 1.0);
}
`;

// Authentic Studio Mirage DisplacedEffect shader
const FLUID_DISPLACE_SHADER = {
  uniforms: {
    tDiffuse: { value: null },
    uFluid: { value: null },
    uStrength: { value: 0.1 },
    uAspect: { value: 1.0 },
    uTime: { value: 0.0 },
    uSeed: { value: 0.0 },
  },
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    precision highp float;

    uniform sampler2D tDiffuse;
    uniform sampler2D uFluid;
    uniform float uStrength;
    uniform float uAspect;
    uniform float uTime;
    uniform float uSeed;

    varying vec2 vUv;

    vec2 canvasUvToSimUv(vec2 uv, float aspect) {
      vec2 p = uv;
      if (aspect >= 1.0) p.x = (uv.x - 0.5) / aspect + 0.5;
      else               p.y = (uv.y - 0.5) * aspect + 0.5;
      return p;
    }

    float randm(vec2 n) {
      vec3 p3 = fract(vec3(n.xyx) * 0.1031);
      p3 += dot(p3, p3.yzx + 33.33);
      return fract((p3.x + p3.y) * p3.z);
    }

    void main() {
      vec2 simUv = canvasUvToSimUv(vUv, uAspect);
      vec4 fluidData = texture2D(uFluid, clamp(simUv, 0.0, 1.0));
      vec2 fluid = fluidData.rg;
      float inkAmount = fluidData.b;

      float fluidLen = length(fluid);

      // Early exit — no fluid activity, just pass through crystal clean
      if (fluidLen < 0.001 && inkAmount < 0.001) {
        gl_FragColor = texture2D(tDiffuse, vUv);
        return;
      }

      vec2 duv = vUv - (fluid * inkAmount) * uStrength;
      float blur = inkAmount * 0.4;

      vec2 seed = vUv * 800.0 + (uTime * 0.001) + uSeed;

      float rnd = randm(seed) * 0.85;
      float angle = rnd * 6.2831853;
      vec2 off = vec2(cos(angle), sin(angle)) * blur * rnd;

      vec4 col = texture2D(tDiffuse, duv + off);

      float grainRnd = randm(seed + 91.7) - 0.5;
      col.rgb += grainRnd * inkAmount * 0.8;

      gl_FragColor = col;
    }
  `,
};

export class FluidSimulation {
  private simScene: THREE.Scene;
  private simCam: THREE.Camera;
  private simMesh: THREE.Mesh;
  private splatMat: THREE.ShaderMaterial;
  private advectionMat: THREE.ShaderMaterial;

  private fboA: THREE.WebGLRenderTarget;
  private fboB: THREE.WebGLRenderTarget;
  private currentRead: THREE.WebGLRenderTarget;
  private currentWrite: THREE.WebGLRenderTarget;

  public displacePass: ShaderPass;

  private mouse = new THREE.Vector2(0.5, 0.5);
  private prevMouse = new THREE.Vector2(0.5, 0.5);
  private velocity = new THREE.Vector2(0, 0);
  private isMoving = false;
  private initialized = false;

  constructor(resolution = 256) {
    const renderTargetOptions = {
      type: THREE.HalfFloatType,
      minFilter: THREE.LinearFilter,
      magFilter: THREE.LinearFilter,
      wrapS: THREE.ClampToEdgeWrapping,
      wrapT: THREE.ClampToEdgeWrapping,
      format: THREE.RGBAFormat,
      depthBuffer: false,
      stencilBuffer: false,
    };

    this.fboA = new THREE.WebGLRenderTarget(resolution, resolution, renderTargetOptions);
    this.fboB = new THREE.WebGLRenderTarget(resolution, resolution, renderTargetOptions);
    this.currentRead = this.fboA;
    this.currentWrite = this.fboB;

    this.simScene = new THREE.Scene();
    this.simCam = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    this.splatMat = new THREE.ShaderMaterial({
      vertexShader: FLUID_SIM_VERTEX,
      fragmentShader: SPLAT_FRAGMENT,
      uniforms: {
        uTarget: { value: null },
        uAspect: { value: 1.0 },
        uPoint: { value: new THREE.Vector2(0.5, 0.5) },
        uPointValue: { value: new THREE.Vector2(0, 0) },
        uRadius: { value: 0.0025 },
        uInkAmount: { value: 0.03 },
        uInkRadius: { value: 0.0005 },
      },
      depthWrite: false,
      depthTest: false,
    });

    this.advectionMat = new THREE.ShaderMaterial({
      vertexShader: FLUID_SIM_VERTEX,
      fragmentShader: ADVECTION_FRAGMENT,
      uniforms: {
        uVelocity: { value: null },
        uDt: { value: 0.016 },
        uVelocityDissipation: { value: 0.96 },
        uInkDissipation: { value: 0.955 },
      },
      depthWrite: false,
      depthTest: false,
    });

    const quad = new THREE.PlaneGeometry(2, 2);
    this.simMesh = new THREE.Mesh(quad, this.advectionMat);
    this.simScene.add(this.simMesh);

    this.displacePass = new ShaderPass(FLUID_DISPLACE_SHADER);
    this.displacePass.uniforms.uFluid.value = this.currentRead.texture;
  }

  public setMouse(normalizedX: number, normalizedY: number, aspect = 1.0) {
    const nx = THREE.MathUtils.clamp(normalizedX, 0.0, 1.0);
    const ny = THREE.MathUtils.clamp(normalizedY, 0.0, 1.0);

    const vx = (nx - this.mouse.x) * 14.0;
    const vy = (ny - this.mouse.y) * 14.0;

    const speed = Math.sqrt(vx * vx + vy * vy);
    if (speed > 0.0008) {
      this.isMoving = true;
      this.velocity.set(vx, vy);
    }

    this.prevMouse.copy(this.mouse);
    this.mouse.set(nx, ny);

    this.splatMat.uniforms.uAspect.value = aspect;
    this.displacePass.uniforms.uAspect.value = aspect;
  }

  public step(renderer: THREE.WebGLRenderer, dt = 0.016) {
    if (!this.initialized) {
      const oldTarget = renderer.getRenderTarget();
      const oldClearColor = new THREE.Color();
      const oldClearAlpha = renderer.getClearAlpha();
      renderer.getClearColor(oldClearColor);

      renderer.setClearColor(0x000000, 0.0);
      renderer.setRenderTarget(this.fboA);
      renderer.clear();
      renderer.setRenderTarget(this.fboB);
      renderer.clear();

      renderer.setRenderTarget(oldTarget);
      renderer.setClearColor(oldClearColor, oldClearAlpha);
      this.initialized = true;
    }

    const oldTarget = renderer.getRenderTarget();

    // 1. Splat when mouse moved
    if (this.isMoving) {
      this.splatMat.uniforms.uTarget.value = this.currentRead.texture;
      this.splatMat.uniforms.uPoint.value.copy(this.mouse);
      this.splatMat.uniforms.uPointValue.value.copy(this.velocity);

      this.simMesh.material = this.splatMat;
      renderer.setRenderTarget(this.currentWrite);
      renderer.render(this.simScene, this.simCam);

      const temp = this.currentRead;
      this.currentRead = this.currentWrite;
      this.currentWrite = temp;

      this.isMoving = false;
    }

    // 2. Advection + Dissipation
    this.advectionMat.uniforms.uVelocity.value = this.currentRead.texture;
    this.advectionMat.uniforms.uDt.value = dt;

    this.simMesh.material = this.advectionMat;
    renderer.setRenderTarget(this.currentWrite);
    renderer.render(this.simScene, this.simCam);

    const temp2 = this.currentRead;
    this.currentRead = this.currentWrite;
    this.currentWrite = temp2;

    renderer.setRenderTarget(oldTarget);

    // Update displace pass
    this.displacePass.uniforms.uFluid.value = this.currentRead.texture;
    this.displacePass.uniforms.uTime.value += dt;
  }

  public dispose() {
    this.fboA.dispose();
    this.fboB.dispose();
    this.splatMat.dispose();
    this.advectionMat.dispose();
    this.simMesh.geometry.dispose();
    this.displacePass.dispose();
  }
}
