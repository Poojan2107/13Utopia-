"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect, useRef, useState, useCallback } from "react";
import gsap from "gsap";
import { CustomEase } from "gsap/CustomEase";
import { primaryCta, primaryNav } from "@/content/navigation";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { TextRoll } from "@/components/motion/TextRoll";
import { UtopianBreak } from "@/components/ui/UtopianBreak";
import styles from "@/styles/layout/SiteHeader.module.css";

gsap.registerPlugin(CustomEase);

// Create Elmanto "jump" cubic-bezier easing if not already created
try {
  if (!CustomEase.get("jump")) {
    CustomEase.create("jump", "0.85, 0, 0.15, 1");
  }
} catch {
  // fallback handled gracefully
}

const desktopNav = primaryNav.filter((item) =>
  ["/capabilities", "/solutions", "/work", "/perspective", "/our-story"].includes(
    item.href,
  ),
);

const navDescriptions: Record<string, string> = {
  "/capabilities": "Brand · Design · Systems · AI · Growth",
  "/solutions": "Launch · Scale · Automate · Transform",
  "/work": "Selected Case Stories & Architectures",
  "/perspective": "Essays, Frameworks & Worldview",
  "/our-story": "The Anti-Generic Studio DNA",
  "/collective": "Leadership & Global Practice",
};

