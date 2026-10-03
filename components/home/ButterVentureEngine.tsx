"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "@/styles/home/ButterVentureEngine.module.css";

gsap.registerPlugin(ScrollTrigger);

interface CapabilityItem {
  id: string;
  num: string;
  title: string;
  verb: string;
  highlightPhrase: string;
  desc: string;
  iconType: "monolith" | "spatial" | "shader" | "speed" | "neural" | "crown";
}

const CAPABILITIES: CapabilityItem[] = [
  {
    id: "growth",
    num: "01",
    title: "Brand Alchemy",
    verb: "GROW",
    highlightPhrase: "enduring brand moats",
    desc: "Sculpting monumental brand identity, spatial design systems, and category authority.",
    iconType: "monolith",
  },
  {
    id: "spatial",
    num: "02",
    title: "3D Spatial Worlds",
    verb: "CREATE",
    highlightPhrase: "immersive WebGL worlds",
    desc: "Architecting interactive 3D WebGL experiences with cinematic perspective and organic physics.",
    iconType: "spatial",
  },
  {
    id: "shaders",
    num: "03",
    title: "GPU Shaders & WebGL",
    verb: "ENGINEER",
    highlightPhrase: "real-time GPU shaders",
    desc: "Deploying custom GLSL fragment shaders, raymarching, and hardware-accelerated graphics.",
    iconType: "shader",
  },
  {
    id: "speed",
    num: "04",
    title: "Zero-Latency Architecture",
    verb: "BUILD",
    highlightPhrase: "sub-millisecond latency",
    desc: "Zero-compromise full-stack infrastructure delivering instant response and hyper-fluid feel.",
    iconType: "speed",
  },
  {
    id: "neural",
    num: "05",
    title: "Autonomous AI Orchestration",
    verb: "AUTOMATE",
    highlightPhrase: "autonomous AI agents",
    desc: "Integrating intelligent LLM pipelines, generative spatial assets, and computational autonomy.",
    iconType: "neural",
  },
  {
    id: "scale",
    num: "06",
    title: "Market Dominance",
    verb: "TRANSFORM",
    highlightPhrase: "category dominance",
    desc: "Turning bold digital anomalies into enduring market leadership and venture momentum.",
    iconType: "crown",
  },
];

