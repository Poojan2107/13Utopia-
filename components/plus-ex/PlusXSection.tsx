"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Plus3DCanvas } from "./Plus3DCanvas";
import styles from "@/styles/plus-ex/PlusXSection.module.css";

gsap.registerPlugin(ScrollTrigger);

/**
 * 13 UTOPIA Architectural Easter Egg List:
 * Exactly 13 items structured in the 1-3-3-1 rhythm:
 * 1 word · 3 words · 3 words · 1 word · 3 words · 3 words · 1 word · 3 words · 3 words · 1 word · 3 words · 3 words · 1 word
 */
const ITEMS_13 = [
  "ANOMALY",
  "QUESTION THE DEFAULT",
  "FORGE UNREAL VISIONS",
  "SCALE",
  "CRAFT BESPOKE WORLDS",
  "ENGINEER ZERO LATENCY",
  "TRANSFORMATION",
  "COMMAND DIGITAL SPACES",
  "DEPLOY AUTONOMOUS SWARMS",
  "CONVICTION",
  "REFUSE MEDIOCRE CONVENTIONS",
  "IGNITE CATEGORY CREATION",
  "UNREASONABLE",
];

export function PlusXSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [exactIndex, setExactIndex] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: `+=${ITEMS_13.length * 90}vh`,
        pin: true,
        scrub: 0.5,
        anticipatePin: 1,
        onUpdate: (self) => {
          const p = Math.max(0, Math.min(1, self.progress));
          setScrollProgress(p);

          const totalSteps = ITEMS_13.length - 1;
          const currentExact = p * totalSteps;
          setExactIndex(currentExact);

          // Update cylindrical 3D curvature positioning dynamically
          const children = track.children;
          const lineStep = window.innerWidth <= 900 ? 75 : 135;

          for (let i = 0; i < children.length; i++) {
            const el = children[i] as HTMLElement;
            const offset = i - currentExact;
            const absOffset = Math.abs(offset);

            // 3D Cylindrical Drum Curvature Transform
            const translateY = offset * lineStep;
            const rotateX = -offset * 26; // degrees
            const translateZ = -Math.pow(absOffset, 1.35) * 85; // px depth
            const scale = Math.max(0.8, 1 - absOffset * 0.07);
            const opacity = Math.max(0.12, 1 - absOffset * 0.42);

            el.style.transform = `translate3d(0px, ${translateY}px, ${translateZ}px) rotateX(${rotateX}deg) scale(${scale})`;
            el.style.opacity = `${opacity}`;

            if (absOffset < 0.45) {
              el.classList.add(styles.itemActive);
            } else {
              el.classList.remove(styles.itemActive);
            }
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
      className={styles.section}
      id="outcomes"
      aria-label="13 Utopia 3D Curvature Perspective Architecture"
    >
      {/* 3D "13" Emblem Canvas in Pure Obsidian Stage */}
      <Plus3DCanvas progress={scrollProgress} className={styles.canvas3D} />

      {/* Monumental 3D Curvature Typography Stage */}
      <div className={styles.stage}>
        <div className={styles.contentWrap}>
          {/* Static Lead Word */}
          <div className={styles.leadBox}>
            <h2 className={styles.leadTitle}>UTOPIA</h2>
          </div>

          {/* 3D Cylindrical Curvature Viewport */}
          <div className={styles.cylinderViewport}>
            <div ref={trackRef} className={styles.cylinderDrum}>
              {ITEMS_13.map((text, idx) => {
                const isSingleWord = !text.includes(" ");
                return (
                  <div
                    key={text}
                    className={`${styles.cylinderItem} ${idx === 0 ? styles.itemActive : ""}`}
                  >
                    <span
                      className={`${styles.itemText} ${isSingleWord ? styles.itemSingle : styles.itemTriple}`}
                    >
                      {text}
                    </span>
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
