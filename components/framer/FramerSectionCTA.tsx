"use client";

import { motion } from "framer-motion";
import styles from "@/styles/framer/FramerSectionCTA.module.css";

export function FramerSectionCTA() {
  return (
    <section className={styles.section} aria-label="Section 09: Initiation" id="contact">
      <div className={styles.container}>
        {/* Monolithic Glass Capsule Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className={styles.capsule}
        >
          {/* Top Architectural Meta Rail */}
          <div className={styles.capsuleHeader}>
            <div className={styles.metaLeft}>
              <span className={styles.liveBeacon} />
              <span className={styles.metaLabel}>09 // INITIATION DOSSIER</span>
              <span className={styles.metaDivider}>/</span>
              <span className={styles.metaSub}>GLOBAL CLIENT COMMISSIONS</span>
            </div>
            <div className={styles.metaRight}>
              <span className={styles.statusTag}>DIRECT BUILDER ACCESS</span>
            </div>
          </div>

          {/* Asymmetric Split Layout */}
          <div className={styles.splitGrid}>
            {/* Left Column: Manifesto & Proposition */}
            <div className={styles.leftCol}>
              <h2 className={styles.headline}>
                START SOMETHING <br />
                <span className={styles.headlineHighlight}>UNREASONABLE.</span>
              </h2>

              <p className={styles.narrative}>
                We partner with ambitious founders, enterprises, and category creators to build
                products and brands that redefine their industry standard.
              </p>

              <div className={styles.scopeMatrix}>
                <div className={styles.scopeItem}>
                  <span className={styles.scopeBullet}>01</span>
                  <span className={styles.scopeText}>Brand Strategy &amp; Spatial Experience</span>
                </div>
                <div className={styles.scopeItem}>
                  <span className={styles.scopeBullet}>02</span>
                  <span className={styles.scopeText}>Full-Stack Product Engineering &amp; AI</span>
                </div>
                <div className={styles.scopeItem}>
                  <span className={styles.scopeBullet}>03</span>
                  <span className={styles.scopeText}>Category-Dominant Search &amp; Growth</span>
                </div>
              </div>
            </div>

            {/* Right Column: Direct Conversion Console */}
            <div className={styles.rightCol}>
              <div className={styles.consoleCard}>
                <div className={styles.consoleHeader}>
                  <span className={styles.consoleTitle}>DIRECT ENGAGEMENT CONSOLE</span>
                  <span className={styles.slaBadge}>SLA &lt; 24H</span>
                </div>

                <p className={styles.consoleDesc}>
                  Every inquiry is handled directly by the founding partners. Zero pitch decks, zero bureaucratic middle layers.
                </p>

                <div className={styles.actionGroup}>
                  <a
                    href="mailto:poojan@13utopia.com?subject=Initiate%20Alliance%20%E2%80%94%2013%20UTOPIA"
                    className={styles.primaryButton}
                    data-cursor="hover"
                  >
                    <span>INITIATE ALLIANCE</span>
                    <span className={styles.arrowIcon}>→</span>
                  </a>

                  <div className={styles.directContactRow}>
                    <span className={styles.contactLabel}>DIRECT CONCIERGE:</span>
                    <a
                      href="mailto:poojan@13utopia.com"
                      className={styles.emailLink}
                      data-cursor="hover"
                    >
                      poojan@13utopia.com
                    </a>
                  </div>
                </div>

                <div className={styles.locationFooter}>
                  <div className={styles.locNode}>
                    <span className={styles.locDot} />
                    <span>AHMEDABAD, INDIA [HQ]</span>
                  </div>
                  <div className={styles.locNode}>
                    <span className={styles.locDot} />
                    <span>SCARBOROUGH, CANADA [NA]</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
