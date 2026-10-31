"use client";

import React from "react";
import styles from "./about.module.css";

export function AboutHero() {
  return (
    <section className={styles.heroSection} id="hero">
      {/* Horizontal Crosshairs Grid */}
      <div className={styles.crosshairs}>
        <span className={styles.crosshair}>+</span>
        <span className={styles.crosshair}>+</span>
        <span className={styles.crosshair}>+</span>
        <span className={styles.crosshair}>+</span>
        <span className={styles.crosshair}>+</span>
      </div>

      {/* Massive LUSION typography */}
      <h1 className={styles.heroWordmark}>Lusion</h1>

      {/* Hero Bottom Row */}
      <div className={styles.heroBottomRow}>
        <div />
        <div className={styles.scrollExplore}>
          <span className={styles.scrollDot} />
          <span>Scroll to explore</span>
        </div>
      </div>
    </section>
  );
}
