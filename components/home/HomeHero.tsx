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
    <section className={styles.hero} aria-label="13 UTOPIA">
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
          <h1 className={styles.srOnly}>BE UNREAL. UNREASONABLE.</h1>
          <aside className={`${styles.left} ${styles.flank}`} aria-hidden="true">
            <div className={styles.stack} data-hero-left>
              <div className={`${styles.statement} ${styles.statementGold}`}>
                <span className={styles.be}>BE</span>
                <span className={styles.unreal}>UNREAL</span>
                <span className={styles.unreasonable}>UNREASONABLE</span>
              </div>
            </div>
          </aside>
        </div>

        <div className={styles.overlay} aria-hidden="true" />
      </HeroEnter>
    </section>
  );
}
