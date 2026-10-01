"use client";

import { useEffect, useRef } from "react";
import styles from "@/styles/plus-ex/GradientBlindsCanvas.module.css";

interface GradientBlindsProps {
  gradientColors?: string[];
  angle?: number;
  noise?: number;
  blindCount?: number;
  blindMinWidth?: number;
  mouseDampening?: number;
  mirrorGradient?: boolean;
  spotlightRadius?: number;
  spotlightSoftness?: number;
  spotlightOpacity?: number;
  distortAmount?: number;
  shineDirection?: "left" | "right";
  mixBlendMode?: "lighten" | "screen" | "normal" | "color-dodge";
  className?: string;
}

const MAX_COLORS = 8;

function hexToRGB(hex: string): [number, number, number] {
  let c = (hex || "").replace("#", "");
  while (c.length < 6) c += "0";
  c = c.slice(0, 6);
  const r = parseInt(c.slice(0, 2), 16) / 255;
  const g = parseInt(c.slice(2, 4), 16) / 255;
  const b = parseInt(c.slice(4, 6), 16) / 255;
  return [r, g, b];
}

function prepStops(stops?: string[]) {
  const base = (
    stops && stops.length
      ? stops
      : ["#050505", "#1e1608", "#614717", "#c9963a", "#f3cf7a", "#fff5d6"]
  ).slice(0, MAX_COLORS);
  if (base.length === 1) base.push(base[0]);
  while (base.length < MAX_COLORS) base.push(base[base.length - 1]);
  const arr: [number, number, number][] = [];
  for (let i = 0; i < MAX_COLORS; i++) arr.push(hexToRGB(base[i]));
  const count = Math.max(
    2,
    Math.min(MAX_COLORS, stops && stops.length ? stops.length : 2)
  );
  return { arr, count };
}

const VERTEX_SRC = `
attribute vec2 position;
attribute vec2 uv;
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

const FRAGMENT_SRC = `
#ifdef GL_ES
precision highp float;
#endif

uniform vec3 iResolution;
uniform vec2 iMouse;
uniform float iTime;
uniform float uAngle;
uniform float uNoise;
uniform float uBlindCount;
uniform float uSpotlightRadius;
uniform float uSpotlightSoftness;
uniform float uSpotlightOpacity;
uniform float uMirror;
uniform float uDistort;
uniform float uShineFlip;
uniform vec3 uColor0;
uniform vec3 uColor1;
uniform vec3 uColor2;
uniform vec3 uColor3;
uniform vec3 uColor4;
uniform vec3 uColor5;
uniform vec3 uColor6;
uniform vec3 uColor7;
uniform int uColorCount;
varying vec2 vUv;

float rand(vec2 co) {
  return fract(sin(dot(co, vec2(12.9898, 78.233))) * 43758.5453);
}

vec2 rotate2D(vec2 p, float a) {
  float c = cos(a);
  float s = sin(a);
  return mat2(c, -s, s, c) * p;
}

vec3 getGradientColor(float t) {
  float tt = clamp(t, 0.0, 1.0);
  int count = uColorCount;
  if (count < 2) count = 2;
  float scaled = tt * float(count - 1);
  float seg = floor(scaled);
  float f = fract(scaled);

  if (seg < 1.0) return mix(uColor0, uColor1, f);
  if (seg < 2.0 && count > 2) return mix(uColor1, uColor2, f);
  if (seg < 3.0 && count > 3) return mix(uColor2, uColor3, f);
  if (seg < 4.0 && count > 4) return mix(uColor3, uColor4, f);
  if (seg < 5.0 && count > 5) return mix(uColor4, uColor5, f);
  if (seg < 6.0 && count > 6) return mix(uColor5, uColor6, f);
  if (seg < 7.0 && count > 7) return mix(uColor6, uColor7, f);
  if (count > 7) return uColor7;
  if (count > 6) return uColor6;
  if (count > 5) return uColor5;
  if (count > 4) return uColor4;
  if (count > 3) return uColor3;
  if (count > 2) return uColor2;
  return uColor1;
}

