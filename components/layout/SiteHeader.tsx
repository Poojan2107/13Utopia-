"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { type CSSProperties, useEffect, useState } from "react";
import { primaryCta, primaryNav } from "@/content/navigation";
import { TextRoll } from "@/components/motion/TextRoll";
import styles from "@/styles/layout/SiteHeader.module.css";

const desktopNav = primaryNav.filter((item) =>
  ["/capabilities", "/solutions", "/work", "/perspective", "/our-story"].includes(
    item.href,
  ),
);

/**
 * Nav.Supply-inspired header — hide on scroll down, reveal on up,
 * full-bleed mobile overlay. Home: defer solid CTA until scrolled past hero.
 */
export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const isHome = pathname === "/";
  const showPrimaryCta = !isHome || scrolled;

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

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`${styles.header} ${scrolled ? styles.scrolled : ""} ${
        hidden ? styles.hidden : ""
      } ${open ? styles.menuOpen : ""}`}
    >
      <div className={styles.inner}>
        <Link
          href="/"
          className={styles.brand}
          onClick={() => setOpen(false)}
          aria-label="13 UTOPIA home"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/brand/13-utopia-wordmark.svg"
            alt="13 UTOPIA"
            width={160}
            height={28}
            className={styles.logo}
          />
        </Link>

        <nav className={styles.desktopNav} aria-label="Primary">
          {desktopNav.map((item) => (
            <Link key={item.href} href={item.href} className={styles.navLink}>
              <TextRoll>{item.label}</TextRoll>
            </Link>
          ))}
        </nav>

        <div className={styles.actions}>
          {showPrimaryCta ? (
            <Link href={primaryCta.href} className={styles.cta} data-magnetic>
              {primaryCta.label}
              <span aria-hidden="true">→</span>
            </Link>
          ) : (
            <Link href="/work" className={styles.ctaQuiet} data-magnetic>
              Explore Work
            </Link>
          )}
          <button
            type="button"
            className={styles.menuToggle}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <span
              className={`${styles.menuBars} ${open ? styles.menuBarsOpen : ""}`}
              aria-hidden="true"
            >
              <span />
              <span />
              <span />
            </span>
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={open ? styles.overlayOpen : styles.overlayClosed}
        hidden={!open}
      >
        <nav aria-label="Mobile primary" className={styles.overlayNav}>
          <ul className={styles.mobileList}>
            {primaryNav.map((item, i) => (
              <li
                key={item.href}
                style={{ "--i": i } as CSSProperties}
                className={styles.mobileItem}
              >
                <Link
                  href={item.href}
                  className={styles.mobileLink}
                  onClick={() => setOpen(false)}
                >
                  <span className={styles.mobileNum}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {item.label}
                </Link>
              </li>
            ))}
            <li
              className={styles.mobileItem}
              style={{ "--i": primaryNav.length } as CSSProperties}
            >
              <Link
                href={primaryCta.href}
                className={styles.mobileCta}
                onClick={() => setOpen(false)}
                data-magnetic
              >
                {primaryCta.label}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
