"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, useCallback } from "react";
import gsap from "gsap";
import { CustomEase } from "gsap/CustomEase";
import { primaryCta, primaryNav } from "@/content/navigation";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { UtopianBreak } from "@/components/ui/UtopianBreak";
import styles from "@/styles/layout/SiteHeader.module.css";

gsap.registerPlugin(CustomEase);

try {
  if (!CustomEase.get("jump")) {
    CustomEase.create("jump", "0.85, 0, 0.15, 1");
  }
} catch {
  // fallback handled gracefully
}

const navMeta: Record<string, string> = {
  "/capabilities": "Brand · Systems · Growth",
  "/solutions": "Launch · Scale · Automate",
  "/work": "Selected Proof & Case Stories",
  "/perspective": "Essays & Strategic Worldview",
  "/our-story": "The Anti-Generic Studio DNA",
  "/collective": "Leadership & Global Advisory",
};

/**
 * SiteHeader — Primary Awwwards Dual-Shutter Unrolling Navigation Engine
 * Minimalist top luxury chrome + theatrical dual-rotating shutter reveal
 */
export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

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

  // Build the master Elmanto dual-shutter unroll timeline
  useEffect(() => {
    const root = menuRef.current;
    if (!root) return;

    const leftBox = root.querySelector<HTMLElement>("[data-menu-box-left]");
    const rightBox = root.querySelector<HTMLElement>("[data-menu-box-right]");
    const lines = Array.from(root.querySelectorAll<HTMLElement>("[data-menu-line]"));
    const secondaryItems = Array.from(
      root.querySelectorAll<HTMLElement>("[data-menu-sec]"),
    );

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      if (leftBox && rightBox) {
        gsap.set([leftBox, rightBox], { rotate: 0, scale: 1 });
      }
      gsap.set([...lines, ...secondaryItems], { yPercent: 0, opacity: 1 });
      return;
    }

    if (leftBox && rightBox) {
      gsap.set(leftBox, { rotate: 180, scale: 2 });
      gsap.set(rightBox, { rotate: -180, scale: 2 });
    }
    gsap.set(lines, { yPercent: 120, opacity: 0 });
    gsap.set(secondaryItems, { yPercent: 30, opacity: 0 });

    const easeFunc = CustomEase.get("jump") ? "jump" : "power4.inOut";

    const tl = gsap.timeline({ paused: true });

    // Step 1: Dual shutter unroll from opposite rotations
    if (leftBox && rightBox) {
      tl.to(
        [leftBox, rightBox],
        {
          rotate: 0,
          duration: 0.9,
          ease: easeFunc,
        },
        0,
      );
    }

    // Step 2: Cascading primary navigation lines
    if (lines.length > 0) {
      tl.to(
        lines,
        {
          yPercent: 0,
          opacity: 1,
          duration: 0.65,
          stagger: 0.035,
          ease: "power3.out",
        },
        0.38,
      );
    }

    // Step 3: Secondary right-column blocks reveal
    if (secondaryItems.length > 0) {
      tl.to(
        secondaryItems,
        {
          yPercent: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.05,
          ease: "power3.out",
        },
        0.48,
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
      tl.timeScale(1.4).reverse();
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
        {/* Brand Mark */}
        <Link
          href="/"
          className={styles.brand}
          onClick={closeMenu}
          aria-label="13 UTOPIA home"
        >
          <BrandLogo variant="official" priority />
        </Link>

        {/* Minimalist Top Control Hub */}
        <div className={styles.actions}>
          {!open && (
            <Link href={primaryCta.href} className={styles.cta} data-magnetic>
              <span className={styles.ctaLabel}>{primaryCta.label}</span>
              <span className={styles.ctaArrow} aria-hidden="true">
                →
              </span>
            </Link>
          )}

          {/* Luxury Primary Menu Trigger */}
          <button
            type="button"
            className={`${styles.menuToggle} ${open ? styles.menuToggleActive : ""}`}
            aria-expanded={open}
            aria-controls="awwwards-primary-menu"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setOpen((v) => !v)}
            data-magnetic
          >
            <span className={styles.menuToggleLabel}>
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

      {/* Full-Screen Master Dual-Shutter Overlay */}
      <div
        ref={menuRef}
        id="awwwards-primary-menu"
        className={styles.menu}
        aria-hidden={!open}
      >
        {/* Dual Rotating Shutters Background */}
        <div className={styles.menuBg} aria-hidden="true">
          <div className={styles.menuSideLeft}>
            <div className={styles.menuBoxLeft} data-menu-box-left />
          </div>
          <div className={styles.menuSideRight}>
            <div className={styles.menuBoxRight} data-menu-box-right />
          </div>
        </div>

        {/* Symmetrical 2-Column Luxury Interface */}
        <div className={styles.menuContent}>
          <div className={styles.menuGrid}>
            {/* Left Column: Primary Navigation Index */}
            <div className={styles.menuColPrimary}>
              <div className={styles.colHeader} data-menu-line>
                <UtopianBreak size="sm" className={styles.colBreak} />
                <span>INDEX · PRACTICE</span>
              </div>

              <nav aria-label="Primary navigation menu">
                <ul className={styles.navList}>
                  {primaryNav.map((item, i) => {
                    const active =
                      pathname === item.href ||
                      (item.href !== "/" && pathname.startsWith(`${item.href}/`));
                    const isHovered = hoveredLink === item.href;

                    return (
                      <li key={item.href} className={styles.navItem}>
                        <div className={styles.lineMask}>
                          <Link
                            href={item.href}
                            className={`${styles.navLinkBig} ${
                              active ? styles.navLinkBigActive : ""
                            }`}
                            onClick={closeMenu}
                            onMouseEnter={() => setHoveredLink(item.href)}
                            onMouseLeave={() => setHoveredLink(null)}
                            tabIndex={open ? 0 : -1}
                            data-menu-line
                          >
                            <span className={styles.navNum}>
                              {String(i + 1).padStart(2, "0")}
                            </span>
                            <span className={styles.navLabel}>{item.label}</span>
                            <span className={styles.navMetaText}>
                              {navMeta[item.href]}
                            </span>
                            <span className={styles.navArrow} aria-hidden="true">
                              ↗
                            </span>
                          </Link>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </div>

            {/* Right Column: Worldview, Direct Intake & Coordinates */}
            <div className={styles.menuColSecondary}>
              {/* Worldview Creed */}
              <div className={styles.worldviewCard} data-menu-sec>
                <div className={styles.cardHeader}>
                  <UtopianBreak size="sm" className={styles.colBreak} />
                  <span>00 · WORLDVIEW</span>
                </div>
                <h3 className={styles.creedEquation}>
                  POSSIBILITY × AMBITION
                  <br />
                  × EXECUTION
                  <span className={styles.goldHighlight}> = IMPACT.</span>
                </h3>
                <p className={styles.creedBody}>
                  The obvious answer is rarely the only answer. We question
                  inherited assumptions and build high-performance digital engines.
                </p>
              </div>

              {/* Direct Project Brief Action */}
              <div className={styles.briefCard} data-menu-sec>
                <Link
                  href={primaryCta.href}
                  className={styles.ctaCardLink}
                  onClick={closeMenu}
                  tabIndex={open ? 0 : -1}
                  data-magnetic
                >
                  <div className={styles.ctaCardHeader}>
                    <span className={styles.ctaCardKicker}>Direct Intake Brief</span>
                    <span className={styles.ctaCardBadge}>Active Roster</span>
                  </div>
                  <div className={styles.ctaCardRow}>
                    <h4 className={styles.ctaCardTitle}>Start a Project</h4>
                    <span className={styles.ctaCardArrow} aria-hidden="true">
                      →
                    </span>
                  </div>
                </Link>
              </div>

              {/* Global Studio Coordinates */}
              <div className={styles.coordinatesBlock} data-menu-sec>
                <p className={styles.coordLabel}>Studio Coordinates</p>
                <div className={styles.coordGrid}>
                  <div className={styles.coordItem}>
                    <span className={styles.coordDot} aria-hidden="true" />
                    <p className={styles.coordText}>
                      <strong>Toronto:</strong> Markham Corners, Scarborough
                    </p>
                  </div>
                  <div className={styles.coordItem}>
                    <span className={styles.coordDot} aria-hidden="true" />
                    <p className={styles.coordText}>
                      <strong>Ahmedabad:</strong> Iconic Shyamal, 132ft Ring Rd
                    </p>
                  </div>
                </div>
                <div className={styles.coordDirect}>
                  <a
                    href="mailto:info@13utopia.com"
                    className={styles.coordEmail}
                    tabIndex={open ? 0 : -1}
                  >
                    info@13utopia.com
                  </a>
                  <span className={styles.coordDivider}>·</span>
                  <a
                    href="tel:+919924131397"
                    className={styles.coordPhone}
                    tabIndex={open ? 0 : -1}
                  >
                    +91 9924131397
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



