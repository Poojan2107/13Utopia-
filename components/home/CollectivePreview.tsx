"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "@/styles/home/CollectivePreview.module.css";

gsap.registerPlugin(ScrollTrigger);

/**
 * 08 — Collective / Story
 * Human bridge — typography-led until people content ships.
 */
export function CollectivePreview() {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      gsap.from(el.querySelectorAll("[data-rise]"), {
        opacity: 0,
        y: 28,
        duration: 0.85,
        stagger: 0.1,
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
      id="collective"
      className={styles.wrap}
      aria-labelledby="collective-title"
    >
      <div className={styles.atmosphere} aria-hidden="true" />
      <div className={styles.inner}>
        <header className={styles.head} data-rise>
          <div className={styles.marker}>
            <span className={styles.markerIndex}>08</span>
            <span className={styles.markerRule} aria-hidden="true" />
            <span className={styles.markerLabel}>People</span>
          </div>
          <h2 id="collective-title" className={styles.heading}>
            Built by people
            <br />
            who refuse default.
          </h2>
        </header>

        <div className={styles.split}>
          <p className={styles.body} data-rise>
            Creative, technology, and growth practitioners working as one
            collective — across India and Canada — to question the obvious and
            make ambitious work real.
          </p>
          <p className={styles.note} data-rise>
            India and Canada. Creative, technology, and growth — one practice
            across two continents.
          </p>
        </div>

        <div className={styles.actions} data-rise>
          <Link href="/collective" className={styles.primary}>
            Meet the Collective
            <span aria-hidden="true"> →</span>
          </Link>
          <Link href="/our-story" className={styles.secondary}>
            Our Story
          </Link>
        </div>
      </div>
    </section>
  );
}
