"use client";

import Link from "next/link";
import styles from "@/styles/home/HomeCTASection.module.css";

/**
 * HomeCTASection — Section 07
 * Plus-X inspired monumental commission initiation section.
 */
export function HomeCTASection() {
  return (
    <section
      className={styles.ctaSection}
      id="commission"
      aria-label="Initiate Commission with 13 Utopia"
    >
      <div className={styles.ctaContainer}>
        <div className={styles.eyebrow}>
          <span className={styles.dot} />
          <span>INITIATE COMMISSION // 2026–2027</span>
        </div>

        <h2 className={styles.title}>
          READY TO TRANSCEND<br />
          <span className={styles.titleHighlight}>THE DEFAULT?</span>
        </h2>

        <p className={styles.subtitle}>
          We take on a strictly limited number of commissions per quarter to ensure 
          obsessive craft, bespoke GPU engineering, and categorical market dominance.
        </p>

        <div className={styles.actions}>
          <a
            href="mailto:contact@13utopia.com"
            className={styles.primaryBtn}
            data-magnetic
          >
            <span>START A COMMISSION</span>
            <span className={styles.btnArrow}>→</span>
          </a>

          <Link href="/model" className={styles.secondaryBtn} data-magnetic>
            <span>INSPECT 3D EMBLEM</span>
          </Link>
        </div>

        <div className={styles.telemetryFooter}>
          <span>AVAILABILITY: Q2/Q3 2026</span>
          <span>·</span>
          <span>GLOBAL CLIENTELE (EST / PST / UTC)</span>
          <span>·</span>
          <span>ENCRYPTED DISPATCH</span>
        </div>
      </div>
    </section>
  );
}
