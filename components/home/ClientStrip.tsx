"use client";

import Link from "next/link";
import { clients } from "@/content/site";
import styles from "@/styles/home/ClientStrip.module.css";

/**
 * Thin trust bridge — one ticker only. No radar, no dual rows.
 */
export function ClientStrip() {
  const row = [...clients, ...clients];

  return (
    <section className={styles.wrap} aria-label="Selected clients">
      <div className={styles.bar}>
        <p className={styles.kicker}>In market with</p>
        <div className={styles.trackWrap}>
          <ul className={styles.track} aria-hidden="true">
            {row.map((name, i) => (
              <li key={`${name}-${i}`} className={styles.item}>
                {name}
                <span className={styles.sep} aria-hidden="true">
                  ✦
                </span>
              </li>
            ))}
          </ul>
        </div>
        <Link href="/work" className={styles.link} data-magnetic>
          Work →
        </Link>
      </div>
      <p className={styles.srOnly}>{clients.join(", ")}</p>
    </section>
  );
}
