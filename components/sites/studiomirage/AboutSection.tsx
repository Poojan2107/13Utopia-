"use client";

import React, { useState, useEffect } from "react";
import styles from "./studiomirage.module.css";

export function AboutSection() {
  const [parisTime, setParisTime] = useState("");
  const [dubaiTime, setDubaiTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setParisTime(
        new Intl.DateTimeFormat("en-GB", {
          timeZone: "Europe/Paris",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        }).format(now)
      );
      setDubaiTime(
        new Intl.DateTimeFormat("en-GB", {
          timeZone: "Asia/Dubai",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        }).format(now)
      );
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="about" className={styles.sectionContainer}>
      <div className={styles.sectionHeader}>
        <span className={styles.sectionTag}>// 03 The Studio</span>
        <h2 className={styles.sectionHeading}>Bridging Continents &amp; Disciplines</h2>
      </div>

      <p className={styles.heroLead} style={{ margin: "0 0 40px 0", maxWidth: "860px" }}>
        Born from the dialogue between European haute-couture sensibilities and the monumental
        technological ambition of the Middle East, Studio Mirage operates as an integrated creative
        technology powerhouse. We bridge artistic vision and cutting-edge engineering to deliver
        experiences that live rent-free in the cultural imagination.
      </p>

      <div className={styles.officesGrid}>
        {/* Paris Office Card */}
        <div className={styles.officeCard}>
          <div>
            <h3 className={styles.officeCity}>Paris Studio</h3>
            <div className={styles.officeCoordinates}>48.8686° N, 2.3475° E // Europe</div>
            <p className={styles.officeAddress}>
              28 Rue du Sentier
              <br />
              75002 Paris, France
              <br />
              Creative Direction, Haute Typography &amp; Brand Worldbuilding
            </p>
          </div>

          <div className={styles.officeTimeBox}>
            <span className={styles.timeLabel}>Local Studio Time</span>
            <span className={styles.timeValue}>{parisTime || "12:00:00"} CET</span>
          </div>
        </div>

        {/* Dubai Office Card */}
        <div className={styles.officeCard}>
          <div>
            <h3 className={styles.officeCity}>Dubai Studio</h3>
            <div className={styles.officeCoordinates}>25.2048° N, 55.2708° E // Middle East</div>
            <p className={styles.officeAddress}>
              Gate Village, Precinct Building 03
              <br />
              DIFC, Dubai, United Arab Emirates
              <br />
              WebGL Architecture, Real-time 3D &amp; Spatial Innovations
            </p>
          </div>

          <div className={styles.officeTimeBox}>
            <span className={styles.timeLabel}>Local Studio Time</span>
            <span className={styles.timeValue}>{dubaiTime || "15:00:00"} GST</span>
          </div>
        </div>
      </div>
    </section>
  );
}
