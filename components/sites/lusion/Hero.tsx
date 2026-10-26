"use client";

import React, { useState, useEffect } from "react";
import styles from "./lusion.module.css";
import { HeroCanvas } from "./HeroCanvas";

export function Hero() {
  const [loadProgress, setLoadProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.floor(Math.random() * 15) + 8;
      if (progress >= 100) {
        progress = 100;
        setLoadProgress(100);
        setIsLoaded(true);
        clearInterval(interval);
      } else {
        setLoadProgress(progress);
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className={styles.heroSection}>
      {/* 3D WebGL Canvas Layer */}
      <div className={styles.canvasContainer}>
        <HeroCanvas />
      </div>

      {/* Hero Foreground Content */}
      <div className={styles.heroContent}>
        <div className={styles.heroTagline}>
          <span className={styles.heroPulse} />
          <span>Multidisciplinary 3D &amp; Digital Production</span>
        </div>

        <h1 className={styles.heroHeadline}>
          We design and produce{" "}
          <span className={styles.heroHeadlineHighlight}>3D visual storytelling</span>,
          immersive websites, and interactive digital experiences.
        </h1>

        <div className={styles.heroMeta}>
          <div className={styles.preloaderBadge}>
            <span>{isLoaded ? "EXPERIENCE READY" : `INITIALIZING ${loadProgress}%`}</span>
          </div>
          <span>Based in Bristol, UK · Collaborating Worldwide</span>
        </div>
      </div>
    </section>
  );
}
