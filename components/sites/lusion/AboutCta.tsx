"use client";

import React, { useEffect, useRef } from "react";
import styles from "./about.module.css";

interface ShapeParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  type: "circle" | "square" | "triangle" | "cross" | "plus";
  rotation: number;
  vRot: number;
  opacity: number;
}

export function AboutCta() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 600);

    const particles: ShapeParticle[] = [];
    const types: ("circle" | "square" | "triangle" | "cross" | "plus")[] = [
      "circle",
      "square",
      "triangle",
      "cross",
      "plus",
    ];

    const particleCount = 280;
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: height * 0.45 + Math.random() * (height * 0.55),
        vx: (Math.random() - 0.5) * 0.4,
        vy: -Math.random() * 0.3 - 0.05,
        size: Math.random() * 4 + 3,
        type: types[Math.floor(Math.random() * types.length)],
        rotation: Math.random() * Math.PI * 2,
        vRot: (Math.random() - 0.5) * 0.02,
        opacity: Math.random() * 0.6 + 0.35,
      });
    }

    let animId: number;

    const render = () => {
      animId = requestAnimationFrame(render);
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.rotation += p.vRot;

        if (p.y < height * 0.38) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity})`;
        ctx.strokeStyle = `rgba(255, 255, 255, ${p.opacity})`;
        ctx.lineWidth = 1.5;

        const s = p.size;
        switch (p.type) {
          case "circle":
            ctx.beginPath();
            ctx.arc(0, 0, s / 2, 0, Math.PI * 2);
            ctx.fill();
            break;
          case "square":
            ctx.fillRect(-s / 2, -s / 2, s, s);
            break;
          case "triangle":
            ctx.beginPath();
            ctx.moveTo(0, -s);
            ctx.lineTo(s * 0.86, s * 0.5);
            ctx.lineTo(-s * 0.86, s * 0.5);
            ctx.closePath();
            ctx.fill();
            break;
          case "cross":
          case "plus":
            ctx.beginPath();
            ctx.moveTo(-s, 0);
            ctx.lineTo(s, 0);
            ctx.moveTo(0, -s);
            ctx.lineTo(0, s);
            ctx.stroke();
            break;
        }

        ctx.restore();
      });
    };

    render();

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      height = canvas.height = canvas.parentElement?.clientHeight || 600;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleScrollToAwards = () => {
    const el = document.getElementById("awards");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className={styles.ctaSection} id="contact">
      {/* Interactive 2D Canvas Confetti Field */}
      <canvas ref={canvasRef} className={styles.confettiCanvas} />

      <span className={styles.ctaKicker}>Is your big idea ready to go wild?</span>

      <h2 className={styles.ctaHeading}>Let&apos;s work together!</h2>

      <button
        className={styles.continueScrollBtn}
        onClick={handleScrollToAwards}
        aria-label="Continue to scroll to awards"
      >
        <span>↓</span>
        <span>Continue to scroll</span>
        <span>↓</span>
      </button>
    </section>
  );
}
