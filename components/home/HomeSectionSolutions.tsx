"use client";

import { useState } from "react";
import Link from "next/link";
import { Solutions3DCanvas } from "./Solutions3DCanvas";
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
    title: "BRAND & CREATIVE",
    subhead: "Identity, Art Direction, Motion & Spatial Design",
    category: "BRANDING & CREATIVE",
    industryVs: "Generic brand refresh decks, stock templates, and visual systems that look like every other startup.",
    utopiaStandard: "Original brand strategy, custom identity systems, 3D art direction, and motion design built to own a category.",
    deliverables: [
      "Brand Strategy & Identity",
      "Creative Direction & Art Direction",
      "Brand Experience & Spatial Design",
      "UI/UX Design & Interaction Design",
      "CGI, Motion Graphics & Visual Content",
    ],
    techStack: [
      "Figma", "After Effects", "Blender", "Cinema 4D",
      "Spline", "Rive", "Adobe Creative Suite", "Midjourney",
      "Three.js", "GSAP", "Lottie", "WebGL",
    ],
    metricValue: "100%",
    metricLabel: "BESPOKE. ZERO TEMPLATES.",
    slug: "brand",
  },
  {
    index: "02",
    title: "DIGITAL PRODUCTS",
    subhead: "Web, Mobile, SaaS & Custom Software",
    category: "DIGITAL PRODUCTS",
    industryVs: "Offshore dev shops delivering disposable prototypes with no long-term architecture or product thinking.",
    utopiaStandard: "Full-stack product engineering from concept to launch. Web apps, mobile, SaaS, and custom software built to scale.",
    deliverables: [
      "Website & Web App Development",
      "Mobile App Development (iOS & Android)",
      "SaaS Development & Custom Software",
      "Product Engineering & MVP Development",
      "E-Commerce Solutions",
    ],
    techStack: [
      "Next.js", "React", "React Native", "TypeScript",
      "Node.js", "PostgreSQL", "Prisma", "Supabase",
      "Vercel", "Stripe", "Redis", "REST & GraphQL",
      "iOS / Swift", "Android / Kotlin", "Tailwind CSS",
    ],
    metricValue: "FULL-STACK",
    metricLabel: "FRONT TO BACK",
    slug: "products",
  },
  {
    index: "03",
    title: "AI & AUTOMATION",
    subhead: "AI Agents, Workflow Automation & Machine Learning",
    category: "AI & AUTOMATION",
    industryVs: "Shallow ChatGPT wrappers and disconnected SaaS tools that create more process debt than they solve.",
    utopiaStandard: "Custom AI agents, automated workflows, and machine learning solutions that reduce manual overhead and scale operations.",
    deliverables: [
      "AI Strategy & Consulting",
      "AI Agent Development",
      "Workflow & Business Process Automation",
      "Generative AI & Custom Model Integration",
      "AI Chatbots & Conversational Systems",
      "Machine Learning Solutions",
    ],
    techStack: [
      "OpenAI", "Anthropic Claude", "Google Gemini", "LangChain",
      "LangGraph", "LlamaIndex", "Python", "FastAPI",
      "Pinecone", "Weaviate", "Temporal.io", "n8n", "Make",
    ],
    metricValue: "OPERATIONAL",
    metricLabel: "NOT EXPERIMENTAL",
    slug: "ai",
  },
  {
    index: "04",
    title: "CLOUD & ENGINEERING",
    subhead: "Full-Stack Engineering, DevOps & Infrastructure",
    category: "CLOUD & ENGINEERING",
    industryVs: "Outdated monolithic stacks, brittle deployment pipelines, and infrastructure that can't handle real traffic.",
    utopiaStandard: "Modern full-stack engineering, cloud architecture, and DevOps pipelines designed for performance, reliability, and scale.",
    deliverables: [
      "Frontend & Backend Engineering",
      "Full Stack Engineering",
      "Cloud Architecture & Infrastructure",
      "DevOps, CI/CD & Automated Pipelines",
      "API Development & Microservices",
      "Legacy Modernization & Migration",
      "Infrastructure & Security",
    ],
    techStack: [
      "AWS", "Google Cloud (GCP)", "Azure", "Docker",
      "Kubernetes", "Terraform", "GitHub Actions", "Next.js",
      "Node.js", "Go", "TypeScript", "PostgreSQL", "MongoDB",
    ],
    metricValue: "BUILT TO SCALE",
    metricLabel: "NOT JUST LAUNCH",
    slug: "cloud",
  },
  {
    index: "05",
    title: "GROWTH & MARKETING",
    subhead: "SEO, Performance Marketing & Lead Generation",
    category: "GROWTH & MARKETING",
    industryVs: "Spray-and-pray ad spend, declining ROAS, and marketing that doesn't compound or build long-term brand equity.",
    utopiaStandard: "SEO architecture, paid acquisition, content strategy, and lead generation systems engineered to drive measurable pipeline.",
    deliverables: [
      "Search Engine Optimization (SEO)",
      "Performance Marketing & Paid Acquisition",
      "Social Media Marketing & Content Strategy",
      "Lead Generation & Pipeline Strategy",
      "Online Reputation Management",
      "Conversion Rate Optimization (CRO)",
    ],
    techStack: [
      "Google Ads", "Meta Ads", "LinkedIn Ads", "TikTok Ads",
      "Ahrefs", "SEMrush", "Screaming Frog", "Search Console",
      "PostHog", "Mixpanel", "GA4", "HubSpot", "Klaviyo",
    ],
    metricValue: "PIPELINE",
    metricLabel: "NOT JUST TRAFFIC",
    slug: "growth",
  },
];

