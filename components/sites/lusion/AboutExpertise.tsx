"use client";

import React from "react";
import styles from "./about.module.css";

interface DisciplineCardData {
  title: string;
  iconChar: string;
  items: string[];
  rotation: number;
}

const DISCIPLINE_CARDS: DisciplineCardData[] = [
  {
    title: "STRATEGY",
    iconChar: "S",
    items: [
      "Digital Experience Strategy",
      "Technology Strategy",
      "Creative Direction",
      "Discovery",
      "Research",
    ],
    rotation: -1.8,
  },
  {
    title: "CREATIVE",
    iconChar: "C",
    items: [
      "Art Direction",
      "UX/UI Design",
      "Motion Design",
      "Interactive Design",
      "Illustration",
    ],
    rotation: 1.2,
  },
  {
    title: "TECH",
    iconChar: "T",
    items: [
      "WebGL Development",
      "Front End Development",
      "Unity/Unreal",
      "Interactive Installations",
      "AR and VR Experiences",
    ],
    rotation: -1.2,
  },
  {
    title: "PRODUCTION",
    iconChar: "P",
    items: [
      "Procedural Modeling",
      "3D Asset Creation",
      "3D Optimization",
      "Animation",
      "3D Pipeline Development",
    ],
    rotation: 2.1,
  },
];

export function AboutExpertise() {
  return (
    <section className={styles.expertiseSection} id="expertise">
      {/* Header Row */}
      <div className={styles.expertiseHeader}>
        <h2 className={styles.expertiseTitle}>
          Studio<br />
          Area of<br />
          Expertise
        </h2>

        <div className={styles.expertiseSubBlock}>
          <p className={styles.expertiseSubtitle}>
            Multidisciplinary expertise across strategy, creative, technology,
            and production.
          </p>

          <div className={styles.disciplineBadges}>
            {DISCIPLINE_CARDS.map((card) => (
              <span key={card.iconChar} className={styles.disciplineBadge}>
                {card.iconChar}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* 4 Playing Cards Grid */}
      <div className={styles.cardsGrid}>
        {DISCIPLINE_CARDS.map((card) => (
          <div
            key={card.title}
            className={styles.playingCard}
            style={{ transform: `rotate(${card.rotation}deg)` }}
          >
            {/* Card Top */}
            <div className={styles.cardTopRow}>
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <div className={styles.cardIcon}>{card.iconChar}</div>
            </div>

            {/* Disciplines List */}
            <ul className={styles.cardItemsList}>
              {card.items.map((item) => (
                <li key={item} className={styles.cardItem}>
                  {item}
                </li>
              ))}
            </ul>

            {/* Inverted Card Bottom */}
            <div className={styles.cardBottomRow}>
              <h4 className={styles.cardInvertedTitle}>{card.title}</h4>
              <div className={styles.cardIcon}>{card.iconChar}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
