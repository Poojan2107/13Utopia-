import type { Metadata } from "next";
import styles from "@/styles/app/type-lab.module.css";

export const metadata: Metadata = {
  title: "Typography Lab (archive) | 13 UTOPIA",
  robots: { index: false, follow: false },
};

/** Archive — decision locked in Lab 03 → homepage */
export default function TypeLabPage() {
  return (
    <div className={styles.page}>
      <header className={styles.intro}>
        <p className={styles.kicker}>Typography lab 01 — archive</p>
        <h1 className={styles.title}>Decision locked.</h1>
        <p className={styles.lede}>
          Lab 01 compared faces. Lab 02 compared behaviour. Lab 03 stripped decoration.
          <strong> Tiempos direction + quiet asymmetric composition</strong> is locked on
          the homepage.
        </p>
        <p className={styles.uiNote}>
          <a href="/type-lab-03">Lab 03 (decision) →</a>
          {" · "}
          <a href="/">Homepage →</a>
        </p>
      </header>
    </div>
  );
}
