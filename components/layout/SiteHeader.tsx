"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { primaryCta, primaryNav } from "@/content/navigation";
import { Container } from "@/components/ui/Container";
import styles from "@/styles/layout/SiteHeader.module.css";

const desktopNav = primaryNav.filter((item) =>
  ["/capabilities", "/solutions", "/work", "/perspective", "/our-story"].includes(
    item.href,
  ),
);

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.inner}>
        <Link
          href="/"
          className={styles.brand}
          onClick={() => setOpen(false)}
          aria-label="13 UTOPIA home"
        >
          <Image
            src="/brand/13-utopia-logo-horizontal.jpeg"
            alt="13 UTOPIA"
            width={739}
            height={268}
            priority
            sizes="120px"
            className={styles.logo}
          />
        </Link>

        <nav className={styles.desktopNav} aria-label="Primary">
          {desktopNav.map((item) => (
            <Link key={item.href} href={item.href} className={styles.navLink}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className={styles.actions}>
          <Link href={primaryCta.href} className={styles.cta}>
            {primaryCta.label}
            <span aria-hidden="true">→</span>
          </Link>
          <button
            type="button"
            className={styles.menuToggle}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <span className={styles.menuBars} aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={open ? styles.mobileOpen : styles.mobileClosed}
        hidden={!open}
      >
        <Container>
          <nav aria-label="Mobile primary">
            <ul className={styles.mobileList}>
              {primaryNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={styles.mobileLink}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href={primaryCta.href}
                  className={styles.mobileCta}
                  onClick={() => setOpen(false)}
                >
                  {primaryCta.label}
                </Link>
              </li>
            </ul>
          </nav>
        </Container>
      </div>
    </header>
  );
}
