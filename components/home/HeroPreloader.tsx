"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { CustomEase } from "gsap/CustomEase";
import styles from "@/styles/home/HeroPreloader.module.css";

// Register CustomEase and configure signature Awwwards 'hop' curve
if (typeof window !== "undefined") {
  gsap.registerPlugin(CustomEase);
  try {
    CustomEase.create("hop", ".8, 0, .3, 1");
  } catch {
    // Already registered
  }
}

/**
 * HeroPreloader — Pure, Minimalist Awwwards 010 Dual-Curtain Guillotine
 * Choreography:
 * 1. "13UTOPIA" reveals in dead center (0.3s - 1.1s)
 * 2. "UTOPIA" drops away downwards, "13" shifts to superscript badge,
 *    and monumental "U" enters & scales to 14rem to form "13U" (1.8s - 2.65s)
 * 3. Razor horizontal slit cuts across screen (2.8s - 3.4s)
 * 4. 50/50 dual-curtain guillotine parting reveals 3D hero (3.5s - 4.6s)
 * 5. Complete and unmount (4.8s)
 */
const UTOPIA_CHARS = ["U", "T", "O", "P", "I", "A"];

/**
 * The 13 UTOPIA lockup is static (no state, no hooks), so it lives at module
 * scope — defining it inside the component would remount it on every render.
 */
function CurtainMarkup() {
  return (
    <div className={styles.stage}>
      {/* Intro Title: 13UTOPIA */}
      <div className={styles.introTitle}>
        <h1>
          <span className={`${styles.char} ${styles.num13}`}>
            <span>13</span>
          </span>
          <span className={styles.utopiaGroup}>
            {UTOPIA_CHARS.map((char) => (
              <span
                key={char}
                className={`${styles.char} ${styles.utopiaChar}`}
              >
                <span>{char}</span>
              </span>
            ))}
          </span>
        </h1>
      </div>

      {/* Outro Title: Monumental U */}
      <div className={styles.outroTitle}>
        <h1>
          <span className={`${styles.char} ${styles.monumentalUChar}`}>
            <span>U</span>
          </span>
        </h1>
      </div>
    </div>
  );
}

