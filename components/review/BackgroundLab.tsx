"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import styles from "@/styles/review/BackgroundLab.module.css";
import {
  fullscreenVertexShader,
  fluidCausticsFragmentShader,
  gravitationalFilamentFragmentShader,
  volumetricFbmFragmentShader,
  liquidChromeFragmentShader,
} from "@/components/review/AwwwardsShaders";

export type PrototypeId =
  | "caustics"
  | "filament"
  | "volumetric"
  | "chrome"
  | "particles";

interface PrototypeInfo {
  id: PrototypeId;
  name: string;
  category: string;
  tagline: string;
  description: string;
}

const PROTOTYPES: PrototypeInfo[] = [
  {
    id: "caustics",
    name: "01 // Obsidian Fluid Caustics",
    category: "QUANTUM HYDRODYNAMICS",
    tagline: "Dark liquid chrome with cursor-propagated wave caustics",
    description: "Multi-layered refractive caustics in deep graphite and titanium. The cursor acts as a hydro-impulse generating real-time concentric fluid ripple distortions.",
  },
  {
    id: "filament",
    name: "02 // Gravitational Filament Lens",
    category: "ASTROPHYSICAL WARP",
    tagline: "Luminous quantum threads with Einstein ring gravitational lensing",
    description: "Fine titanium threads suspended in deep obsidian void. Cursor movement warps spacetime through an inverse-square gravitational metric with stardust twinkling.",
  },
  {
    id: "volumetric",
    name: "03 // Volumetric Dark Matter",
    category: "AMBIENTFIELD ULTRA",
    tagline: "4-octave curl-noise fluid smoke & micro-sparkle field",
    description: "The next evolution of 13 Utopia's signature atmosphere. Silky smooth curl noise advection, liquid silver gradients, and zero muddy color bleed for transparent UI.",
  },
  {
    id: "chrome",
    name: "04 // Liquid Chrome Voronoi",
    category: "REFRACTIVE SPECULAR MESH",
    tagline: "High-specular mercury cellular dispersion with organic drift",
    description: "Voronoi F2-F1 dual-metric liquid metal cellular mesh with high-contrast specular reflections and subtle chromatic aberration under pointer momentum.",
  },
  {
    id: "particles",
    name: "05 // Kinetic Stardust Swarm",
    category: "GPU PARTICLE VORTEX",
    tagline: "20,000 GPU particles governed by a curl-noise velocity field",
    description: "Volumetric 3D particle swarm that dynamically accelerates and swirls into gravitational slingshots around the cursor path with crystalline glints.",
  },
];

