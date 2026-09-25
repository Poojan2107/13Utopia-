"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "@/styles/home/FeaturedWork.module.css";

gsap.registerPlugin(ScrollTrigger);

const STORIES = [
  {
    world: "Create",
    index: "01",
    title: "How a business is seen before it is sold.",
    body: "Identity, narrative, and experience for a category challenger — the work that makes ambition legible.",
    href: "/work",
  },
  {
    world: "Build",
    index: "02",
    title: "A product that had to work on day one.",
    body: "Systems, interfaces, and infrastructure designed for use — not for a launch party.",
    href: "/work",
  },
] as const;

/**
 * 04 — Proof
 * Narrative frames until verified cases replace them.
 */
export function FeaturedWork() {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      gsap.from(el.querySelectorAll("[data-reveal]"), {
        opacity: 0,
        y: 36,
        duration: 0.85,
        stagger: 0.14,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 78%",
          once: true,
        },
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={ref}
      id="proof"
      className={styles.wrap}
      aria-labelledby="work-title"
    >
      <div className={styles.inner}>
        <header className={styles.marker} data-reveal>
          <span className={styles.index}>04</span>
          <span className={styles.markerRule} aria-hidden="true" />
          <span className={styles.markerLabel}>Proof</span>
        </header>

        <div className={styles.head} data-reveal>
          <h2 id="work-title" className={styles.heading}>
            Selected proof.
          </h2>
          <p className={styles.lede}>
            Narrative frames from the practice. Verified case stories replace
            these as they land.
          </p>
        </div>

        <ul className={styles.list}>
          {STORIES.map((story) => (
            <li key={story.index} className={styles.item} data-reveal>
              <Link href={story.href} className={styles.row}>
                <div className={styles.meta}>
                  <span className={styles.world}>{story.world}</span>
                  <span className={styles.num}>{story.index}</span>
                </div>
                <div className={styles.copy}>
                  <h3 className={styles.title}>{story.title}</h3>
                  <p className={styles.body}>{story.body}</p>
                </div>
                <span className={styles.arrow} aria-hidden="true">
                  →
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <Link href="/work" className={styles.all} data-reveal>
          View all work
          <span aria-hidden="true"> →</span>
        </Link>
      </div>
    </section>
  );
}
