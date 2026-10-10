"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "@/styles/plus-ex/Continuous3DStory.module.css";
import { Plus3DCanvas } from "./Plus3DCanvas";
import { UtopiaPaintReveal } from "./UtopiaPaintReveal";
import {
  BlackHoleCanvas,
  type BlackHoleCanvasHandle,
} from "@/components/black-hole";
import { SITE_SCRUB } from "@/components/motion/scrollFeel";
import { DIVE_SCROLL_END } from "@/optimized-black-hole/dive";

gsap.registerPlugin(ScrollTrigger);

interface WorldKeyword {
  stance: string;
  deliverable?: string;
}

interface WorldConfig {
  id: string;
  header: string;
  index: string;
  tag: string;
  keywords: WorldKeyword[];
  leadTitle: string;
  subTitle: string;
  pill: string;
  align: "left" | "right";
}

/** Plus3DCanvas CREATE transition starts here in the original timeline. */
const LEGACY_POST_MANIFESTO = 0.24;

/** Original act windows (pre-dive) for CREATE / BUILD / GROW / finale. */
const LEGACY_WORLD_RANGES = [
  { start: 0.25, end: 0.45 },
  { start: 0.5, end: 0.67 },
  { start: 0.72, end: 0.88 },
] as const;
const LEGACY_FINALE_START = 0.915;

/** Pack a legacy progress value into the post-dive scroll span. */
function legacyToDiveScroll(legacy: number, manifestoEnd: number): number {
  return (
    manifestoEnd +
    ((legacy - LEGACY_POST_MANIFESTO) / (1 - LEGACY_POST_MANIFESTO)) *
      (1 - manifestoEnd)
  );
}

/**
 * Dive owns early scroll. Manifesto keeps centered "13".
 * After that, play the original Plus3DCanvas timeline 1:1 (CREATE→BUILD→GROW→finale).
 */
function mapDiveScrollToEmblemProgress(
  p: number,
  manifestoStart: number,
  manifestoEnd: number
): number {
  if (p < manifestoStart) return 0.12;

  if (p < manifestoEnd) {
    const t = (p - manifestoStart) / Math.max(1e-6, manifestoEnd - manifestoStart);
    return 0.08 + t * 0.15;
  }

  return (
    LEGACY_POST_MANIFESTO +
    ((p - manifestoEnd) / Math.max(1e-6, 1 - manifestoEnd)) *
      (1 - LEGACY_POST_MANIFESTO)
  );
}

