"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { setHeroHoleCovering } from "@/components/motion/heroHoleCover";
import { revertGsapContext } from "@/components/motion/scrollFeel";
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
 * → Scroll-scrubbed dive into the event horizon
 * → UTOPIANVERSE Celestial Reveal
 * → 3D Carousel Rotunda to Eye-Level Transition
 * → Continuous Project River
 *
 * All orchestrated within a single seamless GSAP pin — zero black void, zero unpin seam.
 */
export function HomeSectionMirageWork() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const pinRef = useRef<HTMLDivElement | null>(null);
  const stageRef = useRef<HTMLDivElement | null>(null);
  const heroHoleRef = useRef<HTMLDivElement | null>(null);
  const holeZoomRef = useRef<HTMLDivElement | null>(null);
  const portalRef = useRef<HTMLDivElement | null>(null);
  const horizonRef = useRef<HTMLDivElement | null>(null);
  const heroCopyRef = useRef<HTMLDivElement | null>(null);
  const streakRef = useRef<HTMLDivElement | null>(null);
  const glowRef = useRef<HTMLDivElement | null>(null);
  const flashRef = useRef<HTMLDivElement | null>(null);
  const blackHoleRef = useRef<BlackHoleCanvasHandle | null>(null);
  const mirageRef = useRef<MiragePortfolioHandle | null>(null);
  const stRef = useRef<ScrollTrigger | null>(null);
  const coverArmed = useRef(false);
  const steppingRef = useRef(false);
  if (!coverArmed.current && typeof window !== "undefined") {
    coverArmed.current = true;
    setHeroHoleCovering(true);
  }
  const unlockTimerRef = useRef<number | null>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const pin = pinRef.current;
    const stage = stageRef.current;
    if (!section || !pin || !stage) return;

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

    let lastCopy = -1;
    let lastHole = -1;
    let lastRiver = -1;
    let holeActive = true;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    blackHoleRef.current?.setDiveProgress(0);

    const updateDOM = (progress: number) => {
      const p = clamp01(progress);
      // Wake the next scene once the horizon starts to open.
      if (p >= 0.1 || lastRiver >= 0.1) {
        mirageRef.current?.setRiverProgress(p);
      }
      lastRiver = p;

      const copyFade = reducedMotion
        ? 1 - smootherstep(0.02, 0.12, p)
        : 1 - smootherstep(0.04, 0.2, p);
      if (heroCopyRef.current && Math.abs(copyFade - lastCopy) > 0.012) {
        lastCopy = copyFade;
        const copy = heroCopyRef.current;
        copy.style.opacity = copyFade.toFixed(3);
        const shown = copyFade > 0.03;
        if (copy.style.visibility !== (shown ? "visible" : "hidden")) {
          copy.style.visibility = shown ? "visible" : "hidden";
        }
        copy.style.pointerEvents = copyFade > 0.2 ? "auto" : "none";
      }

      // The event horizon is the mask. Its radius grows from the dark
      // center until it clears the farthest corner of the viewport, and
      // the same growth scales the ring so the two stay one circle.
      const wide = window.matchMedia("(min-width: 768px)").matches;
      const horizonT = reducedMotion
        ? smootherstep(0.02, 0.16, p)
        : smootherstep(0.04, 0.42, p);
      const viewW = window.innerWidth;
      const viewH = window.innerHeight;
      const originX = wide ? 0.72 : 0.5;
      const originY = wide ? 0.46 : 0.5;
      const restR = Math.min(viewW, viewH) * (wide ? 0.2 : 0.26);
      const cx0 = originX * viewW;
      const cy0 = originY * viewH;
      const farthest =
        Math.hypot(Math.max(cx0, viewW - cx0), Math.max(cy0, viewH - cy0)) +
        96;
      const radius = restR + horizonT * Math.max(0, farthest - restR);
      const scale = reducedMotion ? 1 : radius / Math.max(1, restR);
      const maxShift = Math.max(
        0,
        originX + (0.84 - originX) * scale - 1 - 0.08,
      );
      const shiftAmt = wide ? Math.min((0.72 - 0.5) * horizonT, maxShift) : 0;
      const shiftX = -shiftAmt * 100;
      const shiftY = wide ? shiftAmt * 0.12 * 100 : 0;
      const zoom =
        scale < 1.001 && shiftAmt < 0.001
          ? "none"
          : `translate(${shiftX.toFixed(2)}%, ${shiftY.toFixed(2)}%) scale(${scale.toFixed(3)})`;
      if (holeZoomRef.current) holeZoomRef.current.style.transform = zoom;
      if (portalRef.current) portalRef.current.style.transform = zoom;
      if (horizonRef.current) {
        const cx = cx0 + (shiftX / 100) * viewW;
        const cy = cy0 + (shiftY / 100) * viewH;
        horizonRef.current.style.clipPath = `circle(${radius.toFixed(1)}px at ${cx.toFixed(1)}px ${cy.toFixed(1)}px)`;
        horizonRef.current.style.pointerEvents = p > 0.5 ? "auto" : "none";
      }

      const holeFade = reducedMotion
        ? 1 - smootherstep(0.08, 0.2, p)
        : 1 - smootherstep(0.4, 0.52, p);
      if (Math.abs(holeFade - lastHole) > 0.004) {
        lastHole = holeFade;
        if (heroHoleRef.current) {
          heroHoleRef.current.style.opacity = String(holeFade);
          heroHoleRef.current.style.visibility =
            holeFade > 0.02 ? "visible" : "hidden";
          heroHoleRef.current.style.pointerEvents =
            holeFade > 0.2 ? "auto" : "none";
        }
        setHeroHoleCovering(holeFade > 0.2);
        const active = holeFade > 0.04;
        if (active !== holeActive) {
          holeActive = active;
          blackHoleRef.current?.setActive?.(active);
        }
      }

      if (!reducedMotion) {
        const streak =
          smootherstep(0.08, 0.22, p) * (1 - smootherstep(0.28, 0.4, p));
        const streakScale = 0.62 + smootherstep(0.06, 0.36, p) * 1.65;
        if (streakRef.current) {
          streakRef.current.style.opacity = String(streak * 0.62);
          streakRef.current.style.transform = `scale(${streakScale.toFixed(3)})`;
        }
        const glow =
          smootherstep(0.06, 0.24, p) * (1 - smootherstep(0.26, 0.4, p));
        if (glowRef.current) glowRef.current.style.opacity = String(glow);
        const flash =
          smootherstep(0.18, 0.28, p) * (1 - smootherstep(0.3, 0.44, p));
        if (flashRef.current) {
          flashRef.current.style.opacity = String(flash * 0.82);
        }
      }

      const leave = smootherstep(0.84, 1, p);
      if (leave > 0 || (stage.style.opacity !== "" && stage.style.opacity !== "1")) {
        stage.style.opacity = String(1 - leave);
        stage.style.transform =
          leave < 0.001
            ? "none"
            : `translate3d(0, ${(-leave * 28).toFixed(1)}px, 0)`;
      }
    };

    const proxy = { p: 0 };
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: window.matchMedia("(hover: none) and (pointer: coarse)").matches
            ? "+=260%"
            : "+=340%",
          pin,
          pinSpacing: true,
          // Catch the scroll instead of locking 1:1, so the pass through
          // the horizon eases with the hand.
          scrub: reducedMotion ? true : 1.2,
          anticipatePin: 0,
          fastScrollEnd: false,
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
          onRefresh: (self) => {
            updateDOM(self.progress);
          },
        },
      });
      tl.to(proxy, {
        p: 1,
        duration: 1,
        ease: "none",
        onUpdate: () => {
          updateDOM(proxy.p);
        },
      });
      stRef.current = tl.scrollTrigger ?? null;
    }, section);

    const refreshId = requestAnimationFrame(() => {
      ScrollTrigger.refresh();
      updateDOM(0);
    });

    return () => {
      cancelAnimationFrame(refreshId);
      window.removeEventListener("mirage-card-step", onStep);
      if (unlockTimerRef.current != null) {
        window.clearTimeout(unlockTimerRef.current);
      }
      stRef.current = null;
      setHeroHoleCovering(false);
      revertGsapContext(ctx);
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
      <div ref={stageRef} className={styles.stage}>
        {/* Hero 3D Black Hole — camera dives, then the portal swallows it */}
        <div ref={heroHoleRef} className={styles.heroHoleContainer}>
          <div ref={holeZoomRef} className={styles.holeZoom}>
            <BlackHoleCanvas ref={blackHoleRef} />
          </div>
        </div>

        <div ref={portalRef} className={styles.portal} aria-hidden="true">
          <div ref={streakRef} className={styles.streaks} />
          <div ref={glowRef} className={styles.ringGlow} />
          <div ref={flashRef} className={styles.flash} />
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

        {/* Event horizon. The circle grows past the viewport and uncovers the next scene. */}
        <div ref={horizonRef} className={styles.horizonReveal}>
          <MiragePortfolioExperience ref={mirageRef} embedded />
        </div>

        {/* Bottom atmospheric scrim */}
        <div className={styles.scrimBottom} aria-hidden="true" />
      </div>
      </div>
    </section>
  );
}
