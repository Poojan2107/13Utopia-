"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SITE_SCRUB } from "@/components/motion/scrollFeel";
import styles from "@/styles/home/HomeHorizontalStatement.module.css";

gsap.registerPlugin(ScrollTrigger);

export function HomeHorizontalStatement() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const pinContainerRef = useRef<HTMLDivElement | null>(null);
  const mediaRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Act 1 (Thesis) Refs
  const thesisActRef = useRef<HTMLDivElement | null>(null);
  const line1Ref = useRef<HTMLDivElement | null>(null);
  const line2Ref = useRef<HTMLDivElement | null>(null);
  const bgTrackRef = useRef<HTMLDivElement | null>(null);

  // Act 2 (Invitation) Refs
  const invitationActRef = useRef<HTMLDivElement | null>(null);
  const invHeaderRef = useRef<HTMLDivElement | null>(null);
  const invRowRef = useRef<HTMLDivElement | null>(null);

  // 1. Bulletproof Video Lifecycle & Autoplay Engine
  useEffect(() => {
    const video = videoRef.current;
    const section = sectionRef.current;
    if (!video) return;

    // Direct DOM property enforcement for browser autoplay policy
    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;
    video.setAttribute("muted", "");
    video.setAttribute("playsinline", "");
    video.setAttribute("webkit-playsinline", "");

    let isDestroyed = false;

    const playVideo = () => {
      if (isDestroyed || !video) return;
      video.muted = true;
      video.defaultMuted = true;
      if (video.paused) {
        const p = video.play();
        if (p !== undefined) {
          p.catch(() => {
            // Autoplay blocked by browser policy — will retry on interaction
          });
        }
      }
    };

    // Attempt playback immediately on mount
    playVideo();

    // Event-based triggers
    video.addEventListener("canplay", playVideo);
    video.addEventListener("canplaythrough", playVideo);
    video.addEventListener("loadeddata", playVideo);
    video.addEventListener("ended", playVideo);

    // Fallback: unlock on first user interaction if blocked by strict browser policy
    const onUserInteract = () => {
      playVideo();
    };
    window.addEventListener("pointerdown", onUserInteract, { passive: true, once: true });
    window.addEventListener("touchstart", onUserInteract, { passive: true, once: true });
    window.addEventListener("scroll", onUserInteract, { passive: true, once: true });
    window.addEventListener("keydown", onUserInteract, { passive: true, once: true });

    // Handle tab switching / background throttling
    const onVisibilityChange = () => {
      if (!document.hidden) {
        playVideo();
      }
    };
    document.addEventListener("visibilitychange", onVisibilityChange);

    // Observer: Pre-warm 500px before scrolling into view, ensure playing whenever in/near view
    let observer: IntersectionObserver | null = null;
    if (typeof IntersectionObserver !== "undefined" && section) {
      observer = new IntersectionObserver(
        (entries) => {
          const entry = entries[0];
          if (entry?.isIntersecting) {
            playVideo();
          }
        },
        { rootMargin: "500px 0px 500px 0px", threshold: 0 }
      );
      observer.observe(section);
    }

    return () => {
      isDestroyed = true;
      observer?.disconnect();
      video.removeEventListener("canplay", playVideo);
      video.removeEventListener("canplaythrough", playVideo);
      video.removeEventListener("loadeddata", playVideo);
      video.removeEventListener("ended", playVideo);
      window.removeEventListener("pointerdown", onUserInteract);
      window.removeEventListener("touchstart", onUserInteract);
      window.removeEventListener("scroll", onUserInteract);
      window.removeEventListener("keydown", onUserInteract);
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, []);

  // 2. Mouse Parallax (Smooth video tilt on cursor move)
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    let rafId: number;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect();
      const xNorm = (e.clientX - rect.left) / rect.width - 0.5;
      const yNorm = (e.clientY - rect.top) / rect.height - 0.5;
      targetX = xNorm * -20;
      targetY = yNorm * -14;
    };

    const updateLoop = () => {
      rafId = requestAnimationFrame(updateLoop);
      currentX += (targetX - currentX) * 0.05;
      currentY += (targetY - currentY) * 0.05;

      if (videoRef.current) {
        videoRef.current.style.transform = `translate3d(${currentX.toFixed(2)}px, ${currentY.toFixed(2)}px, 0) scale(1.04)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    rafId = requestAnimationFrame(updateLoop);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  // 2. Sequential Pinned Timeline: Act 1 (Thesis) -> Fade -> Act 2 (Invitation) -> Release
  useEffect(() => {
    const section = sectionRef.current;
    const pinContainer = pinContainerRef.current;
    const actThesis = thesisActRef.current;
    const line1 = line1Ref.current;
    const line2 = line2Ref.current;
    const bgTrack = bgTrackRef.current;
    const actInvitation = invitationActRef.current;
    const invHeader = invHeaderRef.current;
    const invRow = invRowRef.current;

    if (!section || !pinContainer || !actThesis || !line1 || !line2 || !actInvitation) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=220%",
          scrub: SITE_SCRUB,
          pin: pinContainer,
          pinSpacing: true,
          anticipatePin: 1,
          fastScrollEnd: true,
          invalidateOnRefresh: true,
          onEnter: () => {
            const vid = videoRef.current;
            if (vid && vid.paused) {
              vid.play().catch(() => {});
            }
          },
          onEnterBack: () => {
            const vid = videoRef.current;
            if (vid && vid.paused) {
              vid.play().catch(() => {});
            }
          },
        },
      });

      // ── Phase 1: Thesis Lines Sweep In (0.00 -> 0.35) ──
      tl.fromTo(
        line1,
        { x: "-70vw", opacity: 0 },
        { x: "0vw", opacity: 1, ease: "power2.out", duration: 0.35 },
        0
      );

      tl.fromTo(
        line2,
        { x: "70vw", opacity: 0 },
        { x: "0vw", opacity: 1, ease: "power2.out", duration: 0.35 },
        0.08
      );

      if (bgTrack) {
        tl.fromTo(
          bgTrack,
          { x: "15vw" },
          { x: "-15vw", ease: "none", duration: 1.0 },
          0
        );
      }

      // ── Phase 2: Thesis Holds (0.35 -> 0.44), then Fades Out (0.44 -> 0.54) ──
      tl.to(
        actThesis,
        {
          opacity: 0,
          y: -35,
          scale: 1.02,
          ease: "power2.in",
          duration: 0.1,
        },
        0.44
      );

      // ── Phase 3: Invitation Reveals & Locks in Over Same Video (0.54 -> 0.72) ──
      tl.fromTo(
        actInvitation,
        { opacity: 0, y: 45 },
        {
          opacity: 1,
          y: 0,
          ease: "power2.out",
          duration: 0.18,
          onStart: () => {
            if (actInvitation) actInvitation.style.pointerEvents = "auto";
          },
          onReverseComplete: () => {
            if (actInvitation) actInvitation.style.pointerEvents = "none";
          },
        },
        0.54
      );

      if (invHeader) {
        tl.fromTo(
          invHeader,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, ease: "power2.out", duration: 0.16 },
          0.56
        );
      }

      if (invRow) {
        tl.fromTo(
          invRow,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, ease: "power2.out", duration: 0.16 },
          0.62
        );
      }

      // ── Phase 4: Invitation Holds for Reading (0.72 -> 1.00), then Unpins into Footer ──
      // Remains visible & interactive until pin ends at 1.00
    }, section);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={styles.cinemaSection}
      id="thesis"
      aria-label="13 Utopia Thesis & Invitation Sequence"
    >
      <div ref={pinContainerRef} className={styles.pinContainer}>
        {/* ── Persistent Full-Viewport Background Video Stage ── */}
        <div ref={mediaRef} className={styles.videoStage} aria-hidden="true">
          <video
            ref={videoRef}
            className={styles.fullViewportVideo}
            src="/videos/thesis-black-hole.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            disablePictureInPicture
            disableRemotePlayback
            tabIndex={-1}
            aria-hidden="true"
          />
          {/* Atmospheric contrast veil and top/bottom horizon scrims */}
          <div className={styles.videoScrim} />
          <div className={styles.scrimTop} />
          <div className={styles.scrimBottom} />
        </div>

        {/* ════════════════════════════════════════════════════
            ACT 1: THESIS ("WE ARE 13 UTOPIA")
            ════════════════════════════════════════════════════ */}
        <div ref={thesisActRef} className={styles.actThesis}>
          {/* Parallax Background Ghost Text Ribbon */}
          <div className={styles.backgroundViewport} aria-hidden="true">
            <div ref={bgTrackRef} className={styles.backgroundTrack}>
              <span className={styles.ghostText}>
                13 UTOPIA · UNREASONABLE OBSESSION · UNREAL REALITY ·
              </span>
            </div>
          </div>

          {/* Dual Opposing Typography Lockup */}
          <div className={styles.stageLockup}>
            <div ref={line1Ref} className={styles.lineTrackLeft}>
              <span className={styles.leadText}>
                DRIVEN BY UNREASONABLE OBSESSION TO CREATE WHAT FEELS UNREAL
              </span>
            </div>

            <div ref={line2Ref} className={styles.lineTrackRight}>
              <span className={styles.grandEmblem}>WE ARE 13 UTOPIA</span>
            </div>
          </div>
        </div>

        {/* ════════════════════════════════════════════════════
            ACT 2: INVITATION ("LET'S BUILD WHAT...")
            ════════════════════════════════════════════════════ */}
        <div ref={invitationActRef} className={styles.actInvitation}>
          <div className={styles.invitationContainer}>
            {/* Monumental Headline */}
            <div ref={invHeaderRef} className={styles.invitationHeader}>
              <h2 className={styles.invitationTitle}>
                LET&apos;S BUILD WHAT<br />
                SHOULDN&apos;T EXIST. YET.
              </h2>
            </div>

            {/* Action Row */}
            <div ref={invRowRef} className={styles.invitationRow}>
              <div className={styles.invitationLeft}>
                <Link href="/contact" className={styles.ctaButton} data-cursor="hover">
                  <span>START A PROJECT</span>
                  <span className={styles.arrowIcon} aria-hidden="true">→</span>
                </Link>
              </div>

              <div className={styles.invitationRight}>
                <p className={styles.manifestoText}>
                  SAME UNIVERSE.<br />
                  DIFFERENT BUSINESSES.<br />
                  <span className={styles.manifestoAccent}>REAL IMPACT.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
