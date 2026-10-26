"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import styles from "./studiomirage.module.css";
import { MirageCanvas, PROJECTS_DATA } from "./MirageCanvas";

export function StudioMiragePage() {
  const [isHomeMode, setIsHomeMode] = useState(true);
  const [activeSlideIndex, setActiveSlideIndex] = useState(1); // Default to Maison Margiela (matching screenshot)
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const currentProject = PROJECTS_DATA[activeSlideIndex];
  const prevProject =
    PROJECTS_DATA[(activeSlideIndex - 1 + PROJECTS_DATA.length) % PROJECTS_DATA.length];
  const nextProject =
    PROJECTS_DATA[(activeSlideIndex + 1) % PROJECTS_DATA.length];

  const handleToggleAudio = () => {
    setIsPlayingAudio((prev) => {
      const nextState = !prev;
      if (audioRef.current) {
        if (nextState) {
          audioRef.current.play().catch(() => {});
        } else {
          audioRef.current.pause();
        }
      }
      return nextState;
    });
  };

  const handleEnterCarousel = () => {
    setIsHomeMode(false);
  };

  const handleEnterHero = () => {
    setIsHomeMode(true);
  };

  const handlePrevSlide = () => {
    setActiveSlideIndex(
      (prev) => (prev - 1 + PROJECTS_DATA.length) % PROJECTS_DATA.length
    );
  };

  const handleNextSlide = () => {
    setActiveSlideIndex((prev) => (prev + 1) % PROJECTS_DATA.length);
  };

  return (
    <div className={styles.appContainer}>
      <audio
        ref={audioRef}
        src="/sites/studiomirage/audio/soundtrack.mp3"
        loop
        preload="auto"
      />

      {/* 3D WebGL Layer */}
      <div className={styles.canvasLayer}>
        <MirageCanvas
          isHomeMode={isHomeMode}
          activeSlideIndex={activeSlideIndex}
          onSlideChange={setActiveSlideIndex}
          onEnterCarousel={handleEnterCarousel}
          onEnterHero={handleEnterHero}
        />
      </div>

      {/* Persistent Minimal Header */}
      <header className={styles.header}>
        <button
          type="button"
          onClick={handleEnterHero}
          className={styles.brandLogo}
          style={{ background: "none", border: "none", cursor: "pointer" }}
        >
          MIRAGE
        </button>

        <div className={styles.headerRight}>
          <button
            id="audio-toggle-btn"
            type="button"
            className={styles.soundBtn}
            onClick={handleToggleAudio}
            aria-label={isPlayingAudio ? "Mute audio" : "Play ambient soundtrack"}
          >
            <div className={styles.soundWaves}>
              {isPlayingAudio ? (
                <>
                  <span className={styles.soundBarPlaying} />
                  <span className={styles.soundBarPlaying} />
                  <span className={styles.soundBarPlaying} />
                </>
              ) : (
                <span className={styles.soundLine} />
              )}
            </div>
          </button>

          <button
            type="button"
            onClick={handleEnterCarousel}
            className={styles.navLink}
            style={{ background: "none", border: "none", cursor: "pointer" }}
          >
            Our works
          </button>

          <button
            type="button"
            onClick={handleEnterCarousel}
            className={styles.navLink}
            style={{ background: "none", border: "none", cursor: "pointer" }}
          >
            About us
          </button>

          <div className={styles.contactBtnWrapper}>
            <div className={styles.contactGlow} />
            <a href="mailto:contact@studiomirage.io" className={styles.contactBtn}>
              Contact us
            </a>
          </div>
        </div>
      </header>

      {/* State 1: Hero Mode UI */}
      <div
        className={`${styles.heroLayer} ${
          !isHomeMode ? styles.heroLayerHidden : ""
        }`}
      >
        <div className={styles.heroLeftCity}>Paris</div>
        <div className={styles.heroCenterLogo}>MIRAGE</div>
        <div className={styles.heroRightCity}>Dubai</div>

        <button
          id="cta-scroll-btn"
          type="button"
          className={styles.ctaScroll}
          onClick={handleEnterCarousel}
        >
          <span>Scroll to start exploring</span>
          <span className={styles.ctaArrow}>↓</span>
        </button>
      </div>

      {/* State 2: Carousel Mode UI */}
      <div
        className={`${styles.carouselLayer} ${
          isHomeMode ? styles.carouselLayerHidden : ""
        }`}
      >
        <h2 className={styles.activeProjectTitle}>{currentProject.title}</h2>

        <nav className={styles.bottomNav}>
          <button
            id="btn-prev-project"
            type="button"
            className={styles.prevBtn}
            onClick={handlePrevSlide}
          >
            <div className={styles.btnBgGlow} />
            <span className={styles.navLabel}>PREV</span>
            <span className={styles.navProjectName}>{prevProject.title}</span>
          </button>

          <a
            href={`https://studiomirage.io/works/${currentProject.id}`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.visitBtn}
          >
            <span>Visit this mirage</span>
            <svg
              className={styles.visitIcon}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <path d="M9 3v18" />
            </svg>
          </a>

          <button
            id="btn-next-project"
            type="button"
            className={styles.nextBtn}
            onClick={handleNextSlide}
          >
            <div className={styles.btnBgGlow} />
            <span className={styles.navLabel}>NEXT</span>
            <span className={styles.navProjectName}>{nextProject.title}</span>
          </button>
        </nav>
      </div>
    </div>
  );
}
