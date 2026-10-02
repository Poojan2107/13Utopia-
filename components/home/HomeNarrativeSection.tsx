"use client";

import styles from "@/styles/home/HomeNarrativeSection.module.css";

/**
 * HomeNarrativeSection — Section 03
 * Plus-X inspired editorial philosophy and manifesto section:
 * Monumental typography, two-column architectural thesis, and core principles.
 */
export function HomeNarrativeSection() {
  return (
    <section
      className={styles.narrativeSection}
      id="philosophy"
      aria-label="13 Utopia Philosophy & Manifesto"
    >
      <div className={styles.container}>
        {/* Monumental Editorial Headline */}
        <div className={styles.headlineBlock}>
          <h2 className={styles.headline}>
            WE QUESTION INHERITED ASSUMPTIONS.<br />
            WE SCULPT WHAT COMES NEXT.
          </h2>
          <div className={styles.manifestoPill}>
            <span className={styles.pillText}>EST. 2026 // ANOMALOUS DIGITAL REALITIES</span>
          </div>
        </div>

        {/* Two-Column Philosophical Grid */}
        <div className={styles.columnsGrid}>
          {/* Left Column */}
          <div className={styles.columnItem}>
            <span className={styles.colIndex}>01 / ANOMALY AS STRATEGY</span>
            <h3 className={styles.colTitle}>The default was never an option.</h3>
            <p className={styles.colBody}>
              In an internet saturated with template conformity, safety is commercial extinction. 
              We architect anomalies—digital platforms and brand ecosystems so uncompromisingly crafted 
              that they instantly redefine expectations across their entire sector.
            </p>
            <div className={styles.colTag}>
              <span>CATEGORICAL DOMINANCE</span>
              <span>·</span>
              <span>BESPOKE SHADERS</span>
            </div>
          </div>

          {/* Right Column */}
          <div className={styles.columnItem}>
            <span className={styles.colIndex}>02 / ZERO COMPROMISE CRAFT</span>
            <h3 className={styles.colTitle}>Where engineering meets sculpture.</h3>
            <p className={styles.colBody}>
              Every interaction is engineered with millisecond precision. We merge real-time WebGL, 
              fluid physics, and architectural typography to turn passive screen time into an immersive, 
              tactile experience that builds enduring cultural reverence.
            </p>
            <div className={styles.colTag}>
              <span>GPU ACCELERATION</span>
              <span>·</span>
              <span>0.00s LATENCY</span>
            </div>
          </div>
        </div>

        {/* Minimal Bottom Metric Ticker */}
        <div className={styles.tickerRow}>
          <div className={styles.tickerItem}>
            <span className={styles.tValue}>100%</span>
            <span className={styles.tLabel}>Bespoke Handcrafted Code</span>
          </div>
          <div className={styles.tickerItem}>
            <span className={styles.tValue}>$100M+</span>
            <span className={styles.tLabel}>Client Enterprise Value</span>
          </div>
          <div className={styles.tickerItem}>
            <span className={styles.tValue}>13</span>
            <span className={styles.tLabel}>Global Design Honors</span>
          </div>
          <div className={styles.tickerItem}>
            <span className={styles.tValue}>0.00s</span>
            <span className={styles.tLabel}>Interaction Latency</span>
          </div>
        </div>
      </div>
    </section>
  );
}
