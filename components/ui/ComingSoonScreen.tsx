"use client";

import Link from "next/link";
import { BrandLogo } from "./BrandLogo";

interface ComingSoonProps {
  title?: string;
  subtitle?: string;
}

export function ComingSoonScreen({
  title = "ANOMALY IN DEVELOPMENT",
  subtitle = "This sector is being architected under the 13 Utopia standard. Explore our flagship experience or inspect the 3D monolith.",
}: ComingSoonProps) {
  return (
    <main
      style={{
        position: "relative",
        minHeight: "100vh",
        minHeight: "100dvh",
        backgroundColor: "#000000",
        color: "#ffffff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "clamp(2rem, 5vh, 4rem) clamp(1.5rem, 5vw, 6rem)",
        boxSizing: "border-box",
        overflow: "hidden",
        fontFamily: 'var(--font-display, "PP Neue Montreal", "Inter", sans-serif)',
      }}
    >
      {/* Top Header */}
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          zIndex: 10,
        }}
      >
        <Link href="/" aria-label="13 Utopia Home" style={{ textDecoration: "none" }}>
          <BrandLogo variant="official" priority />
        </Link>

        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "6px 16px",
            borderRadius: "9999px",
            background: "rgba(255, 255, 255, 0.05)",
            border: "1px solid rgba(255, 255, 255, 0.15)",
            fontFamily: "var(--font-mono, monospace)",
            fontSize: "0.68rem",
            letterSpacing: "0.14em",
            color: "#f4dfc8",
            textTransform: "uppercase",
          }}
        >
          <span
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              backgroundColor: "#10b981",
              boxShadow: "0 0 8px #10b981",
            }}
          />
          <span>COMING SOON // 2026</span>
        </div>
      </header>

      {/* Center Hero Block */}
      <div
        style={{
          maxWidth: "960px",
          margin: "4rem auto",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1.75rem",
          zIndex: 10,
        }}
      >
        <h1
          style={{
            fontSize: "clamp(3rem, 7.5vw, 6.5rem)",
            fontWeight: 800,
            lineHeight: 0.98,
            letterSpacing: "-0.04em",
            color: "#ffffff",
            textTransform: "uppercase",
            margin: 0,
            textShadow: "0 4px 40px rgba(0, 0, 0, 0.9), 0 0 60px rgba(244, 223, 200, 0.15)",
          }}
        >
          {title}
        </h1>

        <p
          style={{
            fontSize: "clamp(1.05rem, 1.4vw, 1.35rem)",
            fontWeight: 300,
            lineHeight: 1.55,
            color: "rgba(255, 255, 255, 0.72)",
            maxWidth: "640px",
            margin: 0,
          }}
        >
          {subtitle}
        </p>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "1rem",
            marginTop: "1rem",
            flexWrap: "wrap",
          }}
        >
          <Link
            href="/"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "15px 32px",
              background: "#f4eae0",
              color: "#000000",
              borderRadius: "9999px",
              fontSize: "0.88rem",
              fontWeight: 600,
              letterSpacing: "0.02em",
              textDecoration: "none",
              transition: "transform 0.3s ease, background 0.3s ease",
            }}
          >
            <span>Return to Origin</span>
            <span>→</span>
          </Link>

          <Link
            href="/work"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "15px 30px",
              background: "rgba(255, 255, 255, 0.05)",
              color: "#ffffff",
              border: "1px solid rgba(255, 255, 255, 0.22)",
              borderRadius: "9999px",
              fontSize: "0.88rem",
              fontWeight: 500,
              textDecoration: "none",
            }}
          >
            <span>Explore Work Archive [8]</span>
            <span>↗</span>
          </Link>

          <Link
            href="/model"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "15px 30px",
              background: "rgba(255, 255, 255, 0.05)",
              color: "#ffffff",
              border: "1px solid rgba(255, 255, 255, 0.22)",
              borderRadius: "9999px",
              fontSize: "0.88rem",
              fontWeight: 500,
              textDecoration: "none",
            }}
          >
            <span>Inspect 3D Emblem</span>
            <span>↗</span>
          </Link>
        </div>
      </div>

      {/* Footer Colophon */}
      <footer
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderTop: "1px solid rgba(255, 255, 255, 0.08)",
          paddingTop: "1.5rem",
          fontFamily: "var(--font-mono, monospace)",
          fontSize: "0.72rem",
          letterSpacing: "0.1em",
          color: "rgba(255, 255, 255, 0.4)",
          flexWrap: "wrap",
          gap: "1rem",
          zIndex: 10,
        }}
      >
        <span>&copy; {new Date().getFullYear()} 13 UTOPIA INC.</span>
        <span>BE UNREAL. BE UNREASONABLE.</span>
      </footer>
    </main>
  );
}
