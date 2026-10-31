"use client";

/**
 * Canonical homepage experience — continuous Lenis + GSAP pin river.
 * Used by `/` and `/experience`. No chapter chunking; one document scroll.
 */
import {
  HomeSectionMirageWork,
  HomeCreatePath,
  HomeHorizontalStatement,
} from "@/components/home";
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
          {/* Unified continuous sequence: Hero → Cosmic Starfield → UTOPIANVERSE → Mirage River */}
          <HomeSectionMirageWork />
          <HomeCreatePath />
          <HomeHorizontalStatement />
          <SiteFooter />
        </main>
      </div>
    </SmoothScrollProvider>
  );
}
