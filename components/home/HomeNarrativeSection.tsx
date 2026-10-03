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
        <span className={styles.indexNum}>CHAPTER 02 // IDENTITY & PHILOSOPHY</span>
        <span className={styles.categoryLabel}>ANOMALOUS DIGITAL REALITIES</span>
      </div>

      {/* Monumental Centered Digital Human Bust Stage */}
      <div className={styles.centerStage}>
        <TransparentBustVideo className={styles.bustCanvas} />
        <div className={styles.bustAura} aria-hidden="true" />
      </div>

      {/* Minimal Bottom Metric Ticker */}
      <div className={styles.bottomBar}>
        <div className={styles.bottomItem}>
          <span className={styles.itemValue}>100%</span>
          <span className={styles.itemLabel}>Bespoke Craft</span>
        </div>
        <div className={styles.bottomItem}>
          <span className={styles.itemValue}>$100M+</span>
          <span className={styles.itemLabel}>Enterprise Value</span>
        </div>
        <div className={styles.bottomItem}>
          <span className={styles.itemValue}>13</span>
          <span className={styles.itemLabel}>Design Honors</span>
        </div>
        <div className={styles.bottomItem}>
          <span className={styles.itemValue}>0.00s</span>
          <span className={styles.itemLabel}>Shader Latency</span>
        </div>
      </div>
    </section>
  );
}
