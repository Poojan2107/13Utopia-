"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { plates } from "@/content/plates";
import styles from "@/styles/motion/ThirteenProtocolStage.module.css";

gsap.registerPlugin(ScrollTrigger);

// ── The 1 + 3 (13 UTOPIA) Dataset ──
const PROTOCOL_CARDS = [
  {
    id: "monolith",
    isMonolith: true,
    index: "01",
    role: "The Core Philosophy",
    title: "THE MONOLITH",
    subtitle: "Question the obvious. Form the unignorable.",
    bgImage: plates.heroSculpture.src,
    backNum: "01 · THE FOUNDATION",
    backTitle: "One Unified Vision",
    backBody: "Strategy and taste are not separate disciplines. The 13 Utopia protocol begins with a single uncompromising belief.",
    metric: "13 · UTOPIA",
    metricLabel: "The Creative North Star",
    href: "/our-story/why-13-utopia",
    actionLabel: "Explore Origin",
  },
  {
    id: "create",
    isMonolith: false,
    index: "01",
    role: "Sensory Discipline",
    title: "CREATE",
    subtitle: "Brand Identity, 3D CGI & Sensory UI.",
    bgImage: plates.create.src,
    backNum: "TRINITY · 01",
    backTitle: "Haute-Couture Brand",
    backBody: "Visual worlds crafted to command immediate category leadership and emotional gravity.",
    metric: "Top 1%",
    metricLabel: "Visual & Motion Caliber",
    href: "/capabilities/create",
    actionLabel: "Enter Create",
  },
  {
    id: "build",
    isMonolith: false,
    index: "02",
    role: "Engineering Discipline",
    title: "BUILD",
    subtitle: "Next.js App Router, Sub-100ms & AI.",
    bgImage: plates.build.src,
    backNum: "TRINITY · 02",
    backTitle: "Precision Engineering",
    backBody: "Sub-100ms response systems, headless commerce engines, and intelligent automation pipelines.",
    metric: "Sub-100ms",
    metricLabel: "Edge Response & LCP",
    href: "/capabilities/build",
    actionLabel: "Enter Build",
  },
  {
    id: "grow",
    isMonolith: false,
    index: "03",
    role: "Growth Discipline",
    title: "GROW",
    subtitle: "Technical SEO, Demand & Retention.",
    bgImage: plates.grow.src,
    backNum: "TRINITY · 03",
    backTitle: "Compounding Growth",
    backBody: "Transforming artistic prestige into compounding pipeline, conversion velocity, and search dominance.",
    metric: "+240%",
    metricLabel: "Average Conversion Lift",
    href: "/capabilities/grow",
    actionLabel: "Enter Grow",
  },
];

/**
 * ThirteenProtocolStage — Fusion of Awwwards 040 (3D Card Gap & Flip) and
 * Awwwards 047 (Senseitech Staggered Rise & Spatial Quadrant Dispersal).
 *
 * Easter Egg: 1 Monolith Card + 3 Trinity Cards = The "13" Protocol.
 *
 * @see Awwwards_Master_Pack/01 - Scroll Animation/040 - Component Demo
 * @see Awwwards_Master_Pack/01 - Scroll Animation/047 - Senseitech Scroll Animation
 */
