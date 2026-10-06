"use client";

import React from "react";
import { motion } from "framer-motion";
import styles from "@/styles/services/ProcessVisualArtifact.module.css";

interface ProcessVisualArtifactProps {
  stepNum: string;
  title: string;
}

export function ProcessVisualArtifact({ stepNum, title }: ProcessVisualArtifactProps) {
  // Step 01: Discovery & Strategy
  if (stepNum === "01") {
    return (
      <div className={styles.artifactStage}>
        <div className={styles.stageHeader}>
          <span className={styles.stageTag}>OUTPUT // STRATEGY &amp; AUDIT DECK</span>
          <span className={styles.deliverableSignal}>SPRINT 01</span>
        </div>
        <div className={styles.schematicGrid}>
          <div className={styles.schematicCard}>
            <span className={styles.schematicLabel}>AUDIENCE ARCHETYPES</span>
            <div className={styles.archetypeRings}>
              <div className={styles.ring1} />
              <div className={styles.ring2} />
              <div className={styles.ringCore}>CORE</div>
            </div>
            <span className={styles.schematicMetric}>4 CLUSTERS IDENTIFIED</span>
          </div>
          <div className={styles.schematicCard}>
            <span className={styles.schematicLabel}>CATEGORY GAP DELTA</span>
            <div className={styles.deltaBarChart}>
              <div className={styles.bar1} style={{ height: "40%" }} />
              <div className={styles.bar2} style={{ height: "65%" }} />
              <div className={styles.bar3} style={{ height: "95%" }} />
            </div>
            <span className={styles.schematicMetric}>+84% WHITE SPACE</span>
          </div>
        </div>
      </div>
    );
  }

  // Step 02: Identity Architecture
  if (stepNum === "02") {
    return (
      <div className={styles.artifactStage}>
        <div className={styles.stageHeader}>
          <span className={styles.stageTag}>OUTPUT // DESIGN TOKENS &amp; IDENTITY SYSTEM</span>
          <span className={styles.deliverableSignal}>SPRINT 02</span>
        </div>
        <div className={styles.schematicGrid}>
          <div className={styles.schematicCard}>
            <span className={styles.schematicLabel}>GEOMETRIC GRID MATRIX</span>
            <div className={styles.geometryBox}>
              <div className={styles.geoCircle} />
              <div className={styles.geoDiagonal} />
              <div className={styles.geoSquare} />
            </div>
            <span className={styles.schematicMetric}>12-COLUMN SUBDIVISIONS</span>
          </div>
          <div className={styles.schematicCard}>
            <span className={styles.schematicLabel}>TOKEN PALETTE EXPORT</span>
            <div className={styles.tokenPillStack}>
              <div className={styles.tokenPill}>
                <span className={styles.dot1} />
                <span>$color-noir: #080808</span>
              </div>
              <div className={styles.tokenPill}>
                <span className={styles.dot2} />
                <span>$color-titanium: #FFFFFF</span>
              </div>
              <div className={styles.tokenPill}>
                <span className={styles.dot3} />
                <span>$ease-signature: cubic-bezier(...)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Step 03: Prototyping & Spatial Motion
  if (stepNum === "03") {
    return (
      <div className={styles.artifactStage}>
        <div className={styles.stageHeader}>
          <span className={styles.stageTag}>OUTPUT // 3D PROTOTYPE &amp; MOTION RIG</span>
          <span className={styles.deliverableSignal}>SPRINT 03</span>
        </div>
        <div className={styles.schematicGrid}>
          <div className={styles.schematicCard}>
            <span className={styles.schematicLabel}>INTERACTION KINEMATICS</span>
            <div className={styles.kinematicsTrack}>
              <motion.div
                className={styles.motionOrb}
                animate={{ x: [0, 80, 0] }}
                transition={{ repeat: Infinity, duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
              />
              <div className={styles.trackLine} />
            </div>
            <span className={styles.schematicMetric}>120 FPS FLUIDITY</span>
          </div>
          <div className={styles.schematicCard}>
            <span className={styles.schematicLabel}>SPATIAL 3D SHADER RIG</span>
            <div className={styles.shaderPreview}>
              <div className={styles.shaderGlow} />
              <span className={styles.shaderCode}>PBR // HIGH-REFRACT</span>
            </div>
            <span className={styles.schematicMetric}>WEBGL OPTIMIZED</span>
          </div>
        </div>
      </div>
    );
  }

  // Step 04: Production Guidelines & Launch
  return (
    <div className={styles.artifactStage}>
      <div className={styles.stageHeader}>
        <span className={styles.stageTag}>OUTPUT // PRODUCTION REPO &amp; BRAND HUB</span>
        <span className={styles.deliverableSignal}>FINAL HANDOFF</span>
      </div>
      <div className={styles.schematicGrid}>
        <div className={styles.schematicCard}>
          <span className={styles.schematicLabel}>BRAND DESIGN HUB</span>
          <div className={styles.hubIcons}>
            <div className={styles.hubNode}>FIGMA</div>
            <div className={styles.hubArrow}>→</div>
            <div className={styles.hubNode}>TOKENS</div>
            <div className={styles.hubArrow}>→</div>
            <div className={styles.hubNode}>PROD</div>
          </div>
          <span className={styles.schematicMetric}>ZERO DRIFT SYNC</span>
        </div>
        <div className={styles.schematicCard}>
          <span className={styles.schematicLabel}>LAUNCH READINESS</span>
          <div className={styles.readinessGauge}>
            <div className={styles.gaugeFill} />
            <span className={styles.gaugeScore}>100% DEPLOYED</span>
          </div>
          <span className={styles.schematicMetric}>ENTERPRISE GRADE</span>
        </div>
      </div>
    </div>
  );
}
