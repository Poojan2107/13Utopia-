"use client";

import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { ScrollReveal } from "@/components/motion";
import styles from "@/styles/home/ProcessOverview.module.css";

const STEPS = [
  { title: "Question", body: "Challenge the obvious." },
  { title: "Imagine", body: "Explore possibility." },
  { title: "Define", body: "Choose direction." },
  { title: "Create", body: "Give the idea form." },
  { title: "Build", body: "Make the idea real." },
  { title: "Grow", body: "Create momentum." },
];

export function ProcessOverview() {
  return (
    <Section ariaLabelledBy="process-title" className={styles.wrap}>
      <Container>
        <ScrollReveal>
          <div className={styles.head} data-reveal>
            <p className={styles.eyebrow}>Method</p>
            <h2 id="process-title" className={styles.heading}>
              How we think and work
            </h2>
            <p className={styles.sub}>A clear method — not a mysterious process.</p>
          </div>

          <ol className={styles.list}>
            {STEPS.map((step, index) => (
              <li key={step.title} className={styles.item} data-reveal>
                <span className={styles.num}>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className={styles.title}>{step.title}</h3>
                <p className={styles.body}>{step.body}</p>
              </li>
            ))}
          </ol>

          <Link href="/our-story/process" className={styles.link} data-reveal>
            Explore our process →
          </Link>
        </ScrollReveal>
      </Container>
    </Section>
  );
}
