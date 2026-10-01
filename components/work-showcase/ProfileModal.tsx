"use client";

import React, { useEffect } from "react";
import styles from "./WorkShowcase.module.css";

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ProfileModal({ isOpen, onClose }: ProfileModalProps) {
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", onKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  return (
    <div
      className={`${styles.coverMenu} ${isOpen ? styles.coverMenuActive : ""}`}
      aria-hidden={!isOpen}
      role="dialog"
      aria-modal="true"
      aria-label="Portfolio channels"
    >
      <div className={styles.coverContent}>
        <div className={styles.coverInner}>
          <div className={styles.transmissionBody}>
            {/* Portfolio-only cover: work speaks; no agency pitch */}
            <p className={styles.coverQuietLine}>
              The work is the statement.
            </p>

            <ul className={styles.coverSocials}>
              <li>
                <span
                  className={styles.coverBackHomeDisabled}
                  aria-disabled="true"
                  title="Agency site coming soon"
                >
                  ← 13utopia.com
                </span>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.coverLink}
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.coverLink}
                >
                  X (Twitter)
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.coverLink}
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@13utopia.com"
                  className={styles.coverLinkGold}
                >
                  contact@13utopia.com
                </a>
              </li>
            </ul>

            <div className={styles.coverActionRow}>
              <button
                type="button"
                onClick={onClose}
                className={styles.coverCloseBtn}
              >
                <span>Back to Portfolio</span>
                <span className={styles.coverCloseX}>×</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
