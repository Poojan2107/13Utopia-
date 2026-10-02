"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./ExperimentHeroVideoPortal.module.css";

gsap.registerPlugin(ScrollTrigger);

/**
 * ExperimentHeroVideoPortal:
 * - Liquid smooth GPU-accelerated emergence of video out of letter "O".
 * - Uses GPU-composited `clipPath: inset(...)` & camera dolly zoom without layout reflows.
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
    const videoEl = videoElementRef.current;
    const hud = hudRef.current;

    if (!container || !typeLayer || !letterO || !videoCard || !videoEl) return;

    const ctx = gsap.context(() => {
      // Calculate precise insets for letter O relative to the window
      const getOInsets = () => {
        const rect = letterO.getBoundingClientRect();
        const top = rect.top;
        const right = window.innerWidth - rect.right;
        const bottom = window.innerHeight - rect.bottom;
        const left = rect.left;
        const radius = Math.min(rect.width, rect.height) * 0.48;
        return { top, right, bottom, left, radius };
      };

      let insets = getOInsets();

      // Set initial clip-path tucked precisely inside letter O with opacity 0
      gsap.set(videoCard, {
        clipPath: `inset(${insets.top}px ${insets.right}px ${insets.bottom}px ${insets.left}px round ${insets.radius}px)`,
        opacity: 0,
      });
      gsap.set(videoEl, {
        scale: 1.35,
      });

      // Master High-Performance GPU Scroll Timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: "+=2200",
          pin: true,
          scrub: 0.85, // Smooth cinematic momentum damping
          onRefresh: () => {
            insets = getOInsets();
          },
        },
      });

      // ── 01. Video awakens inside O (0 -> 0.08) ──
      tl.to(
        videoCard,
        {
          opacity: 1,
          duration: 0.08,
          ease: "none",
        },
        0.01
      );

      // ── 02. Smooth GPU Inset Unroll from O to 100vw × 100vh (0.04 -> 0.72) ──
      tl.to(
        videoCard,
        {
          clipPath: "inset(0px 0px 0px 0px round 0px)",
          duration: 0.68,
          ease: "power2.inOut",
        },
        0.04
      );

      // Camera dolly zoom smoothly widens from telephoto O crop to wide-angle full bleed
      tl.to(
        videoEl,
        {
          scale: 1.0,
          duration: 0.68,
          ease: "power2.inOut",
        },
        0.04
      );

      // Typography smoothly dissolves and recedes in 3D perspective
      tl.to(
        typeLayer,
        {
          opacity: 0,
          scale: 0.88,
          y: -40,
          filter: "blur(12px)",
          duration: 0.45,
          ease: "power2.inOut",
        },
        0.04
      );

      // ── 03. Video settles flush, HUD caption reveals (0.68 -> 0.90) ──
      if (hud) {
        tl.to(
          hud,
          {
            opacity: 1,
            y: 0,
            duration: 0.22,
            ease: "power2.out",
          },
          0.68
        );
      }

      // Settled buffer before releasing pin into next section
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
                {/* Clean solid letter "O" where video emerges */}
                <span ref={letterORef} className={styles.letterO}>
                  O
                </span>
                <span>NABLE</span>
              </div>
            </div>
          </div>
        </div>

        {/* ── 02. GPU-Accelerated Emerging Video Layer ─────────────── */}
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
