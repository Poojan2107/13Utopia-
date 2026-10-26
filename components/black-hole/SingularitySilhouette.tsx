"use client";

import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
} from "react";

export type SingularitySilhouetteHandle = {
  setDiveProgress: (p: number) => void;
};

interface Props {
  initialProgress?: number;
}

const NUM_CARDS = 10;
const TWO_PI = Math.PI * 2;

/**
 * Renders a subtle, mysterious silhouette of the circular card carousel
 * inside the black hole event horizon void.
 *
 * Positions at (72%, 46%) at hero rest (p=0), gliding to (50%, 50%) as
 * the black hole centers, then gently expanding as the camera plunges in.
 *
 * Driven via imperative handle for zero React re-render overhead.
 */
export const SingularitySilhouette = forwardRef<
  SingularitySilhouetteHandle,
  Props
>(function SingularitySilhouette({ initialProgress = 0 }, ref) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const rotationRef = useRef(0);
  const diveProgressRef = useRef(initialProgress);

  useImperativeHandle(ref, () => ({
    setDiveProgress: (p: number) => {
      diveProgressRef.current = Math.max(0, Math.min(1, p));
    },
  }));

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const size = 360;
    canvas.width = size * dpr;
    canvas.height = size * dpr;

    const render = () => {
      animId = requestAnimationFrame(render);
      rotationRef.current += 0.007;

      const p = diveProgressRef.current;
      // Interpolate black hole center from hero rest (72%, 46%) to center (50%, 50%)
      const centerT = Math.max(0, Math.min(1, p / 0.40));
      const smoothCenter = centerT * centerT * (3 - 2 * centerT);
      const posX = 72 - smoothCenter * 22; // 72% -> 50%
      const posY = 46 + smoothCenter * 4;  // 46% -> 50%

      // Silhouette visibility:
      // At p=0: subtle hint (0.35 opacity) inside black hole void
      // As user starts scrolling (p: 0.00 -> 0.30): blooms to 0.85
      // During plunge (p: 0.30 -> 0.94): expands and maintains luminous presence all the way through
      // Dissolves seamlessly only at the exact instant UTOPIANVERSE text takes over (p > 0.94)
      const enterAlpha = 0.35 + Math.min(1, p / 0.25) * 0.50;
      const exitAlpha = p > 0.94 ? Math.max(0, 1 - (p - 0.94) / 0.06) : 1;
      const opacity = enterAlpha * exitAlpha;

      // Scale: gently expands as camera dives towards the event horizon
      const scale = 1.0 + Math.pow(Math.min(1, p / 0.90), 1.5) * 1.8;

      if (containerRef.current) {
        containerRef.current.style.left = `${posX.toFixed(2)}%`;
        containerRef.current.style.top = `${posY.toFixed(2)}%`;
        containerRef.current.style.opacity = opacity.toFixed(3);
        containerRef.current.style.transform = `translate(-50%, -50%) scale(${scale.toFixed(3)})`;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.save();
      ctx.scale(dpr, dpr);

      const cx = size / 2;
      const cy = size / 2;
      const rx = 112;
      const ry = 44;

      // Circular event-horizon clipping mask
      ctx.beginPath();
      ctx.arc(cx, cy, 156, 0, TWO_PI);
      ctx.clip();

      // Soft deep cosmic portal glow inside the singularity
      const portalGlow = ctx.createRadialGradient(cx, cy, 10, cx, cy, 150);
      portalGlow.addColorStop(0, "rgba(56, 114, 224, 0.18)");
      portalGlow.addColorStop(0.5, "rgba(20, 35, 70, 0.09)");
      portalGlow.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = portalGlow;
      ctx.beginPath();
      ctx.arc(cx, cy, 150, 0, TWO_PI);
      ctx.fill();

      // Faint orbital floor ring on the dunes
      ctx.beginPath();
      ctx.ellipse(cx, cy + 12, rx, ry, 0, 0, TWO_PI);
      ctx.strokeStyle = "rgba(255, 218, 140, 0.24)";
      ctx.lineWidth = 1;
      ctx.setLineDash([3, 5]);
      ctx.stroke();
      ctx.setLineDash([]);

      // Subtle luminous center beacon
      const centerPulse = 0.55 + Math.sin(rotationRef.current * 1.5) * 0.18;
      const beaconGrad = ctx.createRadialGradient(cx, cy + 12, 1, cx, cy + 12, 30);
      beaconGrad.addColorStop(0, `rgba(255, 255, 255, ${centerPulse.toFixed(2)})`);
      beaconGrad.addColorStop(0.3, "rgba(180, 220, 255, 0.28)");
      beaconGrad.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = beaconGrad;
      ctx.beginPath();
      ctx.arc(cx, cy + 12, 30, 0, TWO_PI);
      ctx.fill();

      // 10 card silhouettes in 3D perspective
      // Sort back-to-front by depth (sin(angle))
      const cards: Array<{
        angle: number;
        depth: number;
        x: number;
        y: number;
      }> = [];

      for (let i = 0; i < NUM_CARDS; i++) {
        const angle = (i * TWO_PI) / NUM_CARDS + rotationRef.current;
        const depth = Math.sin(angle); // -1 (back) to +1 (front)
        const x = cx + Math.cos(angle) * rx;
        const y = cy + 12 + depth * ry;
        cards.push({ angle, depth, x, y });
      }

      cards.sort((a, b) => a.depth - b.depth);

      for (const card of cards) {
        // Depth factor: 0 (furthest) to 1 (closest)
        const d = (card.depth + 1) / 2;
        const w = 18 + d * 15;  // 18px to 33px
        const h = 26 + d * 22;  // 26px to 48px
        const cardAlpha = 0.18 + d * 0.58;

        ctx.save();
        ctx.translate(card.x, card.y);

        // Subtle card lean based on angle around ring
        const lean = Math.cos(card.angle) * -0.15;
        ctx.rotate(lean);

        // Card glass body
        ctx.fillStyle = `rgba(255, 255, 255, ${(cardAlpha * 0.08).toFixed(3)})`;
        ctx.beginPath();
        ctx.roundRect(-w / 2, -h, w, h, 2.5);
        ctx.fill();

        // Card glowing starlight border
        ctx.strokeStyle = `rgba(215, 238, 255, ${(cardAlpha * 0.68).toFixed(3)})`;
        ctx.lineWidth = 1;
        ctx.stroke();

        // Subtle card interior thumbnail divider / wireframe line
        ctx.strokeStyle = `rgba(255, 255, 255, ${(cardAlpha * 0.35).toFixed(3)})`;
        ctx.lineWidth = 0.8;
        ctx.beginPath();
        ctx.moveTo(-w / 2 + 3, -h * 0.42);
        ctx.lineTo(w / 2 - 3, -h * 0.42);
        ctx.stroke();

        // Card base ground contact glow
        ctx.fillStyle = `rgba(255, 225, 160, ${(cardAlpha * 0.45).toFixed(3)})`;
        ctx.fillRect(-w * 0.3, -1.5, w * 0.6, 1.5);

        ctx.restore();
      }

      ctx.restore();
    };

    animId = requestAnimationFrame(render);
    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: "absolute",
        left: "72%",
        top: "46%",
        width: 360,
        height: 360,
        transform: "translate(-50%, -50%)",
        pointerEvents: "none",
        zIndex: 2,
        willChange: "transform, opacity, left, top",
      }}
      aria-hidden="true"
    >
      <canvas
        ref={canvasRef}
        style={{
          width: "100%",
          height: "100%",
          display: "block",
        }}
      />
    </div>
  );
});
