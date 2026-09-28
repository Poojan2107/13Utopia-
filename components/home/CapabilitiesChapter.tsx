"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { plates } from "@/content/plates";
import { UtopianBreak } from "@/components/ui/UtopianBreak";
import { cn } from "@/lib/utils/cn";
import styles from "@/styles/home/CapabilitiesChapter.module.css";

gsap.registerPlugin(ScrollTrigger);

const WORLDS = [
  {
    num: "01",
    word: "Create",
    href: "/capabilities/create",
    directive: "Make the brand worth noticing.",
    sub: "Brand Strategy · Visual Identity · Creative Direction · UI / UX Design · CGI & Motion",
    tags: ["Brand Identity", "Design Systems", "UI / UX", "CGI Motion"],
    image: plates.create,
  },
  {
    num: "02",
    word: "Build",
    href: "/capabilities/build",
    directive: "Turn the idea into something people can use.",
    sub: "Websites · Digital Products · Custom SaaS · AI Systems & Automation · Cloud Architecture",
    tags: ["Digital Products", "Web Engineering", "AI Workflows", "SaaS Systems"],
    image: plates.build,
  },
  {
    num: "03",
    word: "Grow",
    href: "/capabilities/grow",
    directive: "Turn attention into compounding business.",
    sub: "Technical SEO · Performance Marketing · Conversion Optimization · Growth Loops",
    tags: ["Technical SEO", "Paid Acquisition", "Conversion Loops", "Market Scale"],
    image: plates.grow,
  },
] as const;

type Props = {
  eyebrow?: string;
};

/**
 * CapabilitiesChapter — 3-World Interactive Pillar Columns.
 * Expansive monumental columns with hover expansion, gold rim lighting & live tags.
 */
export function CapabilitiesChapter({ eyebrow = "03 · Capabilities" }: Props) {
  const [activeWorld, setActiveWorld] = useState(0);
  const rootRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      gsap.from(root.querySelectorAll("[data-caps-rise]"), {
        autoAlpha: 0,
        y: 28,
        duration: 0.85,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: root,
          start: "top 75%",
          once: true,
        },
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      id="worlds"
      className={styles.root}
      aria-label="Capabilities"
    >
      <div className={styles.ambientGlow} aria-hidden="true" />

      {/* Intro Header */}
      <header className={styles.intro} data-caps-rise>
        <div className={styles.introEyebrowRow}>
          <UtopianBreak size="sm" className={styles.introBreak} />
          <p className={styles.introMeta}>{eyebrow}</p>
        </div>
        <div className={styles.introHeadLockup}>
          <h2 className={styles.introLead}>Create. Build. Grow.</h2>
          <p className={styles.introSub}>
            Three unified worlds. One multidisciplinary practice.
          </p>
        </div>
      </header>

      {/* 3-World Pillar Columns Stage */}
      <div className={styles.pillarsStage} data-caps-rise>
        {WORLDS.map((w, i) => {
          const isActive = i === activeWorld;
          return (
            <article
              key={w.word}
              className={cn(styles.pillar, isActive && styles.pillarActive)}
              onMouseEnter={() => setActiveWorld(i)}
              onFocus={() => setActiveWorld(i)}
            >
              {/* Pillar Media Backplate */}
              <div
                className={styles.mediaWrap}
                style={{ position: "absolute", inset: 0 }}
                aria-hidden="true"
              >
                <Image
                  src={w.image.src}
                  alt=""
                  fill
                  sizes="(max-width: 900px) 100vw, 33vw"
                  className={styles.mediaImg}
                  style={{ objectPosition: w.image.objectPosition ?? "50% 45%" }}
                  priority={i === 0}
                />
                <span className={styles.mediaVeil} />
                <span className={styles.mediaGrain} />
                <span className={styles.pillarRim} />
              </div>

              {/* Pillar Header / Spine */}
              <div className={styles.spine}>
                <span className={styles.spineNum}>{w.num}</span>
                <span className={styles.spineWord}>{w.word}</span>
                <span className={styles.spineIndicator} aria-hidden="true" />
              </div>

              {/* Pillar Expanded Content */}
              <div className={styles.content}>
                <div className={styles.contentTop}>
                  <span className={styles.contentNum}>{w.num}</span>
                  <h3 className={styles.contentTitle}>
                    {w.word}
                    <span className={styles.goldDot}>.</span>
                  </h3>
                  <p className={styles.directive}>{w.directive}</p>
                </div>

                <div className={styles.contentBottom}>
                  <p className={styles.subText}>{w.sub}</p>
                  
                  <div className={styles.tagGroup}>
                    {w.tags.map((t) => (
                      <span key={t} className={styles.tagPill}>
                        {t}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={w.href}
                    className={styles.exploreLink}
                    data-magnetic
                  >
                    <span>Explore {w.word}</span>
                    <span className={styles.arrowIcon} aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* Footer link */}
      <div className={styles.footWrap} data-caps-rise>
        <Link href="/capabilities" className={styles.allCapabilitiesLink} data-magnetic>
          View All Capabilities & Solutions
          <span aria-hidden="true"> →</span>
        </Link>
      </div>
    </section>
  );
}
