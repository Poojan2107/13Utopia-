"use client";

import React from "react";
import Image from "next/image";
import styles from "./studiomirage.module.css";

export function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className={styles.footer}>
      {/* Arabic Calligraphy Watermark in Background */}
      <div className={styles.arabicWatermark}>
        <Image
          src="/sites/studiomirage/images/logo-mirage-arabic.svg"
          alt=""
          width={900}
          height={300}
          style={{ width: "100%", height: "auto" }}
          priority
        />
      </div>

      <div className={styles.footerContent}>
        <div className={styles.footerTop}>
          <div className={styles.footerTagline}>
            <span className={styles.sectionTag}>// Ready to collaborate</span>
            <h2 className={styles.footerTitle}>Create the Unprecedented</h2>
            <p className={styles.footerSubtitle}>
              Whether you are conceiving a high-concept digital flagship, a spatial WebGL experience,
              or a global product reveal, we bring it into existence.
            </p>
          </div>

          <a href="mailto:contact@studiomirage.io" className={styles.contactBtn}>
            <span>Initiate a Project →</span>
          </a>
        </div>

        <div className={styles.footerBottom}>
          <div className={styles.socialList}>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              Instagram
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              LinkedIn
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              X / Twitter
            </a>
            <a
              href="https://www.awwwards.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              Awwwards
            </a>
          </div>

          <div>© {new Date().getFullYear()} Studio Mirage. Paris &amp; Dubai.</div>

          <button
            type="button"
            className={styles.backToTop}
            onClick={handleScrollToTop}
            aria-label="Back to top"
          >
            Back to Top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
