"use client";

import { useEffect, useRef, useState } from "react";
import styles from "@/styles/plus-ex/UtopiaPaintReveal.module.css";

interface Props {
  progress: number; // 0.0 to 1.0 (finale scroll progress)
  className?: string;
}

interface AerosolParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  life: number;
  maxLife: number;
}

/**
 * UtopiaPaintReveal
 * High-end aerosol spray calligraphy animation.
 * Sweeps organically across the 3D Titanium "13" Emblem with atomized spray mist
 * and authentic paint splatters, synthesizing into the complete "13 UTOPIA" mastermark.
 */
export function UtopiaPaintReveal({ progress, className = "" }: Props) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const currentProgressRef = useRef(progress);
  const [isSynthesized, setIsSynthesized] = useState(false);

  useEffect(() => {
    currentProgressRef.current = progress;
  }, [progress]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;

    // Load pure UTOPIA raw brush artwork
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = "/images/utopia-brush-raw.png";

    let offscreenCanvas: HTMLCanvasElement | null = null;
    let offscreenCtx: CanvasRenderingContext2D | null = null;
    let imgLoaded = false;

    img.onload = () => {
      imgLoaded = true;
      offscreenCanvas = document.createElement("canvas");
      offscreenCanvas.width = img.naturalWidth || 1024;
      offscreenCanvas.height = img.naturalHeight || 1024;
      offscreenCtx = offscreenCanvas.getContext("2d");

      if (offscreenCtx) {
        offscreenCtx.drawImage(img, 0, 0);
        const imgData = offscreenCtx.getImageData(
          0,
          0,
          offscreenCanvas.width,
          offscreenCanvas.height
        );
        const data = imgData.data;
        const w = offscreenCanvas.width;
        const h = offscreenCanvas.height;

        // Isolate pure white calligraphy spray strokes, drips & splatters
        for (let y = 0; y < h; y++) {
          for (let x = 0; x < w; x++) {
            const idx = (y * w + x) * 4;
            const r = data[idx];
            const g = data[idx + 1];
            const b = data[idx + 2];
            const brightness = r * 0.299 + g * 0.587 + b * 0.114;

            // Crop small bottom label watermark
            const isBottomWatermark =
              y > h * 0.67 && x > w * 0.38 && x < w * 0.62;

            if (brightness < 40 || isBottomWatermark) {
              data[idx + 3] = 0; // Pure transparent
            } else {
              const alphaFactor = Math.min(1, Math.max(0, (brightness - 40) / 75));
              data[idx] = 255;
              data[idx + 1] = 255;
              data[idx + 2] = 255;
              data[idx + 3] = Math.round(alphaFactor * 255);
            }
          }
        }
        offscreenCtx.putImageData(imgData, 0, 0);
      }
    };

    const sprayParticles: AerosolParticle[] = [];
    let smoothedP = progress;
    let animId: number;
    let lastTime = performance.now();

    const render = () => {
      const now = performance.now();
      const dt = Math.min((now - lastTime) / 1000, 0.1);
      lastTime = now;

      // Retina DPR handling
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const targetW = Math.round(rect.width * dpr);
      const targetH = Math.round(rect.height * dpr);

      if (canvas.width !== targetW || canvas.height !== targetH) {
        canvas.width = targetW;
        canvas.height = targetH;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      smoothedP += (currentProgressRef.current - smoothedP) * 0.16;
      const effectiveP = Math.max(0, Math.min(1, smoothedP));

      if (effectiveP <= 0.002) {
        setIsSynthesized(false);
        animId = requestAnimationFrame(render);
        return;
      }

      if (effectiveP >= 0.88) {
        setIsSynthesized(true);
      } else {
        setIsSynthesized(false);
      }

      if (imgLoaded && offscreenCanvas) {
        const size = Math.min(canvas.width, canvas.height) * 0.96;
        const drawX = (canvas.width - size) / 2;
        const drawY = (canvas.height - size) / 2;

        ctx.save();

        // 1. Organic aerosol spray reveal boundary across the 13 emblem
        const revealX = drawX + size * (effectiveP * 1.14);

        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(revealX, 0);

        // Organic multi-octave feathered spray edge
        const segments = 28;
        for (let s = 0; s <= segments; s++) {
          const sy = drawY + (size / segments) * s;
          const noise =
            Math.sin(now * 0.006 + s * 1.8) * 12 * dpr +
            Math.cos(s * 4.0 + now * 0.004) * 6 * dpr;
          ctx.lineTo(revealX + (effectiveP < 0.98 ? noise : 0), sy);
        }

        ctx.lineTo(revealX, canvas.height);
        ctx.lineTo(0, canvas.height);
        ctx.closePath();
        ctx.clip();

        // Subtle dark shadow for crisp depth against 3D surface
        ctx.shadowColor = "rgba(0, 0, 0, 0.9)";
        ctx.shadowBlur = 10 * dpr;
        ctx.drawImage(offscreenCanvas, drawX, drawY, size, size);

        // Crisp titanium white core calligraphy
        ctx.shadowBlur = 0;
        ctx.drawImage(offscreenCanvas, drawX, drawY, size, size);

        ctx.restore();

        // 2. Active Atomized Aerosol Spray Mist Particles
        if (effectiveP > 0.03 && effectiveP < 0.96) {
          if (Math.random() < 0.8) {
            for (let k = 0; k < 4; k++) {
              const spawnY = drawY + Math.random() * size;
              const angle = (Math.random() - 0.5) * Math.PI * 0.9;
              const speed = (Math.random() * 60 + 20) * dpr;
              sprayParticles.push({
                x: revealX + (Math.random() - 0.3) * 8 * dpr,
                y: spawnY,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed * 0.6,
                size: (Math.random() * 1.4 + 0.5) * dpr,
                alpha: 0.85,
                life: 0,
                maxLife: Math.random() * 0.25 + 0.12,
              });
            }
          }
        }

        // 3. Render and animate aerosol spray particles
        for (let i = sprayParticles.length - 1; i >= 0; i--) {
          const p = sprayParticles[i];
          p.life += dt;
          if (p.life >= p.maxLife) {
            sprayParticles.splice(i, 1);
            continue;
          }

          p.vx *= 0.90;
          p.vy = p.vy * 0.90 + 15 * dt * dpr;
          p.x += p.vx * dt;
          p.y += p.vy * dt;
          p.alpha = Math.max(0, 1 - p.life / p.maxLife);

          ctx.save();
          ctx.fillStyle = `rgba(255, 255, 255, ${p.alpha * 0.8})`;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        }

        // 4. Synthesis Climax: Subtle Titanium Specular Glow
        if (effectiveP >= 0.92) {
          const pulse = Math.sin(now * 0.003) * 0.08 + 0.92;
          ctx.save();
          ctx.globalAlpha = ((effectiveP - 0.92) / 0.08) * pulse * 0.20;
          ctx.shadowColor = "rgba(255, 255, 255, 0.4)";
          ctx.shadowBlur = 10 * dpr;
          ctx.drawImage(offscreenCanvas, drawX, drawY, size, size);
          ctx.restore();
        }
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div className={`${styles.masterLockupContainer} ${className}`}>
      {/* 1:1 Spray Calligraphy Canvas over centered 3D 13 Emblem */}
      <canvas ref={canvasRef} className={styles.paintCanvas} />

      {/* Atmospheric Titanium Halo */}
      <div
        className={`${styles.titaniumHalo} ${
          isSynthesized ? styles.haloActive : ""
        }`}
        aria-hidden="true"
      />
    </div>
  );
}