/**
 * SiteHeader — Integrated with Awwwards Elmanto Dual-Panel Navigation Engine
 * Features:
 * - Dual-sided rotating unroll shutter panels (`jump` bezier ease)
 * - Cascading masked text line reveals
 * - 2-Column luxury Didone typographic structure
 * - Magnetic controls & desktop/mobile seamless access
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

  const closeMenu = useCallback(() => {
    setOpen(false);
  }, []);

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

  /* Elmanto Dual-Shutter Timeline with Custom "jump" Ease */
  useEffect(() => {
    const root = menuRef.current;
    if (!root) return;

    const leftBox = root.querySelector<HTMLElement>("[data-menu-box-left]");
    const rightBox = root.querySelector<HTMLElement>("[data-menu-box-right]");
    const lines = Array.from(root.querySelectorAll<HTMLElement>("[data-menu-line]"));

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      if (leftBox && rightBox) {
        gsap.set([leftBox, rightBox], { rotate: 0, scale: 1 });
      }
      gsap.set(lines, { yPercent: 0, opacity: 1 });
      return;
    }

    if (leftBox && rightBox) {
      gsap.set(leftBox, { rotate: 180, scale: 2 });
      gsap.set(rightBox, { rotate: -180, scale: 2 });
    }
    gsap.set(lines, { yPercent: 115, opacity: 0 });

    const easeFunc = CustomEase.get("jump") ? "jump" : "power4.inOut";

    const tl = gsap.timeline({ paused: true });

    // Step 1: Dual shutter unroll from opposite rotations
    if (leftBox && rightBox) {
      tl.to(
        [leftBox, rightBox],
        {
          rotate: 0,
          duration: 0.95,
          ease: easeFunc,
        },
        0,
      );
    }

    // Step 2: Cascading line-by-line slide-up reveals from overflow masks
    if (lines.length > 0) {
      tl.to(
        lines,
        {
          yPercent: 0,
          opacity: 1,
          duration: 0.65,
          stagger: 0.045,
          ease: "power3.out",
        },
        0.45,
      );
    }

    tlRef.current = tl;
    return () => {
      tl.kill();
      tlRef.current = null;
    };
  }, []);

  // Handle open / close animation trigger
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
      tl.timeScale(1).play();
    } else {
      tl.timeScale(1.25).reverse();
      const onRev = () => {
        if (tl.progress() === 0) {
          root.classList.remove(styles.menuActive);
        }
      };
      tl.eventCallback("onReverseComplete", onRev);
    }
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
        <Link
          href="/"
          className={styles.brand}
          onClick={closeMenu}
          aria-label="13 UTOPIA home"
        >
          <BrandLogo variant="official" priority />
        </Link>

        {/* Desktop inline nav links */}
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

          {/* Luxury dual-panel toggle button */}
          <button
            type="button"
            className={`${styles.menuToggle} ${open ? styles.menuToggleActive : ""}`}
            aria-expanded={open}
            aria-controls="awwwards-nav-overlay"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setOpen((v) => !v)}
            data-magnetic
          >
            <span className={styles.menuToggleText}>
              {open ? "CLOSE" : "MENU"}
            </span>
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

      {/* Full-Screen Elmanto Dual-Shutter Overlay */}
      <div
        ref={menuRef}
        id="awwwards-nav-overlay"
        className={styles.menu}
        aria-hidden={!open}
      >
        {/* Background Rotating Dual Shutters */}
        <div className={styles.menuBg} aria-hidden="true">
          <div className={styles.menuSideLeft}>
            <div className={styles.menuBoxLeft} data-menu-box-left />
          </div>
          <div className={styles.menuSideRight}>
            <div className={styles.menuBoxRight} data-menu-box-right />
          </div>
        </div>

        {/* 2-Column Luxury Content Grid */}
        <div className={styles.menuContent}>
          <div className={styles.menuGrid}>
            {/* Left Column: Primary Navigation Index */}
            <div className={styles.menuColPrimary}>
              <p className={styles.colHeader} data-menu-line>
                <UtopianBreak size="sm" className={styles.colBreak} />
                <span>INDEX · PRIMARY ARCHITECTURE</span>
              </p>

              <nav aria-label="Fullscreen primary navigation">
                <ul className={styles.navList}>
                  {primaryNav.map((item, i) => (
                    <li key={item.href} className={styles.navItem}>
                      <div className={styles.lineMask}>
                        <Link
                          href={item.href}
                          className={styles.navLinkBig}
                          onClick={closeMenu}
                          tabIndex={open ? 0 : -1}
                          data-menu-line
                        >
                          <span className={styles.navNum}>
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <span className={styles.navLabel}>{item.label}</span>
                          <span className={styles.navArrow} aria-hidden="true">
                            ↗
                          </span>
                        </Link>
                      </div>
                      {navDescriptions[item.href] && (
                        <div className={styles.lineMask}>
                          <p className={styles.navSubtext} data-menu-line>
                            {navDescriptions[item.href]}
                          </p>
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Right Column: Studio Worldview, Direct Brief & Coordinates */}
            <div className={styles.menuColSecondary}>
              <div className={styles.worldviewCard}>
                <div className={styles.lineMask}>
                  <p className={styles.colHeader} data-menu-line>
                    <UtopianBreak size="sm" className={styles.colBreak} />
                    <span>WORLDVIEW · 13 UTOPIA</span>
                  </p>
                </div>

                <div className={styles.lineMask}>
                  <h3 className={styles.creedHeading} data-menu-line>
                    POSSIBILITY × AMBITION × EXECUTION
                  </h3>
                </div>

                <div className={styles.lineMask}>
                  <p className={styles.creedEquation} data-menu-line>
                    = IMPACT.
                  </p>
                </div>

                <div className={styles.lineMask}>
                  <p className={styles.creedBody} data-menu-line>
                    The obvious answer is rarely the only answer. We question
                    inherited assumptions and build high-performance digital engines.
                  </p>
                </div>
              </div>

              {/* Direct Project Brief Action */}
              <div className={styles.briefCard}>
                <div className={styles.lineMask}>
                  <Link
                    href={primaryCta.href}
                    className={styles.ctaCardLink}
                    onClick={closeMenu}
                    tabIndex={open ? 0 : -1}
                    data-magnetic
                    data-menu-line
                  >
                    <span className={styles.ctaCardKicker}>Direct Intake</span>
                    <span className={styles.ctaCardTitle}>Start a Project</span>
                    <span className={styles.ctaCardArrow} aria-hidden="true">
                      →
                    </span>
                  </Link>
                </div>
              </div>

              {/* Coordinates & Direct Channel */}
              <div className={styles.coordinatesBlock}>
                <div className={styles.lineMask}>
                  <p className={styles.coordLabel} data-menu-line>
                    Locations & Direct Line
                  </p>
                </div>
                <div className={styles.lineMask}>
                  <p className={styles.coordText} data-menu-line>
                    Markham Corners, Scarborough · Toronto
                  </p>
                </div>
                <div className={styles.lineMask}>
                  <p className={styles.coordText} data-menu-line>
                    Iconic Shyamal, 132ft Ring Rd · Ahmedabad
                  </p>
                </div>
                <div className={styles.lineMask}>
                  <a
                    href="mailto:info@13utopia.com"
                    className={styles.coordEmail}
                    tabIndex={open ? 0 : -1}
                    data-menu-line
                  >
                    info@13utopia.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

