"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./ExperimentHeroVideoPortal.module.css";

gsap.registerPlugin(ScrollTrigger);

/**
 * ExperimentHeroVideoPortal:
 * - Pure solid white centered "BE UNREAL UNREASONABLE" hero tagline (no video visible on load).
 * - As the user scrolls naturally down the page, the video section emerges directly out of the
 *   letter "O" in UNREASONABLE, crawling down and expanding to fill the video section before settling.
 */
export function ExperimentHeroVideoPortal() {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const heroRef = useRef<HTMLElement | null>(null);
  const typeContainerRef = useRef<HTMLDivElement | null>(null);
  const letterORef = useRef<HTMLSpanElement | null>(null);
  const videoSectionRef = useRef<HTMLElement | null>(null);
  const videoWrapperRef = useRef<HTMLDivElement | null>(null);
  const videoElementRef = useRef<HTMLVideoElement | null>(null);
  const hudRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    const hero = heroRef.current;
    const typeContainer = typeContainerRef.current;
    const letterO = letterORef.current;
    const videoSection = videoSectionRef.current;
    const videoWrapper = videoWrapperRef.current;
    const hud = hudRef.current;

    if (!root || !hero || !typeContainer || !letterO || !videoSection || !videoWrapper) return;

    const ctx = gsap.context(() => {
      // Calculate origin point of letter O relative to screen
      const getOOrigin = () => {
        const rect = letterO.getBoundingClientRect();
        const percentX = ((rect.left + rect.width / 2) / window.innerWidth) * 100;
        return { percentX };
      };

      let { percentX } = getOOrigin();

      // Set initial state of the crawling video wrapper
      gsap.set(videoWrapper, {
        clipPath: `ellipse(12% 8% at ${percentX}% 0%)`,
        scale: 0.75,
        opacity: 0.15,
        transformOrigin: `${percentX}% top`,
      });

      // Continuous natural scroll-driven crawl & unroll
      ScrollTrigger.create({
        trigger: videoSection,
        start: "top bottom",
        end: "top top",
        scrub: 0.5,
        onRefresh: () => {
          percentX = getOOrigin().percentX;
        },
        onUpdate: (self) => {
          const p = self.progress; // 0 (just entering viewport) -> 1 (fully at top)

          // 1. Unroll & expand clip path from letter O's column downward into full bleed
          const clipX = 12 + (100 - 12) * p;
          const clipY = 8 + (100 - 8) * p;
          const currentOriginX = percentX * (1 - p) + 50 * p;
          const currentOriginY = 0 * (1 - p) + 50 * p;

          gsap.set(videoWrapper, {
            clipPath: `ellipse(${clipX}% ${clipY}% at ${currentOriginX}% ${currentOriginY}%)`,
            scale: 0.75 + 0.25 * p,
            opacity: Math.min(1, 0.15 + p * 1.5),
            transformOrigin: `${currentOriginX}% ${currentOriginY}%`,
          });

          // 2. Dissolve and parallax-lift the hero typography as user scrolls away
          gsap.set(typeContainer, {
            y: -120 * p,
            opacity: Math.max(0, 1 - p * 1.6),
            scale: 1 - 0.08 * p,
          });

          // 3. Reveal HUD caption when nearly settled
          if (hud) {
            const hudP = Math.max(0, (p - 0.65) / 0.35);
            gsap.set(hud, {
              opacity: hudP,
              y: 20 * (1 - hudP),
            });
          }
        },
      });
    }, root);

    const onResize = () => {
      ScrollTrigger.refresh();
    };
    window.addEventListener("resize", onResize);

    return () => {
      ctx.revert();
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div ref={rootRef} className={styles.portalWrapper}>
      {/* ── 01. HERO SECTION (100vh) — Pristine Clean Solid Typography ── */}
      <section ref={heroRef} className={styles.heroSection} id="hero" aria-label="13 UTOPIA">
        <div ref={typeContainerRef} className={styles.typeContainer}>
          <div className={styles.monumentLockup}>
            {/* Common Enlarged "BE" */}
            <div className={styles.beCommonBlock}>
              <span className={styles.beWord}>BE</span>
            </div>

            {/* Stacked Branch: UNREAL + UNREASONABLE */}
            <div className={styles.stackedBlock}>
              <span className={styles.wordTop}>UNREAL</span>
              <div className={styles.wordBottom}>
                <span>UNREAS</span>
                {/* Clean solid letter O (portal anchor point on scroll) */}
                <span ref={letterORef} className={styles.letterO}>
                  O
                </span>
                <span>NABLE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 02. VIDEO SHOWCASE SECTION (100vh) — Natural Scroll Unroll Target ── */}
      <section
        ref={videoSectionRef}
        className={styles.videoSection}
        id="video-showcase"
        aria-label="13 Utopia Cinematic Showcase Reel"
      >
        {/* Top/Bottom Architectural Gradient Vignettes */}
        <div className={styles.fadeTop} aria-hidden="true" />
        <div className={styles.fadeBottom} aria-hidden="true" />

        {/* Video Wrapper that crawls and blooms out from letter O */}
        <div ref={videoWrapperRef} className={styles.videoWrapper}>
          <video
            ref={videoElementRef}
            src="/metal-human/metal-human.mp4"
            poster="/metal-human/metal-human.jpg"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className={styles.videoElement}
          />
          <div className={styles.videoScrim} />

          {/* Minimal Editorial Caption */}
          <div ref={hudRef} className={styles.hudBottom}>
            <div className={styles.captionBlock}>
              <span className={styles.chapterNum}>ACT 01 // SHOWCASE</span>
              <h2 className={styles.chapterTitle}>DIGITAL REALITIES IN TRANSCENDENCE</h2>
              <p className={styles.chapterSub}>
                Physical constraints eliminated through computational alchemy and bespoke spatial design.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
