"use client";

import React from "react";
import Link from "next/link";
import styles from "./WorkShowcase.module.css";

interface NavigationProps {
  activeView: "featured" | "full";
  setActiveView: React.Dispatch<React.SetStateAction<"featured" | "full">>;
}

export default function Navigation({
  activeView,
  setActiveView,
}: NavigationProps) {
  return (
    <div className={styles.bottomDock}>
      {/* View Switcher Capsule */}
      <div className={styles.viewSelectorCapsule} aria-label="Portfolio Views">
        <button
          onClick={() => setActiveView("featured")}
          className={`${styles.viewPill} ${
            activeView === "featured" ? styles.viewPillActive : ""
          }`}
          aria-label="In Orbit — spatial 3D showcase"
          data-cursor="hover"
        >
          <span className={styles.viewDot} />
          <span>IN ORBIT</span>
        </button>
        <span className={styles.viewDivider}>/</span>
        <button
          onClick={() => setActiveView("full")}
          className={`${styles.viewPill} ${
            activeView === "full" ? styles.viewPillActive : ""
          }`}
          aria-label="The Archive — full project list"
          data-cursor="hover"
        >
          <span>THE ARCHIVE</span>
        </button>
      </div>



      {/* Right Action: Initiate Alliance */}
      <Link
        href="/contact"
        className={styles.inquireCapsule}
        data-cursor="hover"
      >
        <span>INITIATE ALLIANCE</span>
        <span className={styles.inquireArrow}>↗</span>
      </Link>
    </div>
  );
}

