"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styles from "@/styles/framer/FramerSectionCTA.module.css";

export function FramerSectionCTA() {
  const [delhiTime, setDelhiTime] = useState("");
  const [torontoTime, setTorontoTime] = useState("");

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setDelhiTime(
        now.toLocaleTimeString("en-US", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        })
      );
      setTorontoTime(
        now.toLocaleTimeString("en-US", {
          timeZone: "America/Toronto",
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        })
      );
    };
    update();
    const timer = setInterval(update, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className={styles.section} aria-label="Section 09: Initiation" id="contact">
      <div className={styles.container}>
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className={styles.eyebrow}
        >
          <span className={styles.eyebrowNum}>09 // 10</span>
          <span className={styles.eyebrowDot}>·</span>
          <span className={styles.eyebrowLabel}>INITIATION</span>
        </motion.div>

        {/* Monumental Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className={styles.headline}
        >
          START SOMETHING UNREASONABLE.
        </motion.h2>

        {/* Narrative */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className={styles.subBox}
        >
          <p className={styles.intentLine}>A brand to create.</p>
          <p className={styles.intentLine}>A product to build.</p>
          <p className={styles.intentLine}>A business to grow.</p>
          <p className={styles.intentLineHighlight}>
            Or something that does not fit neatly into any of those.
          </p>
        </motion.div>

        {/* Primary CTA & Direct Concierge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className={styles.actions}
        >
          <a
            href="mailto:poojan@13utopia.com?subject=Initiate%20Alliance%20%E2%80%94%2013%20UTOPIA"
            className={styles.primaryButton}
            data-cursor="hover"
          >
            <span>INITIATE ALLIANCE</span>
            <span className={styles.arrowIcon}>→</span>
          </a>

          <div className={styles.directContact}>
            <span className={styles.contactLabel}>DIRECT CONCIERGE:</span>
            <a
              href="mailto:poojan@13utopia.com"
              className={styles.emailLink}
              data-cursor="hover"
            >
              poojan@13utopia.com
            </a>
          </div>
        </motion.div>

        {/* Studio Real-time Status */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className={styles.telemetryBar}
        >
          <div className={styles.nodeStatus}>
            <span className={styles.statusDot} />
            <span className={styles.statusLabel}>ACCEPTING Q1/Q2 ALLIANCES</span>
          </div>

          <div className={styles.timeNodes}>
            <span className={styles.timeNode}>
              DELHI {delhiTime || "IST"}
            </span>
            <span className={styles.nodeDot}>·</span>
            <span className={styles.timeNode}>
              TORONTO {torontoTime || "EST"}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
