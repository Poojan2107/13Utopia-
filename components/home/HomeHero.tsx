"use client";

import { PlusHeroTypography } from "./PlusHeroTypography";
import { HeroEnter } from "@/components/motion/HeroEnter";
import styles from "@/styles/home/HomeHero.module.css";

/**
 * HomeHero — Plus-X Pure Monumental Composition:
 * Foreground Layer: Edge-to-Edge Monumental Kinetic Typography on Pure Dark Canvas
 */
export function HomeHero() {
  return (
    <section className={styles.hero} id="hero" aria-label="13 UTOPIA">
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