export function ThirteenProtocolStage() {
  const rootRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const cards = root.querySelectorAll<HTMLElement>(`.${styles.cardShell}`);
    const cardInners = root.querySelectorAll<HTMLElement>(`.${styles.cardInner}`);
    const stickyTitle = root.querySelector<HTMLElement>(`.${styles.stickyTitle}`);
    const stagePin = root.querySelector<HTMLElement>(`.${styles.stagePin}`);
    if (!cards.length || !stagePin) return;

    const ctx = gsap.context(() => {
      // Final 4-column dispersed coordinates (percentages relative to center stage)
      const finalPositions = [
        { x: -155, y: 0, zRot: -4 },    // 0: Monolith (Far Left anchor)
        { x: -52,  y: -10, zRot: -1.5 }, // 1: Create
        { x: 52,   y: 10,  zRot: 1.5 },  // 2: Build
        { x: 155,  y: 0,  zRot: 4 },    // 3: Grow (Far Right anchor)
      ];

      const initialRotations = [0, -3.5, 3, -2];
      const phase1Offsets = [0, 0.08, 0.16, 0.24];

      ScrollTrigger.create({
        trigger: stagePin,
        start: "top top",
        end: `+=${window.innerHeight * 4.5}px`,
        pin: true,
        pinSpacing: true,
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;

          // ── Sticky Header Reveal & Title Morph ──
          if (stickyTitle) {
            if (progress < 0.1) {
              gsap.set(stickyTitle, { opacity: 0, y: 30 });
            } else if (progress <= 0.3) {
              const p = gsap.utils.mapRange(0.1, 0.3, 0, 1, progress);
              gsap.set(stickyTitle, {
                opacity: p,
                y: gsap.utils.mapRange(0, 1, 30, 0, p),
              });
              stickyTitle.textContent = "01 · ONE MONOLITHIC CREED";
            } else if (progress <= 0.65) {
              stickyTitle.textContent = "03 · THREE EXECUTION ENGINES";
            } else {
              stickyTitle.textContent = "1 & 3 = THE 13 UTOPIA PROTOCOL";
            }
          }

          // ── 047 Senseitech Rise & 040 Spread Engine ──
          cards.forEach((card, i) => {
            const initialRot = initialRotations[i];
            const p1Start = phase1Offsets[i];
            const p1End = Math.min(p1Start + 0.24, 0.35);

            let currentX = 0;
            let currentY = 0;
            let currentRotZ = initialRot;

            // Phase 1: Staggered entrance from bottom into center stack (047 DNA)
            if (progress < p1Start) {
              currentY = 160;
              currentX = (i - 1.5) * 4;
            } else if (progress <= 0.35) {
              const p1 = gsap.utils.clamp(0, 1, (progress - p1Start) / (p1End - p1Start));
              const easeP1 = 1 - Math.pow(1 - p1, 3);
              currentY = 160 - easeP1 * 160;
              currentX = (i - 1.5) * (4 - easeP1 * 2);
            } else if (progress <= 0.68) {
              // Phase 2: Dispersal into 4-pillar architectural ribbon (040 + 047 DNA)
              const p2 = gsap.utils.clamp(0, 1, (progress - 0.35) / 0.33);
              const easeP2 = 1 - Math.pow(1 - p2, 3);
              const target = finalPositions[i];

              currentX = target.x * easeP2;
              currentY = target.y * easeP2;
              currentRotZ = initialRot + (target.zRot - initialRot) * easeP2;
            } else {
              // Phase 3: Settle at final spread positions
              const target = finalPositions[i];
              currentX = target.x;
              currentY = target.y;
              currentRotZ = target.zRot;
            }

            // Mobile viewport adaptive scaling
            const isMobile = window.innerWidth < 1000;
            const scaleFactor = isMobile ? 0.8 : 1;

            gsap.set(card, {
              xPercent: currentX,
              yPercent: currentY,
              rotationZ: currentRotZ,
              scale: scaleFactor,
            });
          });

          // ── 040 Component 3D 180° Flip Engine ──
          if (progress >= 0.7) {
            const flipP = gsap.utils.clamp(0, 1, (progress - 0.7) / 0.25);
            const easeFlip = gsap.parseEase("power3.inOut")(flipP);

            cardInners.forEach((inner, i) => {
              const staggerOffset = i * 0.08;
              const cardFlip = gsap.utils.clamp(0, 1, (flipP - staggerOffset) / (1 - staggerOffset));
              const rotY = cardFlip * 180;
              gsap.set(inner, { rotationY: rotY });
            });

            // Subtle outer card wing lift
            if (cards[0] && cards[3]) {
              const tiltLift = easeFlip * 15;
              gsap.set(cards[0], { rotationZ: -4 - tiltLift * 0.4, y: tiltLift });
              gsap.set(cards[3], { rotationZ: 4 + tiltLift * 0.4, y: tiltLift });
            }
          } else {
            cardInners.forEach((inner) => {
              gsap.set(inner, { rotationY: 0 });
            });
          }
        },
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={rootRef} className={styles.root} aria-label="13 Utopia Protocol Stage">
      {/* ── Section Header ── */}
      <header className={styles.header}>
        <div className={styles.kickerRow}>
          <span className={styles.kickerDot} aria-hidden="true" />
          <p className={styles.kicker}>The 1 &amp; 3 Architecture // Awwwards 040 + 047</p>
        </div>

        <h2 className={styles.title}>
          One Sovereign Truth. <span className={styles.titleGold}>Three Master Engines.</span>
        </h2>

        <p className={styles.lead}>
          Why 13? Because breakthrough digital dominance requires <strong>1 unified vision</strong> executing flawlessly across <strong>3 compounding disciplines</strong>. Scroll to witness the protocol unfold.
        </p>
      </header>

      {/* ── Pinned 3D Theater Stage ── */}
      <div className={styles.stagePin}>
        <div className={styles.stickyHeader}>
          <h3 className={styles.stickyTitle}>01 · ONE MONOLITHIC CREED</h3>
          <p className={styles.stickyEasterEgg}>Scroll to deploy the 13 protocol</p>
        </div>

        <div className={styles.cardsStage}>
          {PROTOCOL_CARDS.map((card, i) => (
            <div
              key={card.id}
              className={`${styles.cardShell} ${card.isMonolith ? styles.monolithShell : ""}`}
              data-cursor="view"
            >
              <div className={styles.cardInner}>
                {/* ── Front Face ── */}
                <div
                  className={styles.cardFront}
                  style={{ backgroundImage: `url(${card.bgImage})` }}
                >
                  <div className={styles.cardFrontContent}>
                    <div className={styles.badgeRow}>
                      <span className={styles.cardIndex}>{card.index}</span>
                      <span className={styles.roleTag}>{card.role}</span>
                    </div>

                    <div className={styles.cardBottom}>
                      <h4 className={styles.cardTitle}>{card.title}</h4>
                      <p className={styles.cardSubtitle}>{card.subtitle}</p>
                    </div>
                  </div>
                </div>

                {/* ── Back Face (3D 180° Flip Reveal) ── */}
                <div className={styles.cardBack}>
                  <div className={styles.backTop}>
                    <span className={styles.backNum}>{card.backNum}</span>
                    <h4 className={styles.backHeading}>{card.backTitle}</h4>
                    <p className={styles.backBody}>{card.backBody}</p>
                  </div>

                  <div className={styles.metricBox}>
                    <span className={styles.metricValue}>{card.metric}</span>
                    <span className={styles.metricDesc}>{card.metricLabel}</span>
                  </div>

                  <Link href={card.href} className={styles.cardAction} data-magnetic>
                    <span>{card.actionLabel}</span>
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
