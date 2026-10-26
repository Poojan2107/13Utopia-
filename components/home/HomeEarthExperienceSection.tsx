"use client";

import React, { useRef, useEffect } from "react";
import Link from "next/link";
import styles from "@/styles/home/HomeEarthExperience.module.css";

/**
 * HomeEarthExperienceSection — Chapter 05: The Invitation
 *
 * Cinematic orbital Earth experience adapted from Edolus and integrated
 * seamlessly into 13 Utopia's continuous homepage stream:
 * - Full 100vh viewport stage showing the complete Earth horizon.
 * - Edolus-grade atmospheric top/bottom edge dissolves (fadeHeight & bottomFade)
 *   so the section flows continuously with preceding work and succeeding footer.
 * - Hardware-accelerated video with smooth interactive mouse parallax.
 * - Pure 13 Utopia monochrome titanium typography (zero gold).
 */
export function HomeEarthExperienceSection() {
  const containerRef = useRef<HTMLElement | null>(null);
  const mediaRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let rafId: number;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const xNorm = (e.clientX - rect.left) / rect.width - 0.5;
      const yNorm = (e.clientY - rect.top) / rect.height - 0.5;
      targetX = xNorm * -20;
      targetY = yNorm * -14;
    };

    const updateLoop = () => {
      currentX += (targetX - currentX) * 0.05;
      currentY += (targetY - currentY) * 0.05;

      if (mediaRef.current) {
        mediaRef.current.style.transform = `translate3d(${currentX.toFixed(2)}px, ${currentY.toFixed(2)}px, 0) scale(1.05)`;
      }
      rafId = requestAnimationFrame(updateLoop);
    };

    container.addEventListener("mousemove", handleMouseMove, { passive: true });
    rafId = requestAnimationFrame(updateLoop);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className={styles.earthExperience}
      id="invitation"
      aria-label="05: The Invitation"
    >
      {/* Full Cinematic Orbital Earth Background Video */}
      <div ref={mediaRef} className={styles.mediaContainer} aria-hidden="true">
        <video
          className={styles.bgVideo}
          src="/videos/earth-orbit.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source
            src="/sites/edolus/videos/Space-compressNOAUDIO-YTfullHD.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      {/* Atmospheric Top & Bottom Continuous Horizon Dissolves */}
      <div className={styles.scrimTop} aria-hidden="true" />
      <div className={styles.scrimBottom} aria-hidden="true" />
      <div className={styles.horizonGlow} aria-hidden="true" />

      {/* Central Architectural Content */}
      <div className={styles.container}>
        {/* Monumental Headline */}
        <div className={styles.headerBlock}>
          <h2 className={styles.mainTitle}>
            LET&apos;S BUILD WHAT<br />
            SHOULDN&apos;T EXIST. YET.
          </h2>
        </div>

        {/* Action Button & Architectural Manifesto */}
        <div className={styles.invitationRow}>
          <div className={styles.invitationLeft}>
            <Link href="/contact" className={styles.ctaButton} data-magnetic>
              <span>START A PROJECT</span>
              <span className={styles.arrowIcon} aria-hidden="true">→</span>
            </Link>
          </div>

          <div className={styles.invitationRight}>
            <p className={styles.manifestoText}>
              SAME UNIVERSE.<br />
              DIFFERENT BUSINESSES.<br />
              <span className={styles.manifestoAccent}>REAL IMPACT.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
