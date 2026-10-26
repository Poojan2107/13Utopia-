"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./studiomirage.module.css";
import { AudioPlayer } from "./AudioPlayer";

interface HeaderProps {
  isPlayingAudio: boolean;
  onToggleAudio: () => void;
}

export function Header({ isPlayingAudio, onToggleAudio }: HeaderProps) {
  const [showArabicLogo, setShowArabicLogo] = useState(false);
  const [parisTime, setParisTime] = useState("");
  const [dubaiTime, setDubaiTime] = useState("");

  useEffect(() => {
    const updateClocks = () => {
      const now = new Date();
      // Paris (Europe/Paris)
      const parisStr = new Intl.DateTimeFormat("en-GB", {
        timeZone: "Europe/Paris",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      }).format(now);

      // Dubai (Asia/Dubai)
      const dubaiStr = new Intl.DateTimeFormat("en-GB", {
        timeZone: "Asia/Dubai",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      }).format(now);

      setParisTime(parisStr);
      setDubaiTime(dubaiStr);
    };

    updateClocks();
    const interval = setInterval(updateClocks, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className={styles.header}>
      {/* Brand & Arabic Toggle */}
      <div className={styles.brandGroup}>
        <Link href="/clone/studiomirage" className={styles.logoButton} aria-label="Studio Mirage Home">
          {showArabicLogo ? (
            <Image
              src="/sites/studiomirage/images/logo-mirage-arabic.svg"
              alt="Studio Mirage Arabic Calligraphy"
              width={110}
              height={30}
              className={styles.logoImg}
              priority
            />
          ) : (
            <Image
              src="/sites/studiomirage/images/logo-mirage.png"
              alt="Studio Mirage"
              width={140}
              height={26}
              className={styles.logoImg}
              priority
            />
          )}
        </Link>
        <button
          id="arabic-toggle-btn"
          type="button"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setShowArabicLogo((prev) => !prev);
          }}
          className={styles.arabicToggleBtn}
          title="Toggle Arabic / Latin typography"
        >
          <span>{showArabicLogo ? "Latin" : "عربي"}</span>
        </button>
      </div>

      {/* Office Badges & Live Clocks */}
      <div className={styles.officeBadges}>
        <div className={styles.badgeItem}>
          <span className={styles.pulseDot} />
          <span>Paris {parisTime || "12:00"}</span>
        </div>
        <div className={styles.badgeItem}>
          <span className={styles.pulseDot} />
          <span>Dubai {dubaiTime || "15:00"}</span>
        </div>
      </div>

      {/* Right Controls */}
      <div className={styles.headerActions}>
        <nav className={styles.navLinks}>
          <a href="#works" className={styles.navLink}>
            Works
          </a>
          <a href="#capabilities" className={styles.navLink}>
            Capabilities
          </a>
          <a href="#about" className={styles.navLink}>
            About
          </a>
        </nav>

        <AudioPlayer isPlaying={isPlayingAudio} onToggle={onToggleAudio} />

        <a href="#contact" className={styles.contactBtn}>
          <span>Contact Us</span>
        </a>
      </div>
    </header>
  );
}
