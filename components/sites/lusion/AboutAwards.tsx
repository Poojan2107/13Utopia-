"use client";

import React from "react";
import styles from "./about.module.css";

interface AwardItem {
  count: string;
  label: string;
}

interface AwardGroup {
  org: string;
  items: AwardItem[];
}

const AWARDS_DATA: AwardGroup[] = [
  {
    org: "Awwwards",
    items: [
      { count: "001", label: "Site of the Year" },
      { count: "001", label: "Developer Site of the Year" },
      { count: "001", label: "Site of the Month" },
      { count: "010", label: "Site of the Day" },
      { count: "016", label: "Honorable Mention" },
    ],
  },
  {
    org: "FWA",
    items: [
      { count: "001", label: "Site of the Year" },
      { count: "002", label: "Site of the Month" },
      { count: "017", label: "Site of the Day" },
    ],
  },
  {
    org: "CSS Design Awards",
    items: [
      { count: "001", label: "Site of the Year" },
      { count: "001", label: "Agency Site of the Year" },
    ],
  },
  {
    org: "Webby Awards",
    items: [
      { count: "002", label: "Webby Winner" },
      { count: "002", label: "Webby Nominee" },
    ],
  },
  {
    org: "Lovie Awards",
    items: [{ count: "001", label: "Lovie Winner" }],
  },
  {
    org: "Drum Awards",
    items: [{ count: "001", label: "The Drum Awards for Design" }],
  },
  {
    org: "CommArts",
    items: [{ count: "001", label: "Best-in-show Interactive" }],
  },
];

export function AboutAwards() {
  return (
    <section className={styles.awardsSection} id="awards">
      <div className={styles.sectionHeaderRow}>
        <h2 className={styles.sectionHeading}>Awards</h2>
        <span className={styles.sectionTotalBadge}>58</span>
      </div>

      <div className={styles.awardsGrid}>
        {AWARDS_DATA.map((group) => (
          <div key={group.org} className={styles.awardGroup}>
            <h3 className={styles.awardOrgName}>{group.org}</h3>
            <ul className={styles.awardItemList}>
              {group.items.map((item, idx) => (
                <li key={idx} className={styles.awardItemRow}>
                  <span className={styles.awardCountNumber}>{item.count}</span>
                  <span>{item.label}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
