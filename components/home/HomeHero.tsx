"use client";

import { useEffect, useRef } from "react";
import { GoldSilkCurtain } from "./GoldSilkCurtain";
import { TransparentBustVideo } from "./TransparentBustVideo";
import { HeroEnter } from "@/components/motion/HeroEnter";
import styles from "@/styles/home/HomeHero.module.css";

/**
 * HomeHero — Monumental 3D Spatial Typography with Metallic Chrome/Gold gradients,
 * dynamic mouse parallax, and spatial depth behind the bust sculpture.
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
        el.style.setProperty("--mx", `${currentX * 18}px`);
        el.style.setProperty("--my", `${currentY * 12}px`);
        el.style.setProperty("--rx", `${currentY * -3.5}deg`);
        el.style.setProperty("--ry", `${currentX * 5}deg`);
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
        {/* Layer 0: Atmospheric Gold Silk Curtain */}
        <div className={styles.atmosphere} aria-hidden="true">
          <GoldSilkCurtain />
        </div>

        {/* Layer 1: Spatial Typography in Depth (Behind the Bust) */}
        <div ref={typeRef} className={styles.stageTypography}>
          <aside className={`${styles.left} ${styles.flank}`}>
            <div className={styles.stack} data-hero-left>
              <div className={`${styles.statement} ${styles.statementOutline}`}>
                <span className={styles.be}>BE</span>
                <h1 className={styles.unreal}>UNREAL</h1>
              </div>
            </div>
          </aside>

          <aside className={`${styles.right} ${styles.flank}`}>
            <div className={`${styles.stack} ${styles.stackRight}`} data-hero-right>
              <div className={`${styles.statement} ${styles.statementRight} ${styles.statementSolid}`}>
                <span className={`${styles.be} ${styles.beRight}`}>BE</span>
                <h2 className={styles.unreasonable}>UNREASONABLE</h2>
              </div>
            </div>
          </aside>
        </div>

        {/* Layer 2: 3D Sculpture Bust (Passes in front of typography) */}
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
