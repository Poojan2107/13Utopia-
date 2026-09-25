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
 * One word owns the viewport. Scroll advances the beat.
 */
export function ProcessOverview() {
  const wrapRef = useRef<HTMLElement | null>(null);
  const [active, setActive] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const activeRef = useRef(0);

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
          if (next !== activeRef.current) {
            activeRef.current = next;
            setActive(next);
          }
        },
      });

      const fill = wrap.querySelector(`.${styles.trackFill}`);
      if (fill) {
        gsap.fromTo(
          fill,
          { scaleX: 0 },
          {
            scaleX: 1,
            ease: "none",
            scrollTrigger: {
              trigger: wrap,
              start: "top top",
              end: "bottom bottom",
              scrub: true,
            },
          },
        );
      }
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
          <header className={styles.top}>
            <div className={styles.marker}>
              <span className={styles.markerIndex}>05</span>
              <span className={styles.markerRule} aria-hidden="true" />
              <span className={styles.markerLabel}>Method</span>
            </div>
            <h2 id="process-title" className={styles.heading}>
              How we think.
            </h2>
          </header>

          {isMobile ? (
            <ol className={styles.mobileList}>
              {STEPS.map((s) => (
                <li key={s.num} className={styles.mobileItem}>
                  <span className={styles.beatNum}>{s.num}</span>
                  <h3 className={styles.beatTitle}>{s.title}</h3>
                  <p className={styles.beatBody}>{s.body}</p>
                </li>
              ))}
            </ol>
          ) : (
            <>
              <div className={styles.beat} key={step.num}>
                <p className={styles.beatNum}>{step.num} / 06</p>
                <p className={styles.beatTitle}>{step.title}</p>
                <p className={styles.beatBody}>{step.body}</p>
              </div>

              <div className={styles.track} aria-hidden="true">
                <span className={styles.trackFill} />
              </div>

              <ol className={styles.dots} aria-hidden="true">
                {STEPS.map((s, i) => (
                  <li
                    key={s.num}
                    className={i === active ? styles.dotActive : styles.dot}
                  />
                ))}
              </ol>
            </>
          )}

          <Link href="/our-story/process" className={styles.link}>
            Full process
            <span aria-hidden="true"> →</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
