"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import styles from "@/styles/layout/SiteFooter.module.css";

const FULL_WORDMARK = "13UTOPIA'";

export function SiteFooter() {
  const footerRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);
  
  // Animation stages: 'counting' -> 'settled_13' -> 'revealed_wordmark'
  const [animStage, setAnimStage] = useState<"counting" | "settled_13" | "revealed_wordmark">("counting");
  const [counterVal, setCounterVal] = useState("00");

  useEffect(() => {
    const el = footerRef.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;

    // 1. Kinetic Counter starting from 00 and settling to 13
    const numbers = ["00", "01", "03", "05", "08", "10", "12", "13"];
    let step = 0;

    const interval = setInterval(() => {
      step++;
      if (step < numbers.length) {
        setCounterVal(numbers[step]);
      } else {
        clearInterval(interval);
        setCounterVal("13");
        setAnimStage("settled_13");

        // 2. Pause on 1 3 for dramatic impact, then expand into 13UTOPIA'
        setTimeout(() => {
          setAnimStage("revealed_wordmark");
        }, 750);
      }
    }, 90);

    return () => clearInterval(interval);
  }, [inView]);

  return (
    <footer
      ref={footerRef}
      className={styles.footer}
      id="site-footer"
      aria-label="13 Utopia Footer"
    >
      <div className={styles.container}>
        {/* Top 2-Way Split: Conversational Lead (Left) + Socials (Right) */}
        <div className={styles.topSection}>
          {/* Left: Headline & Action Buttons */}
          <div className={styles.leadBlock}>
            <h2 className={styles.leadTitle}>
              Let&apos;s start
              <br />
              from 13&apos;
            </h2>

            <div className={styles.actionRow}>
              <a
                href="mailto:contact@13utopia.com?subject=Project%20Commission%20Inquiry"
                className={styles.actionBtnPrimary}
              >
                <span>BOOK A CALL</span>
                <span className={styles.btnArrow}>→</span>
              </a>

              <a
                href="mailto:contact@13utopia.com"
                className={styles.actionBtnSecondary}
              >
                <span>DROP US AN EMAIL</span>
                <span className={styles.btnAt}>@</span>
              </a>
            </div>
          </div>

          {/* Center-Right: Navigation Directory */}
          <div className={styles.socialCol}>
            <span className={styles.socialTitle}>DIRECTORY</span>
            <Link href="/" className={styles.socialLink}>
              01 // Home
            </Link>
            <Link href="/about" className={styles.socialLink}>
              02 // About
            </Link>
            <Link href="/services" className={styles.socialLink}>
              03 // Services
            </Link>
            <Link href="/work" className={styles.socialLink}>
              04 // Work
            </Link>
            <Link href="/blog" className={styles.socialLink}>
              05 // Journal
            </Link>
            <Link href="/contact" className={styles.socialLink}>
              06 // Contact
            </Link>
          </div>

          {/* Studio Hubs */}
          <div className={styles.socialCol}>
            <span className={styles.socialTitle}>STUDIO HUBS</span>
            <span className={styles.socialLink} style={{ cursor: "default", opacity: 0.9 }}>
              Scarborough, Canada
            </span>
            <span className={styles.socialLink} style={{ cursor: "default", opacity: 0.9 }}>
              Ahmedabad, India
            </span>
          </div>

          {/* Right: Vertical Transmission Channels */}
          <div className={styles.socialCol}>
            <span className={styles.socialTitle}>TRANSMISSION</span>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              LinkedIn
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              Instagram
            </a>
            <a
              href="https://behance.net"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              Behance
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              X (Twitter)
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              GitHub
            </a>
          </div>
        </div>

        {/* Monumental Kinetic Wordmark with 00 -> 13 -> 13UTOPIA' Loading Effect */}
        <div className={styles.wordmarkSection}>
          <div className={styles.wordmarkInner} role="banner" aria-label="13UTOPIA">
            {animStage === "counting" && (
              <span className={styles.counterDisplay}>
                <span className={styles.counterDigit}>{counterVal[0]}</span>
                <span className={styles.counterDigit}>{counterVal[1]}</span>
              </span>
            )}

            {animStage === "settled_13" && (
              <span className={`${styles.counterDisplay} ${styles.settledThirteen}`}>
                <span className={styles.counterDigit}>1</span>
                <span className={styles.counterDigit}>3</span>
              </span>
            )}

            {animStage === "revealed_wordmark" && (
              <div className={styles.unfoldedWordmark}>
                {FULL_WORDMARK.split("").map((char, idx) => (
                  <span
                    key={idx}
                    className={styles.wordmarkChar}
                    style={{ animationDelay: `${idx * 45}ms` }}
                  >
                    {char}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Clean Micro Colophon Bottom Bar */}
        <div className={styles.colophonBar}>
          <span className={styles.colophonCopy}>
            &copy; {new Date().getFullYear()} 13 UTOPIA INC.
          </span>

          <div className={styles.colophonRight}>
            <span className={styles.colophonMotto}>BE UNREAL. BE UNREASONABLE.</span>
            <span className={styles.langBadge}>EN</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
