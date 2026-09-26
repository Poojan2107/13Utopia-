"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { getPerspectiveArticles } from "@/lib/content";
import styles from "@/styles/home/PerspectivePreview.module.css";

gsap.registerPlugin(ScrollTrigger);

/**
 * 07 — Perspective
 * Thinking preview — authority, not a blog dump.
 */
export function PerspectivePreview() {
  const ref = useRef<HTMLElement | null>(null);
  const articles = getPerspectiveArticles().slice(0, 3);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      gsap.from(el.querySelectorAll("[data-rise]"), {
        opacity: 0,
        y: 28,
        duration: 0.8,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 72%",
          once: true,
        },
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={ref}
      id="perspective"
      className={styles.wrap}
      aria-labelledby="perspective-title"
    >
      <div className={styles.inner}>
        <header className={styles.head} data-rise>
          <div className={styles.marker}>
            <span className={styles.markerIndex}>07</span>
            <span className={styles.markerRule} aria-hidden="true" />
            <span className={styles.markerLabel}>Perspective</span>
          </div>
          <h2 id="perspective-title" className={styles.heading}>
            We think
            <br />
            before we ship.
          </h2>
          <p className={styles.lede}>
            Editorial notes on brand, product, technology, and growth — where the
            intersections matter.
          </p>
        </header>

        <ul className={styles.list}>
          {articles.map((a) => (
            <li key={a.slug} className={styles.item} data-rise>
              <Link href={`/perspective/${a.slug}`} className={styles.link}>
                <span className={styles.meta}>
                  <span>{a.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{a.readingTime}</span>
                </span>
                <h3 className={styles.title}>{a.title}</h3>
                <p className={styles.excerpt}>{a.excerpt}</p>
              </Link>
            </li>
          ))}
        </ul>

        <Link href="/perspective" className={styles.all} data-rise>
          Explore Perspective
          <span aria-hidden="true"> →</span>
        </Link>
      </div>
    </section>
  );
}
