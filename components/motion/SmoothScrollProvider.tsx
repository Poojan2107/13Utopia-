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
 * Site-wide Lenis smooth scroll + GSAP ScrollTrigger bridge.
 * Does not animate the hero — only provides the scroll substrate.
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
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.4,
    });

    lenis.on("scroll", ScrollTrigger.update);

    const tick = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    const onLoad = () => ScrollTrigger.refresh();
    window.addEventListener("load", onLoad);
    // Fonts settling can shift sticky chapters
    document.fonts?.ready?.then(() => ScrollTrigger.refresh());

    return () => {
      window.removeEventListener("load", onLoad);
      gsap.ticker.remove(tick);
      lenis.destroy();
      document.documentElement.classList.remove("has-smooth-scroll");
    };
  }, []);

  return <>{children}</>;
}
