"use client";

import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { ScrollReveal } from "@/components/motion";
import { getCapabilityCategories } from "@/lib/content";
import styles from "@/styles/home/CreateBuildGrow.module.css";

export function CreateBuildGrow() {
  const worlds = getCapabilityCategories().filter((c) =>
    ["create", "build", "grow"].includes(c.slug),
  );

  return (
    <Section id="worlds" ariaLabelledBy="cbg-title" className={styles.wrap}>
      <Container>
        <ScrollReveal>
          <div className={styles.head} data-reveal>
            <p className={styles.eyebrow}>What we do</p>
            <h2 id="cbg-title" className={styles.heading}>
              Three connected worlds.
            </h2>
            <p className={styles.sub}>
              Brand, technology, and growth as one practice — not three
              disconnected vendors.
            </p>
          </div>

          <ul className={styles.grid}>
            {worlds.map((world, i) => (
              <li key={world.slug} className={styles.card} data-reveal>
                <Link href={`/capabilities/${world.slug}`} className={styles.link}>
                  <span className={styles.index}>0{i + 1}</span>
                  <h3 className={styles.title}>{world.title}</h3>
                  <p className={styles.desc}>{world.description}</p>
                  <span className={styles.cta}>Explore {world.title} →</span>
                </Link>
              </li>
            ))}
          </ul>
        </ScrollReveal>
      </Container>
    </Section>
  );
}
