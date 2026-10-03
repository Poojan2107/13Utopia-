"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import styles from "@/styles/motion/AmbientField.module.css";

/**
 * Tenbin Exact Hero Atmosphere Replication:
 * 1. Volumetric Gaseous Cosmic Smoke & Nebula Cloud Shader (fBm Domain-Warped Simplex Noise)
 * 2. Ultra-Fine Micro-Stardust Particulate Stream (sub-pixel dust motes with 3D depth)
 * 3. Filmic Analogue Grain & Vignette Integration
 */
export function AmbientField() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let width = window.innerWidth;
    let height = window.innerHeight;

    // Main Scene
    const scene = new THREE.Scene();

    // Perspective Camera for natural 3D depth & parallax
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 10);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // ── 01. TENBIN COSMIC NEBULA & SMOKE SHADER PLANE ──────────────────────
    const nebulaVertexShader = `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position, 1.0);
      }
    `;

    const nebulaFragmentShader = `
      uniform float uTime;
      uniform vec2 uResolution;
      uniform vec2 uMouse;
      uniform float uScroll;
      varying vec2 vUv;

      // 3D Simplex Noise implementation
      vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
      vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
      vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
      vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

      float snoise(vec3 v) {
        const vec2 C = vec2(1.0/6.0, 1.0/3.0);
        const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
        vec3 i  = floor(v + dot(v, C.yyy));
        vec3 x0 = v - i + dot(i, C.xxx);
        vec3 g = step(x0.yzx, x0.xyz);
        vec3 l = 1.0 - g;
        vec3 i1 = min(g.xyz, l.zxy);
        vec3 i2 = max(g.xyz, l.zxy);
        vec3 x1 = x0 - i1 + C.xxx;
        vec3 x2 = x0 - i2 + C.yyy;
        vec3 x3 = x0 - D.yyy;
        i = mod289(i);
        vec4 p = permute(permute(permute(
                   i.z + vec4(0.0, i1.z, i2.z, 1.0))
                 + i.y + vec4(0.0, i1.y, i2.y, 1.0))
                 + i.x + vec4(0.0, i1.x, i2.x, 1.0));
        float n_ = 0.142857142857;
        vec3  ns = n_ * D.wyz - D.xzx;
        vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
        vec4 x_ = floor(j * ns.z);
        vec4 y_ = floor(j - 7.0 * x_);
        vec4 x = x_ *ns.x + ns.yyyy;
        vec4 y = y_ *ns.x + ns.yyyy;
        vec4 h = 1.0 - abs(x) - abs(y);
        vec4 b0 = vec4(x.xy, y.xy);
        vec4 b1 = vec4(x.zw, y.zw);
        vec4 s0 = floor(b0)*2.0 + 1.0;
        vec4 s1 = floor(b1)*2.0 + 1.0;
        vec4 sh = -step(h, vec4(0.0));
        vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
        vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;
        vec3 p0 = vec3(a0.xy, h.x);
        vec3 p1 = vec3(a0.zw, h.y);
        vec3 p2 = vec3(a1.xy, h.z);
        vec3 p3 = vec3(a1.zw, h.w);
        vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
        p0 *= norm.x;
        p1 *= norm.y;
        p2 *= norm.z;
        p3 *= norm.w;
        vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
        m = m * m;
        return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
      }

      // Fractional Brownian Motion with Domain Warping for silken cosmic smoke
      float fbm(vec3 p) {
        float v = 0.0;
        float a = 0.52;
        vec3 shift = vec3(100.0);
        for (int i = 0; i < 5; ++i) {
          v += a * snoise(p);
          p = p * 2.05 + shift;
          a *= 0.48;
        }
        return v;
      }

      // High-frequency film grain generator
      float randomGrain(vec2 st) {
        return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
      }

      void main() {
        vec2 uv = (gl_FragCoord.xy - 0.5 * uResolution.xy) / min(uResolution.x, uResolution.y);

        // Responsive parallax drift
        vec2 p = uv * 1.85 + uMouse * 0.12;
        p.y += uScroll * 0.00045;

        float t = uTime * 0.045;

        // Domain warping: Smoke streams billowing across space
        vec3 coord1 = vec3(p * 1.2, t);
        float q1 = fbm(coord1);

        vec3 coord2 = vec3(p * 1.8 + vec2(q1 * 0.85, -q1 * 0.6), t * 1.25);
        float q2 = fbm(coord2);

        vec3 coord3 = vec3(p * 2.6 + vec2(-q2 * 0.75, q2 * 0.95), t * 1.6);
        float smoke = fbm(coord3);

        // Contrast shaping: Tenbin luminous atmospheric clouds
        smoke = smoothstep(-0.25, 0.95, smoke + q2 * 0.35);

        // Tenbin Monochromatic Silver-Titanium Palette
        vec3 deepVoid = vec3(0.0, 0.0, 0.0);
        vec3 graphiteDust = vec3(0.10, 0.11, 0.13);
        vec3 silverNebula = vec3(0.38, 0.42, 0.48);
        vec3 luminousWhite = vec3(0.72, 0.76, 0.82);

        vec3 col = mix(deepVoid, graphiteDust, smoothstep(0.0, 0.45, smoke));
        col = mix(col, silverNebula, smoothstep(0.40, 0.80, smoke));
        col = mix(col, luminousWhite, smoothstep(0.75, 1.10, smoke));

        // Subtle peripheral vignette to maintain deep black boundaries
        float distFromCenter = length(uv);
        float vignette = smoothstep(1.35, 0.35, distFromCenter);

        // Fine film grain dither
        float grain = (randomGrain(gl_FragCoord.xy + fract(uTime)) - 0.5) * 0.035;

        // Overall alpha curve: Rich, immersive yet subtle enough for foreground typography
        float alpha = clamp(smoke * 0.72 * vignette + grain, 0.0, 0.85);

        gl_FragColor = vec4(col + grain, alpha);
      }
    `;

    const nebulaUniforms = {
      uTime: { value: 0 },
      uResolution: { value: new THREE.Vector2(width, height) },
      uMouse: { value: new THREE.Vector2(0, 0) },
      uScroll: { value: 0 },
    };

    const nebulaGeo = new THREE.PlaneGeometry(2, 2);
    const nebulaMat = new THREE.ShaderMaterial({
      vertexShader: nebulaVertexShader,
      fragmentShader: nebulaFragmentShader,
      uniforms: nebulaUniforms,
      transparent: true,
      depthWrite: false,
      blending: THREE.NormalBlending,
    });

    // Background quad in separate ortho camera
    const bgScene = new THREE.Scene();
    const bgCamera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const bgMesh = new THREE.Mesh(nebulaGeo, nebulaMat);
    bgScene.add(bgMesh);

    // ── 02. TENBIN MICRO-STARDUST PARTICULATE FIELD ────────────────────────
    // Procedural soft-glow micro-particle point sprite
    const pCanvas = document.createElement("canvas");
    pCanvas.width = 64;
    pCanvas.height = 64;
    const pCtx = pCanvas.getContext("2d");
    if (pCtx) {
      const grad = pCtx.createRadialGradient(32, 32, 0, 32, 32, 32);
      grad.addColorStop(0, "rgba(255, 255, 255, 1.0)");
      grad.addColorStop(0.2, "rgba(235, 242, 255, 0.75)");
      grad.addColorStop(0.55, "rgba(180, 200, 230, 0.20)");
      grad.addColorStop(1, "rgba(0, 0, 0, 0)");
      pCtx.fillStyle = grad;
      pCtx.fillRect(0, 0, 64, 64);
    }
    const particleTexture = new THREE.CanvasTexture(pCanvas);

    // 650 Delicate Micro-Stardust Specks (sub-pixel cosmic grain)
    const particleCount = 650;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleVelocities: Array<{ vx: number; vy: number; vz: number; baseAlpha: number }> = [];

    for (let i = 0; i < particleCount; i++) {
      const radius = 2.5 + Math.random() * 14.0;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      particlePositions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 18.0;
      particlePositions[i * 3 + 2] = radius * Math.sin(phi) * Math.sin(theta) - 2.0;

      const alpha = 0.15 + Math.random() * 0.65;

      particleVelocities.push({
        vx: (Math.random() - 0.5) * 0.002,
        vy: 0.002 + Math.random() * 0.004,
        vz: (Math.random() - 0.5) * 0.002,
        baseAlpha: alpha,
      });
    }

    particleGeo.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.075,
      map: particleTexture,
      transparent: true,
      opacity: 0.60,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particleSystem = new THREE.Points(particleGeo, particleMat);
    scene.add(particleSystem);

    // ── 03. INTERACTION & ANIMATION ────────────────────────────────────────
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const onPointerMove = (e: MouseEvent) => {
      targetMouseX = (e.clientX / window.innerWidth) * 2 - 1;
      targetMouseY = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", onPointerMove, { passive: true });

    let scrollY = 0;
    const onScroll = () => {
      scrollY = window.scrollY || document.documentElement.scrollTop;
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    const onResize = () => {
      if (!container) return;
      width = window.innerWidth;
      height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      nebulaUniforms.uResolution.value.set(width, height);
    };
    window.addEventListener("resize", onResize);

    let rafId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      rafId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Mouse Parallax Damping
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      // Update Nebula Shader Uniforms
      nebulaUniforms.uTime.value = elapsedTime;
      nebulaUniforms.uMouse.value.set(mouseX, mouseY);
      nebulaUniforms.uScroll.value = scrollY;

      // Update Stardust Micro-particles
      const posAttr = particleGeo.attributes.position as THREE.BufferAttribute;
      const arr = posAttr.array as Float32Array;

      for (let i = 0; i < particleCount; i++) {
        const vel = particleVelocities[i];
        arr[i * 3 + 1] += vel.vy;
        if (arr[i * 3 + 1] > 10.0) {
          arr[i * 3 + 1] = -10.0;
        }
      }
      posAttr.needsUpdate = true;

      // Orbital parallax on dust cloud
      particleSystem.rotation.y = elapsedTime * 0.015 + mouseX * 0.08;
      particleSystem.rotation.x = mouseY * 0.05 + scrollY * 0.0002;
      particleSystem.position.y = -(scrollY * 0.001);

      // Render 2-pass (Nebula Background Shader -> 3D Stardust Depth Layer)
      renderer.autoClear = false;
      renderer.clear();
      renderer.render(bgScene, bgCamera);
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", onPointerMove);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      if (renderer.domElement) {
        renderer.domElement.remove();
      }
      nebulaGeo.dispose();
      nebulaMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      particleTexture.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={styles.root}
      aria-hidden="true"
    />
  );
}
