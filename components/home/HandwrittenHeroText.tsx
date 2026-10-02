"use client";

import { useEffect, useRef, useState } from "react";
import styles from "@/styles/home/HandwrittenHeroText.module.css";

const UNREAL_LETTERS = ["U", "n", "r", "e", "a", "l"];
const UNREASONABLE_LETTERS = [
  "U",
  "n",
  "r",
  "e",
  "a",
  "s",
  "o",
  "n",
  "a",
  "b",
  "l",
  "e",
];

export function HandwrittenHeroText() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [playCount, setPlayCount] = useState(0);

  // Mouse tilt parallax interaction
  useEffect(() => {
    const el = containerRef.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let rafId: number;

    const onMouseMove = (e: MouseEvent) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      targetX = (e.clientX - cx) / cx;
      targetY = (e.clientY - cy) / cy;
    };

    const animate = () => {
      currentX += (targetX - currentX) * 0.05;
      currentY += (targetY - currentY) * 0.05;

      if (el) {
        el.style.setProperty("--mx", `${currentX * 10}px`);
        el.style.setProperty("--my", `${currentY * 7}px`);
        el.style.setProperty("--rx", `${currentY * -1.8}deg`);
        el.style.setProperty("--ry", `${currentX * 2.2}deg`);
      }
      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  // Re-play handwriting animation on click or hover
  const handleReplay = () => {
    setPlayCount((p) => p + 1);
  };

  return (
    <div
      ref={containerRef}
      key={playCount}
      className={styles.heroLockup}
      onClick={handleReplay}
      onMouseEnter={handleReplay}
      title="Hover or click to replay handwriting"
    >
      {/* Massive Left Architectural "BE" */}
      <div className={styles.beWrapper}>
        <span className={styles.beText}>BE</span>
      </div>

      {/* Right: Bespoke Luxury Cursive Handwriting Script */}
      <div className={styles.scriptWrapper}>
        {/* Row 1: "Unreal" in Cursive Calligraphy */}
        <div className={styles.wordRow}>
          <div className={styles.handwrittenWord}>
            <div className={`${styles.cursiveWord} ${styles.animateUnreal}`}>
              {UNREAL_LETTERS.map((letter, idx) => (
                <span
                  key={`u-${idx}`}
                  className={styles.cursiveChar}
                  style={{ "--char-idx": idx } as React.CSSProperties}
                >
                  {letter}
                </span>
              ))}
            </div>

            {/* Calligraphic Flourish Underline */}
            <svg
              className={styles.swashSvg}
              viewBox="0 0 340 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                className={`${styles.swashPath} ${styles.animateSwashUnreal}`}
                d="M4 16C60 4 160 4 230 16C272 23 308 26 336 12"
                stroke="#ffffff"
                strokeWidth="2.8"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>

        {/* Row 2: "Unreasonable" in Cursive Calligraphy */}
        <div className={styles.wordRow}>
          <div className={styles.handwrittenWord}>
            <div className={`${styles.cursiveWord} ${styles.animateUnreasonable}`}>
              {UNREASONABLE_LETTERS.map((letter, idx) => (
                <span
                  key={`ur-${idx}`}
                  className={styles.cursiveChar}
                  style={{ "--char-idx": idx } as React.CSSProperties}
                >
                  {letter}
                </span>
              ))}
            </div>

            {/* Calligraphic Flourish Underline */}
            <svg
              className={styles.swashSvg}
              viewBox="0 0 500 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                className={`${styles.swashPath} ${styles.animateSwashUnreasonable}`}
                d="M6 18C90 4 240 3 355 18C412 26 460 28 494 14"
                stroke="#ffffff"
                strokeWidth="2.8"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
