"use client";

import styles from "@/styles/home/PlusHeroTypography.module.css";

/**
 * PlusHeroTypography — Clean Monumental Architectural Typography:
 * - Top-Left: BE / UNREAL
 * - Middle-Right: BE
 * - Bottom: UNREASONABLE (100% full width)
 * - Micro-UI: Left capsule pill, right capsule badge, center scroll arrow
 */
export function PlusHeroTypography() {
  return (
    <div className={styles.heroLayout}>
      {/* ── 01. TOP-LEFT: BE / UNREAL (Top 50vh) ── */}
      <div className={styles.topLeftBlock}>
        <span className={styles.word}>BE</span>
        <span className={styles.word}>UNREAL</span>
      </div>

      {/* ── 02. MIDDLE-RIGHT: BE (50vh to 75vh) ── */}
      <div className={styles.middleRightBlock}>
        <span className={styles.word}>BE</span>
      </div>

      {/* ── 03. BOTTOM: UNREASONABLE (75vh to 100vh) ── */}
      <div className={styles.bottomBlock}>
        <span className={styles.wordUnreasonable}>UNREASONABLE</span>
      </div>
    </div>
  );
}
