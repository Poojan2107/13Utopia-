"use client";

import React, { useState } from "react";
import styles from "./lusion.module.css";
import { Header } from "./Header";
import { MenuOverlay } from "./MenuOverlay";
import { Hero } from "./Hero";
import { IntroSection } from "./IntroSection";
import { PlayReel } from "./PlayReel";
import { ProjectGallery } from "./ProjectGallery";
import { PhilosophySection } from "./PhilosophySection";
import { Footer } from "./Footer";

export function LusionPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className={styles.container}>
      <Header
        onToggleMenu={() => setIsMenuOpen(!isMenuOpen)}
        isMenuOpen={isMenuOpen}
      />

      <MenuOverlay
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />

      <Hero />
      <IntroSection />
      <PlayReel />
      <ProjectGallery />
      <PhilosophySection />
      <Footer />
    </main>
  );
}
