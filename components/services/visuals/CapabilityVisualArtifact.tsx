"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "@/styles/services/CapabilityVisualArtifact.module.css";

interface CapabilityVisualArtifactProps {
  num: string;
  badge: string;
  worldSlug: "create" | "build" | "grow";
}

export function CapabilityVisualArtifact({
  num,
  badge,
  worldSlug,
}: CapabilityVisualArtifactProps) {
  // Interactive states
  const [radarPos, setRadarPos] = useState({ x: 75, y: 25 });
  const [activeToken, setActiveToken] = useState(0);
  const [springBounce, setSpringBounce] = useState(false);
  const [sliderVal, setSliderVal] = useState(65);
  const [activeTabBuild, setActiveTabBuild] = useState(0);

  const triggerSpring = () => {
    setSpringBounce(true);
    setTimeout(() => setSpringBounce(false), 900);
  };

  // ══════════════════════════════════════════════════════════
  // WORLD 01: CREATE
  // ══════════════════════════════════════════════════════════
  if (worldSlug === "create") {
    if (num === "01") {
      return (
        <div className={styles.artifactWrapper}>
          <div className={styles.artifactHeader}>
            <div className={styles.hudBadge}>
              <span className={styles.hudDot} />
              <span>POSITIONING RADAR // 2D VECTOR MATRIX</span>
            </div>
            <span className={styles.coordReadout}>
              X: {radarPos.x} · Y: {100 - radarPos.y}
            </span>
          </div>

          <div
            className={styles.radarField}
            onPointerMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const nx = Math.round(
                Math.max(10, Math.min(90, ((e.clientX - rect.left) / rect.width) * 100))
              );
              const ny = Math.round(
                Math.max(10, Math.min(90, ((e.clientY - rect.top) / rect.height) * 100))
              );
              setRadarPos({ x: nx, y: ny });
            }}
          >
            <div className={styles.radarGrid} />
            <div className={styles.radarAxisX} />
            <div className={styles.radarAxisY} />

            <div className={styles.axisLabelTop}>AVANT-GARDE</div>
            <div className={styles.axisLabelBottom}>CONSERVATIVE</div>
            <div className={styles.axisLabelLeft}>CATEGORY NORM</div>
            <div className={styles.axisLabelRight}>CATEGORY LEADER</div>

            <div className={styles.benchmarkNode} style={{ left: "28%", top: "68%" }}>
              <div className={styles.nodePoint} />
              <span className={styles.nodeName}>LEGACY INCUMBENT</span>
            </div>

            <div className={styles.benchmarkNode} style={{ left: "45%", top: "45%" }}>
              <div className={styles.nodePoint} />
              <span className={styles.nodeName}>MARKET AVERAGE</span>
            </div>

            <motion.div
              className={styles.activeBeacon}
              style={{ left: `${radarPos.x}%`, top: `${radarPos.y}%` }}
              layout
              transition={{ type: "spring", stiffness: 400, damping: 28 }}
            >
              <div className={styles.beaconPing} />
              <div className={styles.beaconCenter} />
              <div className={styles.beaconTag}>
                <span>13 UTOPIA APEX</span>
                <span className={styles.beaconScore}>100% DIFFERENTIATION</span>
              </div>
            </motion.div>
          </div>

          <div className={styles.artifactFooter}>
            <span className={styles.footerNote}>
              ✦ DRAG / HOVER TO RE-CALCULATE STRATEGIC MARKET DELTA
            </span>
          </div>
        </div>
      );
    }

    if (num === "02") {
      const tokens = [
        { name: "Obsidian Noir", hex: "#080808", rgb: "8, 8, 8" },
        { name: "Pure Titanium", hex: "#FFFFFF", rgb: "255, 255, 255" },
        { name: "Atmospheric Glass", hex: "#16181D", rgb: "22, 24, 29" },
        { name: "Luminous Flare", hex: "#E2E8F0", rgb: "226, 232, 240" },
      ];

      return (
        <div className={styles.artifactWrapper}>
          <div className={styles.artifactHeader}>
            <div className={styles.hudBadge}>
              <span className={styles.hudDot} />
              <span>DESIGN SYSTEM SPECIMEN // TOKENS &amp; TYPOGRAPHY</span>
            </div>
            <span className={styles.coordReadout}>SPECIMEN 02.A</span>
          </div>

          <div className={styles.identitySpecimenGrid}>
            <div className={styles.typeSpecimenBox}>
              <div className={styles.typeGlyphRow}>
                <span
                  className={styles.heroGlyph}
                  style={{ fontWeight: sliderVal > 50 ? 800 : 400 }}
                >
                  Aa
                </span>
                <div className={styles.typeMetrics}>
                  <span className={styles.fontName}>PP Neue Montreal</span>
                  <span className={styles.fontWeights}>
                    BOOK · MEDIUM · SEMIBOLD · BLACK
                  </span>
                  <div className={styles.weightSliderRow}>
                    <span className={styles.sliderLabel}>WEIGHT</span>
                    <input
                      type="range"
                      min="300"
                      max="900"
                      step="50"
                      value={sliderVal * 7 + 250}
                      onChange={(e) =>
                        setSliderVal((parseInt(e.target.value) - 250) / 7)
                      }
                      className={styles.weightSlider}
                      aria-label="Typography weight slider"
                    />
                    <span className={styles.sliderValReadout}>
                      {Math.round(sliderVal * 7 + 250)}
                    </span>
                  </div>
                </div>
              </div>

              <div className={styles.alphabetStream}>
                ABCDEFGHIJKLMNOPQRSTUVWXYZ 0123456789 &amp; ® ©
              </div>
            </div>

            <div className={styles.tokenSwatchRow}>
              {tokens.map((token, i) => (
                <button
                  key={token.hex}
                  className={`${styles.swatchItem} ${activeToken === i ? styles.swatchActive : ""}`}
                  onClick={() => setActiveToken(i)}
                  type="button"
                  data-cursor="hover"
                >
                  <div
                    className={styles.swatchColor}
                    style={{ backgroundColor: token.hex }}
                  />
                  <div className={styles.swatchMeta}>
                    <span className={styles.swatchName}>{token.name}</span>
                    <span className={styles.swatchHex}>{token.hex}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className={styles.artifactFooter}>
            <span className={styles.footerNote}>
              ✦ COHESIVE TOKEN FRAMEWORK BUILT FOR CROSS-PLATFORM GOVERNANCE
            </span>
          </div>
        </div>
      );
    }

    if (num === "03") {
      return (
        <div className={styles.artifactWrapper}>
          <div className={styles.artifactHeader}>
            <div className={styles.hudBadge}>
              <span className={styles.hudDot} />
              <span>SPATIAL INTERFACE HUD // ZERO-FRICTION FLOW</span>
            </div>
            <span className={styles.coordReadout}>60 FPS · HIGH-DPI</span>
          </div>

          <div className={styles.uiStageViewport}>
            <div className={styles.uiWindowFrame}>
              <div className={styles.windowTopbar}>
                <div className={styles.windowTrafficLights}>
                  <span />
                  <span />
                  <span />
                </div>
                <span className={styles.windowTitle}>13utopia.interface // core-view</span>
                <span className={styles.liveStatusPill}>LIVE PROTO</span>
              </div>

              <div className={styles.windowBody}>
                <div className={styles.miniNavRail}>
                  <div className={`${styles.miniNavIcon} ${styles.miniNavActive}`} />
                  <div className={styles.miniNavIcon} />
                  <div className={styles.miniNavIcon} />
                </div>

                <div className={styles.miniDashboard}>
                  <div className={styles.miniCardRow}>
                    <div className={styles.miniGlassCard}>
                      <span className={styles.cardEyebrow}>TRANSACTION SPEED</span>
                      <span className={styles.cardBigVal}>14ms</span>
                      <div className={styles.miniSparkline} />
                    </div>
                    <div className={styles.miniGlassCard}>
                      <span className={styles.cardEyebrow}>RETENTION RATE</span>
                      <span className={styles.cardBigVal}>99.4%</span>
                      <div className={styles.miniProgress} />
                    </div>
                  </div>

                  <div className={styles.interactiveComponentRow}>
                    <div className={styles.mockBtnPrimary}>CONFIRM ALLIANCE →</div>
                    <div className={styles.mockBtnSecondary}>EXPLORE SPECS</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.artifactFooter}>
            <span className={styles.footerNote}>
              ✦ HIGH-CONVERSION ACCESSIBLE UI ARCHITECTURE WITH FLUID MICRO-INTERACTIONS
            </span>
          </div>
        </div>
      );
    }

    if (num === "04") {
      return (
        <div className={styles.artifactWrapper}>
          <div className={styles.artifactHeader}>
            <div className={styles.hudBadge}>
              <span className={styles.hudDot} />
              <span>CREATIVE COMPOSITION &amp; ART DIRECTION BOARD</span>
            </div>
            <span className={styles.coordReadout}>RATIO: 16:9 / 4:5 / 1:1</span>
          </div>

          <div className={styles.artBoardGrid}>
            <div className={styles.artBoardFrameMain}>
              <div className={styles.aspectOverlay}>16 : 9 CINEMATIC HERO</div>
              <div className={styles.compositionLines} />
              <div className={styles.artBoardCenter}>
                <span className={styles.focalBadge}>OPTICAL APERTURE FOCUS</span>
              </div>
            </div>
            <div className={styles.artBoardSideCol}>
              <div className={styles.artBoardFrameThumb}>
                <div className={styles.aspectOverlay}>4 : 5 SOCIAL</div>
                <div className={styles.thumbGraphic1} />
              </div>
              <div className={styles.artBoardFrameThumb}>
                <div className={styles.aspectOverlay}>1 : 1 ICONIC</div>
                <div className={styles.thumbGraphic2} />
              </div>
            </div>
          </div>

          <div className={styles.artifactFooter}>
            <span className={styles.footerNote}>
              ✦ END-TO-END VISUAL GOVERNANCE &amp; CAMPAIGN COHESION
            </span>
          </div>
        </div>
      );
    }

    if (num === "05") {
      return (
        <div className={styles.artifactWrapper}>
          <div className={styles.artifactHeader}>
            <div className={styles.hudBadge}>
              <span className={styles.hudDot} />
              <span>CGI / SHADER TOPOLOGY // MESH WIREFRAME</span>
            </div>
            <span className={styles.coordReadout}>VERTICES: 12,480 · SHADER: PBR</span>
          </div>

          <div className={styles.threeStageMeshBox}>
            <div className={styles.meshWireframeCircle}>
              <div className={styles.innerMeshRing1} />
              <div className={styles.innerMeshRing2} />
              <div className={styles.innerMeshRing3} />
              <div className={styles.vertexCore} />
            </div>
            <div className={styles.meshTelemetry}>
              <div className={styles.telemetryLine}>
                <span>REFLECTIVITY</span>
                <span>0.98</span>
              </div>
              <div className={styles.telemetryLine}>
                <span>ROUGHNESS</span>
                <span>0.08</span>
              </div>
              <div className={styles.telemetryLine}>
                <span>RAYTRACED BOUNCES</span>
                <span>8</span>
              </div>
            </div>
          </div>

          <div className={styles.artifactFooter}>
            <span className={styles.footerNote}>
              ✦ PHOTOREALISTIC SPATIAL ASSETS &amp; REAL-TIME WEBGL RENDERS
            </span>
          </div>
        </div>
      );
    }

    if (num === "06") {
      return (
        <div className={styles.artifactWrapper}>
          <div className={styles.artifactHeader}>
            <div className={styles.hudBadge}>
              <span className={styles.hudDot} />
              <span>SPRING PHYSICS ENGINE // BEZIER INTERPOLATION</span>
            </div>
            <span className={styles.coordReadout}>cubic-bezier(0.16, 1, 0.3, 1)</span>
          </div>

          <div className={styles.kineticPhysicsStage}>
            <div className={styles.curveGraphBox}>
              <svg className={styles.bezierSvg} viewBox="0 0 300 120">
                <path
                  d="M 20 100 C 60 10, 120 20, 280 20"
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="2.5"
                />
                <circle cx="20" cy="100" r="4" fill="#ffffff" />
                <circle cx="280" cy="20" r="4" fill="#ffffff" />
                <line x1="20" y1="100" x2="60" y2="10" stroke="rgba(255,255,255,0.3)" strokeDasharray="3 3" />
                <line x1="280" y1="20" x2="120" y2="20" stroke="rgba(255,255,255,0.3)" strokeDasharray="3 3" />
              </svg>
              <span className={styles.curveLabel}>EXPONENTIAL VELOCITY DAMPING</span>
            </div>

            <div className={styles.springTestArea}>
              <motion.div
                className={styles.interactiveParticle}
                animate={
                  springBounce
                    ? {
                        x: [0, 140, 100, 125, 120],
                        scale: [1, 1.25, 0.9, 1.05, 1],
                      }
                    : { x: 0, scale: 1 }
                }
                transition={{
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                }}
              />
              <button
                type="button"
                className={styles.testBounceBtn}
                onClick={triggerSpring}
                data-cursor="hover"
              >
                TEST SPRING IMPULSE ⚡
              </button>
            </div>
          </div>

          <div className={styles.artifactFooter}>
            <span className={styles.footerNote}>
              ✦ 60/120 FPS GPU-ACCELERATED TRANSITIONS WITH ZERO INPUT LAG
            </span>
          </div>
        </div>
      );
    }
  }

  // ══════════════════════════════════════════════════════════
  // WORLD 02: BUILD (ENGINEERING)
  // ══════════════════════════════════════════════════════════
  if (worldSlug === "build") {
    return (
      <div className={styles.artifactWrapper}>
        <div className={styles.artifactHeader}>
          <div className={styles.hudBadge}>
            <span className={styles.hudDot} />
            <span>ARCHITECTURE TELEMETRY // {badge}</span>
          </div>
          <span className={styles.coordReadout}>CORE WEB VITALS: 100/100</span>
        </div>

        <div className={styles.buildTelemetryBox}>
          <div className={styles.buildMetricGrid}>
            <div className={styles.buildMetricCard}>
              <span className={styles.metricCode}>TTFB // FIRST BYTE</span>
              <span className={styles.metricBig}>18ms</span>
              <span className={styles.metricSub}>EDGE CACHED</span>
            </div>
            <div className={styles.buildMetricCard}>
              <span className={styles.metricCode}>LCP // LARGEST CONTENT</span>
              <span className={styles.metricBig}>0.6s</span>
              <span className={styles.metricSub}>ZERO LAYOUT SHIFT</span>
            </div>
            <div className={styles.buildMetricCard}>
              <span className={styles.metricCode}>FRAME TIME</span>
              <span className={styles.metricBig}>16.6ms</span>
              <span className={styles.metricSub}>STEADY 60 FPS</span>
            </div>
            <div className={styles.buildMetricCard}>
              <span className={styles.metricCode}>UPTIME SLA</span>
              <span className={styles.metricBig}>99.99%</span>
              <span className={styles.metricSub}>MULTI-REGION CLOUD</span>
            </div>
          </div>
        </div>

        <div className={styles.artifactFooter}>
          <span className={styles.footerNote}>
            ✦ ZERO-COMPROMISE PERFORMANCE ENGINEERING WITH MODERN EDGE DEPLOYMENTS
          </span>
        </div>
      </div>
    );
  }

  // ══════════════════════════════════════════════════════════
  // WORLD 03: GROW (GROWTH & PERFORMANCE)
  // ══════════════════════════════════════════════════════════
  return (
    <div className={styles.artifactWrapper}>
      <div className={styles.artifactHeader}>
        <div className={styles.hudBadge}>
          <span className={styles.hudDot} />
          <span>GROWTH VECTOR // {badge}</span>
        </div>
        <span className={styles.coordReadout}>UPLIFT: +42.8%</span>
      </div>

      <div className={styles.buildTelemetryBox}>
        <div className={styles.buildMetricGrid}>
          <div className={styles.buildMetricCard}>
            <span className={styles.metricCode}>CONVERSION LIFT</span>
            <span className={styles.metricBig}>+42.8%</span>
            <span className={styles.metricSub}>VERIFIED A/B DELTA</span>
          </div>
          <div className={styles.buildMetricCard}>
            <span className={styles.metricCode}>CAC REDUCTION</span>
            <span className={styles.metricBig}>-31.5%</span>
            <span className={styles.metricSub}>TARGETED ACQUISITION</span>
          </div>
          <div className={styles.buildMetricCard}>
            <span className={styles.metricCode}>RETENTION UPLIFT</span>
            <span className={styles.metricBig}>2.4x</span>
            <span className={styles.metricSub}>90-DAY COHORT</span>
          </div>
          <div className={styles.buildMetricCard}>
            <span className={styles.metricCode}>ORGANIC REACH</span>
            <span className={styles.metricBig}>+180%</span>
            <span className={styles.metricSub}>TECHNICAL SEO ENGINE</span>
          </div>
        </div>
      </div>

      <div className={styles.artifactFooter}>
        <span className={styles.footerNote}>
          ✦ DATA-DRIVEN COMMERCIAL COMPOUNDING WITH PREDICTIVE GROWTH LOOPS
        </span>
      </div>
    </div>
  );
}
