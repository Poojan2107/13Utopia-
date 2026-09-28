"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { plates } from "@/content/plates";
import { cn } from "@/lib/utils/cn";
import styles from "@/styles/home/ExplorePortals.module.css";

gsap.registerPlugin(ScrollTrigger);

const PORTALS = [
  {
    num: "01",
    title: "Work",
    href: "/work",
    kicker: "Shipped Records",
    desc: "Evidence of ambition realized. Immersive digital platforms, e-commerce ecosystems, and brand transformations.",
    tags: ["Proof", "Case Studies", "Interactive Web", "Brand CGI"],
    image: plates.work,
  },
  {
    num: "02",
    title: "Solutions",
    href: "/solutions",
    kicker: "Strategic Architecture",
    desc: "Modular engagements engineered to launch new brands, scale revenue, and modernize technology stacks.",
    tags: ["Launch", "Scale", "Transform", "AI Systems"],
    image: plates.build,
  },
  {
    num: "03",
    title: "Collective",
    href: "/collective",
    kicker: "Studio & Craft",
    desc: "A multidisciplinary team of designers, engineers, and strategists crafting from Toronto for the global stage.",
    tags: ["People", "Craft", "Toronto", "Culture"],
    image: plates.collective,
  },
  {
    num: "04",
    title: "Perspective",
    href: "/perspective",
    kicker: "Signal & Thinking",
    desc: "Essays, architectural breakdowns, and strategic viewpoints on design, software, and brand velocity.",
    tags: ["Thinking", "Notes", "Signal", "Point of View"],
    image: plates.grow,
  },
] as const;

export function ExplorePortals() {
  const rootRef = useRef<HTMLElement | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      gsap.from(el.querySelectorAll("[data-portal-rise]"), {
        opacity: 0,
        y: 30,
        duration: 0.85,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 78%",
          once: true,
        },
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      id="explore"
      className={styles.wrap}
      aria-label="Explore the practice"
    >
      <div className={styles.ambientGlow} aria-hidden="true" />

      <div className={styles.inner}>
        <header className={styles.head} data-portal-rise>
          <div className={styles.kickerRow}>
            <span className={styles.kickerNum}>03</span>
            <span className={styles.kickerLine} aria-hidden="true" />
            <p className={styles.kicker}>Ecosystem · Portals</p>
          </div>
          <div className={styles.titleRow}>
            <h2 className={styles.heading}>
              Where the practice <span className={styles.goldText}>opens.</span>
            </h2>
            <p className={styles.lead}>
              Explore our shipped evidence, productized solutions, studio culture, and ongoing perspectives.
            </p>
          </div>
        </header>

        <div className={styles.grid}>
          {PORTALS.map((portal, idx) => {
            const isHovered = hoveredIndex === idx;

            return (
              <Link
                key={portal.href}
                href={portal.href}
                className={cn(styles.card, isHovered && styles.cardActive)}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                data-portal-rise
                data-cursor="view"
                data-magnetic
              >
                {/* Background Image Container */}
                <div className={styles.mediaWrap}>
                  <Image
                    src={portal.image.src}
                    alt={portal.title}
                    fill
                    sizes="(max-width: 900px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className={styles.mediaImg}
                  />
                  <div className={styles.mediaVeil} aria-hidden="true" />
                  <div className={styles.glowCorner} aria-hidden="true" />
                </div>

                {/* Card Content Overlay */}
                <div className={styles.cardContent}>
                  <div className={styles.cardTop}>
                    <span className={styles.portalNum}>{portal.num}</span>
                    <span className={styles.portalKicker}>{portal.kicker}</span>
                  </div>

                  <div className={styles.cardMid}>
                    <h3 className={styles.portalTitle}>
                      {portal.title}
                      <span className={styles.arrow} aria-hidden="true">
                        ↗
                      </span>
                    </h3>
                    <p className={styles.portalDesc}>{portal.desc}</p>
                  </div>

                  <div className={styles.cardBottom}>
                    <div className={styles.tagsWrap}>
                      {portal.tags.map((t) => (
                        <span key={t} className={styles.tagChip}>
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
