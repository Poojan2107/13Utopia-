"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import styles from "@/styles/review/BackgroundLab.module.css";
import { fullscreenVertexShader, trailFragmentShader } from "@/components/review/TrailShaders";
import { nebulaFragmentShader } from "@/components/review/NebulaShaders";

export function BackgroundLab() {
  const [enableMouseTrail, setEnableMouseTrail] = useState<boolean>(true);
  const [enableCursor, setEnableCursor] = useState<boolean>(true);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isDragMode, setIsDragMode] = useState<boolean>(false);
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
  const [fpsCap, setFpsCap] = useState<number>(24);

  const canvasContainerRef = useRef<HTMLDivElement | null>(null);
  const cursorRef = useRef<HTMLDivElement | null>(null);

  // 13 Utopia Exact Signature Monochrome Palette (Space Void, Graphite, Liquid Silver, Titanium)
  const baseColor: [number, number, number] = [0.0, 0.0, 0.0];        // #000000 Space Void
  const darkColor: [number, number, number] = [0.03, 0.03, 0.03];     // #080808 Graphite Plume
  const midColor: [number, number, number] = [0.09, 0.09, 0.09];      // #171717 Liquid Silver
  const brightColor: [number, number, number] = [0.35, 0.35, 0.35];   // #595959 Titanium Highlight
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
      alpha: false,
      antialias: false,
      powerPreference: "high-performance",
    });
    // Valeran renders at half resolution for filmic softness + cheap frames
    renderer.setPixelRatio(0.5);
    renderer.setSize(width, height);
    renderer.setClearColor(0x090703, 1);
    container.appendChild(renderer.domElement);

    const gl = renderer.getContext();
    const hasFloat = !!gl.getExtension("EXT_color_buffer_float");
    const rtType = hasFloat ? THREE.HalfFloatType : THREE.UnsignedByteType;

    const rtSize = new THREE.Vector2(
      Math.max(2, Math.round(width * 0.5)),
      Math.max(2, Math.round(height * 0.5))
    );
    const makeTarget = () =>
      new THREE.WebGLRenderTarget(rtSize.x, rtSize.y, {
        minFilter: THREE.LinearFilter,
        magFilter: THREE.LinearFilter,
        type: rtType,
        depthBuffer: false,
        stencilBuffer: false,
      });

    let trailA = makeTarget();
    let trailB = makeTarget();

    const uniforms = {
      uTime: { value: 0 },
      uResolution: { value: new THREE.Vector2(width, height) },
      uMouse: { value: new THREE.Vector2(0.5, 0.5) },
      uMouseStrength: { value: 0.0 },
      uTrail: { value: trailB.texture as THREE.Texture },
      uTrailMix: { value: 1.0 },
      uBaseColor: { value: new THREE.Vector3(...baseColor) },
      uDarkColor: { value: new THREE.Vector3(...darkColor) },
      uBrightColor: { value: new THREE.Vector3(...brightColor) },
      uMidColor: { value: new THREE.Vector3(...midColor) },
    };

    const trailUniforms = {
      uPrev: { value: trailA.texture as THREE.Texture },
      uTexel: { value: new THREE.Vector2(1 / rtSize.x, 1 / rtSize.y) },
      uMouse: { value: new THREE.Vector2(0.5, 0.5) },
      uPrevMouse: { value: new THREE.Vector2(0.5, 0.5) },
      uAspect: { value: width / height },
      uDecay: { value: 0.955 },
      uRadius: { value: 0.085 },
      uStrength: { value: 0.0 },
    };

    const vertexShader = fullscreenVertexShader;
    const mat = new THREE.ShaderMaterial({
      uniforms,
      vertexShader: fullscreenVertexShader,
      fragmentShader: nebulaFragmentShader,
      depthWrite: false,
      depthTest: false,
    });

    const trailMat = new THREE.ShaderMaterial({
      uniforms: trailUniforms,
      vertexShader: fullscreenVertexShader,
      fragmentShader: trailFragmentShader,
      depthWrite: false,
      depthTest: false,
    });

    const quad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), mat);
    scene.add(quad);
    const trailQuad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), trailMat);
    const trailScene = new THREE.Scene();
    trailScene.add(trailQuad);

    let mouseX = 0.5;
    let mouseY = 0.5;
    let targetMouseX = 0.5;
    let targetMouseY = 0.5;
    let prevTrailX = 0.5;
    let prevTrailY = 0.5;
    let wakeEnergy = 0.0;

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

      // Pointer speed feeds the wake energy.
      const speed = Math.hypot(targetMouseX - prevTrailX, targetMouseY - prevTrailY);
      wakeEnergy += (Math.min(speed * 9.0, 1.0) - wakeEnergy) * 0.16;

      const trailOn = enableMouseTrail;

      trailUniforms.uPrevMouse.value.set(prevTrailX, prevTrailY);
      trailUniforms.uMouse.value.set(mouseX, mouseY);
      trailUniforms.uStrength.value = trailOn ? 0.42 + 0.58 * wakeEnergy : 0.0;
      trailUniforms.uDecay.value = trailOn ? 0.958 : 0.86;
      trailUniforms.uPrev.value = trailA.texture;

      renderer.setRenderTarget(trailB);
      renderer.render(trailScene, camera);
      renderer.setRenderTarget(null);

      const swap = trailA;
      trailA = trailB;
      trailB = swap;
      prevTrailX = mouseX;
      prevTrailY = mouseY;

      uniforms.uTime.value = currentTime * 0.001;
      uniforms.uMouse.value.set(mouseX, mouseY);
      uniforms.uMouseStrength.value = wakeEnergy;
      uniforms.uTrailMix.value = trailOn ? 1.0 : 0.0;
      uniforms.uTrail.value = trailA.texture;

      renderer.render(scene, camera);
    };

    rafId = requestAnimationFrame(animate);

    const rebuildTrailTargets = () => {
      trailA.dispose();
      trailB.dispose();
      rtSize.set(
        Math.max(2, Math.round(window.innerWidth * 0.5)),
        Math.max(2, Math.round(window.innerHeight * 0.5))
      );
      trailA = makeTarget();
      trailB = makeTarget();
      trailUniforms.uTexel.value.set(1 / rtSize.x, 1 / rtSize.y);
    };

    const onResize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      renderer.setSize(w, h);
      uniforms.uResolution.value.set(w, h);
      trailUniforms.uAspect.value = w / h;
      rebuildTrailTargets();
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", onPointerMove);
      window.removeEventListener("resize", onResize);
      quad.geometry.dispose();
      trailQuad.geometry.dispose();
      mat.dispose();
      trailMat.dispose();
      trailA.dispose();
      trailB.dispose();
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
