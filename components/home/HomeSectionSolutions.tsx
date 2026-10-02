"use client";

import Link from "next/link";
import styles from "@/styles/home/HomeSectionSolutions.module.css";

const SOLUTIONS = [
  {
    index: "01",
    title: "CATEGORY DESIGN",
    category: "BRAND ARCHITECTURE & POSITIONING",
    description:
      "We define uncontested market space for ambitious founders. Transforming complex technical breakthroughs into iconic, commanding global brands.",
    metric: "10X VALUATION MULTIPLIER",
    slug: "category-design",
  },
  {
    index: "02",
    title: "SPATIAL WORLDS",
    category: "REAL-TIME WEBGL & CGI MOTION",
    description:
      "Full-bleed GPU-rendered architectures, interactive 3D flagships, and spatial storytelling that captivate audiences and eliminate bounce rates.",
    metric: "SUB-MILLISECOND FRAME-TIMES",
    slug: "spatial-worlds",
  },
  {
    index: "03",
    title: "ZERO-LATENCY APPS",
    category: "AI AGENTS & CLOUD PLATFORMS",
    description:
      "Full-stack computational systems built with React, Next.js, and autonomous AI pipelines. Engineered for infinite scalability and zero downtime.",
    metric: "99.99% ENTERPRISE UPTIME",
    slug: "zero-latency-apps",
  },
  {
    index: "04",
    title: "CONVERSION GRAVITY",
    category: "GROWTH ENGINES & SEO DOMINANCE",
    description:
      "Algorithmic funnel architecture, search dominance, and psychological conversion design engineered to turn passive traffic into high-value pipeline.",
    metric: "4.8X PIPELINE VELOCITY",
    slug: "conversion-gravity",
  },
  {
    index: "05",
    title: "VENTURE INCUBATION",
    category: "CTO ADVISORY & FULL-CYCLE DEV",
    description:
      "From blank canvas to Series A and global expansion. We co-build software, interface systems, and brand moats with venture-backed founders.",
    metric: "13 BESPOKE COMMISSIONS / YR",
    slug: "venture-incubation",
  },
];

export function HomeSectionSolutions() {
  return (
    <section
      id="solutions"
      className={styles.solutionsSection}
      aria-label="04: What We Solve — Transformative Capabilities"
    >
      <div className={styles.ambientBackdrop} />

      <div className={styles.container}>
        {/* Editorial Eyebrow & Header */}
        <div className={styles.headerBlock}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowNum}>04</span>
            <span className={styles.eyebrowDot} />
            <span>WHAT WE SOLVE // IMPACT DOMAINS</span>
          </div>

          <h2 className={styles.mainTitle}>
            SOLUTIONS ENGINEERED TO DEFY INDUSTRY CONVENTION.
          </h2>

          <p className={styles.leadText}>
            We combine high-concept brand alchemy with uncompromising full-stack software engineering to build anomalies that dominate categories.
          </p>
        </div>

        {/* The 5 Transformative Solution Rows */}
        <div className={styles.solutionsList}>
          {SOLUTIONS.map((item) => (
            <Link
              key={item.index}
              href={`/services#${item.slug}`}
              className={styles.solutionItem}
            >
              <div className={styles.itemIndex}>{item.index}</div>

              <div className={styles.itemTitleWrap}>
                <h3 className={styles.itemTitle}>{item.title}</h3>
                <span className={styles.itemCategory}>{item.category}</span>
              </div>

              <p className={styles.itemDesc}>{item.description}</p>

              <div className={styles.itemAction}>
                <span className={styles.actionPill}>
                  {item.metric} ↗
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Section Telemetry Footer */}
        <div className={styles.solutionsFooter}>
          <div className={styles.metricsBadge}>
            <div className={styles.metricBlock}>
              <span className={styles.metricValue}>13</span>
              <span className={styles.metricLabel}>ANNUAL COMMISSIONS</span>
            </div>
            <div className={styles.metricBlock}>
              <span className={styles.metricValue}>100%</span>
              <span className={styles.metricLabel}>BESPOKE CODEBASE</span>
            </div>
            <div className={styles.metricBlock}>
              <span className={styles.metricValue}>0</span>
              <span className={styles.metricLabel}>TEMPLATES OR COMPROMISES</span>
            </div>
          </div>

          <Link href="/services" className={styles.ctaLink}>
            Explore Capabilities & Stack ↗
          </Link>
        </div>
      </div>
    </section>
  );
}
