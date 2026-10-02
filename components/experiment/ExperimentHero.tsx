"use client";

import { PlusHeroTypography } from "@/components/home/PlusHeroTypography";
import { HeroEnter } from "@/components/motion/HeroEnter";
import styles from "./ExperimentHero.module.css";

/**
 * ExperimentHero — Dedicated Sandbox Hero for /exp and /experiment routes.
 * The production HomeHero remains 100% untouched while you experiment here!
 */
export function ExperimentHero() {
  return (
    <section className={styles.hero} id="hero" aria-label="13 UTOPIA EXPERIMENT">
      <HeroEnter>
        {/* Subtle Spatial Ambient Glow */}
        <div className={styles.ambientField} aria-hidden="true" />

        {/* Foreground Layer: Monumental Typography */}
        <div className={styles.typeOverlay}>
          <h1 className={styles.srOnly}>BE UNREAL. BE UNREASONABLE.</h1>
          <PlusHeroTypography />
        </div>
      </HeroEnter>
    </section>
  );
}
