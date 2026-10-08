"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

interface SteelChamberCanvasProps {
  glowIntensity?: number;
  anisoStrength?: number;
  interactive?: boolean;
}

const vertexShader = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`;

const fragmentShader = /* glsl */ `
  precision highp float;
  varying vec2 vUv;
  uniform float uTime;
  uniform vec2 uResolution;
  uniform vec2 uMouse;
  uniform sampler2D uTexture;
  uniform float uHasTexture;
  uniform float uGlowIntensity;
  uniform float uAnisoStrength;

  float hash(vec2 p) {
    p = fract(p * vec2(123.34, 456.21));
    p += dot(p, p + 45.32);
    return fract(p.x * p.y);
  }

  void main() {
    vec2 uv = gl_FragCoord.xy / uResolution.xy;
    float aspect = uResolution.x / uResolution.y;
    float cx = (uv.x - 0.5) * aspect;

    // Subtle pointer parallax drift
    vec2 texUv = uv + (uMouse - 0.5) * 0.018;
    vec4 baseTex = vec4(0.0);
    if (uHasTexture > 0.5) {
      baseTex = texture2D(uTexture, texUv);
    }

    // ── 01. HORIZONTAL ANISOTROPIC GRAIN (Brushed Titanium/Steel micro-streaks) ──
    float lineIndex = floor(uv.y * 620.0);
    float hStreak = hash(vec2(lineIndex, 19.3));
    float hStreak2 = hash(vec2(lineIndex * 1.7 + 3.1, 7.8));
    float anisoNoise = mix(hStreak, hStreak2, 0.5);
    
    // Smooth horizontal grain bands
    float grainBands = 0.85 + 0.30 * sin(uv.y * 880.0 + sin(uv.x * 3.0) * 2.0);
    float fineGrain = anisoNoise * grainBands;

    // ── 02. DUAL CURVED PARABOLIC HORIZONS (Cylindrical Chamber Edges) ──
    // Top Arch: apex around y = 0.22, curving upward toward the sides
    float curveFactor = 0.075;
    float topCurve = 0.22 - curveFactor * (cx * cx);
    float dTop = uv.y - topCurve;

    // Bottom Arch: apex around y = 0.78, curving downward toward the sides
    float botCurve = 0.78 + curveFactor * (cx * cx);
    float dBot = uv.y - botCurve;

    // Interactive pointer light hotspot tracking
    float mouseHotspot = exp(-pow(cx - (uMouse.x - 0.5) * aspect * 1.3, 2.0) * 2.2);
    float t = uTime * 0.25;

    // Specular wave sweeps along the arcs
    float sweepTop = 0.68 + 0.32 * sin(cx * 1.4 - t + 0.8) + mouseHotspot * 0.40;
    float sweepBot = 0.68 + 0.32 * sin(cx * 1.4 + t * 0.9 + 2.1) + mouseHotspot * 0.40;

    // ── 03. RADIANT SPECULAR LIGHT FILAMENTS ──
    // Top Beam layers
    float topCore     = exp(-abs(dTop) * 60.0) * sweepTop;
    float topChampagne= exp(-abs(dTop) * 24.0) * sweepTop;
    float topBronze   = exp(-abs(dTop) * 8.5);
    float topPlateWash= exp(-max(0.0, -dTop) * 4.2) * (0.4 + 0.6 * baseTex.r);

    // Bottom Beam layers
    float botCore     = exp(-abs(dBot) * 60.0) * sweepBot;
    float botChampagne= exp(-abs(dBot) * 24.0) * sweepBot;
    float botBronze   = exp(-abs(dBot) * 8.5);
    float botPlateWash= exp(-max(0.0, dBot) * 4.2) * (0.4 + 0.6 * baseTex.r);

    // ── 04. COLOR PALETTE DEFINITION ──
    vec3 colIncandescent = vec3(1.0, 0.98, 0.95);
    vec3 colChampagne    = vec3(0.96, 0.82, 0.58);
    vec3 colBronze       = vec3(0.68, 0.46, 0.24);
    vec3 colDeepBronze   = vec3(0.26, 0.16, 0.08);
    vec3 colObsidianVoid = vec3(0.008, 0.008, 0.012);
    vec3 colBrushedSteel = vec3(0.20, 0.21, 0.24);

    // ── 05. COMPOSITING THE CHAMBER ──
    vec3 col = colObsidianVoid;

    // Add metallic plate volume from base texture where present
    if (uHasTexture > 0.5) {
      vec3 metallicPlate = baseTex.rgb * vec3(0.65, 0.60, 0.55);
      // Retain plate details in upper and lower zones
      float plateMask = smoothstep(0.10, 0.32, abs(uv.y - 0.5));
      col += metallicPlate * plateMask * 0.65;
    }

    // Top Arc Illumination
    col += colDeepBronze * topPlateWash * 0.75;
    col += colBronze * topBronze * 0.90 * uGlowIntensity;
    col += colChampagne * topChampagne * 1.35 * uGlowIntensity;
    col += colIncandescent * topCore * 1.60 * uGlowIntensity;

    // Bottom Arc Illumination
    col += colDeepBronze * botPlateWash * 0.75;
    col += colBronze * botBronze * 0.90 * uGlowIntensity;
    col += colChampagne * botChampagne * 1.35 * uGlowIntensity;
    col += colIncandescent * botCore * 1.60 * uGlowIntensity;

    // Fine anisotropic brushed grain texture modulation
    float metalSheen = mix(0.88, 1.25, fineGrain * uAnisoStrength);
    col *= metalSheen;

    // Subtle horizontal motion-brushed streaks across central void (anisotropic reflection lines)
    float centerStreak = (fineGrain - 0.5) * 0.025;
    col += vec3(centerStreak);

    // Lateral Curvature Vignette (Darkening towards left & right margins)
    float lateralFalloff = smoothstep(1.30 * aspect, 0.35 * aspect, abs(cx));
    col *= (0.35 + 0.65 * lateralFalloff);

    // Subtle micro film grain
    float grain = (hash(gl_FragCoord.xy + fract(uTime * 7.1)) - 0.5) * 0.012;
    col += vec3(grain);

    gl_FragColor = vec4(max(vec3(0.0), col), 1.0);
  }
