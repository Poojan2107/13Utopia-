"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { getTestimonials } from "@/lib/content";
import { cn } from "@/lib/utils/cn";
import styles from "@/styles/home/Testimonials.module.css";

gsap.registerPlugin(ScrollTrigger);

/**
 * Voices theater — featured quote + focus rail.
 */
export function Testimonials() {
  const ref = useRef<HTMLElement | null>(null);
  const items = getTestimonials();
  const [focus, setFocus] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      gsap.from(el.querySelectorAll("[data-rise]"), {
        opacity: 0,
        y: 28,
        duration: 0.9,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 78%", once: true },
      });
    }, el);

    return () => ctx.revert();
  }, []);

  if (!items.length) return null;

  const active = items[focus] ?? items[0];

  return (
    <section
      ref={ref}
      id="voices"
      className={styles.wrap}
      aria-labelledby="voices-title"
    >
      <div className={styles.inner}>
        <header className={styles.head} data-rise>
          <div className={styles.kickerRow}>
            <span className={styles.kickerNum}>05</span>
            <span className={styles.kickerLine} aria-hidden="true" />
            <p className={styles.kicker}>Voices</p>
          </div>
          <h2 id="voices-title" className={styles.heading}>
            What clients say when the work ships.
          </h2>
        </header>

        <div className={styles.stage}>
          <blockquote className={styles.featured} data-rise>
            <span className={styles.mark} aria-hidden="true">
              “
            </span>
            <p className={styles.featuredQuote}>{active.quote}</p>
            <footer className={styles.featuredAttr}>
              <span className={styles.name}>{active.attribution}</span>
              <span className={styles.meta}>
                {active.role} · {active.company}
              </span>
            </footer>
          </blockquote>

          <ul className={styles.rail} role="list">
            {items.map((t, i) => (
              <li key={t.slug}>
                <button
                  type="button"
                  className={cn(styles.railBtn, focus === i && styles.railBtnActive)}
                  data-rise
                  onMouseEnter={() => setFocus(i)}
                  onFocus={() => setFocus(i)}
                  onClick={() => setFocus(i)}
                  aria-pressed={focus === i}
                >
                  <span className={styles.railNum}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className={styles.railCopy}>
                    <span className={styles.railName}>{t.attribution}</span>
                    <span className={styles.railMeta}>{t.company}</span>
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
