"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import styles from "@/styles/review/BackgroundLab.module.css";

export type BackgroundMode =
  | "liquid-mercury"
  | "spatial-raymarch"
  | "quantum-particles"
  | "kinetic-typography"
  | "obsidian-minimal";

interface BackgroundOption {
  id: BackgroundMode;
  name: string;
  badge: string;
  tag: string;
  description: string;
  fidelity: string;
}

const BACKGROUND_OPTIONS: BackgroundOption[] = [
  {
    id: "liquid-mercury",
    name: "Liquid Mercury Caustics",
    badge: "GLSL SHADER",
    tag: "AWWWARDS SOTD",
    description: "Multi-layered domain-warped liquid titanium fluid with specular grazing Fresnel sheen and mouse wake turbulence.",
    fidelity: "60-120fps · Fullscreen GLSL Ray-Warper",
  },
  {
    id: "spatial-raymarch",
    name: "Architectural Volumetric Spatial Void",
    badge: "3D RAYMARCH",
    tag: "SPATIAL ARCHITECTURE",
    description: "Monumental brutalist dark monoliths receding into infinite depth fog with volumetric light beams and reflection planes.",
    fidelity: "Infinite Depth · 3D Parallax Perspective",
  },
  {
    id: "quantum-particles",
    name: "Quantum Curl-Noise Particle Nexus",
    badge: "GPU SIMULATION",
    tag: "ASTRONOMICAL",
    description: "1,200 crystalline stardust particulates orbiting with 3D curl-noise physics and mouse gravitational attraction.",
    fidelity: "1200+ GPU Nodes · Specular Glints",
  },
  {
    id: "kinetic-typography",
    name: "Architectural Kinetic Typography",
    badge: "3D PARALLAX",
    tag: "EDITORIAL NOIR",
    description: "Massive outline typography ribbons floating in 3D multi-layered depth with precision CAD crosshairs and telemetry ticks.",
    fidelity: "Multi-Depth Canvas · Zero Noise",
  },
  {
    id: "obsidian-minimal",
    name: "Pure Obsidian Void & Precision Reticles",
    badge: "ULTRA LUXURY",
    tag: "BRUTALIST MINIMAL",
    description: "Pure #000000 void with razor corner crosshairs, coordinate telemetry, and an interactive crystal refraction lens.",
    fidelity: "Absolute Contrast · 100% Focus",
  },
];

