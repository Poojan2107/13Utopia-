import {
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

      {/* Unified Continuous Architecture (Hero "O" Aperture -> 3D Monolith Story -> Work Descent -> CTA Ascent) */}
      <main
        id="main-content"
        style={{
          position: "relative",
          zIndex: 2,
          backgroundColor: "transparent",
        }}
      >
        {/* 01 — TENBIN-INSPIRED 3D ARCHITECTURAL HERO & NARRATIVE CONTINUUM (HERO -> MANIFESTO -> CREATE -> BUILD -> GROW) */}
        <Continuous3DStory />

        {/* 02 — SELECTED COMMISSIONS: 3D Jesper Landberg Portfolio Carousel with 3D Monolith Descent */}
        <HomeSectionWork />

        {/* 03 — INITIATION: Commission Call-To-Action with 3D Monolith Ascent */}
        <HomeCTASection />

        {/* 04 — FOOTER: Luxury Agency Footer with Live Telemetry & Directory */}
        <SiteFooter />
      </main>
    </SmoothScrollProvider>
  );
}
