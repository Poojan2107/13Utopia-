"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100dvh",
        background: "#000",
        color: "#fff",
        textAlign: "center",
        padding: "2rem",
      }}
    >
      <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", margin: "0 0 1rem" }}>
        Signal Interrupted
      </h1>
      <p style={{ color: "rgba(255, 255, 255, 0.6)", maxWidth: "24rem", marginBottom: "2rem" }}>
        An unexpected variance occurred in the transmission.
      </p>
      <div style={{ display: "flex", gap: "1rem" }}>
        <button
          type="button"
          onClick={reset}
          style={{
            padding: "0.75rem 1.75rem",
            background: "var(--color-gold)",
            color: "#000",
            border: "none",
            fontSize: "0.875rem",
            fontWeight: 600,
            cursor: "pointer",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}
        >
          Retry
        </button>
        <Link
          href="/"
          style={{
            display: "inline-block",
            padding: "0.75rem 1.75rem",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            color: "#fff",
            textDecoration: "none",
            fontSize: "0.875rem",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}
        >
          Home
        </Link>
      </div>
    </div>
  );
}
