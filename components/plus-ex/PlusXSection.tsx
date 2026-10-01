"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Plus3DCanvas } from "./Plus3DCanvas";
import { GradientBlindsCanvas } from "./GradientBlindsCanvas";
import styles from "@/styles/plus-ex/PlusXSection.module.css";

gsap.registerPlugin(ScrollTrigger);

interface ValueItem {
  id: string;
  num: string;
  word: string;
  subtitle: string;
  desc: string;
  deliverables: string[];
  gradientStops: string[];
}

const VALUES: ValueItem[] = [
  {
    id: "experience",
    num: "01",
    word: "EXPERIENCE",
    subtitle: "Spatial architecture and sensory digital environments.",
    desc: "We engineer experiences that transcend conventional UI. Living web spaces that react with visceral speed, physical weight, and spatial depth.",
    deliverables: ["Spatial UI Design", "3D WebGL Worlds", "Interactive Micro-Physics"],
    gradientStops: ["#000000", "#140e04", "#4a3510", "#a8782a", "#f3cf7a", "#fff8e0"],
  },
  {
    id: "curiosity",
    num: "02",
    word: "CURIOSITY",
    subtitle: "Uncompromising exploration beyond established norms.",
    desc: "Refusing the safety of template conventions. We probe uncharted technical and creative territories to discover unfair market advantages.",
    deliverables: ["Category Creation", "Radical Prototyping", "R&D Experiments"],
    gradientStops: ["#000000", "#0c151c", "#1c3c54", "#3b7fa8", "#87c8f5", "#e6f5ff"],
  },
  {
    id: "inquisitive",
    num: "03",
    word: "INQUISITIVE",
    subtitle: "Rigorously interrogating every assumption and constraint.",
    desc: "Deep algorithmic analysis and architectural interrogation. We strip away operational friction until only pure performance remains.",
    deliverables: ["Full-Stack Audit", "Performance Engineering", "Zero-Latency Systems"],
    gradientStops: ["#000000", "#120a1c", "#381754", "#8035bd", "#ca8af8", "#f7edff"],
  },
  {
    id: "empathetic",
    num: "04",
    word: "EMPATHETIC",
    subtitle: "Human intuition married to absolute mathematical precision.",
    desc: "Designing for human instinct rather than cognitive load. Every transition, velocity curve, and tactile response is calibrated to natural biology.",
    deliverables: ["Ergonomic UX", "Accessible Luxury", "Neuro-Aesthetic Tuning"],
    gradientStops: ["#000000", "#1c0d12", "#54192b", "#b03a5d", "#f78aa9", "#ffecf1"],
  },
  {
    id: "transformation",
    num: "05",
    word: "TRANSFORMATION",
    subtitle: "Redefining what your entire industry considers possible.",
    desc: "From legacy enterprise inertia to nimble market dominator. We orchestrate complete digital metamorphoses that command premium valuation.",
    deliverables: ["Visual Rebrand", "Modern Web Platform", "Autonomous AI Swarms"],
    gradientStops: ["#000000", "#10160a", "#2e4218", "#6a9937", "#b3eb78", "#f2ffe0"],
  },
  {
    id: "unreasonable",
    num: "06",
    word: "UNREASONABLE",
    subtitle: "Standard results come from standard expectations. We refuse both.",
    desc: "The core belief of 13 Utopia. We set targets that reasonable agencies deem impossible, and we engineer them into undeniable reality.",
    deliverables: ["Bespoke Engineering", "Custom Shaders", "Infinite Scalability"],
    gradientStops: ["#000000", "#1c1404", "#5c400c", "#c49023", "#ffd86b", "#fffde8"],
  },
];

const EASE = [0.16, 1, 0.3, 1] as const;

