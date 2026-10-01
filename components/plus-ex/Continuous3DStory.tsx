"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "@/styles/plus-ex/Continuous3DStory.module.css";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const TRIAD_ITEMS = [
  {
    tag: "01 // CREATE",
    title: "Visual Alchemy & Spatial Worlds",
    desc: "We sculpt high-craft digital identities, bespoke 3D spatial environments, and visionary creative directions that demand immediate cultural reverence.",
    services: ["Brand Strategy", "3D Art Direction", "Spatial UI", "Motion Systems"],
  },
  {
    tag: "02 // BUILD",
    title: "Zero-Latency WebGL Engineering",
    desc: "Uncompromising full-stack architecture built with Three.js, React, and GPU-accelerated shaders. Every millisecond of interaction latency is engineered away.",
    services: ["WebGL Shaders", "Next.js Architecture", "GSAP Physics", "Fluid Systems"],
  },
  {
    tag: "03 // GROW",
    title: "Market Momentum & Dominance",
    desc: "We architect conversion gravity and category dominance. Our commissioned digital ecosystems turn passive visitors into lifelong brand evangelists.",
    services: ["Category Design", "Growth Engineering", "SEO Architecture", "Venture Scale"],
  },
];

const STATS = [
  { value: "$100M+", label: "Client Valuation Generated" },
  { value: "0.00s", label: "Latency Benchmark Standard" },
  { value: "100%", label: "Bespoke Handcrafted Code" },
  { value: "13", label: "Global Design Accolades" },
];