const WORLDS: WorldConfig[] = [
  {
    id: "create",
    header: "CREATE",
    index: "01",
    tag: "01 // CREATE",
    keywords: [
      { stance: "BE ORIGINAL", deliverable: "BRAND STRATEGY & IDENTITY" },
      { stance: "BE UNREAL", deliverable: "ART & CREATIVE DIRECTION" },
      { stance: "BE ICONIC", deliverable: "CGI, 3D & MOTION GRAPHICS" },
      { stance: "BE DISTINCT", deliverable: "UI/UX & INTERACTION DESIGN" },
      { stance: "BE TIMELESS", deliverable: "BRAND EXPERIENCE & SPATIAL" },
      { stance: "BE UNCOMPROMISING", deliverable: "VISUAL IDENTITY SYSTEMS" },
    ],
    leadTitle: "BE THE BRAND THAT OWNS THE CATEGORY.",
    subTitle:
      "WE DEVELOP BRAND STRATEGY, CUSTOM IDENTITY SYSTEMS, AND CINEMATIC MOTION FROM FIRST PRINCIPLES. EVERY ENGAGEMENT IS ORIGINAL.",
    pill: "13 UTOPIA // CREATE",
    align: "right",
  },
  {
    id: "build",
    header: "BUILD",
    index: "02",
    tag: "02 // 13 UTOPIA",
    keywords: [
      { stance: "DIGITAL PRODUCTS", deliverable: "WEB & MOBILE APPLICATIONS" },
      { stance: "SAAS PLATFORMS", deliverable: "FULL-STACK PRODUCT ENGINEERING" },
      { stance: "AI AGENTS", deliverable: "WORKFLOW & PROCESS AUTOMATION" },
      { stance: "CLOUD INFRASTRUCTURE", deliverable: "DEVOPS, CI/CD & RELIABILITY" },
      { stance: "CUSTOM SOFTWARE", deliverable: "MODERN API & BACKEND SYSTEMS" },
      { stance: "E-COMMERCE & MVPS", deliverable: "HIGH-CONVERTING ARCHITECTURE" },
    ],
    leadTitle: "PRODUCTS ENGINEERED FOR SCALE AND PERFORMANCE.",
    subTitle:
      "WE ENGINEER WEBSITES, MOBILE APPS, SAAS PLATFORMS, AI SYSTEMS, AND CLOUD INFRASTRUCTURE. BUILT TO PERFORM UNDER REAL CONDITIONS.",
    pill: "13 UTOPIA // BUILD",
    align: "left",
  },
  {
    id: "grow",
    header: "GROW",
    index: "03",
    tag: "03 // GROW",
    keywords: [
      { stance: "BE EXPONENTIAL", deliverable: "SEARCH ENGINE OPTIMIZATION (SEO)" },
      { stance: "BE UNREASONABLE", deliverable: "PERFORMANCE MARKETING & ADS" },
      { stance: "BE AUTHORITATIVE", deliverable: "CONTENT STRATEGY & POSITIONING" },
      { stance: "BE MEASURABLE", deliverable: "LEAD GENERATION & PIPELINE" },
      { stance: "BE DOMINANT", deliverable: "CONVERSION OPTIMIZATION (CRO)" },
      { stance: "BE PROVEN", deliverable: "MARKET CATEGORY LEADERSHIP" },
    ],
    leadTitle: "GROWTH SYSTEMS THAT COMPOUND INTO MARKET AUTHORITY.",
    subTitle:
      "SEO ARCHITECTURE, PERFORMANCE MARKETING, AND CONTENT SYSTEMS DESIGNED TO DRIVE MEASURABLE PIPELINE AND HOLD CATEGORY POSITION.",
    pill: "13 UTOPIA // GROW",
    align: "right",
  },
];

export interface Continuous3DStoryProps {
  /** @deprecated Prefer blackHoleDive — kept for review pages that pass a custom node */
  heroBackground?: React.ReactNode;
  /** Scroll-driven fall into the black hole, then emerge into the story */
  blackHoleDive?: boolean;
}

