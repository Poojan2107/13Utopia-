"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "lenis/dist/lenis.css";

type Props = {
  children: React.ReactNode;
};

/**
 * One continuous scroll river:
 * Lenis lerp smooths the wheel → ScrollTrigger scrub:true reads that stream 1:1
 * → dive camera rebakes every frame. No stacked lag, no pose pops.
 */
export function SmoothScrollProvider({ children }: Props) {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.config({ ignoreMobileResize: true });

    const lenis = new Lenis({
      autoRaf: false,
      lerp: 0.11,
      duration: 0.9,
      smoothWheel: true,
      syncTouch: false,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.0,
    });

    (window as unknown as { __lenis?: Lenis }).__lenis = lenis;

    lenis.on("scroll", ScrollTrigger.update);

    const tickerCallback = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(tickerCallback);
    gsap.ticker.lagSmoothing(0);

    const refresh = () => {
      lenis.resize();
      ScrollTrigger.refresh();
    };
    const t = window.setTimeout(refresh, 120);
    window.addEventListener("load", refresh);

    return () => {
      window.clearTimeout(t);
      window.removeEventListener("load", refresh);
      gsap.ticker.remove(tickerCallback);
      lenis.destroy();
      delete (window as unknown as { __lenis?: Lenis }).__lenis;
    };
  }, []);

  return <>{children}</>;
}
