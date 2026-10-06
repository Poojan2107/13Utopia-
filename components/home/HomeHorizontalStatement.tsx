"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Thirteen3DCanvas } from "./Thirteen3DCanvas";

import styles from "@/styles/home/HomeHorizontalStatement.module.css";

gsap.registerPlugin(ScrollTrigger);

/**
 * HomeHorizontalStatement — Chapter 03: Kinetic Convergence Cinema
 * Pinned 100vh cinematic canvas with centered 3D "13" Monolith Emblem.
 * Dual opposing scroll-driven entrance:
 * - Line 1 sweeps in from the LEFT and settles in upper center.
 * - Line 2 ("WE ARE 13 UTOPIA") sweeps in from the RIGHT and locks underneath.
 * - Central 3D Titanium "13" Monolith floats in continuous depth behind the convergence.
 */
export function HomeHorizontalStatement() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const line1Ref = useRef<HTMLDivElement | null>(null);
  const line2Ref = useRef<HTMLDivElement | null>(null);
  const glowRef = useRef<HTMLDivElement | null>(null);
  const bgTrackRef = useRef<HTMLDivElement | null>(null);
  const [emblemProgress, setEmblemProgress] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    const container = containerRef.current;
    const line1 = line1Ref.current;
    const line2 = line2Ref.current;
    const glow = glowRef.current;
    const bgTrack = bgTrackRef.current;
    if (!section || !container || !line1 || !line2) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=170%",
          scrub: 0.8,
          pin: container,
          pinSpacing: true,
          anticipatePin: 1,
          fastScrollEnd: false,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            setEmblemProgress(self.progress);
          },
        },
      });

      // 01. Line 1 sweeps in smoothly from LEFT to CENTER (0.0 -> 0.42)
      tl.fromTo(
        line1,
        { x: "-100vw", opacity: 0 },
        {
          x: "0vw",
          opacity: 1,
          ease: "power2.out",
          duration: 0.42,
        },
        0
      );

      // 02. Line 2 sweeps in smoothly from RIGHT to CENTER (0.18 -> 0.60)
      tl.fromTo(
        line2,
        { x: "100vw", opacity: 0 },
        {
          x: "0vw",
          opacity: 1,
          ease: "power2.out",
          duration: 0.42,
        },
        0.18
      );

      // 03. Convergence Glow blooms gently as they meet (0.35 -> 0.70)
      if (glow) {
        tl.fromTo(
          glow,
          { opacity: 0, scale: 0.75 },
          {
            opacity: 1,
            scale: 1.15,
            ease: "power1.out",
            duration: 0.35,
          },
          0.35
        );
      }

      // 04. Background Ghost Track subtle counter-drift
      if (bgTrack) {
        tl.fromTo(
          bgTrack,
          { x: "15vw" },
          { x: "-15vw", ease: "none", duration: 1.0 },
          0
        );
      }

      // 05. Unified Centerpiece Hold with subtle breathing scale (0.60 -> 1.0)
      tl.to(
        [line1, line2],
        {
          scale: 1.025,
          ease: "none",
          duration: 0.40,
        },
        0.60
      );
    }, section);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={styles.horizontalSection}
      id="thesis"
      aria-label="13 Utopia Architectural Thesis"
    >
      <div ref={containerRef} className={styles.pinContainer}>
        {/* Central Convergence Energy Aura */}
        <div ref={glowRef} className={styles.convergenceGlow} aria-hidden="true" />

        {/* Pure 3D Titanium "13" Monolith Emblem Canvas Stage */}
        <div className={styles.emblemStage} aria-hidden="true">
          <Thirteen3DCanvas
            progress={emblemProgress}
            className={styles.canvas3D}
          />
        </div>


        {/* Parallax Background Ghost Outline Ribbon */}
        <div className={styles.backgroundViewport} aria-hidden="true">
          <div ref={bgTrackRef} className={styles.backgroundTrack}>
            <span className={styles.ghostText}>
              13 UTOPIA · UNREASONABLE OBSESSION · UNREAL REALITY · 
            </span>
          </div>
        </div>

        {/* Foreground Dual Opposing Lockup Stage */}
        <div className={styles.stageLockup}>
          {/* Top Line: Sweeps in from LEFT */}
          <div ref={line1Ref} className={styles.lineTrackLeft}>
            <span className={styles.leadText}>
              DRIVEN BY UNREASONABLE OBSESSION TO CREATE WHAT FEELS UNREAL
            </span>
          </div>

          {/* Bottom Line: Sweeps in from RIGHT */}
          <div ref={line2Ref} className={styles.lineTrackRight}>
            <span className={styles.grandEmblem}>
              WE ARE 13 UTOPIA
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
