"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Plus3DCanvas } from "./Plus3DCanvas";
import styles from "@/styles/plus-ex/PlusXSection.module.css";

gsap.registerPlugin(ScrollTrigger);

const WORDS = [
  "EXPERIENCE",
  "CURIOSITY",
  "INQUISITIVE",
  "EMPATHETIC",
  "TRANSFORMATION",
  "UNREASONABLE",
  "ANOMALY",
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
        end: `+=${WORDS.length * 90}vh`,
        pin: true,
        scrub: 0.55,
        anticipatePin: 1,
        onUpdate: (self) => {
          const p = self.progress;
          setScrollProgress(p);

          const totalSteps = WORDS.length - 1;
          const exactIdx = p * totalSteps;
          const currentIdx = Math.min(totalSteps, Math.max(0, Math.round(exactIdx)));
          setActiveIdx(currentIdx);

          // Kinetic vertical typography scrub
          const firstItem = track.children[0] as HTMLElement | undefined;
          const itemHeight = firstItem ? firstItem.offsetHeight : 120;
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
      {/* 3D 13 Emblem in Deep Spatial Background */}
      <Plus3DCanvas progress={scrollProgress} className={styles.canvas3D} />

      {/* Kinetic Typography Stage */}
      <div className={styles.stage}>
        <div className={styles.contentWrap}>
          {/* Static Lead Word */}
          <div className={styles.leadBox}>
            <h2 className={styles.leadTitle}>PLUS</h2>
          </div>

          {/* Kinetic Vertical Word Viewport */}
          <div className={styles.kineticViewport}>
            <div ref={trackRef} className={styles.wordsTrack}>
              {WORDS.map((word, idx) => {
                const isActive = idx === activeIdx;
                const dist = Math.abs(idx - activeIdx);
                const opacity = isActive ? 1 : Math.max(0.12, 0.38 - dist * 0.12);

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
