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
 * Tailored specifically for 13 UTOPIA:
 * - 3 Floating editorial tags ("BE UNREAL", "BE UNREASONABLE", "13 UTOPIA // 2026")
 * - Monumental dual-title sequence: "13 UTOPIA" -> "13" -> Gold "UTOPIA" lockup
 * - Seamless 50/50 dual-overlay guillotine split parting into the 3D gold bust hero
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
    const introFirstCharSpan = preloader.querySelector<HTMLElement>(
      `.${styles.introTitle} .${styles.firstChar} span`,
    );
    const introFirstChar = preloader.querySelector<HTMLElement>(
      `.${styles.introTitle} .${styles.firstChar}`,
    );
    const introCharSpans = preloader.querySelectorAll<HTMLElement>(
      `.${styles.introTitle} .${styles.char} span`,
    );
    const outroCharSpans = preloader.querySelectorAll<HTMLElement>(
      `.${styles.outroTitle} .${styles.char} span, .${styles.outroTitle} .${styles.goldChar} span`,
    );
    const outroChars = preloader.querySelectorAll<HTMLElement>(
      `.${styles.outroTitle} .${styles.char}, .${styles.outroTitle} .${styles.goldChar}`,
    );

    // Elements inside bottom split-overlay layer
    const splitFirstCharSpan = splitOverlay.querySelector<HTMLElement>(
      `.${styles.introTitle} .${styles.firstChar} span`,
    );
    const splitFirstChar = splitOverlay.querySelector<HTMLElement>(
      `.${styles.introTitle} .${styles.firstChar}`,
    );
    const splitOutroCharSpans = splitOverlay.querySelectorAll<HTMLElement>(
      `.${styles.outroTitle} .${styles.char} span, .${styles.outroTitle} .${styles.goldChar} span`,
    );
    const splitOutroChars = splitOverlay.querySelectorAll<HTMLElement>(
      `.${styles.outroTitle} .${styles.char}, .${styles.outroTitle} .${styles.goldChar}`,
    );

    const ctx = gsap.context(() => {
      // 1. Initial settled placement on split-overlay (so split halves match seamlessly)
      gsap.set([splitFirstCharSpan, ...Array.from(splitOutroCharSpans)], {
        y: "0%",
      });

      if (splitFirstChar) {
        gsap.set(splitFirstChar, {
          x: isMobile ? "3.2rem" : "7.5rem",
          y: isMobile ? "-0.4rem" : "-1.2rem",
          fontWeight: "900",
          scale: 0.82,
        });
      }

      if (splitOutroChars.length) {
        gsap.set(splitOutroChars, {
          x: isMobile ? "-1.5rem" : "-3.5rem",
        });
      }

      // 2. Choreographed Master Timeline
      const tl = gsap.timeline({
        defaults: { ease: "hop" },
      });

      // Tags slide in
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

      // Intro title ("13 UTOPIA") reveals character by character
      const allIntroSpans = [
        ...(introFirstCharSpan ? [introFirstCharSpan] : []),
        ...Array.from(introCharSpans),
      ];

      tl.to(
        allIntroSpans,
        {
          y: "0%",
          duration: 0.75,
          stagger: 0.04,
        },
        0.35,
      );

      // "UTOPIA" drops down through floor, isolating the monumental "13"
      tl.to(
        introCharSpans,
        {
          y: "100%",
          duration: 0.7,
          stagger: 0.03,
        },
        1.7,
      );

      // Radiant gold "UTOPIA" rises from below
      tl.to(
        outroCharSpans,
        {
          y: "0%",
          duration: 0.75,
          stagger: 0.04,
        },
        2.1,
      );

      // "13" and gold "UTOPIA" glide horizontally into intermediate position
      if (introFirstChar) {
        tl.to(
          introFirstChar,
          {
            x: isMobile ? "4rem" : "9.5rem",
            duration: 0.8,
          },
          2.8,
        );
      }

      if (outroChars.length) {
        tl.to(
          outroChars,
          {
            x: isMobile ? "-1.5rem" : "-3.5rem",
            duration: 0.8,
          },
          2.8,
        );
      }

      // Lockup settles into definitive brand lockup & arms the 50/50 clip path
      if (introFirstChar) {
        tl.to(
          introFirstChar,
          {
            x: isMobile ? "3.2rem" : "7.5rem",
            y: isMobile ? "-0.4rem" : "-1.2rem",
            fontWeight: "900",
            scale: 0.82,
            duration: 0.65,
          },
          3.4,
        );
      }

      if (outroChars.length) {
        tl.to(
          outroChars,
          {
            x: isMobile ? "-1.5rem" : "-3.5rem",
            duration: 0.65,
            onComplete: () => {
              // Arm the 50/50 horizontal split
              gsap.set(preloader, {
                clipPath: "polygon(0 0, 100% 0, 100% 50%, 0 50%)",
              });
              gsap.set(splitOverlay, {
                clipPath: "polygon(0 50%, 100% 50%, 100% 100%, 0 100%)",
              });
            },
          },
          3.4,
        );
      }

      // Subtle center laser horizon line flashes
      if (splitLine) {
        tl.fromTo(
          splitLine,
          { scaleX: 0, opacity: 0 },
          { scaleX: 1, opacity: 0.85, duration: 0.35, ease: "power2.out" },
          3.7,
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
          3.9,
        );
      }

      // THE SPLIT: Top gate flies UP (-50%), Bottom gate flies DOWN (+50%)
      tl.to(
        preloader,
        {
          y: "-50%",
          duration: 1.05,
          ease: "hop",
        },
        4.1,
      );

      tl.to(
        splitOverlay,
        {
          y: "50%",
          duration: 1.05,
          ease: "hop",
        },
        4.1,
      );

      if (splitLine) {
        tl.to(
          splitLine,
          {
            opacity: 0,
            duration: 0.4,
            ease: "power2.out",
          },
          4.1,
        );
      }

      // Complete & clean up
      tl.call(() => {
        setComplete(true);
      }, undefined, 5.2);
    }, root);

    return () => ctx.revert();
  }, []);

  if (complete) return null;

  const utopiaLetters = "UTOPIA".split("");

  const TitleMarkup = () => (
    <>
      <div className={styles.introTitle}>
        <h1 className={styles.titleText}>
          <span className={styles.firstChar}>
            <span>13</span>
          </span>
          <span className={styles.space}>&nbsp;</span>
          {utopiaLetters.map((char, index) => (
            <span key={index} className={styles.char}>
              <span>{char}</span>
            </span>
          ))}
        </h1>
      </div>

      <div className={styles.outroTitle}>
        <h1 className={styles.titleText}>
          <span className={styles.goldWord}>
            {utopiaLetters.map((char, index) => (
              <span key={index} className={styles.goldChar}>
                <span>{char}</span>
              </span>
            ))}
          </span>
        </h1>
      </div>
    </>
  );

  return (
    <div ref={rootRef} className={styles.root} aria-hidden="true">
      {/* Laser horizon splitting guide */}
      <div className={styles.splitLine} />

      {/* Top Guillotine Curtain (z-index 2) */}
      <div className={styles.preloader}>
        <TitleMarkup />
      </div>

      {/* Bottom Split Overlay (z-index 1) */}
      <div className={styles.splitOverlay}>
        <TitleMarkup />
      </div>

      {/* Floating 13 UTOPIA Creed Corner Tags */}
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
