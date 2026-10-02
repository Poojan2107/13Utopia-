"use client";

import { useRef } from "react";
import styles from "@/styles/home/HomeVideoSection.module.css";

/**
 * HomeVideoSection — Section 02
 * Plus-X inspired cinematic full-bleed video showcase reel with
 * custom audio/playback telemetry, spatial framing, and interactive HUD.
 */
export function HomeVideoSection() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLElement | null>(null);

  return (
    <section
      ref={containerRef}
      className={styles.videoSection}
      id="video-showcase"
      aria-label="13 Utopia Cinematic Showcase Reel"
    >
      {/* Subtle Top & Bottom Architectural Fade */}
      <div className={styles.fadeTop} aria-hidden="true" />
      <div className={styles.fadeBottom} aria-hidden="true" />

      {/* Main Cinematic Video Container */}
      <div className={styles.videoWrapper}>
        <video
          ref={videoRef}
          src="/metal-human/metal-human.mp4"
          poster="/metal-human/metal-human.jpg"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className={styles.videoElement}
        />

        {/* Video Overlay Tint & Grain */}
        <div className={styles.videoScrim} />

        {/* Minimal Editorial Caption */}
        <div className={styles.hudBottom}>
          <div className={styles.captionBlock}>
            <span className={styles.chapterNum}>ACT 01</span>
            <h2 className={styles.chapterTitle}>
              DIGITAL REALITIES IN TRANSCENDENCE
            </h2>
            <p className={styles.chapterSub}>
              Physical constraints eliminated through computational alchemy and bespoke spatial design.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
