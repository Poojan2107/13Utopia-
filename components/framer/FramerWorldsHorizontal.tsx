"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { EchoTitle } from "@/components/framer/EchoTitle";
import styles from "@/styles/framer/FramerWorldsHorizontal.module.css";

export interface WorldService {
  num: string;
  title: string;
  desc: string;
  badge: string;
}

export interface WorldConfig {
  id: "create" | "build" | "grow";
  indexNum: string;
  stepNum: string;
  worldTag: string;
  tagline: string;
  title: string;
  leadSentence: string;
  description: string;
  heroImage: string;
  specimenLabel: string;
  accent: string;
  roman: string;
  services: WorldService[];
}

export const WORLDS_DATA: WorldConfig[] = [
  {
    id: "create",
    indexNum: "03 // 10",
    stepNum: "01",
    worldTag: "WORLD 01",
    tagline: "AESTHETIC ARCHITECTURE",
    title: "CREATE.",
    leadSentence: "Brands people remember. Experiences people feel.",
    description:
      "We reject the sea of digital sameness. Every identity, spatial interface, and motion language is built to demand visceral attention and refuse to blend into corporate noise.",
    heroImage: "/images/world-create.jpg",
    specimenLabel: "SPECIMEN // 03.1 — FORM BEFORE NOISE",
    accent: "#e8c56a",
    roman: "I",
    services: [
      {
        num: "01",
        title: "Brand Strategy & Positioning",
        desc: "Defining the unreasonable market edge.",
        badge: "STRATEGY",
      },
      {
        num: "02",
        title: "Visual Identity Systems",
        desc: "Bespoke typography, color science, and tactile brand language.",
        badge: "IDENTITY",
      },
      {
        num: "03",
        title: "Spatial UI / UX Design",
        desc: "Digital interfaces engineered as high-end living spaces.",
        badge: "EXPERIENCE",
      },
      {
        num: "04",
        title: "Creative Direction",
        desc: "Uncompromising aesthetic governance across all touchpoints.",
        badge: "DIRECTION",
      },
      {
        num: "05",
        title: "CGI & 3D Spatial Worlds",
        desc: "Photorealistic sculptural dimensions that stop the scroll.",
        badge: "3D LAB",
      },
      {
        num: "06",
        title: "Kinetic Motion Systems",
        desc: "Physics-driven motion systems that make the digital feel physical.",
        badge: "MOTION",
      },
    ],
  },
  {
    id: "build",
    indexNum: "04 // 10",
    stepNum: "02",
    worldTag: "WORLD 02",
    tagline: "DIGITAL ENGINEERING",
    title: "BUILD.",
    leadSentence: "Digital products and technology built to perform.",
    description:
      "We don't build standard websites. We engineer high-velocity digital architectures, bespoke SaaS platforms, and intelligent automation systems that scale without breaking under pressure.",
    heroImage: "/images/world-build.jpg",
    specimenLabel: "SPECIMEN // 04.1 — STRUCTURE BEFORE SCALE",
    accent: "#f3c35b",
    roman: "II",
    services: [
      {
        num: "01",
        title: "Web & Full-Stack Architecture",
        desc: "Sub-second load times, zero bloat, uncompromising code quality.",
        badge: "ENGINEERING",
      },
      {
        num: "02",
        title: "Custom Software & SaaS",
        desc: "Resilient cloud applications built from first principles.",
        badge: "PLATFORM",
      },
      {
        num: "03",
        title: "Autonomous Agents & LLMs",
        desc: "Custom fine-tuned operational intelligence and workflow automation.",
        badge: "AI LAB",
      },
      {
        num: "04",
        title: "Intelligent Automation",
        desc: "Eliminating human error and operational drag with custom code.",
        badge: "AUTOMATION",
      },
      {
        num: "05",
        title: "Next.js & Performance",
        desc: "Cinematic rendering pipelines running at locked 60 FPS.",
        badge: "PERFORMANCE",
      },
      {
        num: "06",
        title: "Cloud Infrastructure & Edge",
        desc: "Global edge deployment with enterprise-grade resilience.",
        badge: "CLOUD",
      },
    ],
  },
  {
    id: "grow",
    indexNum: "05 // 10",
    stepNum: "03",
    worldTag: "WORLD 03",
    tagline: "REVENUE ENGINES",
    title: "GROW.",
    leadSentence: "Systems that turn attention into measurable outcomes.",
    description:
      "Attention without conversion is vanity. We construct organic search dominance, high-conversion acquisition funnels, and retention flywheels that compound your bottom line automatically.",
    heroImage: "/images/world-grow.jpg",
    specimenLabel: "SPECIMEN // 05.1 — MOMENTUM BEFORE VANITY",
    accent: "#dfc17b",
    roman: "III",
    services: [
      {
        num: "01",
        title: "Organic Search Dominance (SEO)",
        desc: "Authoritative technical SEO that outranks legacy incumbents.",
        badge: "SEARCH",
      },
      {
        num: "02",
        title: "Conversion Rate Engineering (CRO)",
        desc: "Behavioral science and data experiments that maximize yield.",
        badge: "CONVERSION",
      },
      {
        num: "03",
        title: "Perspective & Category Authority",
        desc: "Provocative thought leadership that establishes market dominance.",
        badge: "AUTHORITY",
      },
      {
        num: "04",
        title: "High-Intent Acquisition Funnels",
        desc: "Predictable, inbound enterprise client pipeline systems.",
        badge: "PIPELINE",
      },
      {
        num: "05",
        title: "Attribution & Revenue Analytics",
        desc: "Multi-touch attribution connecting every marketing dollar to outcome.",
        badge: "DATA",
      },
      {
        num: "06",
        title: "Self-Reinforcing Loops",
        desc: "Growth flywheels that compound customer lifetime value quarterly.",
        badge: "FLYWHEEL",
      },
    ],
  },
];

