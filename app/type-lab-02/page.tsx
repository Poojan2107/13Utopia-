import type { Metadata } from "next";
import { TypeLab02Hero } from "@/components/home/TypeLab02Hero";
import styles from "@/styles/app/type-lab.module.css";

export const metadata: Metadata = {
  title: "Typography Lab 02 | 13 UTOPIA",
  robots: { index: false, follow: false },
};

/**
 * Lab 02 — behaviour over novelty.
 * Same sculpture + silk. Quiet asymmetric typesetting.
 * No gold headlines, micro-labels, or mirrored fashion blocks.
 */
export default function TypeLab02Page() {
  return (
    <div className={styles.page}>
      <header className={styles.intro}>
        <p className={styles.kicker}>Typography lab 02</p>
        <h1 className={styles.title}>Quiet type. Same sculpture.</h1>
        <p className={styles.lede}>
          This test asks whether 13 Utopia still works when we stop using the AI-premium
          tricks: no gold headlines, no tracked micro-labels, no mirrored giant italics,
          no CREATE · BUILD · GROW in the hero.
        </p>
        <p className={styles.uiNote}>
          Sculpture and silk are unchanged. Personality comes from scale, case, and
          asymmetry — not from an exotic serif. Two quiet faces in Noe / Tiempos
          territory (proxies until licensed files land).
        </p>
        <p className={styles.uiNote}>
          <a href="/type-lab-02">← Lab 02</a>
          {" · "}
          <a href="/type-lab-03">Lab 03 (stripped) →</a>
        </p>
      </header>

      <section className={styles.block} id="lab02-tiempos">
        <div className={styles.badge}>
          <span className={styles.badgeId}>02 · Tiempos territory</span>
          <span className={styles.badgeFace}>
            Tiempos Headline
            <span className={styles.badgeProxy}> · proxy Newsreader</span>
          </span>
          <span className={styles.badgeNote}>
            Editorial / publishing. BE quiet · Unreal. prominent · unreasonable. as
            echo, not twin.
          </span>
        </div>
        <TypeLab02Hero face="tiempos" />
      </section>

      <section className={styles.block} id="lab02-noe">
        <div className={styles.badge}>
          <span className={styles.badgeId}>02 · Noe territory</span>
          <span className={styles.badgeFace}>
            Noe Display
            <span className={styles.badgeProxy}> · proxy Source Serif 4</span>
          </span>
          <span className={styles.badgeNote}>
            Same behaviour, different face character. Compare personality — not layout.
          </span>
        </div>
        <TypeLab02Hero face="noe" />
      </section>

      <footer className={styles.footer}>
        <p>
          If this feels more human than Lab 01, the answer is behaviour — not a louder
          font. Lock direction before Section 02.
        </p>
        <a href="/">← Homepage</a>
      </footer>
    </div>
  );
}