export function Continuous3DStory({
  heroBackground,
  blackHoleDive = false,
}: Continuous3DStoryProps = {}) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const stageRef = useRef<HTMLDivElement | null>(null);
  const blackHoleRef = useRef<BlackHoleCanvasHandle | null>(null);
  const holeLayerRef = useRef<HTMLDivElement | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const heroActRef = useRef<HTMLDivElement | null>(null);
  const emblemLayerRef = useRef<HTMLDivElement | null>(null);
  const scrollProgressRef = useRef(0);
  const lastUiProgress = useRef(-1);

  const [scrollProgress, setScrollProgress] = useState(0);

  const useDive = Boolean(blackHoleDive);

  // After dive emerges, emblem + later acts take over
  const postDive = useDive
    ? scrollProgress >= DIVE_SCROLL_END * 0.70
    : scrollProgress >= 0.08;
  const diveExit = useDive
    ? Math.max(0, Math.min(1, (scrollProgress - DIVE_SCROLL_END) / 0.06))
    : 0;
  const diveActive = useDive && scrollProgress < DIVE_SCROLL_END + 0.06;
  const holeOpacity = useDive
    ? diveActive
      ? 1 - diveExit
      : 0
    : heroBackground
      ? scrollProgress <= 0.08
        ? 1
        : Math.max(0, 1 - (scrollProgress - 0.08) / 0.05)
      : 0;
  const holeVisible = useDive
    ? holeOpacity > 0.005
    : Boolean(heroBackground) && scrollProgress < 0.14;

  useEffect(() => {
    const section = sectionRef.current;
    const stage = stageRef.current;
    if (!section || !stage) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: () =>
          `+=${Math.round(
            Math.max(
              2400,
              Math.min(3400, window.innerHeight * (useDive ? 3.0 : 2.5))
            )
          )}`,
        pin: stage,
        pinSpacing: true,
        // Direct 1:1 tracking with Lenis stream for instant, weightless Awwwards responsiveness
        scrub: true,
        anticipatePin: 1,
        fastScrollEnd: true,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          // self.progress is already scrub-smoothed — drive GPU from this, not raw wheel
          const p = Math.max(0, Math.min(1, self.progress));
          scrollProgressRef.current = p;

          if (useDive) {
            const diveP = Math.max(0, Math.min(1, p / DIVE_SCROLL_END));
            blackHoleRef.current?.setDiveProgress(diveP);

            const exit = Math.max(
              0,
              Math.min(1, (p - DIVE_SCROLL_END) / 0.06)
            );
            const active = p < DIVE_SCROLL_END + 0.06;
            const holeOp = active ? 1 - exit : 0;
            if (holeLayerRef.current) {
              holeLayerRef.current.style.opacity = String(holeOp);
              holeLayerRef.current.style.visibility =
                holeOp > 0.005 ? "visible" : "hidden";
            }

            const emblemOp =
              p >= DIVE_SCROLL_END * 0.70
                ? Math.min(1, (p - DIVE_SCROLL_END * 0.70) / (DIVE_SCROLL_END * 0.30))
                : 0;
            if (emblemLayerRef.current) {
              emblemLayerRef.current.style.opacity = String(emblemOp);
              emblemLayerRef.current.style.visibility =
                emblemOp > 0.005 ? "visible" : "hidden";
              emblemLayerRef.current.style.pointerEvents =
                emblemOp > 0.3 ? "auto" : "none";
            }

            // Ensure swallow veil is completely hidden once past dive
            if (p >= DIVE_SCROLL_END && overlayRef.current) {
              overlayRef.current.style.opacity = "0";
              overlayRef.current.style.visibility = "hidden";
            }
          }

          // Zero React re-render churn during the dive: all dive visuals run via direct DOM refs.
          // React state only updates when transitioning into the text acts.
          const shouldUpdateUi =
            p >= DIVE_SCROLL_END * 0.7 &&
            Math.abs(p - lastUiProgress.current) >= 0.0035;

          if (shouldUpdateUi) {
            lastUiProgress.current = p;
            setScrollProgress(p);
          } else if (
            p < DIVE_SCROLL_END * 0.7 &&
            lastUiProgress.current >= DIVE_SCROLL_END * 0.7
          ) {
            lastUiProgress.current = 0;
            setScrollProgress(0);
          }
        },
      });
    }, section);

    // After pin mounts, refresh once so Lenis + ScrollTrigger share measurements
    const refreshId = window.requestAnimationFrame(() => {
      ScrollTrigger.refresh();
    });

    return () => {
      window.cancelAnimationFrame(refreshId);
      ctx.revert();
    };
  }, [useDive]);

  // Dive owns the open; after manifesto, acts match the original story timeline
  const manifestoStart = useDive ? 0.20 : 0.09;
  const manifestoEnd = useDive ? 0.34 : 0.22;
  const worldRanges = useDive
    ? LEGACY_WORLD_RANGES.map(({ start, end }) => ({
        start: legacyToDiveScroll(start, manifestoEnd),
        end: legacyToDiveScroll(end, manifestoEnd),
      }))
    : LEGACY_WORLD_RANGES.map(({ start, end }) => ({ start, end }));
  const finaleStart = useDive
    ? legacyToDiveScroll(LEGACY_FINALE_START, manifestoEnd)
    : LEGACY_FINALE_START;

  const canvasProgress = useDive
    ? mapDiveScrollToEmblemProgress(scrollProgress, manifestoStart, manifestoEnd)
    : scrollProgress;

  const heroVisible = useDive
    ? scrollProgress < DIVE_SCROLL_END * 0.45
    : scrollProgress < 0.08;

  return (
    <section
      ref={sectionRef}
      className={styles.storySection}
      id="narrative"
      aria-label="13 Utopia 3D Architectural Narrative"
    >
      <div ref={stageRef} className={styles.stagePin}>
        {/* Black hole — dive camera, then hide after swallow */}
        {(useDive || heroBackground) && (
          <div
            ref={holeLayerRef}
            className={styles.heroBackgroundContainer}
            style={{
              opacity: holeOpacity,
              visibility: holeVisible ? "visible" : "hidden",
              transition: useDive ? "none" : "opacity 0.35s ease-out",
              willChange: useDive ? "opacity" : undefined,
            }}
          >
            {useDive ? (
              <BlackHoleCanvas
                ref={blackHoleRef}
                onDiveSample={(sample) => {
                  const p = scrollProgressRef.current;
                  const overlay = p >= DIVE_SCROLL_END ? 0 : (sample?.overlay ?? 0);
                  const copy = sample?.heroCopyOpacity ?? 1;
                  if (overlayRef.current) {
                    overlayRef.current.style.opacity = String(overlay);
                    overlayRef.current.style.visibility =
                      overlay > 0.005 ? "visible" : "hidden";
                  }
                  if (heroActRef.current && useDive) {
                    heroActRef.current.style.opacity = String(copy);
                    heroActRef.current.style.visibility =
                      copy > 0.005 ? "visible" : "hidden";
                    heroActRef.current.style.transform = `translate3d(0, ${-(1 - copy) * 32}px, 0)`;
                  }
                }}
              />
            ) : (
              heroBackground
            )}
          </div>
        )}

        {/* Horizon swallow veil — opacity driven from rAF, not React */}
        {useDive && (
          <div
            ref={overlayRef}
            className={styles.diveSwallowOverlay}
            style={{ opacity: 0, visibility: "hidden" }}
            aria-hidden
          />
        )}

        {/* 3D emblem — emerges after the fall-through */}
        <div
          ref={emblemLayerRef}
          className={styles.canvasContainer}
          style={{
            opacity: postDive
              ? useDive
                ? Math.min(1, (scrollProgress - DIVE_SCROLL_END * 0.70) / (DIVE_SCROLL_END * 0.30))
                : Math.min(1, (scrollProgress - 0.08) / 0.06)
              : 0,
            visibility: postDive ? "visible" : "hidden",
            pointerEvents: postDive ? "auto" : "none",
            transition: useDive ? "none" : "opacity 0.35s ease-out",
            willChange: useDive ? "opacity" : undefined,
          }}
        >
          <Plus3DCanvas progress={canvasProgress} entryProgress={1} />
        </div>

        <div className={styles.actsWrapper}>
          {/* Hero copy — fades as we center on the hole */}
          <div
            ref={heroActRef}
            className={`${styles.act} ${styles.heroAct} ${
              useDive
                ? styles.actVisible
                : heroVisible
                  ? styles.actVisible
                  : styles.actHidden
            }`}
            style={
              useDive
                ? { transition: "none", opacity: 1 }
                : undefined
            }
          >
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

          {/* Manifesto — after emerging from the hole */}
          <div
            className={`${styles.act} ${
              scrollProgress >= manifestoStart && scrollProgress < manifestoEnd
                ? styles.actVisible
                : styles.actHidden
            }`}
          >
            <div className={styles.manifestoContent}>
              <h2 className={styles.manifestoHeading}>
                <span className={styles.leadLine}>13 UTOPIA BRINGS CREATIVE,</span>
                <span className={styles.subLines}>
                  <span className={styles.subLineItem}>TECHNOLOGY AND GROWTH</span>
                  <span className={styles.subLineItem}>TOGETHER UNDER ONE ROOF.</span>
                  <span className={styles.subLineItem}>
                    SO NOTHING GETS LOST IN TRANSLATION.
                  </span>
                </span>
              </h2>
            </div>
          </div>

          {WORLDS.map((world, idx) => {
            const { start: startP, end: endP } = worldRanges[idx];
            const isWorldActive = scrollProgress >= startP && scrollProgress <= endP;
            const worldP = Math.max(
              0,
              Math.min(1, (scrollProgress - startP) / (endP - startP))
            );

            const isReel = worldP < 0.65;
            const reelP = Math.min(1, worldP / 0.65);

            const alignClass =
              world.align === "left" ? styles.alignLeft : styles.alignRight;

            return (
              <div
                key={world.id}
                className={`${styles.act} ${alignClass} ${
                  isWorldActive ? styles.actVisible : styles.actHidden
                }`}
              >
                <div className={styles.worldContainer}>
                  <div
                    className={`${styles.reelView} ${
                      isReel ? styles.modeVisible : styles.modeHidden
                    }`}
                  >
                    <div className={styles.reelHeader}>
                      <span className={styles.headerTag}>{world.index} // ACT</span>
                      <h3 className={styles.headerTitle}>{world.header}</h3>
                    </div>

                    <div className={styles.reelViewport}>
                      <div className={styles.drumContainer}>
                        {world.keywords.map((word, wIdx) => {
                          const numItems = world.keywords.length;
                          const rawFloat = reelP * (numItems - 1);

                          const floorIdx = Math.floor(rawFloat);
                          const frac = rawFloat - floorIdx;
                          const smoothFrac = frac * frac * (3 - 2 * frac);
                          const continuousFloat = floorIdx + smoothFrac;

                          const delta = wIdx - continuousFloat;

                          const R = 320;
                          const angleStep = 0.38;
                          const theta = delta * angleStep;

                          const translateY = R * Math.sin(theta);
                          const translateZ = R * (Math.cos(theta) - 1);
                          const rotateX = -(theta * (180 / Math.PI));

                          const absDelta = Math.abs(delta);
                          const isCenter = absDelta < 0.42;

                          const opacity = Math.max(
                            0.06,
                            Math.pow(
                              Math.cos(Math.min(Math.PI / 2.05, absDelta * 0.42)),
                              2.2
                            )
                          );

                          const scale = isCenter
                            ? 1.04
                            : Math.max(0.88, 1 - absDelta * 0.045);

                          return (
                            <div
                              key={wIdx}
                              className={`${styles.drumItem} ${
                                isCenter ? styles.drumItemActive : styles.drumItemDimmed
                              }`}
                              style={{
                                transform: `translate3d(0, ${translateY.toFixed(1)}px, ${translateZ.toFixed(1)}px) rotateX(${rotateX.toFixed(1)}deg) scale(${scale.toFixed(2)})`,
                                opacity: opacity.toFixed(2),
                              }}
                            >
                              <div className={styles.drumItemContent}>
                                <span className={styles.drumStance}>{word.stance}</span>
                                {word.deliverable && (
                                  <span className={styles.drumDeliverable}>
                                    {word.deliverable}
                                  </span>
                                )}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  <div
                    className={`${styles.statementView} ${
                      !isReel ? styles.modeVisible : styles.modeHidden
                    }`}
                  >
                    <h2 className={styles.statementLead}>{world.leadTitle}</h2>
                    <div className={styles.statementPill}>
                      <span>{world.pill}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          {(() => {
            const isFinaleActive = scrollProgress >= finaleStart;
            const finaleP = Math.max(
              0,
              Math.min(1, (scrollProgress - finaleStart) / 0.06)
            );

            return (
              <div
                className={`${styles.act} ${styles.finaleAct} ${
                  isFinaleActive ? styles.actVisible : styles.actHidden
                }`}
              >
                <div className={styles.finaleContent}>
                  <UtopiaPaintReveal progress={finaleP} />
                </div>
              </div>
            );
          })()}
        </div>
      </div>
    </section>
  );
}
