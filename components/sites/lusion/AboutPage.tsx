"use client";

import React, { useState } from "react";
import styles from "./about.module.css";
import { Header } from "./Header";
import { MenuOverlay } from "./MenuOverlay";
import { AboutCanvas } from "./AboutCanvas";
import { AboutHero } from "./AboutHero";
import { AboutManifesto } from "./AboutManifesto";
import { AboutTeam } from "./AboutTeam";
import { AboutExpertise } from "./AboutExpertise";
import { AboutCta } from "./AboutCta";
import { AboutAwards } from "./AboutAwards";
import { AboutPressTalks } from "./AboutPressTalks";
import { AboutFooter } from "./AboutFooter";

export function AboutPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className={styles.container}>
      {/* Global Navigation Header */}
      <Header
        onToggleMenu={() => setIsMenuOpen(!isMenuOpen)}
        isMenuOpen={isMenuOpen}
      />

      {/* Fullscreen Menu Overlay */}
      <MenuOverlay
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />

      {/* 3D WebGL Background Canvas */}
      <div className={styles.canvasWrapper}>
        <AboutCanvas />
      </div>

      {/* Page Sections */}
      <AboutHero />
      <AboutManifesto />
      <AboutTeam />
      <AboutExpertise />
      <AboutCta />
      <AboutAwards />
      <AboutPressTalks />
      <AboutFooter />
    </main>
  );
}
