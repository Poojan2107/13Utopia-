"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { LinkPreview } from "@/components/motion/LinkPreview";
import { SpotlightCard } from "@/components/motion/SpotlightCard";
import { TextSplit } from "@/components/motion/TextSplit";
import { plates, plateForTone } from "@/content/plates";
import { getPerspectiveArticles } from "@/lib/content";
import { REVEAL } from "@/lib/motion/reveal";
import styles from "@/styles/home/PerspectivePreview.module.css";

gsap.registerPlugin(ScrollTrigger);

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

  const tones = ["strategy", "create", "grow"] as const;

  return (
    <section
      ref={ref}
      id="perspective"
      className={styles.wrap}
      aria-labelledby="perspective-title"
    >
      <div className={styles.inner}>
        <header className={styles.head} data-rise>
          <p className={styles.kicker}>Perspective</p>
          <TextSplit
            id="perspective-title"
            as="h2"
            mode="word"
            className={styles.heading}
          >
            We think before we ship.
          </TextSplit>
          <p className={styles.lede}>
            Notes on brand, product, technology, and growth — where the
            intersections matter.
          </p>
        </header>

        <ul className={styles.list}>
          {articles.map((a, i) => (
            <li key={a.slug} className={styles.item} data-rise>
              <SpotlightCard>
                <Link
                  href={`/perspective/${a.slug}`}
                  className={styles.link}
                  data-preview-id={a.slug}
                  data-cursor="view"
                  data-magnetic
                >
                  <span className={styles.meta}>
                    <span>{a.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{a.readingTime}</span>
                  </span>
                  <h3 className={styles.title}>{a.title}</h3>
                  <p className={styles.excerpt}>{a.excerpt}</p>
                </Link>
              </SpotlightCard>
            </li>
          ))}
        </ul>

        <Link href="/perspective" className={styles.all} data-rise data-magnetic>
          Explore all writing
          <span aria-hidden="true"> →</span>
        </Link>
      </div>

      <LinkPreview
        items={articles.map((a, i) => ({
          selector: a.slug,
          need: `Perspective — ${a.title}`,
          tone: tones[i % tones.length],
          image: plateForTone(tones[i % tones.length]!),
        }))}
      />
    </section>
  );
}
