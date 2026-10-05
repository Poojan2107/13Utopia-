"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { Plus3DCanvas } from "@/components/plus-ex/Plus3DCanvas";
import styles from "@/styles/review/BackgroundLab.module.css";

export type BackgroundMode =
  | "liquid-obsidian"
  | "spatial-architecture"
  | "studio-spotlight"
  | "optical-glass"
  | "crystalline-stardust"
  | "baseline-smoke";

interface BackgroundOption {
  id: BackgroundMode;
  name: string;
  tag: string;
  description: string;
  vibe: string;
}

const BACKGROUND_OPTIONS: BackgroundOption[] = [
  {
    id: "liquid-obsidian",
    name: "01. Liquid Obsidian",
    tag: "FLUID MERCURY",
    description: "Deep, dark liquid mercury waves with subtle specular metallic ripples reacting to mouse motion.",
    vibe: "Tactile, luxury-tech, liquid metallic weight.",
  },
  {
    id: "spatial-architecture",
    name: "02. Spatial Architecture",
    tag: "TADAO ANDO VOID",
    description: "Architectural 3D perspective lines and subtle volumetric light pillars shifting in deep parallax.",
    vibe: "Monumental, brutalist, structural authority.",
  },
  {
    id: "studio-spotlight",
    name: "03. Studio Darkroom",
    tag: "EDITORIAL FOCUS",
    description: "Pure #000000 void with an organic, soft studio spotlight tracking your cursor to reveal micro-textures.",
    vibe: "High contrast, editorial photoshoot, zero clutter.",
  },
  {
    id: "optical-glass",
    name: "04. Optical Cryo-Glass",
    tag: "REFRACTIVE VAPOR",
    description: "A dark slate with subtle, heavy optical distortion waves like thick architectural glass.",
    vibe: "Futuristic, clinical, high-budget studio finish.",
  },
  {
    id: "crystalline-stardust",
    name: "05. Crystalline Stardust",
    tag: "COSMIC NOIR",
    description: "Ultra-clean obsidian void layered with multi-depth crystalline micro-dust motes and subtle glints.",
    vibe: "Pure contrast, infinite depth, 120fps ultra-light.",
  },
  {
    id: "baseline-smoke",
    name: "06. Baseline Nebula",
    tag: "CURRENT SMOKE",
    description: "The current 2-octave volumetric monochrome smoke cloud background for direct comparison.",
    vibe: "Atmospheric, misty, organic smoke.",
  },
];

