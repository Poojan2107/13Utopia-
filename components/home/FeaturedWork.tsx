"use client";

import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { ScrollReveal } from "@/components/motion";
import { getFeaturedCaseStudies } from "@/lib/content";
import styles from "@/styles/home/FeaturedWork.module.css";

export function FeaturedWork() {
  const cases = getFeaturedCaseStudies();

  return (
    <Section ariaLabelledBy="work-title" className={styles.wrap}>
      <Container>
        <ScrollReveal>
          <div className={styles.head} data-reveal>
            <p className={styles.eyebrow}>Work</p>
            <h2 id="work-title" className={styles.heading}>
              Selected case stories
            </h2>
            <p className={styles.sub}>
              Narrative proof — context, challenge, insight, build, and result.
              <span className={styles.note}> Sample entries for review.</span>
            </p>
          </div>

          <ul className={styles.list}>
            {cases.map((item, i) => (
              <li key={item.slug} data-reveal>
                <Link href={`/work/${item.slug}`} className={styles.row}>
                  <span className={styles.index}>0{i + 1}</span>
                  <div className={styles.copy}>
                    <p className={styles.meta}>
                      {item.client.includes("CONTENT")
                        ? "Sample client"
                        : item.client}
                    </p>
                    <h3 className={styles.title}>
                      {item.title.includes("CONTENT")
                        ? `Featured ${i === 0 ? "Create" : "Build"} engagement`
                        : item.title}
                    </h3>
                    <p className={styles.summary}>
                      {item.summary.includes("CONTENT")
                        ? "Placeholder case narrative for team review — replace with verified outcomes."
                        : item.summary}
                    </p>
                  </div>
                  <span className={styles.arrow} aria-hidden="true">
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <Link href="/work" className={styles.all} data-reveal>
            View all work →
          </Link>
        </ScrollReveal>
      </Container>
    </Section>
  );
}
