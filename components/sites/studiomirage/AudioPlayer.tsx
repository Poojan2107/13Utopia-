"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "./studiomirage.module.css";

interface AudioPlayerProps {
  isPlaying: boolean;
  onToggle: () => void;
}

export function AudioPlayer({ isPlaying, onToggle }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.volume = 0.45;
      audio.play().catch((err) => {
        console.warn("Audio autoplay blocked by browser, awaiting interaction:", err);
      });
    } else {
      audio.pause();
    }
  }, [isPlaying]);

  const handleToggleClick = () => {
    setHasInteracted(true);
    onToggle();
  };

  return (
    <div>
      <audio ref={audioRef} src="/sites/studiomirage/audio/soundtrack.mp3" loop preload="auto" />
      <button
        id="audio-toggle-btn"
        type="button"
        className={styles.audioBtn}
        onClick={handleToggleClick}
        aria-label={isPlaying ? "Mute ambient soundtrack" : "Play ambient soundtrack"}
      >
        <div className={styles.audioWaves}>
          <div className={`${styles.waveBar} ${isPlaying ? styles.waveBarPlaying : styles.waveBarMuted}`} />
          <div className={`${styles.waveBar} ${isPlaying ? styles.waveBarPlaying : styles.waveBarMuted}`} />
          <div className={`${styles.waveBar} ${isPlaying ? styles.waveBarPlaying : styles.waveBarMuted}`} />
          <div className={`${styles.waveBar} ${isPlaying ? styles.waveBarPlaying : styles.waveBarMuted}`} />
        </div>
        <span>{isPlaying ? "Sound On" : "Sound Off"}</span>
      </button>
    </div>
  );
}
