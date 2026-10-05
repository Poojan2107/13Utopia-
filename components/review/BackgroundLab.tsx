"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import styles from "@/styles/review/BackgroundLab.module.css";

export function BackgroundLab() {
  const [enableMouseTrail, setEnableMouseTrail] = useState<boolean>(true);
  const [enableCursor, setEnableCursor] = useState<boolean>(true);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isDragMode, setIsDragMode] = useState<boolean>(false);
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
  const [fpsCap, setFpsCap] = useState<number>(24);

  const canvasContainerRef = useRef<HTMLDivElement | null>(null);
  const cursorRef = useRef<HTMLDivElement | null>(null);

  // Exact 13 Utopia Main Monochrome Color Values
  const baseColor: [number, number, number] = [0.0, 0.0, 0.0];        // #000000 Space Void
  const darkColor: [number, number, number] = [0.03, 0.03, 0.03];     // Graphite Plume
  const brightColor: [number, number, number] = [0.22, 0.22, 0.24];   // Titanium Highlights
  const midColor: [number, number, number] = [0.09, 0.09, 0.095];     // Liquid Silver
  const cursorColor = "#FFFFFF";

  // ── 01. WebGL Volumetric Raymarch Nebula Shader Engine ──
  useEffect(() => {
    const container = canvasContainerRef.current;
    if (!container) return;

    container.innerHTML = "";

    const width = window.innerWidth;
    const height = window.innerHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: false,
      powerPreference: "high-performance",
    });
    // Valeran uses half-resolution scale for filmic blur + efficient render
    renderer.setPixelRatio(0.65);
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 1);
    container.appendChild(renderer.domElement);

    const uniforms = {
      uTime: { value: 0 },
      uResolution: { value: new THREE.Vector2(width, height) },
      uMouse: { value: new THREE.Vector2(0.5, 0.5) },
      uMouseTrailWeight: { value: enableMouseTrail ? 1.0 : 0.0 },
      uBaseColor: { value: new THREE.Vector3(...baseColor) },
      uDarkColor: { value: new THREE.Vector3(...darkColor) },
      uBrightColor: { value: new THREE.Vector3(...brightColor) },
      uMidColor: { value: new THREE.Vector3(...midColor) },
    };

    const vertexShader = `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position.xy, 0.0, 1.0);
      }
    `;

    const fragmentShader = `
      precision highp float;
      uniform float uTime;
      uniform vec2 uResolution;
      uniform vec2 uMouse;
      uniform float uMouseTrailWeight;
      uniform vec3 uBaseColor;
      uniform vec3 uDarkColor;
      uniform vec3 uBrightColor;
      uniform vec3 uMidColor;
      varying vec2 vUv;

      // ── OKLab Color Mixing Math ──
      vec3 rgb_to_oklab(vec3 c) {
        float l = 0.4122214708 * c.r + 0.5363325363 * c.g + 0.0514459929 * c.b;
        float m = 0.2119034982 * c.r + 0.6806995451 * c.g + 0.1073969566 * c.b;
        float s = 0.0883024619 * c.r + 0.2817188376 * c.g + 0.6299787005 * c.b;

        float l_ = pow(max(0.0, l), 1.0/3.0);
        float m_ = pow(max(0.0, m), 1.0/3.0);
        float s_ = pow(max(0.0, s), 1.0/3.0);

        return vec3(
          0.2104542553*l_ + 0.7936177850*m_ - 0.0040720468*s_,
          1.9779984951*l_ - 2.4285922050*m_ + 0.4505937099*s_,
          0.0259040371*l_ + 0.7827717662*m_ - 0.8086757660*s_
        );
      }

      vec3 oklab_to_rgb(vec3 c) {
        float l_ = c.x + 0.3963377774 * c.y + 0.2158037573 * c.z;
        float m_ = c.x - 0.1055613458 * c.y - 0.0638541728 * c.z;
        float s_ = c.x - 0.0894841775 * c.y - 1.2914855480 * c.z;

        float l = l_*l_*l_;
        float m = m_*m_*m_;
        float s = s_*s_*s_;

        return vec3(
          +4.0767434754 * l - 3.3077115913 * m + 0.2309699292 * s,
          -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s,
          -0.0041960863 * l - 0.7034186147 * m + 1.7076147010 * s
        );
      }

      vec3 oklab_mix(vec3 c1, vec3 c2, float t) {
        vec3 lab1 = rgb_to_oklab(c1);
        vec3 lab2 = rgb_to_oklab(c2);
        return oklab_to_rgb(mix(lab1, lab2, t));
      }

      // ── ACES Filmic Tone Mapping ──
      vec3 aces_filmic(vec3 x) {
        float a = 2.51;
        float b = 0.03;
        float c = 2.43;
        float d = 0.59;
        float e = 0.14;
        return clamp((x*(a*x+b))/(x*(c*x+d)+e), 0.0, 1.0);
      }

      // ── PCG2D Hash Film Grain ──
      float hash_grain(vec2 p, float seed) {
        p = fract(p * vec2(5.3983, 5.4427) + seed);
        p += dot(p.yx, p.xy + vec2(21.5351, 14.3137));
        return fract(p.x * p.y * 95.4337);
      }

      // ── Valeran 3D Dot-Product Noise Field ──
      float densityField(vec3 p, float t) {
        mat3 rot1 = mat3(
          0.8000,  0.6000,  0.0000,
         -0.4800,  0.6400,  0.6000,
          0.3600, -0.4800,  0.8000
        );

        float d = 0.0;
        float amp = 1.0;
        vec3 q = p;

        for (int i = 0; i < 3; i++) {
          q = rot1 * q * 1.62 + vec3(0.0, t * 0.15, t * 0.08);
          d += (dot(cos(q * 1.4), sin(q.yzx * 1.6))) * amp;
          amp *= 0.52;
        }

        return d;
      }

      void main() {
        vec2 uv = gl_FragCoord.xy / uResolution.xy;
        vec2 p = (gl_FragCoord.xy - 0.5 * uResolution.xy) / min(uResolution.x, uResolution.y);

        float t = uTime * 0.18;

        // Interactive Mouse Gravitational Warp (when enabled)
        vec2 mNorm = (uMouse - 0.5) * 2.0;
        float mDist = length(p - mNorm * 0.5);
        vec2 mWarp = (p - mNorm * 0.5) * exp(-mDist * 2.2) * 0.28 * uMouseTrailWeight;
        p -= mWarp;

        // Valeran Elliptical SDF Mask
        vec2 maskP = p;
        maskP.x *= 0.85;
        maskP.y *= 1.45;
        maskP += vec2(maskP.y * 0.48, 0.0);
        float ellipseMask = smoothstep(1.6, 0.15, length(maskP));

        // 40-Step Volumetric Raymarch
        vec3 ro = vec3(0.0, 0.0, 2.5);
        vec3 rd = normalize(vec3(p * 1.2, -1.0));

        float transmittance = 1.0;
        vec3 accumulatedLight = vec3(0.0);
        float stepSize = 0.075;

        for (int i = 0; i < 38; i++) {
          float dist = float(i) * stepSize;
          vec3 pos = ro + rd * dist;

          float d = densityField(pos * 0.95, t);
          d = clamp(d * 0.45 + 0.35, 0.0, 1.0);

          if (d > 0.01) {
            float density = d * ellipseMask * 0.18;

            // OKLab Color Grading across density
            vec3 colorStep = oklab_mix(uDarkColor, uMidColor, clamp(d * 1.2, 0.0, 1.0));
            colorStep = oklab_mix(colorStep, uBrightColor, clamp((d - 0.5) * 2.2, 0.0, 1.0));

            accumulatedLight += colorStep * density * transmittance;
            transmittance *= exp(-density * 1.8);

            if (transmittance < 0.05) break;
          }
        }

        // Composite over Base Layer (#000000 Space Void)
        vec3 finalColor = uBaseColor * transmittance + accumulatedLight;

        // ACES Filmic Tonemap
        finalColor = aces_filmic(finalColor);

        // PCG2D Animated Film Grain
        float grainSeed = floor(uTime * 24.0);
        float grain = hash_grain(gl_FragCoord.xy, grainSeed);
        finalColor += (grain - 0.5) * 0.038;

        gl_FragColor = vec4(finalColor, 1.0);
      }
    `;

    const mat = new THREE.ShaderMaterial({
      uniforms,
      vertexShader,
      fragmentShader,
      depthWrite: false,
      depthTest: false,
    });

    const quad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), mat);
    scene.add(quad);

    let mouseX = 0.5;
    let mouseY = 0.5;
    let targetMouseX = 0.5;
    let targetMouseY = 0.5;

    const onPointerMove = (e: MouseEvent) => {
      targetMouseX = e.clientX / window.innerWidth;
      targetMouseY = 1.0 - (e.clientY / window.innerHeight);
    };
    window.addEventListener("mousemove", onPointerMove, { passive: true });

    let rafId: number;
    let lastRenderTime = performance.now();
    const frameInterval = 1000 / fpsCap;

    const animate = (currentTime: number) => {
      rafId = requestAnimationFrame(animate);

      const delta = currentTime - lastRenderTime;
      if (delta < frameInterval) return;

      lastRenderTime = currentTime - (delta % frameInterval);

      mouseX += (targetMouseX - mouseX) * 0.12;
      mouseY += (targetMouseY - mouseY) * 0.12;

      uniforms.uTime.value = currentTime * 0.001;
      uniforms.uMouse.value.set(mouseX, mouseY);
      uniforms.uMouseTrailWeight.value = enableMouseTrail ? 1.0 : 0.0;

      renderer.render(scene, camera);
    };

    rafId = requestAnimationFrame(animate);

    const onResize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      renderer.setSize(w, h);
      uniforms.uResolution.value.set(w, h);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", onPointerMove);
      window.removeEventListener("resize", onResize);
      quad.geometry.dispose();
      mat.dispose();
      renderer.dispose();
    };
  }, [enableMouseTrail, fpsCap]);

  // ── 02. Valeran Exact `.cursor-square` Cursor System ──
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

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.getAttribute("role") === "button" ||
        target.getAttribute("data-cursor") === "hover";

      const isDraggable =
        target.getAttribute("data-cursor") === "drag" ||
        target.closest("[data-cursor='drag']");

      setIsHovered(!!isInteractive);
      setIsDragMode(!!isDraggable);
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
    window.addEventListener("mouseover", onMouseOver, { passive: true });
    animId = requestAnimationFrame(cursorLoop);

    if (enableCursor) {
      document.documentElement.classList.add("valeran-custom-cursor");
    } else {
      document.documentElement.classList.remove("valeran-custom-cursor");
    }

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("mouseover", onMouseOver);
      document.documentElement.classList.remove("valeran-custom-cursor");
      cancelAnimationFrame(animId);
    };
  }, [enableCursor]);

  return (
    <>
      {/* Fullscreen Fixed WebGL Nebula Shader Canvas */}
      <div ref={canvasContainerRef} className={styles.canvasHost} />

      {/* Valeran Exact `.cursor-square` System */}
      {enableCursor && (
        <div
          ref={cursorRef}
          className={`${styles.cursorSquare} ${isHovered ? styles.hovered : ""} ${
            isDragMode ? styles.dragMode : ""
          }`}
          aria-hidden="true"
        >
          <div
            className={styles.cDot}
            style={{ backgroundColor: cursorColor }}
          />
          <div className={styles.cDrag}>[ GLISSER ]</div>
        </div>
      )}

      {/* Minimal Floating Staging HUD */}
      <aside
        className={`${styles.directorHUD} ${isCollapsed ? styles.hudCollapsed : ""}`}
        aria-label="Valeran Shader Lab"
      >
        <div className={styles.hudTopRow}>
          <div className={styles.hudBadgeGroup}>
            <span className={styles.hudLiveDot} />
            <span className={styles.hudTag}>VALERAN WEBGL EFFECT // 13U EXACT PALETTE</span>
          </div>

          <button
            type="button"
            onClick={() => setIsCollapsed(!isCollapsed)}
            className={styles.collapseToggleBtn}
            title={isCollapsed ? "Expand Controls" : "Collapse Fullscreen"}
          >
            {isCollapsed ? "✦ CONTROLS" : "— COLLAPSE"}
          </button>
        </div>

        {!isCollapsed && (
          <div className={styles.hudBody}>
            <h2 className={styles.hudTitle}>13 Utopia × Valeran WebGL</h2>
            <p className={styles.hudSub}>
              13 Utopia&apos;s exact monochrome palette rendered via Valeran&apos;s 40-step volumetric raymarch nebula shader &amp; custom square cursor.
            </p>

            {/* Fine-Tuning Switches */}
            <div className={styles.controlsSection}>
              <div className={styles.toggleRow}>
                <label className={styles.toggleLabel}>
                  <input
                    type="checkbox"
                    checked={enableMouseTrail}
                    onChange={(e) => setEnableMouseTrail(e.target.checked)}
                    className={styles.checkboxInput}
                  />
                  <span>Interactive Fluid Mouse Wake</span>
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
                  <span>Valeran Square Cursor (10px → 20px)</span>
                </label>
              </div>

              <div className={styles.controlRow}>
                <span className={styles.controlLabel}>Framerate ({fpsCap} FPS)</span>
                <div className={styles.fpsGroup}>
                  <button
                    type="button"
                    onClick={() => setFpsCap(24)}
                    className={`${styles.fpsBtn} ${fpsCap === 24 ? styles.fpsBtnActive : ""}`}
                  >
                    24 FPS (Filmic Stepped)
                  </button>
                  <button
                    type="button"
                    onClick={() => setFpsCap(60)}
                    className={`${styles.fpsBtn} ${fpsCap === 60 ? styles.fpsBtnActive : ""}`}
                  >
                    60 FPS (Fluid)
                  </button>
                </div>
              </div>
            </div>

            <div className={styles.hudFooter}>
              <span className={styles.footerTag}>PALETTE: 13U EXACT (OBSIDIAN / SILVER / TITANIUM)</span>
              <span className={styles.footerSub}>STAGING LAB ONLY · PRODUCTION UNTOUCHED</span>
            </div>
          </div>
        )}
      </aside>
    </>
  );
}
