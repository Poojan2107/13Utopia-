"use client";

import { useEffect, useRef, useState } from "react";
import {
  isHeroHoleCovering,
  subscribeHeroHoleCover,
} from "@/components/motion/heroHoleCover";
import { createStarfieldRenderer } from "./renderer";

/** Exact hero black-hole starfield, without the hole / disk — for sitewide ambient. */
export function HeroStarfieldBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    let cancelled = false;
    let renderer: ReturnType<typeof createStarfieldRenderer> | null = null;
    let idleId = 0;
    let timeoutId = 0;

    const start = () => {
      if (cancelled || renderer) return;
      const canvas = canvasRef.current;
      if (!canvas) return;
      if (typeof navigator === "undefined" || !("gpu" in navigator)) return;

      renderer = createStarfieldRenderer({ canvas });
      void renderer.ready
        .then(() => {
          if (!cancelled) setIsReady(true);
        })
        .catch(() => {
          /* leave black fallback */
        });
    };

    // Build the starfield while the hole still covers it, so the first
    // scroll does not pay for a second WebGPU startup.
    if (!isHeroHoleCovering()) {
      start();
    } else if (typeof window.requestIdleCallback === "function") {
      idleId = window.requestIdleCallback(() => start(), { timeout: 1600 });
    } else {
      timeoutId = window.setTimeout(start, 800);
    }

    const unsubscribe = subscribeHeroHoleCover(() => {
      if (!isHeroHoleCovering()) start();
    });

    return () => {
      cancelled = true;
      unsubscribe();
      if (idleId) window.cancelIdleCallback(idleId);
      window.clearTimeout(timeoutId);
      renderer?.dispose();
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
