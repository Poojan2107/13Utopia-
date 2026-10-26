"use client";

import React, { useState } from "react";
import styles from "./lusion.module.css";

export function PlayReel() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="reel" className={styles.reelSection}>
      <div className={styles.reelContainer}>
        {isPlaying ? (
          <iframe
            className={styles.reelVideo}
            src="https://www.youtube-nocookie.com/embed/O669pVZ_qr0?autoplay=1&mute=0&controls=1"
            title="Lusion Studio Reel"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <>
            {/* Ambient visual poster */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                backgroundImage:
                  "radial-gradient(circle at 60% 40%, rgba(0, 242, 254, 0.25) 0%, rgba(121, 40, 202, 0.3) 40%, #07080a 90%)",
                backgroundSize: "cover",
              }}
            />

            <div className={styles.reelOverlay} onClick={() => setIsPlaying(true)}>
              <div className={styles.reelPlayBtn}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <span className={styles.reelLabel}>Play Studio Reel</span>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
