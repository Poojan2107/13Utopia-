"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { CustomEase } from "gsap/CustomEase";
import styles from "@/styles/home/HeroPreloader.module.css";

// Register CustomEase and configure the signature Awwwards 'hop' curve
if (typeof window !== "undefined") {
  gsap.registerPlugin(CustomEase);
  try {
    CustomEase.create("hop", ".8, 0, .3, 1");
  } catch {
    // Already registered
  }
}

/**
 * HeroPreloader — Direct architectural adaptation of Awwwards 010 (Component Demo)
 * Bespoke 13 UTOPIA Sequence:
 * 1. Initial title appears: "13UTOPIA"
 * 2. "UTOPIA" drops away, and "1" & "3" separate across the screen (like N & 10 in the video)
 * 3. Both "1" and "3" glide inward and come together to form "13"
 * 4. The monumental "U" enters from below and scales into the frame (like how 10 scaled)
 * 5. Horizontal split guillotine (top -50%, bottom +50%) reveals the 3D gold bust hero
 */
export function HeroPreloader() {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setComplete(true);
      return;
    }

    const preloader = root.querySelector<HTMLElement>(`.${styles.preloader}`);
    const splitOverlay = root.querySelector<HTMLElement>(`.${styles.splitOverlay}`);
    const splitLine = root.querySelector<HTMLElement>(`.${styles.splitLine}`);
    const tags = root.querySelectorAll<HTMLElement>(`.${styles.tagWord} span`);

    if (!preloader || !splitOverlay) return;

    const isMobile = window.innerWidth <= 900;

    // Elements inside top preloader layer
    const pNum1 = preloader.querySelector<HTMLElement>(`.${styles.num1}`);
    const pNum1Span = preloader.querySelector<HTMLElement>(`.${styles.num1} span`);
    const pNum3 = preloader.querySelector<HTMLElement>(`.${styles.num3}`);
    const pNum3Span = preloader.querySelector<HTMLElement>(`.${styles.num3} span`);
    const pUtopiaSpans = preloader.querySelectorAll<HTMLElement>(
      `.${styles.utopiaChar} span`,
    );
    const pMonumentalU = preloader.querySelector<HTMLElement>(
      `.${styles.monumentalU}`,
    );
    const pGoldUSpan = preloader.querySelector<HTMLElement>(
      `.${styles.goldU} span`,
    );

    // Elements inside bottom split-overlay layer
    const sNum1 = splitOverlay.querySelector<HTMLElement>(`.${styles.num1}`);
    const sNum1Span = splitOverlay.querySelector<HTMLElement>(`.${styles.num1} span`);
    const sNum3 = splitOverlay.querySelector<HTMLElement>(`.${styles.num3}`);
    const sNum3Span = splitOverlay.querySelector<HTMLElement>(`.${styles.num3} span`);
    const sUtopiaSpans = splitOverlay.querySelectorAll<HTMLElement>(
      `.${styles.utopiaChar} span`,
    );
    const sMonumentalU = splitOverlay.querySelector<HTMLElement>(
      `.${styles.monumentalU}`,
    );
    const sGoldUSpan = splitOverlay.querySelector<HTMLElement>(
      `.${styles.goldU} span`,
    );

    const ctx = gsap.context(() => {
      // Final lockup offsets for seamless 50/50 split matching
      const finalNumX = isMobile ? "-1.8rem" : "-4.2rem";
      const finalUX = isMobile ? "0.8rem" : "1.8rem";
      const finalUScale = isMobile ? 1.1 : 1.25;

      // 1. Pre-set split-overlay to the final locked coordinates so halves match seamlessly
      gsap.set([sNum1Span, sNum3Span, sGoldUSpan], { y: "0%" });
      gsap.set(sUtopiaSpans, { y: "100%" });
      if (sNum1) gsap.set(sNum1, { x: finalNumX });
      if (sNum3) gsap.set(sNum3, { x: finalNumX });
      if (sMonumentalU) {
        gsap.set(sMonumentalU, { x: finalUX, scale: finalUScale });
      }

      // 2. Master Chrono Timeline
      const tl = gsap.timeline({
        defaults: { ease: "hop" },
      });

      // --- Beat 0: Editorial tags reveal ---
      if (tags.length) {
        tl.to(
          tags,
          {
            y: "0%",
            duration: 0.7,
            stagger: 0.08,
          },
          0.2,
        );
      }

      // --- Beat 1: Initial "13UTOPIA" title reveals character by character ---
      const initialChars = [
        ...(pNum1Span ? [pNum1Span] : []),
        ...(pNum3Span ? [pNum3Span] : []),
        ...Array.from(pUtopiaSpans),
      ];

      tl.to(
        initialChars,
        {
          y: "0%",
          duration: 0.75,
          stagger: 0.04,
        },
        0.35,
      );

      // --- Beat 2: "UTOPIA" drops away, "1" and "3" separate across the frame ---
      tl.to(
        pUtopiaSpans,
        {
          y: "100%",
          duration: 0.65,
          stagger: 0.03,
        },
        1.75,
      );

      // "1" shifts to the left, "3" shifts to the right (like N and 10 in the video)
      const sepDistance = isMobile ? "3.5rem" : "8.5rem";

      if (pNum1) {
        tl.to(
          pNum1,
          {
            x: `-${sepDistance}`,
            duration: 0.8,
          },
          1.9,
        );
      }

      if (pNum3) {
        tl.to(
          pNum3,
          {
            x: sepDistance,
            duration: 0.8,
          },
          1.9,
        );
      }

      // --- Beat 3: Both "1" and "3" glide inward and come together into "13" ---
      if (pNum1) {
        tl.to(
          pNum1,
          {
            x: "0rem",
            duration: 0.75,
          },
          2.75,
        );
      }

      if (pNum3) {
        tl.to(
          pNum3,
          {
            x: "0rem",
            duration: 0.75,
          },
          2.75,
        );
      }

      // --- Beat 4: "13" shifts left, and monumental "U" enters & scales into the frame ---
      // "13" shifts left to make room for U
      const numPair = [pNum1, pNum3].filter(Boolean) as HTMLElement[];
      if (numPair.length) {
        tl.to(
          numPair,
          {
            x: finalNumX,
            duration: 0.7,
          },
          3.45,
        );
      }

      // "U" comes into frame and scales like 10 in the video
      if (pMonumentalU) {
        tl.fromTo(
          pMonumentalU,
          {
            x: finalUX,
            scale: 0.5,
          },
          {
            x: finalUX,
            scale: finalUScale,
            duration: 0.75,
            onComplete: () => {
              // Arm the 50/50 horizontal guillotine split
              gsap.set(preloader, {
                clipPath: "polygon(0 0, 100% 0, 100% 50%, 0 50%)",
              });
              gsap.set(splitOverlay, {
                clipPath: "polygon(0 50%, 100% 50%, 100% 100%, 0 100%)",
              });
            },
          },
          3.45,
        );
      }

      if (pGoldUSpan) {
        tl.fromTo(
          pGoldUSpan,
          { y: "100%" },
          {
            y: "0%",
            duration: 0.75,
          },
          3.45,
        );
      }

      // --- Beat 5: Horizon laser line flashes across the 50% split axis ---
      if (splitLine) {
        tl.fromTo(
          splitLine,
          { scaleX: 0, opacity: 0 },
          { scaleX: 1, opacity: 0.85, duration: 0.35, ease: "power2.out" },
          4.15,
        );
      }

      // Corner tags slide out
      if (tags.length) {
        tl.to(
          tags,
          {
            y: "100%",
            duration: 0.45,
            stagger: 0.05,
          },
          4.3,
        );
      }

      // --- Beat 6: THE REVEAL — Dual Guillotine split parts into the hero ---
      tl.to(
        preloader,
        {
          y: "-50%",
          duration: 1.15,
          ease: "hop",
        },
        4.55,
      );

      tl.to(
        splitOverlay,
        {
          y: "50%",
          duration: 1.15,
          ease: "hop",
        },
        4.55,
      );

      if (splitLine) {
        tl.to(
          splitLine,
          {
            opacity: 0,
            duration: 0.4,
            ease: "power2.out",
          },
          4.55,
        );
      }

      // --- Beat 7: Complete and unmount preloader ---
      tl.call(() => {
        setComplete(true);
      }, undefined, 5.8);
    }, root);

    return () => ctx.revert();
  }, []);

  if (complete) return null;

  const utopiaChars = "UTOPIA".split("");

  const TitleMarkup = () => (
    <div className={styles.stage}>
      <div className={styles.titleContainer}>
        {/* 1 and 3 Number Pair */}
        <div className={styles.numLockup}>
          <span className={`${styles.char} ${styles.num1}`}>
            <span>1</span>
          </span>
          <span className={`${styles.char} ${styles.num3}`}>
            <span>3</span>
          </span>
        </div>

        {/* UTOPIA Word (Drops out) */}
        <div className={styles.utopiaWord}>
          {utopiaChars.map((char, index) => (
            <span key={index} className={`${styles.char} ${styles.utopiaChar}`}>
              <span>{char}</span>
            </span>
          ))}
        </div>

        {/* Monumental Gold U (Enters & Scales like 10) */}
        <div className={styles.monumentalU}>
          <span className={`${styles.char} ${styles.goldU}`}>
            <span>U</span>
          </span>
        </div>
      </div>
    </div>
  );

  return (
    <div ref={rootRef} className={styles.root} aria-hidden="true">
      {/* Center Dividing Laser Axis */}
      <div className={styles.splitLine} />

      {/* Top Guillotine Curtain (z-index 2) */}
      <div className={styles.preloader}>
        <TitleMarkup />
      </div>

      {/* Bottom Split Overlay (z-index 1) */}
      <div className={styles.splitOverlay}>
        <TitleMarkup />
      </div>

      {/* Floating 13 UTOPIA Corner Tags */}
      <div className={styles.tagsOverlay}>
        <div className={`${styles.tag} ${styles.tag1}`}>
          <p className={styles.tagWord}>
            <span>BE</span>
          </p>
          <span className={styles.tagSpace}>&nbsp;</span>
          <p className={styles.tagWord}>
            <span>UNREAL</span>
          </p>
        </div>

        <div className={`${styles.tag} ${styles.tag2}`}>
          <p className={styles.tagWord}>
            <span>BE</span>
          </p>
          <span className={styles.tagSpace}>&nbsp;</span>
          <p className={styles.tagWord}>
            <span>UNREASONABLE</span>
          </p>
        </div>

        <div className={`${styles.tag} ${styles.tag3}`}>
          <p className={styles.tagWord}>
            <span>13</span>
          </p>
          <span className={styles.tagSpace}>&nbsp;</span>
          <p className={styles.tagWord}>
            <span>UTOPIA</span>
          </p>
          <span className={styles.tagSpace}>&nbsp;</span>
          <p className={styles.tagWord}>
            <span>//</span>
          </p>
          <span className={styles.tagSpace}>&nbsp;</span>
          <p className={styles.tagWord}>
            <span>2026</span>
          </p>
        </div>
      </div>
    </div>
  );
}
