import { HomeHero, HeroPreloader, HomeSectionWork } from "@/components/home";
import { Continuous3DStory, Master3DEmblemCanvas } from "@/components/plus-ex";
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

      {/* Master Persistent 3D "13" Architectural Emblem Canvas */}
      <Master3DEmblemCanvas />

      {/* Site Header */}
      <SiteHeader />

      {/* Fluid Continuous 3D Architectural Experience */}
      <main
        id="main-content"
        style={{
          position: "relative",
          zIndex: 2,
          backgroundColor: "transparent",
        }}
      >
        {/* 01 — HERO: 3D model + layered typography (DARK) */}
        <HomeHero />
        {/* Flow spacer — hero is position:fixed */}
        <div
          aria-hidden="true"
          style={{ height: "100dvh", width: "100%", pointerEvents: "none" }}
        />

        {/* 02 — THE WORK: 3D Jesper Landberg carousel (LIGHT / CREAMY BEIGE with onyx model) */}
        <HomeSectionWork />

        {/* 03 — CONTINUOUS 3D MONOLITH STORY (Manifesto → Capabilities Triad → Impact Benchmarks → Initiation Finale) */}
        <Continuous3DStory />
      </main>
    </SmoothScrollProvider>
  );
}
