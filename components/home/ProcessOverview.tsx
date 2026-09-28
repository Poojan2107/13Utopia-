"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { REVEAL } from "@/lib/motion/reveal";
import styles from "@/styles/home/ProcessOverview.module.css";

gsap.registerPlugin(ScrollTrigger);

const STEPS = [
  {
    num: "01",
    title: "Question",
    body: "Surface assumptions and find what is broken before anyone writes a brief.",
  },
  {
    num: "02",
    title: "Imagine",
    body: "Explore options beyond the familiar request — including ones the brief never named.",
  },
  {
    num: "03",
    title: "Define",
    body: "Lock direction with a decision. Ambition without a choice stays noise.",
  },
  {
    num: "04",
    title: "Create",
    body: "Give the idea form — brand, experience, and language people can feel.",
  },
  {
    num: "05",
    title: "Build",
    body: "Ship systems and products that hold on day one, not decks that look finished.",
  },
  {
    num: "06",
    title: "Grow",
    body: "Turn attention into demand, and demand into a market that lasts.",
  },
] as const;

export function ProcessOverview() {
  const wrapRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      gsap.from(wrap.querySelectorAll("[data-step]"), {
        opacity: 0,
        y: REVEAL.y,
        duration: REVEAL.duration,
        stagger: REVEAL.stagger,
        ease: REVEAL.ease,
        clearProps: "all",
        scrollTrigger: {
          trigger: wrap.querySelector(`.${styles.steps}`),
          start: REVEAL.start,
          once: true,
        },
      });
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
        <div className={styles.layout}>
          <header className={styles.head}>
            <p className={styles.kicker}>Method</p>
            <h2 id="process-title" className={styles.heading}>
              How we move from challenge to momentum.
            </h2>
            <p className={styles.lede}>
              Six decisions in order — question, imagine, define, create, build,
              grow.
            </p>
            <Link href="/our-story/process" className={styles.link}>
              See the full process
              <span aria-hidden="true"> →</span>
            </Link>
          </header>

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
      </div>
    </section>
  );
}
