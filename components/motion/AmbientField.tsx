"use client";

import { HeroStarfieldBackground } from "./hero-starfield";
import styles from "@/styles/motion/AmbientField.module.css";

interface AmbientFieldProps {
  showEmblem?: boolean;
  emblemOffsetX?: number;
}

/**
 * Sitewide atmosphere — the same procedural stars as the hero black-hole sky.
 * The accretion disk / event horizon stay hero-only.
 */
export function AmbientField({ showEmblem = false }: AmbientFieldProps) {
  return (
    <div className={styles.root} aria-hidden="true">
      <div className={styles.starLayer}>
        <HeroStarfieldBackground />
      </div>
    </div>
  );
}
