"use client";

import React from "react";
import styles from "./lusion.module.css";

const CAPABILITIES = [
  {
    number: "01",
    title: "Creative Direction & Art",
    desc: "We originate bespoke visual languages, futuristic aesthetic concepts, and interactive design systems built to elevate forward-thinking brands.",
  },
  {
    number: "02",
    title: "3D Visualization & CGI",
    desc: "From complex procedural particle simulations to cinematic product films and hyper-realistic digital avatars engineered at world-class fidelity.",
  },
  {
    number: "03",
    title: "Creative Tech & WebGL",
    desc: "Transforming static designs into living digital worlds through custom WebGL shaders, Three.js, real-time physics, and buttery-smooth interactions.",
  },
];

export function IntroSection() {
  return (
    <section id="intro" className={styles.introSection}>
      <div className={styles.introContainer}>
        <div className={styles.introSub}>Our Craft</div>
        <h2 className={styles.introTitle}>
          We merge imagination with computational technology to create experiences that refuse to be ignored.
        </h2>

        <div className={styles.introGrid}>
          {CAPABILITIES.map((cap) => (
            <div key={cap.number} className={styles.introCard}>
              <div className={styles.introCardNumber}>{cap.number} // CAPABILITY</div>
              <h3 className={styles.introCardHeading}>{cap.title}</h3>
              <p className={styles.introCardDesc}>{cap.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
