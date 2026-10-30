"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "lenis/dist/lenis.css";
import { noteScrollActivity } from "./scrollActivity";
import { SITE_GSAP_LAG_SMOOTHING, SITE_LENIS } from "./scrollFeel";

type Props = {
  children: React.ReactNode;
};

/**
 * Sitewide smooth scroll — one Lenis river, one GSAP ticker.
 * Snappy lerp only (no duration layer). ScrollTrigger scrub:true reads 1:1.
 */
export function SmoothScrollProvider({ children }: Props) {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.config({ ignoreMobileResize: true });

    const lenis = new Lenis({
      autoRaf: false,
      lerp: SITE_LENIS.lerp,
      smoothWheel: SITE_LENIS.smoothWheel,
      syncTouch: SITE_LENIS.syncTouch,
      wheelMultiplier: SITE_LENIS.wheelMultiplier,
      touchMultiplier: SITE_LENIS.touchMultiplier,
    });

    (window as unknown as { __lenis?: Lenis }).__lenis = lenis;

    lenis.on("scroll", () => {
      noteScrollActivity();
      ScrollTrigger.update();
    });

    const tickerCallback = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(tickerCallback);
    gsap.ticker.lagSmoothing(SITE_GSAP_LAG_SMOOTHING);

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
