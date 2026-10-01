"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Plus3DCanvas } from "./Plus3DCanvas";
import styles from "@/styles/plus-ex/PlusXSection.module.css";

gsap.registerPlugin(ScrollTrigger);

/**
 * 13 UTOPIA Kinetic Typography Sequence:
 * Exact Plus-X rhythm: 1 Word → Gap → 3 Words → Gap → Repeat
 */
const ITEMS_13 = [
  "ANOMALY",
  "", // rhythmic gap
  "QUESTION",
  "THE",
  "DEFAULT",
  "", // rhythmic gap
  "SCALE",
  "", // rhythmic gap
  "FORGE",
  "UNREAL",
  "VISIONS",
  "", // rhythmic gap
  "TRANSFORMATION",
  "", // rhythmic gap
  "CRAFT",
  "BESPOKE",
  "WORLDS",
  "", // rhythmic gap
  "CONVICTION",
  "", // rhythmic gap
  "ENGINEER",
  "ZERO",
  "LATENCY",
  "", // rhythmic gap
  "UNREASONABLE",
];

export function PlusXSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: `+=${ITEMS_13.length * 45}vh`,
        pin: true,
        scrub: 0.6,
        anticipatePin: 1,
        onUpdate: (self) => {
          const p = Math.max(0, Math.min(1, self.progress));
          setScrollProgress(p);

          const totalSteps = ITEMS_13.length - 1;
          const currentExact = p * totalSteps;

          // Update cylindrical 3D curvature positioning dynamically
          const children = track.children;
          const lineStep = window.innerWidth <= 900 ? 68 : 118;

          for (let i = 0; i < children.length; i++) {
            const el = children[i] as HTMLElement;
            const offset = i - currentExact;
            const absOffset = Math.abs(offset);

            // Plus-X Exact 3D Cylindrical Drum Curvature Transform
            const translateY = offset * lineStep;
            const rotateX = -offset * 20; // Tangential cylinder rotation in degrees
            const translateZ = -Math.pow(absOffset, 1.25) * 65; // Spatial depth curve
            const scale = Math.max(0.85, 1 - absOffset * 0.045);
            const opacity = Math.max(0.2, 1 - absOffset * 0.28);

            el.style.transform = `translate3d(0px, ${translateY}px, ${translateZ}px) rotateX(${rotateX}deg) scale(${scale})`;
            el.style.opacity = `${opacity}`;

            if (absOffset < 0.48) {
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
          {/* 3D Cylindrical Curvature Viewport */}
          <div className={styles.cylinderViewport}>
            <div ref={trackRef} className={styles.cylinderDrum}>
              {ITEMS_13.map((text, idx) => {
                if (!text) {
                  return (
                    <div
                      key={`gap-${idx}`}
                      className={styles.cylinderItem}
                      aria-hidden="true"
                    />
                  );
                }
                return (
                  <div
                    key={`${idx}-${text}`}
                    className={`${styles.cylinderItem} ${idx === 0 ? styles.itemActive : ""}`}
                  >
                    <span className={styles.itemText}>{text}</span>
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
