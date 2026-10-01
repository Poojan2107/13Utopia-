import { HomeHero, HeroPreloader, HomeSectionWork } from "@/components/home";
import {
  FramerSectionBelief,
  FramerSectionWorld,
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
      <main id="main-content">
        {/* 01 — HERO: locked silk + bust dual-flank (fixed plane) */}
        <HomeHero />
        {/* Flow spacer — hero is position:fixed, so Belief starts after one viewport */}
        <div
          aria-hidden="true"
          style={{ height: "100dvh", width: "100%", pointerEvents: "none" }}
        />

        {/* 02 — BELIEF: monumental statement (NexStudio pattern) */}
        <FramerSectionBelief />

        {/* 03 // 10 — WORLD 01: CREATE (Brands & Spatial Experience) */}
        <FramerSectionWorld worldKey="create" />

        {/* 04 // 10 — WORLD 02: BUILD (Products & Digital Engineering) */}
        <FramerSectionWorld worldKey="build" />

        {/* 05 // 10 — WORLD 03: GROW (Revenue Engines & Compounding) */}
        <FramerSectionWorld worldKey="grow" />

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