export function HeroPreloader() {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const mainContent = document.querySelector<HTMLElement>("#main-content");

    const finish = () => {
      setComplete(true);
      if (mainContent) {
        gsap.set(mainContent, { clearProps: "clipPath,webkitClipPath" });
        mainContent.style.clipPath = "none";
      }
    };

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      finish();
      return;
    }

    // Hard failsafe — never leave the site clipped behind the slit
    const failsafe = window.setTimeout(finish, 5500);

    const preloader = root.querySelector<HTMLElement>(`.${styles.preloader}`);
    const splitOverlay = root.querySelector<HTMLElement>(`.${styles.splitOverlay}`);
    const slitBeam = root.querySelector<HTMLElement>(`.${styles.slitBeam}`);

    if (!preloader || !splitOverlay) {
      finish();
      return () => window.clearTimeout(failsafe);
    }

    const isMobile = window.innerWidth <= 1000;

    // Elements inside top preloader layer (Active animation)
    const pNum13 = preloader.querySelector<HTMLElement>(`.${styles.num13}`);
    const pNum13Span = preloader.querySelector<HTMLElement>(`.${styles.num13} span`);
    const pUtopiaSpans = preloader.querySelectorAll<HTMLElement>(
      `.${styles.utopiaChar} span`,
    );
    const pMonumentalUChar = preloader.querySelector<HTMLElement>(
      `.${styles.monumentalUChar}`,
    );
    const pMonumentalUSpan = preloader.querySelector<HTMLElement>(
      `.${styles.monumentalUChar} span`,
    );

    // Elements inside bottom splitOverlay layer (Pre-set to final 13U lockup)
    const sNum13 = splitOverlay.querySelector<HTMLElement>(`.${styles.num13}`);
    const sNum13Span = splitOverlay.querySelector<HTMLElement>(`.${styles.num13} span`);
    const sUtopiaSpans = splitOverlay.querySelectorAll<HTMLElement>(
      `.${styles.utopiaChar} span`,
    );
    const sMonumentalUChar = splitOverlay.querySelector<HTMLElement>(
      `.${styles.monumentalUChar}`,
    );
    const sMonumentalUSpan = splitOverlay.querySelector<HTMLElement>(
      `.${styles.monumentalUChar} span`,
    );

    const ctx = gsap.context(() => {
      // Coordinate System for 13U lockup
      const lockup13X = isMobile ? "2.8rem" : "6.7rem";
      const lockup13Y = isMobile ? "-1.25rem" : "-2.75rem";
      const monumentalUX = isMobile ? "-1.25rem" : "-3rem";
      const monumentalUSize = isMobile ? "6.5rem" : "14rem";

      // 1. Arm underlying hero with horizontal slit
      if (mainContent) {
        gsap.set(mainContent, {
          clipPath: "polygon(0 48%, 0 48%, 0 52%, 0 52%)",
        });
      }

      // 2. Pre-set split-overlay layer to exact final 13U lockup state
      gsap.set([sNum13Span, sMonumentalUSpan], { y: "0%" });
      gsap.set(sUtopiaSpans, { y: "100%" });

      if (sNum13) {
        gsap.set(sNum13, {
          x: lockup13X,
          y: lockup13Y,
          fontWeight: "900",
          scale: 0.72,
        });
      }

      if (sMonumentalUChar) {
        gsap.set(sMonumentalUChar, {
          x: monumentalUX,
          fontSize: monumentalUSize,
          fontWeight: "600",
        });
      }

      // 3. Master Chrono Timeline
      const tl = gsap.timeline({
        defaults: { ease: "hop" },
      });

      // --- Beat 1: Initial "13UTOPIA" enters centered ---
      const pIntroSpans = [
        ...(pNum13Span ? [pNum13Span] : []),
        ...Array.from(pUtopiaSpans),
      ];

      tl.to(
        pIntroSpans,
        {
          y: "0%",
          duration: 0.75,
          stagger: 0.04,
        },
        0.3,
      );

      // --- Beat 2: Transition from "13UTOPIA" -> "13U" ---
      // "UTOPIA" drops straight down and vanishes
      tl.to(
        pUtopiaSpans,
        {
          y: "100%",
          duration: 0.55,
          stagger: 0.03,
        },
        1.8,
      );

      // Simultaneously, "13" shifts to superscript badge and monumental "U" enters & scales
      if (pNum13) {
        tl.to(
          pNum13,
          {
            x: lockup13X,
            y: lockup13Y,
            fontWeight: "900",
            scale: 0.72,
            duration: 0.75,
          },
          1.9,
        );
      }

      if (pMonumentalUSpan) {
        tl.to(
          pMonumentalUSpan,
          {
            y: "0%",
            duration: 0.75,
          },
          1.9,
        );
      }

      if (pMonumentalUChar) {
        tl.to(
          pMonumentalUChar,
          {
            x: monumentalUX,
            fontSize: monumentalUSize,
            fontWeight: "600",
            duration: 0.75,
            onComplete: () => {
              // Arm the 50/50 horizontal guillotine clip paths
              gsap.set(preloader, {
                clipPath: "polygon(0 0, 100% 0, 100% 50%, 0 50%)",
              });
              gsap.set(splitOverlay, {
                clipPath: "polygon(0 50%, 100% 50%, 100% 100%, 0 100%)",
              });
            },
          },
          1.9,
        );
      }

      // --- Beat 3: Razor horizontal slit lasers across screen ---
      if (slitBeam) {
        tl.fromTo(
          slitBeam,
          { scaleX: 0, opacity: 0 },
          { scaleX: 1, opacity: 0.95, duration: 0.4, ease: "power2.out" },
          2.8,
        );
      }

      if (mainContent) {
        tl.to(
          mainContent,
          {
            clipPath: "polygon(0% 48%, 100% 48%, 100% 52%, 0% 52%)",
            duration: 0.65,
          },
          2.8,
        );
      }

      // --- Beat 4: THE REVEAL — 50/50 Guillotine split reveals the hero ---
      tl.call(() => {
        if (typeof window !== "undefined") {
          window.dispatchEvent(new CustomEvent("hero-revealed"));
        }
      }, undefined, 3.5);

      tl.to(
        [preloader, splitOverlay],
        {
          y: (i) => (i === 0 ? "-50%" : "50%"),
          duration: 1.05,
        },
        3.5,
      );

      if (mainContent) {
        tl.to(
          mainContent,
          {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            duration: 1.05,
          },
          3.5,
        );
      }

      if (slitBeam) {
        tl.to(
          slitBeam,
          {
            opacity: 0,
            duration: 0.35,
            ease: "power2.out",
          },
          3.5,
        );
      }

      const header = document.querySelector<HTMLElement>("header");
      if (header) {
        tl.fromTo(
          header,
          { opacity: 0, y: -15 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
          3.5,
        );
      }

      // --- Beat 5: Complete & clean unmount ---
      tl.call(
        () => {
          window.clearTimeout(failsafe);
          finish();
        },
        undefined,
        4.8,
      );
    }, root);

    return () => {
      window.clearTimeout(failsafe);
      ctx.revert();
      if (mainContent) {
        gsap.set(mainContent, { clearProps: "clipPath,webkitClipPath" });
        mainContent.style.clipPath = "none";
      }
    };
  }, []);

  if (complete) return null;

  return (
    <div ref={rootRef} className={styles.root} aria-hidden="true">
      {/* Center Razor Laser Slit Beam */}
      <div className={styles.slitBeam} />

      {/* Top Guillotine Curtain (z-index 2) */}
      <div className={styles.preloader}>
        <CurtainMarkup />
      </div>

      {/* Bottom Split Overlay (z-index 1) */}
      <div className={styles.splitOverlay}>
        <CurtainMarkup />
      </div>
    </div>
  );
}
