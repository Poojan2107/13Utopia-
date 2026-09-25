import type { Metadata } from "next";
import { TypeLab03Hero } from "@/components/home/TypeLab03Hero";
import styles from "@/styles/app/type-lab.module.css";

export const metadata: Metadata = {
  title: "Typography Lab 03 | 13 UTOPIA",
  robots: { index: false, follow: false },
};

/**
 * Lab 03 — final decision test.
 * Sculpture + quiet type only. Decorative system stripped.
 * Does the typography itself feel like 13 Utopia?
 */
export default function TypeLab03Page() {
  return (
    <div className={styles.page}>
      <header className={styles.intro}>
        <p className={styles.kicker}>Typography lab 03 — final decision</p>
        <h1 className={styles.title}>Does the type feel like 13 Utopia?</h1>
        <p className={styles.lede}>
          Same quiet composition as Lab 02. Decorative system removed: no silk
          ribbons, no stars, no CTAs, no micro-labels, no gold type accents.
          Sculpture stays. If this still feels like the brand, we lock typography.
        </p>
        <p className={styles.uiNote}>
          Quieter + stranger + more intentional — not “more premium.”
        </p>
        <p className={styles.uiNote}>
          <a href="/type-lab-02">← Lab 02</a>
          {" · "}
          <a href="/type-lab">Lab 01</a>
        </p>
      </header>

      <section className={styles.block} id="lab03-tiempos">
        <div className={styles.badge}>
          <span className={styles.badgeId}>03 · Tiempos</span>
          <span className={styles.badgeFace}>
            Tiempos Headline
            <span className={styles.badgeProxy}> · proxy Newsreader</span>
          </span>
          <span className={styles.badgeNote}>
            Literary / intelligent / grounded. Preferred direction from Lab 02.
          </span>
        </div>
        <TypeLab03Hero face="tiempos" />
      </section>

      <section className={styles.block} id="lab03-noe">
        <div className={styles.badge}>
          <span className={styles.badgeId}>03 · Noe</span>
          <span className={styles.badgeFace}>
            Noe Display
            <span className={styles.badgeProxy}> · proxy Source Serif 4</span>
          </span>
          <span className={styles.badgeNote}>
            Cultured / expressive. Same stripped treatment — compare face only.
          </span>
        </div>
        <TypeLab03Hero face="noe" />
      </section>

      <footer className={styles.footer}>
        <p>
          Pick a face (or neither). Then we lock typography permanently and move to
          Section 02.
        </p>
        <a href="/">← Homepage</a>
      </footer>
    </div>
  );
}
