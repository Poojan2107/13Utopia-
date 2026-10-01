import { HomeHero, HeroPreloader, HomeSectionWork } from "@/components/home";
import {
  FramerSectionBelief,
  FramerWorldsHorizontal,
  FramerSectionOutcomes,
  SvgScrollSpotlight,
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
      <main id="main-content" style={{ position: "relative", zIndex: 2, backgroundColor: "#000000" }}>
        {/* 01 — HERO: locked silk + bust dual-flank (fixed plane - DARK) */}
        <HomeHero />
        {/* Flow spacer — hero is position:fixed */}
        <div
          aria-hidden="true"
          style={{ height: "100dvh", width: "100%", pointerEvents: "none" }}
        />

        {/* 02 // 10 — CONVICTION: RXK-style cream display stack (LIGHT) */}
        <FramerSectionBelief />

        {/* 03-05 // 10 — THE THREE WORLDS: CREATE · BUILD · GROW (Horizontal Sticky Scroll - DARK) */}
        <FramerWorldsHorizontal />

        {/* 06 // 10 — THE WORK: 3D Jesper Landberg carousel (LIGHT) */}
        <HomeSectionWork />

        {/* 07 // OUTCOMES: CLIENT OBJECTIVES & 3D 13 EMBLEM (DARK) */}
        <FramerSectionOutcomes />

        {/* 08 // ARCHITECTURAL SPOTLIGHT: SVG SCROLL ANIMATION (LIGHT) */}
        <SvgScrollSpotlight />

        {/* 09 // CTA: INITIATION (DARK) */}
        <FramerSectionCTA />

        {/* 10 // FOOTER & ARCHITECTURAL COLOPHON (DARK) */}
        <FramerFooter />
      </main>
    </SmoothScrollProvider>
  );
}
