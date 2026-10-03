"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "@/styles/plus-ex/Continuous3DStory.module.css";
import { Plus3DCanvas } from "./Plus3DCanvas";

gsap.registerPlugin(ScrollTrigger);

const WORLDS = [
  {
    id: "create",
    header: "BE ORIGINAL",
    index: "01",
    tag: "01 // CREATE",
    keywords: [
      "UNREAL",
      "ORIGINAL",
      "ICONIC",
      "CATEGORY-DEFINING",
      "TIMELESS",
      "DISTINCT",
      "UNCOMPROMISING",
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
      "DIGITAL PRODUCTS",
      "WEB & MOBILE APPS",
      "SAAS PLATFORMS",
      "AI AGENT SYSTEMS",
      "WORKFLOW AUTOMATION",
      "CLOUD INFRASTRUCTURE",
      "FULL-STACK ENGINEERING",
    ],
    leadTitle: "PRODUCTS ENGINEERED FOR SCALE AND PERFORMANCE.",
    subTitle: "WE ENGINEER WEBSITES, MOBILE APPS, SAAS PLATFORMS, AI SYSTEMS, AND CLOUD INFRASTRUCTURE. BUILT TO PERFORM UNDER REAL CONDITIONS.",
    pill: "13 UTOPIA // BUILD",
    align: "left",
  },
  {
    id: "grow",
    header: "BE UNREASONABLE",
    index: "03",
    tag: "03 // GROW",
    keywords: [
      "UNREASONABLE",
      "EXPONENTIAL",
      "AUTHORITATIVE",
      "COMPOUNDING",
      "DOMINANT",
      "MEASURABLE",
      "PROVEN",
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
      // Continuous pinned 3D narrative journey from Hero -> Manifesto -> CREATE -> BUILD -> GROW
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: "+=7500",
        pin: stage,
        pinSpacing: true,
        scrub: 0.6,
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
                  TECHNOLOGY AND GROWTH<br />
                  TOGETHER UNDER ONE ROOF.<br />
                  SO NOTHING GETS LOST IN TRANSLATION.
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

                  {/* Mode 2: Plus-X Editorial Statement */}
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

          {/* Act Finale: Core Trilogy Architecture (CREATE · BUILD · GROW) */}
          <div
            className={`${styles.act} ${styles.finaleAct} ${
              scrollProgress >= 0.92 ? styles.actVisible : styles.actHidden
            }`}
          >
            <div className={styles.finaleContent}>
              <div className={styles.finaleEyebrow}>
                <span className={styles.finaleTag}>13 UTOPIA</span>
                <span className={styles.finaleTag}>FULL-SPECTRUM CAPABILITY</span>
              </div>

              <div className={styles.trilogyHeader}>
                <h2 className={styles.trilogyTitle}>
                  <span className={styles.trilogyWord}>CREATE</span>
                  <span className={styles.trilogyDot}>·</span>
                  <span className={styles.trilogyWord}>BUILD</span>
                  <span className={styles.trilogyDot}>·</span>
                  <span className={styles.trilogyWord}>GROW</span>
                </h2>
              </div>

              <p className={styles.finaleThesis}>
                Brand. Product. Growth. One company, end to end.
              </p>

              <div className={styles.trilogyColumns}>
                <div className={styles.trilogyCard}>
                  <span className={styles.cardIndex}>01 / CREATE</span>
                  <h4 className={styles.cardTitle}>Brand &amp; Design</h4>
                  <p className={styles.cardDesc}>Identity systems, art direction, UI/UX, and motion.</p>
                </div>

                <div className={styles.trilogyCard}>
                  <span className={styles.cardIndex}>02 / BUILD</span>
                  <h4 className={styles.cardTitle}>Engineering &amp; Product</h4>
                  <p className={styles.cardDesc}>Websites, apps, SaaS, AI agents, and cloud infrastructure.</p>
                </div>

                <div className={styles.trilogyCard}>
                  <span className={styles.cardIndex}>03 / GROW</span>
                  <h4 className={styles.cardTitle}>Marketing &amp; Growth</h4>
                  <p className={styles.cardDesc}>SEO, paid acquisition, content strategy, and lead generation.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
