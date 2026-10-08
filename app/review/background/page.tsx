"use client";

import { useState } from "react";
import Link from "next/link";
import { SteelChamberCanvas } from "@/components/review/SteelChamberCanvas";
import { Plus3DCanvas } from "@/components/plus-ex/Plus3DCanvas";
import { SiteHeader } from "@/components/layout";
import styles from "@/styles/plus-ex/Continuous3DStory.module.css";

export default function BackgroundReviewPage() {
  const [showOverlay, setShowOverlay] = useState(false);
  const [glowLevel, setGlowLevel] = useState<"normal" | "vibrant" | "soft">("vibrant");
  const [anisoLevel, setAnisoLevel] = useState<"crisp" | "normal" | "subtle">("crisp");

  const glowMultiplier = glowLevel === "vibrant" ? 1.35 : glowLevel === "soft" ? 0.75 : 1.0;
  const anisoMultiplier = anisoLevel === "crisp" ? 1.4 : anisoLevel === "subtle" ? 0.6 : 1.0;

  return (
    <div
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        backgroundColor: "#000000",
        overflow: "hidden",
        color: "#ffffff",
        fontFamily: "var(--font-display, sans-serif)",
      }}
    >
      {/* 01. Real-Time Brushed Steel Anisotropic Chamber Background */}
      <SteelChamberCanvas
        glowIntensity={glowMultiplier}
        anisoStrength={anisoMultiplier}
        interactive={true}
      />

      {/* 02. Header branding */}
      <SiteHeader />

      {/* 03. Optional Hero Typography & 3D Monolith Overlay */}
      {showOverlay && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 5,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            pointerEvents: "none",
          }}
        >
          {/* Centered 3D Monolith Emblem */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              zIndex: 1,
            }}
          >
            <Plus3DCanvas progress={0} entryProgress={1} />
          </div>

          {/* Monumental Hero Lockup */}
          <div
            className={styles.heroLockup}
            style={{ position: "relative", zIndex: 3, pointerEvents: "auto" }}
          >
            <div className={styles.monumentLockup}>
              <div className={styles.beCommonBlock}>
                <span className={styles.beWord}>BE</span>
              </div>
              <div className={styles.stackedBlock}>
                <span className={styles.wordTop}>UNREAL</span>
                <span className={styles.wordBottom}>UNREASONABLE</span>
              </div>
            </div>

            <p className={styles.heroLeadText}>
              13 Utopia is a creative technology and growth company building brands, products,
              and systems for ambitious organisations.
            </p>
          </div>
        </div>
      )}

      {/* 04. Minimalist Director HUD Bar */}
      <div
        style={{
          position: "fixed",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 50,
          display: "flex",
          alignItems: "center",
          gap: "0.85rem",
          padding: "0.55rem 1.1rem",
          background: "rgba(12, 14, 18, 0.85)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(255, 230, 190, 0.15)",
          borderRadius: "9999px",
          boxShadow: "0 12px 40px rgba(0, 0, 0, 0.75)",
          fontSize: "0.75rem",
          letterSpacing: "0.06em",
          textTransform: "uppercase",
        }}
      >
        <span style={{ color: "rgba(255, 240, 215, 0.6)", fontWeight: 600 }}>
          Steel Chamber Lab
        </span>

        <div style={{ width: 1, height: 16, background: "rgba(255, 255, 255, 0.15)" }} />

        {/* Toggle Overlay Button */}
        <button
          onClick={() => setShowOverlay(!showOverlay)}
          style={{
            background: showOverlay ? "rgba(240, 190, 110, 0.25)" : "rgba(255, 255, 255, 0.06)",
            color: showOverlay ? "#ffe6ba" : "#cccccc",
            border: showOverlay
              ? "1px solid rgba(240, 190, 110, 0.45)"
              : "1px solid rgba(255, 255, 255, 0.12)",
            borderRadius: "9999px",
            padding: "0.35rem 0.85rem",
            cursor: "pointer",
            fontWeight: 600,
            transition: "all 0.2s ease",
          }}
        >
          {showOverlay ? "Hide Content (Pure BG)" : "Show Hero Overlay"}
        </button>

        {/* Glow Preset Selector */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.35rem" }}>
          <span style={{ color: "rgba(255, 255, 255, 0.45)", fontSize: "0.68rem" }}>Glow:</span>
          {(["vibrant", "normal", "soft"] as const).map((level) => (
            <button
              key={level}
              onClick={() => setGlowLevel(level)}
              style={{
                background:
                  glowLevel === level ? "rgba(255, 255, 255, 0.2)" : "transparent",
                color: glowLevel === level ? "#ffffff" : "rgba(255, 255, 255, 0.5)",
                border: "none",
                borderRadius: "4px",
                padding: "0.2rem 0.45rem",
                cursor: "pointer",
                fontSize: "0.68rem",
              }}
            >
              {level}
            </button>
          ))}
        </div>

        {/* Anisotropic Grain Preset Selector */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.35rem" }}>
          <span style={{ color: "rgba(255, 255, 255, 0.45)", fontSize: "0.68rem" }}>Grain:</span>
          {(["crisp", "normal", "subtle"] as const).map((level) => (
            <button
              key={level}
              onClick={() => setAnisoLevel(level)}
              style={{
                background:
                  anisoLevel === level ? "rgba(255, 255, 255, 0.2)" : "transparent",
                color: anisoLevel === level ? "#ffffff" : "rgba(255, 255, 255, 0.5)",
                border: "none",
                borderRadius: "4px",
                padding: "0.2rem 0.45rem",
                cursor: "pointer",
                fontSize: "0.68rem",
              }}
            >
              {level}
            </button>
          ))}
        </div>

        <div style={{ width: 1, height: 16, background: "rgba(255, 255, 255, 0.15)" }} />

        {/* Return to Main Link */}
        <Link
          href="/"
          style={{
            color: "rgba(255, 255, 255, 0.65)",
            textDecoration: "none",
            fontSize: "0.7rem",
            display: "flex",
            alignItems: "center",
            gap: "0.25rem",
          }}
        >
          <span>Main (/)</span>
          <span>&rarr;</span>
        </Link>
      </div>
    </div>
  );
}
