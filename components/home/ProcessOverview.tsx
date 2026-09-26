"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "@/styles/home/ProcessOverview.module.css";

gsap.registerPlugin(ScrollTrigger);

const STEPS = [
  {
    num: "01",
    title: "Question",
    body: "Challenge the obvious. Find what is assumed — and what is broken.",
  },
  {
    num: "02",
    title: "Imagine",
    body: "Explore possibility beyond the familiar brief.",
  },
  {
    num: "03",
    title: "Define",
    body: "Choose direction with conviction. Ambition without a decision is noise.",
  },
  {
    num: "04",
    title: "Create",
    body: "Give the idea form — brand, experience, language people can feel.",
  },
  {
    num: "05",
    title: "Build",
    body: "Make the idea real. Systems, products, and technology that hold.",
  },
  {
    num: "06",
    title: "Grow",
    body: "Create momentum. Attention into demand into durable market.",
  },
] as const;

/**
 * 06 — Method
 * Vertical process rail — not a sticky scrub (Worlds owns that pattern).
 */
export function ProcessOverview() {
  const wrapRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      const spine = wrap.querySelector(`.${styles.spineFill}`);
      const steps = wrap.querySelectorAll("[data-step]");

      gsap.set(steps, { opacity: 0, x: -18 });

      gsap.to(steps, {
        opacity: 1,
        x: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: wrap.querySelector(`.${styles.rail}`),
          start: "top 70%",
          once: true,
        },
      });

      if (spine) {
        gsap.fromTo(
          spine,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: wrap.querySelector(`.${styles.rail}`),
              start: "top 65%",
              end: "bottom 35%",
              scrub: true,
            },
          },
        );
      }
    }, wrap);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={wrapRef}
      id="method"
      className={styles.wrap}
      aria-labelledby="process-title"
    >
      <div className={styles.inner}>
        <header className={styles.head}>
          <div className={styles.marker}>
            <span className={styles.markerIndex}>06</span>
            <span className={styles.markerRule} aria-hidden="true" />
            <span className={styles.markerLabel}>Method</span>
          </div>
          <h2 id="process-title" className={styles.heading}>
            How we think.
          </h2>
          <p className={styles.lede}>
            A sequence, not a slide deck — six moves from challenge to momentum.
          </p>
        </header>

        <div className={styles.rail}>
          <div className={styles.spine} aria-hidden="true">
            <span className={styles.spineFill} />
          </div>

          <ol className={styles.steps}>
            {STEPS.map((s) => (
              <li key={s.num} className={styles.step} data-step>
                <span className={styles.stepNum}>{s.num}</span>
                <div className={styles.stepCopy}>
                  <h3 className={styles.stepTitle}>{s.title}</h3>
                  <p className={styles.stepBody}>{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <Link href="/our-story/process" className={styles.link}>
          Full process
          <span aria-hidden="true"> →</span>
        </Link>
      </div>
    </section>
  );
}
