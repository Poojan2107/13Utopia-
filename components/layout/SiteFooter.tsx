"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { company } from "@/content/site";
import { footerNav } from "@/content/navigation";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { UtopianBreak } from "@/components/ui/UtopianBreak";
import styles from "@/styles/layout/SiteFooter.module.css";

function useLiveTime(timeZone: string) {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const update = () => {
      try {
        const str = new Intl.DateTimeFormat("en-US", {
          timeZone,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        }).format(new Date());
        setTime(str);
      } catch {
        setTime("");
      }
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, [timeZone]);

  return time;
}

export function SiteFooter() {
  const istTime = useLiveTime("Asia/Kolkata");
  const estTime = useLiveTime("America/Toronto");

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className={styles.footer} aria-label="Site footer">
      {/* Ticker marquee */}
      <div className={styles.tickerWrap} aria-hidden="true">
        <div className={styles.tickerTrack}>
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className={styles.tickerItem}>
              <span>CREATE</span>
              <span className={styles.tickerDot}>✦</span>
              <span>BUILD</span>
              <span className={styles.tickerDot}>✦</span>
              <span>GROW</span>
              <span className={styles.tickerDot}>✦</span>
              <span>BE UNREAL</span>
              <span className={styles.tickerDot}>✦</span>
              <span>BE UNREASONABLE</span>
              <span className={styles.tickerDot}>✦</span>
              <span>STRATEGY & AI</span>
              <span className={styles.tickerDot}>✦</span>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.inner}>
        {/* Main Grid */}
        <div className={styles.mainGrid}>
          {/* Col 1: Presence & Status */}
          <div className={styles.brandCol}>
            <Link href="/" className={styles.logoLink} aria-label="13 UTOPIA Home">
              <BrandLogo variant="official" priority={false} />
            </Link>
            
            <p className={styles.brandManifesto}>
              {company.tagline}
            </p>

            <div className={styles.statusPill}>
              <span className={styles.statusDot} aria-hidden="true" />
              <span>Open for Q4 / 2026 Collaborations</span>
            </div>

            <div className={styles.presenceGrid}>
              <div className={styles.presenceCard}>
                <div className={styles.presenceHead}>
                  <span className={styles.locationTitle}>Ahmedabad, IN</span>
                  <span className={styles.timeTag}>{istTime || "IST"}</span>
                </div>
                <p className={styles.presenceAddress}>Iconic Shyamal, 132ft Ring Rd</p>
                <a href={company.phoneHref} className={styles.presenceContact}>
                  {company.phone}
                </a>
              </div>

              <div className={styles.presenceCard}>
                <div className={styles.presenceHead}>
                  <span className={styles.locationTitle}>Toronto, CA</span>
                  <span className={styles.timeTag}>{estTime || "EST"}</span>
                </div>
                <p className={styles.presenceAddress}>Markham Corners, Scarborough</p>
                <a href={`mailto:${company.email}`} className={styles.presenceContact}>
                  {company.email}
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Capabilities */}
          <nav className={styles.navCol} aria-label="Capabilities navigation">
            <h3 className={styles.colTitle}>Capabilities</h3>
            <ul className={styles.navList}>
              {footerNav.worlds.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={styles.navLink}>
                    <span>{item.label}</span>
                    <span className={styles.linkArrow} aria-hidden="true">↗</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Col 3: Explore & Practice */}
          <nav className={styles.navCol} aria-label="Practice navigation">
            <h3 className={styles.colTitle}>Explore</h3>
            <ul className={styles.navList}>
              {footerNav.explore.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={styles.navLink}>
                    <span>{item.label}</span>
                    <span className={styles.linkArrow} aria-hidden="true">↗</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Col 4: Action & Direct Brief */}
          <div className={styles.actionCol}>
            <div className={styles.briefCard}>
              <div className={styles.briefHead}>
                <UtopianBreak size="sm" />
                <span className={styles.briefKicker}>Direct Inquiry</span>
              </div>
              <h4 className={styles.briefTitle}>Start Your Project</h4>
              <p className={styles.briefBody}>
                Bring your problem or ambitious direction. We’ll question the obvious and build what comes next.
              </p>
              <Link
                href="/connect/start-a-project"
                className={styles.briefButton}
                data-magnetic
              >
                Launch Intake Brief →
              </Link>
            </div>
          </div>
        </div>

        {/* Big Wordmark Stage */}
        <div className={styles.wordmarkStage} aria-hidden="true">
          <div className={styles.wordmarkGlow} />
          <h2 className={styles.monumentalLogo}>13 UTOPIA</h2>
          <button
            type="button"
            onClick={scrollToTop}
            className={styles.backToTop}
            aria-label="Back to top"
            data-magnetic
          >
            <span className={styles.backToTopIcon}>↑</span>
            <span className={styles.backToTopLabel}>Top</span>
          </button>
        </div>

        {/* Sub-Footer Row */}
        <div className={styles.subFooter}>
          <p className={styles.copyright}>
            © 2026 {company.legalName}. All rights reserved. Beyond the default.
          </p>

          <div className={styles.socialRow}>
            <a
              href={company.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              LinkedIn
            </a>
            <a
              href={company.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              Instagram
            </a>
            <a
              href={company.social.behance}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              Behance
            </a>
          </div>

          <ul className={styles.legalList}>
            {footerNav.legal.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className={styles.legalLink}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
