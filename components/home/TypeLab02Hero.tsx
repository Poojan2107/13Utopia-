"use client";

import Link from "next/link";
import { GoldSilkCurtain } from "./GoldSilkCurtain";
import { TransparentBustVideo } from "./TransparentBustVideo";
import styles from "@/styles/home/TypeLab02Hero.module.css";

type Face = "noe" | "tiempos";

type Props = {
  face?: Face;
};

/**
 * Typography Lab 02 — behaviour test.
 * Same sculpture + silk. Quiet type. No fashion italics,
 * no gold headlines, no micro-labels, no mirrored twin blocks.
 */
export function TypeLab02Hero({ face = "tiempos" }: Props) {
  const faceClass = face === "noe" ? styles.faceNoe : styles.faceTiempos;

  return (
    <section
      className={`${styles.hero} ${faceClass}`}
      aria-label="13 UTOPIA typography lab 02"
      data-lab="02"
      data-face={face}
    >
      <div className={styles.media} aria-hidden="true">
        <GoldSilkCurtain />
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

        <div className={styles.floor}>
          <Link href="/connect/start-a-project" className={styles.cta}>
            Start a project
          </Link>
        </div>
      </div>
    </section>
  );
}