export function FramerWorldsHorizontal() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<ScrollTrigger | null>(null);
  const [activeIdx, setActiveIdx] = useState(0);

  // GSAP ScrollTrigger Pinned Horizontal Scroll with Lenis
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const ctx = gsap.context(() => {
      const getScrollAmount = () => -(track.scrollWidth - window.innerWidth);

      const tween = gsap.to(track, {
        x: getScrollAmount,
        ease: "none",
      });

      triggerRef.current = ScrollTrigger.create({
        animation: tween,
        trigger: section,
        start: "top top",
        end: () => `+=${Math.max(2400, window.innerHeight * 2.8)}`,
        scrub: 0.9,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const p = self.progress;
          if (p < 0.35) {
            setActiveIdx(0);
          } else if (p < 0.72) {
            setActiveIdx(1);
          } else {
            setActiveIdx(2);
          }
        },
      });
    }, section);

    return () => {
      ctx.revert();
      if (triggerRef.current) {
        triggerRef.current.kill();
      }
    };
  }, []);

  const activeWorld = WORLDS_DATA[activeIdx];

  return (
    <section
      ref={sectionRef}
      className={styles.section}
      aria-label="The Three Worlds: Create, Build, Grow"
      id="worlds-architecture"
      style={{ "--world-accent": activeWorld.accent } as React.CSSProperties}
    >
      {/* Horizontal Pinned Track */}
      <div className={styles.viewportWindow}>
        <div ref={trackRef} className={styles.horizontalTrack}>
          {WORLDS_DATA.map((world) => {
            const flip = world.id === "build";

            return (
              <div
                key={world.id}
                className={styles.worldPanel}
                style={{ "--world-accent": world.accent } as React.CSSProperties}
              >
                {/* Parallax Ghost Typography Watermark */}
                <div className={styles.ghostWatermark} aria-hidden="true">
                  <span className={styles.ghostText}>{world.title.replace(/\.$/, "")}</span>
                  <span className={styles.ghostNumeral}>{world.roman}</span>
                </div>

                <div className={`${styles.stage} ${flip ? styles.stageFlip : ""}`}>
                  {/* Copy Column */}
                  <div className={styles.copyCol}>
                    <EchoTitle text={world.title} />

                    <div className={styles.descBlock}>
                      <p className={styles.leadSentence}>{world.leadSentence}</p>
                      <p className={styles.description}>{world.description}</p>
                      <Link
                        href={`/services/${world.id}`}
                        className={styles.worldCta}
                        data-cursor="hover"
                      >
                        Enter {world.title.replace(/\.$/, "")}
                        <span aria-hidden="true">→</span>
                      </Link>
                    </div>

                    <div className={styles.services}>
                      <div className={styles.bracket} aria-hidden="true">
                        <svg viewBox="0 0 40 400" preserveAspectRatio="none">
                          <path
                            d="M28 8 H18 Q10 8 10 20 V380 Q10 392 18 392 H28"
                            fill="none"
                            stroke="color-mix(in srgb, var(--world-accent, #e8c56a) 45%, transparent)"
                            strokeWidth="1.25"
                          />
                        </svg>
                      </div>

                      <div className={styles.servicesMatrix}>
                        {world.services.map((s) => (
                          <div key={s.num} className={styles.serviceRow}>
                            <div className={styles.serviceHeader}>
                              <span className={styles.serviceNum}>{s.num}</span>
                              <span className={styles.serviceTitle}>{s.title}</span>
                              <span className={styles.serviceBadge}>{s.badge}</span>
                            </div>
                            <p className={styles.serviceDesc}>{s.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Cinematic Media Column */}
                  <div className={styles.mediaCol}>
                    <div className={styles.mediaGlow} aria-hidden="true" />
                    <div className={styles.mediaStage}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={world.heroImage}
                        alt={world.specimenLabel}
                        className={styles.mediaImage}
                        loading="eager"
                      />
                      <span className={styles.cornerTL} aria-hidden="true">+</span>
                      <span className={styles.cornerTR} aria-hidden="true">+</span>
                      <span className={styles.cornerBL} aria-hidden="true">+</span>
                      <span className={styles.cornerBR} aria-hidden="true">+</span>
                      <div className={styles.mediaBadge}>
                        <span className={styles.badgeDot} />
                        <span>{world.specimenLabel}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
