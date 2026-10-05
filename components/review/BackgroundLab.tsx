"use client";

import { useEffect, useRef, useState } from "react";
import styles from "@/styles/review/BackgroundLab.module.css";

export type ValeranTheme =
  | "valeran-terracotta"
  | "obsidian-silver"
  | "cosmic-amethyst"
  | "champagne-gold";

interface ThemeOption {
  id: ValeranTheme;
  name: string;
  badge: string;
  tag: string;
  description: string;
  baseBg: string;
  coreColor: string;
  midColor: string;
  outerColor: string;
  cursorColor: string;
}

const THEME_OPTIONS: ThemeOption[] = [
  {
    id: "valeran-terracotta",
    name: "Authentic Valeran (Warm Amber / Terracotta)",
    badge: "VALERAN EXACT",
    tag: "WARM EDITORIAL NOIR",
    description: "Exact 1:1 color grading from valeran.eu with warm terracotta-bronze spotlight, dark charcoal base, and tactile film grain.",
    baseBg: "#0a0807",
    coreColor: "rgba(173, 67, 57, 0.22)",
    midColor: "rgba(60, 30, 20, 0.12)",
    outerColor: "rgba(10, 8, 7, 0.98)",
    cursorColor: "#eae4d9",
  },
  {
    id: "obsidian-silver",
    name: "13 Utopia Obsidian Silver (Platinum Noir)",
    badge: "13U SIGNATURE",
    tag: "MONOCHROME LUXURY",
    description: "Deep obsidian pitch void with specular platinum-silver torchlight that illuminates our 3D chrome emblem with razor clarity.",
    baseBg: "#030303",
    coreColor: "rgba(255, 255, 255, 0.16)",
    midColor: "rgba(140, 145, 160, 0.08)",
    outerColor: "rgba(3, 3, 3, 0.98)",
    cursorColor: "#ffffff",
  },
  {
    id: "cosmic-amethyst",
    name: "Deep Cosmic Amethyst (Violet / Indigo)",
    badge: "ATMOSPHERIC",
    tag: "SPATIAL SPECTRUM",
    description: "Deep space aesthetic with ethereal ultraviolet and deep indigo torchlight reacting smoothly to cursor movement.",
    baseBg: "#040308",
    coreColor: "rgba(130, 90, 240, 0.18)",
    midColor: "rgba(35, 45, 95, 0.10)",
    outerColor: "rgba(4, 3, 8, 0.98)",
    cursorColor: "#e6e0fa",
  },
  {
    id: "champagne-gold",
    name: "Champagne & Liquid Bronze",
    badge: "HIGH LUXURY",
    tag: "WARM BRONZE",
    description: "Subtle brushed gold and warm champagne ambient lighting with analog grain for premium brand storytelling.",
    baseBg: "#070605",
    coreColor: "rgba(215, 175, 105, 0.19)",
    midColor: "rgba(80, 60, 30, 0.10)",
    outerColor: "rgba(7, 6, 5, 0.98)",
    cursorColor: "#f3eedc",
  },
];

