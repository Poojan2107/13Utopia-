"use client";

import React from "react";
import styles from "./studiomirage.module.css";

const SERVICES = [
  {
    index: "01",
    title: "Creative Technology",
    description:
      "Bespoke interactive WebGL architectures, custom GLSL shaders, procedural systems, and ultra-fluid micro-interactions engineered for maximum visual impact.",
  },
  {
    index: "02",
    title: "3D & Real-time Visuals",
    description:
      "High-fidelity real-time 3D pipelines, interactive product configurators, digital twins, and cinematic lighting running seamlessly directly in modern browsers.",
  },
  {
    index: "03",
    title: "Immersive Digital Flagships",
    description:
      "End-to-end concept, art direction, and engineering for flagship websites that redefine brand prestige across luxury, culture, and disruptive high technology.",
  },
  {
    index: "04",
    title: "Spatial & CGI Motion",
    description:
      "Next-generation spatial computing interfaces, physical simulation kinetics, procedural typography, and bespoke generative sound environments.",
  },
];

export function ServicesSection() {
  return (
    <section id="capabilities" className={styles.sectionContainer}>
      <div className={styles.sectionHeader}>
        <span className={styles.sectionTag}>// 02 Capabilities</span>
        <h2 className={styles.sectionHeading}>Engineering the Extraordinary</h2>
      </div>

      <div className={styles.capabilitiesGrid}>
        {SERVICES.map((item) => (
          <div key={item.index} className={styles.capabilityCard}>
            <div className={styles.cardIndex}>{item.index} //</div>
            <h3 className={styles.cardTitle}>{item.title}</h3>
            <p className={styles.cardDescription}>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
