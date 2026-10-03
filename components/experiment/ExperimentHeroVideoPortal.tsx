"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./ExperimentHeroVideoPortal.module.css";

gsap.registerPlugin(ScrollTrigger);

/**
 * ExperimentHeroVideoPortal
 *
 * Fast, butter-smooth scroll journey:
 * 1. At rest ($p=0$): Solid pitch black background with pure white monumental typography "BE UNREAL UNREASONABLE".
 * 2. On scroll ($p>0$): Typography disintegrates into thousands of pure white stardust particles while the full-bleed video smoothly fades in.
 * 3. Settled state ($p \in [0.30, 0.70]$): Full-screen video playback with caption.
 * 4. Immediate Handover ($p \in [0.70, 1.00]$): Quickly and butter-smoothly pulls up the 3D narrative section with zero black void.
 */
export function ExperimentHeroVideoPortal() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const videoCardRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const typeLayerRef = useRef<HTMLDivElement | null>(null);
  const hudRef = useRef<HTMLDivElement | null>(null);
  const beWordRef = useRef<HTMLSpanElement | null>(null);
  const topWordRef = useRef<HTMLSpanElement | null>(null);
  const bottomWordRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    const videoEl = videoRef.current;
    const videoCard = videoCardRef.current;
    const canvas = canvasRef.current;
    const typeLayer = typeLayerRef.current;
    const hud = hudRef.current;
    const beEl = beWordRef.current;
    const topEl = topWordRef.current;
    const bottomEl = bottomWordRef.current;

    if (!container || !videoEl || !videoCard || !canvas || !typeLayer) return;

    // Stardust Particle System
    const ctx2d = canvas.getContext("2d");
    let particles: Array<{
      originX: number;
      originY: number;
      vx: number;
      vy: number;
      size: number;
      alpha: number;
      decayRate: number;
      drift: number;
    }> = [];

    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const initStardustParticles = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      const offCanvas = document.createElement("canvas");
      offCanvas.width = width;
      offCanvas.height = height;
      const offCtx = offCanvas.getContext("2d");
      if (!offCtx) return;

      if (!beEl || !topEl || !bottomEl) return;

      const beRect = beEl.getBoundingClientRect();
      const topRect = topEl.getBoundingClientRect();
      const bottomRect = bottomEl.getBoundingClientRect();

      const computed = window.getComputedStyle(topEl);
      const fontWeight = computed.fontWeight || "800";
      const fontFamily = computed.fontFamily || "sans-serif";

      offCtx.fillStyle = "#ffffff";
      offCtx.textBaseline = "middle";

      const beStyle = window.getComputedStyle(beEl);
      offCtx.font = `${fontWeight} ${beStyle.fontSize} ${fontFamily}`;
      offCtx.fillText("BE", beRect.left, beRect.top + beRect.height * 0.48);

      offCtx.font = `${fontWeight} ${computed.fontSize} ${fontFamily}`;
      offCtx.fillText("UNREAL", topRect.left, topRect.top + topRect.height * 0.48);

      offCtx.fillText("UNREASONABLE", bottomRect.left, bottomRect.top + bottomRect.height * 0.48);

      const imgData = offCtx.getImageData(0, 0, width, height);
      const data = imgData.data;
      particles = [];

      const step = Math.max(2, Math.floor(width / 520));

      for (let y = 0; y < height; y += step) {
        for (let x = 0; x < width; x += step) {
          const index = (y * width + x) * 4;
          const alpha = data[index + 3];

          if (alpha > 100) {
            const angle = Math.random() * Math.PI * 2;
            const speed = 0.6 + Math.random() * 2.6;

            particles.push({
              originX: x,
              originY: y,
              vx: Math.cos(angle) * speed + (Math.random() - 0.5) * 1.5,
              vy: Math.sin(angle) * speed - (0.5 + Math.random() * 2.2),
              size: (0.9 + Math.random() * 1.4) * dpr,
              alpha: (alpha / 255) * (0.85 + Math.random() * 0.15),
              decayRate: 0.85 + Math.random() * 0.45,
              drift: 0.6 + Math.random() * 0.8,
            });
          }
        }
      }
    };

    initStardustParticles();

    // Render Stardust Particle Dispersion
    const renderStardust = (dispersion: number) => {
      if (!ctx2d || !canvas) return;
      ctx2d.clearRect(0, 0, canvas.width, canvas.height);

      if (dispersion <= 0 || dispersion >= 0.98) return;

      const alphaMultiplier = Math.max(0, 1 - Math.pow(dispersion, 1.15));
      ctx2d.fillStyle = "#ffffff";

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        const dist = dispersion * 125 * p.drift;
        const cx = (p.originX + p.vx * dist) * dpr;
        const cy = (p.originY + p.vy * dist) * dpr;
        const currentAlpha = p.alpha * alphaMultiplier * p.decayRate;

        if (currentAlpha <= 0.01) continue;

        ctx2d.globalAlpha = Math.max(0, Math.min(1, currentAlpha));
        ctx2d.fillRect(cx - p.size * 0.5, cy - p.size * 0.5, p.size, p.size);
      }
    };

    const ctx = gsap.context(() => {
      gsap.set(videoCard, {
        position: "absolute",
        inset: 0,
        width: "100vw",
        height: "100vh",
        opacity: 0,
        zIndex: 2,
      });

      gsap.set(typeLayer, {
        opacity: 1,
        zIndex: 4,
      });

      gsap.set(videoEl, {
        scale: 1.05,
      });

      const proxy = {
        cardOpacity: 0,
        stardustDispersion: 0,
        videoScale: 1.05,
      };

      // Responsive, fluid scroll timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: "+=1100",
          pin: true,
          pinSpacing: true,
          scrub: 0.5,
          onRefresh: () => {
            initStardustParticles();
          },
          onUpdate: (self) => {
            const p = self.progress;

            if (p <= 0.002) {
              if (videoCard) videoCard.style.opacity = "0";
              renderStardust(0);
              if (typeLayer) typeLayer.style.opacity = "1";
              if (!videoEl.paused) {
                videoEl.pause();
                videoEl.currentTime = 0.01;
              }
            } else if (p >= 0.06 && p <= 0.94) {
              if (videoEl.paused) {
                videoEl.play().catch(() => {});
              }
            } else {
              if (!videoEl.paused && (p < 0.04 || p > 0.96)) {
                videoEl.pause();
              }
            }
          },
        },
      });

      // ── PHASE 1: Text Disintegration & Smooth Video Crossfade (0.00 -> 0.30) ──
      // Instant switch: As soon as scroll starts, hide solid text layer so particles take over cleanly
      tl.to(
        typeLayer,
        {
          opacity: 0,
          duration: 0.02,
          ease: "none",
        },
        0.005
      );

      tl.to(
        proxy,
        {
          stardustDispersion: 1.0,
          duration: 0.28,
          ease: "power1.out",
          onUpdate: () => {
            renderStardust(proxy.stardustDispersion);
          },
        },
        0.005
      );

      tl.to(
        proxy,
        {
          cardOpacity: 1,
          videoScale: 1.0,
          duration: 0.28,
          ease: "power1.out",
          onUpdate: () => {
            if (videoCard) {
              videoCard.style.opacity = `${proxy.cardOpacity}`;
            }
            if (videoEl) {
              videoEl.style.transform = `scale(${proxy.videoScale})`;
            }
          },
        },
        0.03
      );

      // ── PHASE 2: Video Playback & Caption (0.30 -> 0.70) ────────────────────────
      if (hud) {
        tl.to(
          hud,
          {
            opacity: 1,
            y: 0,
            duration: 0.16,
            ease: "power2.out",
          },
          0.30
        );
      }

      // ── PHASE 3: Seamless Handover to 3D Story (0.70 -> 1.00) ───────────────────
      if (hud) {
        tl.to(
          hud,
          {
            opacity: 0,
            y: -20,
            duration: 0.12,
            ease: "power1.in",
          },
          0.70
        );
      }

      // Smoothly dissolve video into pure black so the 3D monolith emerges seamlessly
      tl.to(
        videoCard,
        {
          opacity: 0,
          duration: 0.22,
          ease: "power1.inOut",
        },
        0.76
      );

      tl.to(
        videoEl,
        {
          scale: 1.04,
          duration: 0.22,
          ease: "power1.inOut",
        },
        0.76
      );
    }, container);

    const onResize = () => {
      initStardustParticles();
    };
    window.addEventListener("resize", onResize);

    return () => {
      ctx.revert();
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={styles.pinnedWrapper}
      id="hero-portal"
      aria-label="13 Utopia Hero Experience"
    >
      <div className={styles.stage}>
        {/* ── 01. FULL BLEED VIDEO SURFACE ── */}
        <div
          ref={videoCardRef}
          className={styles.fullscreenVideoCard}
          aria-hidden="true"
        >
          <video
            ref={videoRef}
            className={styles.videoElement}
            src="/metal-human/metal-human.mp4"
            poster="/metal-human/metal-human.jpg"
            muted
            playsInline
            loop
            preload="auto"
          />
          <div className={styles.videoScrim} />
          <div className={styles.fadeTop} />
          <div className={styles.fadeBottom} />
        </div>

        {/* ── 02. STARDUST PARTICLES CANVAS ── */}
        <canvas
          ref={canvasRef}
          className={styles.particlesCanvas}
          aria-hidden="true"
        />

        {/* ── 03. PURE SOLID WHITE TYPOGRAPHY ── */}
        <div ref={typeLayerRef} className={styles.typeLayer}>
          <div className={styles.monumentLockup}>
            <div className={styles.beCommonBlock}>
              <span ref={beWordRef} className={styles.beWord}>
                BE
              </span>
            </div>

            <div className={styles.stackedBlock}>
              <span ref={topWordRef} className={styles.wordTop}>
                UNREAL
              </span>
              <span ref={bottomWordRef} className={styles.wordBottom}>
                UNREAS<span className={styles.letterO}>O</span>NABLE
              </span>
            </div>
          </div>
        </div>

        {/* ── 04. CINEMATIC VIDEO HUD OVERLAY ── */}
        <div ref={hudRef} className={styles.hudBottom} aria-hidden="true">
          <div className={styles.captionBlock}>
            <h2 className={styles.chapterTitle}>ANOMALOUS SPATIAL PRODUCTION</h2>
            <p className={styles.chapterSub}>
              We engineer living computational platforms and brand moats for visionary enterprises.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
