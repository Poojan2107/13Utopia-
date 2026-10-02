"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "@/styles/home/HomeSectionSolutions.module.css";

interface CapabilityDomain {
  index: string;
  title: string;
  subhead: string;
  category: string;
  industryVs: string;
  utopiaStandard: string;
  deliverables: string[];
  techStack: string[];
  metricValue: string;
  metricLabel: string;
  slug: string;
}

const DOMAINS: CapabilityDomain[] = [
  {
    index: "01",
    title: "CATEGORY DESIGN & BRAND ALCHEMY",
    subhead: "Monolithic Identity & Uncontested Market Positioning",
    category: "BRAND ARCHITECTURE // POSITIONING",
    industryVs: "Generic corporate rebranding and passive PDF guidelines that collect dust.",
    utopiaStandard: "Living typographic moats, custom type foundries, and defiant spatial aesthetics engineered to command 10x valuation multiples.",
    deliverables: [
      "Bespoke Typography & Foundry",
      "Living Design System Tokens",
      "Spatial Brand Architecture",
      "Sonic & Haptic Identity",
      "Executive Category Thesis",
    ],
    techStack: ["Glyphs 3", "Figma Tokens", "WebGL Kernels", "Motion Engine"],
    metricValue: "10X",
    metricLabel: "VALUATION MULTIPLIER",
    slug: "category-design",
  },
  {
    index: "02",
    title: "SPATIAL WORLDS & REAL-TIME WEBGL",
    subhead: "60FPS GPU-Rendered Digital Flagships",
    category: "CREATIVE COMPUTING // SHADERS",
    industryVs: "Flat 2D templates, heavy page weights, and 65% mobile bounce rates.",
    utopiaStandard: "Sub-millisecond frame-times, custom fragment shaders, and tactile 3D kinematics that turn passive visitors into loyal category converts.",
    deliverables: [
      "Real-Time WebGL & WebGPU Flagships",
      "Custom GLSL Fragment Shaders",
      "Kinematic Monolith Rigging",
      "GPU Physics & Particle Fields",
      "Interactive 3D Product Demos",
    ],
    techStack: ["Three.js", "WebGPU", "GLSL Shaders", "WebAssembly", "Lenis Scroll"],
    metricValue: "< 16MS",
    metricLabel: "RENDER FRAME-TIME",
    slug: "spatial-worlds",
  },
  {
    index: "03",
    title: "ZERO-LATENCY SYSTEMS & CLOUD APPS",
    subhead: "Autonomous AI Infrastructure & Distributed Platforms",
    category: "FULL-STACK // DISTRIBUTED COMPUTE",
    industryVs: "Fragile agency codebases laden with technical debt and brittle third-party plugins.",
    utopiaStandard: "Enterprise-grade distributed architectures with sub-50ms edge execution, autonomous agent pipelines, and 99.99% uptime guarantees.",
    deliverables: [
      "Full-Stack Next.js 15 Architectures",
      "Autonomous Agent & LLM Pipelines",
      "Sub-50ms Edge Cache & Compute",
      "Zero-Trust Security Microservices",
      "Real-Time Multiplayer State Sync",
    ],
    techStack: ["Next.js 15", "TypeScript", "Rust / Wasm", "Redis Edge", "Postgres"],
    metricValue: "99.99%",
    metricLabel: "ENTERPRISE UPTIME",
    slug: "zero-latency-apps",
  },
  {
    index: "04",
    title: "CONVERSION GRAVITY & GROWTH ENGINES",
    subhead: "Algorithmic Funnels & Defiant Market Expansion",
    category: "GROWTH ARCHITECTURE // SEO",
    industryVs: "Intrusive popups, declining ad ROAS, and zero organic search authority.",
    utopiaStandard: "Psychological conversion mechanics, programmatic SEO dominance, and high-retention onboarding loops that turn traffic into high-value pipeline.",
    deliverables: [
      "Algorithmic Funnel Architecture",
      "Programmatic SEO Graph Networks",
      "Sub-Second Checkout Workflows",
      "Behavioral Conversion Tracking",
      "Dynamic Content Personalization",
    ],
    techStack: ["Edge SEO", "Next.js ISR", "PostHog", "Vercel Analytics", "A/B Kernel"],
    metricValue: "4.8X",
    metricLabel: "PIPELINE ACCELERATION",
    slug: "conversion-gravity",
  },
  {
    index: "05",
    title: "VENTURE INCUBATION & CTO ADVISORY",
    subhead: "Bespoke Co-Founding & Technical Moat Construction",
    category: "CTO ADVISORY // IP CREATION",
    industryVs: "Offshore dev shops that build throwaway prototypes with zero equity alignment.",
    utopiaStandard: "Hands-on engineering leadership from seed to Series A, co-building proprietary IP, recruiting elite talent, and navigating technical due diligence.",
    deliverables: [
      "Interim CTO & Technical Leadership",
      "Core IP & Patent Prototyping",
      "Venture Capital Due Diligence Prep",
      "Architecture Roadmapping",
      "Founding Engineering Team Hiring",
    ],
    techStack: ["System Architecture", "Security Auditing", "Scale Governance", "Cap Table Advisory"],
    metricValue: "13",
    metricLabel: "ANNUAL COMMISSIONS",
    slug: "venture-incubation",
  },
];

