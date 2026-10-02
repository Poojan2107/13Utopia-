import {
  HomeSectionWork,
  HomeCTASection,
} from "@/components/home";
import { ExperimentHeroVideoPortal } from "@/components/experiment";
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

      {/* Floating Sandbox Telemetry Pill (Top Center) */}
      <aside
        style={{
          position: "fixed",
          top: "1.2rem",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 9999,
          background: "rgba(10, 10, 10, 0.85)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          padding: "0.35rem 0.85rem",
          borderRadius: "9999px",
          display: "flex",
          alignItems: "center",
          gap: "0.6rem",
          fontFamily: "var(--font-mono, monospace)",
          fontSize: "0.65rem",
          color: "rgba(255, 255, 255, 0.7)",
          pointerEvents: "auto",
        }}
      >
        <span style={{ color: "#dfb76c", fontWeight: 700 }}>🧪 LAB CLONE</span>
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
          Main (/)
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
          Models (/model)
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
        {/* 01 & 02 — HERO INTO VIDEO "O" APERTURE EXPANSION PORTAL */}
        <ExperimentHeroVideoPortal />

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