export function ButterVentureEngine() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const badgeRef = useRef<HTMLSpanElement | null>(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [timelineSec, setTimelineSec] = useState(1.25);

  // Trigger elastic pop animation on headline badge whenever active capability changes
  useEffect(() => {
    if (!badgeRef.current) return;
    gsap.fromTo(
      badgeRef.current,
      { scale: 0.78, rotate: -6, opacity: 0.4 },
      {
        scale: 1,
        rotate: 0,
        opacity: 1,
        duration: 0.45,
        ease: "back.out(2.0)",
      }
    );
  }, [activeIdx]);

  // Auto-playing timeline console ticker (loops smoothly from 0.00s to 6.00s)
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setTimelineSec((prev) => {
        const next = prev >= 6.0 ? 0.0 : prev + 0.05;
        const index = Math.min(5, Math.floor(next));
        setActiveIdx(index);
        return parseFloat(next.toFixed(2));
      });
    }, 50);
    return () => clearInterval(interval);
  }, [isPlaying]);

  // GSAP ScrollTrigger entry animations
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        `.${styles.inlineLeadBlock}`,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            end: "top 40%",
            scrub: 0.5,
          },
        }
      );

      gsap.fromTo(
        `.${styles.dockContainer}`,
        { opacity: 0, scale: 0.94, y: 30 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: `.${styles.dockContainer}`,
            start: "top 85%",
            end: "top 55%",
            scrub: 0.5,
          },
        }
      );

      gsap.fromTo(
        `.${styles.cardItem}`,
        { opacity: 0, y: 50, rotateX: 10 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          stagger: 0.1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: `.${styles.waveSection}`,
            start: "top 75%",
            end: "top 35%",
            scrub: 0.6,
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, []);

  const handleSeek = (index: number) => {
    setActiveIdx(index);
    setTimelineSec(index + 0.25);
  };

  const renderBadgeIcon = (type: CapabilityItem["iconType"]) => {
    switch (type) {
      case "monolith":
        return (
          <svg viewBox="0 0 24 24" fill="none" className={styles.badgeSvg}>
            <path
              d="M7 3H17V21H7V3Z"
              stroke="#ffffff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path d="M11 7H13" stroke="rgba(255, 255, 255, 0.6)" strokeWidth="1.5" />
            <path d="M11 11H13" stroke="rgba(255, 255, 255, 0.6)" strokeWidth="1.5" />
          </svg>
        );
      case "spatial":
        return (
          <svg viewBox="0 0 24 24" fill="none" className={styles.badgeSvg}>
            <circle cx="12" cy="12" r="9" stroke="#ffffff" strokeWidth="1.8" />
            <ellipse cx="12" cy="12" rx="9" ry="4" stroke="rgba(255, 255, 255, 0.7)" strokeWidth="1.4" />
            <ellipse cx="12" cy="12" rx="4" ry="9" stroke="rgba(255, 255, 255, 0.5)" strokeWidth="1.4" />
          </svg>
        );
      case "shader":
        return (
          <svg viewBox="0 0 24 24" fill="none" className={styles.badgeSvg}>
            <path d="M12 2L21 7V17L12 22L3 17V7L12 2Z" stroke="#ffffff" strokeWidth="2" />
            <path d="M12 12L21 7" stroke="rgba(255, 255, 255, 0.6)" strokeWidth="1.4" />
            <path d="M12 12V22" stroke="rgba(255, 255, 255, 0.6)" strokeWidth="1.4" />
            <path d="M12 12L3 7" stroke="rgba(255, 255, 255, 0.6)" strokeWidth="1.4" />
          </svg>
        );
      case "speed":
        return (
          <svg viewBox="0 0 24 24" fill="none" className={styles.badgeSvg}>
            <path
              d="M13 2L3 14H12L11 22L21 10H12L13 2Z"
              stroke="#ffffff"
              strokeWidth="2"
              strokeLinejoin="round"
            />
          </svg>
        );
      case "neural":
        return (
          <svg viewBox="0 0 24 24" fill="none" className={styles.badgeSvg}>
            <circle cx="12" cy="12" r="9" stroke="#ffffff" strokeWidth="1.6" strokeDasharray="3 2" />
            <circle cx="12" cy="12" r="5" stroke="rgba(255, 255, 255, 0.8)" strokeWidth="1.8" />
            <circle cx="12" cy="12" r="2" fill="#ffffff" />
          </svg>
        );
      case "crown":
        return (
          <svg viewBox="0 0 24 24" fill="none" className={styles.badgeSvg}>
            <circle cx="12" cy="12" r="8.5" stroke="#ffffff" strokeWidth="2" />
            <path
              d="M8 12L10.5 15L16 9.5"
              stroke="#ffffff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
    }
  };

  const activeItem = CAPABILITIES[activeIdx];

  return (
    <section
      ref={sectionRef}
      className={styles.butterSection}
      id="engine"
      aria-label="13 Utopia Computational & Digital Venture Engine"
    >
      {/* Ambient Monochrome Titanium Backdrop */}
      <div className={styles.ambientGlow} />
      <div className={styles.dotMatrixGrid} />

      <div className={styles.container}>
        {/* ── PART 01: Butter.video Monumental Headline with Elastic Dynamic 3D Badge ── */}
        <div className={styles.inlineLeadBlock}>
          <div className={styles.eyebrowTag}>
            <span className={styles.pulseDot} />
            <span>03.5 // COMPUTATIONAL ENGINE</span>
          </div>

          <h2 className={styles.inlineHeadline}>
            13 Utopia{" "}
            <span
              ref={badgeRef}
              className={styles.heroGlassBadge}
              onClick={() => handleSeek((activeIdx + 1) % CAPABILITIES.length)}
              title="Click to advance capability"
            >
              <span className={styles.badgeReflection} />
              <span className={styles.badgeInnerIcon}>
                {renderBadgeIcon(activeItem.iconType)}
              </span>
            </span>{" "}
            is where visionary enterprises build and remix custom{" "}
            <span className={styles.highlightWord}>
              {activeItem.highlightPhrase}
            </span>{" "}
            right on timeline.
          </h2>
        </div>

        {/* ── PART 02: Butter.video Interactive Floating Timeline Console & Scrubber Deck ── */}
        <div className={styles.dockContainer}>
          {/* Header Controls Bar */}
          <div className={styles.dockHeader}>
            <button
              type="button"
              className={styles.playPauseBtn}
              onClick={() => setIsPlaying((v) => !v)}
              aria-label={isPlaying ? "Pause timeline" : "Play timeline"}
            >
              {isPlaying ? (
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                  <rect x="6" y="4" width="4" height="16" rx="1" />
                  <rect x="14" y="4" width="4" height="16" rx="1" />
                </svg>
              ) : (
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6 4L19 12L6 20V4Z" />
                </svg>
              )}
            </button>

            <div className={styles.timecode}>
              <span className={styles.timeVal}>
                00:0{Math.floor(timelineSec)}.
                {(timelineSec % 1).toFixed(2).slice(2)}
              </span>
              <span className={styles.timeSep}>/</span>
              <span className={styles.timeTotal}>00:06.00</span>
            </div>

            <div className={styles.durationPill}>
              <span>Dur 1.0s sec</span>
            </div>

            <div className={styles.cadencePill}>
              <span>CADENCE // 13x VELOCITY</span>
            </div>

            <div className={styles.activePillLabel}>
              <span className={styles.activeDot} />
              <span>{activeItem.title.toUpperCase()}</span>
            </div>
          </div>

          {/* Timeline Ruler & Interactive Scrubber Playhead */}
          <div
            className={styles.timelineRulerWrap}
            onClick={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const clickX = e.clientX - rect.left;
              const ratio = Math.max(0, Math.min(1, clickX / rect.width));
              const sec = ratio * 6.0;
              setTimelineSec(parseFloat(sec.toFixed(2)));
              setActiveIdx(Math.min(5, Math.floor(sec)));
            }}
          >
            {/* Active Highlight Region Block (Butter Style) */}
            <div
              className={styles.activeRegionBlock}
              style={{
                left: `${(activeIdx / 6.0) * 100}%`,
                width: `${(1 / 6.0) * 100}%`,
              }}
            />

            {/* Ruler Ticks */}
            <div className={styles.timelineTicks}>
              {["0s", "1s", "2s", "3s", "4s", "5s", "6s"].map((tick, i) => (
                <div key={i} className={styles.tickCol}>
                  <span className={styles.tickLine} />
                  <span className={styles.tickLabel}>{tick}</span>
                </div>
              ))}
            </div>

            {/* Glowing Scrubber Playhead Needle */}
            <div
              className={styles.playhead}
              style={{ left: `${(timelineSec / 6.0) * 100}%` }}
            >
              <div className={styles.playheadHandle} />
              <div className={styles.playheadLine} />
            </div>
          </div>

          {/* Horizontal Tactile Squircle Capability Track */}
          <div className={styles.squircleTrack}>
            {CAPABILITIES.map((cap, i) => {
              const isActive = activeIdx === i;
              return (
                <div
                  key={cap.id}
                  className={`${styles.dockItem} ${
                    isActive ? styles.dockItemActive : ""
                  }`}
                  onClick={() => handleSeek(i)}
                >
                  <div className={styles.dockItemGlass}>
                    <span className={styles.dockItemGloss} />
                    <div className={styles.dockItemIconWrap}>
                      {renderBadgeIcon(cap.iconType)}
                    </div>
                  </div>
                  <div className={styles.dockItemTextCol}>
                    <span className={styles.dockItemNum}>{cap.num}</span>
                    <span className={styles.dockItemTitle}>{cap.title}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── PART 03: Connected 3D Glass Capability Cards & Laser Wave Line ── */}
        <div className={styles.waveSection}>
          <div className={styles.waveHeader}>
            <span className={styles.waveTag}>
              WHAT WE SOLVE // VALUE CREATION ARCHITECTURE
            </span>
            <h3 className={styles.waveTitle}>
              From ideas to monumental impact —<br />
              <span className={styles.waveTitleDim}>
                we engineer what comes next.
              </span>
            </h3>
          </div>

          {/* Monochrome Titanium Laser Circuit Wave Line */}
          <div className={styles.circuitSvgWrap} aria-hidden="true">
            <svg
              className={styles.circuitSvg}
              viewBox="0 0 1200 240"
              fill="none"
              preserveAspectRatio="none"
            >
              <path
                d="M 20 120 C 180 30, 240 210, 400 120 C 560 30, 620 210, 780 120 C 940 30, 1020 190, 1180 120"
                stroke="rgba(255, 255, 255, 0.08)"
                strokeWidth="2"
                strokeDasharray="6 6"
              />
              <path
                d="M 20 120 C 180 30, 240 210, 400 120 C 560 30, 620 210, 780 120 C 940 30, 1020 190, 1180 120"
                stroke="url(#monochromeLaserGrad)"
                strokeWidth="2.5"
              />
              <defs>
                <linearGradient
                  id="monochromeLaserGrad"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
                  <stop offset="30%" stopColor="#94a3b8" stopOpacity="0.4" />
                  <stop offset="70%" stopColor="#ffffff" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#64748b" stopOpacity="0.5" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* 6 Undulating Glass Squircle Cards */}
          <div className={styles.cardsGrid}>
            {CAPABILITIES.map((cap) => (
              <div key={cap.id} className={styles.cardItem}>
                <div className={styles.cardGlassBody}>
                  {/* Subtle Titanium Rim Highlight */}
                  <div className={styles.cardRimGlow} />
                  <div className={styles.cardGlossHighlight} />

                  <div className={styles.cardTopRow}>
                    <span className={styles.cardNum}>{cap.num}</span>
                    <div className={styles.cardBadgeSmall}>
                      {renderBadgeIcon(cap.iconType)}
                    </div>
                  </div>

                  <h4 className={styles.cardHeading}>{cap.title}</h4>
                  <p className={styles.cardDesc}>{cap.desc}</p>

                  <div className={styles.cardFooter}>
                    <span className={styles.cardFooterTag}>
                      CAPABILITY // {cap.verb}
                    </span>
                    <span className={styles.cardArrow}>↗</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
