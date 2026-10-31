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
  /**
   * 0.16 left the hero about a quarter-second behind the wheel.
   * 0.62 still eases, and settles in a few frames.
   */
  lerp: 0.62,
  smoothWheel: true,
  syncTouch: false,
  wheelMultiplier: 1.45,
  touchMultiplier: 1.2,
} as const;

/** Never invent GSAP catch-up after frame dips (stacks on Lenis). */
export const SITE_GSAP_LAG_SMOOTHING = 0 as const;

/** 1:1 with Lenis — required for Edolus-like tracking on every pin. */
export const SITE_SCRUB = true as const;

/** Soft catch-up only when a section truly needs it (prefer SITE_SCRUB). */
export const SITE_SCRUB_SOFT = 0.25 as const;

/**
 * ScrollTrigger's pin spacer reparents the node. If React already detached
 * it, revert's removeChild throws NotFoundError. That throw is safe to drop.
 */
export function revertGsapContext(ctx: { revert: () => void }) {
  try {
    ctx.revert();
  } catch (error) {
    if (!(error instanceof DOMException) || error.name !== "NotFoundError") {
      throw error;
    }
  }
}
