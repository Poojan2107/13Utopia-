"use client";

import React from "react";
import styles from "./studiomirage.module.css";

export function Hero() {
  const handleScrollDown = () => {
    const worksEl = document.getElementById("works");
    if (worksEl) {
      worksEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className={styles.heroSection}>
      <div className={styles.locationPill}>
        <span>Paris</span>
        <span>•</span>
        <span>Dubai</span>
      </div>

      <h1 className={styles.heroTitle}>Studio Mirage</h1>
      <h2 className={styles.heroSubtitle}>Creative Tech Studio</h2>

      <p className={styles.heroLead}>
        We craft immersive digital experiences at the intersection of luxury, culture, and high
        technology. Merging Parisian architectural refinement with visionary Middle Eastern
        ambition.
      </p>

      <button
        type="button"
        className={styles.scrollPrompt}
        onClick={handleScrollDown}
        aria-label="Scroll to explore projects"
      >
        <span>Scroll to start exploring</span>
        <svg
          className={styles.scrollArrow}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 4V20M12 20L18 14M12 20L6 14"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </section>
  );
}
