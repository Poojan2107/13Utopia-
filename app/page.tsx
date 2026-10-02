import {
  HomeHero,
  HomeVideoSection,
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

      {/* Unified Continuous Architecture (Plus-X Footsteps Flow) */}
      <main
        id="main-content"
        style={{
          position: "relative",
          zIndex: 2,
          backgroundColor: "transparent",
        }}
      >
        {/* 01 — HERO: Monumental BE UNREAL / BE UNREASONABLE + Centered Monolith */}
        <HomeHero />

        {/* 02 — VIDEO SHOWCASE: Full-Bleed Spatial Cinematic Reel */}
        <HomeVideoSection />

        {/* 03 — 3D MONOLITH EDITORIAL STATEMENT & CREATE · BUILD · GROW CAPABILITIES TRIAD */}
        <Continuous3DStory />

        {/* 04 — SELECTED COMMISSIONS: 3D Jesper Landberg Portfolio Carousel */}
        <HomeSectionWork />

        {/* 05 — INITIATION: Commission Call-To-Action (HAVE AN UNREASONABLE IDEA?) */}
        <HomeCTASection />

        {/* 06 — FOOTER: Luxury Agency Footer with Live Telemetry & Directory */}
        <SiteFooter />
      </main>
    </SmoothScrollProvider>
  );
}
