"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { BrandLogo } from "@/components/ui/BrandLogo";
import styles from "@/styles/layout/SiteHeader.module.css";

interface NavItem {
  index: string;
  title: string;
  href: string;
  tagline: string;
  category: string;
  previewImage: string;
}

const NAV_ITEMS: NavItem[] = [
  {
    index: "01",
    title: "HOME",
    href: "/",
    tagline: "Independent Creative Technology & Growth Company",
    category: "01 // OVERVIEW",
    previewImage: "/images/world-create.jpg",
  },
  {
    index: "02",
    title: "ABOUT",
    href: "/about",
    tagline: "Brand Strategy, High-End Engineering & Direct Builder Access",
    category: "02 // COMPANY",
    previewImage: "/images/specimen-02-belief.jpg",
  },
  {
    index: "03",
    title: "SERVICES",
    href: "/services",
    tagline: "Three Connected Disciplines: Create, Build & Grow",
    category: "03 // SERVICES",
    previewImage: "/images/world-build.jpg",
  },
  {
    index: "04",
    title: "WORK",
    href: "/work",
    tagline: "Interactive 3D WebGL Portfolio & Selected Commissions",
    category: "04 // SELECTED WORK",
    previewImage: "/images/case-01.jpg",
  },
  {
    index: "05",
    title: "JOURNAL",
    href: "/blog",
    tagline: "Essays & Perspectives on Technology, Design & Systems",
    category: "05 // JOURNAL",
    previewImage: "/images/specimen-04-build.jpg",
  },
  {
    index: "06",
    title: "CONTACT",
    href: "/contact",
    tagline: "Direct Partner Access & Project Inquiries",
    category: "06 // CONTACT",
    previewImage: "/images/world-grow.jpg",
  },
];

/**
 * SiteHeader — 13 UTOPIA Signature Award-Calibre Dynamic Navigation
 */
export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastPathname, setLastPathname] = useState(pathname);
  const [hoveredIdx, setHoveredIdx] = useState<number>(0);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const overlayRef = useRef<HTMLDivElement>(null);

  const closeMenu = useCallback(() => {
    setOpen(false);
  }, []);

  // Header scroll appearance & hide once scrolled past hero
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || document.documentElement.scrollTop || 0;
      const heroThreshold = (window.innerHeight || 800) * 0.65;
      setScrolled(y > 12);
      if (open) {
        setHidden(false);
        return;
      }
      // Completely hidden when past hero
      setHidden(y > heroThreshold);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    // Hook to Lenis scroll instance
    let intervalId: number | undefined;
    const lenis = (window as unknown as { __lenis?: { on: (e: string, cb: () => void) => void; off: (e: string, cb: () => void) => void } }).__lenis;
    if (lenis && typeof lenis.on === "function") {
      lenis.on("scroll", onScroll);
    } else {
      intervalId = window.setInterval(() => {
        const l = (window as unknown as { __lenis?: { on: (e: string, cb: () => void) => void } }).__lenis;
        if (l && typeof l.on === "function") {
          l.on("scroll", onScroll);
          window.clearInterval(intervalId);
        }
      }, 150);
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (intervalId) window.clearInterval(intervalId);
      const l = (window as unknown as { __lenis?: { off: (e: string, cb: () => void) => void } }).__lenis;
      if (l && typeof l.off === "function") {
        l.off("scroll", onScroll);
      }
    };
  }, [open]);

  // Lock body scroll when overlay is active
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Track mouse coordinates over menu for dynamic ambient reactive glow
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!overlayRef.current) return;
    const rect = overlayRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setMousePos({ x, y });
  };

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

  // Close the menu on navigation
  if (lastPathname !== pathname) {
    setLastPathname(pathname);
    closeMenu();
  }

  return (
    <header
      className={`${styles.header} ${scrolled ? styles.scrolled : ""} ${
        hidden ? styles.hidden : ""
      } ${open ? styles.menuOpen : ""} ${pathname === "/" ? styles.onHome : ""}`}
    >
      <div className={styles.inner}>
        {/* Top-Left Corner: Brand Mark */}
        <Link
          href="/"
          className={styles.brand}
          onClick={closeMenu}
          aria-label="13 UTOPIA home"
        >
          <BrandLogo variant="official" priority />
        </Link>

        {/* Top-Right Corner: Capsule Menu Trigger */}
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
      </div>

      {/* Full-Screen Minimal Overlay with Navigation */}
      <div
        id="awwwards-primary-menu"
        ref={overlayRef}
        className={`${styles.menu} ${open ? styles.menuActive : ""}`}
        aria-hidden={!open}
        onMouseMove={handleMouseMove}
      >
        {/* Dynamic cursor-following ambient laser sweep */}
        <div
          className={styles.menuAmbientGlow}
          style={{
            transform: `translate(${mousePos.x * 60 - 30}px, ${mousePos.y * 60 - 30}px)`,
          }}
          aria-hidden="true"
        />

        {/* Subtle holographic grid lines */}
        <div className={styles.gridOverlay} aria-hidden="true" />

        <div className={styles.menuContent}>
          <div className={styles.menuGrid} data-menu-body>
            {/* Left Column: Primary Navigation Links */}
            <nav className={styles.navLinksList} aria-label="Main Navigation">
              {NAV_ITEMS.map((item, idx) => {
                const isHovered = hoveredIdx === idx;
                const isCurrentPage = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));

                return (
                  <div
                    key={item.href}
                    className={`${styles.navItemWrapper} ${isHovered ? styles.navItemWrapperActive : ""}`}
                    onMouseEnter={() => setHoveredIdx(idx)}
                    onFocus={() => setHoveredIdx(idx)}
                  >
                    <Link
                      href={item.href}
                      className={`${styles.navLinkItem} ${isHovered ? styles.navLinkItemHovered : ""} ${isCurrentPage ? styles.navLinkItemCurrent : ""}`}
                      onClick={closeMenu}
                    >
                      <span className={styles.navIndex}>{item.index}</span>
                      <span className={styles.navTitleWrap}>
                        <span className={styles.navTitle}>{item.title}</span>
                        <span className={styles.navGlitchTitle} aria-hidden="true">{item.title}</span>
                      </span>
                      <span className={styles.navArrowIndicator} aria-hidden="true">→</span>
                    </Link>
                  </div>
                );
              })}
            </nav>

            {/* Right Column: Visual Specimen Viewport & Creative Transmission */}
            <div className={styles.menuSidebar}>
              {/* Dynamic Visual Specimen Viewport */}
              <div className={styles.visualViewport}>
                <div className={styles.viewportMediaFrame}>
                  {NAV_ITEMS.map((item, idx) => (
                    <div
                      key={item.href}
                      className={`${styles.specimenImageWrap} ${hoveredIdx === idx ? styles.specimenActive : ""}`}
                    >
                      <Image
                        src={item.previewImage}
                        alt={item.title}
                        fill
                        sizes="(max-width: 900px) 100vw, 45vw"
                        className={styles.specimenImage}
                        priority={idx < 2}
                      />
                    </div>
                  ))}
                  <div className={styles.viewportScanline} />
                  <div className={styles.viewportCornerTL} />
                  <div className={styles.viewportCornerBR} />
                </div>
              </div>

              {/* Direct Inquiries Footer */}
              <div className={styles.menuMetaFooter}>
                <div className={styles.metaCol}>
                  <span className={styles.metaLabel}>DIRECT INQUIRIES</span>
                  <a href="mailto:contact@13utopia.com" className={styles.metaValLink}>
                    <span>contact@13utopia.com</span>
                    <span className={styles.mailArrow}>↗</span>
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
