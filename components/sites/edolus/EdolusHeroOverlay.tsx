"use client";

import React, { useState } from "react";

interface EdolusHeroOverlayProps {
  onInitiate?: () => void;
}

export function EdolusHeroOverlay({ onInitiate }: EdolusHeroOverlayProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "#ffffff",
        fontFamily: "'General Sans', -apple-system, BlinkMacSystemFont, sans-serif",
        textAlign: "center",
        pointerEvents: "none",
        zIndex: 50,
      }}
    >
      {/* Top Header Logo */}
      <div
        style={{
          position: "absolute",
          top: "36px",
          left: "50%",
          transform: "translateX(-50%)",
          letterSpacing: "0.28em",
          fontSize: "18px",
          fontWeight: 700,
          color: "#ffffff",
        }}
      >
        EDOLUS
      </div>

      {/* Main Title Group */}
      <div style={{ maxWidth: "900px", padding: "0 24px" }}>
        <h1
          style={{
            fontSize: "clamp(32px, 5.5vw, 68px)",
            fontWeight: 300,
            letterSpacing: "0.08em",
            lineHeight: 1.15,
            margin: "0 0 20px 0",
            textTransform: "uppercase",
          }}
        >
          Intelligence
          <br />
          At Planetary Scale
        </h1>

        <p
          style={{
            fontSize: "clamp(12px, 1.2vw, 14px)",
            fontWeight: 400,
            letterSpacing: "0.12em",
            color: "rgba(255, 255, 255, 0.7)",
            textTransform: "uppercase",
            maxWidth: "600px",
            margin: "0 auto 48px auto",
            lineHeight: 1.6,
          }}
        >
          Orchestrating the foundation of artificial intelligence from the edge of the atmosphere.
        </p>

        {/* Initiate System Button */}
        <div style={{ pointerEvents: "auto" }}>
          <button
            type="button"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onClick={onInitiate}
            style={{
              position: "relative",
              background: hovered ? "#ffffff" : "rgba(255, 255, 255, 0.95)",
              color: "#000000",
              border: "none",
              padding: "14px 36px",
              fontSize: "12px",
              fontWeight: 600,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              cursor: "pointer",
              transition: "all 0.25s ease",
              boxShadow: hovered ? "0 0 24px rgba(255, 255, 255, 0.4)" : "none",
            }}
          >
            {/* Cybernetic Corner Brackets */}
            <span
              style={{
                position: "absolute",
                top: "-6px",
                left: "-6px",
                width: "8px",
                height: "8px",
                borderTop: "2px solid #ffffff",
                borderLeft: "2px solid #ffffff",
              }}
            />
            <span
              style={{
                position: "absolute",
                top: "-6px",
                right: "-6px",
                width: "8px",
                height: "8px",
                borderTop: "2px solid #ffffff",
                borderRight: "2px solid #ffffff",
              }}
            />
            <span
              style={{
                position: "absolute",
                bottom: "-6px",
                left: "-6px",
                width: "8px",
                height: "8px",
                borderBottom: "2px solid #ffffff",
                borderLeft: "2px solid #ffffff",
              }}
            />
            <span
              style={{
                position: "absolute",
                bottom: "-6px",
                right: "-6px",
                width: "8px",
                height: "8px",
                borderBottom: "2px solid #ffffff",
                borderRight: "2px solid #ffffff",
              }}
            />
            Initiate System
          </button>
        </div>
      </div>

      {/* Bottom Headphones Notice */}
      <div
        style={{
          position: "absolute",
          bottom: "32px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
          color: "rgba(255, 255, 255, 0.5)",
          fontSize: "11px",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
        }}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
          <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
        </svg>
        Experience with headphones
      </div>
    </div>
  );
}