void mainImage(out vec4 fragColor, in vec2 fragCoord) {
  vec2 uv0 = fragCoord.xy / iResolution.xy;
  float aspect = iResolution.x / iResolution.y;
  vec2 p = uv0 * 2.0 - 1.0;
  p.x *= aspect;
  vec2 pr = rotate2D(p, uAngle);
  pr.x /= aspect;
  vec2 uv = pr * 0.5 + 0.5;
  vec2 uvMod = uv;

  if (uDistort > 0.0) {
    float a = uvMod.y * 6.0;
    float b = uvMod.x * 6.0;
    float w = 0.01 * uDistort;
    uvMod.x += sin(a) * w;
    uvMod.y += cos(b) * w;
  }

  float t = uvMod.x;
  if (uMirror > 0.5) {
    t = 1.0 - abs(1.0 - 2.0 * fract(t));
  }

  vec3 base = getGradientColor(t);
  vec2 offset = vec2(iMouse.x / iResolution.x, iMouse.y / iResolution.y);
  float d = length(uv0 - offset);
  float r = max(uSpotlightRadius, 1e-4);
  float dn = d / r;
  float spot = (1.0 - 2.0 * pow(clamp(dn, 0.0, 1.0), uSpotlightSoftness)) * uSpotlightOpacity;
  spot = max(0.0, spot);
  vec3 cir = vec3(spot);

  float stripe = fract(uvMod.x * max(uBlindCount, 1.0));
  if (uShineFlip > 0.5) stripe = 1.0 - stripe;
  vec3 ran = vec3(stripe * 0.45);

  vec3 col = cir * 0.6 + base * 0.85 + (cir * base * 0.8) - ran;
  col += (rand(gl_FragCoord.xy + iTime) - 0.5) * uNoise;
  
  fragColor = vec4(clamp(col, 0.0, 1.0), 1.0);
}

