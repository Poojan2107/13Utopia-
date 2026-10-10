"use client";

import { useEffect, useRef, useState } from "react";
import { createStarfieldRenderer } from "./renderer";

/** Exact hero black-hole starfield, without the hole / disk — for sitewide ambient. */
export function HeroStarfieldBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    let cancelled = false;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const hasWebGpu = typeof navigator !== "undefined" && "gpu" in navigator;
    if (!hasWebGpu) return;

    const renderer = createStarfieldRenderer({ canvas });
    void renderer.ready
      .then(() => {
        if (!cancelled) setIsReady(true);
      })
      .catch(() => {
        /* leave black fallback */
      });

    return () => {
      cancelled = true;
      renderer.dispose();
    };
  }, []);

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        overflow: "hidden",
        backgroundColor: "#000000",
        pointerEvents: "none",
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          display: "block",
          width: "100%",
          height: "100%",
          opacity: isReady ? 1 : 0,
          transition: "opacity 400ms ease",
        }}
      />
    </div>
  );
}

export default HeroStarfieldBackground;
