"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { getSolutions } from "@/lib/content";
import { REVEAL } from "@/lib/motion/reveal";
import styles from "@/styles/home/SolutionsOverview.module.css";

gsap.registerPlugin(ScrollTrigger);

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
        y: REVEAL.y,
        duration: REVEAL.duration,
        stagger: REVEAL.stagger,
        ease: REVEAL.ease,
        clearProps: "all",
        scrollTrigger: { trigger: el, start: REVEAL.start, once: true },
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
      <div className={styles.inner}>
        <header className={styles.head} data-rise>
          <p className={styles.kicker}>Outcomes</p>
          <h2 id="solutions-title" className={styles.heading}>
            What are you trying to make happen?
          </h2>
          <p className={styles.lede}>
            Start with the result you need — then the Create, Build, and Grow
            work that delivers it.
          </p>
        </header>

        <ul className={styles.grid}>
          {solutions.map((s, i) => (
            <li key={s.slug} className={styles.item} data-rise>
              <Link href={`/solutions/${s.slug}`} className={styles.link}>
                <span className={styles.num}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className={styles.title}>{s.title}</h3>
                <p className={styles.body}>{s.description}</p>
              </Link>
            </li>
          ))}
        </ul>

        <Link href="/solutions" className={styles.all} data-rise>
          See all outcomes
          <span aria-hidden="true"> →</span>
        </Link>
      </div>
    </section>
  );
}
