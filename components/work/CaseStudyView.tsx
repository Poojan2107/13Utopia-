"use client";

import Image from "next/image";
import Link from "next/link";
import type { CaseStudy } from "@/lib/content/types";
import { Breadcrumbs } from "@/components/ui";
import { PageReveal } from "@/components/motion/PageReveal";
import styles from "@/styles/work/CaseStudyView.module.css";

type Props = {
  item: CaseStudy;
  nextItem?: CaseStudy;
};

export function CaseStudyView({ item, nextItem }: Props) {
  return (
    <div className={styles.wrap}>
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { name: "Work", path: "/work" },
          { name: item.client, path: `/work/${item.slug}` },
        ]}
      />

      {/* Meta Bar */}
      <div className={styles.metaBar}>
        <div className={styles.metaItem}>
          <span className={styles.metaLabel}>Client</span>
          <span className={styles.metaValue}>{item.client}</span>
        </div>
        <div className={styles.metaItem}>
          <span className={styles.metaLabel}>Industry</span>
          <span className={styles.metaValue}>{item.industry}</span>
        </div>
        {item.year ? (
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>Timeline</span>
            <span className={styles.metaValue}>{item.year}</span>
          </div>
        ) : null}
        {item.liveUrl ? (
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>Platform URL</span>
            <a
              href={item.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.metaLink}
            >
              {item.liveUrl.replace("https://", "")} ↗
            </a>
          </div>
        ) : null}
      </div>

      {/* Browser Showcase Frame */}
      {item.image ? (
        <PageReveal>
          <div className={styles.browserWrapper} data-reveal>
            <div className={styles.browserFrame}>
              <div className={styles.browserTop}>
                <div className={styles.browserDots} aria-hidden="true">
                  <span className={styles.browserDot} />
                  <span className={styles.browserDot} />
                  <span className={styles.browserDot} />
                </div>
                <div className={styles.browserUrl}>
                  <svg
                    className={styles.browserUrlLock}
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
                  </svg>
                  <span>{item.liveUrl || `https://${item.slug}.13utopia.com`}</span>
                </div>
              </div>
              <div className={styles.browserImageWrap}>
                <Image
                  src={item.image}
                  alt={`${item.client} — ${item.title}`}
                  fill
                  priority
                  sizes="(max-width: 1280px) 100vw, 1200px"
                  className={styles.browserImage}
                />
              </div>
            </div>
          </div>
        </PageReveal>
      ) : null}

      {/* Verified Performance & Impact Metrics */}
      {item.stats && item.stats.length > 0 ? (
        <section className={styles.statsSection}>
          <div className={styles.statsHeader}>
            <p className={styles.statsKicker}>Commercial Impact</p>
            <h2 className={styles.statsHeading}>Measurable Outcomes</h2>
          </div>
          <div className={styles.statsGrid}>
            {item.stats.map((stat) => (
              <div key={stat.label} className={styles.statCard}>
                <p className={styles.statValue}>{stat.value}</p>
                <h3 className={styles.statLabel}>{stat.label}</h3>
                {stat.detail ? (
                  <p className={styles.statDetail}>{stat.detail}</p>
                ) : null}
              </div>
            ))}
          </div>
        </section>
      ) : null}

      {/* Deep Strategic Narrative */}
      <section className={styles.narrativeSection}>
        <div className={styles.narrativeGrid}>
          <div className={styles.narrativeBlock}>
            <span className={styles.narrativeTag}>The Friction</span>
            <h3 className={styles.narrativeTitle}>The Challenge</h3>
            <p className={styles.narrativeBody}>{item.challenge}</p>
          </div>

          <div className={styles.narrativeBlock}>
            <span className={styles.narrativeTag}>The Strategy</span>
            <h3 className={styles.narrativeTitle}>The Insight & Move</h3>
            <p className={styles.narrativeBody}>{item.insight}</p>
            <p className={styles.narrativeBody}>{item.move}</p>
          </div>

          <div className={styles.narrativeBlock}>
            <span className={styles.narrativeTag}>The Architecture</span>
            <h3 className={styles.narrativeTitle}>The Systems Built</h3>
            <p className={styles.narrativeBody}>{item.build}</p>
            <p className={styles.narrativeBody}>{item.result}</p>
          </div>
        </div>
      </section>

      {/* Core Deliverables Grid */}
      {item.deliverables && item.deliverables.length > 0 ? (
        <section className={styles.deliverablesSection}>
          <p className={styles.statsKicker}>Deliverables</p>
          <h2 className={styles.statsHeading}>What Was Shipped</h2>
          <div className={styles.deliverablesGrid}>
            {item.deliverables.map((deliv, i) => (
              <div key={deliv.title} className={styles.deliverableCard}>
                <p className={styles.deliverableNum}>
                  DELIVERABLE {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className={styles.deliverableTitle}>{deliv.title}</h3>
                <p className={styles.deliverableDesc}>{deliv.description}</p>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      {/* Verified Client Testimonial */}
      {item.testimonial ? (
        <section className={styles.testimonialCard}>
          <div className={styles.testimonialQuoteGlyph} aria-hidden="true">
            “
          </div>
          <blockquote className={styles.testimonialText}>
            {item.testimonial.quote}
          </blockquote>
          <footer className={styles.testimonialFooter}>
            <div className={styles.testimonialAuthor}>
              <span className={styles.testimonialName}>
                {item.testimonial.author}
              </span>
              <span className={styles.testimonialRole}>
                {item.testimonial.role}
              </span>
            </div>
            <span className={styles.verifiedBadge}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
              </svg>
              Verified Client Review
            </span>
          </footer>
        </section>
      ) : null}

      {/* Tech Stack Architecture */}
      {item.stack && item.stack.length > 0 ? (
        <section className={styles.stackSection}>
          <p className={styles.statsKicker}>Architecture</p>
          <h2 className={styles.statsHeading}>Technologies Used</h2>
          <div className={styles.stackPills}>
            {item.stack.map((tech) => (
              <span key={tech} className={styles.stackPill}>
                {tech}
              </span>
            ))}
          </div>
        </section>
      ) : null}

      {/* Next Case Study Exploration Card */}
      {nextItem ? (
        <section className={styles.nextCaseSection}>
          <Link href={`/work/${nextItem.slug}`} className={styles.nextCaseCard}>
            <div>
              <p className={styles.nextCaseLabel}>Next Case Story</p>
              <h3 className={styles.nextCaseTitle}>
                {nextItem.client} — {nextItem.title}
              </h3>
            </div>
            <span className={styles.nextCaseArrow} aria-hidden="true">
              →
            </span>
          </Link>
        </section>
      ) : null}
    </div>
  );
}
