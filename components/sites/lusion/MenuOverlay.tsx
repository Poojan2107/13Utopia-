"use client";

import React from "react";
import styles from "./lusion.module.css";

interface MenuOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const NAV_ITEMS = [
  { index: "01", label: "Home", href: "#hero" },
  { index: "02", label: "About Us", href: "#intro" },
  { index: "03", label: "Projects", href: "#projects" },
  { index: "04", label: "Play Reel", href: "#reel" },
  { index: "05", label: "Philosophy", href: "#philosophy" },
  { index: "06", label: "Contact", href: "#contact" },
];

export function MenuOverlay({ isOpen, onClose }: MenuOverlayProps) {
  if (!isOpen) return null;

  const handleNavClick = (href: string) => {
    onClose();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className={styles.menuOverlay}
      style={{
        opacity: isOpen ? 1 : 0,
        pointerEvents: isOpen ? "auto" : "none",
      }}
    >
      <ul className={styles.menuNavList}>
        {NAV_ITEMS.map((item) => (
          <li key={item.index} className={styles.menuNavItem}>
            <span className={styles.menuNavIndex}>{item.index}</span>
            <a
              href={item.href}
              className={styles.menuNavLink}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.href);
              }}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      <div className={styles.menuFooter}>
        <div className={styles.menuFooterCol}>
          <span className={styles.menuFooterLabel}>Studio</span>
          <span className={styles.menuFooterText}>Suite 2, 9 Marsh Street</span>
          <span className={styles.menuFooterText}>Bristol, BS1 4AA, United Kingdom</span>
        </div>

        <div className={styles.menuFooterCol}>
          <span className={styles.menuFooterLabel}>Get in touch</span>
          <a href="mailto:hello@lusion.co" className={styles.menuFooterText}>
            hello@lusion.co
          </a>
        </div>

        <div className={styles.menuFooterCol}>
          <span className={styles.menuFooterLabel}>Follow Us</span>
          <div style={{ display: "flex", gap: "16px" }}>
            <a href="https://twitter.com/lusionltd" target="_blank" rel="noreferrer" className={styles.menuFooterText}>
              X / Twitter
            </a>
            <a href="https://instagram.com/lusionltd" target="_blank" rel="noreferrer" className={styles.menuFooterText}>
              Instagram
            </a>
            <a href="https://linkedin.com/company/lusion" target="_blank" rel="noreferrer" className={styles.menuFooterText}>
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
