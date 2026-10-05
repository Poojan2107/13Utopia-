"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { Plus3DCanvas } from "@/components/plus-ex/Plus3DCanvas";
import styles from "@/styles/review/BackgroundLab.module.css";

export type BackgroundMode =
  | "glyph-matrix"
  | "lidar-topography"
  | "kinetic-marquee"
  | "cyber-blueprint"
  | "minimal-glass-void";

interface BackgroundOption {
  id: BackgroundMode;
  name: string;
  tag: string;
  description: string;
  vibe: string;
}

const BACKGROUND_OPTIONS: BackgroundOption[] = [
  {
    id: "glyph-matrix",
    name: "01. Magnetic Glyph Matrix",
    tag: "INTERACTIVE ASCII",
    description: "Grid of architectural symbols & brand glyphs reacting like magnetic iron filings to your mouse.",
    vibe: "Creative-tech, bespoke computational aesthetics.",
  },
  {
    id: "lidar-topography",
    name: "02. LiDAR 3D Terrain Scan",
    tag: "POINT-CLOUD MESH",
    description: "Undulating 3D topographic wireframe with laser scan pulses sweeping across contour ridges.",
    vibe: "Spatial depth, architectural scale, cinematic 3D.",
  },
  {
    id: "kinetic-marquee",
    name: "03. Kinetic Typographic Ribbon",
    tag: "DEEP PARALLAX",
    description: "Massive hollow-outline typographic ribbons floating in 3D multi-layered depth planes.",
    vibe: "High-fashion editorial, structural, bold identity.",
  },
  {
    id: "cyber-blueprint",
    name: "04. Cybernetic Blueprint HUD",
    tag: "TECHNICAL TELEMETRY",
    description: "Vector coordinate reticles, target calipers, and live telemetry tracking the 3D model.",
    vibe: "Senior engineering authority, precision CAD aesthetic.",
  },
  {
    id: "minimal-glass-void",
    name: "05. Pure Obsidian Void",
    tag: "CORNER RETICLES",
    description: "Pitch black #000000 with razor corner crosshairs and a crystal refraction puck. Zero noise.",
    vibe: "Extreme luxury, 100% typography & 3D focus.",
  },
];

