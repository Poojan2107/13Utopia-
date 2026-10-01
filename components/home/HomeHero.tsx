"use client";

import { useEffect, useRef } from "react";
import { GoldSilkCurtain } from "./GoldSilkCurtain";
import { TransparentBustVideo } from "./TransparentBustVideo";
import { HeroEnter } from "@/components/motion/HeroEnter";
import styles from "@/styles/home/HomeHero.module.css";

/**
 * HomeHero — locked dual-flank: type in silk gaps, bust gold fill only (no glow).
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
      currentX += (targetX - currentX) * 0.06;
      currentY += (targetY - currentY) * 0.06;

      if (el) {
        el.style.setProperty("--mx", `${currentX * 14}px`);
        el.style.setProperty("--my", `${currentY * 10}px`);
        el.style.setProperty("--rx", `${currentY * -2.5}deg`);
        el.style.setProperty("--ry", `${currentX * 4}deg`);
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

        <div ref={typeRef} className={styles.stageTypography}>
          <aside className={`${styles.left} ${styles.flank}`}>
            <div className={styles.stack} data-hero-left>
              <div className={`${styles.statement} ${styles.statementGold}`}>
                <span className={styles.be}>BE</span>
                <h1 className={styles.unreal}>UNREAL</h1>
              </div>
            </div>
          </aside>

          <aside className={`${styles.right} ${styles.flank}`}>
            <div className={`${styles.stack} ${styles.stackRight}`} data-hero-right>
              <div
                className={`${styles.statement} ${styles.statementRight} ${styles.statementGold}`}
              >
                <span className={`${styles.be} ${styles.beRight}`}>BE</span>
                <h2 className={styles.unreasonable}>UNREASONABLE</h2>
              </div>
            </div>
          </aside>
        </div>

        <div className={styles.media} aria-hidden="true" data-hero-media>
          <div className={styles.videoWrapper}>
            <TransparentBustVideo />
          </div>
        </div>

        <div className={styles.overlay} aria-hidden="true" />
      </HeroEnter>
    </section>
  );
}
