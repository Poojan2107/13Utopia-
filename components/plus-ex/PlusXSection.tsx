"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GradientBlindsCanvas } from "./GradientBlindsCanvas";
import styles from "@/styles/plus-ex/PlusXSection.module.css";

interface Mandate {
  num: string;
  keyword: string;
  tagline: string;
  desc: string;
  deliverables: string[];
  gradientStops: string[];
  angle: number;
}

const MANDATES: Mandate[] = [
  {
    num: "01",
    keyword: "LAUNCH",
    tagline: "Bring something new into the world.",
    desc: "From unproven concept to market-defining category leader. We handle brand architecture, digital product build, and go-to-market ignition.",
    deliverables: ["Brand Identity", "MVP / Web App", "Launch Film & GTM"],
    gradientStops: ["#000000", "#140e04", "#4a3510", "#a8782a", "#f3cf7a", "#fff8e0"],
    angle: -22,
  },
  {
    num: "02",
    keyword: "GROW",
    tagline: "Scale acquisition without proportional spend.",
    desc: "Systematic growth engineering combining technical SEO dominance, conversion rate optimization, and retention compounding.",
    deliverables: ["Organic SEO Dominance", "CRO Experiments", "Pipeline Systems"],
    gradientStops: ["#000000", "#0e130a", "#2b401c", "#6b9a47", "#b8ea8c", "#f3ffe0"],
    angle: 18,
  },
  {
    num: "03",
    keyword: "SCALE",
    tagline: "Infrastructure that never flinches under load.",
    desc: "Refactoring high-friction architectures into zero-latency cloud products ready for millions of concurrent interactions.",
    deliverables: ["Next.js & Edge Stack", "API Orchestration", "Database Sharding"],
    gradientStops: ["#000000", "#081018", "#1c3852", "#457da8", "#93cbf5", "#eaf5ff"],
    angle: -35,
  },
  {
    num: "04",
    keyword: "MODERNIZE",
    tagline: "Rescue your brand from the commodity trap.",
    desc: "Transforming legacy enterprise interfaces into tactile, unforgettable digital spaces that command premium valuation.",
    deliverables: ["Visual Rebrand", "Design System", "Modern Web Platform"],
    gradientStops: ["#000000", "#180c10", "#4d1d2e", "#a84869", "#f59db8", "#ffecf1"],
    angle: 25,
  },
  {
    num: "05",
    keyword: "AUTOMATE",
    tagline: "Eliminate operational drag with fine-tuned AI.",
    desc: "Custom autonomous agent swarms and intelligent workflows that handle complex operations around the clock with zero fatigue.",
    deliverables: ["Custom LLM Agents", "Workflow Synthesis", "Internal Automation"],
    gradientStops: ["#000000", "#12081c", "#371857", "#8541c9", "#cf9eff", "#f7f0ff"],
    angle: -15,
  },
  {
    num: "06",
    keyword: "TRANSFORM",
    tagline: "Redefine what your entire industry expects.",
    desc: "Radical repositioning and category creation for ambitious enterprises ready to leave legacy competitors completely behind.",
    deliverables: ["Category Creation", "Spatial UI Systems", "Full Venture Redesign"],
    gradientStops: ["#000000", "#181206", "#543c10", "#b88b28", "#ffd768", "#fffbe8"],
    angle: 30,
  },
];

const EASE = [0.16, 1, 0.3, 1] as const;

export function PlusXSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const current = MANDATES[activeIdx];

  return (
    <section
      className={styles.section}
      aria-label="Client Mandates & Transformation Outcomes"
      id="outcomes"
    >
      {/* Interactive WebGL Gradient Blinds Spotlight Shader */}
      <GradientBlindsCanvas
        gradientColors={current.gradientStops}
        angle={current.angle}
        noise={0.14}
        blindCount={12}
        blindMinWidth={55}
        mouseDampening={0.16}
        spotlightRadius={0.7}
        spotlightSoftness={1.15}
        spotlightOpacity={0.92}
        distortAmount={0.2}
        mixBlendMode="screen"
        className={styles.bgCanvas}
      />

      {/* 3D Plus Geometric Watermark */}
      <div className={styles.plusWatermark} aria-hidden="true">
        <svg viewBox="0 0 400 400" fill="none" className={styles.plusSvg}>
          <path
            d="M160 0H240V160H400V240H240V400H160V240H0V160H160V0Z"
            fill="url(#plusGrad)"
          />
          <defs>
            <linearGradient id="plusGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(232, 197, 106, 0.08)" />
              <stop offset="50%" stopColor="rgba(255, 255, 255, 0.02)" />
              <stop offset="100%" stopColor="rgba(0, 0, 0, 0)" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className={styles.stage}>
        {/* Section Header with Monumental Plus-X Typography */}
        <div className={styles.header}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: EASE }}
            className={styles.titleStack}
          >
            <h2 className={styles.monumentalTitle}>
              WHAT DO YOU NEED <br />
              <span className={styles.highlightText}>TO MAKE HAPPEN?</span>
            </h2>
            <p className={styles.subtitle}>
              Six transformation mandates. Hover or select to explore our architecture.
            </p>
          </motion.div>
        </div>

        {/* Main Plus-X Layout */}
        <div className={styles.layout}>
          {/* Left Column: Interactive Mandate Strip */}
          <div
            className={styles.strip}
            role="listbox"
            aria-label="Transformation Mandates"
          >
            {MANDATES.map((m, idx) => {
              const isActive = idx === activeIdx;
              return (
                <button
                  key={m.num}
                  type="button"
                  role="option"
                  aria-selected={isActive}
                  className={`${styles.mandateRow} ${isActive ? styles.mandateRowActive : ""}`}
                  onMouseEnter={() => setActiveIdx(idx)}
                  onClick={() => setActiveIdx(idx)}
                  onFocus={() => setActiveIdx(idx)}
                >
                  <span className={styles.rowNum}>{m.num}</span>
                  <div className={styles.rowNameWrap}>
                    <span className={styles.rowKeyword}>{m.keyword}</span>
                    <span className={styles.rowTagline}>{m.tagline}</span>
                  </div>
                  <span className={styles.rowArrow} aria-hidden="true">
                    {isActive ? "—" : "+"}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Column: Plus-X Active Detail Canvas */}
          <aside className={styles.detailRail} aria-live="polite">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.num}
                className={styles.detailCard}
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -16, scale: 0.98 }}
                transition={{ duration: 0.45, ease: EASE }}
              >
                {/* Ghost Background Numeral */}
                <span className={styles.ghostNum} aria-hidden="true">
                  {current.num}
                </span>

                <div className={styles.cardHeader}>
                  <span className={styles.cardBadge}>
                    MANDATE {current.num} // {current.keyword}
                  </span>
                  <h3 className={styles.cardTagline}>{current.tagline}</h3>
                </div>

                <p className={styles.cardDesc}>{current.desc}</p>

                <div className={styles.deliverablesSection}>
                  <p className={styles.delivHeading}>DELIVERABLES & SCOPE</p>
                  <div className={styles.delivGrid}>
                    {current.deliverables.map((item) => (
                      <div key={item} className={styles.delivPill}>
                        <span className={styles.delivDot} aria-hidden="true" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={styles.cardFooter}>
                  <a href="#contact" className={styles.ctaButton}>
                    <span>INITIATE THIS MANDATE</span>
                    <span className={styles.ctaArrow} aria-hidden="true">
                      →
                    </span>
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </aside>
        </div>
      </div>
    </section>
  );
}