export function BackgroundLab() {
  const [activeMode, setActiveMode] = useState<BackgroundMode>("liquid-obsidian");
  const canvasContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = canvasContainerRef.current;
    if (!container) return;

    // Clear previous canvases
    container.innerHTML = "";

    const width = window.innerWidth;
    const height = window.innerHeight;
    const isMobile = width < 768;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 100);
    camera.position.set(0, 0, 10);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: false,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, isMobile ? 1.0 : 1.25));
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 1);
    container.appendChild(renderer.domElement);

    let uniforms: Record<string, THREE.IUniform> = {};
    let mesh: THREE.Object3D | null = null;
    let particleSystem: THREE.Points | null = null;
    let gridHelper: THREE.Group | null = null;

    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

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

    // ── BUILD SELECTED BACKGROUND SHADER / GEOMETRY ──
    if (activeMode === "liquid-obsidian") {
      // Liquid Dark Mercury / Obsidian Caustics
      uniforms = {
        uTime: { value: 0 },
        uResolution: { value: new THREE.Vector2(width, height) },
        uMouse: { value: new THREE.Vector2(0, 0) },
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
          precision mediump float;
          uniform float uTime;
          uniform vec2 uResolution;
          uniform vec2 uMouse;
          varying vec2 vUv;

          void main() {
            vec2 uv = (gl_FragCoord.xy - 0.5 * uResolution.xy) / min(uResolution.x, uResolution.y);
            float t = uTime * 0.45;
            vec2 m = uMouse * 0.15;
            
            // Heavy liquid wave displacement
            vec2 p = uv * 2.2 + m;
            for(int i = 1; i < 4; i++) {
              float fi = float(i);
              p.x += 0.25 / fi * sin(fi * 2.2 * p.y + t * 0.6 + fi * 1.5) + m.x * 0.1;
              p.y += 0.25 / fi * cos(fi * 2.2 * p.x + t * 0.5 + fi * 2.0) + m.y * 0.1;
            }

            // High-refraction specular grazing highlight
            float wave = sin(p.x * 3.5 + p.y * 2.8 + t * 0.4);
            float specular = pow(max(0.0, wave), 14.0) * 0.85;
            float diffuse = smoothstep(-0.8, 0.9, wave) * 0.12;

            vec3 col = vec3(0.0, 0.0, 0.0);
            vec3 obsidianGrey = vec3(0.06, 0.065, 0.075);
            vec3 mercuryHighlight = vec3(0.75, 0.78, 0.82);

            col += obsidianGrey * diffuse;
            col += mercuryHighlight * specular;

            // Subtle darkroom vignette
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
      mesh = quad;
    } else if (activeMode === "spatial-architecture") {
      // Tadao Ando Spatial Perspective Lines & Volumetric Beams
      const group = new THREE.Group();

      // Receding 3D Perspective Lines
      const lineCount = 18;
      const linesMat = new THREE.LineBasicMaterial({
        color: 0x444850,
        transparent: true,
        opacity: 0.28,
      });

      for (let i = 0; i < lineCount; i++) {
        const xOffset = (i / lineCount - 0.5) * 40;
        const pts = [
          new THREE.Vector3(xOffset * 0.15, -15, -25),
          new THREE.Vector3(xOffset * 2.2, 15, 10),
        ];
        const geo = new THREE.BufferGeometry().setFromPoints(pts);
        const line = new THREE.Line(geo, linesMat);
        group.add(line);
      }

      // Horizontal Architectural Planes
      for (let j = 0; j < 8; j++) {
        const y = -6 + j * 2.2;
        const pts = [
          new THREE.Vector3(-25, y, -15),
          new THREE.Vector3(25, y, -15),
        ];
        const geo = new THREE.BufferGeometry().setFromPoints(pts);
        const line = new THREE.Line(geo, linesMat);
        group.add(line);
      }

      scene.add(group);
      gridHelper = group;
    } else if (activeMode === "studio-spotlight") {
      // Pure #000000 with interactive diffused studio spotlight & micro-grain
      uniforms = {
        uResolution: { value: new THREE.Vector2(width, height) },
        uMouse: { value: new THREE.Vector2(0, 0) },
        uTime: { value: 0 },
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
          precision mediump float;
          uniform vec2 uResolution;
          uniform vec2 uMouse;
          uniform float uTime;
          varying vec2 vUv;

          float hash(vec2 p) {
            return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
          }

          void main() {
            vec2 uv = gl_FragCoord.xy / uResolution.xy;
            vec2 m = uMouse * 0.5 + 0.5;

            // Dynamic diffused spotlight distance
            float d = distance(uv, m);
            float spot = smoothstep(0.75, 0.0, d);
            spot = pow(spot, 1.8) * 0.22;

            // Micro-film grain
            float grain = (hash(gl_FragCoord.xy + fract(uTime * 0.01)) - 0.5) * 0.025;

            vec3 col = vec3(0.0);
            col += vec3(0.85, 0.88, 0.92) * spot;
            col += vec3(grain);

            gl_FragColor = vec4(max(vec3(0.0), col), 1.0);
          }
        `,
        depthWrite: false,
        depthTest: false,
      });

      const quad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), mat);
      scene.add(quad);
      mesh = quad;
    } else if (activeMode === "optical-glass") {
      // Refractive Optical Glass Waves
      uniforms = {
        uResolution: { value: new THREE.Vector2(width, height) },
        uMouse: { value: new THREE.Vector2(0, 0) },
        uTime: { value: 0 },
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
          precision mediump float;
          uniform vec2 uResolution;
          uniform vec2 uMouse;
          uniform float uTime;
          varying vec2 vUv;

          void main() {
            vec2 uv = (gl_FragCoord.xy - 0.5 * uResolution.xy) / min(uResolution.x, uResolution.y);
            float t = uTime * 0.5;

            // Architectural glass fluting / refraction waves
            float glassWave = sin(uv.x * 12.0 + cos(uv.y * 8.0 + t * 0.6) * 1.5 + uMouse.x * 2.0);
            float caustics = pow(max(0.0, glassWave), 8.0) * 0.16;
            float ambientDepth = smoothstep(0.0, 1.0, sin(uv.y * 4.0 + t * 0.3)) * 0.04;

            vec3 col = vec3(0.015, 0.018, 0.022);
            col += vec3(0.70, 0.74, 0.80) * caustics;
            col += vec3(0.12, 0.13, 0.15) * ambientDepth;

            float d = length(uv);
            col *= smoothstep(1.5, 0.4, d);

            gl_FragColor = vec4(col, 1.0);
          }
        `,
        depthWrite: false,
        depthTest: false,
      });

      const quad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), mat);
      scene.add(quad);
      mesh = quad;
    } else if (activeMode === "crystalline-stardust") {
      // Pure Void with 3-tier 3D Crystalline Stardust Motes
      const count = 350;
      const pos = new Float32Array(count * 3);
      const scales = new Float32Array(count);

      for (let i = 0; i < count; i++) {
        pos[i * 3] = (Math.random() - 0.5) * 35;
        pos[i * 3 + 1] = (Math.random() - 0.5) * 25;
        pos[i * 3 + 2] = (Math.random() - 0.5) * 20;
        scales[i] = 0.02 + Math.random() * 0.06;
      }

      const geo = new THREE.BufferGeometry();
      geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));

      // Circular glint texture
      const pCanvas = document.createElement("canvas");
      pCanvas.width = 32;
      pCanvas.height = 32;
      const pCtx = pCanvas.getContext("2d");
      if (pCtx) {
        const grad = pCtx.createRadialGradient(16, 16, 0, 16, 16, 16);
        grad.addColorStop(0, "rgba(255, 255, 255, 1.0)");
        grad.addColorStop(0.35, "rgba(200, 220, 255, 0.6)");
        grad.addColorStop(1, "rgba(0, 0, 0, 0)");
        pCtx.fillStyle = grad;
        pCtx.fillRect(0, 0, 32, 32);
      }
      const tex = new THREE.CanvasTexture(pCanvas);

      const pMat = new THREE.PointsMaterial({
        size: 0.15,
        map: tex,
        transparent: true,
        opacity: 0.55,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      });

      const points = new THREE.Points(geo, pMat);
      scene.add(points);
      particleSystem = points;
    } else {
      // Baseline 2-octave smoke
      uniforms = {
        uResolution: { value: new THREE.Vector2(width, height) },
        uMouse: { value: new THREE.Vector2(0, 0) },
        uTime: { value: 0 },
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
          precision mediump float;
          uniform vec2 uResolution;
          uniform vec2 uMouse;
          uniform float uTime;
          varying vec2 vUv;

          // Simple simplex noise
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

          float fbm(vec3 p) {
            return 0.55 * snoise(p) + 0.32 * snoise(p * 2.12 + vec3(45.0));
          }

          void main() {
            vec2 uv = (gl_FragCoord.xy - 0.5 * uResolution.xy) / min(uResolution.x, uResolution.y);
            vec2 p = uv * 1.35 + uMouse * 0.08;
            float t = uTime * 0.035;

            vec3 coord1 = vec3(p * 1.20, t);
            float q1 = fbm(coord1);

            vec3 coord2 = vec3(p * 1.85 + vec2(q1 * 0.75, -q1 * 0.55), t * 1.20);
            float smoke = fbm(coord2);

            float density = smoothstep(-0.10, 0.80, smoke + q1 * 0.30);
            vec3 col = mix(vec3(0.0), vec3(0.18), density * 0.8);

            gl_FragColor = vec4(col, 1.0);
          }
        `,
        depthWrite: false,
        depthTest: false,
      });

      const quad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), mat);
      scene.add(quad);
      mesh = quad;
    }

    const onResize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
      if (uniforms.uResolution) {
        uniforms.uResolution.value.set(w, h);
      }
    };
    window.addEventListener("resize", onResize);

    // Animation Loop
    let rafId: number;
    const startTime = performance.now();

    const animate = () => {
      rafId = requestAnimationFrame(animate);
      if (document.hidden) return;

      const elapsed = (performance.now() - startTime) * 0.001;
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      if (uniforms.uTime) {
        uniforms.uTime.value = elapsed;
      }
      if (uniforms.uMouse) {
        uniforms.uMouse.value.set(mouseX, mouseY);
      }

      if (gridHelper) {
        gridHelper.rotation.y = mouseX * 0.15;
        gridHelper.rotation.x = -mouseY * 0.10;
        gridHelper.position.x = mouseX * 1.2;
      }

      if (particleSystem) {
        particleSystem.rotation.y = elapsed * 0.02 + mouseX * 0.12;
        particleSystem.rotation.x = mouseY * 0.08;
      }

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onPointerMove);
      window.removeEventListener("touchmove", onTouchMove);
      if (renderer.domElement) {
        renderer.domElement.remove();
      }
      renderer.dispose();
    };
  }, [activeMode]);

  const currentConfig = BACKGROUND_OPTIONS.find((opt) => opt.id === activeMode) || BACKGROUND_OPTIONS[0];

  return (
    <div className={styles.labContainer}>
      {/* Background Canvas Host */}
      <div ref={canvasContainerRef} className={styles.canvasHost} />

      {/* Floating Interactive Director HUD Switcher */}
      <aside className={styles.directorHUD} aria-label="Background Concept Selector">
        <div className={styles.hudHeader}>
          <span className={styles.hudTag}>13 UTOPIA // LAB</span>
          <span className={styles.hudTitle}>BACKGROUND CONCEPT REVIEW</span>
        </div>

        <p className={styles.hudSub}>
          Click any concept to swap the live atmospheric engine instantly.
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
                <span className={styles.btnTag}>{opt.tag}</span>
              </div>
              <p className={styles.btnDesc}>{opt.description}</p>
            </button>
          ))}
        </div>

        <div className={styles.hudFooter}>
          <div className={styles.vibeBox}>
            <span className={styles.vibeLabel}>ACTIVE VIBE</span>
            <span className={styles.vibeValue}>{currentConfig.vibe}</span>
          </div>
        </div>
      </aside>

      {/* Live Sample Scene Stage with the Real 3D 13 Monolith and Typography */}
      <div className={styles.stagePreview}>
        {/* Pinned 3D Monolith Emblem */}
        <div className={styles.emblemWrapper}>
          <Plus3DCanvas progress={0.94} entryProgress={1} />
        </div>

        {/* Live Typography Preview Layer */}
        <div className={styles.contentLayer}>
          <div className={styles.eyebrow}>
            <span>13 UTOPIA</span>
            <span>·</span>
            <span>FULL-SPECTRUM CAPABILITY</span>
          </div>

          <h1 className={styles.heroTitle}>
            <span>CREATE</span>
            <span className={styles.dot}>·</span>
            <span>BUILD</span>
            <span className={styles.dot}>·</span>
            <span>GROW</span>
          </h1>

          <p className={styles.thesis}>
            Brand. Product. Growth. One company, end to end.
          </p>

          <div className={styles.cardRow}>
            <div className={styles.card}>
              <span className={styles.cardIdx}>01 / CREATE</span>
              <h3 className={styles.cardH}>Brand &amp; Design</h3>
              <p className={styles.cardP}>Identity systems, art direction, UI/UX, and motion.</p>
            </div>
            <div className={styles.card}>
              <span className={styles.cardIdx}>02 / BUILD</span>
              <h3 className={styles.cardH}>Engineering &amp; Product</h3>
              <p className={styles.cardP}>Websites, apps, SaaS, AI agents, and cloud infrastructure.</p>
            </div>
            <div className={styles.card}>
              <span className={styles.cardIdx}>03 / GROW</span>
              <h3 className={styles.cardH}>Marketing &amp; Growth</h3>
              <p className={styles.cardP}>SEO, paid acquisition, content strategy, and lead generation.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
