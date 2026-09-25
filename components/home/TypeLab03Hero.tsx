"use client";

import { TransparentBustVideo } from "./TransparentBustVideo";
import styles from "@/styles/home/TypeLab03Hero.module.css";

type Face = "noe" | "tiempos";

type Props = {
  face?: Face;
};

/**
 * Typography Lab 03 — final decision test.
 * Sculpture + quiet asymmetric type only.
 * No silk, stars, CTAs, micro-labels, or gold type accents.
 */
export function TypeLab03Hero({ face = "tiempos" }: Props) {
  const faceClass = face === "noe" ? styles.faceNoe : styles.faceTiempos;

  return (
    <section
      className={`${styles.hero} ${faceClass}`}
      aria-label="13 UTOPIA typography lab 03"
      data-lab="03"
      data-face={face}
    >
      <div className={styles.media} aria-hidden="true">
        <div className={styles.videoWrapper}>
          <TransparentBustVideo />
        </div>
      </div>

      <div className={styles.overlay} aria-hidden="true" />

      <div className={styles.stage}>
        <aside className={styles.primary}>
          <p className={styles.brand}>13 Utopia</p>

          <h1 className={styles.lead}>
            <span className={styles.be}>BE</span>
            <span className={styles.word}>Unreal.</span>
          </h1>

          <p className={styles.copy}>
            We build brands, technology and growth systems
            <br />
            for businesses that refuse the obvious.
          </p>
        </aside>

        <aside className={styles.secondary}>
          <p className={styles.echo}>
            <span className={styles.beQuiet}>BE</span>
            <span className={styles.wordQuiet}>unreasonable.</span>
          </p>

          <p className={styles.copyQuiet}>
            We question what exists.
            <br />
            Then build what comes next.
          </p>
        </aside>
      </div>
    </section>
  );
}
