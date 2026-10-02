"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "@/styles/plus-ex/Continuous3DStory.module.css";
import Link from "next/link";
import { Plus3DCanvas } from "./Plus3DCanvas";

gsap.registerPlugin(ScrollTrigger);

const WORLDS = [
  {
    id: "create",
    header: "CREATE",
    index: "01",
    tag: "01 // CREATE — BRAND & SPATIAL ALCHEMY",
    keywords: [
      "EXPERIENCE",
      "CURIOSITY",
      "VISUAL ALCHEMY",
      "BRAND IDENTITY",
      "SPATIAL WORLDS",
      "CREATIVE DIRECTION",
      "CGI & MOTION",
    ],
    leadTitle: "WE ALWAYS FOCUS ON DESIGNING EVERY MOMENT OF CONTACT, DIGITAL OR PHYSICAL.",
    subTitle: "AS AN OPPORTUNITY TO EXPRESS THE BRAND'S ESSENCE IN A WAY THAT FEELS ANOMALOUS, MONUMENTAL AND CONSISTENT.",
    pill: "13 UTOPIA // CREATE",
    align: "right",
  },
  {
    id: "build",
    header: "BUILD",
    index: "02",
    tag: "02 // BUILD — PRODUCTS & AI ENGINEERING",
    keywords: [
      "ENGINEERING",
      "GPU SHADERS",
      "WEBGL ARCHITECTURE",
      "ZERO-LATENCY APPS",
      "AI AGENTS",
      "CLOUD SYSTEMS",
      "PRODUCT ARCHITECTURE",
    ],
    leadTitle: "ENGINEERED WITH ZERO COMPROMISE. SUB-MILLISECOND LATENCY ACROSS EVERY INTERACTION.",
    subTitle: "FULL-STACK COMPUTATIONAL ARCHITECTURE POWERED BY REAL-TIME SHADERS, REACT, AND SCALABLE CLOUD INFRASTRUCTURE.",
    pill: "13 UTOPIA // BUILD",
    align: "left",
  },
  {
    id: "grow",
    header: "GROW",
    index: "03",
    tag: "03 // GROW — MOMENTUM & MARKET DOMINANCE",
    keywords: [
      "DOMINANCE",
      "CATEGORY DESIGN",
      "SEO ARCHITECTURE",
      "CONVERSION GRAVITY",
      "GROWTH ENGINES",
      "VENTURE SCALE",
      "MARKET LEADERSHIP",
    ],
    leadTitle: "TURNING PASSIVE VISITORS INTO ENDURING BRAND EVANGELISTS AND HIGH-VALUE PIPELINE.",
    subTitle: "WE COMBINE SEARCH DOMINANCE, ALGORITHMIC PRECISION, AND GROWTH STRATEGY TO COMMAND CATEGORY LEADERSHIP.",
    pill: "13 UTOPIA // GROW",
    align: "right",
  },
];

