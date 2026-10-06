"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "@/styles/home/HomeSectionSolutions.module.css";

interface DisciplineSpec {
  index: string;
  discipline: string;
  role: string;
  scope: string;
  metric: string;
  metricLabel: string;
  href: string;
}

const DISCIPLINES: DisciplineSpec[] = [
  {
    index: "01",
    discipline: "CREATE",
    role: "Brand Architecture & Spatial Design",
    scope: "Visual Identity · Photorealistic 3D CGI · Cinematic Motion · Design Systems",
    metric: "100%",
    metricLabel: "Bespoke Artifacts",
    href: "/services",
  },
  {
    index: "02",
    discipline: "BUILD",
    role: "Full-Stack Software & WebGL",
    scope: "Next.js & WebGL · Autonomous AI Agents · Distributed Cloud · Custom APIs",
    metric: "< 500ms",
    metricLabel: "Execution Velocity",
    href: "/services",
  },
  {
    index: "03",
    discipline: "GROW",
    role: "Compounding Growth & Retention",
    scope: "Technical SEO · Programmatic Search · Paid Acquisition · Lifecycle Engines",
    metric: "PERMANENT",
    metricLabel: "Commercial Moat",
    href: "/services",
  },
];

/**
 * HomeSectionSolutions — Chapter 03 (Capabilities)
 * Minimal, Creative & Unique:
 * Architectural Monolith Discipline Matrix (Non-Video).
 * Clean, high-impact typographic rows with interactive titanium light tracings,
 * generous luxury whitespace, and seamless bridging into the 3D Work Showcase.
 */
export function HomeSectionSolutions() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section
      className={styles.section}
      id="capabilities"
      aria-label="Capabilities Architecture"
    >
      {/* ── Top Header Rail ── */}
      <div className={styles.topBar}>
        <div className={styles.headerLeft}>
          <span className={styles.pulseDot} />
          <span className={styles.chapterTag}>CHAPTER 03 // CAPABILITIES</span>
        </div>
        <div className={styles.headerRight}>
          <span className={styles.categoryTag}>DISCIPLINES &amp; SYSTEMS</span>
        </div>
      </div>

      {/* ── Main Architectural Intro ── */}
      <div className={styles.introBlock}>
        <h2 className={styles.introTitle}>
          THREE INTERCONNECTED DISCIPLINES.
        </h2>
        <p className={styles.introDesc}>
          We unify brand identity, high-performance software engineering, and programmatic acquisition into a single sovereign execution pipeline.
        </p>
      </div>

      {/* ── Monumental Discipline Rows ── */}
      <div className={styles.disciplineList}>
        {DISCIPLINES.map((item, idx) => {
          const isHovered = hoveredIdx === idx;
          const isAnyHovered = hoveredIdx !== null;

          return (
            <Link
              key={item.index}
              href={item.href}
              className={`${styles.disciplineRow} ${
                isHovered ? styles.rowActive : ""
              } ${isAnyHovered && !isHovered ? styles.rowDimmed : ""}`}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              data-cursor="hover"
            >
              {/* Hairline Divider with Active Glow */}
              <div className={styles.rowDivider} />

              <div className={styles.rowInner}>
                {/* Index Number */}
                <span className={styles.rowIndex}>{item.index}</span>

                {/* Primary Discipline Title */}
                <div className={styles.titleColumn}>
                  <h3 className={styles.disciplineName}>{item.discipline}</h3>
                  <span className={styles.roleText}>{item.role}</span>
                </div>

                {/* Scope & Capabilities List */}
                <div className={styles.scopeColumn}>
                  <p className={styles.scopeText}>{item.scope}</p>
                </div>

                {/* Metric Pillar */}
                <div className={styles.metricColumn}>
                  <span className={styles.metricVal}>{item.metric}</span>
                  <span className={styles.metricLbl}>{item.metricLabel}</span>
                </div>

                {/* Interactive Arrow Indicator */}
                <div className={styles.actionColumn}>
                  <span className={styles.arrowIcon} aria-hidden="true">→</span>
                </div>
              </div>
            </Link>
          );
        })}
        {/* Bottom Hairline */}
        <div className={styles.rowDivider} />
      </div>
    </section>
  );
}
