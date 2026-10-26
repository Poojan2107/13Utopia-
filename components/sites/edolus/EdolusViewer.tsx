"use client";

import { useState } from "react";
import styles from "@/styles/sites/edolus/edolus.module.css";

export function EdolusViewer() {
  const [viewMode, setViewMode] = useState<"desktop" | "mobile">("desktop");
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div className={styles.viewerContainer}>
      {/* Control bar */}
      <div className={styles.topBar}>
        <div className={styles.metaGroup}>
          <span className={styles.siteTitle}>EDOLUS</span>
          <span className={styles.tag}>WebGL 3D Orbit</span>
          <span>Source: edolus.com</span>
        </div>

        <div className={styles.controlsGroup}>
          <button
            type="button"
            className={`${styles.btn} ${viewMode === "desktop" ? styles.btnActive : ""}`}
            onClick={() => setViewMode("desktop")}
          >
            Desktop (Full)
          </button>
          <button
            type="button"
            className={`${styles.btn} ${viewMode === "mobile" ? styles.btnActive : ""}`}
            onClick={() => setViewMode("mobile")}
          >
            Mobile (390px)
          </button>
          <button
            type="button"
            className={`${styles.btn} ${drawerOpen ? styles.btnActive : ""}`}
            onClick={() => setDrawerOpen(!drawerOpen)}
          >
            Assets &amp; 13 Utopia Port
          </button>
          <a
            href="/sites/edolus/index.html"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btn}
          >
            Open Standalone ↗
          </a>
        </div>
      </div>

      {/* Main viewport */}
      <div className={styles.viewportArea}>
        <iframe
          src="/sites/edolus/index.html"
          title="Edolus Cloned 3D Experience"
          className={viewMode === "desktop" ? styles.frameDesktop : styles.frameMobile}
          allow="autoplay; fullscreen"
        />
      </div>

      {/* Assets & Porting Drawer */}
      <div className={`${styles.drawer} ${drawerOpen ? styles.drawerOpen : ""}`}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
          <h3 className={styles.drawerTitle} style={{ margin: 0 }}>Edolus Assets</h3>
          <button
            type="button"
            className={styles.btn}
            onClick={() => setDrawerOpen(false)}
            style={{ padding: "3px 8px" }}
          >
            ✕
          </button>
        </div>
        <p className={styles.drawerDesc}>
          All assets have been extracted into isolated directories and are ready for porting into 13 Utopia.
        </p>

        <div className={styles.assetSection}>
          <div className={styles.sectionHeader}>Extracted 3D Models (.glb)</div>
          <div className={styles.assetItem}>
            <div className={styles.assetName}>🛰️ Starlink Satellite v2.1 (Deployable)</div>
            <div className={styles.assetPath}>/sites/edolus/models/StarlinkV2-1.glb (3.5 MB)</div>
          </div>
          <div className={styles.assetItem}>
            <div className={styles.assetName}>🖥️ Orbital Compute Tray (Datacenter)</div>
            <div className={styles.assetPath}>/sites/edolus/models/ComputeTrayJOINED.glb (7.3 MB)</div>
          </div>
          <div className={styles.assetItem}>
            <div className={styles.assetName}>🔬 Quantum AI Microprocessor</div>
            <div className={styles.assetPath}>/sites/edolus/models/processor.glb (529 KB)</div>
          </div>
          <div className={styles.assetItem}>
            <div className={styles.assetName}>🚗 Autonomous Vehicle Platform</div>
            <div className={styles.assetPath}>/sites/edolus/models/Tesla-ready2.glb (7.1 MB)</div>
          </div>
          <div className={styles.assetItem}>
            <div className={styles.assetName}>🌐 Interactive Earth Global Map</div>
            <div className={styles.assetPath}>/sites/edolus/models/MAP.glb (445 KB)</div>
          </div>
        </div>

        <div className={styles.assetSection}>
          <div className={styles.sectionHeader}>Atmospheric Media &amp; Audio</div>
          <div className={styles.assetItem}>
            <div className={styles.assetName}>🌍 Earth Orbit HD Video Background</div>
            <div className={styles.assetPath}>/sites/edolus/videos/Space-compressNOAUDIO-YTfullHD.mp4</div>
          </div>
          <div className={styles.assetItem}>
            <div className={styles.assetName}>🎵 3-Stem Dynamic Audio Mixer</div>
            <div className={styles.assetPath}>/sites/edolus/audio/melody_stem_AUDITION302.ogg</div>
            <div className={styles.assetPath}>/sites/edolus/audio/bass_stemAUDITION30.ogg</div>
            <div className={styles.assetPath}>/sites/edolus/audio/instruments_stemAUDITION305.ogg</div>
          </div>
        </div>

        <div className={styles.portGuide}>
          <strong>How to Port into 13 Utopia:</strong>
          <p style={{ margin: "8px 0 0 0", fontSize: "12px", lineHeight: "1.5" }}>
            The <code>StarlinkV2-1.glb</code> model can be seamlessly integrated into 13 Utopia&apos;s WebGL portfolio showcase at <code>components/work-showcase/</code> or combined with the Black Hole hero atmosphere at <code>components/black-hole/</code>.
          </p>
        </div>
      </div>
    </div>
  );
}
