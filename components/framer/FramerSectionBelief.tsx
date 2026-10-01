"use client";

import { motion } from "framer-motion";
import styles from "@/styles/framer/FramerSectionBelief.module.css";

const EASE = [0.16, 1, 0.3, 1] as const;

const REJECTS = ["SAME THINKING.", "SAME IDEAS.", "SAME OUTCOMES."];

/**
 * Belief — Section 02.
 * NexStudio statement density + 13U Work chapter craft:
 * full-bleed rules, monumental type, right meta rail.
 * Neue Montreal only. No bust.
 */
export function FramerSectionBelief() {
  return (
    <section className={styles.section} aria-label="Section 02: Belief">
      <div className={styles.eyebrow} aria-hidden="false">
        <span className={styles.eyebrowNum}>02 // 10</span>
        <span className={styles.eyebrowSep}>·</span>
        <span className={styles.eyebrowLabel}>CONVICTION</span>
        <span className={styles.eyebrowMeta}>SOVEREIGN // NOT THE DEFAULT</span>
      </div>

      <div className={styles.stage}>
        <div className={styles.grid}>
          <div className={styles.main}>
            <motion.p
              className={styles.kicker}
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.65, ease: EASE }}
            >
              <span className={styles.kickerNum}>02</span>
              CONVICTION
            </motion.p>

            <motion.h2
              className={styles.statement}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.95, delay: 0.1, ease: EASE }}
            >
              <span className={styles.lineGold}>Not our thing.</span>
              <span className={styles.line}>
                13 UTOPIA exists for businesses ready to question the default.
              </span>
              <span className={styles.line}>
                We imagine what could be and build what comes next.
              </span>
            </motion.h2>
          </div>

          <aside className={styles.rail}>
            <motion.div
              className={styles.railBlock}
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.85, delay: 0.22, ease: EASE }}
            >
              <p className={styles.railLabel}>THE OBVIOUS</p>
              <ul className={styles.rejectList}>
                {REJECTS.map((line, idx) => (
                  <li key={line} className={styles.rejectRow}>
                    <span className={styles.rejectText}>{line}</span>
                    <motion.span
                      className={styles.rejectBar}
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true, amount: 0.6 }}
                      transition={{
                        duration: 0.5,
                        delay: 0.4 + idx * 0.1,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      aria-hidden="true"
                    />
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              className={styles.railFoot}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, delay: 0.55, ease: EASE }}
            >
              <span className={styles.railFootKey}>01</span>
              <span className={styles.railFootVal}>Question</span>
              <span className={styles.railFootKey}>02</span>
              <span className={styles.railFootVal}>Imagine</span>
              <span className={styles.railFootKey}>03</span>
              <span className={styles.railFootVal}>Build</span>
            </motion.div>
          </aside>
        </div>
      </div>
    </section>
  );
}
