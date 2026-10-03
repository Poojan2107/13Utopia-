"use client";

import { CTA3DCanvas } from "./CTA3DCanvas";
import styles from "@/styles/home/HomeCTASection.module.css";

/**
 * HomeCTASection — Section 05 (Initiation Finale)
 * The 3D 13 Monolith ascends smoothly from behind the portfolio section
 * as the grand centerpiece behind the call-to-action typography.
 */
export function HomeCTASection() {
  return (
    <section
      className={styles.ctaSection}
      id="commission"
      aria-label="Initiate Commission with 13 Utopia"
    >
      {/* 3D 13 Monolith Emergence Canvas */}
      <div className={styles.canvasBackground} aria-hidden="true">
        <CTA3DCanvas />
      </div>

      <div className={styles.ctaContainer}>
        <h2 className={styles.title}>
          READY TO<br />
          <span className={styles.titleHighlight}>START BUILDING?</span>
        </h2>

        <p className={styles.subtitle}>
          Tell us what you&apos;re working on. We&apos;ll tell you how we can help.
        </p>

        <div className={styles.actions}>
          <a
            href="mailto:contact@13utopia.com?subject=Project%20Commission%20Inquiry"
            className={styles.primaryBtn}
            data-magnetic
          >
            <span>Start a Project</span>
          </a>

          <a href="/work" className={styles.secondaryBtn} data-magnetic>
            <span>View Portfolio</span>
          </a>
        </div>
      </div>
    </section>
  );
}