`;

export function SteelChamberCanvas({
  glowIntensity = 1.0,
  anisoStrength = 1.0,
  interactive = true,
}: SteelChamberCanvasProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let width = window.innerWidth;
    let height = window.innerHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 1);
    container.appendChild(renderer.domElement);

    // Load base high-res steel plate texture
    const textureLoader = new THREE.TextureLoader();
    let steelTexture: THREE.Texture | null = null;
    let hasTexture = 0;

    const uniforms = {
      uTime: { value: 0 },
      uResolution: { value: new THREE.Vector2(width, height) },
      uMouse: { value: new THREE.Vector2(0.5, 0.5) },
      uTexture: { value: null as THREE.Texture | null },
      uHasTexture: { value: 0 },
      uGlowIntensity: { value: glowIntensity },
      uAnisoStrength: { value: anisoStrength },
    };

    textureLoader.load(
      "/images/steel/plate-symmetric.jpg",
      (tex) => {
        tex.wrapS = THREE.ClampToEdgeWrapping;
        tex.wrapT = THREE.ClampToEdgeWrapping;
        tex.minFilter = THREE.LinearFilter;
        tex.magFilter = THREE.LinearFilter;
        steelTexture = tex;
        uniforms.uTexture.value = tex;
        uniforms.uHasTexture.value = 1.0;
      },
      undefined,
      () => {
        // Fallback to plate-field.jpg if plate-symmetric is not found
        textureLoader.load("/images/steel/plate-field.jpg", (tex2) => {
          tex2.wrapS = THREE.ClampToEdgeWrapping;
          tex2.wrapT = THREE.ClampToEdgeWrapping;
          steelTexture = tex2;
          uniforms.uTexture.value = tex2;
          uniforms.uHasTexture.value = 1.0;
        });
      }
    );

    const geometry = new THREE.PlaneGeometry(2, 2);
    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms,
      depthTest: false,
      depthWrite: false,
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Pointer tracking
    let targetMouseX = 0.5;
    let targetMouseY = 0.5;
    let currentMouseX = 0.5;
    let currentMouseY = 0.5;

    const onPointerMove = (e: MouseEvent) => {
      if (!interactive) return;
      targetMouseX = e.clientX / window.innerWidth;
      targetMouseY = 1.0 - e.clientY / window.innerHeight;
    };
    window.addEventListener("mousemove", onPointerMove, { passive: true });

    const onResize = () => {
      if (!container) return;
      width = window.innerWidth;
      height = window.innerHeight;
      renderer.setSize(width, height);
      uniforms.uResolution.value.set(width, height);
    };
    window.addEventListener("resize", onResize);

    let rafId: number;
    let isRunning = true;
    const startTime = performance.now();

    const animate = () => {
      if (!isRunning) return;
      rafId = requestAnimationFrame(animate);

      const elapsed = (performance.now() - startTime) * 0.001;
      currentMouseX += (targetMouseX - currentMouseX) * 0.06;
      currentMouseY += (targetMouseY - currentMouseY) * 0.06;

      uniforms.uTime.value = elapsed;
      uniforms.uMouse.value.set(currentMouseX, currentMouseY);

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      isRunning = false;
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", onPointerMove);
      window.removeEventListener("resize", onResize);
      if (renderer.domElement) {
        renderer.domElement.remove();
      }
      geometry.dispose();
      material.dispose();
      if (steelTexture) steelTexture.dispose();
      renderer.dispose();
    };
  }, [glowIntensity, anisoStrength, interactive]);

  return (
    <div
      ref={containerRef}
      style={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 0,
        pointerEvents: "none",
        overflow: "hidden",
      }}
      aria-hidden="true"
    />
  );
}
