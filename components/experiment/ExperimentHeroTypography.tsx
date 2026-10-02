"use client";

import styles from "./ExperimentHeroTypography.module.css";

/**
 * ExperimentHeroTypography — Centered Compound Tagline Lockup:
 * - Center of the screen
 * - "BE" enlarged and common on the left
 * - Stacked on the right: "UNREAL" on top, and "UNREASONABLE" underneath
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
    </div>
  );
}
