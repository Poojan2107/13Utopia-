"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "@/styles/motion/MagneticCursor.module.css";

/**
 * 13 Utopia Signature Emblem Cursor
 * Default State: Signature "13" Capsule (| ≡)
 * Hover / Click / Select State: Morphs into "1" pointing at the target element
 */
export function MagneticCursor() {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const oneBarRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const oneBar = oneBarRef.current;
    if (!cursor || !oneBar) return;

    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) {
      cursor.style.display = "none";
      return;
    }

    document.documentElement.classList.add("has-custom-cursor");

    const moveX = gsap.quickTo(cursor, "x", { duration: 0.14, ease: "power3.out" });
    const moveY = gsap.quickTo(cursor, "y", { duration: 0.14, ease: "power3.out" });
    const rotOne = gsap.quickTo(oneBar, "rotation", { duration: 0.20, ease: "power2.out" });

    let sticky: HTMLElement | null = null;
    let isHovering = false;
    let scrolling = false;
    let scrollTimer = 0;
    let raf = 0;
    let pendingX = 0;
    let pendingY = 0;
    let hasPending = false;

    const setHoverState = (hovered: boolean) => {
      isHovering = hovered;
      if (hovered) {
        cursor.classList.add(styles.isHovered);
      } else {
        cursor.classList.remove(styles.isHovered);
      }
    };

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
        const angle = (Math.atan2(dy, dx) * 180) / Math.PI - 90;

        // Subtle magnetic pull
        const px = cx + dx * 0.15;
        const py = cy + dy * 0.15;
        moveX(px);
        moveY(py);

        // Point the "1" bar towards the element center
        const clampedAngle = Math.max(-45, Math.min(45, angle));
        rotOne(clampedAngle);
        return;
      }

      moveX(x);
      moveY(y);
      rotOne(0);
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
      }, 100);
    };

    const onOver = (e: MouseEvent) => {
      const t = (e.target as HTMLElement | null)?.closest?.(
        "[data-cursor], a, button, [role='button'], [data-magnetic], input, textarea, select",
      ) as HTMLElement | null;
      if (!t) return;
      sticky = t;
      setHoverState(true);
      gsap.to(cursor, { scale: 1.15, duration: 0.25, ease: "power2.out" });
    };

    const onOut = (e: MouseEvent) => {
      const related = e.relatedTarget as HTMLElement | null;
      if (related?.closest?.("[data-cursor], a, button, [role='button'], [data-magnetic], input, textarea, select")) return;
      sticky = null;
      setHoverState(false);
      rotOne(0);
      gsap.to(cursor, { scale: 1, duration: 0.25, ease: "power2.out" });
    };

    const onMouseDown = () => {
      setHoverState(true);
      gsap.to(cursor, { scale: 0.85, duration: 0.12, ease: "power2.out" });
    };

    const onMouseUp = () => {
      gsap.to(cursor, { scale: isHovering ? 1.15 : 1, duration: 0.2, ease: "back.out(2)" });
      if (!sticky) {
        setHoverState(false);
      }
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);

    gsap.set(cursor, { xPercent: -50, yPercent: -50 });

    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(scrollTimer);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
      document.documentElement.classList.remove("has-custom-cursor");
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className={styles.thirteenCursor}
      aria-hidden="true"
    >
      <div className={styles.pillBox}>
        <span ref={oneBarRef} className={styles.oneBar} />
        <div className={styles.threeBars}>
          <span className={styles.threeBarLine} />
          <span className={styles.threeBarLine} />
          <span className={styles.threeBarLine} />
        </div>
      </div>
    </div>
  );
}
