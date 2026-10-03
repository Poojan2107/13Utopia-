import {
  HomeNarrativeSection,
  HomeSectionWork,
  HomeCTASection,
} from "@/components/home";
import { Continuous3DStory } from "@/components/plus-ex";
import { SiteHeader, SiteFooter } from "@/components/layout";
import {
  AmbientField,
  MagneticCursor,
  SmoothScrollProvider,
} from "@/components/motion";

export default function HomePage() {
  return (
    <SmoothScrollProvider>
      <AmbientField />
      <MagneticCursor />

      {/* Site Header (Top Right Logo & Menu Toggle) */}
      <SiteHeader />

      {/* Unified Continuous Architecture (Hero -> 3D Story -> Narrative Bust -> Portfolio Carousel -> CTA Ascent) */}
      <main
        id="main-content"
        style={{
          position: "relative",
          zIndex: 2,
          backgroundColor: "transparent",
        }}
      >
        {/* 01 — 3D ARCHITECTURAL HERO & NARRATIVE CONTINUUM (HERO -> MANIFESTO -> CREATE -> BUILD -> GROW) */}
        <Continuous3DStory />

        {/* 02 — IDENTITY & PHILOSOPHY: Transparent WebGL Metallic Digital Bust & Architectural Thesis */}
        <HomeNarrativeSection />

        {/* 03 — SELECTED COMMISSIONS: 3D Jesper Landberg Portfolio Carousel with 3D Monolith Descent */}
        <HomeSectionWork />

        {/* 04 — INITIATION: Commission Call-To-Action with 3D Monolith Ascent */}
        <HomeCTASection />

        {/* 05 — FOOTER: Luxury Agency Footer with Live Telemetry & Directory */}
        <SiteFooter />
      </main>
    </SmoothScrollProvider>
  );
}