export function Continuous3DStory() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const stageRef = useRef<HTMLDivElement | null>(null);

  const [entryProgress, setEntryProgress] = useState(1);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    const stage = stageRef.current;
    if (!section || !stage) return;

    const ctx = gsap.context(() => {
      // 1. Smooth entry slide from behind the video section
      ScrollTrigger.create({
        trigger: section,
        start: "top bottom",
        end: "top top",
        scrub: true,
        onUpdate: (self) => {
          setEntryProgress(self.progress);
        },
      });

      // 2. Continuous pinned 3D narrative rotation with motion-crafted momentum
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: "+=8800",
        pin: stage,
        pinSpacing: true,
        scrub: 1.4,
        anticipatePin: 1,
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
        {/* Background Gradients & Architectural Grid */}
        <div className={styles.ambientGlow} />
        <div className={styles.architecturalGrid} />

        {/* 3D 13 Utopia Architectural Emblem Canvas */}
        <div className={styles.canvasContainer}>
          <Plus3DCanvas
            progress={scrollProgress}
            entryProgress={entryProgress}
          />
        </div>

        {/* Dynamic Narrative Overlays */}
        <div className={styles.actsWrapper}>
          {/* Act 0: Plus-X 1:1 Narrative Statement (1 Line Lead + 3 Lines Sub = 13) */}
          <div
            className={`${styles.act} ${scrollProgress < 0.15 ? styles.actVisible : styles.actHidden}`}
          >
            <div className={styles.manifestoContent}>
              <h2 className={styles.manifestoHeading}>
                <span className={styles.leadLine}>
                  13 UTOPIA® PIONEERED THE INTEGRATION
                </span>
                <span className={styles.subLines}>
                  OF BRAND EXPERIENCE. WE HAVE BEEN INTRODUCING<br />
                  A DESIGN SOLUTION, UNIFIES FRAGMENTED BRAND<br />
                  ELEMENTS ACROSS VARIOUS TOUCH-POINTS.
                </span>
              </h2>
              <div className={styles.fromBadge}>
                <span>FROM 2026</span>
              </div>
            </div>
          </div>

          {/* Worlds Sequence: CREATE (Right), BUILD (Left), GROW (Right) */}
          {WORLDS.map((world, idx) => {
            // Synchronized timing matching 3D kinematics:
            // Act 1 CREATE: [0.22, 0.44]
            // Act 2 BUILD: [0.51, 0.73]
            // Act 3 GROW: [0.80, 0.94]
            const ranges = [
              { start: 0.22, end: 0.44 },
              { start: 0.51, end: 0.73 },
              { start: 0.80, end: 0.94 },
            ];
            const { start: startP, end: endP } = ranges[idx];
            const isWorldActive = scrollProgress >= startP && scrollProgress < endP;
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
                          const continuousFloat = reelP * (world.keywords.length - 1);
                          const delta = wIdx - continuousFloat;
                          
                          // True 3D Cylindrical Drum physics
                          const R = 240; // Cylinder radius in px
                          const angleStep = 0.32; // Radian curvature per item (~18.3 deg)
                          const theta = delta * angleStep;
                          
                          const translateY = R * Math.sin(theta);
                          const translateZ = R * (Math.cos(theta) - 1);
                          const rotateX = -(theta * (180 / Math.PI));
                          
                          const absDelta = Math.abs(delta);
                          const isCenter = absDelta < 0.40;
                          
                          // Smooth cosine opacity curve
                          const opacity = Math.max(
                            0.10,
                            Math.pow(Math.cos(Math.min(Math.PI / 2.05, absDelta * 0.44)), 2.0)
                          );
                          
                          const scale = isCenter ? 1.03 : Math.max(0.93, 1 - absDelta * 0.035);

                          return (
                            <div
                              key={word}
                              className={`${styles.drumItem} ${
                                isCenter ? styles.drumItemActive : styles.drumItemDimmed
                              }`}
                              style={{
                                transform: `translate3d(0, ${translateY.toFixed(2)}px, ${translateZ.toFixed(2)}px) rotateX(${rotateX.toFixed(2)}deg) scale(${scale.toFixed(3)})`,
                                opacity: opacity.toFixed(3),
                              }}
                            >
                              {word}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Mode 2: Plus-X Editorial Statement (Screenshot 3) */}
                  <div
                    className={`${styles.statementView} ${
                      !isReel ? styles.modeVisible : styles.modeHidden
                    }`}
                  >
                    <h2 className={styles.statementLead}>
                      {world.leadTitle}
                    </h2>
                    <p className={styles.statementSub}>
                      {world.subTitle}
                    </p>
                    <div className={styles.statementPill}>
                      <span>{world.pill}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Finale Call: Pinned Ending */}
          <div
            className={`${styles.act} ${scrollProgress >= 0.95 ? styles.actVisible : styles.actHidden}`}
          >
            <div className={styles.initiationContent}>
              <h2 className={styles.initiationHeading}>
                <span className={styles.headingLine}>READY TO TRANSCEND</span>
                <span className={styles.headingHighlight}>THE DEFAULT?</span>
              </h2>

              <p className={styles.initiationSub}>
                We take on a strictly limited number of commissions per quarter to ensure obsessive craft, bespoke GPU engineering, and categorical market dominance.
              </p>

              <div className={styles.initiationActions}>
                <a
                  href="mailto:hello@13utopia.com?subject=Project%20Commission%20Inquiry"
                  className={styles.primaryCta}
                >
                  Start a Commission →
                </a>
                <Link href="/model" className={styles.secondaryCta}>
                  Inspect 3D Emblem
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
