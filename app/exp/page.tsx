import {
  HomeVideoSection,
  HomeSectionWork,
  HomeCTASection,
} from "@/components/home";
import { ExperimentHero } from "@/components/experiment";
import { Continuous3DStory } from "@/components/plus-ex";
import { SiteHeader, SiteFooter } from "@/components/layout";
import {
  AmbientField,
  MagneticCursor,
  SmoothScrollProvider,
} from "@/components/motion";
import Link from "next/link";

export default function ExperimentHomePage() {
  return (
    <SmoothScrollProvider>
      <AmbientField />
      <MagneticCursor />

      {/* Floating Sandbox Telemetry Pill */}
      <aside
        style={{
          position: "fixed",
          bottom: "1.5rem",
          left: "1.5rem",
          zIndex: 9999,
          background: "rgba(10, 10, 10, 0.85)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          padding: "0.45rem 0.95rem",
          borderRadius: "9999px",
          display: "flex",
          alignItems: "center",
          gap: "0.75rem",
          fontFamily: "var(--font-mono, monospace)",
          fontSize: "0.68rem",
          color: "rgba(255, 255, 255, 0.7)",
          pointerEvents: "auto",
        }}
      >
        <span style={{ color: "#dfb76c", fontWeight: 700 }}>🧪 LAB / EXP CLONE</span>
        <span style={{ color: "rgba(255,255,255,0.25)" }}>|</span>
        <Link
          href="/"
          style={{
            color: "#ffffff",
            textDecoration: "underline",
            opacity: 0.85,
            transition: "opacity 0.2s ease",
          }}
        >
          View Main Site (/)
        </Link>
        <span style={{ color: "rgba(255,255,255,0.25)" }}>|</span>
        <Link
          href="/model"
          style={{
            color: "#ffffff",
            textDecoration: "underline",
            opacity: 0.85,
            transition: "opacity 0.2s ease",
          }}
        >
          View 3D Models (/model)
        </Link>
      </aside>

      {/* Site Header (Top Right Logo & Menu Toggle) */}
      <SiteHeader />

      {/* Unified Continuous Architecture Clone */}
      <main
        id="main-content"
        style={{
          position: "relative",
          zIndex: 2,
          backgroundColor: "transparent",
        }}
      >
        {/* 01 — EXPERIMENT HERO (Isolated for custom experiments) */}
        <ExperimentHero />

        {/* 02 — VIDEO SHOWCASE: Full-Bleed Spatial Cinematic Reel */}
        <HomeVideoSection />

        {/* 03 — 3D MONOLITH EDITORIAL STATEMENT & CREATE · BUILD · GROW CAPABILITIES TRIAD */}
        <Continuous3DStory />

        {/* 04 — SELECTED COMMISSIONS: 3D Jesper Landberg Portfolio Carousel */}
        <HomeSectionWork />

        {/* 05 — INITIATION: Commission Call-To-Action */}
        <HomeCTASection />

        {/* 06 — FOOTER: Luxury Agency Footer */}
        <SiteFooter />
      </main>
    </SmoothScrollProvider>
  );
}
