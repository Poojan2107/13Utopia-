"use client";

import { TransparentBustVideo } from "@/components/home/TransparentBustVideo";
import styles from "@/styles/home/HomeNarrativeSection.module.css";

/**
 * HomeNarrativeSection — Chapter 02
 * Full-Bleed Center Stage Digital Human Sculpture:
 * Pure monumental centerpiece with transparent WebGL metallic bust
 * and minimalist architectural framing.
 */
export function HomeNarrativeSection() {
  return (
    <section
      className={styles.narrativeSection}
      id="philosophy"
      aria-label="13 Utopia Digital Human Sculpture"
    >
      {/* Top Section Header */}
      <div className={styles.topBar}>
        <span className={styles.indexNum}>CHAPTER 02 // WHO WE ARE</span>
        <span className={styles.categoryLabel}>13 UTOPIA</span>
      </div>

      {/* Monumental Centered Digital Human Bust Stage */}
      <div className={styles.centerStage}>
        <TransparentBustVideo className={styles.bustCanvas} />
        <div className={styles.bustAura} aria-hidden="true" />
      </div>

      {/* Minimal Bottom Metric Ticker */}
      <div className={styles.bottomBar}>
        <div className={styles.bottomItem}>
          <div className={styles.valueContainer}>
            <span className={styles.itemValue}>100%</span>
          </div>
          <span className={styles.itemLabel}>Custom-Built</span>
        </div>
        <div className={styles.bottomItem}>
          <div className={styles.valueContainer}>
            <span className={styles.itemValue}>6</span>
          </div>
          <span className={styles.itemLabel}>Capability Areas</span>
        </div>
        <div className={styles.bottomItem}>
          <div className={styles.valueContainer}>
            <span className={styles.itemValue}>2</span>
          </div>
          <span className={styles.itemLabel}>Global Offices</span>
        </div>
        <div className={styles.bottomItem}>
          <div className={styles.valueContainer}>
            <span className={styles.itemValueSmall}>CREATE · BUILD · GROW</span>
          </div>
          <span className={styles.itemLabel}>How We Work</span>
        </div>
      </div>
    </section>
  );
}
