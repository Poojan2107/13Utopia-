"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "@/styles/motion/MagneticCursor.module.css";

/**
 * Gold cursor + light magnetic pull.
 * rAF-throttled move; no MutationObserver thrash; sticky stretch via quickTo.
 */
export function MagneticCursor() {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);
  const labelRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    const label = labelRef.current;
    if (!dot || !ring || !label) return;

    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) {
      dot.style.display = "none";
      ring.style.display = "none";
      label.style.display = "none";
      return;
    }

    document.documentElement.classList.add("has-custom-cursor");

    const moveDot = gsap.quickTo(dot, "x", { duration: 0.14, ease: "power3.out" });
    const moveDotY = gsap.quickTo(dot, "y", { duration: 0.14, ease: "power3.out" });
    const moveRing = gsap.quickTo(ring, "x", { duration: 0.38, ease: "power3.out" });
    const moveRingY = gsap.quickTo(ring, "y", { duration: 0.38, ease: "power3.out" });
    const moveLabel = gsap.quickTo(label, "x", { duration: 0.28, ease: "power3.out" });
    const moveLabelY = gsap.quickTo(label, "y", { duration: 0.28, ease: "power3.out" });
    const stretchX = gsap.quickTo(ring, "scaleX", { duration: 0.18, ease: "power2.out" });
    const stretchY = gsap.quickTo(ring, "scaleY", { duration: 0.18, ease: "power2.out" });
    const ringRot = gsap.quickTo(ring, "rotation", { duration: 0.18, ease: "power2.out" });

    let sticky: HTMLElement | null = null;
    let mode: "default" | "hover" | "view" | "drag" = "default";
    let scrolling = false;
    let scrollTimer = 0;
    let raf = 0;
    let pendingX = 0;
    let pendingY = 0;
    let hasPending = false;

    const applyMove = () => {
      raf = 0;
      if (!hasPending || scrolling) return;
      hasPending = false;
      const x = pendingX;
      const y = pendingY;

      if (sticky) {
        const rect = sticky.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = x - cx;
        const dy = y - cy;
        const abs = Math.max(Math.abs(dx), Math.abs(dy));
        const stretch = Math.min(1.18, 1 + abs / Math.max(rect.height, 64));
        const squash = Math.max(0.84, 1 - abs / Math.max(rect.width * 2.5, 120));
        const angle = (Math.atan2(dy, dx) * 180) / Math.PI;
        const px = cx + dx * 0.08;
        const py = cy + dy * 0.08;
        moveDot(px);
        moveDotY(py);
        moveRing(px);
        moveRingY(py);
        moveLabel(px);
        moveLabelY(py);
        stretchX(stretch);
        stretchY(squash);
        ringRot(angle);
        return;
      }

      moveDot(x);
      moveDotY(y);
      moveRing(x);
      moveRingY(y);
      moveLabel(x);
      moveLabelY(y);
    };

    const onMove = (e: MouseEvent) => {
      pendingX = e.clientX;
      pendingY = e.clientY;
      hasPending = true;
      if (!raf) raf = requestAnimationFrame(applyMove);
    };

    const onScroll = () => {
      scrolling = true;
      window.clearTimeout(scrollTimer);
      scrollTimer = window.setTimeout(() => {
        scrolling = false;
      }, 120);
    };

    const setState = (next: typeof mode) => {
      mode = next;
      const map = {
        default: { scale: 1, opacity: 1, text: "" },
        hover: { scale: 2.1, opacity: 0.55, text: "" },
        view: { scale: 3, opacity: 0.9, text: "View" },
        drag: { scale: 3.2, opacity: 0.9, text: "Drag" },
      } as const;
      const s = map[next];
      if (!sticky) {
        gsap.to(ring, {
          scale: s.scale,
          scaleX: s.scale,
          scaleY: s.scale,
          rotation: 0,
          opacity: s.opacity,
          duration: 0.28,
          ease: "power2.out",
          overwrite: "auto",
        });
      }
      gsap.to(dot, {
        scale: next === "default" ? 1 : 0.35,
        duration: 0.25,
        overwrite: "auto",
      });
      label.textContent = s.text;
      gsap.to(label, {
        autoAlpha: s.text ? 1 : 0,
        duration: 0.2,
        overwrite: "auto",
      });
    };

    const onOver = (e: MouseEvent) => {
      const t = (e.target as HTMLElement | null)?.closest?.(
        "[data-cursor], a, button, [data-magnetic]",
      ) as HTMLElement | null;
      if (!t) return;
      if (t.hasAttribute("data-magnetic") || t.hasAttribute("data-sticky-cursor")) {
        sticky = t;
      }
      const next = (t.getAttribute("data-cursor") as "hover" | "view" | "drag") || "hover";
      setState(next === "view" || next === "drag" || next === "hover" ? next : "hover");
    };

    const onOut = (e: MouseEvent) => {
      const related = e.relatedTarget as HTMLElement | null;
      if (related?.closest?.("[data-cursor], a, button, [data-magnetic]")) return;
      sticky = null;
      gsap.to(ring, {
        scaleX: 1,
        scaleY: 1,
        rotation: 0,
        duration: 0.28,
        ease: "power2.out",
        overwrite: "auto",
      });
      setState("default");
    };

    const onMagnetic = (e: MouseEvent) => {
      if (scrolling) return;
      const el = e.currentTarget as HTMLElement;
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      gsap.to(el, {
        x: (e.clientX - cx) * 0.12,
        y: (e.clientY - cy) * 0.12,
        duration: 0.28,
        ease: "power2.out",
        overwrite: "auto",
      });
    };

    const onMagneticLeave = (e: MouseEvent) => {
      sticky = null;
      gsap.to(e.currentTarget as HTMLElement, {
        x: 0,
        y: 0,
        duration: 0.28,
        ease: "power2.out",
        overwrite: "auto",
      });
      gsap.to(ring, {
        scaleX: mode === "default" ? 1 : 2.1,
        scaleY: mode === "default" ? 1 : 2.1,
        rotation: 0,
        duration: 0.25,
        overwrite: "auto",
      });
    };

    const magnets = new WeakSet<HTMLElement>();
    const bindMagnets = (root: ParentNode = document) => {
      root.querySelectorAll?.<HTMLElement>("[data-magnetic]").forEach((el) => {
        if (magnets.has(el)) return;
        magnets.add(el);
        el.addEventListener("mousemove", onMagnetic);
        el.addEventListener("mouseleave", onMagneticLeave);
      });
    };

    let moTimer = 0;
    const mo = new MutationObserver(() => {
      window.clearTimeout(moTimer);
      moTimer = window.setTimeout(() => bindMagnets(), 80);
    });
    mo.observe(document.body, { childList: true, subtree: true });

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);
    bindMagnets();

    gsap.set([dot, ring, label], { xPercent: -50, yPercent: -50 });
    gsap.set(label, { autoAlpha: 0 });

    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(scrollTimer);
      window.clearTimeout(moTimer);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
      mo.disconnect();
      document.documentElement.classList.remove("has-custom-cursor");
    };
  }, []);

  return (
    <>
      <div ref={ringRef} className={styles.ring} aria-hidden="true" />
      <div ref={dotRef} className={styles.dot} aria-hidden="true" />
      <span
        ref={labelRef}
        className={styles.label}
        aria-hidden="true"
        suppressHydrationWarning
      />
    </>
  );
}
