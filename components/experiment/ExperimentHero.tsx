"use client";

import { ExperimentHeroTypography } from "./ExperimentHeroTypography";
import { HeroEnter } from "@/components/motion/HeroEnter";
import styles from "./ExperimentHero.module.css";

/**
 * ExperimentHero — Dedicated Sandbox Hero for /exp and /experiment routes.
 * Centered compound lockup: Enlarged common BE with stacked UNREAL and UNREASONABLE.
 */
export function ExperimentHero() {
  return (
    <section className={styles.hero} id="hero" aria-label="13 UTOPIA EXPERIMENT">
      <HeroEnter>
        {/* Subtle Spatial Ambient Glow */}
        <div className={styles.ambientField} aria-hidden="true" />

        {/* Foreground Layer: Centered Monumental Typography */}
        <div className={styles.typeOverlay}>
          <h1 className={styles.srOnly}>BE UNREAL. BE UNREASONABLE.</h1>
          <ExperimentHeroTypography />
        </div>
      </HeroEnter>
    </section>
  );
}
