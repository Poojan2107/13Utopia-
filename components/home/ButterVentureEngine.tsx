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
  desc: string;
  color: string;
  glowColor: string;
  iconType: "chart" | "rocket" | "scale" | "cube" | "vortex" | "core";
}

const CAPABILITIES: CapabilityItem[] = [
  {
    id: "growth",
    num: "01",
    title: "Growth",
    verb: "GROW",
    desc: "Command market dominance, capture organic category gravity, and scale pipeline.",
    color: "#10b981",
    glowColor: "rgba(16, 185, 129, 0.45)",
    iconType: "chart",
  },
  {
    id: "launch",
    num: "02",
    title: "Launch",
    verb: "LAUNCH",
    desc: "Turn your visionary idea into a living, zero-latency digital flagship product.",
    color: "#f97316",
    glowColor: "rgba(249, 115, 22, 0.45)",
    iconType: "rocket",
  },
  {
    id: "scale",
    num: "03",
    title: "Scale",
    verb: "SCALE",
    desc: "Multiply computation and user capacity with WebGL architecture and cloud systems.",
    color: "#3b82f6",
    glowColor: "rgba(59, 130, 246, 0.45)",
    iconType: "scale",
  },
  {
    id: "modernize",
    num: "04",
    title: "Modernize",
    verb: "MODERNIZE",
    desc: "Upgrade legacy infrastructure into unified, anomalous multi-touchpoint brand worlds.",
    color: "#a855f7",
    glowColor: "rgba(168, 85, 247, 0.45)",
    iconType: "cube",
  },
  {
    id: "automate",
    num: "05",
    title: "Automate",
    verb: "AUTOMATE",
    desc: "Work smarter with autonomous AI orchestration and real-time computational workflows.",
    color: "#e2e8f0",
    glowColor: "rgba(226, 232, 240, 0.5)",
    iconType: "vortex",
  },
  {
    id: "transform",
    num: "06",
    title: "Transform",
    verb: "TRANSFORM",
    desc: "Reimagine enterprise reality, command category authority, and lead what comes next.",
    color: "#ef4444",
    glowColor: "rgba(239, 68, 68, 0.5)",
    iconType: "core",
  },
];

