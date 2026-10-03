"use client";

import { TransparentBustVideo } from "@/components/home/TransparentBustVideo";
import styles from "@/styles/home/HomeNarrativeSection.module.css";

/**
 * HomeNarrativeSection — Chapter 02
 * Editorial Philosophy & Digital Human Sculpture:
 * Monumental typography, two-column architectural thesis,
 * transparent WebGL metallic bust sculpture, and telemetry ticker.
 */
export function HomeNarrativeSection() {
  return (
    <section
      className={styles.narrativeSection}
      id="philosophy"
      aria-label="13 Utopia Philosophy & Manifesto"
    >
      <div className={styles.container}>
        {/* Top Eyebrow */}
        <div className={styles.sectionEyebrow}>
          <span className={styles.indexNum}>CHAPTER 02 // IDENTITY & PHILOSOPHY</span>
          <span className={styles.categoryLabel}>ANOMALOUS COMPUTATION</span>
        </div>

        {/* Main Editorial & Bust Stage */}
        <div className={styles.heroGrid}>
          {/* Left Column: Thesis & Pillars */}
          <div className={styles.textColumn}>
            <div className={styles.headlineBlock}>
              <h2 className={styles.headline}>
                WE QUESTION INHERITED ASSUMPTIONS.<br />
                WE SCULPT WHAT COMES NEXT.
              </h2>
              <div className={styles.manifestoPill}>
                <span className={styles.pillText}>EST. 2026 // ANOMALOUS DIGITAL REALITIES</span>
              </div>
            </div>

            <div className={styles.pillarsGrid}>
              <div className={styles.pillarItem}>
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

              <div className={styles.pillarItem}>
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
          </div>

          {/* Right Column: WebGL Transparent Metallic Digital Human Sculpture */}
          <div className={styles.bustColumn}>
            <div className={styles.bustFrame}>
              <TransparentBustVideo className={styles.bustCanvas} />
              <div className={styles.bustAura} aria-hidden="true" />
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
