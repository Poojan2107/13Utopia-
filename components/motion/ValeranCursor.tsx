"use client";

import { useEffect, useRef } from "react";
import styles from "@/styles/motion/ValeranCursor.module.css";

/**
 * Valeran-style square cursor: cream 10px dot, lerp follow, hover grow.
 */
export function ValeranCursor() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const cur = ref.current;
    if (!cur) return;

    const prevHtml = document.documentElement.style.cursor;
    const prevBody = document.body.style.cursor;
    document.documentElement.style.cursor = "none";
    document.body.style.cursor = "none";

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let cx = mx;
    let cy = my;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
    };
    window.addEventListener("mousemove", onMove, { passive: true });

    const loop = () => {
      cx += (mx - cx) * 0.85;
      cy += (my - cy) * 0.85;
      cur.style.left = `${cx}px`;
      cur.style.top = `${cy}px`;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    const onEnter = () => cur.classList.add(styles.hovered);
    const onLeave = () => cur.classList.remove(styles.hovered);

    const bindHover = (el: Element) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    };
    document.querySelectorAll("a, button, [data-cursor]").forEach(bindHover);

    const mo = new MutationObserver(() => {
      document.querySelectorAll("a, button, [data-cursor]").forEach(bindHover);
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      mo.disconnect();
      document.documentElement.style.cursor = prevHtml;
      document.body.style.cursor = prevBody;
    };
  }, []);

  return (
    <div ref={ref} className={styles.root} aria-hidden="true">
      <div className={styles.dot} />
    </div>
  );
}

export default ValeranCursor;
