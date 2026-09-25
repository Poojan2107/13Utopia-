"use client";

import Link from "next/link";
import { BeliefHeadline } from "./BeliefHeadline";
import styles from "@/styles/home/BrandWorldview.module.css";

/**
 * Section 02 — Belief
 * Finished editorial chapter after the silk hero.
 * Thought on the left. Conviction on the right.
 */
export function BrandWorldview() {
  return (
    <section
      id="worldview"
      className={styles.wrap}
      aria-labelledby="worldview-title"
    >
      <div className={styles.atmosphere} aria-hidden="true" />

      <div className={styles.spread}>
        <div className={styles.frame}>
          <header className={styles.marker}>
            <span className={styles.index}>02</span>
            <span className={styles.markerRule} aria-hidden="true" />
            <span className={styles.markerLabel}>Belief</span>
          </header>

          <div className={styles.columns}>
            <div className={styles.left}>
              <BeliefHeadline />
            </div>

            <div className={styles.right}>
              <span className={styles.responseRule} aria-hidden="true" />
              <p className={styles.lead}>
                Most businesses don&rsquo;t need another obvious answer.
              </p>
              <p className={styles.body}>
                We question what already works, find what doesn&rsquo;t, and build
                what comes next.
              </p>
            </div>
          </div>

          <footer className={styles.footer}>
            <p className={styles.footerNote}>What follows is how we work.</p>
            <Link href="#worlds" className={styles.footerLink}>
              Create · Build · Grow
              <span aria-hidden="true"> →</span>
            </Link>
          </footer>
        </div>
      </div>
    </section>
  );
}
