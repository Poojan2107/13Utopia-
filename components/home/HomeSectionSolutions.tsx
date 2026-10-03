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

const SOLUTIONS: CapabilityDomain[] = [
  {
    index: "01",
    title: "LAUNCH // CATEGORY GENESIS",
    subhead: "Go-To-Market, MVP to Scale & Brand Moat Creation",
    category: "BRANDING & CREATIVE // DIGITAL PRODUCTS",
    industryVs: "Generic corporate rebranding and passive PDF guidelines that collect dust while prototypes stall in development.",
    utopiaStandard: "Living typographic moats, custom WebGL flagships, and rapid MVP engineering designed to command 10x valuation multiples.",
    deliverables: [
      "Brand Strategy & Monolithic Identity",
      "MVP Development & Product Engineering",
      "UI/UX Design & Spatial Micro-Interactions",
      "CGI, Motion Graphics & Visual Content",
      "Go-To-Market & Lead Generation Funnels",
    ],
    techStack: ["Next.js 15", "WebGL / Three.js", "Figma Design Tokens", "TypeScript", "Tailored Kernels"],
    metricValue: "10X",
    metricLabel: "VALUATION MULTIPLIER",
    slug: "launch",
  },
  {
    index: "02",
    title: "SCALE // HYPERGROWTH ENGINES",
    subhead: "Algorithmic Acquisition, SEO Supremacy & Global Infrastructure",
    category: "GROWTH & MARKETING // CLOUD ARCHITECTURE",
    industryVs: "Intrusive popups, declining ad ROAS, and brittle server architectures that crash during traffic surges.",
    utopiaStandard: "Psychological conversion mechanics, programmatic SEO dominance, and distributed edge infrastructure with 99.99% uptime.",
    deliverables: [
      "Search Engine Optimization (SEO) Domination",
      "Performance Marketing & Paid Acquisition",
      "Social Media Marketing & Content Strategy",
      "Cloud Architecture & Global Edge Caching",
      "Online Reputation Management (ORM)",
    ],
    techStack: ["Edge SEO Engine", "Distributed Cloud", "PostHog Analytics", "Redis Edge", "Vercel Enterprise"],
    metricValue: "4.8X",
    metricLabel: "PIPELINE ACCELERATION",
    slug: "scale",
  },
  {
    index: "03",
    title: "AUTOMATE // AI & AUTONOMOUS SYSTEMS",
    subhead: "Intelligent Workflows, AI Agent Pipelines & Custom LLMs",
    category: "AI & AUTOMATION // INTELLIGENT OPS",
    industryVs: "Manual operational bottlenecks, disconnected SaaS tools, and shallow ChatGPT wrapper toys.",
    utopiaStandard: "Autonomous multi-agent pipelines, custom enterprise LLM orchestration, and self-healing business process automation.",
    deliverables: [
      "AI Strategy & Enterprise Consulting",
      "Autonomous AI Agent Development",
      "Generative AI & Bespoke Model Fine-Tuning",
      "End-to-End Workflow & Process Automation",
      "Intelligent Conversational Systems & Chatbots",
    ],
    techStack: ["LangChain", "Python / FastAPI", "OpenAI / Claude SDK", "Vector DB (Pinecone)", "Temporal.io"],
    metricValue: "70%",
    metricLabel: "OPEX REDUCTION",
    slug: "automate",
  },
  {
    index: "04",
    title: "MODERNIZE // SPATIAL & PLATFORM RE-ENGINEERING",
    subhead: "60FPS WebGL Flagships, Legacy Modernization & Zero Latency",
    category: "CLOUD & ENGINEERING // SPATIAL WORLDS",
    industryVs: "Outdated monolithic legacy stacks, sluggish 2D templates, and heavy page weights causing high bounce rates.",
    utopiaStandard: "Sub-millisecond frame-times, custom fragment shaders, and modern full-stack engineering that turn visitors into category converts.",
    deliverables: [
      "Frontend & Backend Full-Stack Engineering",
      "Legacy Codebase Modernization & Migration",
      "API Development & Microservice Mesh",
      "DevOps, CI/CD & Automated Deployment",
      "Infrastructure Security & Compliance",
    ],
    techStack: ["WebGPU / GLSL", "Rust / Wasm", "Docker / Kubernetes", "Next.js App Router", "PostgreSQL"],
    metricValue: "< 16MS",
    metricLabel: "RENDER FRAME-TIME",
    slug: "modernize",
  },
  {
    index: "05",
    title: "TRANSFORM // STRATEGY & CTO ADVISORY",
    subhead: "Enterprise Digital Transformation & Bespoke Co-Founding IP",
    category: "STRATEGY & CONSULTING // IP CREATION",
    industryVs: "Offshore dev shops that build disposable prototypes with zero strategic alignment or long-term equity moat.",
    utopiaStandard: "Hands-on engineering and architectural leadership from zero to Series A, co-building proprietary IP and technical moats.",
    deliverables: [
      "Digital Transformation & Tech Strategy",
      "Product Strategy & Innovation Consulting",
      "Interim CTO & Technical Leadership",
      "Core IP Prototyping & Due Diligence Prep",
      "Business Architecture & Venture Acceleration",
    ],
    techStack: ["System Architecture", "Security Auditing", "Scale Governance", "Cap Table Advisory"],
    metricValue: "13",
    metricLabel: "ANNUAL COMMISSIONS",
    slug: "transform",
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
      aria-label="03: Capability Architecture & What We Solve"
    >
      <div className={styles.ambientGlow} />
      <div className={styles.gridOverlay} />

      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.headerBlock}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowNum}>CHAPTER 03</span>
            <span className={styles.eyebrowDot} />
            <span>CAPABILITY ARCHITECTURE // WHAT WE SOLVE</span>
          </div>

          <div className={styles.titleRow}>
            <h2 className={styles.mainTitle}>
              WHAT WE SOLVE.
              <br />
              <span className={styles.titleHighlight}>
                FROM BLANK CANVAS TO CATEGORY DOMINANCE.
              </span>
            </h2>

            <p className={styles.leadText}>
              We do not provide piecemeal design or disjointed development. 13 Utopia architects end-to-end anomalies — integrating bespoke brand identity, real-time spatial computing, autonomous AI pipelines, and zero-latency infrastructure.
            </p>
          </div>
        </div>

        {/* Interactive Architectural Accordion */}
        <div className={styles.accordionContainer} role="region" aria-label="Solutions Matrix">
          {SOLUTIONS.map((solution, idx) => {
            const isOpen = activeIndex === idx;

            return (
              <div
                key={solution.index}
                className={`${styles.accordionItem} ${isOpen ? styles.itemActive : ""}`}
              >
                {/* Accordion Trigger Header */}
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className={styles.itemHeader}
                  aria-expanded={isOpen}
                  aria-controls={`solution-body-${solution.index}`}
                >
                  <div className={styles.indexCol}>
                    <span className={styles.indexNumber}>{solution.index}</span>
                    <span className={styles.indexCategory}>{solution.category}</span>
                  </div>

                  <div className={styles.titleCol}>
                    <h3 className={styles.domainTitle}>{solution.title}</h3>
                    <span className={styles.domainSubhead}>{solution.subhead}</span>
                  </div>

                  <div className={styles.metricCol}>
                    <span className={styles.metricVal}>{solution.metricValue}</span>
                    <span className={styles.metricLbl}>{solution.metricLabel}</span>
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
                  id={`solution-body-${solution.index}`}
                  className={`${styles.itemBody} ${isOpen ? styles.bodyOpen : styles.bodyClosed}`}
                >
                  <div className={styles.bodyInner}>
                    {/* Antithesis Comparison: The Industry vs. 13 Utopia */}
                    <div className={styles.comparisonGrid}>
                      <div className={styles.industryBox}>
                        <div className={styles.boxTag}>THE INDUSTRY CONVENTION</div>
                        <p className={styles.boxText}>{solution.industryVs}</p>
                      </div>

                      <div className={styles.utopiaBox}>
                        <div className={styles.boxTagUtopia}>
                          <span className={styles.utopiaDot} />
                          THE 13 UTOPIA STANDARD
                        </div>
                        <p className={styles.boxTextUtopia}>{solution.utopiaStandard}</p>
                      </div>
                    </div>

                    {/* Deliverables & Stack Row */}
                    <div className={styles.detailsRow}>
                      <div className={styles.deliverablesCol}>
                        <h4 className={styles.detailsHeading}>CORE DELIVERABLES</h4>
                        <ul className={styles.deliverablesList}>
                          {solution.deliverables.map((item, dIdx) => (
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
                          {solution.techStack.map((tech) => (
                            <span key={tech} className={styles.techBadge}>
                              {tech}
                            </span>
                          ))}
                        </div>

                        <div className={styles.actionWrap}>
                          <a
                            href="mailto:contact@13utopia.com?subject=Commission%20Inquiry"
                            className={styles.deepDiveLink}
                          >
                            <span>Initiate Commission</span>
                            <span className={styles.linkArrow}>↗</span>
                          </a>
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
            <a href="mailto:contact@13utopia.com" className={styles.fullStackCta}>
              <span>Discuss Your Vision With Our Architects</span>
              <span className={styles.btnArrow}>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
