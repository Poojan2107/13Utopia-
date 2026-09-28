"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { plates } from "@/content/plates";
import { cn } from "@/lib/utils/cn";
import styles from "@/styles/motion/CreateBuildGrowKinetic.module.css";

gsap.registerPlugin(ScrollTrigger);

const PILLARS = [
  {
    word: "CREATE",
    num: "01",
    sub: "Brand · Design · CGI · Experience",
    href: "/capabilities/create",
    image: plates.create,
  },
  {
    word: "BUILD",
    num: "02",
    sub: "Web · Product · Systems · AI",
    href: "/capabilities/build",
    image: plates.build,
  },
  {
    word: "GROW",
    num: "03",
    sub: "SEO · Campaigns · Content · Demand",
    href: "/capabilities/grow",
    image: plates.grow,
  },
] as const;

/**
 * Awwwards 061 — Kinetic Converging 3-Track Capabilities theater.
 * Opposing fly-in → pinned full stack (solid bars) → scale crush + plate crossfade.
 * Solid track fills are required so Didone stays readable during converge.
 * @see Awwwards_Master_Pack/01 - Scroll Animation/061 - Component Demo
 */
export function CreateBuildGrowKinetic() {
  const rootRef = useRef<HTMLElement | null>(null);
  const activePlate = useRef(0);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const headers = root.querySelectorAll<HTMLElement>("[data-track-header]");
    const stage = root.querySelector<HTMLElement>("[data-kinetic-stage]");
    const plateEls = root.querySelectorAll<HTMLElement>("[data-plate]");
    const head = root.querySelector<HTMLElement>(`.${styles.head}`);
    const progressEl = root.querySelector<HTMLElement>("[data-caps-progress]");

    if (!headers.length || !stage || !plateEls.length) return;

    const setPlate = (index: number, strong = false) => {
      activePlate.current = index;
      plateEls.forEach((el, i) => {
        gsap.to(el, {
          opacity: i === index ? (strong ? 0.62 : 0.38) : 0,
          duration: 0.5,
          ease: "power2.out",
          overwrite: "auto",
        });
      });
    };

    gsap.set(plateEls[0], { opacity: 0.32 });
    gsap.set([...plateEls].slice(1), { opacity: 0 });

    if (reduce) {
      headers.forEach((h) => gsap.set(h, { clearProps: "transform" }));
      return;
    }

    const fine = window.matchMedia("(pointer: fine)").matches;
    const cleanups: Array<() => void> = [];

    const settleTracks = (forceX = false) => {
      const endScale = window.innerWidth <= 1000 ? 0.62 : 0.52;
      const endPeel = 48;
      headers.forEach((h, i) => {
        const props: gsap.TweenVars = {
          yPercent: i === 0 ? endPeel : i === 2 ? -endPeel : 0,
          scale: endScale,
        };
        if (forceX) props.xPercent = 0;
        gsap.set(h, props);
      });
    };

    const ctx = gsap.context(() => {
      if (head) {
        gsap.fromTo(
          head,
          { autoAlpha: 0, y: 24 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: head,
              start: "top 88%",
              once: true,
            },
          },
        );
      }

      // Pack DNA: opposing off-screen starts
      if (headers[0]) gsap.set(headers[0], { xPercent: 100, yPercent: 0, scale: 1 });
      if (headers[1]) gsap.set(headers[1], { xPercent: -100, yPercent: 0, scale: 1 });
      if (headers[2]) gsap.set(headers[2], { xPercent: 100, yPercent: 0, scale: 1 });

      // Pre-pin fly — scrub until stage docks (pack: top bottom → top top)
      ScrollTrigger.create({
        trigger: stage,
        start: "top bottom",
        end: "top top",
        scrub: 0.85,
        onUpdate: (self) => {
          const p = self.progress;
          gsap.set(headers[0], { xPercent: 100 - p * 100 });
          gsap.set(headers[1], { xPercent: -100 + p * 100 });
          gsap.set(headers[2], { xPercent: 100 - p * 100 });
        },
      });

      // Readable crush end — pack hits ~0.1 on SVG bars; Didone needs more air
      const minScale = () => (window.innerWidth <= 1000 ? 0.62 : 0.52);
      const endPeel = 48;

      // Pinned collapse — 2× vh: full stack, then scale + peel so all three stay legible
      ScrollTrigger.create({
        trigger: stage,
        start: "top top",
        end: () => `+=${Math.round(window.innerHeight * 2)}`,
        pin: true,
        pinSpacing: true,
        scrub: 0.85,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onEnter: () => gsap.set(headers, { xPercent: 0 }),
        onEnterBack: () => gsap.set(headers, { xPercent: 0 }),
        onLeave: () => settleTracks(true),
        onRefresh: (self) => {
          if (self.progress > 0 || self.start <= self.scroll()) {
            gsap.set(headers, { xPercent: 0 });
          }
          if (self.progress >= 1) settleTracks(true);
        },
        onUpdate: (self) => {
          const p = self.progress;
          if (progressEl) {
            progressEl.style.transform = `scaleX(${p})`;
          }

          if (p <= 0.5) {
            // Pack DNA: outer rails slam into the middle
            const yP = p / 0.5;
            gsap.set(headers[0], { yPercent: yP * 100, scale: 1 });
            gsap.set(headers[2], { yPercent: yP * -100, scale: 1 });
            gsap.set(headers[1], { yPercent: 0, scale: 1, zIndex: 5 });
          } else {
            // Crush + peel: leave a compressed sandwich (CREATE / BUILD / GROW)
            const scaleP = (p - 0.5) / 0.5;
            const peel = 100 - scaleP * (100 - endPeel);
            const scale = 1 - scaleP * (1 - minScale());
            gsap.set(headers[0], { yPercent: peel, scale });
            gsap.set(headers[2], { yPercent: -peel, scale });
            gsap.set(headers[1], { yPercent: 0, scale, zIndex: 5 });
          }

          // Plate crossfade through the crush
          if (p > 0.35) {
            const idx = Math.min(2, Math.floor((p - 0.35) / 0.22));
            if (idx !== activePlate.current) setPlate(idx, true);
          }

          root.dataset.phase = p <= 0.5 ? "stack" : "crush";
        },
      });

      gsap.to(plateEls, {
        scale: 1.08,
        ease: "none",
        scrollTrigger: {
          trigger: stage,
          start: "top top",
          end: () => `+=${Math.round(window.innerHeight * 2)}`,
          scrub: true,
        },
      });
    }, root);

    if (fine) {
      headers.forEach((row, i) => {
        const enter = () => {
          setPlate(i, true);
          root.dataset.active = String(i);
        };
        const leave = () => {
          root.removeAttribute("data-active");
          setPlate(activePlate.current, false);
        };
        row.addEventListener("mouseenter", enter);
        row.addEventListener("mouseleave", leave);
        cleanups.push(() => {
          row.removeEventListener("mouseenter", enter);
          row.removeEventListener("mouseleave", leave);
        });
      });
    }

    const onResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", onResize);
    cleanups.push(() => window.removeEventListener("resize", onResize));

    // Lenis / layout settle
    requestAnimationFrame(() => ScrollTrigger.refresh());

    return () => {
      ctx.revert();
      cleanups.forEach((fn) => fn());
    };
  }, []);

  return (
    <section
      ref={rootRef}
      id="capabilities"
      className={styles.section}
      aria-label="Capabilities"
    >
      <header className={styles.head}>
        <div className={styles.headMeta}>
          <p className={styles.kicker}>Capabilities</p>
          <p className={styles.count} aria-hidden="true">
            03
          </p>
        </div>
        <p className={styles.lead}>Three worlds. One practice.</p>
      </header>

      <div className={styles.kineticStage} data-kinetic-stage>
        <div className={styles.plateStack} aria-hidden="true">
          {PILLARS.map((p) => (
            <div
              key={p.word}
              className={styles.plate}
              data-plate
              data-world={p.word.toLowerCase()}
            >
              <Image
                src={p.image.src}
                alt=""
                fill
                sizes="100vw"
                className={styles.plateImg}
                style={{ objectPosition: p.image.objectPosition }}
              />
            </div>
          ))}
        </div>
        <div className={styles.stageVeil} aria-hidden="true" />
        <div className={styles.stageAtmosphere} aria-hidden="true" />

        <div className={styles.progress} aria-hidden="true">
          <span className={styles.progressFill} data-caps-progress />
        </div>

        <nav className={styles.tracks} aria-label="Capability worlds">
          {PILLARS.map((p, idx) => (
            <Link
              key={p.word}
              href={p.href}
              className={cn(styles.trackHeader, styles[`track${idx + 1}`])}
              data-track-header
              data-track-index={idx}
              data-cursor="view"
              data-magnetic
            >
              <span className={styles.trackIndex} aria-hidden="true">
                <span className={styles.trackRail} />
                <span className={styles.trackNum}>{p.num}</span>
              </span>
              <span className={styles.trackMain}>
                <span className={styles.trackWord}>{p.word}</span>
                <span className={styles.trackRule} aria-hidden="true" />
                <span className={styles.trackSub}>{p.sub}</span>
              </span>
              <span className={styles.trackArrow} aria-hidden="true">
                ↗
              </span>
            </Link>
          ))}
        </nav>
      </div>

      <div className={styles.foot}>
        <Link href="/capabilities" className={styles.footLink} data-magnetic>
          All capabilities
          <span aria-hidden="true"> →</span>
        </Link>
      </div>
    </section>
  );
}
