"use client";

import { useEffect, useRef } from "react";
import styles from "@/styles/home/GoldCurtains.module.css";

const VERTEX_SHADER = `#version 300 es
in vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

const FRAGMENT_SHADER = `#version 300 es
precision highp float;

uniform vec2 u_resolution;
uniform float u_time;
uniform vec2 u_mouse;

out vec4 fragColor;

// Simplex-style smooth noise
vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }

float snoise(vec2 v) {
  const vec4 C = vec4(0.211324865405187, 0.366025403784439,
                     -0.577350269189626, 0.024390243902439);
  vec2 i  = floor(v + dot(v, C.yy));
  vec2 x0 = v -   i + dot(i, C.xx);
  vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod289(i);
  vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0))
        + i.x + vec3(0.0, i1.x, 1.0));
  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
  m = m*m;
  m = m*m;
  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);
  vec3 g;
  g.x  = a0.x  * x0.x  + h.x  * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

// Fluid silk fold evaluation
float curtainFolds(vec2 uv, float t, float freq, float waveSpeed) {
  float n1 = snoise(vec2(uv.x * 1.8 + t * 0.15, uv.y * 0.8 - t * 0.1));
  float n2 = snoise(vec2(uv.x * 3.5 - t * 0.2, uv.y * 1.6 + t * 0.12));
  float fold = sin(uv.x * freq + n1 * 2.2 + t * waveSpeed);
  fold += 0.5 * sin(uv.x * (freq * 1.8) - n2 * 1.6 - t * (waveSpeed * 1.3));
  return fold;
}

