import {
  HomeSectionWork,
  HomeCTASection,
} from "@/components/home";
import { ExperimentHeroVideoPortal } from "@/components/experiment";
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
        {/* 01 & 02 — HERO INTO VIDEO "O" APERTURE EXPANSION PORTAL */}
        <ExperimentHeroVideoPortal />

        {/* 03 — 3D MONOLITH EDITORIAL STATEMENT & CREATE · BUILD · GROW CAPABILITIES TRIAD */}
        <Continuous3DStory />

        {/* 04 — SELECTED COMMISSIONS: 3D Jesper Landberg Portfolio Carousel with 3D Monolith Descent */}
        <HomeSectionWork />

        {/* 05 — INITIATION: Commission Call-To-Action with 3D Monolith Ascent */}
        <HomeCTASection />

        {/* 06 — FOOTER: Luxury Agency Footer with Live Telemetry & Directory */}
        <SiteFooter />
      </main>
    </SmoothScrollProvider>
  );
}
