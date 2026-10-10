/**
 * Sitewide scroll feel — match hero dive: Lenis smooths input,
 * ScrollTrigger reads that stream 1:1 (no per-section scrub lag).
 */
export const SITE_SCRUB = true as const;

/** Soft catch-up only when a section truly needs it (prefer SITE_SCRUB). */
export const SITE_SCRUB_SOFT = 0.25 as const;
