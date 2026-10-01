import { HomeHero, HeroPreloader, HomeSectionWork } from "@/components/home";
import { Continuous3DStory } from "@/components/plus-ex";
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

      {/* Fluid Continuous 3D Architectural Experience */}
      <main
        id="main-content"
        style={{
          position: "relative",
          zIndex: 2,
          backgroundColor: "#000000",
        }}
      >
        {/* 01 — HERO: locked silk + bust dual-flank (fixed plane - DARK) */}
        <HomeHero />
        {/* Flow spacer — hero is position:fixed */}
        <div
          aria-hidden="true"
          style={{ height: "100dvh", width: "100%", pointerEvents: "none" }}
        />

        {/* 02 — THE WORK: 3D Jesper Landberg carousel */}
        <HomeSectionWork />

        {/* 03 — CONTINUOUS 3D MONOLITH STORY (Manifesto → Capabilities Triad → Impact Benchmarks → Initiation Finale) */}
        <Continuous3DStory />
      </main>
    </SmoothScrollProvider>
  );
}
