"use client";

import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { createRenderer } from "@/optimized-black-hole/renderer";
import type { DiveSample } from "@/optimized-black-hole/dive";

export type BlackHoleCanvasHandle = {
  setDiveProgress: (progress: number) => void;
};

type Props = {
  diveProgress?: number;
  /** Prefer DOM updates — called from rAF with the smoothed sample */
  onDiveSample?: (sample: DiveSample | undefined) => void;
};

/**
 * Host for the verified vgpu optimized-black-hole example.
 * Dive progress can be driven imperatively (preferred) for zero React lag.
 */
export const BlackHoleCanvas = forwardRef<BlackHoleCanvasHandle, Props>(
  function BlackHoleCanvas({ diveProgress = 0, onDiveSample }, ref) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const rendererRef = useRef<ReturnType<typeof createRenderer> | null>(null);
    const onDiveSampleRef = useRef(onDiveSample);
    const lastEmittedOverlay = useRef(-1);
    const lastEmittedCopy = useRef(-1);
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
      onDiveSampleRef.current = onDiveSample;
    }, [onDiveSample]);

    useImperativeHandle(ref, () => ({
      setDiveProgress: (progress: number) => {
        rendererRef.current?.setDiveProgress(progress);
      },
    }));

    useEffect(() => {
      rendererRef.current?.setDiveProgress(diveProgress);
    }, [diveProgress]);

    useEffect(() => {
      let cancelled = false;
      const canvas = canvasRef.current;
      if (!canvas) return;
      const renderer = createRenderer({ canvas });
      rendererRef.current = renderer;

      void renderer.ready
        .then(() => {
          if (cancelled) return;
          renderer.setDiveProgress(diveProgress);
          setIsReady(true);
        })
        .catch(() => {
          /* stay black */
        });

      return () => {
        cancelled = true;
        rendererRef.current = null;
        renderer.dispose();
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
      if (!isReady) return;
      const renderer = rendererRef.current;
      if (!renderer) return;

      let raf = 0;
      const tick = () => {
        const sample = renderer.getDiveSample();
        if (sample) {
          const overlayChanged =
            Math.abs(sample.overlay - lastEmittedOverlay.current) > 0.0005;
          const copyChanged =
            Math.abs(sample.heroCopyOpacity - lastEmittedCopy.current) > 0.0005;
          if (overlayChanged || copyChanged) {
            lastEmittedOverlay.current = sample.overlay;
            lastEmittedCopy.current = sample.heroCopyOpacity;
            onDiveSampleRef.current?.(sample);
          }
        } else if (lastEmittedOverlay.current !== 0) {
          lastEmittedOverlay.current = 0;
          lastEmittedCopy.current = 1;
          onDiveSampleRef.current?.(undefined);
        }
        raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
      return () => cancelAnimationFrame(raf);
    }, [isReady]);

    return (
      <div
        style={{
          position: "relative",
          height: "100%",
          width: "100%",
          overflow: "hidden",
          backgroundColor: "#000000",
        }}
      >
        <canvas
          ref={canvasRef}
          style={{
            display: "block",
            height: "100%",
            width: "100%",
            touchAction: "none",
            transition: "opacity 600ms ease",
            opacity: isReady ? 1 : 0,
          }}
        />
      </div>
    );
  }
);

export default BlackHoleCanvas;
