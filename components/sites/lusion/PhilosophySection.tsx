"use client";

import React from "react";
import styles from "./lusion.module.css";

const AWARDS = [
  { count: "14+", title: "Awwwards SOTD" },
  { count: "10+", title: "FWA of the Day" },
  { count: "04", title: "Webby Honorees" },
  { count: "100%", title: "Custom Code & 3D" },
];

export function PhilosophySection() {
  return (
    <section id="philosophy" className={styles.introSection} style={{ background: "#060709" }}>
      <div className={styles.introContainer}>
        <div className={styles.introSub}>Our Philosophy</div>
        <h2 className={styles.introTitle} style={{ maxWidth: "1000px" }}>
          &ldquo;Where creative ideas become immersive experiences that leave a lasting mark.&rdquo;
        </h2>
        <p style={{ color: "#94a3b8", fontSize: "18px", maxWidth: "800px", lineHeight: "1.7", marginBottom: "60px" }}>
          We don&apos;t just build websites or create renders—we craft digital ecosystems that engage the senses.
          By fusing bespoke 3D artistry with real-time computational graphics, we help visionary brands tell stories that
          cannot be replicated.
        </p>

        {/* Awards Counter Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "24px",
            borderTop: "1px solid rgba(255, 255, 255, 0.08)",
            paddingTop: "48px",
          }}
        >
          {AWARDS.map((item) => (
            <div key={item.title}>
              <div
                style={{
                  fontSize: "clamp(36px, 4vw, 56px)",
                  fontWeight: 700,
                  color: "#00f2fe",
                  fontFamily: "monospace",
                  marginBottom: "8px",
                }}
              >
                {item.count}
              </div>
              <div style={{ color: "#94a3b8", fontSize: "14px", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                {item.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