export function PlusXSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const wordsContainerRef = useRef<HTMLDivElement | null>(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    const wordsContainer = wordsContainerRef.current;
    if (!section || !wordsContainer) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: `+=${VALUES.length * 90}vh`,
        pin: true,
        scrub: 0.6,
        anticipatePin: 1,
        onUpdate: (self) => {
          const p = self.progress;
          setScrollProgress(p);

          // Calculate active index based on scroll position
          const idx = Math.min(
            VALUES.length - 1,
            Math.max(0, Math.floor(p * VALUES.length))
          );
          setActiveIdx(idx);

          // Kinetic typography vertical glide
          const maxShift = (VALUES.length - 1) * 115; // px per word step
          const currentY = -p * maxShift;
          gsap.set(wordsContainer, {
            y: currentY,
            overwrite: "auto",
          });
        },
      });
    }, section);

    return () => {
      ctx.revert();
    };
  }, []);

  const activeValue = VALUES[activeIdx];

  const handleWordClick = (idx: number) => {
    setActiveIdx(idx);
    const section = sectionRef.current;
    if (!section) return;

    const st = ScrollTrigger.getById("plusx-trigger");
    if (st) {
      const targetScroll = st.start + (idx / (VALUES.length - 1)) * (st.end - st.start);
      window.scrollTo({ top: targetScroll, behavior: "smooth" });
    }
  };

  return (
    <section
      ref={sectionRef}
      className={styles.section}
      id="outcomes"
      aria-label="Plus-X 15th Anniversary Transformation Architecture"
    >
      {/* Background WebGL Gradient Blinds with dynamic stops */}
      <GradientBlindsCanvas
        gradientColors={activeValue.gradientStops}
        angle={-20 + scrollProgress * 40}
        noise={0.12}
        blindCount={14}
        blindMinWidth={60}
        mouseDampening={0.18}
        spotlightRadius={0.7}
        spotlightSoftness={1.2}
        spotlightOpacity={0.88}
        distortAmount={0.2}
        mixBlendMode="screen"
        className={styles.bgShader}
      />

      {/* 3D WebGL Plus Cross Mesh Backdrop */}
      <Plus3DCanvas progress={scrollProgress} className={styles.bg3D} />

      {/* Main Content Stage */}
      <div className={styles.stage}>
        <div className={styles.layout}>
          {/* Left Column: Monumental PLUS + Kinetic Words Stack */}
          <div className={styles.typeCol}>
            {/* Fixed Lead Word */}
            <div className={styles.leadWrap}>
              <h2 className={styles.leadWord}>PLUS</h2>
            </div>

            {/* Kinetic 3D Perspective Word Stack */}
            <div className={styles.kineticViewport}>
              <div ref={wordsContainerRef} className={styles.kineticStack}>
                {VALUES.map((item, idx) => {
                  const isActive = idx === activeIdx;
                  const dist = Math.abs(idx - activeIdx);
                  const opacity = isActive ? 1 : Math.max(0.18, 0.6 - dist * 0.22);
                  const scale = isActive ? 1 : 0.94 - dist * 0.04;
                  const rotX = (idx - activeIdx) * 12;

                  return (
                    <button
                      key={item.id}
                      type="button"
                      className={`${styles.kineticWordBtn} ${isActive ? styles.kineticWordActive : ""}`}
                      style={{
                        opacity,
                        transform: `scale(${scale}) rotateX(${rotX}deg)`,
                        transformOrigin: "left center",
                      }}
                      onClick={() => handleWordClick(idx)}
                      onMouseEnter={() => setActiveIdx(idx)}
                    >
                      <span className={styles.kineticText}>{item.word}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Detail Rail */}
          <aside className={styles.detailCol} aria-live="polite">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeValue.id}
                className={styles.detailCard}
                initial={{ opacity: 0, y: 18, filter: "blur(6px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -14, filter: "blur(6px)" }}
                transition={{ duration: 0.45, ease: EASE }}
              >
                <div className={styles.cardHeader}>
                  <span className={styles.cardNum}>
                    {activeValue.num} // ARCHITECTURAL MANDATE
                  </span>
                  <h3 className={styles.cardTitle}>{activeValue.subtitle}</h3>
                </div>

                <p className={styles.cardDesc}>{activeValue.desc}</p>

                <div className={styles.delivSection}>
                  <p className={styles.delivLabel}>KEY CAPABILITIES</p>
                  <div className={styles.delivChips}>
                    {activeValue.deliverables.map((d) => (
                      <span key={d} className={styles.chip}>
                        <span className={styles.chipDot} aria-hidden="true" />
                        {d}
                      </span>
                    ))}
                  </div>
                </div>

                <div className={styles.cardAction}>
                  <a href="#contact" className={styles.initiateBtn}>
                    <span>INITIATE THIS MANDATE</span>
                    <span className={styles.btnArrow} aria-hidden="true">
                      →
                    </span>
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </aside>
        </div>
      </div>
    </section>
  );
}