export function ButterVentureEngine() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [timelineSec, setTimelineSec] = useState(1.25);

  // Auto-playing timeline console ticker
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
        { opacity: 0, y: 50, rotateX: 12 },
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

  const renderBadgeIcon = (type: CapabilityItem["iconType"], color: string) => {
    switch (type) {
      case "chart":
        return (
          <svg viewBox="0 0 24 24" fill="none" className={styles.badgeSvg}>
            <path d="M4 19L20 19" stroke={color} strokeWidth="2" strokeLinecap="round" />
            <path d="M7 16V12" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
            <path d="M12 16V8" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
            <path d="M17 16V4" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
          </svg>
        );
      case "rocket":
        return (
          <svg viewBox="0 0 24 24" fill="none" className={styles.badgeSvg}>
            <path
              d="M12 2C12 2 17 4 17 11C17 14 15 17 12 19C9 17 7 14 7 11C7 4 12 2 12 2Z"
              stroke={color}
              strokeWidth="2"
              strokeLinejoin="round"
            />
            <circle cx="12" cy="9" r="2" fill={color} />
            <path d="M7 14L4 17V20L7 19" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
            <path d="M17 14L20 17V20L17 19" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        );
      case "scale":
        return (
          <svg viewBox="0 0 24 24" fill="none" className={styles.badgeSvg}>
            <path d="M3 21L21 21" stroke={color} strokeWidth="2" strokeLinecap="round" />
            <rect x="5" y="14" width="3" height="7" rx="1" fill={color} fillOpacity="0.5" stroke={color} />
            <rect x="10.5" y="9" width="3" height="12" rx="1" fill={color} fillOpacity="0.7" stroke={color} />
            <rect x="16" y="4" width="3" height="17" rx="1" fill={color} stroke={color} />
          </svg>
        );
      case "cube":
        return (
          <svg viewBox="0 0 24 24" fill="none" className={styles.badgeSvg}>
            <path d="M12 3L20 7.5V16.5L12 21L4 16.5V7.5L12 3Z" stroke={color} strokeWidth="2" />
            <path d="M12 12L20 7.5" stroke={color} strokeWidth="1.5" />
            <path d="M12 12V21" stroke={color} strokeWidth="1.5" />
            <path d="M12 12L4 7.5" stroke={color} strokeWidth="1.5" />
          </svg>
        );
      case "vortex":
        return (
          <svg viewBox="0 0 24 24" fill="none" className={styles.badgeSvg}>
            <circle cx="12" cy="12" r="9" stroke={color} strokeWidth="1.5" strokeDasharray="4 2" />
            <circle cx="12" cy="12" r="5" stroke={color} strokeWidth="2" />
            <circle cx="12" cy="12" r="2" fill={color} />
          </svg>
        );
      case "core":
        return (
          <svg viewBox="0 0 24 24" fill="none" className={styles.badgeSvg}>
            <circle cx="12" cy="12" r="8" stroke={color} strokeWidth="2" />
            <path d="M12 4C8 8 8 16 12 20" stroke={color} strokeWidth="1.5" />
            <path d="M12 4C16 8 16 16 12 20" stroke={color} strokeWidth="1.5" />
            <circle cx="12" cy="12" r="3" fill={color} />
          </svg>
        );
    }
  };

  return (
    <section
      ref={sectionRef}
      className={styles.butterSection}
      id="engine"
      aria-label="13 Utopia Venture & Computational Engine"
    >
      {/* Ambient Atmospheric Backdrop */}
      <div className={styles.ambientGlow} />
      <div className={styles.dotMatrixGrid} />

      <div className={styles.container}>
        {/* ── PART 01: Butter.video Style Monumental Inline 3D Glass Badge Lockup ── */}
        <div className={styles.inlineLeadBlock}>
          <div className={styles.eyebrowTag}>
            <span className={styles.pulseDot} />
            <span>03.5 // CONTINUUM ENGINE</span>
          </div>

          <h2 className={styles.inlineHeadline}>
            We help ambitious enterprises{" "}
            {CAPABILITIES.map((cap, i) => (
              <span key={cap.id} className={styles.inlinePillGroup}>
                <span
                  className={styles.glassBadge}
                  style={
                    {
                      "--badge-color": cap.color,
                      "--badge-glow": cap.glowColor,
                    } as React.CSSProperties
                  }
                  onMouseEnter={() => {
                    setIsPlaying(false);
                    setActiveIdx(i);
                    setTimelineSec(i);
                  }}
                  onMouseLeave={() => setIsPlaying(true)}
                >
                  <span className={styles.badgeReflection} />
                  {renderBadgeIcon(cap.iconType, cap.color)}
                </span>
                <span
                  className={styles.verbText}
                  style={{ color: cap.color }}
                  onMouseEnter={() => {
                    setIsPlaying(false);
                    setActiveIdx(i);
                    setTimelineSec(i);
                  }}
                  onMouseLeave={() => setIsPlaying(true)}
                >
                  {cap.verb}
                </span>
                {i < CAPABILITIES.length - 1 ? (i === CAPABILITIES.length - 2 ? ", and " : ", ") : " "}
              </span>
            ))}
            — turning bold anomalies into enduring digital category dominance.
          </h2>
        </div>

        {/* ── PART 02: Butter.video Interactive Timeline Console & Scrubber Dock ── */}
        <div className={styles.dockContainer}>
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
              <span className={styles.timeVal}>00:0{Math.floor(timelineSec)}.{(timelineSec % 1).toFixed(2).slice(2)}</span>
              <span className={styles.timeSep}>/</span>
              <span className={styles.timeTotal}>00:06.00</span>
            </div>

            <div className={styles.cadencePill}>
              <span>CADENCE // 13x VELOCITY</span>
            </div>

            <div className={styles.activePillLabel}>
              <span className={styles.activeDot} style={{ background: CAPABILITIES[activeIdx].color }} />
              <span>{CAPABILITIES[activeIdx].title.toUpperCase()}</span>
            </div>
          </div>

          {/* Timeline Ruler & Playhead */}
          <div className={styles.timelineRulerWrap}>
            <div className={styles.timelineTicks}>
              {["0s", "1s", "2s", "3s", "4s", "5s", "6s"].map((tick, i) => (
                <div key={i} className={styles.tickCol}>
                  <span className={styles.tickLine} />
                  <span className={styles.tickLabel}>{tick}</span>
                </div>
              ))}
            </div>

            {/* Glowing Scrubber Playhead */}
            <div
              className={styles.playhead}
              style={{ left: `${(timelineSec / 6.0) * 100}%` }}
            >
              <div className={styles.playheadHandle} style={{ background: CAPABILITIES[activeIdx].color }} />
              <div className={styles.playheadLine} style={{ background: CAPABILITIES[activeIdx].color }} />
            </div>
          </div>

          {/* Horizontal Squircle Capability Track */}
          <div className={styles.squircleTrack}>
            {CAPABILITIES.map((cap, i) => {
              const isActive = activeIdx === i;
              return (
                <div
                  key={cap.id}
                  className={`${styles.dockItem} ${isActive ? styles.dockItemActive : ""}`}
                  style={
                    {
                      "--item-color": cap.color,
                      "--item-glow": cap.glowColor,
                    } as React.CSSProperties
                  }
                  onClick={() => {
                    setActiveIdx(i);
                    setTimelineSec(i);
                  }}
                >
                  <div className={styles.dockItemGlass}>
                    <span className={styles.dockItemGloss} />
                    <div className={styles.dockItemIconWrap}>
                      {renderBadgeIcon(cap.iconType, cap.color)}
                    </div>
                  </div>
                  <span className={styles.dockItemTitle}>{cap.title}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── PART 03: Connected 3D Glass Capability Cards & Laser Circuit Line ── */}
        <div className={styles.waveSection}>
          <div className={styles.waveHeader}>
            <span className={styles.waveTag}>WHAT WE SOLVE // VALUE CREATION ARCHITECTURE</span>
            <h3 className={styles.waveTitle}>
              From ideas to monumental impact —<br />
              <span className={styles.waveTitleDim}>we engineer what comes next.</span>
            </h3>
          </div>

          {/* Glowing Laser Circuit Wave Line Background */}
          <div className={styles.circuitSvgWrap} aria-hidden="true">
            <svg
              className={styles.circuitSvg}
              viewBox="0 0 1200 240"
              fill="none"
              preserveAspectRatio="none"
            >
              <path
                d="M 20 120 C 180 30, 240 210, 400 120 C 560 30, 620 210, 780 120 C 940 30, 1020 190, 1180 120"
                stroke="rgba(255, 255, 255, 0.12)"
                strokeWidth="2"
                strokeDasharray="6 6"
              />
              <path
                d="M 20 120 C 180 30, 240 210, 400 120 C 560 30, 620 210, 780 120 C 940 30, 1020 190, 1180 120"
                stroke="url(#laserGrad)"
                strokeWidth="2.5"
              />
              <defs>
                <linearGradient id="laserGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#10b981" stopOpacity="0.8" />
                  <stop offset="20%" stopColor="#f97316" stopOpacity="0.8" />
                  <stop offset="40%" stopColor="#3b82f6" stopOpacity="0.8" />
                  <stop offset="60%" stopColor="#a855f7" stopOpacity="0.8" />
                  <stop offset="80%" stopColor="#e2e8f0" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#ef4444" stopOpacity="0.8" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* 6 Undulating Glass Squircle Cards */}
          <div className={styles.cardsGrid}>
            {CAPABILITIES.map((cap, i) => (
              <div
                key={cap.id}
                className={styles.cardItem}
                style={
                  {
                    "--card-color": cap.color,
                    "--card-glow": cap.glowColor,
                  } as React.CSSProperties
                }
              >
                <div className={styles.cardGlassBody}>
                  {/* Glowing Rim Light */}
                  <div className={styles.cardRimGlow} />
                  <div className={styles.cardGlossHighlight} />

                  <div className={styles.cardTopRow}>
                    <span className={styles.cardNum}>{cap.num}</span>
                    <div className={styles.cardBadgeSmall}>
                      {renderBadgeIcon(cap.iconType, cap.color)}
                    </div>
                  </div>

                  <h4 className={styles.cardHeading}>{cap.title}</h4>
                  <p className={styles.cardDesc}>{cap.desc}</p>

                  <div className={styles.cardFooter}>
                    <span className={styles.cardFooterTag}>CAPABILITY // {cap.verb}</span>
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
