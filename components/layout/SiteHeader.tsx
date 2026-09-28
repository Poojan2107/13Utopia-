"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { primaryCta, primaryNav } from "@/content/navigation";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { TextRoll } from "@/components/motion/TextRoll";
import styles from "@/styles/layout/SiteHeader.module.css";

const desktopNav = primaryNav.filter((item) =>
  ["/capabilities", "/solutions", "/work", "/perspective", "/our-story"].includes(
    item.href,
  ),
);

/**
 * Header — Animmaster Navigation Menus / 1 DNA (dual-panel unroll)
 * + sliding active rail on desktop.
 * @see animmaster/_lab/Navigation-Menus-1
 * @see https://animmasterlib.dev/ (Navigation Menus)
 */
export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const navRef = useRef<HTMLElement | null>(null);
  const railRef = useRef<HTMLSpanElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

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

  useLayoutEffect(() => {
    const nav = navRef.current;
    const rail = railRef.current;
    if (!nav || !rail) return;

    const active = nav.querySelector<HTMLElement>(`[data-nav-active="true"]`);
    if (!active) {
      rail.style.opacity = "0";
      return;
    }

    const navBox = nav.getBoundingClientRect();
    const linkBox = active.getBoundingClientRect();
    rail.style.width = `${linkBox.width}px`;
    rail.style.transform = `translateX(${linkBox.left - navBox.left}px)`;
    rail.style.opacity = "1";
  }, [pathname, open]);

  /* Elmanto-style dual panel timeline — built once */
  useEffect(() => {
    const root = menuRef.current;
    if (!root) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const left = root.querySelector("[data-menu-left]");
    const right = root.querySelector("[data-menu-right]");
    const items = root.querySelectorAll("[data-menu-item]");

    gsap.set([left, right], { rotate: (i) => (i === 0 ? 180 : -180), scale: 2 });
    gsap.set(items, { yPercent: 110, opacity: 0 });

    const tl = gsap.timeline({ paused: true });
    tl.to(
      [left, right],
      { rotate: 0, duration: 0.85, ease: "power3.inOut" },
      0,
    ).to(
      items,
      {
        yPercent: 0,
        opacity: 1,
        duration: 0.55,
        stagger: 0.055,
        ease: "power3.out",
      },
      0.38,
    );

    tlRef.current = tl;
    return () => {
      tl.kill();
      tlRef.current = null;
    };
  }, []);

  useEffect(() => {
    const tl = tlRef.current;
    const root = menuRef.current;
    if (!root) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      root.classList.toggle(styles.menuActive, open);
      return;
    }

    if (!tl) return;
    if (open) {
      root.classList.add(styles.menuActive);
      tl.play();
    } else {
      tl.reverse();
      const onRev = () => {
        if (tl.progress() === 0) root.classList.remove(styles.menuActive);
      };
      tl.eventCallback("onReverseComplete", onRev);
    }
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`${styles.header} ${scrolled ? styles.scrolled : ""} ${
        hidden ? styles.hidden : ""
      } ${open ? styles.menuOpen : ""} ${pathname === "/" ? styles.onHome : ""}`}
    >
      <div className={styles.inner}>
        <Link
          href="/"
          className={styles.brand}
          onClick={() => setOpen(false)}
          aria-label="13 UTOPIA home"
        >
          <BrandLogo variant="official" priority />
        </Link>

        <nav ref={navRef} className={styles.desktopNav} aria-label="Primary">
          <span ref={railRef} className={styles.navRail} aria-hidden="true" />
          {desktopNav.map((item) => {
            const active =
              pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`${styles.navLink} ${active ? styles.navLinkActive : ""}`}
                data-nav-active={active ? "true" : "false"}
              >
                <TextRoll>{item.label}</TextRoll>
              </Link>
            );
          })}
        </nav>

        <div className={styles.actions}>
          <Link href={primaryCta.href} className={styles.cta} data-magnetic>
            <span className={styles.ctaLabel}>{primaryCta.label}</span>
            <span className={styles.ctaArrow} aria-hidden="true">
              →
            </span>
          </Link>
          <button
            type="button"
            className={styles.menuToggle}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
            data-magnetic
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
        ref={menuRef}
        id="mobile-nav"
        className={styles.menu}
        aria-hidden={!open}
      >
        <div className={styles.menuBg} aria-hidden="true">
          <div className={styles.menuSideLeft}>
            <div className={styles.menuBoxLeft} data-menu-left />
          </div>
          <div className={styles.menuSideRight}>
            <div className={styles.menuBoxRight} data-menu-right />
          </div>
        </div>

        <nav aria-label="Mobile primary" className={styles.overlayNav}>
          <ul className={styles.mobileList}>
            {primaryNav.map((item, i) => (
              <li key={item.href} className={styles.mobileItem}>
                <div className={styles.mobileMask}>
                  <Link
                    href={item.href}
                    className={styles.mobileLink}
                    onClick={() => setOpen(false)}
                    tabIndex={open ? 0 : -1}
                    data-menu-item
                  >
                    <span className={styles.mobileNum}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {item.label}
                  </Link>
                </div>
              </li>
            ))}
            <li className={styles.mobileItem}>
              <div className={styles.mobileMask}>
                <Link
                  href={primaryCta.href}
                  className={styles.mobileCta}
                  onClick={() => setOpen(false)}
                  tabIndex={open ? 0 : -1}
                  data-magnetic
                  data-menu-item
                >
                  {primaryCta.label}
                </Link>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
