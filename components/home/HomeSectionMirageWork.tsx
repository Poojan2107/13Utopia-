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
import {
  BlackHoleCanvas,
  type BlackHoleCanvasHandle,
} from "@/components/black-hole";
import styles from "@/styles/home/HomeSectionMirageWork.module.css";

gsap.registerPlugin(ScrollTrigger);

const NUM = PORTFOLIO_PROJECTS.length;
/** Showcase scrub window inside pin progress (after Hero dissolve + UTOPIANVERSE reveal + expand) */
const CARD_START = 0.56;
const CARD_END = 0.92;

function progressForCard(index: number): number {
  const i = Math.max(0, Math.min(NUM - 1, index));
  if (NUM <= 1) return CARD_START;
  return CARD_START + (i / (NUM - 1)) * (CARD_END - CARD_START);
}

function clamp01(t: number): number {
  return Math.max(0, Math.min(1, t));
}

function smootherstep(edge0: number, edge1: number, x: number): number {
  const t = clamp01((x - edge0) / Math.max(1e-6, edge1 - edge0));
  return t * t * t * (t * (t * 6 - 15) + 10);
}

/**
 * Unified Homepage Stage:
 * Hero ("BE UNREAL UNREASONABLE" + Black Hole)
 * → Smooth Cosmic Dissolve to Star Background Only
 * → UTOPIANVERSE Celestial Reveal
 * → 3D Carousel Rotunda to Eye-Level Transition
 * → Continuous Project River
 *
 * All orchestrated within a single seamless GSAP pin — zero black void, zero unpin seam.
 */
export function HomeSectionMirageWork() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const pinRef = useRef<HTMLDivElement | null>(null);
  const heroHoleRef = useRef<HTMLDivElement | null>(null);
  const heroCopyRef = useRef<HTMLDivElement | null>(null);
  const blackHoleRef = useRef<BlackHoleCanvasHandle | null>(null);
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

    const updateDOM = (progress: number) => {
      const p = clamp01(progress);
      mirageRef.current?.setRiverProgress(p);

      // 1. Hero Typography: smooth glide-up & fade out (p: 0.04 -> 0.18)
      const copyFade = 1 - smootherstep(0.04, 0.18, p);
      const copyY = smootherstep(0.04, 0.18, p) * -35;
      if (heroCopyRef.current) {
        heroCopyRef.current.style.opacity = String(copyFade);
        heroCopyRef.current.style.transform = `translate3d(0, ${copyY.toFixed(1)}px, 0)`;
        heroCopyRef.current.style.visibility =
          copyFade > 0.005 ? "visible" : "hidden";
        heroCopyRef.current.style.pointerEvents =
          copyFade > 0.2 ? "auto" : "none";
      }

      // 2. Black Hole: gentle forward camera drift & cosmic dissolve into starfield (p: 0.06 -> 0.22)
      // Never plunges into singularity black void; dissolves into underlying AmbientField stars.
      const holeFade = 1 - smootherstep(0.06, 0.22, p);
      if (heroHoleRef.current) {
        heroHoleRef.current.style.opacity = String(holeFade);
        heroHoleRef.current.style.visibility =
          holeFade > 0.005 ? "visible" : "hidden";
        heroHoleRef.current.style.pointerEvents =
          holeFade > 0.2 ? "auto" : "none";
      }
      const diveTarget = smootherstep(0.0, 0.22, p) * 0.25;
      blackHoleRef.current?.setDiveProgress(diveTarget);
      blackHoleRef.current?.setActive?.(holeFade > 0.005);
    };

    const ctx = gsap.context(() => {
      const main = ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: "+=680%",
        pin,
        pinSpacing: true,
        scrub: SITE_SCRUB,
        anticipatePin: 1,
        fastScrollEnd: true,
        invalidateOnRefresh: true,
        onEnter: () => {
          updateDOM(0);
        },
        onEnterBack: () => {
          mirageRef.current?.setApproachProgress(1);
        },
        onLeave: () => {
          updateDOM(1);
        },
        onLeaveBack: () => {
          updateDOM(0);
          mirageRef.current?.setApproachProgress(0);
        },
        onUpdate: (self) => {
          updateDOM(self.progress);
        },
        onRefresh: (self) => {
          updateDOM(self.progress);
        },
      });
      stRef.current = main;
    }, section);

    requestAnimationFrame(() => {
      ScrollTrigger.refresh();
      updateDOM(0);
    });

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
      id="hero"
      data-section="work"
      aria-label="13 Utopia — Brand, technology and architecture narrative"
      className={styles.section}
    >
      <div ref={pinRef} className={styles.pin}>
        {/* Hero 3D Black Hole — smoothly dissolves into pure starfield */}
        <div ref={heroHoleRef} className={styles.heroHoleContainer}>
          <BlackHoleCanvas ref={blackHoleRef} />
        </div>

        {/* Hero Monument Typography */}
        <div ref={heroCopyRef} className={styles.heroCopyContainer}>
          <div className={styles.heroLockup}>
            <div className={styles.monumentLockup}>
              <div className={styles.beCommonBlock}>
                <span className={styles.beWord}>BE</span>
              </div>
              <div className={styles.stackedBlock}>
                <span className={styles.wordTop}>UNREAL</span>
                <span className={styles.wordBottom}>UNREASONABLE</span>
              </div>
            </div>

            <p className={styles.heroLeadText}>
              13 Utopia is a creative technology and growth company building brands,
              products, and systems for ambitious organisations.
            </p>
          </div>
        </div>

        {/* 3D Mirage UTOPIANVERSE & Project River */}
        <MiragePortfolioExperience ref={mirageRef} embedded />

        {/* Bottom atmospheric scrim */}
        <div className={styles.scrimBottom} aria-hidden="true" />
      </div>
    </section>
  );
}
