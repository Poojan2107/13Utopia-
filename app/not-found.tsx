import Link from "next/link";

export default function NotFound() {
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
      <p style={{ fontSize: "1rem", color: "var(--color-gold)", letterSpacing: "0.2em", textTransform: "uppercase" }}>
        404
      </p>
      <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", margin: "1rem 0" }}>
        Anomaly Detected
      </h1>
      <p style={{ color: "rgba(255, 255, 255, 0.6)", maxWidth: "24rem", marginBottom: "2rem" }}>
        This coordinate does not exist in 13 UTOPIA.
      </p>
      <Link
        href="/"
        style={{
          display: "inline-block",
          padding: "0.75rem 1.75rem",
          border: "1px solid rgba(232, 197, 106, 0.4)",
          color: "var(--color-gold)",
          textDecoration: "none",
          fontSize: "0.875rem",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
        }}
      >
        Return to Origin
      </Link>
    </div>
  );
}