void main() {
  vec2 uv = gl_FragCoord.xy / u_resolution.xy;
  vec2 p = (gl_FragCoord.xy * 2.0 - u_resolution.xy) / min(u_resolution.x, u_resolution.y);

  // Gentle mouse parallax
  p += (u_mouse - 0.5) * 0.08;

  float t = u_time * 0.45;

  // Deep obsidian luxury background base
  vec3 color = vec3(0.005, 0.004, 0.002);

  // 1. Warm Golden Diagonal Horizon Light Ray (behind central bust)
  float rayCoord = p.y - p.x * 0.42 + 0.12;
  float ray = exp(-abs(rayCoord) * 9.0) * 0.85;
  float rayGlow = exp(-abs(rayCoord) * 2.8) * 0.45;
  vec3 rayCol = vec3(0.92, 0.72, 0.38) * ray + vec3(0.65, 0.42, 0.15) * rayGlow;
  color += rayCol;

  // 2. Primary Silk Curtain Ribbon (Sweeping from Left around to Top Right)
  // Base trajectory of the ribbon
  float ribbonY = 0.22 * sin(p.x * 1.4 - 0.6) + 0.14 * cos(p.x * 2.4 + t * 0.3) - 0.05;
  float ribbonDist = p.y - ribbonY;
  
  // Waving silk micro-folds inside the ribbon
  float folds1 = curtainFolds(p + vec2(0.0, -ribbonY), t, 9.5, 0.7);
  float folds2 = curtainFolds(p * 1.4, t * 1.2, 16.0, 1.1);

  // Ribbon mask with soft volumetric edges
  float ribbonWidth = 0.55 + 0.18 * sin(p.x * 1.6 + t * 0.2);
  float ribbonMask = smoothstep(ribbonWidth, 0.0, abs(ribbonDist));

  if (ribbonMask > 0.001) {
    // Normal calculation for specular metallic sheen
    float d1 = folds1 * 0.5 + folds2 * 0.25;
    float slopeX = (snoise(vec2(p.x * 4.0 + t * 0.4, p.y * 2.0)) - 0.5) * 0.8;
    float slopeY = (snoise(vec2(p.x * 2.0, p.y * 4.0 - t * 0.3)) - 0.5) * 0.8;
    vec3 normal = normalize(vec3(-slopeX - d1 * 0.4, -slopeY - d1 * 0.5, 1.0));

    // Directional light from top-right + ambient warm glow
    vec3 lightDir = normalize(vec3(0.5, 0.7, 0.6));
    vec3 viewDir = vec3(0.0, 0.0, 1.0);
    vec3 halfDir = normalize(lightDir + viewDir);

    float diff = max(0.0, dot(normal, lightDir));
    float spec = pow(max(0.0, dot(normal, halfDir)), 32.0);
    float rim = pow(1.0 - max(0.0, dot(normal, viewDir)), 3.0);

    // Liquid 24k Gold palette
    vec3 goldShadow = vec3(0.18, 0.11, 0.03);
    vec3 goldMid    = vec3(0.78, 0.58, 0.24);
    vec3 goldHi     = vec3(0.98, 0.86, 0.56);
    vec3 goldSpec   = vec3(1.0, 0.96, 0.88);

    vec3 ribbonColor = mix(goldShadow, goldMid, diff * 0.85 + 0.15);
    ribbonColor += goldHi * rim * 0.7;
    ribbonColor += goldSpec * spec * 1.4;

    // Dark crevice shading in deep folds
    float foldShadow = smoothstep(-0.8, 0.4, folds1);
    ribbonColor *= (0.35 + 0.65 * foldShadow);

    color = mix(color, ribbonColor, ribbonMask * 0.92);
  }

  // 3. Secondary Background Silk Drape (Upper Left & Far Top Right billows)
  float bgRibbonY = -0.35 * p.x + 0.35 + 0.18 * sin(p.x * 2.1 + t * 0.4);
  float bgDist = p.y - bgRibbonY;
  float bgMask = smoothstep(0.45, 0.0, abs(bgDist)) * smoothstep(-0.8, -0.2, p.x);

  if (bgMask > 0.001) {
    float bgFold = sin(p.y * 14.0 + p.x * 6.0 + t * 0.6);
    vec3 bgGold = mix(vec3(0.12, 0.07, 0.02), vec3(0.68, 0.48, 0.18), bgFold * 0.5 + 0.5);
    color += bgGold * bgMask * 0.45;
  }

  // 4. Subtle golden ambient light bloom
  float centerDist = length(p - vec2(0.0, -0.05));
  float centerGlow = exp(-centerDist * 1.8) * 0.25;
  color += vec3(0.85, 0.62, 0.25) * centerGlow;

  // 5. Lateral Vignette to protect headline typography on both sides
  float leftVignette = smoothstep(-1.4, -0.4, p.x);
  float rightVignette = smoothstep(1.4, 0.4, p.x);
  float sideDamping = leftVignette * rightVignette;
  color *= mix(0.45, 1.0, sideDamping);

  // 6. Contrast curve & tone map
  color = pow(color, vec3(0.9)); // Slight gamma lift
  color = clamp(color, 0.0, 1.0);

  fragColor = vec4(color, 1.0);
}
`;

export function GoldCurtains() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Request WebGL2 with WebGL1 fallback
    const gl =
      canvas.getContext("webgl2", { alpha: false, antialias: true }) ||
      (canvas.getContext("webgl") as WebGL2RenderingContext | null);

    if (!gl) return;

    // Compile Shader helper
    const createShader = (type: number, source: string) => {
      const shader = gl.createShader(type);
      if (!shader) return null;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error(gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    };

    const vertShader = createShader(gl.VERTEX_SHADER, VERTEX_SHADER);
    const fragShader = createShader(gl.FRAGMENT_SHADER, FRAGMENT_SHADER);
    if (!vertShader || !fragShader) return;

    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vertShader);
    gl.attachShader(program, fragShader);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error(gl.getProgramInfoLog(program));
      return;
    }

    gl.useProgram(program);

    // Fullscreen quad
    const positions = new Float32Array([
      -1, -1,
       1, -1,
      -1,  1,
      -1,  1,
       1, -1,
       1,  1,
    ]);

    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);

    const positionLocation = gl.getAttribLocation(program, "position");
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

    // Uniforms
    const uResolution = gl.getUniformLocation(program, "u_resolution");
    const uTime = gl.getUniformLocation(program, "u_time");
    const uMouse = gl.getUniformLocation(program, "u_mouse");

    let mouseX = 0.5;
    let mouseY = 0.5;
    let targetMouseX = 0.5;
    let targetMouseY = 0.5;

    const onMouseMove = (e: MouseEvent) => {
      targetMouseX = e.clientX / window.innerWidth;
      targetMouseY = 1.0 - e.clientY / window.innerHeight;
    };
    window.addEventListener("mousemove", onMouseMove, { passive: true });

    // Handle high DPI resize
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      const width = Math.floor(canvas.clientWidth * dpr);
      const height = Math.floor(canvas.clientHeight * dpr);
      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
        gl.viewport(0, 0, width, height);
      }
    };
    resize();
    window.addEventListener("resize", resize, { passive: true });

    let animationId: number;
    let startTime = performance.now();
    let isRunning = true;

    const render = (now: number) => {
      if (!isRunning) return;

      // Mouse smoothing
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      const elapsed = (now - startTime) * 0.001;

      gl.useProgram(program);
      gl.uniform2f(uResolution, canvas.width, canvas.height);
      gl.uniform1f(uTime, elapsed);
      gl.uniform2f(uMouse, mouseX, mouseY);

      gl.drawArrays(gl.TRIANGLES, 0, 6);

      animationId = requestAnimationFrame(render);
    };

    animationId = requestAnimationFrame(render);

    const handleVisibility = () => {
      if (document.hidden) {
        isRunning = false;
        cancelAnimationFrame(animationId);
      } else {
        isRunning = true;
        startTime = performance.now();
        animationId = requestAnimationFrame(render);
      }
    };
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      isRunning = false;
      cancelAnimationFrame(animationId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", handleVisibility);
      gl.deleteProgram(program);
      gl.deleteShader(vertShader);
      gl.deleteShader(fragShader);
      gl.deleteBuffer(positionBuffer);
    };
  }, []);

  return <canvas ref={canvasRef} className={styles.canvas} aria-hidden="true" />;
}
