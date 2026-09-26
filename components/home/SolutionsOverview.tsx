"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { getSolutions } from "@/lib/content";
import styles from "@/styles/home/SolutionsOverview.module.css";

gsap.registerPlugin(ScrollTrigger);

/**
 * 05 — Outcomes
 * Client lens: what are you trying to make happen?
 */
export function SolutionsOverview() {
  const ref = useRef<HTMLElement | null>(null);
  const solutions = getSolutions();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      gsap.from(el.querySelectorAll("[data-rise]"), {
        opacity: 0,
        y: 32,
        duration: 0.85,
        stagger: 0.06,
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
      id="outcomes"
      className={styles.wrap}
      aria-labelledby="solutions-title"
    >
      <div className={styles.atmosphere} aria-hidden="true" />
      <div className={styles.inner}>
        <header className={styles.head} data-rise>
          <div className={styles.marker}>
            <span className={styles.markerIndex}>05</span>
            <span className={styles.markerRule} aria-hidden="true" />
            <span className={styles.markerLabel}>Outcomes</span>
          </div>
          <h2 id="solutions-title" className={styles.heading}>
            What are you trying
            <br />
            to make happen?
          </h2>
          <p className={styles.lede}>
            Outcomes first — then the Create, Build, and Grow work that makes them real.
          </p>
        </header>

        <ul className={styles.grid}>
          {solutions.map((s, i) => (
            <li key={s.slug} className={styles.item} data-rise>
              <Link href={`/solutions/${s.slug}`} className={styles.link}>
                <span className={styles.num}>{String(i + 1).padStart(2, "0")}</span>
                <h3 className={styles.title}>{s.title}</h3>
                <p className={styles.body}>{s.description}</p>
              </Link>
            </li>
          ))}
        </ul>

        <Link href="/solutions" className={styles.all} data-rise>
          All solutions
          <span aria-hidden="true"> →</span>
        </Link>
      </div>
    </section>
  );
}
