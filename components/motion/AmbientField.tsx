"use client";

import styles from "@/styles/motion/AmbientField.module.css";

/**
 * Quiet gold atmosphere — CSS only.
 * No infinite GSAP loops / live blur (mainframe tax on pinned theaters).
 */
export function AmbientField() {
  return (
    <div className={styles.root} aria-hidden="true">
      <span className={`${styles.orb} ${styles.a}`} />
      <span className={`${styles.orb} ${styles.b}`} />
      <span className={`${styles.orb} ${styles.c}`} />
    </div>
  );
}