export function BackgroundLab() {
  const [activeProto, setActiveProto] = useState<PrototypeId>("caustics");
  const [speed, setSpeed] = useState<number>(1.0);
  const [intensity, setIntensity] = useState<number>(1.0);
  const [reactivity, setReactivity] = useState<number>(1.0);
  const [enableCursor, setEnableCursor] = useState<boolean>(true);
  const [showUiOverlay, setShowUiOverlay] = useState<boolean>(true);
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
  const [fps, setFps] = useState<number>(60);

  const canvasContainerRef = useRef<HTMLDivElement | null>(null);
  const cursorRef = useRef<HTMLDivElement | null>(null);

  // ── WebGL / Three.js Engine Lifecycle ──
  useEffect(() => {
    const container = canvasContainerRef.current;
    if (!container) return;

    container.innerHTML = "";

    const width = window.innerWidth;
    const height = window.innerHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const pCamera = new THREE.PerspectiveCamera(60, width / height, 0.1, 100);
    pCamera.position.set(0, 0, 8);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2.0));
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 1);
    container.appendChild(renderer.domElement);

    // Uniforms shared by 2D Screen Shaders
    const uniforms = {
      uTime: { value: 0 },
      uResolution: { value: new THREE.Vector2(width, height) },
      uMouse: { value: new THREE.Vector2(0.5, 0.5) },
      uMouseStrength: { value: 0.0 },
      uSpeed: { value: speed },
      uIntensity: { value: intensity },
    };

    let quadMesh: THREE.Mesh | null = null;
    let particleSystem: THREE.Points | null = null;
    let particlePositions: Float32Array;
    let particleVelocities: Float32Array;
    const PARTICLE_COUNT = 18000;

    // Pick shader or particle geometry based on active prototype
    if (activeProto === "particles") {
      const geo = new THREE.BufferGeometry();
      particlePositions = new Float32Array(PARTICLE_COUNT * 3);
      particleVelocities = new Float32Array(PARTICLE_COUNT * 3);
      const scales = new Float32Array(PARTICLE_COUNT);

      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const i3 = i * 3;
        particlePositions[i3] = (Math.random() - 0.5) * 16;
        particlePositions[i3 + 1] = (Math.random() - 0.5) * 10;
        particlePositions[i3 + 2] = (Math.random() - 0.5) * 8;

        particleVelocities[i3] = (Math.random() - 0.5) * 0.01;
        particleVelocities[i3 + 1] = (Math.random() - 0.5) * 0.01;
        particleVelocities[i3 + 2] = (Math.random() - 0.5) * 0.01;

        scales[i] = Math.random() * 2.5 + 0.5;
      }

      geo.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3));
      geo.setAttribute("aScale", new THREE.BufferAttribute(scales, 1));

      const particleMat = new THREE.ShaderMaterial({
        vertexShader: /* glsl */ `
          attribute float aScale;
          uniform float uTime;
          varying float vAlpha;
          void main() {
            vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
            gl_PointSize = aScale * (26.0 / -mvPosition.z);
            gl_Position = projectionMatrix * mvPosition;
            vAlpha = smoothstep(8.0, 2.0, -mvPosition.z) * 0.85;
          }
        `,
        fragmentShader: /* glsl */ `
          varying float vAlpha;
          void main() {
            float dist = length(gl_PointCoord - vec2(0.5));
            if (dist > 0.5) discard;
            float glow = smoothstep(0.5, 0.02, dist);
            gl_FragColor = vec4(vec3(0.9, 0.92, 1.0), glow * vAlpha);
          }
        `,
        transparent: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      });

      particleSystem = new THREE.Points(geo, particleMat);
      scene.add(particleSystem);
    } else {
      let fragmentShader = fluidCausticsFragmentShader;
      if (activeProto === "filament") fragmentShader = gravitationalFilamentFragmentShader;
      else if (activeProto === "volumetric") fragmentShader = volumetricFbmFragmentShader;
      else if (activeProto === "chrome") fragmentShader = liquidChromeFragmentShader;

      const mat = new THREE.ShaderMaterial({
        vertexShader: fullscreenVertexShader,
        fragmentShader,
        uniforms,
        depthTest: false,
        depthWrite: false,
      });

      quadMesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), mat);
      scene.add(quadMesh);
    }

    // Pointer Physics
    let targetX = 0.5;
    let targetY = 0.5;
    let curX = 0.5;
    let curY = 0.5;
    let prevX = 0.5;
    let prevY = 0.5;
    let wakeEnergy = 0.0;

    const onPointerMove = (e: MouseEvent) => {
      targetX = e.clientX / window.innerWidth;
      targetY = 1.0 - e.clientY / window.innerHeight;
    };
    window.addEventListener("mousemove", onPointerMove, { passive: true });

    // Performance / FPS tracking
    let frameCount = 0;
    let lastFpsCheck = performance.now();
    let rafId: number;

    const animate = (time: number) => {
      rafId = requestAnimationFrame(animate);

      // FPS update
      frameCount++;
      if (time - lastFpsCheck >= 1000) {
        setFps(Math.round((frameCount * 1000) / (time - lastFpsCheck)));
        frameCount = 0;
        lastFpsCheck = time;
      }

      // Pointer lerp & wake momentum
      curX += (targetX - curX) * (0.12 * reactivity);
      curY += (targetY - curY) * (0.12 * reactivity);

      const speedMag = Math.hypot(targetX - prevX, targetY - prevY);
      wakeEnergy += (Math.min(speedMag * 10.0 * reactivity, 1.0) - wakeEnergy) * 0.15;
      prevX = curX;
      prevY = curY;

      uniforms.uTime.value = time * 0.001;
      uniforms.uMouse.value.set(curX, curY);
      uniforms.uMouseStrength.value = wakeEnergy;
      uniforms.uSpeed.value = speed;
      uniforms.uIntensity.value = intensity;

      if (activeProto === "particles" && particleSystem) {
        const positions = particleSystem.geometry.attributes.position.array as Float32Array;
        const mouseWorldX = (curX - 0.5) * 14;
        const mouseWorldY = (curY - 0.5) * 8;

        for (let i = 0; i < PARTICLE_COUNT; i++) {
          const i3 = i * 3;
          let px = positions[i3];
          let py = positions[i3 + 1];
          let pz = positions[i3 + 2];

          // Mouse vortex pull
          const dx = mouseWorldX - px;
          const dy = mouseWorldY - py;
          const distSq = dx * dx + dy * dy + 0.8;
          const force = (0.015 * reactivity * wakeEnergy) / distSq;

          particleVelocities[i3] += dx * force + (Math.sin(time * 0.001 + py * 0.5) * 0.002 * speed);
          particleVelocities[i3 + 1] += dy * force + (Math.cos(time * 0.001 + px * 0.5) * 0.002 * speed);
          particleVelocities[i3 + 2] += (Math.sin(time * 0.0008 + pz) * 0.0015 * speed);

          // Damping
          particleVelocities[i3] *= 0.96;
          particleVelocities[i3 + 1] *= 0.96;
          particleVelocities[i3 + 2] *= 0.96;

          positions[i3] += particleVelocities[i3];
          positions[i3 + 1] += particleVelocities[i3 + 1];
          positions[i3 + 2] += particleVelocities[i3 + 2];

          // Boundary warp
          if (positions[i3] > 8) positions[i3] = -8;
          if (positions[i3] < -8) positions[i3] = 8;
          if (positions[i3 + 1] > 5) positions[i3 + 1] = -5;
          if (positions[i3 + 1] < -5) positions[i3 + 1] = 5;
        }
        particleSystem.geometry.attributes.position.needsUpdate = true;
        renderer.render(scene, pCamera);
      } else {
        renderer.render(scene, camera);
      }
    };

    rafId = requestAnimationFrame(animate);

    const onResize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      renderer.setSize(w, h);
      uniforms.uResolution.value.set(w, h);
      pCamera.aspect = w / h;
      pCamera.updateProjectionMatrix();
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", onPointerMove);
      window.removeEventListener("resize", onResize);
      if (quadMesh) {
        quadMesh.geometry.dispose();
        (quadMesh.material as THREE.Material).dispose();
      }
      if (particleSystem) {
        particleSystem.geometry.dispose();
        (particleSystem.material as THREE.Material).dispose();
      }
      renderer.dispose();
    };
  }, [activeProto, speed, intensity, reactivity]);

  // ── Custom Smooth Cursor ──
  useEffect(() => {
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let targetX = mouseX;
    let targetY = mouseY;
    let animId: number;

    const onPointerMove = (e: PointerEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    const cursorLoop = () => {
      mouseX += (targetX - mouseX) * 0.85;
      mouseY += (targetY - mouseY) * 0.85;
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
      }
      animId = requestAnimationFrame(cursorLoop);
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    animId = requestAnimationFrame(cursorLoop);

    if (enableCursor) {
      document.documentElement.classList.add("valeran-custom-cursor");
    } else {
      document.documentElement.classList.remove("valeran-custom-cursor");
    }

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      document.documentElement.classList.remove("valeran-custom-cursor");
      cancelAnimationFrame(animId);
    };
  }, [enableCursor]);

  const currentInfo = PROTOTYPES.find((p) => p.id === activeProto) || PROTOTYPES[0];

  return (
    <>
      {/* ── Fixed Fullscreen WebGL Background Canvas ── */}
      <div ref={canvasContainerRef} className={styles.canvasHost} />

      {/* ── 13U Precision Square Cursor ── */}
      {enableCursor && (
        <div ref={cursorRef} className={styles.cursorSquare} aria-hidden="true">
          <div className={styles.cDot} />
        </div>
      )}

      {/* ── Transparent UI Integration Preview (To test readability & glassmorphism) ── */}
      {showUiOverlay && (
        <section className={styles.previewUiContainer}>
          <div className={styles.previewHeroBox}>
            <span className={styles.previewBadge}>13 UTOPIA // SIGNATURE ATMOSPHERE LAB</span>
            <h1 className={styles.previewHeading}>
              DIGITAL SUPREMACY <br />
              <span className={styles.previewGradientText}>PRECISION ARCHITECTURE</span>
            </h1>
            <p className={styles.previewSubheading}>
              Testing transparency, optical depth, and high-contrast typography across five Awwwards-tier visual shaders engineered for 13 Utopia.
            </p>

            <div className={styles.previewMetricsGrid}>
              <div className={styles.previewGlassCard}>
                <span className={styles.metricNumber}>100%</span>
                <span className={styles.metricLabel}>PURE OBSIDIAN BASE</span>
              </div>
              <div className={styles.previewGlassCard}>
                <span className={styles.metricNumber}>0.0ms</span>
                <span className={styles.metricLabel}>LAYOUT REFLOW PENALTY</span>
              </div>
              <div className={styles.previewGlassCard}>
                <span className={styles.metricNumber}>{fps} FPS</span>
                <span className={styles.metricLabel}>REAL-TIME GPU PIPELINE</span>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── Interactive Director Control HUD ── */}
      <aside
        className={`${styles.directorHUD} ${isCollapsed ? styles.hudCollapsed : ""}`}
        aria-label="Awwwards Shader Prototype Lab"
      >
        <div className={styles.hudTopRow}>
          <div className={styles.hudBadgeGroup}>
            <span className={styles.hudLiveDot} />
            <span className={styles.hudTag}>PROTOTYPE LAB // {fps} FPS</span>
          </div>

          <button
            type="button"
            onClick={() => setIsCollapsed(!isCollapsed)}
            className={styles.collapseToggleBtn}
          >
            {isCollapsed ? "✦ CONTROLS" : "— COLLAPSE"}
          </button>
        </div>

        {!isCollapsed && (
          <div className={styles.hudBody}>
            {/* Prototype Selector */}
            <div className={styles.protoSelectorSection}>
              <span className={styles.sectionLabel}>SELECT BACKGROUND PROTOTYPE</span>
              <div className={styles.protoButtonsList}>
                {PROTOTYPES.map((p) => (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => setActiveProto(p.id)}
                    className={`${styles.protoBtn} ${activeProto === p.id ? styles.protoBtnActive : ""}`}
                  >
                    <div className={styles.protoBtnTop}>
                      <span className={styles.protoBtnName}>{p.name}</span>
                      <span className={styles.protoBtnCategory}>{p.category}</span>
                    </div>
                    <p className={styles.protoBtnTagline}>{p.tagline}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Current Active Specs */}
            <div className={styles.activeSpecBox}>
              <h3 className={styles.activeSpecTitle}>{currentInfo.name}</h3>
              <p className={styles.activeSpecDesc}>{currentInfo.description}</p>
            </div>

            {/* Live Tuners */}
            <div className={styles.controlsSection}>
              <div className={styles.sliderRow}>
                <div className={styles.sliderHeader}>
                  <span className={styles.sliderLabel}>Animation Speed</span>
                  <span className={styles.sliderValue}>{speed.toFixed(1)}x</span>
                </div>
                <input
                  type="range"
                  min={0.2}
                  max={3.0}
                  step={0.1}
                  value={speed}
                  onChange={(e) => setSpeed(parseFloat(e.target.value))}
                  className={styles.rangeInput}
                />
              </div>

              <div className={styles.sliderRow}>
                <div className={styles.sliderHeader}>
                  <span className={styles.sliderLabel}>Shader Contrast / Intensity</span>
                  <span className={styles.sliderValue}>{intensity.toFixed(1)}x</span>
                </div>
                <input
                  type="range"
                  min={0.3}
                  max={2.5}
                  step={0.1}
                  value={intensity}
                  onChange={(e) => setIntensity(parseFloat(e.target.value))}
                  className={styles.rangeInput}
                />
              </div>

              <div className={styles.sliderRow}>
                <div className={styles.sliderHeader}>
                  <span className={styles.sliderLabel}>Cursor Reactivity Force</span>
                  <span className={styles.sliderValue}>{reactivity.toFixed(1)}x</span>
                </div>
                <input
                  type="range"
                  min={0.0}
                  max={2.5}
                  step={0.1}
                  value={reactivity}
                  onChange={(e) => setReactivity(parseFloat(e.target.value))}
                  className={styles.rangeInput}
                />
              </div>

              <div className={styles.toggleRow}>
                <label className={styles.toggleLabel}>
                  <input
                    type="checkbox"
                    checked={showUiOverlay}
                    onChange={(e) => setShowUiOverlay(e.target.checked)}
                    className={styles.checkboxInput}
                  />
                  <span>Show Transparent Website UI Test Overlay</span>
                </label>
              </div>

              <div className={styles.toggleRow}>
                <label className={styles.toggleLabel}>
                  <input
                    type="checkbox"
                    checked={enableCursor}
                    onChange={(e) => setEnableCursor(e.target.checked)}
                    className={styles.checkboxInput}
                  />
                  <span>13U Precision Square Cursor</span>
                </label>
              </div>
            </div>

            <div className={styles.hudFooter}>
              <span className={styles.footerTag}>13 UTOPIA // AWWWARDS BACKGROUND LAB</span>
              <span className={styles.footerSub}>STAGING ONLY · MAIN PRODUCTION UNTOUCHED</span>
            </div>
          </div>
        )}
      </aside>
    </>
  );
}
