"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./ExperimentHeroVideoPortal.module.css";

gsap.registerPlugin(ScrollTrigger);

/**
 * ExperimentHeroVideoPortal:
 * - Centered "BE UNREAL UNREASONABLE" hero tagline.
 * - The letter "O" in UNREASONABLE has an aperture window showing the moving 3D metal human.
 * - On scroll, the video expands smoothly OUT OF THE "O" until it fills the screen as Section 02,
 *   settles at full-bleed, and then naturally continues into the 3D Monolith section.
 */
export function ExperimentHeroVideoPortal() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const typeLayerRef = useRef<HTMLDivElement | null>(null);
  const letterORef = useRef<HTMLSpanElement | null>(null);
  const portalRef = useRef<HTMLDivElement | null>(null);
  const miniVideoRef = useRef<HTMLVideoElement | null>(null);
  const fullVideoRef = useRef<HTMLVideoElement | null>(null);
  const hudRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    const typeLayer = typeLayerRef.current;
    const letterO = letterORef.current;
    const portal = portalRef.current;
    const hud = hudRef.current;

    if (!container || !typeLayer || !letterO || !portal) return;

    const ctx = gsap.context(() => {
      // Function to calculate exact center % coordinates of letter "O"
      const getOCoords = () => {
        const rect = letterO.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const percentX = (centerX / window.innerWidth) * 100;
        const percentY = (centerY / window.innerHeight) * 100;
        const radiusPx = rect.width * 0.32;
        return { percentX, percentY, radiusPx };
      };

      let oPos = getOCoords();

      // Initial state: Portal starts clipped precisely to the O's inner circle
      gsap.set(portal, {
        clipPath: `circle(${oPos.radiusPx}px at ${oPos.percentX}% ${oPos.percentY}%)`,
        opacity: 0,
      });

      // Master ScrollTrigger pinned animation sequence
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: "+=2200",
          pin: true,
          scrub: 0.6,
          onRefresh: () => {
            oPos = getOCoords();
          },
        },
      });

      // ── Phase 1: Video portal wakes up and blooms out from the O ──
      tl.to(
        portal,
        {
          opacity: 1,
          duration: 0.15,
          ease: "power1.inOut",
        },
        0
      );

      // Expanding the circular clip-path from letter O's center outward to 150% full bleed
      tl.to(
        portal,
        {
          clipPath: `circle(150% at ${oPos.percentX}% ${oPos.percentY}%)`,
          duration: 0.75,
          ease: "power2.inOut",
        },
        0.05
      );

      // Push back and dissolve typography in spatial depth
      tl.to(
        typeLayer,
        {
          scale: 0.84,
          opacity: 0,
          filter: "blur(10px)",
          duration: 0.55,
          ease: "power2.inOut",
        },
        0.05
      );

      // ── Phase 2: Video settles at full bleed & HUD caption fades in ──
      if (hud) {
        tl.to(
          hud,
          {
            opacity: 1,
            y: 0,
            duration: 0.35,
            ease: "power2.out",
          },
          0.65
        );
      }

      // Keep settled at full screen for the remainder of the scroll range
      tl.to({}, { duration: 0.25 });
    }, container);

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
    <section ref={containerRef} className={styles.pinnedContainer} id="hero-portal-experience">
      <div className={styles.stage}>
        {/* ── 01. Typography Hero Layer ──────────────────────── */}
        <div ref={typeLayerRef} className={styles.typeLayer}>
          <div className={styles.monumentLockup}>
            {/* Common Enlarged "BE" */}
            <div className={styles.beCommonBlock}>
              <span className={styles.beWord}>BE</span>
            </div>

            {/* Stacked Branch: UNREAL + UNREASONABLE (with Aperture O) */}
            <div className={styles.stackedBlock}>
              <span className={styles.wordTop}>UNREAL</span>
              <div className={styles.wordBottom}>
                <span>UNREAS</span>

                {/* The Interactive "O" Aperture */}
                <span ref={letterORef} className={styles.letterOContainer}>
                  <span className={styles.letterOText}>O</span>
                  <span className={styles.miniVideoWindow}>
                    <video
                      ref={miniVideoRef}
                      src="/metal-human/metal-human.mp4"
                      poster="/metal-human/metal-human.jpg"
                      autoPlay
                      muted
                      loop
                      playsInline
                      className={styles.miniVideoElement}
                    />
                  </span>
                </span>

                <span>NABLE</span>
              </div>
            </div>
          </div>
        </div>

        {/* ── 02. Expanding Full-Bleed Video Portal Layer ───────── */}
        <div ref={portalRef} className={styles.expandingPortal}>
          <video
            ref={fullVideoRef}
            src="/metal-human/metal-human.mp4"
            poster="/metal-human/metal-human.jpg"
            autoPlay
            muted
            loop
            playsInline
            className={styles.portalVideo}
          />
          <div className={styles.videoScrim} />

          {/* Top/Bottom Gradient Vignette */}
          <div className={styles.fadeTop} aria-hidden="true" />
          <div className={styles.fadeBottom} aria-hidden="true" />

          {/* Video Editorial HUD Caption */}
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
      </div>
    </section>
  );
}
