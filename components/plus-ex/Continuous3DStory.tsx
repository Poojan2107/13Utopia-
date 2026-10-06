"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "@/styles/plus-ex/Continuous3DStory.module.css";
import { Plus3DCanvas } from "./Plus3DCanvas";

import { UtopiaPaintReveal } from "./UtopiaPaintReveal";

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
    subTitle: "WE DEVELOP BRAND STRATEGY, CUSTOM IDENTITY SYSTEMS, AND CINEMATIC MOTION FROM FIRST PRINCIPLES. EVERY ENGAGEMENT IS ORIGINAL.",
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
    subTitle: "WE ENGINEER WEBSITES, MOBILE APPS, SAAS PLATFORMS, AI SYSTEMS, AND CLOUD INFRASTRUCTURE. BUILT TO PERFORM UNDER REAL CONDITIONS.",
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
    subTitle: "SEO ARCHITECTURE, PERFORMANCE MARKETING, AND CONTENT SYSTEMS DESIGNED TO DRIVE MEASURABLE PIPELINE AND HOLD CATEGORY POSITION.",
    pill: "13 UTOPIA // GROW",
    align: "right",
  },
];

export function Continuous3DStory() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const stageRef = useRef<HTMLDivElement | null>(null);

  const [entryProgress, setEntryProgress] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    const stage = stageRef.current;
    if (!section || !stage) return;

    const ctx = gsap.context(() => {
      // Continuous pinned 3D narrative journey with seamless fluid unpinning
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: () => `+=${Math.round(Math.max(2600, Math.min(3800, window.innerHeight * 3.4)))}`,
        pin: stage,
        pinSpacing: true,
        scrub: 0.4,
        anticipatePin: 1,
        fastScrollEnd: true,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const p = Math.max(0, Math.min(1, self.progress));
          setScrollProgress(p);
        },
      });
    }, section);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={styles.storySection}
      id="narrative"
      aria-label="13 Utopia 3D Architectural Narrative"
    >
      {/* Pinned 3D Viewport Stage */}
      <div ref={stageRef} className={styles.stagePin}>
        {/* 3D 13 Utopia Architectural Emblem Canvas */}
        <div className={styles.canvasContainer}>
          <Plus3DCanvas
            progress={scrollProgress}
            entryProgress={1}
          />
        </div>

        {/* Dynamic Narrative Overlays */}
        <div className={styles.actsWrapper}>
          {/* Act Hero: Tenbin-Style Centerpiece Monumental Typography & Tagline */}
          <div
            className={`${styles.act} ${styles.heroAct} ${
              scrollProgress < 0.08 ? styles.actVisible : styles.actHidden
            }`}
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
                13 Utopia is a creative technology and growth company building brands, products, and systems for ambitious organisations.
              </p>
            </div>
          </div>

          {/* Act 0: Plus-X 1:1 Narrative Statement (1 Line Lead + 3 Lines Sub = 13) */}
          <div
            className={`${styles.act} ${
              scrollProgress >= 0.09 && scrollProgress < 0.22 ? styles.actVisible : styles.actHidden
            }`}
          >
            <div className={styles.manifestoContent}>
              <h2 className={styles.manifestoHeading}>
                <span className={styles.leadLine}>
                  13 UTOPIA BRINGS CREATIVE,
                </span>
                <span className={styles.subLines}>
                  <span className={styles.subLineItem}>TECHNOLOGY AND GROWTH</span>
                  <span className={styles.subLineItem}>TOGETHER UNDER ONE ROOF.</span>
                  <span className={styles.subLineItem}>SO NOTHING GETS LOST IN TRANSLATION.</span>
                </span>
              </h2>
            </div>
          </div>

          {/* Worlds Sequence: CREATE (Right), BUILD (Left), GROW (Right) */}
          {WORLDS.map((world, idx) => {
            const ranges = [
              { start: 0.25, end: 0.45 },
              { start: 0.50, end: 0.67 },
              { start: 0.72, end: 0.88 },
            ];
            const { start: startP, end: endP } = ranges[idx];
            const isWorldActive = scrollProgress >= startP && scrollProgress <= endP;
            const worldP = Math.max(0, Math.min(1, (scrollProgress - startP) / (endP - startP)));
            
            // Sub-phases: 0.0 -> 0.65 (Word Roll with high dwell time), 0.65 -> 1.0 (Editorial Statement)
            const isReel = worldP < 0.65;
            const reelP = Math.min(1, worldP / 0.65);
            
            const alignClass = world.align === "left" ? styles.alignLeft : styles.alignRight;

            return (
              <div
                key={world.id}
                className={`${styles.act} ${alignClass} ${
                  isWorldActive ? styles.actVisible : styles.actHidden
                }`}
              >
                <div className={styles.worldContainer}>
                  {/* Mode 1: Plus-X Kinetic 3D Curved Drum Roll */}
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
                          
                          // Smooth plateau easing for high dwell time on each keyword
                          const floorIdx = Math.floor(rawFloat);
                          const frac = rawFloat - floorIdx;
                          // Smooth S-curve transition between words (lingers at integer points)
                          const smoothFrac = frac * frac * (3 - 2 * frac);
                          const continuousFloat = floorIdx + smoothFrac;
                          
                          const delta = wIdx - continuousFloat;
                          
                          // 3D Cylindrical Drum Physics
                          const R = 320; // Refined cylinder radius in px
                          const angleStep = 0.38; // Radian curvature per item
                          const theta = delta * angleStep;
                          
                          const translateY = R * Math.sin(theta);
                          const translateZ = R * (Math.cos(theta) - 1);
                          const rotateX = -(theta * (180 / Math.PI));
                          
                          const absDelta = Math.abs(delta);
                          const isCenter = absDelta < 0.42;
                          
                          // Smooth optical cosine opacity curve
                          const opacity = Math.max(
                            0.06,
                            Math.pow(Math.cos(Math.min(Math.PI / 2.05, absDelta * 0.42)), 2.2)
                          );
                          
                          const scale = isCenter ? 1.04 : Math.max(0.88, 1 - absDelta * 0.045);

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

                  {/* Mode 2: Plus-X Editorial Statement */}
                  <div
                    className={`${styles.statementView} ${
                      !isReel ? styles.modeVisible : styles.modeHidden
                    }`}
                  >
                    <h2 className={styles.statementLead}>
                      {world.leadTitle}
                    </h2>
                    <div className={styles.statementPill}>
                      <span>{world.pill}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Act Finale: Utopia Brush Calligraphy Painting itself onto the 3D 13 Emblem */}
          {(() => {
            const isFinaleActive = scrollProgress >= 0.915;
            const finaleP = Math.max(0, Math.min(1, (scrollProgress - 0.92) / 0.075));

            return (
              <div
                className={`${styles.act} ${styles.finaleAct} ${
                  isFinaleActive ? styles.actVisible : styles.actHidden
                }`}
              >
                <div className={styles.finaleContent}>
                  {/* Pure 13 UTOPIA Mastermark Canvas */}
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
