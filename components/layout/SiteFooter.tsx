"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { BrandLogo } from "@/components/ui/BrandLogo";
import styles from "@/styles/layout/SiteFooter.module.css";

/**
 * SiteFooter — Section 08
 * Luxury architectural agency footer matching Plus-X design perfection:
 * Live time telemetry, coordinates, copyright, system status, and social index.
 */
export function SiteFooter() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const utc = now.toUTCString().slice(17, 25);
      setTime(`${utc} UTC`);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className={styles.footer} id="site-footer" aria-label="13 Utopia Footer">
      <div className={styles.container}>
        {/* Top Header Row */}
        <div className={styles.topRow}>
          <div className={styles.brandGroup}>
            <Link href="/" className={styles.brandLink} aria-label="13 Utopia Home">
              <BrandLogo variant="official" />
            </Link>
            <p className={styles.brandDesc}>
              Independent venture architecture &amp; high-craft spatial engineering studio.
            </p>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className={styles.backToTopBtn}
            aria-label="Back to top"
            data-magnetic
          >
            <span>BACK TO TOP</span>
            <span className={styles.arrowUp}>↑</span>
          </button>
        </div>

        {/* Middle Navigation & Directory Grid */}
        <div className={styles.middleGrid}>
          {/* Col 1: System Telemetry */}
          <div className={styles.gridCol}>
            <span className={styles.colHeader}>01 // SYSTEM TELEMETRY</span>
            <div className={styles.telemetryList}>
              <div className={styles.telemetryItem}>
                <span className={styles.tKey}>STATUS</span>
                <span className={styles.tVal}>
                  <span className={styles.statusDot} />
                  ALL PROTOCOLS ACTIVE
                </span>
              </div>
              <div className={styles.telemetryItem}>
                <span className={styles.tKey}>TIME</span>
                <span className={styles.tVal}>{time || "SYNCHRONIZING..."}</span>
              </div>
              <div className={styles.telemetryItem}>
                <span className={styles.tKey}>COORDINATES</span>
                <span className={styles.tVal}>40.7128° N, 74.0060° W</span>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation Directory */}
          <div className={styles.gridCol}>
            <span className={styles.colHeader}>02 // INDEX</span>
            <ul className={styles.navList}>
              <li><a href="#hero" className={styles.navLink}>HERO // IDENTITY</a></li>
              <li><a href="#video-showcase" className={styles.navLink}>REEL // SPATIAL</a></li>
              <li><a href="#philosophy" className={styles.navLink}>DOCTRINE // MANIFESTO</a></li>
              <li><a href="#narrative" className={styles.navLink}>CAPABILITIES // TRIAD</a></li>
              <li><a href="#work" className={styles.navLink}>COMMISSIONS // PORTFOLIO</a></li>
              <li><Link href="/model" className={styles.navLink}>3D EMBLEM VIEWER</Link></li>
            </ul>
          </div>

          {/* Col 3: Direct Transmissions */}
          <div className={styles.gridCol}>
            <span className={styles.colHeader}>03 // TRANSMISSIONS</span>
            <ul className={styles.navList}>
              <li><a href="mailto:contact@13utopia.com" className={styles.navLink}>contact@13utopia.com</a></li>
              <li><a href="https://x.com" target="_blank" rel="noopener noreferrer" className={styles.navLink}>X (FORMERLY TWITTER) ↗</a></li>
              <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.navLink}>INSTAGRAM ↗</a></li>
              <li><a href="https://github.com" target="_blank" rel="noopener noreferrer" className={styles.navLink}>GITHUB ↗</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className={styles.bottomBar}>
          <span className={styles.copyright}>
            &copy; {new Date().getFullYear()} 13 UTOPIA INC. ALL RIGHTS RESERVED.
          </span>
          <span className={styles.tagline}>
            BE UNREAL. BE UNREASONABLE.
          </span>
        </div>
      </div>
    </footer>
  );
}
