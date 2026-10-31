"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { revertGsapContext, SITE_SCRUB } from "@/components/motion/scrollFeel";
import { HomeExpertiseCards } from "@/components/home/HomeExpertiseCards";
import styles from "@/styles/home/HomeCreatePath.module.css";

gsap.registerPlugin(ScrollTrigger);

/**
 * Reference-inspired flowing curve:
 * Upper-right entry, large upper sweep,
 * long shallow curve, circular left loop,
 * and bottom-left ending.
 */

const VIEW_X = 200;
const VIEW_Y = -140;
const VIEW_W = 1800;
const VIEW_H = 1240;

const PATH = `
M 2000 -140

C 1868 -140, 1755 -5, 1615 39
C 1474 82, 1377 78, 1273 22
C 1166 -33, 1061 -72, 973 -55
C 885 -38, 868 52, 920 148

C 991 276, 1175 295, 1360 308
C 1544 321, 1615 376, 1658 462
C 1703 554, 1640 638, 1518 677

C 1342 735, 1105 731, 912 682
C 762 645, 657 607, 634 505

C 613 415, 657 383, 702 417
C 771 468, 787 564, 766 658

C 739 780, 657 906, 571 1029
`;

function clamp01(t: number) {
  return Math.max(0, Math.min(1, t));
}

export function HomeCreatePath() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const drawRef = useRef<SVGPathElement | null>(null);
  const penRef = useRef<SVGGElement | null>(null);
  const cardsApplyRef = useRef<(progress: number) => void>(() => {});

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const draw = drawRef.current;
    const pen = penRef.current;

    if (!section || !draw || !pen) return;

    const length = draw.getTotalLength();

    draw.style.strokeDasharray = `${length}`;
    draw.style.strokeDashoffset = `${length}`;

    const apply = (progress: number) => {
      const reduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      const drawn = reduced ? 1 : clamp01(progress);

      cardsApplyRef.current(drawn);
      draw.style.strokeDashoffset = `${length * (1 - drawn)}`;

      const tip = draw.getPointAtLength(length * drawn);

      pen.setAttribute("transform", `translate(${tip.x} ${tip.y})`);
      pen.style.opacity = drawn > 0.02 && drawn < 0.985 ? "1" : "0";
    };

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduced) {
      apply(1);
      return;
    }

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: "+=220%",
        pin: true,
        pinSpacing: true,
        anticipatePin: 0,
        scrub: SITE_SCRUB,
        onUpdate: (self) => {
          apply(self.progress);
        },
        onRefresh: (self) => {
          apply(self.progress);
        },
      });
    }, section);

    return () => revertGsapContext(ctx);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="create-path"
      className={styles.section}
      aria-hidden="true"
    >
      <div className={styles.frame}>
        <div className={styles.mark}>
          <svg
            className={styles.canvas}
            viewBox={`${VIEW_X} ${VIEW_Y} ${VIEW_W} ${VIEW_H}`}
            preserveAspectRatio="xMidYMid meet"
          >
            <path className={styles.ghost} d={PATH} />
            <path ref={drawRef} className={styles.draw} d={PATH} />
            <g ref={penRef} className={styles.pen}>
              <circle r="18" />
              <circle r="6" />
            </g>
          </svg>
          <HomeExpertiseCards embedded progressRef={cardsApplyRef} />
        </div>
      </div>
    </section>
  );
}
