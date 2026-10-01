import { HomeHero, HeroPreloader, HomeSectionWork } from "@/components/home";
import {
  FramerSectionBelief,
  FramerWorldsHorizontal,
  FramerSectionOutcomes,
  FramerSectionAbout,
  FramerSectionCTA,
  FramerFooter,
} from "@/components/framer";
import { SiteHeader } from "@/components/layout";
import {
  AmbientField,
  MagneticCursor,
  SmoothScrollProvider,
} from "@/components/motion";

export default function HomePage() {
  return (
    <SmoothScrollProvider>
      <HeroPreloader />
      <AmbientField />
      <MagneticCursor />

      {/* Site Header */}
      <SiteHeader />

      {/* Fluid Continuous Awwwards Experience */}
      <main id="main-content" style={{ position: "relative", zIndex: 2 }}>
        {/* 01 — HERO: locked silk + bust dual-flank (fixed plane) */}
        <HomeHero />
        {/* Flow spacer — hero is position:fixed */}
        <div
          aria-hidden="true"
          style={{ height: "100dvh", width: "100%", pointerEvents: "none" }}
        />

        {/* 02 // 10 — CONVICTION: RXK-style cream display stack */}
        <FramerSectionBelief />

        {/* 03-05 // 10 — THE THREE WORLDS: CREATE · BUILD · GROW (Horizontal Sticky Scroll) */}
        <FramerWorldsHorizontal />

        {/* 06 // 10 — THE WORK: 3D Jesper Landberg carousel — no nav chrome, continuous section */}
        <HomeSectionWork />

        {/* 07 // 10 — OUTCOMES: CLIENT OBJECTIVES */}
        <FramerSectionOutcomes />

        {/* 08 // 10 — ABOUT: THE ANOMALY & PRINCIPLES */}
        <FramerSectionAbout />

        {/* 09 // 10 — CTA: INITIATION */}
        <FramerSectionCTA />
      </main>

      {/* 10 // 10 — FOOTER & ARCHITECTURAL COLOPHON */}
      <FramerFooter />
    </SmoothScrollProvider>
  );
}
