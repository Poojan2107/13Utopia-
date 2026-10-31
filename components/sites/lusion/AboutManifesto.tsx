"use client";

import React from "react";
import styles from "./about.module.css";

export function AboutManifesto() {
  return (
    <section className={styles.manifestoSection} id="manifesto">
      {/* Row 1: Dual headline framing the astronaut scene */}
      <div className={styles.manifestoRowOne}>
        <div className={styles.manifestoColLeft}>
          <h2 className={styles.manifestoHeading}>
            WE ARE<br />
            LUSION<br />
            A CREATIVE<br />
            <em>PRODUCTION STUDIO</em>
          </h2>
        </div>

        <div className={styles.manifestoColRight}>
          <h2 className={styles.manifestoHeading}>
            <em>CRAFTING UNIQUE</em><br />
            <em>DIGITAL EXPERIENCES</em>
          </h2>
        </div>
      </div>

      {/* Row 2: Worldwide Team Philosophy */}
      <div className={styles.manifestoRowTwo}>
        <div className={styles.statementTopLeft}>
          <em>A worldwide team</em> of specialists in design, motion, 3D, and technology
        </div>

        <div className={styles.statementBottomRight}>
          working together to turn ambitious ideas into immersive digital experiences.
        </div>
      </div>
    </section>
  );
}
