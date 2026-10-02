"use client";

import styles from "./ExperimentHeroTypography.module.css";

/**
 * ExperimentHeroTypography — Full-Screen Monumental Tagline Lockup:
 * - Full Viewport (100vw × 100vh)
 * - Left 38vw / 100vh: Common Enlarged "BE" spanning full vertical height
 * - Right 62vw:
 *     - Top 50vh: "UNREAL"
 *     - Bottom 50vh: "UNREASONABLE"
 */
export function ExperimentHeroTypography() {
  return (
    <div className={styles.centerLayout}>
      {/* ── 01. Left Anchor: "BE" Common Enlarged Full-Height ── */}
      <div className={styles.beCommonBlock}>
        <span className={styles.beWord}>BE</span>
      </div>

      {/* ── 02. Right Stacked Branch: UNREAL + UNREASONABLE ── */}
      <div className={styles.stackedBlock}>
        <div className={styles.wordTopWrapper}>
          <span className={styles.wordTop}>UNREAL</span>
        </div>
        <div className={styles.wordBottomWrapper}>
          <span className={styles.wordBottom}>UNREASONABLE</span>
        </div>
      </div>
    </div>
  );
}
