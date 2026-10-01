"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Plus3DCanvas } from "./Plus3DCanvas";
import styles from "@/styles/plus-ex/PlusXSection.module.css";

gsap.registerPlugin(ScrollTrigger);

const PILLARS = [
  "ANOMALY",
  "UNREASONABLE",
  "TRANSFORMATION",
  "CONVICTION",
  "EXPERIENCE",
  "ARCHITECTURE",
  "TRANSCENDENCE",
];

export function PlusXSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: `+=${PILLARS.length * 100}vh`,
        pin: true,
        scrub: 0.6,
        anticipatePin: 1,
        onUpdate: (self) => {
          const p = Math.max(0, Math.min(1, self.progress));
          setScrollProgress(p);

          // Calculate active pillar index based on scroll progress
          const totalSteps = PILLARS.length - 1;
          const exactIdx = p * totalSteps;
          const currentIdx = Math.min(totalSteps, Math.max(0, Math.round(exactIdx)));
          setActiveIdx(currentIdx);

          // Kinetic vertical typography scrub matching Plus-X precision
          const firstItem = track.children[0] as HTMLElement | undefined;
          const itemHeight = firstItem ? firstItem.offsetHeight : 140;
          const targetY = -exactIdx * itemHeight;

          gsap.set(track, {
            y: targetY,
            overwrite: "auto",
          });
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
      className={styles.section}
      id="outcomes"
      aria-label="13 Utopia Kinetic Perspective Architecture"
    >
      {/* 3D 13 Emblem Canvas in Deep Spatial Background */}
      <Plus3DCanvas progress={scrollProgress} className={styles.canvas3D} />

      {/* Monumental Kinetic Typography Layer */}
      <div className={styles.stage}>
        <div className={styles.contentWrap}>
          {/* Static Lead Word */}
          <div className={styles.leadBox}>
            <h2 className={styles.leadTitle}>UTOPIA</h2>
          </div>

          {/* Kinetic Vertical Word Viewport */}
          <div className={styles.kineticViewport}>
            <div ref={trackRef} className={styles.wordsTrack}>
              {PILLARS.map((word, idx) => {
                const isActive = idx === activeIdx;
                const dist = Math.abs(idx - activeIdx);
                const opacity = isActive ? 1 : Math.max(0.12, 0.35 - dist * 0.12);

                return (
                  <div
                    key={word}
                    className={`${styles.wordRow} ${isActive ? styles.wordRowActive : ""}`}
                    style={{
                      opacity,
                      transform: `scale(${isActive ? 1 : 0.96})`,
                    }}
                  >
                    <span className={styles.wordText}>{word}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
