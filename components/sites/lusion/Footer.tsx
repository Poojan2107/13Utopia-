"use client";

import React from "react";
import styles from "./lusion.module.css";

export function Footer() {
  return (
    <footer id="contact" className={styles.footerSection}>
      <div className={styles.footerContainer}>
        {/* Giant Call-to-Action */}
        <div className={styles.footerCtaBox}>
          <h2 className={styles.footerCtaTitle}>
            Is your big idea ready to go wild?
          </h2>

          <a href="mailto:hello@lusion.co" className={styles.footerEmailLink}>
            <span>hello@lusion.co</span>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 12h14m0 0-6-6m6 6-6 6"
              />
            </svg>
          </a>
        </div>

        {/* Footer Info Bottom */}
        <div className={styles.footerBottom}>
          <div>
            <div className={styles.footerColTitle}>Studio Location</div>
            <div className={styles.footerColText}>Suite 2, 9 Marsh Street</div>
            <div className={styles.footerColText}>Bristol, BS1 4AA, United Kingdom</div>
          </div>

          <div>
            <div className={styles.footerColTitle}>Inquiries</div>
            <div className={styles.footerColText}>New Business: hello@lusion.co</div>
            <div className={styles.footerColText}>Careers: jobs@lusion.co</div>
          </div>

          <div>
            <div className={styles.footerColTitle}>Connect</div>
            <div className={styles.footerLinks}>
              <a href="https://twitter.com/lusionltd" target="_blank" rel="noreferrer" className={styles.footerLink}>
                Twitter / X
              </a>
              <a href="https://instagram.com/lusionltd" target="_blank" rel="noreferrer" className={styles.footerLink}>
                Instagram
              </a>
              <a href="https://linkedin.com/company/lusion" target="_blank" rel="noreferrer" className={styles.footerLink}>
                LinkedIn
              </a>
            </div>
          </div>

          <div>
            <div className={styles.footerColTitle}>Architecture</div>
            <div className={styles.footerColText} style={{ color: "#64748b" }}>
              13 Utopia Isolated Clone Lab · Protected Workspace
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
