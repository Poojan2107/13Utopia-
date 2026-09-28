"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { plates } from "@/content/plates";
import { cn } from "@/lib/utils/cn";
import styles from "@/styles/home/CapabilitiesMatrix.module.css";

gsap.registerPlugin(ScrollTrigger);

const PILLARS = [
  {
    num: "01",
    slug: "create",
    title: "Create",
    discipline: "BRAND · DESIGN · CGI · SENSORY",
    thesis: "Haute-couture aesthetics, brand identity, and high-fidelity visual worlds that command attention.",
    deliverables: ["Brand Identity Systems", "Art Direction & Styling", "3D & Motion Graphics", "Sensory Digital Design"],
    standard: "Top 1% Visual Caliber",
    image: plates.create,
    highlight: true, // 1 of 13 Utopia
  },
  {
    num: "02",
    slug: "build",
    title: "Build",
    discipline: "NEXT.JS · WEBGL · AI ENGINES",
    thesis: "Sub-100ms digital systems, headless commerce, and custom AI architecture engineered to hold.",
    deliverables: ["Next.js App Router", "WebGL & Three.js", "Headless Shopify Plus", "Custom AI Pipelines"],
    standard: "Sub-100ms Response",
    image: plates.build,
    highlight: false,
  },
  {
    num: "03",
    slug: "grow",
    title: "Grow",
    discipline: "SEO · CAMPAIGNS · CONVERSION",
    thesis: "Turning artistic presence into compounding market demand through rigorous technical marketing.",
    deliverables: ["High-Intent Technical SEO", "Conversion Rate Engineering", "Growth Campaign Systems", "Market Dominance"],
    standard: "Compounding Growth",
    image: plates.grow,
    highlight: true, // 3 of 13 Utopia
  },
] as const;

export function CapabilitiesMatrix() {
  const rootRef = useRef<HTMLElement | null>(null);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      // 1. Header fade-in
      gsap.fromTo(
        el.querySelector(`.${styles.head}`),
        { autoAlpha: 0, y: 32 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.85,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            once: true,
          },
        },
      );

      // 2. Cards progressive stagger entrance
      gsap.fromTo(
        el.querySelectorAll(`.${styles.card}`),
        { autoAlpha: 0, y: 45 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.14,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el.querySelector(`.${styles.grid}`),
            start: "top 82%",
            once: true,
          },
        },
      );
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      id="capabilities"
      className={styles.wrap}
      aria-label="13 Utopia Capabilities Matrix"
    >
      <div className={styles.ambientGlow} aria-hidden="true" />

      <div className={styles.inner}>
        {/* Section Header */}
        <header className={styles.head}>
          <div className={styles.kickerRow}>
            <span className={styles.kickerBadge}>13 UTOPIA MATRIX</span>
            <span className={styles.kickerDot} aria-hidden="true">
              ✦
            </span>
            <p className={styles.kicker}>ONE & THREE ARCHITECTURE</p>
          </div>

          <div className={styles.titleRow}>
            <h2 className={styles.heading}>
              Three worlds. <span className={styles.goldText}>One practice.</span>
            </h2>
            <p className={styles.lead}>
              We do not outsource or divide. Brand, engineering, and revenue operate in continuous real-time feedback loops.
            </p>
          </div>
        </header>

        {/* 3-Column Luxury Matrix Grid */}
        <div className={styles.grid}>
          {PILLARS.map((p, idx) => {
            const isHovered = hoveredIdx === idx;

            return (
              <article
                key={p.slug}
                className={cn(
                  styles.card,
                  p.highlight && styles.highlightedCard,
                  isHovered && styles.cardActive,
                )}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
              >
                {/* Background Photography Plate */}
                <div className={styles.mediaWrap}>
                  <Image
                    src={p.image.src}
                    alt={p.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className={styles.mediaImg}
                  />
                  <div className={styles.mediaVeil} aria-hidden="true" />
                  <div className={styles.glowCorner} aria-hidden="true" />
                </div>

                {/* Foreground Content */}
                <div className={styles.cardContent}>
                  <div className={styles.cardTop}>
                    <div className={styles.numBadge}>
                      <span>{p.num}</span>
                    </div>
                    <span className={styles.disciplineTag}>{p.discipline}</span>
                  </div>

                  <div className={styles.cardMid}>
                    <h3 className={styles.cardTitle}>{p.title}.</h3>
                    <p className={styles.cardThesis}>{p.thesis}</p>

                    <ul className={styles.pillList} aria-label={`${p.title} capabilities`}>
                      {p.deliverables.map((d) => (
                        <li key={d} className={styles.pill}>
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={styles.cardBottom}>
                    <div className={styles.standardPill}>
                      <span className={styles.standardDot} aria-hidden="true" />
                      <span>{p.standard}</span>
                    </div>

                    <Link
                      href={`/capabilities/${p.slug}`}
                      className={styles.actionBtn}
                      data-magnetic
                    >
                      <span>Enter {p.title}</span>
                      <span className={styles.btnArrow} aria-hidden="true">
                        →
                      </span>
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
