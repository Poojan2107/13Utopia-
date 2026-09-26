"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "@/styles/motion/MagneticCursor.module.css";

/**
 * Animmaster mouse effect — soft gold cursor + magnetic pull on [data-magnetic].
 */
export function MagneticCursor() {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) {
      dot.style.display = "none";
      ring.style.display = "none";
      return;
    }

    document.documentElement.classList.add("has-custom-cursor");

    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const ringPos = { x: pos.x, y: pos.y };

    const moveDot = gsap.quickTo(dot, "x", { duration: 0.16, ease: "power3.out" });
    const moveDotY = gsap.quickTo(dot, "y", { duration: 0.16, ease: "power3.out" });
    const moveRing = gsap.quickTo(ring, "x", { duration: 0.45, ease: "power3.out" });
    const moveRingY = gsap.quickTo(ring, "y", { duration: 0.45, ease: "power3.out" });

    const onMove = (e: MouseEvent) => {
      pos.x = e.clientX;
      pos.y = e.clientY;
      moveDot(pos.x);
      moveDotY(pos.y);
      moveRing(pos.x);
      moveRingY(pos.y);
      ringPos.x = pos.x;
      ringPos.y = pos.y;
    };

    const onOver = (e: MouseEvent) => {
      const t = (e.target as HTMLElement | null)?.closest?.(
        "a, button, [data-magnetic], [data-cursor='hover']",
      );
      if (t) {
        gsap.to(ring, { scale: 2.4, opacity: 0.55, duration: 0.35, ease: "power2.out" });
        gsap.to(dot, { scale: 0.4, duration: 0.3 });
      }
    };

    const onOut = (e: MouseEvent) => {
      const related = e.relatedTarget as HTMLElement | null;
      if (related?.closest?.("a, button, [data-magnetic], [data-cursor='hover']")) return;
      gsap.to(ring, { scale: 1, opacity: 1, duration: 0.35, ease: "power2.out" });
      gsap.to(dot, { scale: 1, duration: 0.3 });
    };

    const onMagnetic = (e: MouseEvent) => {
      const el = (e.currentTarget as HTMLElement);
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) * 0.28;
      const dy = (e.clientY - cy) * 0.28;
      gsap.to(el, { x: dx, y: dy, duration: 0.35, ease: "power2.out" });
    };

    const onMagneticLeave = (e: MouseEvent) => {
      gsap.to(e.currentTarget as HTMLElement, {
        x: 0,
        y: 0,
        duration: 0.55,
        ease: "elastic.out(1, 0.45)",
      });
    };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);

    const magnets = document.querySelectorAll<HTMLElement>("[data-magnetic]");
    magnets.forEach((el) => {
      el.addEventListener("mousemove", onMagnetic);
      el.addEventListener("mouseleave", onMagneticLeave);
    });

    const mo = new MutationObserver(() => {
      document.querySelectorAll<HTMLElement>("[data-magnetic]").forEach((el) => {
        el.removeEventListener("mousemove", onMagnetic);
        el.removeEventListener("mouseleave", onMagneticLeave);
        el.addEventListener("mousemove", onMagnetic);
        el.addEventListener("mouseleave", onMagneticLeave);
      });
    });
    mo.observe(document.body, { childList: true, subtree: true });

    gsap.set([dot, ring], { xPercent: -50, yPercent: -50 });

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
      magnets.forEach((el) => {
        el.removeEventListener("mousemove", onMagnetic);
        el.removeEventListener("mouseleave", onMagneticLeave);
      });
      mo.disconnect();
      document.documentElement.classList.remove("has-custom-cursor");
    };
  }, []);

  return (
    <>
      <div ref={ringRef} className={styles.ring} aria-hidden="true" />
      <div ref={dotRef} className={styles.dot} aria-hidden="true" />
    </>
  );
}
