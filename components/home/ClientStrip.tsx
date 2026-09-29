"use client";

import Link from "next/link";
import { clients } from "@/content/site";
import styles from "@/styles/home/ClientStrip.module.css";

const CLIENT_MARKS: Record<string, { prefix?: string; icon?: string }> = {
  OOKO: { icon: "◎" },
  "Mayur Dairy": { icon: "❖" },
  BAS: { icon: "▲" },
  "Tanya's Dental House": { icon: "✦" },
  "Fujitec Express": { icon: "⚡" },
  "Odhani Concept": { icon: "✧" },
  VHNM: { icon: "◆" },
  ZuuZuu: { icon: "●" },
  "Navkar Tubes & Tools": { icon: "⚙" },
  Pehnaava: { icon: "✶" },
  "Rayon Lab Tech": { icon: "◈" },
  "Kripal Homes": { icon: "⬡" },
};

/**
 * Client Trust Ticker — High-contrast luxury client marks.
 */
export function ClientStrip() {
  const row = [...clients, ...clients];

  return (
    <section className={styles.wrap} aria-label="Selected clients">
      <div className={styles.bar}>
        <p className={styles.kicker}>In Market With</p>
        <div className={styles.trackWrap}>
          <ul className={styles.track} aria-hidden="true">
            {row.map((name, i) => {
              const meta = CLIENT_MARKS[name];
              return (
                <li key={`${name}-${i}`} className={styles.item}>
                  {meta?.icon ? (
                    <span className={styles.itemIcon} aria-hidden="true">
                      {meta.icon}
                    </span>
                  ) : null}
                  <span className={styles.itemName}>{name}</span>
                  <span className={styles.sep} aria-hidden="true">
                    ·
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
        <Link href="/work" className={styles.link} data-magnetic>
          <span>Proof</span>
          <span aria-hidden="true"> →</span>
        </Link>
      </div>
      <p className={styles.srOnly}>{clients.join(", ")}</p>
    </section>
  );
}
