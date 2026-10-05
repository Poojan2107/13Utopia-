"use client";

import { motion } from "framer-motion";
import styles from "@/styles/framer/FramerSectionCTA.module.css";

export function FramerSectionCTA() {
  return (
    <section className={styles.section} aria-label="Initiation" id="contact">
      <div className={styles.container}>
        {/* Editorial Sub-Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className={styles.eyebrow}
        >
          <span className={styles.liveDot} />
          <span>ACCEPTING SELECT CLIENT COMMISSIONS</span>
        </motion.div>

        {/* Monumental Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className={styles.headline}
        >
          START SOMETHING <br />
          <span className={styles.headlineSpan}>UNREASONABLE.</span>
        </motion.h2>

        {/* Elegant Editorial Manifesto */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className={styles.narrativeGroup}
        >
          <p className={styles.narrativeLine}>A brand to create.</p>
          <p className={styles.narrativeLine}>A product to build.</p>
          <p className={styles.narrativeLine}>A category to dominate.</p>
        </motion.div>

        {/* Action Cluster */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className={styles.actions}
        >
          <a
            href="mailto:poojan@13utopia.com?subject=Initiate%20Alliance%20%E2%80%94%2013%20UTOPIA"
            className={styles.primaryButton}
            data-cursor="hover"
          >
            <span>Initiate Alliance</span>
            <span className={styles.arrowIcon} aria-hidden="true">→</span>
          </a>

          <div className={styles.conciergeBlock}>
            <span className={styles.conciergeLabel}>DIRECT CONCIERGE:</span>
            <a
              href="mailto:poojan@13utopia.com"
              className={styles.emailLink}
              data-cursor="hover"
            >
              poojan@13utopia.com
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
