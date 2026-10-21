"use client";

/**
 * Canonical homepage experience — continuous Lenis + GSAP pin river.
 * Used by `/` and `/experience`. No chapter chunking; one document scroll.
 */
import {
  HomeNarrativeSection,
  HomeHorizontalStatement,
  HomeSectionWork,
  HomeCTASection,
} from "@/components/home";
import { Continuous3DStory } from "@/components/plus-ex";
import { SiteHeader, SiteFooter } from "@/components/layout";
import { SmoothScrollProvider } from "@/components/motion";

export function HomeExperience() {
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
          <Continuous3DStory blackHoleDive />
          <HomeNarrativeSection />
          <HomeHorizontalStatement />
          <HomeSectionWork />
          <HomeCTASection />
          <SiteFooter />
        </main>
      </div>
    </SmoothScrollProvider>
  );
}
