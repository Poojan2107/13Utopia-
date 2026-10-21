"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SITE_SCRUB } from "@/components/motion/scrollFeel";
import { Thirteen3DCanvas } from "./Thirteen3DCanvas";

import styles from "@/styles/home/HomeHorizontalStatement.module.css";

gsap.registerPlugin(ScrollTrigger);

function clamp01(t: number) {
  return Math.max(0, Math.min(1, t));
}

function smootherstep(edge0: number, edge1: number, x: number) {
  const t = clamp01((x - edge0) / Math.max(1e-6, edge1 - edge0));
  return t * t * t * (t * (t * 6 - 15) + 10);
}

function applyThesisProgress(
  p: number,
  line1: HTMLElement,
  line2: HTMLElement,
  glow: HTMLElement | null,
  bgTrack: HTMLElement | null
) {
  // Match GSAP timeline windows from the scroll-driven version
  const l1 = smootherstep(0, 0.42, p);
  const l2 = smootherstep(0.18, 0.6, p);
  const glowT = smootherstep(0.35, 0.7, p);
  const breathe = smootherstep(0.6, 1, p);
  const scale = 1 + breathe * 0.025;

  line1.style.transform = `translate3d(${(1 - l1) * -100}vw, 0, 0) scale(${scale})`;
  line1.style.opacity = String(l1);
  line2.style.transform = `translate3d(${(1 - l2) * 100}vw, 0, 0) scale(${scale})`;
  line2.style.opacity = String(l2);

  if (glow) {
    glow.style.opacity = String(glowT);
    glow.style.transform = `scale(${0.75 + glowT * 0.4})`;
  }
  if (bgTrack) {
    bgTrack.style.transform = `translate3d(${15 - p * 30}vw, 0, 0)`;
  }
}

type Props = {
  /** 0–1 thesis chapter progress (skips ScrollTrigger when set) */
  externalProgress?: number;
  fillParent?: boolean;
};

/**
 * HomeHorizontalStatement — Chapter 03: Kinetic Convergence Cinema
 * Pinned 100vh cinematic canvas with centered 3D "13" Monolith Emblem.
 */
export function HomeHorizontalStatement({
  externalProgress,
  fillParent = false,
}: Props = {}) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const line1Ref = useRef<HTMLDivElement | null>(null);
  const line2Ref = useRef<HTMLDivElement | null>(null);
  const glowRef = useRef<HTMLDivElement | null>(null);
  const bgTrackRef = useRef<HTMLDivElement | null>(null);
  const controlled = typeof externalProgress === "number";
  const [emblemProgress, setEmblemProgress] = useState(
    controlled ? clamp01(externalProgress) : 0
  );

  useEffect(() => {
    if (!controlled) return;
    const p = clamp01(externalProgress ?? 0);
    const line1 = line1Ref.current;
    const line2 = line2Ref.current;
    if (!line1 || !line2) return;
    applyThesisProgress(
      p,
      line1,
      line2,
      glowRef.current,
      bgTrackRef.current
    );
    setEmblemProgress(p);
  }, [controlled, externalProgress]);

  useEffect(() => {
    if (controlled) return;
    const section = sectionRef.current;
    const container = containerRef.current;
    const line1 = line1Ref.current;
    const line2 = line2Ref.current;
    const glow = glowRef.current;
    const bgTrack = bgTrackRef.current;
    if (!section || !container || !line1 || !line2) return;

    const ctx = gsap.context(() => {
      let lastEmblemP = -1;
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=170%",
          scrub: SITE_SCRUB,
          pin: container,
          pinSpacing: true,
          anticipatePin: 1,
          fastScrollEnd: true,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const p = self.progress;
            if (Math.abs(p - lastEmblemP) >= 0.0015) {
              lastEmblemP = p;
              setEmblemProgress(p);
            }
          },
        },
      });

      tl.fromTo(
        line1,
        { x: "-100vw", opacity: 0 },
        { x: "0vw", opacity: 1, ease: "power2.out", duration: 0.42 },
        0
      );

      tl.fromTo(
        line2,
        { x: "100vw", opacity: 0 },
        { x: "0vw", opacity: 1, ease: "power2.out", duration: 0.42 },
        0.18
      );

      if (glow) {
        tl.fromTo(
          glow,
          { opacity: 0, scale: 0.75 },
          { opacity: 1, scale: 1.15, ease: "power1.out", duration: 0.35 },
          0.35
        );
      }

      if (bgTrack) {
        tl.fromTo(
          bgTrack,
          { x: "15vw" },
          { x: "-15vw", ease: "none", duration: 1.0 },
          0
        );
      }

      tl.to(
        [line1, line2],
        { scale: 1.025, ease: "none", duration: 0.4 },
        0.6
      );
    }, section);

    return () => {
      ctx.revert();
    };
  }, [controlled]);

  return (
    <section
      ref={sectionRef}
      className={styles.horizontalSection}
      id="thesis"
      aria-label="13 Utopia Architectural Thesis"
      style={
        fillParent
          ? {
              position: "absolute",
              inset: 0,
              height: "100%",
              minHeight: 0,
              margin: 0,
            }
          : undefined
      }
    >
      <div
        ref={containerRef}
        className={styles.pinContainer}
        style={
          fillParent
            ? { position: "absolute", inset: 0, height: "100%", width: "100%" }
            : undefined
        }
      >
        <div
          ref={glowRef}
          className={styles.convergenceGlow}
          aria-hidden="true"
        />

        <div className={styles.emblemStage} aria-hidden="true">
          <Thirteen3DCanvas
            progress={emblemProgress}
            className={styles.canvas3D}
          />
        </div>

        <div className={styles.backgroundViewport} aria-hidden="true">
          <div ref={bgTrackRef} className={styles.backgroundTrack}>
            <span className={styles.ghostText}>
              13 UTOPIA · UNREASONABLE OBSESSION · UNREAL REALITY ·
            </span>
          </div>
        </div>

        <div className={styles.stageLockup}>
          <div
            ref={line1Ref}
            className={styles.lineTrackLeft}
            style={controlled ? { opacity: 0 } : undefined}
          >
            <span className={styles.leadText}>
              DRIVEN BY UNREASONABLE OBSESSION TO CREATE WHAT FEELS UNREAL
            </span>
          </div>

          <div
            ref={line2Ref}
            className={styles.lineTrackRight}
            style={controlled ? { opacity: 0 } : undefined}
          >
            <span className={styles.grandEmblem}>WE ARE 13 UTOPIA</span>
          </div>
        </div>
      </div>
    </section>
  );
}