export function HomeSectionSolutions() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleMouseEnter = (idx: number) => {
    setActiveIndex(idx);
  };

  const toggleAccordion = (idx: number) => {
    setActiveIndex((prev) => (prev === idx ? -1 : idx));
  };

  return (
    <section
      id="solutions"
      className={styles.solutionsSection}
      aria-label="03: Capability Architecture & What We Solve"
    >
      {/* 3D 13 Monolith Background Canvas */}
      <Solutions3DCanvas activeIndex={activeIndex} />

      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.headerBlock}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowNum}>CAPABILITIES</span>
            <span className={styles.eyebrowDot} />
            <span>WHAT WE DO</span>
          </div>

          <div className={styles.titleRow}>
            <h2 className={styles.mainTitle}>
              WHAT WE DO.
              <br />
              <span className={styles.titleHighlight}>
                BRAND, PRODUCT, GROWTH. FULLY INTEGRATED.
              </span>
            </h2>

            <p className={styles.leadText}>
              13 Utopia covers every layer of building a digital business: brand identity, digital products, AI systems, cloud infrastructure, and growth. Delivered as a unified engagement, not a patchwork of vendors.
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
                onMouseEnter={() => handleMouseEnter(idx)}
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
                        <div className={styles.boxTag}>THE COMMON APPROACH</div>
                        <p className={styles.boxText}>{solution.industryVs}</p>
                      </div>

                      <div className={styles.utopiaBox}>
                        <div className={styles.boxTagUtopia}>
                          WHAT WE DELIVER
                        </div>
                        <p className={styles.boxTextUtopia}>{solution.utopiaStandard}</p>
                      </div>
                    </div>

                    {/* Deliverables & Stack Row */}
                    <div className={styles.detailsRow}>
                      <div className={styles.deliverablesCol}>
                        <h4 className={styles.detailsHeading}>DELIVERABLES</h4>
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
                        <h4 className={styles.detailsHeading}>TECH STACK</h4>
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
                            <span>Start a Project</span>
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
              <span className={styles.telemetryLbl}>COMMISSIONS ACCEPTED ANNUALLY</span>
            </div>
            <div className={styles.telemetryDivider} />
            <div className={styles.telemetryCard}>
              <span className={styles.telemetryVal}>100%</span>
              <span className={styles.telemetryLbl}>CUSTOM CODE. ZERO TEMPLATES</span>
            </div>
            <div className={styles.telemetryDivider} />
            <div className={styles.telemetryCard}>
              <span className={styles.telemetryVal}>&lt; 48H</span>
              <span className={styles.telemetryLbl}>RESPONSE TO PROJECT INQUIRY</span>
            </div>
          </div>

          <div className={styles.footerActions}>
            <a href="mailto:contact@13utopia.com" className={styles.fullStackCta}>
              <span>Start a Project</span>
              <span className={styles.btnArrow}>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
