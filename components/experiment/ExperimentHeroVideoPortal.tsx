"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./ExperimentHeroVideoPortal.module.css";

gsap.registerPlugin(ScrollTrigger);

/**
 * ExperimentHeroVideoPortal:
 * - Centered solid white "BE UNREAL UNREASONABLE" typography on load (no video visible).
 * - As the user scrolls, the video physically emerges directly OUT OF THE LETTER "O",
 *   morphing/expanding in position & scale until it sets down as the full-bleed video section.
 */
export function ExperimentHeroVideoPortal() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const typeLayerRef = useRef<HTMLDivElement | null>(null);
  const letterORef = useRef<HTMLSpanElement | null>(null);
  const videoCardRef = useRef<HTMLDivElement | null>(null);
  const videoElementRef = useRef<HTMLVideoElement | null>(null);
  const hudRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    const typeLayer = typeLayerRef.current;
    const letterO = letterORef.current;
    const videoCard = videoCardRef.current;
    const hud = hudRef.current;

    if (!container || !typeLayer || !letterO || !videoCard) return;

    const ctx = gsap.context(() => {
      // Calculate current bounding box of letter "O" relative to container
      const getORect = () => {
        const rect = letterO.getBoundingClientRect();
        return {
          x: rect.left,
          y: rect.top,
          w: Math.max(rect.width, 40),
          h: Math.max(rect.height, 50),
        };
      };

      let initialO = getORect();

      // Master Scroll-Driven Timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: "+=1800",
          pin: true,
          scrub: 0.6,
          onRefresh: () => {
            initialO = getORect();
          },
        },
      });

      // Set initial values right at letter "O"
      tl.set(videoCard, {
        left: () => initialO.x,
        top: () => initialO.y,
        width: () => initialO.w,
        height: () => initialO.h,
        borderRadius: "50%",
        opacity: 0,
        scale: 0.95,
      });

      // ── Step 1 (0 -> 0.10): Video awakens and pops out of O ──
      tl.to(
        videoCard,
        {
          opacity: 1,
          scale: 1,
          duration: 0.12,
          ease: "power1.out",
        },
        0.02
      );

      // ── Step 2 (0.05 -> 0.75): Video expands from O's coords to Full Viewport ──
      tl.to(
        videoCard,
        {
          left: 0,
          top: 0,
          width: "100vw",
          height: "100vh",
          borderRadius: "0px",
          boxShadow: "0 0 0 rgba(0,0,0,0)",
          duration: 0.70,
          ease: "power2.inOut",
        },
        0.05
      );

      // Typography smoothly dissolves and pushes back into spatial depth
      tl.to(
        typeLayer,
        {
          opacity: 0,
          scale: 0.92,
          filter: "blur(8px)",
          duration: 0.50,
          ease: "power2.inOut",
        },
        0.05
      );

      // ── Step 3 (0.70 -> 0.95): Video settles in place, HUD caption reveals ──
      if (hud) {
        tl.to(
          hud,
          {
            opacity: 1,
            y: 0,
            duration: 0.25,
            ease: "power2.out",
          },
          0.70
        );
      }

      // Settle buffer before smooth scroll handoff to 3D Monolith section
      tl.to({}, { duration: 0.20 });
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
    <section ref={containerRef} className={styles.pinnedWrapper} id="hero-video-portal">
      <div className={styles.stage}>
        {/* ── 01. Pristine Hero Typography Layer ────────────────── */}
        <div ref={typeLayerRef} className={styles.typeLayer}>
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
                {/* Clean solid letter "O" where the video physically emerges */}
                <span ref={letterORef} className={styles.letterO}>
                  O
                </span>
                <span>NABLE</span>
              </div>
            </div>
          </div>
        </div>

        {/* ── 02. The Emerging Video Card (Physical Expansion out of "O") ── */}
        <div ref={videoCardRef} className={styles.emergingVideoCard}>
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

          {/* Top/Bottom Subtle Vignette */}
          <div className={styles.fadeTop} aria-hidden="true" />
          <div className={styles.fadeBottom} aria-hidden="true" />

          {/* Video Section Editorial HUD Caption */}
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
