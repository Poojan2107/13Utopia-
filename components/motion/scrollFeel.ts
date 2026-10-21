/**
 * Sitewide scroll authority — tuned to Edolus (edolus.com) feel.
 *
 * Edolus model (PlayCanvas ScrollManager):
 *   alpha = 1 - Math.pow(1 - lerpSpeed, 60 * dt)
 *   current += (target - current) * alpha
 *   lerpSpeed default = 0.1
 *
 * They do NOT use document scroll / Lenis / ScrollTrigger scrub lag —
 * wheel writes a target, one RAF lerps toward it beside the WebGL frame.
 *
 * We approximate that with Lenis lerp only (no duration stack) + scrub:true
 * so GSAP pins read the Lenis stream 1:1.
 *
 * Snappier than raw 0.1: slightly higher lerp + modest wheel gain so long
 * pins (dive / CREATE–GROW / thesis) still feel immediate under the hand.
 */
export const SITE_LENIS = {
  /** Edolus default 0.1 — bumped for snappier tracking on long pins. */
  lerp: 0.14,
  smoothWheel: true,
  syncTouch: false,
  /** Slight gain so one flick covers more of a 3×vh pin without feeling heavy. */
  wheelMultiplier: 1.15,
  touchMultiplier: 1.1,
} as const;

/** Never invent GSAP catch-up after frame dips (stacks on Lenis). */
export const SITE_GSAP_LAG_SMOOTHING = 0 as const;

/** 1:1 with Lenis — required for Edolus-like tracking on every pin. */
export const SITE_SCRUB = true as const;

/** Soft catch-up only when a section truly needs it (prefer SITE_SCRUB). */
export const SITE_SCRUB_SOFT = 0.25 as const;
