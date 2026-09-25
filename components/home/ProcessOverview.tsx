"use client";

import { useEffect, useRef, useState } from "react";
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
 * 05 — Method
 * Six beats as a scrubbed editorial sequence (desktop);
 * stacked chapter on mobile.
 */
export function ProcessOverview() {
  const wrapRef = useRef<HTMLElement | null>(null);
  const [active, setActive] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 900px)");
    const sync = () => setIsMobile(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap || isMobile) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: wrap,
        start: "top top",
        end: "bottom bottom",
        onUpdate: (self) => {
          const next = Math.min(
            STEPS.length - 1,
            Math.floor(self.progress * STEPS.length),
          );
          setActive(next);
        },
      });
    }, wrap);

    return () => ctx.revert();
  }, [isMobile]);

  const step = STEPS[active];

  return (
    <section
      ref={wrapRef}
      id="method"
      className={isMobile ? styles.wrapMobile : styles.wrap}
      aria-labelledby="process-title"
    >
      <div className={isMobile ? styles.stack : styles.pin}>
        <div className={styles.stage}>
          <header className={styles.marker}>
            <span className={styles.index}>05</span>
            <span className={styles.markerRule} aria-hidden="true" />
            <span className={styles.markerLabel}>Method</span>
          </header>

          <h2 id="process-title" className={styles.heading}>
            How we think.
          </h2>

          {isMobile ? (
            <ol className={styles.mobileList}>
              {STEPS.map((s) => (
                <li key={s.num} className={styles.mobileItem}>
                  <span className={styles.focusNum}>{s.num}</span>
                  <h3 className={styles.focusTitle}>{s.title}</h3>
                  <p className={styles.focusBody}>{s.body}</p>
                </li>
              ))}
            </ol>
          ) : (
            <div className={styles.layout}>
              <ol className={styles.rail} aria-label="Method steps">
                {STEPS.map((s, i) => (
                  <li key={s.num}>
                    <button
                      type="button"
                      className={
                        i === active ? styles.railActive : styles.railItem
                      }
                      onClick={() => setActive(i)}
                      aria-current={i === active ? "true" : undefined}
                    >
                      <span className={styles.railNum}>{s.num}</span>
                      <span className={styles.railTitle}>{s.title}</span>
                    </button>
                  </li>
                ))}
              </ol>

              <div className={styles.focus} key={step.num}>
                <p className={styles.focusNum}>{step.num}</p>
                <h3 className={styles.focusTitle}>{step.title}</h3>
                <p className={styles.focusBody}>{step.body}</p>
              </div>
            </div>
          )}

          <Link href="/our-story/process" className={styles.link}>
            Explore the full process
            <span aria-hidden="true"> →</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
