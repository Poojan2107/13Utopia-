"use client";

import styles from "./ExperimentHeroTypography.module.css";

/**
 * ExperimentHeroTypography — Centered Tagline Composition:
 * - Center of the screen
 * - "BE" enlarged and common on the left
 * - Stacked on the right: "UNREAL", and under it "UNREASONABLE"
 */
export function ExperimentHeroTypography() {
  return (
    <div className={styles.centerLayout}>
      {/* ── Centerpiece Compound Lockup ── */}
      <div className={styles.monumentLockup}>
        {/* Common Enlarged "BE" */}
        <div className={styles.beCommonBlock}>
          <span className={styles.beWord}>BE</span>
        </div>

        {/* Stacked Branch: UNREAL + UNREASONABLE */}
        <div className={styles.stackedBlock}>
          <span className={styles.wordTop}>UNREAL</span>
          <span className={styles.wordBottom}>UNREASONABLE</span>
        </div>
      </div>

      {/* Micro-Telemetry Subline */}
      <div className={styles.subline}>
        <span>13 UTOPIA</span>
        <span className={styles.sublineDot} />
        <span>BRAND & DIGITAL MONUMENTS</span>
        <span className={styles.sublineDot} />
        <span>SCROLL TO DISCOVER</span>
      </div>
    </div>
  );
}
