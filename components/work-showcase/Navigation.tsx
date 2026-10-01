"use client";

import React from "react";
import { BrandLogo } from "@/components/ui/BrandLogo";
import styles from "./WorkShowcase.module.css";

interface NavigationProps {
  isProfileOpen: boolean;
  setIsProfileOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isNewsletterOpen: boolean;
  setIsNewsletterOpen: React.Dispatch<React.SetStateAction<boolean>>;
  activeView: "featured" | "full";
  setActiveView: React.Dispatch<React.SetStateAction<"featured" | "full">>;
}

export default function Navigation({
  isProfileOpen,
  setIsProfileOpen,
  isNewsletterOpen,
  setIsNewsletterOpen,
  activeView,
  setActiveView,
}: NavigationProps) {
  return (
    <div className={styles.navShell}>
      {/* Top Header */}
      <header className={styles.navHeader}>
        {/* Official 13 UTOPIA Brand Logo */}
        <div className={styles.brandGroup}>
          <span className={styles.brandLink} aria-label="13 UTOPIA">
            <BrandLogo variant="official" priority />
          </span>
          <span className={styles.brandSubtitle}>Portfolio</span>
        </div>

        {/* Right Actions: Agency link (disabled until main site ships) + menu trigger */}
        <div className={styles.headerRight}>
          <span
            className={styles.agencyMainLinkDisabled}
            aria-disabled="true"
            title="Agency site coming soon"
          >
            <span>Agency Main</span>
            <span className={styles.agencySoon}>Soon</span>
          </span>

          {/* Signature 13 UTOPIA "1 & 3" Luxury Capsule Trigger */}
          <button
            type="button"
            className={`${styles.menuToggle} ${isProfileOpen ? styles.menuToggleActive : ""}`}
            aria-expanded={isProfileOpen}
            aria-label={isProfileOpen ? "Close profile cover" : "Open 13 UTOPIA company profile"}
            onClick={() => setIsProfileOpen((v) => !v)}
          >
            <span className={styles.menuToggleLabel}>
              {isProfileOpen ? "Close" : "Profile"}
            </span>

            <div
              className={`${styles.easterEggIcon} ${isProfileOpen ? styles.easterEggOpen : ""}`}
              aria-hidden="true"
            >
              {/* The "1" Vertical Monolith Line */}
              <span className={styles.lineOne} />

              {/* The "3" Horizontal Hamburger Lines */}
              <span className={styles.linesThree}>
                <span className={styles.barTop} />
                <span className={styles.barMid} />
                <span className={styles.barBot} />
              </span>
            </div>
          </button>
        </div>
      </header>

      {/* Bottom Bar */}
      <footer className={styles.navFooter}>
        <div className={styles.viewSelectorCapsule} aria-label="Portfolio Views">
          <button
            onClick={() => setActiveView("featured")}
            className={`${styles.viewPill} ${
              activeView === "featured" ? styles.viewPillActive : ""
            }`}
            aria-label="In Orbit — spatial 3D showcase"
          >
            <span className={styles.viewDot} />
            <span>In Orbit</span>
          </button>
          <span className={styles.viewDivider}>/</span>
          <button
            onClick={() => setActiveView("full")}
            className={`${styles.viewPill} ${
              activeView === "full" ? styles.viewPillActive : ""
            }`}
            aria-label="The Archive — full project list"
          >
            <span>The Archive</span>
          </button>
        </div>

        <button
          onClick={() => setIsNewsletterOpen((prev) => !prev)}
          className={styles.inquireCapsule}
          aria-expanded={isNewsletterOpen}
        >
          <span>Start a Brief</span>
          <span className={styles.inquireArrow}>↗</span>
        </button>
      </footer>
    </div>
  );
}
