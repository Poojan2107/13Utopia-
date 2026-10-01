"use client";

import { motion } from "framer-motion";
import styles from "@/styles/framer/FramerSectionAbout.module.css";

const PRINCIPLES = [
  {
    verb: "DREAM",
    archetype: "LIKE AN ARTIST",
    desc: "Unchain creativity from industry benchmarks. If it looks like what everyone else is doing, throw it away.",
  },
  {
    verb: "THINK",
    archetype: "LIKE AN ANTHROPOLOGIST",
    desc: "Study the irrational human instincts, hidden rituals, and cultural currents that actually motivate decisions.",
  },
  {
    verb: "BUILD",
    archetype: "LIKE AN ENGINEER",
    desc: "Zero-bloat architecture, sub-second performance, and resilient code built to withstand real-world enterprise pressure.",
  },
  {
    verb: "GROW",
    archetype: "LIKE AN ENTREPRENEUR",
    desc: "Every creative move must directly compound your bottom line, client acquisition velocity, and enterprise equity.",
  },
];

export function FramerSectionAbout() {
  return (
    <section className={styles.section} aria-label="Section 08: About 13 UTOPIA" id="about">
      <div className={styles.container}>
        {/* Left Column: Manifesto & Studio Rigor */}
        <div className={styles.manifestoCol}>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className={styles.headline}
          >
            WE ARE NOT AN AGENCY. WE ARE STANDING INSIDE AN ANOMALY.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className={styles.bodyText}
          >
            Traditional agencies operate on billable hours, safe committee consensus, and generic recycled frameworks. We operate on sovereign conviction. We take on a maximum of six client alliances at any given moment, guaranteeing that senior architects and creative directors touch every single pixel and line of code.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className={styles.metricsBar}
          >
            <div className={styles.metricItem}>
              <span className={styles.metricVal}>06</span>
              <span className={styles.metricKey}>MAX ACTIVE ALLIANCES</span>
            </div>
            <div className={styles.metricDivider} />
            <div className={styles.metricItem}>
              <span className={styles.metricVal}>100%</span>
              <span className={styles.metricKey}>BESPOKE CODE (ZERO THEMES)</span>
            </div>
            <div className={styles.metricDivider} />
            <div className={styles.metricItem}>
              <span className={styles.metricVal}>24/7</span>
              <span className={styles.metricKey}>DELHI · TORONTO TELEMETRY</span>
            </div>
          </motion.div>
        </div>

        {/* Right Column: 4 Core Principles */}
        <div className={styles.principlesCol}>
          {PRINCIPLES.map((p, idx) => (
            <motion.div
              key={p.verb}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.8,
                delay: 0.15 + idx * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={styles.principleRow}
            >
              <div className={styles.principleHeader}>
                <span className={styles.principleNum}>0{idx + 1}</span>
                <span className={styles.principleVerb}>{p.verb}</span>
                <span className={styles.principleArchetype}>{p.archetype}</span>
              </div>
              <p className={styles.principleDesc}>{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
