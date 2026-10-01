"use client";

import { useEffect, useRef } from "react";
import styles from "@/styles/home/GoldSilkCurtain.module.css";

interface Sparkle {
  x: number;
  y: number;
  size: number;
  vx: number;
  vy: number;
  phase: number;
  twinkleSpeed: number;
  isStar: boolean;
}

/**
 * GoldSilkCurtain — 13 UTOPIA Signature Golden Silk Architecture:
 * - [ 1 ] Crown ribbon high above the head (top ~10-13vh)
 * - Open mid void reserved for the hero tagline (14vh → 66vh: no silk through type)
 * - [ 3 ] Cascading ribbons across chest / torso (68vh, 79vh, 90vh)
 * - Concentric metallic wire filaments + golden stardust
 */
export function GoldSilkCurtain() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animId: number;
    let width = 0;
    let height = 0;
    let time = 0;

    // Initialize 45 floating golden sparkles
    const sparkles: Sparkle[] = [];
    const initSparkles = (w: number, h: number) => {
      sparkles.length = 0;
      for (let i = 0; i < 45; i++) {
        sparkles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          size: 1.0 + Math.random() * 2.2,
          vx: 0.15 + Math.random() * 0.35,
          vy: -0.1 - Math.random() * 0.25,
          phase: Math.random() * Math.PI * 2,
          twinkleSpeed: 0.02 + Math.random() * 0.035,
          isStar: i % 4 === 0, // 25% are 4-pointed diamond star glints
        });
      }
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.scale(dpr, dpr);
      if (sparkles.length === 0) {
        initSparkles(width, height);
      }
    };

    resize();
    window.addEventListener("resize", resize);

    // Draw a volumetric metallic ribbon composed of dense concentric golden wire filaments
    const drawFlankRibbon = (
      fromX: number,
      toX: number,
      startY: number,
      endY: number,
      thickness: number,
      waveAmp: number,
      waveFreq: number,
      speed: number,
      colorStops: [number, string][],
      numStrands: number,
    ) => {
      const steps = 60;
      const stepX = (toX - fromX) / steps;

      const topPoints: [number, number][] = [];
      const botPoints: [number, number][] = [];
      const midPoints: [number, number][] = [];

      for (let i = 0; i <= steps; i++) {
        const x = fromX + i * stepX;
        const prog = i / steps;

        // Smooth cubic sweep
        const baseSweepY = startY + (endY - startY) * Math.pow(prog, 1.25);

        // Multi-harmonic fluid ripples
        const w1 = Math.sin(prog * waveFreq * 3.2 + time * speed) * waveAmp;
        const w2 = Math.cos(prog * 5.8 - time * (speed * 0.85)) * (waveAmp * 0.42);
        const w3 = Math.sin(prog * 8.5 + time * (speed * 1.2)) * (waveAmp * 0.18);

        const midY = baseSweepY + w1 + w2 + w3;
        const localThick = thickness * (0.85 + 0.32 * Math.sin(prog * 3.8 + time * 0.65));

        topPoints.push([x, midY - localThick * 0.5]);
        botPoints.push([x, midY + localThick * 0.5]);
        midPoints.push([x, midY]);
      }

      ctx.save();

      // 1. Translucent Deep Smoked Satin Base
      ctx.beginPath();
      ctx.moveTo(topPoints[0][0], topPoints[0][1]);
      for (let i = 1; i < topPoints.length - 1; i++) {
        const xc = (topPoints[i][0] + topPoints[i + 1][0]) / 2;
        const yc = (topPoints[i][1] + topPoints[i + 1][1]) / 2;
        ctx.quadraticCurveTo(topPoints[i][0], topPoints[i][1], xc, yc);
      }
      ctx.lineTo(topPoints[topPoints.length - 1][0], topPoints[topPoints.length - 1][1]);

      ctx.lineTo(botPoints[botPoints.length - 1][0], botPoints[botPoints.length - 1][1]);
      for (let i = botPoints.length - 2; i > 0; i--) {
        const xc = (botPoints[i][0] + botPoints[i - 1][0]) / 2;
        const yc = (botPoints[i][1] + botPoints[i - 1][1]) / 2;
        ctx.quadraticCurveTo(botPoints[i][0], botPoints[i][1], xc, yc);
      }
      ctx.lineTo(botPoints[0][0], botPoints[0][1]);
      ctx.closePath();

      const grad = ctx.createLinearGradient(fromX, startY, toX, endY);
      colorStops.forEach(([stop, col]) => grad.addColorStop(stop, col));
      ctx.fillStyle = grad;
      ctx.fill();

      // 2. Concentric Metallic Wire Filaments
      ctx.globalCompositeOperation = "screen";

      for (let s = 0; s < numStrands; s++) {
        const norm = (s / (numStrands - 1) - 0.5) * 1.85;
        const distFromCenter = Math.abs(norm);
        const wireAlpha = Math.max(0.12, 1.0 - distFromCenter * 0.75) * 0.42;

        if (s % 3 === 0) {
          ctx.strokeStyle = `rgba(255, 238, 185, ${wireAlpha * 1.35})`; // Specular 24k highlight
          ctx.lineWidth = 1.6;
        } else if (s % 3 === 1) {
          ctx.strokeStyle = `rgba(228, 175, 68, ${wireAlpha * 1.1})`; // Polished 18k gold
          ctx.lineWidth = 1.1;
        } else {
          ctx.strokeStyle = `rgba(175, 115, 36, ${wireAlpha * 0.9})`; // Deep warm bronze
          ctx.lineWidth = 0.9;
        }

        ctx.beginPath();
        for (let i = 0; i <= steps; i++) {
          const [mx, my] = midPoints[i];
          const prog = i / steps;
          const wireOffset =
            norm * thickness * 0.42 +
            Math.sin(prog * 6.5 + time * speed + s * 0.35) * 8.0;

          const px = mx;
          const py = my + wireOffset;

          if (i === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.stroke();
      }

      // 3. Crisp Specular Top Ridge
      ctx.strokeStyle = "rgba(255, 250, 230, 0.55)";
      ctx.lineWidth = 1.8;
      ctx.beginPath();
      ctx.moveTo(topPoints[0][0], topPoints[0][1]);
      for (let i = 1; i < topPoints.length - 1; i++) {
        const xc = (topPoints[i][0] + topPoints[i + 1][0]) / 2;
        const yc = (topPoints[i][1] + topPoints[i + 1][1]) / 2;
        ctx.quadraticCurveTo(topPoints[i][0], topPoints[i][1], xc, yc);
      }
      ctx.stroke();

      ctx.restore();
    };

    // Render floating luxury golden stardust and diamond sparkles
    const renderSparkles = () => {
      ctx.save();
      ctx.globalCompositeOperation = "screen";

      for (let i = 0; i < sparkles.length; i++) {
        const p = sparkles[i];
        p.phase += p.twinkleSpeed;
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around viewport boundaries
        if (p.x > width + 20) p.x = -20;
        if (p.x < -20) p.x = width + 20;
        if (p.y < -20) p.y = height + 20;
        if (p.y > height + 20) p.y = -20;

        const twinkle = (Math.sin(p.phase) + 1) * 0.5; // 0 to 1
        const alpha = 0.2 + twinkle * 0.75;

        if (p.isStar && twinkle > 0.4) {
          // Four-pointed specular diamond glint (✦)
          const starLen = (p.size * 3.2) * (0.6 + twinkle * 0.8);
          ctx.strokeStyle = `rgba(255, 245, 220, ${alpha * 0.95})`;
          ctx.lineWidth = 1.0;

          ctx.beginPath();
          // Horizontal ray
          ctx.moveTo(p.x - starLen, p.y);
          ctx.lineTo(p.x + starLen, p.y);
          // Vertical ray
          ctx.moveTo(p.x, p.y - starLen);
          ctx.lineTo(p.x + starLen, p.y);
          ctx.stroke();

          // Luminous glowing core
          const starGrad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 2);
          starGrad.addColorStop(0, `rgba(255, 255, 255, ${alpha})`);
          starGrad.addColorStop(0.4, `rgba(252, 228, 155, ${alpha * 0.7})`);
          starGrad.addColorStop(1, "rgba(240, 185, 60, 0)");
          ctx.fillStyle = starGrad;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 2, 0, Math.PI * 2);
          ctx.fill();
        } else {
          // Ambient golden dust particle
          const orbGrad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 1.5);
          orbGrad.addColorStop(0, `rgba(255, 245, 215, ${alpha * 0.9})`);
          orbGrad.addColorStop(0.5, `rgba(235, 185, 75, ${alpha * 0.5})`);
          orbGrad.addColorStop(1, "rgba(180, 120, 30, 0)");
          ctx.fillStyle = orbGrad;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 1.5, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      ctx.restore();
    };

    const render = () => {
      time += 0.01;

      ctx.clearRect(0, 0, width, height);

      // 1. Deep Obsidian Base
      ctx.fillStyle = "#000000";
      ctx.fillRect(0, 0, width, height);

      // 2. Soft Ambient Halo — tight to bust core only
      const haloX = width * 0.5;
      const haloY = height * 0.52;
      const halo = ctx.createRadialGradient(
        haloX,
        haloY,
        10,
        haloX,
        haloY,
        width * 0.18,
      );
      halo.addColorStop(0, "rgba(165, 115, 40, 0.12)");
      halo.addColorStop(0.45, "rgba(95, 58, 18, 0.05)");
      halo.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = halo;
      ctx.fillRect(0, 0, width, height);

      // =========================================================
      // 13 UTOPIA Signature Golden Silk — 1 crown + void + 3 cascade
      // Tagline owns the mid gap (14vh to 66vh).
      // =========================================================

      const ribbonThickness = height * 0.048;
      const ribbonGoldStops: [number, string][] = [
        [0.0, "rgba(36, 18, 5, 0.55)"],
        [0.22, "rgba(135, 88, 25, 0.8)"],
        [0.55, "rgba(238, 184, 70, 0.94)"],
        [0.82, "rgba(172, 120, 38, 0.8)"],
        [1.0, "rgba(42, 22, 6, 0.5)"],
      ];

      // [ 1 ] Crown — solitary ribbon high above the tagline
      drawFlankRibbon(
        -width * 0.12,
        width * 1.12,
        height * 0.09,
        height * 0.12,
        ribbonThickness,
        14,
        2.2,
        0.46,
        ribbonGoldStops,
        16,
      );

      // Mid void (≈0.14 → 0.67) is intentional negative space for BE UNREAL / BE UNREASONABLE

      // [ 3 ] Cascading curtains below the tagline — chest / torso
      drawFlankRibbon(
        -width * 0.12,
        width * 1.12,
        height * 0.68,
        height * 0.72,
        ribbonThickness,
        16,
        2.2,
        0.46,
        ribbonGoldStops,
        16,
      );

      drawFlankRibbon(
        -width * 0.12,
        width * 1.12,
        height * 0.79,
        height * 0.83,
        ribbonThickness,
        16,
        2.2,
        0.46,
        ribbonGoldStops,
        16,
      );

      drawFlankRibbon(
        -width * 0.12,
        width * 1.12,
        height * 0.90,
        height * 0.94,
        ribbonThickness,
        16,
        2.2,
        0.46,
        ribbonGoldStops,
        16,
      );

      // 3. Render Specular Golden Stardust & Diamond Sparkles
      renderSparkles();

      animId = requestAnimationFrame(render);
    };

    let isIntersecting = true;
    const observer = new IntersectionObserver(
      (entries) => {
        isIntersecting = entries[0]?.isIntersecting ?? true;
        if (isIntersecting && !document.hidden) {
          cancelAnimationFrame(animId);
          animId = requestAnimationFrame(render);
        } else {
          cancelAnimationFrame(animId);
        }
      },
      { threshold: 0.01 },
    );
    observer.observe(canvas);

    const onVis = () => {
      if (document.hidden || !isIntersecting) {
        cancelAnimationFrame(animId);
      } else {
        cancelAnimationFrame(animId);
        animId = requestAnimationFrame(render);
      }
    };
    document.addEventListener("visibilitychange", onVis);

    return () => {
      cancelAnimationFrame(animId);
      observer.disconnect();
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, []);

  return <canvas ref={canvasRef} className={styles.canvas} aria-hidden="true" />;
}