void main() {
  vec4 color;
  mainImage(color, vUv * iResolution.xy);
  gl_FragColor = color;
}
`;

export function GradientBlindsCanvas({
  gradientColors = ["#000000", "#140e04", "#4a3510", "#a8782a", "#f3cf7a", "#fff8e0"],
  angle = -22,
  noise = 0.12,
  blindCount = 14,
  blindMinWidth = 60,
  mouseDampening = 0.18,
  mirrorGradient = false,
  spotlightRadius = 0.65,
  spotlightSoftness = 1.2,
  spotlightOpacity = 0.95,
  distortAmount = 0.25,
  shineDirection = "left",
  mixBlendMode = "lighten",
  className,
}: GradientBlindsProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const gl =
      canvas.getContext("webgl", { alpha: true, antialias: true }) ||
      (canvas.getContext("experimental-webgl", {
        alpha: true,
        antialias: true,
      }) as WebGLRenderingContext | null);

    if (!gl) return;

    const compileShader = (type: number, src: string) => {
      const sh = gl.createShader(type);
      if (!sh) return null;
      gl.shaderSource(sh, src);
      gl.compileShader(sh);
      if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) {
        gl.deleteShader(sh);
        return null;
      }
      return sh;
    };

    const vs = compileShader(gl.VERTEX_SHADER, VERTEX_SRC);
    const fs = compileShader(gl.FRAGMENT_SHADER, FRAGMENT_SRC);
    if (!vs || !fs) return;

    const prog = gl.createProgram();
    if (!prog) return;
    gl.attachShader(prog, vs);
    gl.attachShader(prog, fs);
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
      gl.deleteProgram(prog);
      return;
    }
    gl.useProgram(prog);

    const posLoc = gl.getAttribLocation(prog, "position");
    const uvLoc = gl.getAttribLocation(prog, "uv");
    const iResolutionLoc = gl.getUniformLocation(prog, "iResolution");
    const iMouseLoc = gl.getUniformLocation(prog, "iMouse");
    const iTimeLoc = gl.getUniformLocation(prog, "iTime");
    const uAngleLoc = gl.getUniformLocation(prog, "uAngle");
    const uNoiseLoc = gl.getUniformLocation(prog, "uNoise");
    const uBlindCountLoc = gl.getUniformLocation(prog, "uBlindCount");
    const uSpotlightRadiusLoc = gl.getUniformLocation(prog, "uSpotlightRadius");
    const uSpotlightSoftnessLoc = gl.getUniformLocation(prog, "uSpotlightSoftness");
    const uSpotlightOpacityLoc = gl.getUniformLocation(prog, "uSpotlightOpacity");
    const uMirrorLoc = gl.getUniformLocation(prog, "uMirror");
    const uDistortLoc = gl.getUniformLocation(prog, "uDistort");
    const uShineFlipLoc = gl.getUniformLocation(prog, "uShineFlip");
    const uColorLocs = [
      gl.getUniformLocation(prog, "uColor0"),
      gl.getUniformLocation(prog, "uColor1"),
      gl.getUniformLocation(prog, "uColor2"),
      gl.getUniformLocation(prog, "uColor3"),
      gl.getUniformLocation(prog, "uColor4"),
      gl.getUniformLocation(prog, "uColor5"),
      gl.getUniformLocation(prog, "uColor6"),
      gl.getUniformLocation(prog, "uColor7"),
    ];
    const uColorCountLoc = gl.getUniformLocation(prog, "uColorCount");

    const posBuf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, posBuf);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 3, -1, -1, 3]),
      gl.STATIC_DRAW
    );
    gl.enableVertexAttribArray(posLoc);
    gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

    const uvBuf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, uvBuf);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([0, 0, 2, 0, 0, 2]),
      gl.STATIC_DRAW
    );
    gl.enableVertexAttribArray(uvLoc);
    gl.vertexAttribPointer(uvLoc, 2, gl.FLOAT, false, 0, 0);

    const state = {
      mouse: [0, 0],
      mouseTarget: [0, 0],
      lastTime: 0,
      firstResize: true,
      raf: 0,
      running: true,
    };

    const stopInfo = prepStops(gradientColors);

    const setUniforms = () => {
      gl.uniform1f(uAngleLoc, (angle * Math.PI) / 180);
      gl.uniform1f(uNoiseLoc, noise);
      gl.uniform1f(uSpotlightRadiusLoc, spotlightRadius);
      gl.uniform1f(uSpotlightSoftnessLoc, spotlightSoftness);
      gl.uniform1f(uSpotlightOpacityLoc, spotlightOpacity);
      gl.uniform1f(uMirrorLoc, mirrorGradient ? 1 : 0);
      gl.uniform1f(uDistortLoc, distortAmount);
      gl.uniform1f(uShineFlipLoc, shineDirection === "right" ? 1 : 0);
      gl.uniform1i(uColorCountLoc, stopInfo.count);
      for (let i = 0; i < 8; i++) {
        gl.uniform3fv(uColorLocs[i], new Float32Array(stopInfo.arr[i]));
      }
    };

    const resize = () => {
      const rect = container.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2.0);
      const w = Math.max(1, Math.floor(rect.width * dpr));
      const h = Math.max(1, Math.floor(rect.height * dpr));

      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
        gl.viewport(0, 0, w, h);
      }

      gl.uniform3fv(iResolutionLoc, new Float32Array([w, h, 1]));

      let effective: number;
      if (blindMinWidth > 0) {
        const maxByMinWidth = Math.max(1, Math.floor(rect.width / blindMinWidth));
        effective = blindCount ? Math.min(blindCount, maxByMinWidth) : maxByMinWidth;
      } else {
        effective = blindCount;
      }
      gl.uniform1f(uBlindCountLoc, Math.max(1, effective));

      if (state.firstResize) {
        state.firstResize = false;
        const cx = w / 2;
        const cy = h / 2;
        state.mouse[0] = cx;
        state.mouse[1] = cy;
        state.mouseTarget[0] = cx;
        state.mouseTarget[1] = cy;
        gl.uniform2fv(iMouseLoc, new Float32Array(state.mouse));
      }
    };

    setUniforms();
    resize();

    const ro = new ResizeObserver(resize);
    ro.observe(container);

    const onPointerMove = (e: MouseEvent | TouchEvent) => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2.0);
      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
      const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;

      const x = (clientX - rect.left) * dpr;
      const y = (rect.height - (clientY - rect.top)) * dpr;
      state.mouseTarget[0] = x;
      state.mouseTarget[1] = y;

      if (mouseDampening <= 0) {
        state.mouse[0] = x;
        state.mouse[1] = y;
        gl.uniform2fv(iMouseLoc, new Float32Array(state.mouse));
      }
    };

    window.addEventListener("mousemove", onPointerMove, { passive: true });
    window.addEventListener("touchmove", onPointerMove, { passive: true });

    const loop = (t: number) => {
      if (!state.running) return;
      state.raf = requestAnimationFrame(loop);
      gl.uniform1f(iTimeLoc, t * 1e-3);

      if (mouseDampening > 0) {
        if (!state.lastTime) state.lastTime = t;
        const dt = (t - state.lastTime) / 1e3;
        state.lastTime = t;
        const tau = Math.max(1e-4, mouseDampening);
        const factor = 1 - Math.exp(-dt / tau);
        state.mouse[0] += (state.mouseTarget[0] - state.mouse[0]) * Math.min(1, factor);
        state.mouse[1] += (state.mouseTarget[1] - state.mouse[1]) * Math.min(1, factor);
        gl.uniform2fv(iMouseLoc, new Float32Array(state.mouse));
      } else {
        state.lastTime = t;
      }

      gl.drawArrays(gl.TRIANGLES, 0, 3);
    };

    state.raf = requestAnimationFrame(loop);

    return () => {
      state.running = false;
      cancelAnimationFrame(state.raf);
      window.removeEventListener("mousemove", onPointerMove);
      window.removeEventListener("touchmove", onPointerMove);
      ro.disconnect();
      gl.deleteBuffer(posBuf);
      gl.deleteBuffer(uvBuf);
      gl.deleteProgram(prog);
      gl.deleteShader(vs);
      gl.deleteShader(fs);
    };
  }, [
    gradientColors,
    angle,
    noise,
    blindCount,
    blindMinWidth,
    mouseDampening,
    mirrorGradient,
    spotlightRadius,
    spotlightSoftness,
    spotlightOpacity,
    distortAmount,
    shineDirection,
  ]);

  return (
    <div
      ref={containerRef}
      className={`${styles.container} ${className ?? ""}`}
      style={{ mixBlendMode }}
      aria-hidden="true"
    >
      <canvas ref={canvasRef} className={styles.canvas} />
    </div>
  );
}
