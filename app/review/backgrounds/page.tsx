import { BackgroundLab } from "@/components/review/BackgroundLab";
import { ReviewHeader } from "@/components/review/ReviewHeader";
import {
  HomeNarrativeSection,
  HomeSectionSolutions,
  HomeSectionWork,
  HomeCTASection,
} from "@/components/home";
import { Continuous3DStory } from "@/components/plus-ex";
import { SiteHeader, SiteFooter } from "@/components/layout";
import { SmoothScrollProvider } from "@/components/motion";

export const metadata = {
  title: "Awwwards Background Lab (Full Homepage Live Test) | 13 Utopia Review",
  description: "Live interactive testing lab for 5 Awwwards-tier background engines rendered across the entire authentic homepage.",
};

export default function BackgroundReviewPage() {
  return (
    <SmoothScrollProvider>
      {/* 01. Active Awwwards Background Engine & Collapsible Director HUD */}
      <BackgroundLab />

      {/* 02. Staging Navigation Header */}
      <ReviewHeader />

      {/* 03. Site Header (Brand Logo & Menu) */}
      <SiteHeader />

      {/* 04. Full Authentic Homepage Across all 6 Chapters */}
      <main
        id="main-content"
        style={{
          position: "relative",
          zIndex: 2,
          backgroundColor: "transparent",
        }}
      >
        {/* 01 — Continuous Pinned 3D Narrative (Hero -> Manifesto -> CREATE -> BUILD -> GROW) */}
        <Continuous3DStory />

        {/* 02 — Digital Human Sculpture with Transparent WebGL Bust */}
        <HomeNarrativeSection />

        {/* 03 — Capability Architecture Matrix */}
        <HomeSectionSolutions />

        {/* 04 — Selected Commissions 3D Portfolio Carousel */}
        <HomeSectionWork />

        {/* 05 — Initiation Commission CTA */}
        <HomeCTASection />

        {/* 06 — Studio Global Hubs Footer */}
        <SiteFooter />
      </main>
    </SmoothScrollProvider>
  );
}