export function HomeSectionSolutions() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const toggleAccordion = (idx: number) => {
    setActiveIndex(activeIndex === idx ? -1 : idx);
  };

  return (
    <section
      id="solutions"
      className={styles.solutionsSection}
      aria-label="04: Capability Architecture & Impact Domains"
    >
      <div className={styles.ambientGlow} />
      <div className={styles.gridOverlay} />

      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.headerBlock}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowNum}>04</span>
            <span className={styles.eyebrowDot} />
            <span>CAPABILITY ARCHITECTURE // 5 CORE DISCIPLINES</span>
          </div>

          <div className={styles.titleRow}>
            <h2 className={styles.mainTitle}>
              WHERE WE INTERVENE.
              <br />
              <span className={styles.titleHighlight}>
                FROM BLANK CANVAS TO CATEGORY DOMINANCE.
              </span>
            </h2>

            <p className={styles.leadText}>
              We do not provide piecemeal design or disjointed engineering. We architect end-to-end anomalies — integrating bespoke brand identity, real-time spatial computing, and zero-latency infrastructure.
            </p>
          </div>
        </div>

        {/* Interactive Architectural Accordion */}
        <div className={styles.accordionContainer} role="region" aria-label="Capabilities Matrix">
          {DOMAINS.map((domain, idx) => {
            const isOpen = activeIndex === idx;

            return (
              <div
                key={domain.index}
                className={`${styles.accordionItem} ${isOpen ? styles.itemActive : ""}`}
              >
                {/* Accordion Trigger Header */}
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className={styles.itemHeader}
                  aria-expanded={isOpen}
                  aria-controls={`domain-body-${domain.index}`}
                >
                  <div className={styles.indexCol}>
                    <span className={styles.indexNumber}>{domain.index}</span>
                    <span className={styles.indexCategory}>{domain.category}</span>
                  </div>

                  <div className={styles.titleCol}>
                    <h3 className={styles.domainTitle}>{domain.title}</h3>
                    <span className={styles.domainSubhead}>{domain.subhead}</span>
                  </div>

                  <div className={styles.metricCol}>
                    <span className={styles.metricVal}>{domain.metricValue}</span>
                    <span className={styles.metricLbl}>{domain.metricLabel}</span>
                  </div>

                  <div className={styles.toggleCol}>
                    <div className={`${styles.toggleIcon} ${isOpen ? styles.toggleOpen : ""}`}>
                      <span className={styles.iconLineHorizontal} />
                      <span className={styles.iconLineVertical} />
                    </div>
                  </div>
                </button>

                {/* Accordion Expandable Body */}
                <div
                  id={`domain-body-${domain.index}`}
                  className={`${styles.itemBody} ${isOpen ? styles.bodyOpen : styles.bodyClosed}`}
                >
                  <div className={styles.bodyInner}>
                    {/* Antithesis Comparison: The Industry vs. 13 Utopia */}
                    <div className={styles.comparisonGrid}>
                      <div className={styles.industryBox}>
                        <div className={styles.boxTag}>THE INDUSTRY CONVENTION</div>
                        <p className={styles.boxText}>{domain.industryVs}</p>
                      </div>

                      <div className={styles.utopiaBox}>
                        <div className={styles.boxTagUtopia}>
                          <span className={styles.utopiaDot} />
                          THE 13 UTOPIA STANDARD
                        </div>
                        <p className={styles.boxTextUtopia}>{domain.utopiaStandard}</p>
                      </div>
                    </div>

                    {/* Deliverables & Stack Row */}
                    <div className={styles.detailsRow}>
                      <div className={styles.deliverablesCol}>
                        <h4 className={styles.detailsHeading}>CORE DELIVERABLES</h4>
                        <ul className={styles.deliverablesList}>
                          {domain.deliverables.map((item, dIdx) => (
                            <li key={dIdx} className={styles.deliverableItem}>
                              <span className={styles.bulletSymbol}>✦</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className={styles.techCol}>
                        <h4 className={styles.detailsHeading}>SIGNATURE STACK</h4>
                        <div className={styles.techPills}>
                          {domain.techStack.map((tech) => (
                            <span key={tech} className={styles.techBadge}>
                              {tech}
                            </span>
                          ))}
                        </div>

                        <div className={styles.actionWrap}>
                          <Link
                            href={`/services#${domain.slug}`}
                            className={styles.deepDiveLink}
                          >
                            <span>Explore Capability Specifications</span>
                            <span className={styles.linkArrow}>↗</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Section Bottom Telemetry & Navigation */}
        <div className={styles.solutionsFooter}>
          <div className={styles.footerTelemetry}>
            <div className={styles.telemetryCard}>
              <span className={styles.telemetryVal}>13</span>
              <span className={styles.telemetryLbl}>ANNUAL COMMISSIONS WORLDWIDE</span>
            </div>
            <div className={styles.telemetryDivider} />
            <div className={styles.telemetryCard}>
              <span className={styles.telemetryVal}>100%</span>
              <span className={styles.telemetryLbl}>BESPOKE CODEBASES // ZERO TEMPLATES</span>
            </div>
            <div className={styles.telemetryDivider} />
            <div className={styles.telemetryCard}>
              <span className={styles.telemetryVal}>&lt; 48H</span>
              <span className={styles.telemetryLbl}>FOUNDER COMMISSION PROTOCOL</span>
            </div>
          </div>

          <div className={styles.footerActions}>
            <Link href="/services" className={styles.fullStackCta}>
              <span>View Full Technical Stack & Capabilities</span>
              <span className={styles.btnArrow}>→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
