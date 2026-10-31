import React from "react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clone Lab — 13 Utopia Reverse Engineering Space",
  description: "Isolated web experiences cloned and ported within 13 Utopia.",
};

const CLONES = [
  {
    id: "lusion-about",
    name: "Lusion — About Us",
    sourceUrl: "https://lusion.co/about",
    localRoute: "/clone/lusion/about",
    tags: ["Three.js", "Holographic Point Cloud", "Lunar Moonscape", "Awards", "Playing Cards"],
    description:
      "Interactive 3D storytelling experience featuring lunar astronaut scene, volumetric light column, holographic team point cloud carousel, playing card disciplines, and 58 award breakdowns.",
    status: "Live & Isolated",
  },
  {
    id: "lusion-home",
    name: "Lusion — Home",
    sourceUrl: "https://lusion.co/",
    localRoute: "/clone/lusion",
    tags: ["Three.js", "Hero Canvas", "Project Showcase", "Web Audio"],
    description:
      "Creative production studio flagship home experience with interactive 3D physics cluster, project gallery, audio visualizer, and menu overlay.",
    status: "Live & Isolated",
  },
  {
    id: "studiomirage",
    name: "Studio Mirage",
    sourceUrl: "https://studiomirage.com/",
    localRoute: "/clone/studiomirage",
    tags: ["3D Audio", "Interactive Canvas", "Services"],
    description: "Experiential 3D interactive studio site with sound design.",
    status: "Live & Isolated",
  },
];

export default function CloneLabPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#07080a",
        color: "#ffffff",
        padding: "6rem 4vw 8rem 4vw",
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ marginBottom: "4rem" }}>
          <div
            style={{
              display: "inline-block",
              fontSize: "0.75rem",
              fontFamily: "monospace",
              color: "#00f2fe",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              marginBottom: "1rem",
            }}
          >
            Isolated Website Cloning Workspace
          </div>
          <h1
            style={{
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              margin: "0 0 1rem 0",
            }}
          >
            Central Clone Lab
          </h1>
          <p
            style={{
              fontSize: "1.1rem",
              color: "#94a3b8",
              maxWidth: "680px",
              lineHeight: 1.6,
              margin: 0,
            }}
          >
            Reverse-engineered digital experiences rebuilt with complete isolation
            from 13 Utopia production tokens and pages.
          </p>
        </div>

        {/* Clones Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",
            gap: "2rem",
          }}
        >
          {CLONES.map((clone) => (
            <div
              key={clone.id}
              style={{
                borderRadius: "16px",
                backgroundColor: "rgba(255, 255, 255, 0.03)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                padding: "2rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                backdropFilter: "blur(8px)",
                transition: "border-color 0.2s ease, transform 0.2s ease",
              }}
            >
              <div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "1.25rem",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "monospace",
                      fontSize: "0.75rem",
                      padding: "0.3rem 0.6rem",
                      borderRadius: "9999px",
                      backgroundColor: "rgba(0, 242, 254, 0.12)",
                      color: "#00f2fe",
                    }}
                  >
                    {clone.status}
                  </span>
                  <a
                    href={clone.sourceUrl}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      fontFamily: "monospace",
                      fontSize: "0.75rem",
                      color: "#64748b",
                      textDecoration: "none",
                    }}
                  >
                    Source ↗
                  </a>
                </div>

                <h2
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: 700,
                    margin: "0 0 0.75rem 0",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {clone.name}
                </h2>

                <p
                  style={{
                    fontSize: "0.95rem",
                    color: "#cbd5e1",
                    lineHeight: 1.5,
                    marginBottom: "1.5rem",
                  }}
                >
                  {clone.description}
                </p>

                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "0.5rem",
                    marginBottom: "2rem",
                  }}
                >
                  {clone.tags.map((t) => (
                    <span
                      key={t}
                      style={{
                        fontSize: "0.75rem",
                        padding: "0.25rem 0.5rem",
                        borderRadius: "4px",
                        backgroundColor: "rgba(255, 255, 255, 0.06)",
                        color: "#94a3b8",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <Link
                href={clone.localRoute}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.5rem",
                  padding: "0.9rem 1.5rem",
                  borderRadius: "9999px",
                  backgroundColor: "#ffffff",
                  color: "#060709",
                  fontWeight: 700,
                  fontSize: "0.85rem",
                  textDecoration: "none",
                  transition: "background-color 0.2s ease",
                }}
              >
                <span>Launch Isolated Clone</span>
                <span>→</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
