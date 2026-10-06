import {
  HomeNarrativeSection,
  HomeHorizontalStatement,
  HomeSectionWork,
  HomeCTASection,
} from "@/components/home";
import { Continuous3DStory } from "@/components/plus-ex";
import { SiteHeader, SiteFooter } from "@/components/layout";
import {
  AmbientField,
  SmoothScrollProvider,
} from "@/components/motion";

export default function HomePage() {
  return (
    <SmoothScrollProvider>
      <AmbientField showEmblem={false} />

      {/* Site Header (Top Right Logo & Menu Toggle) */}
      <SiteHeader />

      {/* Unified Continuous Architecture (Hero -> 3D Story -> Digital Bust Sculpture -> Kinetic Thesis Cinema -> Work Carousel -> CTA Monolith) */}
      <main
        id="main-content"
        style={{
          position: "relative",
          zIndex: 2,
          backgroundColor: "transparent",
        }}
      >
        {/* 01 — 3D ARCHITECTURAL HERO & NARRATIVE CONTINUUM */}
        <Continuous3DStory />

        {/* 02 — IDENTITY & PHILOSOPHY: Transparent WebGL Metallic Digital Bust & Architectural Thesis */}
        <HomeNarrativeSection />

        {/* 03 — CHAPTER 03 // THE THESIS: Monumental Kinetic Horizontal Parallax Cinema */}
        <HomeHorizontalStatement />

        {/* 04 — SELECTED COMMISSIONS: 3D Jesper Landberg Portfolio Carousel */}
        <HomeSectionWork />

        {/* 05 — INITIATION: Commission Call-To-Action with 3D Monolith Ascent */}
        <HomeCTASection />

        {/* 06 — FOOTER: Global Studio Hubs (India & Canada) & Kinetic Wordmark */}
        <SiteFooter />
      </main>
    </SmoothScrollProvider>
  );
}
