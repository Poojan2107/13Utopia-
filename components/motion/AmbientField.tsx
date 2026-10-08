"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import styles from "@/styles/motion/AmbientField.module.css";

interface AmbientFieldProps {
  showEmblem?: boolean;
  emblemOffsetX?: number;
}

/**
 * 13 UTOPIA Signature Atmosphere:
 * 1. Liquid bronze silk — flowing satin ribbons with champagne specular streaks
 * 2. Dark content void at center for legibility
 * 3. Optional liquid "13" emblem with scroll & idle motion on inner pages
 */
export function AmbientField({ showEmblem = false, emblemOffsetX = 0 }: AmbientFieldProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    const isMobile = width < 768;

    // Perspective Camera for 3D Emblem & Stardust
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 100);
    camera.position.set(0, 0, 11.2);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });

    const dpr = Math.min(window.devicePixelRatio || 1, isMobile ? 1.0 : 1.5);
    renderer.setPixelRatio(dpr);
    renderer.setSize(width, height);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.55;
    renderer.setClearColor(0x000000, 1);
    container.appendChild(renderer.domElement);

    // ── 01. LIQUID BRONZE SILK SHADER ──
    const nebulaVertexShader = `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position.xy, 0.0, 1.0);
      }
    `;

    const nebulaFragmentShader = `
      precision mediump float;
      uniform float uTime;
      uniform vec2 uResolution;
      uniform vec2 uMouse;
      uniform float uScroll;
      varying vec2 vUv;

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

      float hash(vec2 p) {
        p = fract(p * vec2(123.34, 456.21));
        p += dot(p, p + 45.32);
        return fract(p.x * p.y);
      }

      void main() {
        vec2 centeredUv = (gl_FragCoord.xy - 0.5 * uResolution.xy) / min(uResolution.x, uResolution.y);
        float r = length(centeredUv);
        float aspect = uResolution.x / uResolution.y;

        // Soft elliptical void — widens at center for legibility, tapers at edges
        float centerVoid = 0.08 + 0.92 * smoothstep(0.10, 0.72, r);

        // Outer vignette darkening — pulls the scene into deep cosmic black at corners
        float vignette = 1.0 - smoothstep(0.42, 1.05, r);

        // Pointer parallax with fixed viewport framing
        vec2 drift = uMouse * 0.06;
        vec2 uv = centeredUv + drift;
        // Scroll dynamically drives silk wave undulation without translating the field off-screen
        float t = uTime * 0.048 + uScroll * 0.00010;
        float tFast = uTime * 0.090 + uScroll * 0.00015;

        // Gentle tilt — silk sweeps slightly downhill left to right
        float ang = -0.16;
        mat2 rot = mat2(cos(ang), -sin(ang), sin(ang), cos(ang));
        vec2 suv = rot * uv;

        // ── LAYER 1: PRIMARY LIQUID SILK RIBBONS (9 bands, broad satin volume) ──
        float body = 0.0;   // broad satin volume
        float crest = 0.0;  // sharp folded edge highlight
        float hot = 0.0;    // traveling specular hotspot

        for (int i = 0; i < 9; i++) {
          float fi = float(i);
          float yOff = (fi - 4.0) * 0.155;
          float wave =
            sin(suv.x * 1.35 + t * (0.75 + fi * 0.11) + fi * 2.1) * 0.145 +
            cos(suv.x * 2.60 - t * 0.55 + fi * 0.9) * 0.060 +
            sin(suv.x * 0.65 + t * 0.30 + fi * 1.4) * 0.075 +
            cos(suv.x * 4.20 + t * 1.10 + fi * 0.7) * 0.022;
          float d = suv.y - yOff - wave;

          float g = exp(-abs(d) * 6.5);
          float c = exp(-abs(d) * 28.0);
          float m = 0.5 + 0.5 * sin(suv.x * 2.1 - tFast * (1.3 + fi * 0.18) + fi * 2.4);
          m = m * m * m;

          body  += g * (0.28 + 0.72 * m);
          crest += c * (0.20 + 0.80 * m);
          hot   += c * m * (0.85 + 0.15 * sin(tFast * 2.0 + fi));
        }

        // ── LAYER 2: DEEP SLOW AURORA WISPS (cross-diagonal bronze clouds) ──
        float aurora = 0.0;
        float angB = 0.55;
        mat2 rotB = mat2(cos(angB), -sin(angB), sin(angB), cos(angB));
        vec2 suvB = rotB * uv;
        float tB = uTime * 0.022;
        for (int j = 0; j < 5; j++) {
          float fj = float(j);
          float yOffB = (fj - 2.0) * 0.32;
          float waveB =
            sin(suvB.x * 0.80 + tB * (0.45 + fj * 0.12) + fj * 1.7) * 0.22 +
            cos(suvB.x * 1.60 - tB * 0.38 + fj * 0.6) * 0.10;
          float dB = suvB.y - yOffB - waveB;
          float gB = exp(-abs(dB) * 3.8);
          aurora += gB * 0.18;
        }

        // ── BRONZE SILK PALETTE (richer, more saturated) ──
        vec3 colVoid        = vec3(0.012, 0.008, 0.005);  // near-black obsidian
        vec3 colDeepBronze  = vec3(0.18,  0.11,  0.06);   // dark warm amber
        vec3 colBronze      = vec3(0.52,  0.36,  0.18);   // rich bronze
        vec3 colChampagne   = vec3(0.88,  0.70,  0.44);   // champagne gold
        vec3 colBlaze       = vec3(1.00,  0.90,  0.72);   // near-white incandescent core
        vec3 colStar        = vec3(0.96,  0.97,  1.00);   // cold stellar white
        vec3 colAurora      = vec3(0.35,  0.22,  0.10);   // deep amber aurora cloud

        // Base — deep obsidian void
        vec3 col = colVoid;

        // Aurora layer bleeds warm amber into the background
        col = mix(col, colAurora, aurora * 0.55 * (1.0 - centerVoid * 0.4));

        // Primary silk ribbons
        col += colDeepBronze * body * 0.70;
        col += colBronze     * crest * 0.80;
        col += colChampagne  * hot * 1.15;
        col += colBlaze      * pow(hot, 2.5) * 0.85;
        col += colStar       * pow(hot, 4.5) * 0.50;

        // Apply center void — keeps hero copy legible
        col *= mix(0.12, 1.0, centerVoid);

        // Outer vignette — cinematic black crush at edges
        col *= vignette;

        // ── MICRO-FIBER GRAIN riding the silk ──
        float grit = snoise(vec3(suv * 10.0, t * 0.9)) * 0.5 + 0.5;
        col *= 0.82 + 0.32 * grit;

        // ── DENSE SHARP STARFIELD ──
        vec2 sUv = uv * 110.0;
        vec2 sId = floor(sUv);
        vec2 sGv = fract(sUv) - 0.5;
        float sH = hash(sId);
        if (sH > 0.80) {
          float ds = length(sGv);
          float size = mix(0.026, 0.007, sH);
          float sparkle = smoothstep(size, size * 0.12, ds);
          float twinkle = 0.50 + 0.50 * sin(uTime * 2.6 + sH * 6.28);
          float starBrightness = mix(0.22, 0.65, sH);
          // Warm golden tint for stars near silk, cold white for outliers
          vec3 starCol = mix(colChampagne, colStar, smoothstep(0.80, 0.95, sH));
          col += starCol * sparkle * twinkle * starBrightness * vignette;
        }

        // ── SECONDARY MICRO STAR LAYER ──
        vec2 s2Uv = uv * 195.0 + 29.7;
        vec2 s2Id = floor(s2Uv);
        vec2 s2Gv = fract(s2Uv) - 0.5;
        float s2H = hash(s2Id + 5.3);
        if (s2H > 0.89) {
          float d2 = length(s2Gv);
          float spark2 = smoothstep(0.016, 0.002, d2);
          float twinkle2 = 0.60 + 0.40 * sin(uTime * 1.8 + s2H * 9.42);
          col += colStar * spark2 * twinkle2 * 0.35 * vignette;
        }

        // ── SPECULAR SHIMMER: traveling hotspot across the ribbons ──
        float shimmerPhase = uTime * 0.28 + uMouse.x * 1.2;
        float shimmerX = sin(shimmerPhase) * 0.9;
        float shimmerDist = length(vec2(uv.x - shimmerX, uv.y * 0.4));
        float shimmer = exp(-shimmerDist * shimmerDist * 18.0) * 0.45;
        col += colChampagne * shimmer * hot * centerVoid;

        // ── FINE FILM GRAIN (cinematic texture) ──
        float grain = (hash(gl_FragCoord.xy + fract(uTime * 11.3)) - 0.5) * 0.018;
        col += vec3(grain);

        gl_FragColor = vec4(clamp(col, 0.0, 1.0), 1.0);
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
      depthTest: false,
      depthWrite: false,
    });

    const bgScene = new THREE.Scene();
    const bgCamera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const bgMesh = new THREE.Mesh(nebulaGeo, nebulaMat);
    bgScene.add(bgMesh);

    // ── 02. PARTICULATE SYSTEM ──
    const pCanvas = document.createElement("canvas");
    pCanvas.width = 32;
    pCanvas.height = 32;
    const pCtx = pCanvas.getContext("2d");
    if (pCtx) {
      const grad = pCtx.createRadialGradient(16, 16, 0, 16, 16, 16);
      grad.addColorStop(0, "rgba(255, 236, 210, 0.70)");
      grad.addColorStop(0.3, "rgba(200, 150, 100, 0.28)");
      grad.addColorStop(1, "rgba(0, 0, 0, 0)");
      pCtx.fillStyle = grad;
      pCtx.fillRect(0, 0, 32, 32);
    }
    const particleTexture = new THREE.CanvasTexture(pCanvas);

    const deepDustCount = isMobile ? 110 : 220;
    const deepDustGeo = new THREE.BufferGeometry();
    const deepDustPositions = new Float32Array(deepDustCount * 3);
    const deepDustVelocities: Array<{ vx: number; vy: number; vz: number }> = [];

    for (let i = 0; i < deepDustCount; i++) {
      deepDustPositions[i * 3] = (Math.random() - 0.5) * 32.0;
      deepDustPositions[i * 3 + 1] = (Math.random() - 0.5) * 22.0;
      deepDustPositions[i * 3 + 2] = (Math.random() - 0.5) * 14.0;

      deepDustVelocities.push({
        vx: (Math.random() - 0.5) * 0.0015,
        vy: 0.0012 + Math.random() * 0.0035,
        vz: (Math.random() - 0.5) * 0.0015,
      });
    }

    deepDustGeo.setAttribute("position", new THREE.BufferAttribute(deepDustPositions, 3));

    const deepDustMat = new THREE.PointsMaterial({
      size: 0.042,
      map: particleTexture,
      color: new THREE.Color(0xf0c880),
      transparent: true,
      opacity: 0.22,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const deepDustSystem = new THREE.Points(deepDustGeo, deepDustMat);
    scene.add(deepDustSystem);

    let envRenderTarget: THREE.WebGLRenderTarget | null = null;
    let liquidNormalMap: THREE.CanvasTexture | null = null;
    let liquidRoughnessMap: THREE.CanvasTexture | null = null;

    if (showEmblem) {
      // ── 01. PROCEDURAL LIQUID CHROME SMOOTH WAVE NORMAL & ROUGHNESS MAPS ──
      const createLiquidMaps = () => {
        const size = 1024;
        const normalCanvas = document.createElement("canvas");
        normalCanvas.width = size;
        normalCanvas.height = size;
        const nCtx = normalCanvas.getContext("2d");

        const roughCanvas = document.createElement("canvas");
        roughCanvas.width = size;
        roughCanvas.height = size;
        const rCtx = roughCanvas.getContext("2d");

        if (!nCtx || !rCtx) return { normalMap: null, roughnessMap: null };

        const nImgData = nCtx.createImageData(size, size);
        const nData = nImgData.data;

        const rImgData = rCtx.createImageData(size, size);
        const rData = rImgData.data;

        const heights = new Float32Array(size * size);
        for (let y = 0; y < size; y++) {
          const ny = (y / size) * Math.PI * 3.0;
          for (let x = 0; x < size; x++) {
            const nx = (x / size) * Math.PI * 3.0;

            const wave1 = Math.sin(nx * 1.1 + Math.sin(ny * 1.3) * 1.8);
            const wave2 = Math.cos(nx * 2.0 - ny * 1.1 + Math.sin(nx * 0.9) * 1.2);
            const wave3 = Math.sin((nx + ny) * 1.4 + Math.sin(nx * 2.2) * 0.8);
            const softSheen = Math.sin(nx * 6.0 + ny * 2.0) * 0.12;

            const h = (wave1 * 0.45 + wave2 * 0.35 + wave3 * 0.15 + softSheen) * 0.5 + 0.5;
            heights[y * size + x] = h;
          }
        }

        const strength = 1.8;
        for (let y = 0; y < size; y++) {
          for (let x = 0; x < size; x++) {
            const xL = (x - 1 + size) % size;
            const xR = (x + 1) % size;
            const yU = (y - 1 + size) % size;
            const yD = (y + 1) % size;

            const dX = (heights[y * size + xR] - heights[y * size + xL]) * strength;
            const dY = (heights[yD * size + x] - heights[yU * size + x]) * strength;

            const len = Math.sqrt(dX * dX + dY * dY + 1.0);
            const nx = -dX / len;
            const ny = -dY / len;
            const nz = 1.0 / len;

            const idx = (y * size + x) * 4;
            nData[idx]     = Math.floor((nx * 0.5 + 0.5) * 255);
            nData[idx + 1] = Math.floor((ny * 0.5 + 0.5) * 255);
            nData[idx + 2] = Math.floor((nz * 0.5 + 0.5) * 255);
            nData[idx + 3] = 255;

            const hVal = heights[y * size + x];
            const roughnessVal = Math.floor((0.06 + (1.0 - hVal) * 0.08) * 255);
            rData[idx]     = roughnessVal;
            rData[idx + 1] = roughnessVal;
            rData[idx + 2] = roughnessVal;
            rData[idx + 3] = 255;
          }
        }

        nCtx.putImageData(nImgData, 0, 0);
        rCtx.putImageData(rImgData, 0, 0);

        const normalMap = new THREE.CanvasTexture(normalCanvas);
        normalMap.wrapS = THREE.RepeatWrapping;
        normalMap.wrapT = THREE.RepeatWrapping;
        normalMap.repeat.set(1.0, 1.0);
        normalMap.needsUpdate = true;

        const roughnessMap = new THREE.CanvasTexture(roughCanvas);
        roughnessMap.wrapS = THREE.RepeatWrapping;
        roughnessMap.wrapT = THREE.RepeatWrapping;
        roughnessMap.repeat.set(1.0, 1.0);
        roughnessMap.needsUpdate = true;

        return { normalMap, roughnessMap };
      };

      const maps = createLiquidMaps();
      liquidNormalMap = maps.normalMap;
      liquidRoughnessMap = maps.roughnessMap;

      const pmremGenerator = new THREE.PMREMGenerator(renderer);
      pmremGenerator.compileEquirectangularShader();

      const envCanvas = document.createElement("canvas");
      envCanvas.width = 1024;
      envCanvas.height = 512;
      const ctx = envCanvas.getContext("2d");
      if (ctx) {
        const bgGrad = ctx.createLinearGradient(0, 0, 0, 512);
        bgGrad.addColorStop(0, "#1a1d24");
        bgGrad.addColorStop(0.35, "#303642");
        bgGrad.addColorStop(0.50, "#505869");
        bgGrad.addColorStop(0.65, "#303642");
        bgGrad.addColorStop(1, "#12141a");
        ctx.fillStyle = bgGrad;
        ctx.fillRect(0, 0, 1024, 512);

        const softbox = ctx.createRadialGradient(700, 120, 20, 700, 120, 320);
        softbox.addColorStop(0, "rgba(255, 255, 255, 1.0)");
        softbox.addColorStop(0.35, "rgba(240, 246, 255, 0.90)");
        softbox.addColorStop(0.70, "rgba(190, 210, 235, 0.35)");
        softbox.addColorStop(1, "rgba(0, 0, 0, 0)");
        ctx.fillStyle = softbox;
        ctx.fillRect(0, 0, 1024, 512);

        const leftFill = ctx.createRadialGradient(250, 220, 10, 250, 220, 260);
        leftFill.addColorStop(0, "rgba(230, 240, 255, 0.85)");
        leftFill.addColorStop(0.5, "rgba(180, 205, 235, 0.40)");
        leftFill.addColorStop(1, "rgba(0, 0, 0, 0)");
        ctx.fillStyle = leftFill;
        ctx.fillRect(0, 0, 1024, 512);

        const horizon = ctx.createLinearGradient(0, 240, 0, 272);
        horizon.addColorStop(0, "rgba(0, 0, 0, 0)");
        horizon.addColorStop(0.5, "rgba(255, 255, 255, 0.90)");
        horizon.addColorStop(1, "rgba(0, 0, 0, 0)");
        ctx.fillStyle = horizon;
        ctx.fillRect(0, 240, 1024, 32);
      }

      const envTexture = new THREE.CanvasTexture(envCanvas);
      envTexture.mapping = THREE.EquirectangularReflectionMapping;
      envRenderTarget = pmremGenerator.fromEquirectangular(envTexture);
      envTexture.dispose();
      pmremGenerator.dispose();
      scene.environment = envRenderTarget.texture;
    }

    // ── 03. CENTERED 3D "13" EMBLEM IN CONTINUOUS MOTION ──
    let emblemGroup: THREE.Group | null = null;
    let oneGeo: THREE.ExtrudeGeometry | null = null;
    let threeGeo: THREE.ExtrudeGeometry | null = null;
    let matOne: THREE.MeshPhysicalMaterial | null = null;
    let matThree: THREE.MeshPhysicalMaterial | null = null;
    let mouseLight: THREE.PointLight | null = null;

    if (showEmblem) {
      emblemGroup = new THREE.Group();

      const createOneShape = () => {
        const shape = new THREE.Shape();
        const topR = 0.44;
        const botR = 0.68;
        const topY = 2.62;
        const botY = -2.42;

        shape.moveTo(-botR, botY);
        shape.lineTo(-topR, topY);
        shape.absarc(0, topY, topR, Math.PI, 0, true);
        shape.lineTo(botR, botY);
        shape.absarc(0, botY, botR, 0, Math.PI, true);
        shape.closePath();
        return shape;
      };

      const createThreeShape = () => {
        const shape = new THREE.Shape();
        shape.moveTo(-0.45, 2.82);
        shape.bezierCurveTo(0.30, 3.12, 1.30, 3.08, 1.88, 2.48);
        shape.bezierCurveTo(2.38, 1.95, 2.28, 1.12, 1.72, 0.52);
        shape.bezierCurveTo(1.32, 0.12, 1.12, 0.02, 1.18, -0.02);
        shape.bezierCurveTo(1.38, -0.22, 2.18, -0.68, 2.32, -1.38);
        shape.bezierCurveTo(2.46, -2.18, 1.78, -3.12, 0.62, -3.12);
        shape.bezierCurveTo(-0.18, -3.12, -0.65, -2.82, -0.92, -2.32);
        shape.bezierCurveTo(-1.18, -1.82, -1.02, -1.32, -0.52, -1.38);
        shape.bezierCurveTo(0.18, -1.42, 0.88, -1.68, 1.28, -1.32);
        shape.bezierCurveTo(1.58, -1.02, 1.48, -0.42, 0.98, -0.12);
        shape.bezierCurveTo(0.58, 0.12, 0.22, 0.18, 0.18, 0.08);
        shape.bezierCurveTo(0.12, -0.02, 0.38, 0.58, 0.78, 0.98);
        shape.bezierCurveTo(1.32, 1.48, 1.28, 1.98, 0.88, 2.18);
        shape.bezierCurveTo(0.38, 2.38, -0.12, 2.18, -0.48, 1.88);
        shape.bezierCurveTo(-0.95, 1.92, -0.95, 2.78, -0.45, 2.82);
        shape.closePath();
        return shape;
      };

      const extrudeSettings = {
        steps: 1,
        depth: 0.96,
        bevelEnabled: true,
        bevelThickness: 0.085,
        bevelSize: 0.075,
        bevelOffset: 0,
        bevelSegments: 6,
      };

      matOne = new THREE.MeshPhysicalMaterial({
        color: new THREE.Color(0x1a1614),
        emissive: new THREE.Color(0x0a0705),
        roughness: 0.13,
        metalness: 0.93,
        clearcoat: 1.0,
        clearcoatRoughness: 0.04,
        reflectivity: 1.0,
        ior: 2.5,
        iridescence: 0.28,
        iridescenceIOR: 1.38,
        sheen: 0.55,
        sheenColor: new THREE.Color(0xd6ad78),
        sheenRoughness: 0.25,
        envMapIntensity: 2.2,
        normalMap: liquidNormalMap || undefined,
        normalScale: new THREE.Vector2(0.35, 0.35),
        roughnessMap: liquidRoughnessMap || undefined,
        transparent: true,
        opacity: 1.0,
      });

      matThree = new THREE.MeshPhysicalMaterial({
        color: new THREE.Color(0x161311),
        emissive: new THREE.Color(0x080604),
        roughness: 0.13,
        metalness: 0.93,
        clearcoat: 1.0,
        clearcoatRoughness: 0.04,
        reflectivity: 1.0,
        ior: 2.5,
        iridescence: 0.28,
        iridescenceIOR: 1.38,
        sheen: 0.55,
        sheenColor: new THREE.Color(0xd6ad78),
        sheenRoughness: 0.25,
        envMapIntensity: 2.2,
        normalMap: liquidNormalMap || undefined,
        normalScale: new THREE.Vector2(0.35, 0.35),
        roughnessMap: liquidRoughnessMap || undefined,
        transparent: true,
        opacity: 1.0,
      });

      oneGeo = new THREE.ExtrudeGeometry(createOneShape(), extrudeSettings);
      oneGeo.center();
      const oneMesh = new THREE.Mesh(oneGeo, matOne);
      oneMesh.position.set(-1.85, 0, 0);
      emblemGroup.add(oneMesh);

      threeGeo = new THREE.ExtrudeGeometry(createThreeShape(), extrudeSettings);
      threeGeo.center();
      const threeMesh = new THREE.Mesh(threeGeo, matThree);
      threeMesh.position.set(0.95, 0, 0);
      emblemGroup.add(threeMesh);

      // Precisely center the combined geometry to (0,0,0)
      const emblemBox = new THREE.Box3().setFromObject(emblemGroup);
      const emblemCenter = new THREE.Vector3();
      emblemBox.getCenter(emblemCenter);
      oneMesh.position.x -= emblemCenter.x;
      oneMesh.position.y -= emblemCenter.y;
      threeMesh.position.x -= emblemCenter.x;
      threeMesh.position.y -= emblemCenter.y;

      // Dead center in screen
      emblemGroup.position.set(0, 0, 0);
      const initialScale = isMobile ? 0.72 : 0.95;
      emblemGroup.scale.set(initialScale, initialScale, initialScale);
      scene.add(emblemGroup);

      // Studio Lighting for 3D Emblem matching liquid bronze silk
      const ambientLight = new THREE.AmbientLight(0x2e2016, 2.0);
      scene.add(ambientLight);

      const keyLight = new THREE.DirectionalLight(0xffecd2, 5.0);
      keyLight.position.set(6, 8, 7);
      scene.add(keyLight);

      const fillLight = new THREE.DirectionalLight(0xe8ba80, 3.2);
      fillLight.position.set(-6, 3, 5);
      scene.add(fillLight);

      const rimLight = new THREE.DirectionalLight(0xf6d4a0, 6.5);
      rimLight.position.set(3, -5, -2);
      scene.add(rimLight);

      const topLight = new THREE.DirectionalLight(0xfff2de, 3.5);
      topLight.position.set(0, 8, 2);
      scene.add(topLight);

      mouseLight = new THREE.PointLight(0xffe2b8, 8.0, 18);
      mouseLight.position.set(0, 0, 4);
      scene.add(mouseLight);
    }

    // ── 04. TRACKERS & RENDER LOOP ──
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;
    let smoothScrollY = 0;
    let currentScrollY = 0;

    const onPointerMove = (e: MouseEvent) => {
      targetMouseX = (e.clientX / window.innerWidth) * 2 - 1;
      targetMouseY = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", onPointerMove, { passive: true });

    const onTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        targetMouseX = (e.touches[0].clientX / window.innerWidth) * 2 - 1;
        targetMouseY = -(e.touches[0].clientY / window.innerHeight) * 2 + 1;
      }
    };
    window.addEventListener("touchmove", onTouchMove, { passive: true });

    const onScroll = () => {
      currentScrollY = window.scrollY || document.documentElement.scrollTop;
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

      if (emblemGroup) {
        const resScale = width < 768 ? 0.72 : 0.95;
        emblemGroup.scale.set(resScale, resScale, resScale);
      }
    };
    window.addEventListener("resize", onResize);

    let rafId: number;
    let isRunning = true;
    const startTime = performance.now();
    let lastSmoothScrollY = 0;
    let scrollVelocitySmoothed = 0;
    let continuousAngleY = 0;

    const animate = () => {
      if (!isRunning) return;
      rafId = requestAnimationFrame(animate);
      const elapsedTime = (performance.now() - startTime) * 0.001;

      // Always read the live scroll position
      const liveScrollY =
        window.scrollY ||
        document.documentElement.scrollTop ||
        window.pageYOffset ||
        0;
      currentScrollY = liveScrollY;

      mouseX += (targetMouseX - mouseX) * 0.06;
      mouseY += (targetMouseY - mouseY) * 0.06;
      smoothScrollY += (currentScrollY - smoothScrollY) * 0.06;

      const scrollDelta = smoothScrollY - lastSmoothScrollY;
      lastSmoothScrollY = smoothScrollY;
      scrollVelocitySmoothed += (scrollDelta - scrollVelocitySmoothed) * 0.12;

      nebulaUniforms.uTime.value = elapsedTime;
      nebulaUniforms.uMouse.value.set(mouseX, mouseY);
      nebulaUniforms.uScroll.value = smoothScrollY;

      // Dust particulate float
      const deepPosAttr = deepDustGeo.attributes.position as THREE.BufferAttribute;
      const deepArr = deepPosAttr.array as Float32Array;

      for (let i = 0; i < deepDustCount; i++) {
        const vel = deepDustVelocities[i];
        deepArr[i * 3 + 1] += vel.vy;
        if (deepArr[i * 3 + 1] > 11.0) {
          deepArr[i * 3 + 1] = -11.0;
        }
      }
      deepPosAttr.needsUpdate = true;

      deepDustSystem.rotation.y = elapsedTime * 0.012 + mouseX * 0.06;
      deepDustSystem.rotation.x = mouseY * 0.04 + Math.sin(smoothScrollY * 0.0006) * 0.08;
      deepDustSystem.position.y = Math.sin(elapsedTime * 0.6) * 0.15;

      // 3D Liquid Titanium Emblem: Continuously visible across all pages and sections, smoothly fades out BEFORE footer
      if (emblemGroup && matOne && matThree) {
        // Measure real footer position relative to viewport
        const footerEl =
          document.querySelector("footer") ||
          document.getElementById("site-footer") ||
          document.querySelector("[data-footer]");

        let footerProximityFactor = 1.0;
        if (footerEl) {
          const footerRect = footerEl.getBoundingClientRect();
          // Begin fading when footer top is within 1.65x viewport height
          // Fully invisible (factor = 0) when footer top is within 1.10x viewport height (well before entering screen)
          const fadeStart = height * 1.65;
          const fadeEnd = height * 1.10;
          if (footerRect.top <= fadeEnd) {
            footerProximityFactor = 0.0;
          } else if (footerRect.top < fadeStart) {
            footerProximityFactor = (footerRect.top - fadeEnd) / (fadeStart - fadeEnd);
          } else {
            footerProximityFactor = 1.0;
          }
        } else {
          // Document height fallback
          const docHeight = Math.max(
            document.body.scrollHeight,
            document.documentElement.scrollHeight,
            document.body.offsetHeight,
            document.documentElement.offsetHeight
          );
          const scrollBottom = liveScrollY + height;
          const distToBottom = docHeight - scrollBottom;
          const fadeStart = 900;
          const fadeEnd = 450;
          if (distToBottom <= fadeEnd) {
            footerProximityFactor = 0.0;
          } else if (distToBottom < fadeStart) {
            footerProximityFactor = (distToBottom - fadeEnd) / (fadeStart - fadeEnd);
          }
        }

        const footerFade = Math.max(0.0, Math.min(1.0, footerProximityFactor));

        if (footerFade <= 0.005) {
          emblemGroup.visible = false;
          if (mouseLight) mouseLight.intensity = 0;
        } else {
          emblemGroup.visible = true;
          const baseScale = width < 768 ? 0.72 : 0.95;
          emblemGroup.scale.set(baseScale, baseScale, baseScale);
          matOne.opacity = footerFade;
          matThree.opacity = footerFade;
          if (mouseLight) mouseLight.intensity = 8.0 * footerFade;

          // Continuous orbital drift accelerated by scroll velocity
          continuousAngleY += 0.004 + Math.abs(scrollVelocitySmoothed) * 0.003;

          // Organic rotational physics with scroll inertia & pointer tilt
          const targetRotY = continuousAngleY + (smoothScrollY * 0.0014) + (mouseX * 0.24);
          const targetRotX = -(mouseY * 0.20) + (scrollVelocitySmoothed * 0.0012) + Math.sin(elapsedTime * 0.7) * 0.04;
          const targetRotZ = (mouseX * 0.06) + Math.cos(elapsedTime * 0.5) * 0.03;

          emblemGroup.rotation.y += (targetRotY - emblemGroup.rotation.y) * 0.065;
          emblemGroup.rotation.x += (targetRotX - emblemGroup.rotation.x) * 0.065;
          emblemGroup.rotation.z += (targetRotZ - emblemGroup.rotation.z) * 0.065;

          // Harmonic multi-axis floating float with subtle scroll parallax and responsive offset
          const targetPosX = (width >= 1024 ? emblemOffsetX : 0) + (mouseX * 0.15);
          emblemGroup.position.x += (targetPosX - emblemGroup.position.x) * 0.06;

          const idleBobY = Math.sin(elapsedTime * 1.2) * 0.14;
          const scrollParallaxY = -Math.sin(smoothScrollY * 0.0006) * 0.20;
          emblemGroup.position.y += ((idleBobY + scrollParallaxY) - emblemGroup.position.y) * 0.06;

          const idleBobZ = Math.cos(elapsedTime * 0.8) * 0.12;
          emblemGroup.position.z += (idleBobZ - emblemGroup.position.z) * 0.05;

          // Dynamic sweeping specular point light
          if (mouseLight) {
            mouseLight.position.x += ((mouseX * 6.5 + (width >= 1024 ? emblemOffsetX : 0)) - mouseLight.position.x) * 0.08;
            mouseLight.position.y += (mouseY * 6.5 - mouseLight.position.y) * 0.08;
            mouseLight.position.z = 4.2 + Math.sin(elapsedTime * 1.4) * 0.6;
          }
        }
      }

      renderer.autoClear = false;
      renderer.clear();
      renderer.render(bgScene, bgCamera);
      renderer.render(scene, camera);
    };

    animate();

    const onVisibilityChange = () => {
      if (document.hidden) {
        isRunning = false;
        cancelAnimationFrame(rafId);
      } else {
        isRunning = true;
        animate();
      }
    };
    document.addEventListener("visibilitychange", onVisibilityChange);

    return () => {
      isRunning = false;
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", onPointerMove);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVisibilityChange);
      if (renderer.domElement) {
        renderer.domElement.remove();
      }
      nebulaGeo.dispose();
      nebulaMat.dispose();
      deepDustGeo.dispose();
      deepDustMat.dispose();
      particleTexture.dispose();
      if (oneGeo) oneGeo.dispose();
      if (threeGeo) threeGeo.dispose();
      if (matOne) matOne.dispose();
      if (matThree) matThree.dispose();
      if (liquidNormalMap) (liquidNormalMap as THREE.CanvasTexture).dispose();
      if (liquidRoughnessMap) (liquidRoughnessMap as THREE.CanvasTexture).dispose();
      if (envRenderTarget) (envRenderTarget as THREE.WebGLRenderTarget).dispose();
      renderer.dispose();
    };
  }, [showEmblem]);

  return (
    <div
      ref={containerRef}
      className={styles.root}
      aria-hidden="true"
    />
  );
}
