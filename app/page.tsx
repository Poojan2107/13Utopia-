import {
  HomeNarrativeSection,
  HomeHorizontalStatement,
  HomeSectionWork,
  HomeCTASection,
} from "@/components/home";
import { Continuous3DStory } from "@/components/plus-ex";
import { SiteHeader, SiteFooter } from "@/components/layout";
import { SmoothScrollProvider } from "@/components/motion";

export default function HomePage() {
  return (
    <SmoothScrollProvider>
      <div
        style={{
          position: "relative",
          width: "100%",
          minHeight: "100vh",
          backgroundColor: "transparent",
          overflowX: "clip",
        }}
      >
      <SiteHeader />

      <main
        id="main-content"
        style={{
          position: "relative",
          zIndex: 2,
          backgroundColor: "transparent",
        }}
      >
        {/* 01 — Black-hole dive hero → emerge into 3D narrative */}
        <Continuous3DStory blackHoleDive />

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
    </div>
  </SmoothScrollProvider>
  );
}
