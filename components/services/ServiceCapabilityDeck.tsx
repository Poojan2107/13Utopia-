"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { ServiceCapability } from "@/data/services";
import { CapabilityVisualArtifact } from "./visuals/CapabilityVisualArtifact";
import styles from "@/styles/services/ServiceCapabilityDeck.module.css";

interface ServiceCapabilityDeckProps {
  capabilities: ServiceCapability[];
  worldSlug: "create" | "build" | "grow";
}

export function ServiceCapabilityDeck({
  capabilities,
  worldSlug,
}: ServiceCapabilityDeckProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const activeCap = capabilities[selectedIndex] || capabilities[0];

  return (
    <div className={styles.deckContainer}>
      {/* Selector Rail / Chips */}
      <div className={styles.selectorRail} role="tablist" aria-label="Capabilities Navigation">
        {capabilities.map((cap, idx) => {
          const isActive = idx === selectedIndex;
          return (
            <button
              key={cap.num}
              role="tab"
              aria-selected={isActive}
              className={`${styles.tabButton} ${isActive ? styles.tabActive : ""}`}
              onClick={() => setSelectedIndex(idx)}
              data-cursor="hover"
            >
              <span className={styles.tabNum}>{cap.num}</span>
              <span className={styles.tabTitle}>{cap.title}</span>
              {isActive && (
                <motion.div
                  layoutId="activePillIndicator"
                  className={styles.activePillGlow}
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Main Interactive Visual Stage */}
      <div className={styles.stage}>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCap.num}
            className={styles.stageCard}
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -16, scale: 0.98 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Top Meta */}
            <div className={styles.stageTop}>
              <div className={styles.stageMeta}>
                <span className={styles.liveBeacon} />
                <span className={styles.metaCode}>CAPABILITY {activeCap.num}</span>
                <span className={styles.metaDivider}>·</span>
                <span className={styles.badge}>{activeCap.badge}</span>
              </div>
              <span className={styles.worldTag}>13 UTOPIA // {worldSlug.toUpperCase()}</span>
            </div>

            {/* Core Capability Header */}
            <div className={styles.stageBody}>
              <h3 className={styles.stageTitle}>{activeCap.title}</h3>
              <p className={styles.stageDesc}>{activeCap.desc}</p>
            </div>

            {/* Interactive Visual Artifact Sandbox */}
            <div className={styles.visualSandboxContainer}>
              <CapabilityVisualArtifact
                num={activeCap.num}
                badge={activeCap.badge}
                worldSlug={worldSlug}
              />
            </div>

            {/* Feature Tags & Delivery Signal */}
            <div className={styles.stageBottom}>
              <div className={styles.specimenTags}>
                <span className={styles.specimenTag}>CUSTOM ARCHITECTURE</span>
                <span className={styles.specimenTag}>TAILORED SCOPE</span>
                <span className={styles.specimenTag}>DEDICATED CRAFT</span>
              </div>
              <div className={styles.statusIndicator}>
                <span className={styles.statusLabel}>DELIVERY</span>
                <span className={styles.statusValue}>PRODUCTION READY</span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