export function Continuous3DStory() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const stageRef = useRef<HTMLDivElement | null>(null);

  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeAct, setActiveAct] = useState(0);
  const [activeTriadIndex, setActiveTriadIndex] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    const stage = stageRef.current;
    if (!section || !stage) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: "+=3800",
        pin: stage,
        pinSpacing: true,
        scrub: 0.8,
        anticipatePin: 1,
        onUpdate: (self) => {
          const p = Math.max(0, Math.min(1, self.progress));
          setScrollProgress(p);

          // Determine current active act based on scroll progress
          if (p < 0.28) {
            setActiveAct(0);
          } else if (p >= 0.28 && p < 0.62) {
            setActiveAct(1);
            // Cycle triad items within Act 1
            const subP = (p - 0.28) / (0.62 - 0.28);
            const triadIdx = Math.min(2, Math.floor(subP * 3));
            setActiveTriadIndex(triadIdx);
          } else if (p >= 0.62 && p < 0.85) {
            setActiveAct(2);
          } else {
            setActiveAct(3);
          }
        },
      });
    }, section);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={styles.storySection}
      id="narrative"
      aria-label="13 Utopia 3D Architectural Narrative"
    >
      {/* Pinned 3D Viewport Stage */}
      <div ref={stageRef} className={styles.stagePin}>
        {/* Background Gradients & Architectural Grid */}
        <div className={styles.ambientGlow} />
        <div className={styles.architecturalGrid} />

        {/* Dynamic Multi-Act Narrative Overlays */}
        <div className={styles.actsWrapper}>
          {/* Act 0: Identity & Manifesto */}
          <div
            className={`${styles.act} ${activeAct === 0 ? styles.actVisible : ""}`}
          >
            <div className={styles.manifestoContent}>
              <div className={styles.chapterBadge}>
                <span className={styles.chapterDot} />
                <span>01 // ARCHITECTURAL IDENTITY</span>
              </div>
              <h2 className={styles.manifestoHeading}>
                WE DO NOT FIT INTO THE SYSTEM. <span>WE ARCHITECT THE ANOMALY.</span>
              </h2>
              <p className={styles.manifestoText}>
                13 Utopia is an independent venture architecture and digital design
                studio forging anomalous digital worlds, brand systems, and
                category-defining web experiences.
              </p>
            </div>
          </div>

          {/* Act 1: The Triad of Creation (CREATE · BUILD · GROW) */}
          <div
            className={`${styles.act} ${activeAct === 1 ? styles.actVisible : ""}`}
          >
            <div className={styles.triadContent}>
              <div className={styles.chapterBadge}>
                <span className={styles.chapterDot} />
                <span>02 // CAPABILITIES & CRAFT</span>
              </div>

              {/* Interactive Triad Tabs */}
              <div className={styles.triadTabs}>
                {["CREATE", "BUILD", "GROW"].map((name, idx) => (
                  <button
                    key={name}
                    className={`${styles.triadTab} ${
                      activeTriadIndex === idx ? styles.triadTabActive : ""
                    }`}
                    onClick={() => setActiveTriadIndex(idx)}
                    type="button"
                  >
                    0{idx + 1} {name}
                  </button>
                ))}
              </div>

              {/* Active Triad Card */}
              <div className={styles.triadCard}>
                <div className={styles.chapterBadge}>
                  {TRIAD_ITEMS[activeTriadIndex].tag}
                </div>
                <h3 className={styles.triadCardTitle}>
                  {TRIAD_ITEMS[activeTriadIndex].title}
                </h3>
                <p className={styles.triadCardDesc}>
                  {TRIAD_ITEMS[activeTriadIndex].desc}
                </p>
                <div className={styles.triadList}>
                  {TRIAD_ITEMS[activeTriadIndex].services.map((srv) => (
                    <span key={srv} className={styles.triadTag}>
                      {srv}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Act 2: Architectural Benchmarks (Stats & Metrics) */}
          <div
            className={`${styles.act} ${activeAct === 2 ? styles.actVisible : ""}`}
          >
            <div className={styles.benchmarksContent}>
              <div className={styles.benchmarksInner}>
                <div className={styles.chapterBadge}>
                  <span className={styles.chapterDot} />
                  <span>03 // QUANTITATIVE IMPACT</span>
                </div>
                <div className={styles.statsGrid}>
                  {STATS.map((stat) => (
                    <div key={stat.label} className={styles.statCard}>
                      <span className={styles.statValue}>{stat.value}</span>
                      <span className={styles.statLabel}>{stat.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Act 3: Initiation & Finale */}
          <div
            className={`${styles.act} ${activeAct === 3 ? styles.actVisible : ""}`}
          >
            <div className={styles.initiationContent}>
              <div className={styles.chapterBadge}>
                <span className={styles.chapterDot} />
                <span>04 // INITIATION</span>
              </div>
              <h2 className={styles.initiationHeading}>
                ARCHITECT YOUR UTOPIA.
              </h2>
              <p className={styles.initiationSub}>
                We select only 13 bespoke commissions annually. Let&apos;s build a
                digital world that commands attention.
              </p>
              <div className={styles.initiationActions}>
                <a
                  href="mailto:hello@13utopia.com?subject=Project%20Commission%20Inquiry"
                  className={styles.primaryCta}
                >
                  Initiate Commission
                </a>
                <Link href="/work" className={styles.secondaryCta}>
                  Explore All Work
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Live Progress Navigator */}
        <div className={styles.progressNav}>
          <div className={styles.progressBarTrack}>
            <div
              className={styles.progressBarFill}
              style={{ width: `${Math.round(scrollProgress * 100)}%` }}
            />
          </div>
          <span className={styles.progressLabel}>
            0{activeAct + 1} / 04
          </span>
        </div>
      </div>

      {/* Integrated Architectural Colophon & Footer */}
      <footer className={styles.storyFooter}>
        <div className={styles.footerTop}>
          <div className={styles.footerBrand}>
            <span className={styles.footerLogo}>13 UTOPIA</span>
            <p className={styles.footerTagline}>
              Independent Venture Architecture &amp; Digital Design Studio.
            </p>
          </div>

          <div className={styles.footerCols}>
            <div className={styles.footerCol}>
              <span className={styles.footerColTitle}>Navigation</span>
              <Link href="#hero" className={styles.footerLink}>Home</Link>
              <Link href="/work" className={styles.footerLink}>Selected Work</Link>
              <Link href="/services" className={styles.footerLink}>Capabilities</Link>
            </div>

            <div className={styles.footerCol}>
              <span className={styles.footerColTitle}>Connect</span>
              <a href="mailto:hello@13utopia.com" className={styles.footerLink}>
                hello@13utopia.com
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className={styles.footerLink}
              >
                X / Twitter
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className={styles.footerLink}
              >
                Instagram
              </a>
            </div>

            <div className={styles.footerCol}>
              <span className={styles.footerColTitle}>Coordinates</span>
              <span className={styles.footerLink}>Global / Remote</span>
              <span className={styles.footerLink}>UTC+05:30 / Studio</span>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <span>&copy; {new Date().getFullYear()} 13 UTOPIA. ALL RIGHTS RESERVED.</span>
          <span>ANOMALOUS DIGITAL ARCHITECTURE</span>
        </div>
      </footer>
    </section>
  );
}
