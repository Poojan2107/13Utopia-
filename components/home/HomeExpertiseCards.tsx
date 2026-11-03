"use client";

import { useLayoutEffect, useRef, type MutableRefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { revertGsapContext, SITE_SCRUB } from "@/components/motion/scrollFeel";
import styles from "@/styles/home/HomeExpertiseCards.module.css";

gsap.registerPlugin(ScrollTrigger);

/**
 * Three cards start as a stacked deck, fan open, flip face-up,
 * then settle in a row. Scroll progress drives the whole move.
 */

const FRONT_SRC = encodeURI("/images/Utopia cards Front.jpg");

const CARDS = [
  {
    id: "create",
    word: "Create",
    backSrc: encodeURI("/images/Utopia cards1.jpg"),
  },
  {
    id: "build",
    word: "Build",
    backSrc: encodeURI("/images/Utopia cards2.jpg"),
  },
  {
    id: "grow",
    word: "Grow",
    backSrc: encodeURI("/images/Utopia cards3.jpg"),
  },
] as const;

function clamp01(value: number) {
  return Math.max(0, Math.min(1, value));
}

function fit(
  value: number,
  in0: number,
  in1: number,
  out0: number,
  out1: number,
  ease?: (t: number) => number,
) {
  let t = clamp01((value - in0) / (in1 - in0));
  if (ease) t = ease(t);
  return out0 + t * (out1 - out0);
}

function expoOut(t: number) {
  return t >= 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

function backInOut(t: number) {
  const c2 = 1.70158 * 1.525;
  if (t < 0.5) {
    return (Math.pow(2 * t, 2) * ((c2 + 1) * 2 * t - c2)) / 2;
  }
  return (Math.pow(2 * t - 2, 2) * ((c2 + 1) * (t * 2 - 2) + c2) + 2) / 2;
}

export function HomeExpertiseCards({
  embedded = false,
  progressRef,
}: {
  embedded?: boolean;
  progressRef?: MutableRefObject<(progress: number) => void>;
}) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);
  const titleRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const subRef = useRef<HTMLParagraphElement | null>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const apply = (progress: number) => {
      const drawn = reduced ? 1 : clamp01(progress);
      const narrow = window.innerWidth <= 720;
      const sample = cardRefs.current[0];
      const cardWidth = sample?.offsetWidth ?? 320;
      const gap = narrow ? 18 : 32;
      const count = CARDS.length;
      const row = count * cardWidth + (count - 1) * gap;
      const origin = -row / 2 + cardWidth / 2;

      titleRefs.current.forEach((word, index) => {
        if (!word) return;
        const reveal = fit(drawn, 0.02 + index * 0.04, 0.16 + index * 0.04, 110, 0, expoOut);
        word.style.transform = `translate3d(0, ${reveal}%, 0)`;
      });

      const subReveal = fit(drawn, 0.08, 0.22, 110, 0, expoOut);
      if (subRef.current) {
        subRef.current.style.transform = `translate3d(0, ${subReveal}%, 0)`;
      }

      const spread = fit(drawn, 0.18, 0.78, 0, 1);
      const flip = fit(drawn, 0.22, 0.92, 0, 1);
      const fanMix = 1 - Math.abs(clamp01(spread / 0.75) * 2 - 1);

      CARDS.forEach((_, index) => {
        const card = cardRefs.current[index];
        if (!card) return;

        const peek = (index - (count - 1) / 2) * (narrow ? 14 : 18);
        const spreadX = origin + index * (cardWidth + gap);
        const x = narrow ? peek : fit(spread, 0.2, 1, peek, spreadX, expoOut);
        const y = (0.5 - drawn) * 36 + Math.sin(drawn * Math.PI * 2 + index) * 8 * (1 - spread);
        const rotZ = narrow ? (index - 1) * 5 * (1 - flip) : fanMix * (index - 1) * 11;
        const flipEnd = 0.7 - Math.abs(count - 1 - index) / 20;
        const rotY = narrow
          ? fit(drawn, 0.12 + index * 0.18, 0.42 + index * 0.18, 180, 0, backInOut)
          : fit(flip, 0, flipEnd, 180, 0, backInOut);

        card.style.transform = `translate3d(${x.toFixed(2)}px, ${y.toFixed(2)}px, 0) rotateZ(${rotZ.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg)`;
        card.style.zIndex = String(spread > 0.85 ? index + 1 : count - index);
      });
    };

    apply(reduced ? 1 : 0);

    if (embedded && progressRef) {
      progressRef.current = apply;
      return () => {
        progressRef.current = () => {};
      };
    }

    if (reduced) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: "+=200%",
        pin: true,
        pinSpacing: true,
        anticipatePin: 0,
        scrub: SITE_SCRUB,
        onUpdate: (self) => apply(self.progress),
        onRefresh: (self) => apply(self.progress),
      });
    }, section);

    return () => revertGsapContext(ctx);
  }, [embedded, progressRef]);

  return (
    <section
      ref={sectionRef}
      id="practice"
      className={embedded ? `${styles.section} ${styles.overlay}` : styles.section}
      aria-label="How we work"
    >
      <div className={styles.stage}>
        <div className={styles.copy}>
          <h2 className={styles.title}>
            <span className={styles.line}>
              <span
                ref={(node) => {
                  titleRefs.current[0] = node;
                }}
                className={styles.word}
              >
                How we
              </span>
            </span>
            <span className={styles.line}>
              <span
                ref={(node) => {
                  titleRefs.current[1] = node;
                }}
                className={styles.word}
              >
                work
              </span>
            </span>
          </h2>
          <div className={styles.subWrap}>
            <p ref={subRef} className={styles.sub}>
              Strategy, product, and growth, held in one practice.
            </p>
          </div>
        </div>

        <div className={styles.deck}>
          {CARDS.map((card, index) => (
            <article
              key={card.id}
              ref={(node) => {
                cardRefs.current[index] = node;
              }}
              className={styles.card}
              aria-label={card.word}
            >
              {/* Visible after flip (card rotateY → 0) */}
              <div className={styles.face}>
                <img
                  className={styles.cardImage}
                  src={card.backSrc}
                  alt={`${card.word} card`}
                  draggable={false}
                  decoding="async"
                />
              </div>
              {/* Visible initially (card rotateY = 180) */}
              <div className={`${styles.face} ${styles.back}`} aria-hidden="true">
                <img
                  className={styles.cardImage}
                  src={FRONT_SRC}
                  alt=""
                  draggable={false}
                  decoding="async"
                  fetchPriority={index === 0 ? "high" : "auto"}
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
