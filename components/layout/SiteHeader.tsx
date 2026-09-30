"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BrandLogo } from "@/components/ui/BrandLogo";
import styles from "@/styles/layout/SiteHeader.module.css";

/**
 * SiteHeader — 13 UTOPIA Signature Navigation & Minimal Stealth Transmission
 */
export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);

  const closeMenu = useCallback(() => {
    setOpen(false);
  }, []);

  // Header scroll appearance & auto-hide
  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 12);
      if (open) {
        setHidden(false);
        lastY = y;
        return;
      }
      const goingDown = y > lastY && y > 80;
      setHidden(goingDown);
      lastY = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [open]);

  // Lock body scroll when overlay is active
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Handle Escape key to close menu
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) {
        closeMenu();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, closeMenu]);

  useEffect(() => {
    closeMenu();
  }, [pathname, closeMenu]);

  return (
    <header
      className={`${styles.header} ${scrolled ? styles.scrolled : ""} ${
        hidden ? styles.hidden : ""
      } ${open ? styles.menuOpen : ""} ${pathname === "/" ? styles.onHome : ""}`}
    >
      <div className={styles.inner}>
        {/* Minimalist Top Control Hub — Single Bespoke "1 and 3" Easter Egg Trigger */}
        <div className={styles.actions}>
          <button
            type="button"
            className={`${styles.menuToggle} ${open ? styles.menuToggleActive : ""}`}
            aria-expanded={open}
            aria-controls="awwwards-primary-menu"
            aria-label={open ? "Close navigation menu" : "Open navigation menu (13 UTOPIA)"}
            onClick={() => setOpen((v) => !v)}
            data-magnetic
          >
            <div className={`${styles.easterEggIcon} ${open ? styles.easterEggOpen : ""}`} aria-hidden="true">
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

        {/* Brand Mark */}
        <Link
          href="/"
          className={styles.brand}
          onClick={closeMenu}
          aria-label="13 UTOPIA home"
        >
          <BrandLogo variant="official" priority />
        </Link>
      </div>

      {/* Full-Screen Pure Minimal Overlay */}
      <div
        id="awwwards-primary-menu"
        className={`${styles.menu} ${open ? styles.menuActive : ""}`}
        aria-hidden={!open}
      >
        <div className={styles.menuContent}>
          <div className={styles.anonymousContainer} data-menu-body>
            <div className={styles.transmissionBody}>
              <h2 className={styles.transHeadline}>
                SOMETHING UNREAL &amp;<br />
                <span className={styles.transHeadlineGold}>UNREASONABLE</span><br />
                IS BEING CRAFTED IN SILENCE.
              </h2>

              <p className={styles.transManifesto}>
                The default was never an option. We question inherited assumptions,
                strip away generic noise, and engineer what comes next in the dark.
                You are not looking at an agency. You are standing inside an anomaly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}




