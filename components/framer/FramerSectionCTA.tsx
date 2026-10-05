"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import styles from "@/styles/framer/FramerSectionCTA.module.css";

export function FramerSectionCTA() {
  return (
    <section className={styles.section} aria-label="Initiation" id="contact">
      <div className={styles.container}>
        {/* Monumental Headline in One Single Line */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className={styles.headline}
        >
          START SOMETHING UNREASONABLE.
        </motion.h2>

        {/* Narrative Line in One Single Horizontal Line */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className={styles.narrativeLine}
        >
          <span>A brand to create.</span>
          <span className={styles.dotSep}>·</span>
          <span>A product to build.</span>
          <span className={styles.dotSep}>·</span>
          <span>A category to dominate.</span>
        </motion.p>

        {/* Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className={styles.actions}
        >
          <Link
            href="/contact"
            className={styles.primaryButton}
            data-cursor="hover"
          >
            <span>Start a Project</span>
            <span className={styles.arrowIcon} aria-hidden="true">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