export function BackgroundLab() {
  const [activeMode, setActiveMode] = useState<BackgroundMode>("liquid-mercury");
  const [isCollapsed, setIsCollapsed] = useState(false);
  const canvasContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = canvasContainerRef.current;
    if (!container) return;

    container.innerHTML = "";

    const width = window.innerWidth;
    const height = window.innerHeight;
    const isMobile = width < 768;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    camera.position.set(0, 0, 10);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, isMobile ? 1.0 : 1.25));
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 1);
    container.appendChild(renderer.domElement);

    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;
    let scrollY = 0;

    const onPointerMove = (e: MouseEvent) => {
      targetMouseX = (e.clientX / window.innerWidth) * 2 - 1;
      targetMouseY = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", onPointerMove, { passive: true });

    const onScroll = () => {
      scrollY = window.scrollY;
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    const onTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        targetMouseX = (e.touches[0].clientX / window.innerWidth) * 2 - 1;
        targetMouseY = -(e.touches[0].clientY / window.innerHeight) * 2 + 1;
      }
    };
    window.addEventListener("touchmove", onTouchMove, { passive: true });

    let activeCleanup = () => {};
    let customTick: ((time: number, dt: number) => void) | null = null;

    // ── 01. LIQUID MERCURY & OBSIDIAN CAUSTICS (Awwwards Fluid Grade) ──
    if (activeMode === "liquid-mercury") {
      const uniforms = {
        uTime: { value: 0 },
        uResolution: { value: new THREE.Vector2(width, height) },
        uMouse: { value: new THREE.Vector2(0, 0) },
        uScroll: { value: 0 },
      };

      const mat = new THREE.ShaderMaterial({
        uniforms,
        vertexShader: `
          varying vec2 vUv;
          void main() {
            vUv = uv;
            gl_Position = vec4(position.xy, 0.0, 1.0);
          }
        `,
        fragmentShader: `
          precision highp float;
          uniform float uTime;
          uniform vec2 uResolution;
          uniform vec2 uMouse;
          uniform float uScroll;
          varying vec2 vUv;

          // Simplex Noise Basis
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
            p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
            vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
            m = m * m;
            return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
          }

          void main() {
            vec2 uv = (gl_FragCoord.xy - 0.5 * uResolution.xy) / min(uResolution.x, uResolution.y);
            float t = uTime * 0.18;
            vec2 m = uMouse * 0.22;
            
            // Navier-Stokes inspired dual-curl domain warping
            vec2 p = uv * 1.8 + m;
            p.y += uScroll * 0.0003;

            float n1 = snoise(vec3(p * 1.4, t));
            float n2 = snoise(vec3(p * 2.2 + vec2(n1 * 0.8, -n1 * 0.6), t * 1.2));
            
            // Liquid surface normal approximation
            float eps = 0.015;
            float hC = snoise(vec3(p + vec2(n2 * 0.5), t));
            float hR = snoise(vec3(p + vec2(eps, 0.0) + vec2(n2 * 0.5), t));
            float hU = snoise(vec3(p + vec2(0.0, eps) + vec2(n2 * 0.5), t));
            vec3 norm = normalize(vec3((hC - hR) / eps, (hC - hU) / eps, 1.4));

            // Luxury Studio Lighting calculations
            vec3 lightDir = normalize(vec3(0.5 + m.x, 0.8 + m.y, 1.2));
            vec3 viewDir = vec3(0.0, 0.0, 1.0);
            
            float diff = max(0.0, dot(norm, lightDir));
            vec3 halfV = normalize(lightDir + viewDir);
            float spec = pow(max(0.0, dot(norm, halfV)), 18.0);
            float fresnel = pow(1.0 - max(0.0, dot(norm, viewDir)), 3.5);

            // True Obsidian-Mercury Palette: Deep pitch void with razor liquid chrome reflections
            vec3 voidColor = vec3(0.0, 0.0, 0.0);
            vec3 graphiteTint = vec3(0.05, 0.052, 0.058);
            vec3 liquidMercury = vec3(0.72, 0.75, 0.80);
            vec3 specularGlint = vec3(1.0, 1.0, 1.0);

            vec3 col = voidColor;
            col += graphiteTint * diff * 1.6;
            col += liquidMercury * fresnel * 0.45;
            col += specularGlint * spec * 0.85;

            // Optical Vignette
            float d = length(uv);
            col *= smoothstep(1.4, 0.35, d);

            gl_FragColor = vec4(col, 1.0);
          }
        `,
        depthWrite: false,
        depthTest: false,
      });

      const quad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), mat);
      scene.add(quad);

      customTick = (time: number) => {
        uniforms.uTime.value = time;
        uniforms.uMouse.value.set(mouseX, mouseY);
        uniforms.uScroll.value = scrollY;
      };

      activeCleanup = () => {
        quad.geometry.dispose();
        mat.dispose();
        scene.remove(quad);
      };
    }

    // ── 02. SPATIAL ARCHITECTURE & VOLUMETRIC MONOLITHS (Awwwards 3D Raymarch) ──
    else if (activeMode === "spatial-raymarch") {
      const group = new THREE.Group();

      // Infinite Reflective Ground Plane Grid
      const gridMat = new THREE.LineBasicMaterial({
        color: 0x3a3e48,
        transparent: true,
        opacity: 0.35,
      });

      const gridLines = new THREE.Group();
      for (let i = -15; i <= 15; i++) {
        // Longitude lines
        const ptsZ = [new THREE.Vector3(i * 1.8, -4.5, -40), new THREE.Vector3(i * 1.8, -4.5, 15)];
        const geoZ = new THREE.BufferGeometry().setFromPoints(ptsZ);
        gridLines.add(new THREE.Line(geoZ, gridMat));

        // Latitude lines
        const ptsX = [new THREE.Vector3(-30, -4.5, i * 2.5 - 15), new THREE.Vector3(30, -4.5, i * 2.5 - 15)];
        const geoX = new THREE.BufferGeometry().setFromPoints(ptsX);
        gridLines.add(new THREE.Line(geoX, gridMat));
      }
      group.add(gridLines);

      // Monumental Architectural Concrete/Titanium Monolithic Slabs
      const slabGeo = new THREE.BoxGeometry(2.4, 18, 0.8);
      const slabMat = new THREE.MeshStandardMaterial({
        color: 0x0c0d10,
        roughness: 0.35,
        metalness: 0.85,
        wireframe: false,
      });

      const slabs: THREE.Mesh[] = [];
      const slabPositions = [
        [-9, 2, -18],
        [9, 3, -22],
        [-14, 5, -28],
        [14, 4, -32],
        [-6, 1, -12],
        [7, 0, -10],
      ];

      slabPositions.forEach(([x, y, z]) => {
        const slab = new THREE.Mesh(slabGeo, slabMat);
        slab.position.set(x, y, z);
        slab.rotation.y = (Math.random() - 0.5) * 0.4;
        group.add(slab);
        slabs.push(slab);
      });

      // Volumetric Light Beams (Tadao Ando Slits)
      const beamMat = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.045,
        blending: THREE.AdditiveBlending,
        side: THREE.DoubleSide,
      });

      for (let b = 0; b < 4; b++) {
        const beamGeo = new THREE.CylinderGeometry(0.2, 4.5, 35, 16);
        const beam = new THREE.Mesh(beamGeo, beamMat);
        beam.position.set((b - 1.5) * 8, 4, -20);
        beam.rotation.z = 0.35 * (b % 2 === 0 ? 1 : -1);
        beam.rotation.x = -0.4;
        group.add(beam);
      }

      // Studio Lights for Monoliths
      const ambLight = new THREE.AmbientLight(0xffffff, 0.3);
      group.add(ambLight);

      const topKey = new THREE.DirectionalLight(0xffffff, 2.5);
      topKey.position.set(0, 15, 5);
      group.add(topKey);

      scene.add(group);

      customTick = (time: number) => {
        group.rotation.y = mouseX * 0.12;
        group.rotation.x = -mouseY * 0.08;
        group.position.x = mouseX * 0.8;
        group.position.y = mouseY * 0.5 - (scrollY * 0.002);
      };

      activeCleanup = () => {
        gridMat.dispose();
        slabGeo.dispose();
        slabMat.dispose();
        beamMat.dispose();
        scene.remove(group);
      };
    }

    // ── 03. QUANTUM CURL-NOISE PARTICLE NEXUS (Awwwards Particle Sim) ──
    else if (activeMode === "quantum-particles") {
      const particleCount = isMobile ? 600 : 1400;
      const positions = new Float32Array(particleCount * 3);
      const velocities = new Float32Array(particleCount * 3);
      const original = new Float32Array(particleCount * 3);
      const scales = new Float32Array(particleCount);

      for (let i = 0; i < particleCount; i++) {
        const x = (Math.random() - 0.5) * 36;
        const y = (Math.random() - 0.5) * 26;
        const z = (Math.random() - 0.5) * 22;

        positions[i * 3] = x;
        positions[i * 3 + 1] = y;
        positions[i * 3 + 2] = z;

        original[i * 3] = x;
        original[i * 3 + 1] = y;
        original[i * 3 + 2] = z;

        scales[i] = 0.04 + Math.random() * 0.14;
      }

      const pGeo = new THREE.BufferGeometry();
      pGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));

      // Crisp circular glint texture
      const pCanvas = document.createElement("canvas");
      pCanvas.width = 32;
      pCanvas.height = 32;
      const pCtx = pCanvas.getContext("2d");
      if (pCtx) {
        const grad = pCtx.createRadialGradient(16, 16, 0, 16, 16, 16);
        grad.addColorStop(0, "rgba(255, 255, 255, 1.0)");
        grad.addColorStop(0.35, "rgba(220, 235, 255, 0.75)");
        grad.addColorStop(0.70, "rgba(160, 190, 230, 0.2)");
        grad.addColorStop(1, "rgba(0, 0, 0, 0)");
        pCtx.fillStyle = grad;
        pCtx.fillRect(0, 0, 32, 32);
      }
      const tex = new THREE.CanvasTexture(pCanvas);

      const pMat = new THREE.PointsMaterial({
        size: 0.16,
        map: tex,
        transparent: true,
        opacity: 0.85,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      });

      const pSystem = new THREE.Points(pGeo, pMat);
      scene.add(pSystem);

      customTick = (time: number) => {
        const posAttr = pGeo.attributes.position as THREE.BufferAttribute;
        const arr = posAttr.array as Float32Array;

        const mWorldX = mouseX * 12.0;
        const mWorldY = mouseY * 8.0;

        for (let i = 0; i < particleCount; i++) {
          const idx = i * 3;
          let px = arr[idx];
          let py = arr[idx + 1];
          let pz = arr[idx + 2];

          // Curl noise harmonic vortex
          const ang = time * 0.3 + i * 0.05;
          const curlX = Math.sin(py * 0.25 + ang) * 0.025;
          const curlY = Math.cos(px * 0.25 + ang) * 0.025;
          const curlZ = Math.sin(pz * 0.25 + time * 0.2) * 0.015;

          // Mouse Gravitational Nexus
          const dx = mWorldX - px;
          const dy = mWorldY - py;
          const dist = Math.sqrt(dx * dx + dy * dy);
          let gravX = 0;
          let gravY = 0;

          if (dist < 8.0 && dist > 0.1) {
            const f = (1.0 - dist / 8.0) * 0.08;
            gravX = (dx / dist) * f;
            gravY = (dy / dist) * f;
          }

          velocities[idx] = velocities[idx] * 0.94 + (curlX + gravX);
          velocities[idx + 1] = velocities[idx + 1] * 0.94 + (curlY + gravY);
          velocities[idx + 2] = velocities[idx + 2] * 0.94 + curlZ;

          arr[idx] += velocities[idx];
          arr[idx + 1] += velocities[idx + 1];
          arr[idx + 2] += velocities[idx + 2];

          // Wrap boundaries
          if (arr[idx] > 18) arr[idx] = -18;
          if (arr[idx] < -18) arr[idx] = 18;
          if (arr[idx + 1] > 14) arr[idx + 1] = -14;
          if (arr[idx + 1] < -14) arr[idx + 1] = 14;
        }

        posAttr.needsUpdate = true;
        pSystem.rotation.y = time * 0.02;
      };

      activeCleanup = () => {
        pGeo.dispose();
        pMat.dispose();
        tex.dispose();
        scene.remove(pSystem);
      };
    }

    // ── 04. ARCHITECTURAL KINETIC TYPOGRAPHY RIBBON & CAD HUD ──
    else if (activeMode === "kinetic-typography") {
      const c = document.createElement("canvas");
      c.width = width;
      c.height = height;
      c.style.position = "absolute";
      c.style.inset = "0";
      c.style.width = "100%";
      c.style.height = "100%";
      c.style.pointerEvents = "none";
      container.appendChild(c);

      const ctx = c.getContext("2d");
      const lines = [
        { text: "13 UTOPIA // ARCHITECTURAL REASONING // SENIOR FULL-SPECTRUM ENGINEERING // ", y: 0.18, speed: 38, size: 78, alpha: 0.12 },
        { text: "BE UNREAL · BE UNREASONABLE · OWN THE CATEGORY · PURE ORIGINAL BESPOKE · ", y: 0.46, speed: -48, size: 108, alpha: 0.16 },
        { text: "CREATE · BUILD · GROW · NEXT.JS · THREE.JS · AI WORKFLOWS · CLOUD ARCHITECTURE · ", y: 0.82, speed: 42, size: 84, alpha: 0.14 },
      ];
      let offsets = [0, 0, 0];

      customTick = (time: number) => {
        if (!ctx) return;
        ctx.clearRect(0, 0, width, height);

        // 3D Parallax Typography Lines
        lines.forEach((line, idx) => {
          ctx.font = `800 ${isMobile ? line.size * 0.52 : line.size}px "PP Neue Montreal", sans-serif`;
          ctx.letterSpacing = "-0.04em";

          offsets[idx] += line.speed * 0.016;
          const textW = ctx.measureText(line.text).width;
          const x = (offsets[idx] % textW) - textW;
          const yPos = line.y * height + mouseY * (idx === 1 ? -28 : 22) - (scrollY * 0.15);

          ctx.strokeStyle = `rgba(255, 255, 255, ${line.alpha})`;
          ctx.lineWidth = 1.3;
          ctx.strokeText(line.text + line.text + line.text, x + mouseX * (idx * 35), yPos);
        });

        // CAD Blueprint Measurement Calipers
        ctx.strokeStyle = "rgba(255, 255, 255, 0.18)";
        ctx.lineWidth = 1.0;
        const cx = width * 0.5 + mouseX * 25;
        const cy = height * 0.5 - mouseY * 25;

        // Central Precision Frame
        ctx.strokeRect(cx - (isMobile ? 140 : 260), cy - (isMobile ? 180 : 300), isMobile ? 280 : 520, isMobile ? 360 : 600);

        // Telemetry readout
        ctx.font = "600 10px monospace";
        ctx.fillStyle = "rgba(255, 255, 255, 0.45)";
        ctx.fillText(`AXIS_X: ${(mouseX * 100).toFixed(1)}mm`, cx - 240, cy - 280);
        ctx.fillText(`AXIS_Y: ${(mouseY * 100).toFixed(1)}mm`, cx - 240, cy - 264);
        ctx.fillText(`CAD_SYS: 13U_SPATIAL_V4`, cx + 120, cy + 280);
      };

      activeCleanup = () => {
        c.remove();
      };
    }

    // ── 05. PURE OBSIDIAN VOID WITH PRECISION RETICLES ──
    else if (activeMode === "obsidian-minimal") {
      const c = document.createElement("canvas");
      c.width = width;
      c.height = height;
      c.style.position = "absolute";
      c.style.inset = "0";
      c.style.width = "100%";
      c.style.height = "100%";
      c.style.pointerEvents = "none";
      container.appendChild(c);

      const ctx = c.getContext("2d");

      customTick = (time: number) => {
        if (!ctx) return;
        ctx.clearRect(0, 0, width, height);

        const pad = isMobile ? 18 : 36;
        const arm = 22;

        ctx.strokeStyle = "rgba(255, 255, 255, 0.45)";
        ctx.lineWidth = 1.2;

        // 4 Corner Precision Reticles
        // Top-Left
        ctx.beginPath();
        ctx.moveTo(pad, pad + arm);
        ctx.lineTo(pad, pad);
        ctx.lineTo(pad + arm, pad);
        ctx.stroke();

        // Top-Right
        ctx.beginPath();
        ctx.moveTo(width - pad, pad + arm);
        ctx.lineTo(width - pad, pad);
        ctx.lineTo(width - pad - arm, pad);
        ctx.stroke();

        // Bottom-Left
        ctx.beginPath();
        ctx.moveTo(pad, height - pad - arm);
        ctx.lineTo(pad, height - pad);
        ctx.lineTo(pad + arm, height - pad);
        ctx.stroke();

        // Bottom-Right
        ctx.beginPath();
        ctx.moveTo(width - pad, height - pad - arm);
        ctx.lineTo(width - pad, height - pad);
        ctx.lineTo(width - pad - arm, height - pad);
        ctx.stroke();

        // Subtle Coordinate Watermarks
        ctx.font = "600 10px monospace";
        ctx.fillStyle = "rgba(255, 255, 255, 0.4)";
        ctx.fillText(`13 UTOPIA // MONOLITH VOID [${(mouseX * 100).toFixed(0)}, ${(mouseY * 100).toFixed(0)}]`, pad + 30, pad + 16);
        ctx.fillText(`STATUS: 100% UNCOMPROMISING NOIR`, width - pad - 240, height - pad - 8);
      };

      activeCleanup = () => {
        c.remove();
      };
    }

    const onResize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", onResize);

    // Master Animation Loop
    let rafId: number;
    let lastTime = performance.now();
    const startTime = performance.now();

    const animate = () => {
      rafId = requestAnimationFrame(animate);
      if (document.hidden) return;

      const now = performance.now();
      const dt = (now - lastTime) * 0.001;
      lastTime = now;
      const elapsed = (now - startTime) * 0.001;

      mouseX += (targetMouseX - mouseX) * 0.08;
      mouseY += (targetMouseY - mouseY) * 0.08;

      if (customTick) {
        customTick(elapsed, dt);
      }

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onPointerMove);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("touchmove", onTouchMove);
      activeCleanup();
      if (renderer.domElement) {
        renderer.domElement.remove();
      }
      renderer.dispose();
    };
  }, [activeMode]);

  const currentConfig = BACKGROUND_OPTIONS.find((opt) => opt.id === activeMode) || BACKGROUND_OPTIONS[0];

  return (
    <>
      {/* Fullscreen Fixed Canvas Engine */}
      <div ref={canvasContainerRef} className={styles.canvasHost} />

      {/* Collapsible Floating Director HUD */}
      <aside
        className={`${styles.directorHUD} ${isCollapsed ? styles.hudCollapsed : ""}`}
        aria-label="Awwwards Background Lab Control"
      >
        <div className={styles.hudTopRow}>
          <div className={styles.hudBadgeGroup}>
            <span className={styles.hudLiveDot} />
            <span className={styles.hudTag}>VISUAL LAB // 5 ENGINES</span>
          </div>

          <button
            type="button"
            onClick={() => setIsCollapsed(!isCollapsed)}
            className={styles.collapseToggleBtn}
            title={isCollapsed ? "Expand Selection Table" : "Collapse for Full Screen View"}
          >
            {isCollapsed ? "✦ EXPAND LAB" : "— COLLAPSE FULLSCREEN"}
          </button>
        </div>

        {!isCollapsed && (
          <div className={styles.hudBody}>
            <h2 className={styles.hudTitle}>Awwwards-Tier Background Suite</h2>
            <p className={styles.hudSub}>
              Select any engine to inspect it live across the entire homepage:
            </p>

            <div className={styles.buttonList}>
              {BACKGROUND_OPTIONS.map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => setActiveMode(opt.id)}
                  className={`${styles.hudBtn} ${activeMode === opt.id ? styles.hudBtnActive : ""}`}
                >
                  <div className={styles.btnMeta}>
                    <span className={styles.btnName}>{opt.name}</span>
                    <span className={styles.btnBadge}>{opt.badge}</span>
                  </div>
                  <p className={styles.btnDesc}>{opt.description}</p>
                  <span className={styles.btnFidelity}>{opt.fidelity}</span>
                </button>
              ))}
            </div>

            <div className={styles.hudFooter}>
              <span className={styles.footerTag}>ACTIVE ENGINE: {currentConfig.name}</span>
              <span className={styles.footerSub}>{currentConfig.tag}</span>
            </div>
          </div>
        )}
      </aside>
    </>
  );
}
