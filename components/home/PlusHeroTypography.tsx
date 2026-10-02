"use client";

import styles from "@/styles/home/PlusHeroTypography.module.css";

/**
 * PlusHeroTypography:
 * - Upper Gap for Navbar clearance
 * - Single Centered Monolithic Line: BE UNREAL
 * - Under it: Small refined editorial statement: BE UNREASONABLE
 * - Grounding Monolith across the base: BE UNREAL · BE UNREASONABLE with UTOPIA
 */
export function PlusHeroTypography() {
  return (
    <div className={styles.heroLayout}>
      {/* ── Top Breathing Space for Header/Navbar ── */}
      <div className={styles.navbarGap} aria-hidden="true" />

      {/* ── Center Screen Monolithic Typography ── */}
      <div className={styles.centerContainer}>
        {/* Line 1: BE UNREAL in one single line in the centre */}
        <h1 className={styles.mainLine}>
          <span className={styles.wordBe}>BE</span>
          <span className={styles.wordUnreal}>UNREAL</span>
        </h1>

        {/* Line 2: small BE UNREASONABLE directly underneath */}
        <div className={styles.subStatement}>
          <span>BE UNREASONABLE</span>
        </div>
      </div>

      {/* ── Bottom Edge-to-Edge Unified Screen Anchor with UTOPIA ── */}
      <div className={styles.bottomUnifiedBlock}>
        <div className={styles.monumentalRow}>
          <span className={styles.unitUnreal}>BE UNREAL</span>
          <span className={styles.unitDivider}>·</span>
          <span className={styles.unitUnreasonable}>BE UNREASONABLE</span>
          <span className={styles.unitDivider}>·</span>
          <span className={styles.unitUtopia}>13 UTOPIA</span>
        </div>
      </div>
    </div>
  );
}
