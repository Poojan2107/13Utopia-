"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "lenis/dist/lenis.css";

gsap.registerPlugin(ScrollTrigger);

type Props = {
  children: React.ReactNode;
};

/**
 * Lenis smooth scroll synced to GSAP ScrollTrigger.
 * Default Lenis scrolls the window — no scrollerProxy needed (proxy desyncs sticky scrub).
 */
export function SmoothScrollProvider({ children }: Props) {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      document.documentElement.classList.add("motion-reduce");
      return;
    }

    document.documentElement.classList.add("has-smooth-scroll");

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.35,
      autoRaf: false,
    });

    lenis.on("scroll", ScrollTrigger.update);

    const tick = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);
    document.fonts?.ready?.then(refresh);
    requestAnimationFrame(refresh);

    (window as unknown as { __lenis?: Lenis }).__lenis = lenis;

    return () => {
      window.removeEventListener("load", refresh);
      gsap.ticker.remove(tick);
      lenis.destroy();
      delete (window as unknown as { __lenis?: Lenis }).__lenis;
      document.documentElement.classList.remove("has-smooth-scroll");
    };
  }, []);

  return <>{children}</>;
}
