"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SITE_SCRUB } from "@/components/motion/scrollFeel";
import {
  MiragePortfolioExperience,
  PORTFOLIO_PROJECTS,
  type MiragePortfolioHandle,
} from "@/components/work-showcase/MiragePortfolioExperience";
import styles from "@/styles/home/HomeSectionMirageWork.module.css";

gsap.registerPlugin(ScrollTrigger);

const NUM = PORTFOLIO_PROJECTS.length;
/** Showcase scrub window inside pin progress (after UTOPIANVERSE entrance + expand) */
const CARD_START = 0.20;
const CARD_END = 0.90;

function progressForCard(index: number): number {
  const i = Math.max(0, Math.min(NUM - 1, index));
  if (NUM <= 1) return CARD_START;
  return CARD_START + (i / (NUM - 1)) * (CARD_END - CARD_START);
}

/**
 * Homepage work stage — Mirage pin owns UTOPIANVERSE entrance + card showcase.
 * Dive→verse sync is a shared float read inside Mirage's rAF (no events).
 */
export function HomeSectionMirageWork() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const pinRef = useRef<HTMLDivElement | null>(null);
  const mirageRef = useRef<MiragePortfolioHandle | null>(null);
  const stRef = useRef<ScrollTrigger | null>(null);
  const steppingRef = useRef(false);
  const unlockTimerRef = useRef<number | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const pin = pinRef.current;
    if (!section || !pin) return;

    const releaseStep = () => {
      steppingRef.current = false;
      window.dispatchEvent(new CustomEvent("mirage-card-step-done"));
    };

    const scrollToProgress = (progress: number) => {
      const st = stRef.current;
      if (!st) {
        releaseStep();
        return;
      }
      const y = st.start + (st.end - st.start) * clamp01(progress);
      const lenis = (
        window as unknown as {
          __lenis?: {
            scrollTo: (v: number, opts?: object) => void;
          };
        }
      ).__lenis;

      if (unlockTimerRef.current != null) {
        window.clearTimeout(unlockTimerRef.current);
        unlockTimerRef.current = null;
      }

      if (lenis?.scrollTo) {
        lenis.scrollTo(y, {
          duration: 0.7,
          easing: (t: number) => 1 - Math.pow(1 - t, 3),
          onComplete: releaseStep,
        });
        unlockTimerRef.current = window.setTimeout(releaseStep, 900);
      } else {
        window.scrollTo({ top: y, behavior: "smooth" });
        unlockTimerRef.current = window.setTimeout(releaseStep, 750);
      }
    };

    const onStep = (e: Event) => {
      const detail = (e as CustomEvent<{ index: number }>).detail;
      if (!detail || typeof detail.index !== "number") return;
      if (steppingRef.current) return;
      steppingRef.current = true;
      scrollToProgress(progressForCard(detail.index));
    };
    window.addEventListener("mirage-card-step", onStep);

    const ctx = gsap.context(() => {
      const main = ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: "+=520%",
        pin,
        pinSpacing: true,
        scrub: SITE_SCRUB,
        anticipatePin: 1,
        fastScrollEnd: true,
        invalidateOnRefresh: true,
        onEnter: () => {
          mirageRef.current?.setApproachProgress(1);
        },
        onEnterBack: () => {
          mirageRef.current?.setApproachProgress(1);
        },
        onLeave: () => {
          mirageRef.current?.setRiverProgress(1);
        },
        onLeaveBack: () => {
          mirageRef.current?.setRiverProgress(0);
          mirageRef.current?.setApproachProgress(0);
        },
        onUpdate: (self) => {
          mirageRef.current?.setRiverProgress(self.progress);
          if (self.progress > 0.002) {
            mirageRef.current?.setApproachProgress(1);
          }
        },
        onRefresh: (self) => {
          mirageRef.current?.setRiverProgress(self.progress);
          if (self.progress > 0 || self.isActive) {
            mirageRef.current?.setApproachProgress(1);
          }
        },
      });
      stRef.current = main;
    }, section);

    requestAnimationFrame(() => ScrollTrigger.refresh());

    return () => {
      window.removeEventListener("mirage-card-step", onStep);
      if (unlockTimerRef.current != null) {
        window.clearTimeout(unlockTimerRef.current);
      }
      stRef.current = null;
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="work"
      aria-label="Selected work — Mirage portfolio"
      className={styles.section}
    >
      <div ref={pinRef} className={styles.pin}>
        <div className={styles.scrimBottom} aria-hidden="true" />
        <MiragePortfolioExperience ref={mirageRef} embedded />
      </div>
    </section>
  );
}

function clamp01(t: number): number {
  return Math.max(0, Math.min(1, t));
}