export function BackgroundLab() {
  const [activeMode, setActiveMode] = useState<BackgroundMode>("glyph-matrix");
  const canvasContainerRef = useRef<HTMLDivElement | null>(null);
  const [hudTelemetry, setHudTelemetry] = useState({ x: 0, y: 0, fps: 120, time: 0 });

  useEffect(() => {
    const container = canvasContainerRef.current;
    if (!container) return;

    container.innerHTML = "";

    const width = window.innerWidth;
    const height = window.innerHeight;
    const isMobile = width < 768;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 100);
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

    let activeCleanup = () => {};
    let customTick: ((time: number) => void) | null = null;

    // ── BUILD SELECTED RADICAL CONCEPT ──
    if (activeMode === "glyph-matrix") {
      // 01. INTERACTIVE MAGNETIC ASCII / GLYPH MATRIX
      const glyphCanvas = document.createElement("canvas");
      glyphCanvas.width = width;
      glyphCanvas.height = height;
      glyphCanvas.style.position = "absolute";
      glyphCanvas.style.inset = "0";
      glyphCanvas.style.width = "100%";
      glyphCanvas.style.height = "100%";
      glyphCanvas.style.pointerEvents = "none";
      container.appendChild(glyphCanvas);

      const ctx = glyphCanvas.getContext("2d");
      const glyphs = ["1", "3", "U", "T", "O", "P", "I", "A", "+", "·", "/", "[", "]", "▲", "■", "░"];
      
      const cols = isMobile ? 22 : 44;
      const rows = isMobile ? 16 : 28;
      const cellW = width / cols;
      const cellH = height / rows;

      interface GridCell {
        baseX: number;
        baseY: number;
        char: string;
        vx: number;
        vy: number;
        x: number;
        y: number;
        scale: number;
      }

      const grid: GridCell[] = [];
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const bx = c * cellW + cellW * 0.5;
          const by = r * cellH + cellH * 0.5;
          grid.push({
            baseX: bx,
            baseY: by,
            char: glyphs[(r * cols + c) % glyphs.length],
            x: bx,
            y: by,
            vx: 0,
            vy: 0,
            scale: 1,
          });
        }
      }

      let mPx = width * 0.5;
      let mPy = height * 0.5;

      const trackMousePx = (e: MouseEvent) => {
        mPx = e.clientX;
        mPy = e.clientY;
      };
      window.addEventListener("mousemove", trackMousePx, { passive: true });

      customTick = (elapsed: number) => {
        if (!ctx) return;
        ctx.clearRect(0, 0, width, height);
        ctx.font = `600 ${isMobile ? 10 : 12}px monospace`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";

        for (let i = 0; i < grid.length; i++) {
          const cell = grid[i];
          const dx = cell.x - mPx;
          const dy = cell.y - mPy;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = 220;

          if (dist < maxDist) {
            const force = (1 - dist / maxDist) * 35;
            const angle = Math.atan2(dy, dx);
            cell.vx += Math.cos(angle) * force * 0.12;
            cell.vy += Math.sin(angle) * force * 0.12;
            cell.scale = 1 + (1 - dist / maxDist) * 0.8;
          }

          // Spring back to base position
          cell.vx += (cell.baseX - cell.x) * 0.08;
          cell.vy += (cell.baseY - cell.y) * 0.08;
          cell.vx *= 0.78;
          cell.vy *= 0.78;
          cell.x += cell.vx;
          cell.y += cell.vy;
          cell.scale += (1 - cell.scale) * 0.1;

          const proximity = Math.max(0, 1 - dist / 320);
          const alpha = 0.12 + proximity * 0.75;
          ctx.fillStyle = proximity > 0.4 ? `rgba(255, 255, 255, ${alpha})` : `rgba(180, 190, 205, ${alpha})`;
          ctx.fillText(cell.char, cell.x, cell.y);
        }
      };

      activeCleanup = () => {
        window.removeEventListener("mousemove", trackMousePx);
        glyphCanvas.remove();
      };
    } else if (activeMode === "lidar-topography") {
      // 02. LIDAR 3D TERRAIN SCAN & POINT-CLOUD MESH
      const terrainGroup = new THREE.Group();
      const gridX = 55;
      const gridZ = 55;
      const geo = new THREE.PlaneGeometry(32, 32, gridX, gridZ);
      geo.rotateX(-Math.PI / 2.35);
      geo.translate(0, -3.8, -4.5);

      const pos = geo.attributes.position;
      const initialY: number[] = [];

      for (let i = 0; i < pos.count; i++) {
        const u = pos.getX(i);
        const v = pos.getY(i);
        const elevation =
          Math.sin(u * 0.35) * Math.cos(v * 0.35) * 1.6 +
          Math.sin(u * 0.8 + v * 0.6) * 0.6;
        pos.setZ(i, elevation);
        initialY.push(elevation);
      }
      geo.computeVertexNormals();

      // Wireframe contour lines
      const wireMat = new THREE.MeshBasicMaterial({
        color: 0x333842,
        wireframe: true,
        transparent: true,
        opacity: 0.35,
      });
      const wireMesh = new THREE.Mesh(geo, wireMat);
      terrainGroup.add(wireMesh);

      // LiDAR points
      const pointMat = new THREE.PointsMaterial({
        color: 0xffffff,
        size: 0.045,
        transparent: true,
        opacity: 0.7,
      });
      const points = new THREE.Points(geo, pointMat);
      terrainGroup.add(points);

      scene.add(terrainGroup);

      customTick = (time: number) => {
        terrainGroup.rotation.y = mouseX * 0.14;
        terrainGroup.position.x = mouseX * 0.8;
        terrainGroup.position.y = -3.8 + mouseY * 0.4;

        // Dynamic laser scan line wave
        const p = geo.attributes.position;
        for (let i = 0; i < p.count; i++) {
          const u = p.getX(i);
          const v = p.getY(i);
          const wave = Math.sin(u * 0.35 + time * 0.8) * Math.cos(v * 0.35 + time * 0.5);
          p.setZ(i, initialY[i] + wave * 0.45);
        }
        p.needsUpdate = true;
      };

      activeCleanup = () => {
        geo.dispose();
        wireMat.dispose();
        pointMat.dispose();
        scene.remove(terrainGroup);
      };
    } else if (activeMode === "kinetic-marquee") {
      // 03. KINETIC TYPOGRAPHIC RIBBON IN DEEP PARALLAX
      const canvasMarquee = document.createElement("canvas");
      canvasMarquee.width = width;
      canvasMarquee.height = height;
      canvasMarquee.style.position = "absolute";
      canvasMarquee.style.inset = "0";
      canvasMarquee.style.width = "100%";
      canvasMarquee.style.height = "100%";
      canvasMarquee.style.pointerEvents = "none";
      container.appendChild(canvasMarquee);

      const ctx = canvasMarquee.getContext("2d");
      const lines = [
        { text: "13 UTOPIA · ARCHITECTURAL REASONING · FULL-SPECTRUM ENGINEERING · BRAND · CGI · ", y: 0.22, speed: 45, size: 74, outline: true },
        { text: "BE UNREAL · BE UNREASONABLE · OWN THE CATEGORY · NO TEMPLATES · PURE BESPOKE · ", y: 0.48, speed: -55, size: 110, outline: true },
        { text: "CREATE · BUILD · GROW · NEXT.JS · THREE.JS · AI WORKFLOWS · CLOUD ARCHITECTURE · ", y: 0.78, speed: 40, size: 82, outline: true },
      ];

      let offsets = [0, 0, 0];

      customTick = (time: number) => {
        if (!ctx) return;
        ctx.clearRect(0, 0, width, height);

        lines.forEach((line, idx) => {
          ctx.font = `800 ${isMobile ? line.size * 0.5 : line.size}px "PP Neue Montreal", sans-serif`;
          ctx.letterSpacing = "-0.04em";

          offsets[idx] += (line.speed * 0.016);
          const textW = ctx.measureText(line.text).width;
          const x = (offsets[idx] % textW) - textW;

          const yPos = line.y * height + mouseY * (idx === 1 ? -25 : 20);

          ctx.strokeStyle = "rgba(255, 255, 255, 0.14)";
          ctx.lineWidth = 1.2;
          ctx.strokeText(line.text + line.text + line.text, x + mouseX * (idx * 30), yPos);
        });
      };

      activeCleanup = () => {
        canvasMarquee.remove();
      };
    } else if (activeMode === "cyber-blueprint") {
      // 04. CYBERNETIC BLUEPRINT & SPATIAL TELEMETRY HUD
      const canvasHud = document.createElement("canvas");
      canvasHud.width = width;
      canvasHud.height = height;
      canvasHud.style.position = "absolute";
      canvasHud.style.inset = "0";
      canvasHud.style.width = "100%";
      canvasHud.style.height = "100%";
      canvasHud.style.pointerEvents = "none";
      container.appendChild(canvasHud);

      const ctx = canvasHud.getContext("2d");

      customTick = (time: number) => {
        if (!ctx) return;
        ctx.clearRect(0, 0, width, height);

        const cx = width * 0.5 + mouseX * 30;
        const cy = height * 0.5 + -mouseY * 30;

        ctx.strokeStyle = "rgba(255, 255, 255, 0.16)";
        ctx.lineWidth = 1;

        // Rotating target reticles around center monolith
        ctx.save();
        ctx.translate(cx, cy);

        // Reticle 1: Outer dashed circle
        ctx.beginPath();
        ctx.setLineDash([8, 14]);
        ctx.arc(0, 0, isMobile ? 160 : 260, time * 0.2, time * 0.2 + Math.PI * 2);
        ctx.stroke();

        // Reticle 2: Inner counter-rotating bracket
        ctx.beginPath();
        ctx.setLineDash([24, 40]);
        ctx.arc(0, 0, isMobile ? 120 : 190, -time * 0.35, -time * 0.35 + Math.PI * 2);
        ctx.stroke();

        // Crosshairs
        ctx.setLineDash([]);
        ctx.beginPath();
        ctx.moveTo(-320, 0);
        ctx.lineTo(-200, 0);
        ctx.moveTo(200, 0);
        ctx.lineTo(320, 0);
        ctx.moveTo(0, -320);
        ctx.lineTo(0, -200);
        ctx.moveTo(0, 200);
        ctx.lineTo(0, 320);
        ctx.stroke();
        ctx.restore();

        // Telemetry Data Readouts in Corners
        ctx.font = "600 10px monospace";
        ctx.fillStyle = "rgba(255, 255, 255, 0.45)";
        ctx.fillText(`SYS.COORD [X: ${(mouseX * 100).toFixed(2)} // Y: ${(mouseY * 100).toFixed(2)}]`, 32, height - 32);
        ctx.fillText(`TARGET_LOCK: 13_UTOPIA_MONOLITH [RAD: 260PX]`, 32, height - 48);
        ctx.fillText(`RENDER_PIPELINE: WEBGL2_CORE // 120HZ_SYNC`, width - 320, height - 32);
      };

      activeCleanup = () => {
        canvasHud.remove();
      };
    } else if (activeMode === "minimal-glass-void") {
      // 05. PURE OBSIDIAN VOID WITH CORNER RETICLES
      const canvasReticles = document.createElement("canvas");
      canvasReticles.width = width;
      canvasReticles.height = height;
      canvasReticles.style.position = "absolute";
      canvasReticles.style.inset = "0";
      canvasReticles.style.width = "100%";
      canvasReticles.style.height = "100%";
      canvasReticles.style.pointerEvents = "none";
      container.appendChild(canvasReticles);

      const ctx = canvasReticles.getContext("2d");

      customTick = () => {
        if (!ctx) return;
        ctx.clearRect(0, 0, width, height);

        const pad = isMobile ? 20 : 36;
        const arm = 18;

        ctx.strokeStyle = "rgba(255, 255, 255, 0.4)";
        ctx.lineWidth = 1.2;

        // Top Left Crosshair
        ctx.beginPath();
        ctx.moveTo(pad, pad + arm);
        ctx.lineTo(pad, pad);
        ctx.lineTo(pad + arm, pad);
        ctx.stroke();

        // Top Right Crosshair
        ctx.beginPath();
        ctx.moveTo(width - pad, pad + arm);
        ctx.lineTo(width - pad, pad);
        ctx.lineTo(width - pad - arm, pad);
        ctx.stroke();

        // Bottom Left Crosshair
        ctx.beginPath();
        ctx.moveTo(pad, height - pad - arm);
        ctx.lineTo(pad, height - pad);
        ctx.lineTo(pad + arm, height - pad);
        ctx.stroke();

        // Bottom Right Crosshair
        ctx.beginPath();
        ctx.moveTo(width - pad, height - pad - arm);
        ctx.lineTo(width - pad, height - pad);
        ctx.lineTo(width - pad - arm, height - pad);
        ctx.stroke();
      };

      activeCleanup = () => {
        canvasReticles.remove();
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

    // Master Render Loop
    let rafId: number;
    const startTime = performance.now();

    const animate = () => {
      rafId = requestAnimationFrame(animate);
      if (document.hidden) return;

      const elapsed = (performance.now() - startTime) * 0.001;
      mouseX += (targetMouseX - mouseX) * 0.06;
      mouseY += (targetMouseY - mouseY) * 0.06;

      if (customTick) {
        customTick(elapsed);
      }

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onPointerMove);
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
    <div className={styles.labContainer}>
      {/* Background Canvas Host */}
      <div ref={canvasContainerRef} className={styles.canvasHost} />

      {/* Floating Interactive Director HUD Switcher */}
      <aside className={styles.directorHUD} aria-label="Background Concept Selector">
        <div className={styles.hudHeader}>
          <span className={styles.hudTag}>13 UTOPIA // CONCEPT LAB</span>
          <span className={styles.hudTitle}>RADICAL BACKGROUND DIRECTIONS</span>
        </div>

        <p className={styles.hudSub}>
          Click each concept to test distinct aesthetic architectures behind the live 3D emblem.
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
            <span className={styles.vibeLabel}>CREATIVE IDENTITY</span>
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
