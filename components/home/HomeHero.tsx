"use client";

import { useEffect, useRef } from "react";
import { GoldSilkCurtain } from "./GoldSilkCurtain";
import { TransparentBustVideo } from "./TransparentBustVideo";
import { HeroEnter } from "@/components/motion/HeroEnter";
import styles from "@/styles/home/HomeHero.module.css";

/**
 * HomeHero — left type column · right-edge bust.
 * Both couplets live in the left silk void; bust owns the right rail.
 */
export function HomeHero() {
  const typeRef = useRef<HTMLDivElement | null>(null);
  const heroRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const hero = heroRef.current;
    const onScroll = () => {
      const y = window.scrollY;
      const h = window.innerHeight || 800;
      if (hero) {
        if (y > h * 1.25) {
          hero.style.visibility = "hidden";
          hero.style.pointerEvents = "none";
        } else {
          hero.style.visibility = "visible";
          hero.style.pointerEvents = "auto";
        }
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const el = typeRef.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let rafId: number;

    const onMouseMove = (e: MouseEvent) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      targetX = (e.clientX - cx) / cx;
      targetY = (e.clientY - cy) / cy;
    };

    const animate = () => {
      currentX += (targetX - currentX) * 0.05;
      currentY += (targetY - currentY) * 0.05;

      if (el) {
        el.style.setProperty("--mx", `${currentX * 6}px`);
        el.style.setProperty("--my", `${currentY * 5}px`);
        el.style.setProperty("--rx", `${currentY * -1.2}deg`);
        el.style.setProperty("--ry", `${currentX * 1.8}deg`);
      }
      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section ref={heroRef} className={styles.hero} aria-label="13 UTOPIA">
      <HeroEnter>
        <div className={styles.atmosphere} aria-hidden="true">
          <GoldSilkCurtain />
        </div>

        <div className={styles.media} aria-hidden="true" data-hero-media>
          <div className={styles.videoWrapper}>
            <TransparentBustVideo variant="edge" />
          </div>
        </div>

        <div ref={typeRef} className={styles.stageTypography}>
          <h1 className={styles.srOnly}>BE UNREAL. BE UNREASONABLE.</h1>
          <aside className={`${styles.left} ${styles.flank}`} aria-hidden="true">
            <div className={styles.stack} data-hero-left>
              {/* Tagline Eyebrow */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  fontFamily: "var(--font-mono, monospace)",
                  fontSize: "clamp(10px, 0.9vw, 12px)",
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "#f4dfc8",
                }}
              >
                <span
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    backgroundColor: "#f4dfc8",
                    boxShadow: "0 0 8px #f4dfc8",
                  }}
                />
                <span>13 UTOPIA // ANOMALOUS ARCHITECTURE</span>
              </div>

              <div className={`${styles.lockup} ${styles.statementGold}`}>
                <div className={styles.beCol}>
                  <span className={styles.beHuge}>BE</span>
                </div>
                <div className={styles.wordsCol}>
                  <span className={styles.wordUnreal}>UNREAL</span>
                  <span className={styles.wordUnreasonable}>UNREASONABLE</span>
                </div>
              </div>

              {/* Layered Sub-Tagline */}
              <p
                style={{
                  fontFamily: "var(--font-display, 'PP Neue Montreal', sans-serif)",
                  fontSize: "clamp(13px, 1.1vw, 16px)",
                  fontWeight: 300,
                  letterSpacing: "0.04em",
                  color: "rgba(250, 246, 240, 0.7)",
                  margin: 0,
                  maxWidth: "440px",
                  lineHeight: 1.5,
                }}
              >
                Forging category-defining 3D worlds, bespoke identity systems, and zero-latency digital reality.
              </p>
            </div>
          </aside>
        </div>

        <div className={styles.overlay} aria-hidden="true" />
      </HeroEnter>
    </section>
  );
}