export function BackgroundLab() {
  const [activeTheme, setActiveTheme] = useState<ValeranTheme>("valeran-terracotta");
  const [spotlightRadius, setSpotlightRadius] = useState<number>(750);
  const [enableCursor, setEnableCursor] = useState<boolean>(true);
  const [isHoveringInteractive, setIsHoveringInteractive] = useState<boolean>(false);
  const [grainOpacity, setGrainOpacity] = useState<number>(0.065);
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

  const ambientBgRef = useRef<HTMLDivElement | null>(null);
  const customCursorRef = useRef<HTMLDivElement | null>(null);

  const currentTheme = THEME_OPTIONS.find((t) => t.id === activeTheme) || THEME_OPTIONS[0];

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

    // Track hovered elements for cursor expansion
    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.getAttribute("role") === "button" ||
        target.getAttribute("data-cursor") === "hover"
      ) {
        setIsHoveringInteractive(true);
      } else {
        setIsHoveringInteractive(false);
      }
    };

    // Smooth Lerping Loop for 120fps fluid cursor spotlight
    const loop = () => {
      mouseX += (targetX - mouseX) * 0.12;
      mouseY += (targetY - mouseY) * 0.12;

      if (ambientBgRef.current) {
        ambientBgRef.current.style.setProperty("--mouse-x", `${mouseX}px`);
        ambientBgRef.current.style.setProperty("--mouse-y", `${mouseY}px`);
      }

      if (customCursorRef.current) {
        customCursorRef.current.style.transform = `translate3d(${targetX}px, ${targetY}px, 0) translate(-50%, -50%)`;
      }

      animId = requestAnimationFrame(loop);
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("mouseover", onMouseOver, { passive: true });
    animId = requestAnimationFrame(loop);

    // Hide native cursor on body when custom cursor is active
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
      {/* ── 01. Valeran Dynamic Mouse-Responsive Spotlight Layer ── */}
      <div
        ref={ambientBgRef}
        className={styles.ambientSpotlight}
        style={{
          backgroundColor: currentTheme.baseBg,
          backgroundImage: `radial-gradient(${spotlightRadius}px circle at var(--mouse-x, 50vw) var(--mouse-y, 50vh), ${currentTheme.coreColor} 0%, ${currentTheme.midColor} 45%, ${currentTheme.outerColor} 80%)`,
        }}
        aria-hidden="true"
      />

      {/* ── 02. Analog Film Grain Dither Overlay (Eliminates Banding) ── */}
      <div
        className={styles.filmGrain}
        style={{ opacity: grainOpacity }}
        aria-hidden="true"
      />

      {/* ── 03. Valeran Minimalist Square Dot Cursor ── */}
      {enableCursor && (
        <div
          ref={customCursorRef}
          className={`${styles.valeranCursor} ${
            isHoveringInteractive ? styles.cursorHovered : ""
          }`}
          style={{ backgroundColor: currentTheme.cursorColor }}
          aria-hidden="true"
        />
      )}

      {/* ── 04. Floating Director HUD (Staging Controls) ── */}
      <aside
        className={`${styles.directorHUD} ${isCollapsed ? styles.hudCollapsed : ""}`}
        aria-label="Valeran Effect Director Lab"
      >
        <div className={styles.hudTopRow}>
          <div className={styles.hudBadgeGroup}>
            <span className={styles.hudLiveDot} />
            <span className={styles.hudTag}>VALERAN LAB // REVIEW ONLY</span>
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
            <h2 className={styles.hudTitle}>Valeran Visual Study Lab</h2>
            <p className={styles.hudSub}>
              Interactive recreation of <strong>valeran.eu</strong>&apos;s cursor-responsive spotlight, film grain, and custom cursor.
            </p>

            {/* Theme Selectors */}
            <div className={styles.buttonList}>
              {THEME_OPTIONS.map((theme) => (
                <button
                  key={theme.id}
                  type="button"
                  onClick={() => setActiveTheme(theme.id)}
                  className={`${styles.hudBtn} ${activeTheme === theme.id ? styles.hudBtnActive : ""}`}
                >
                  <div className={styles.btnMeta}>
                    <span className={styles.btnName}>{theme.name}</span>
                    <span className={styles.btnBadge}>{theme.badge}</span>
                  </div>
                  <p className={styles.btnDesc}>{theme.description}</p>
                </button>
              ))}
            </div>

            {/* Fine-Tuning Controls */}
            <div className={styles.controlsSection}>
              <div className={styles.controlRow}>
                <span className={styles.controlLabel}>Spotlight Radius ({spotlightRadius}px)</span>
                <input
                  type="range"
                  min="400"
                  max="1200"
                  step="50"
                  value={spotlightRadius}
                  onChange={(e) => setSpotlightRadius(Number(e.target.value))}
                  className={styles.rangeInput}
                />
              </div>

              <div className={styles.controlRow}>
                <span className={styles.controlLabel}>Film Grain ({(grainOpacity * 100).toFixed(1)}%)</span>
                <input
                  type="range"
                  min="0"
                  max="0.18"
                  step="0.01"
                  value={grainOpacity}
                  onChange={(e) => setGrainOpacity(Number(e.target.value))}
                  className={styles.rangeInput}
                />
              </div>

              <div className={styles.toggleRow}>
                <label className={styles.toggleLabel}>
                  <input
                    type="checkbox"
                    checked={enableCursor}
                    onChange={(e) => setEnableCursor(e.target.checked)}
                    className={styles.checkboxInput}
                  />
                  <span>Enable Valeran Square Dot Cursor (7px)</span>
                </label>
              </div>
            </div>

            <div className={styles.hudFooter}>
              <span className={styles.footerTag}>ACTIVE: {currentTheme.name}</span>
              <span className={styles.footerSub}>STAGING ONLY · NOT TOUCHING MAIN ROUTE</span>
            </div>
          </div>
        )}
      </aside>
    </>
  );
}
