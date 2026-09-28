"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { plates } from "@/content/plates";
import styles from "@/styles/home/CapabilitiesShowcase.module.css";

gsap.registerPlugin(ScrollTrigger);

const CAPABILITIES = [
  {
    num: "01",
    slug: "create",
    title: "Create",
    discipline: "BRAND · DESIGN · CGI · 3D",
    thesis: "Haute-couture aesthetics, brand identity, and high-fidelity visual worlds that demand attention.",
    deliverables: ["Brand Identity Systems", "Art Direction & Styling", "3D & Motion Graphics", "Sensory Digital Design"],
    standard: "Top 1% Visual Caliber",
    image: plates.create,
  },
  {
    num: "02",
    slug: "build",
    title: "Build",
    discipline: "NEXT.JS · WEBGL · COMMERCE",
    thesis: "Production-grade digital systems, headless e-commerce, and bespoke interactive web experiences.",
    deliverables: ["Next.js App Router", "WebGL & Three.js Systems", "Headless Shopify Plus", "Custom Web Platforms"],
    standard: "Sub-100ms Response",
    image: plates.build,
  },
  {
    num: "03",
    slug: "grow",
    title: "Grow",
    discipline: "SEO · CAMPAIGNS · CONVERSION",
    thesis: "Turning artistic presence into compounding market demand through rigorous technical marketing.",
    deliverables: ["High-Intent Technical SEO", "Conversion Rate Optimization", "Growth Campaign Architecture", "Market Positioning"],
    standard: "Compounding Growth",
    image: plates.grow,
  },
] as const;

export function CapabilitiesShowcase() {
  const rootRef = useRef<HTMLElement | null>(null);
  const [activeCard, setActiveCard] = useState<number | null>(null);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      gsap.from(el.querySelectorAll("[data-cap-rise]"), {
        opacity: 0,
        y: 32,
        duration: 0.85,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 75%", once: true },
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      id="capabilities"
      className={styles.wrap}
      aria-labelledby="capabilities-title"
    >
      <div className={styles.atmosphere} aria-hidden="true" />

      <div className={styles.inner}>
        <header className={styles.head} data-cap-rise>
          <div className={styles.kickerRow}>
            <span className={styles.kickerNum}>02</span>
            <span className={styles.kickerLine} aria-hidden="true" />
            <p className={styles.kicker}>Spatial Matrix · Practice Worlds</p>
          </div>
          <div className={styles.titleSpread}>
            <h2 id="capabilities-title" className={styles.heading}>
              Three worlds. <span className={styles.goldText}>One unified practice.</span>
            </h2>
            <p className={styles.lead}>
              We do not outsource or divide. Brand, code, and revenue operate in tight feedback loops under one singular roof.
            </p>
          </div>
        </header>

        <div className={styles.grid}>
          {CAPABILITIES.map((cap, i) => (
            <article
              key={cap.slug}
              className={`${styles.card} ${activeCard === i ? styles.cardActive : ""}`}
              onMouseEnter={() => setActiveCard(i)}
              onMouseLeave={() => setActiveCard(null)}
              data-cap-rise
            >
              {/* Background Media with Parallax/Zoom */}
              <div className={styles.mediaWrap}>
                <Image
                  src={cap.image.src}
                  alt={cap.image.alt}
                  fill
                  sizes="(max-width: 900px) 100vw, 33vw"
                  className={styles.mediaImg}
                  style={{ objectPosition: cap.image.objectPosition }}
                />
                <div className={styles.mediaVeil} aria-hidden="true" />
                <div className={styles.glowCorner} aria-hidden="true" />
              </div>

              {/* Card Foreground Content */}
              <div className={styles.cardContent}>
                <div className={styles.cardTop}>
                  <div className={styles.numBadge}>
                    <span>{cap.num}</span>
                  </div>
                  <span className={styles.disciplineTag}>{cap.discipline}</span>
                </div>

                <div className={styles.cardMid}>
                  <h3 className={styles.cardTitle}>{cap.title}.</h3>
                  <p className={styles.cardThesis}>{cap.thesis}</p>

                  <ul className={styles.pillList} aria-label={`${cap.title} capabilities`}>
                    {cap.deliverables.map((d) => (
                      <li key={d} className={styles.pill}>
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={styles.cardBottom}>
                  <div className={styles.standardPill}>
                    <span className={styles.standardDot} aria-hidden="true" />
                    <span>{cap.standard}</span>
                  </div>
                  <Link
                    href={`/capabilities/${cap.slug}`}
                    className={styles.actionBtn}
                    data-magnetic
                  >
                    <span>Enter {cap.title}</span>
                    <span className={styles.btnArrow} aria-hidden="true">
                      →
                    </span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
