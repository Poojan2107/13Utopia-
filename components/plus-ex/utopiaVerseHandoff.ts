/**
 * Smooth Utopia → UTOPIANVERSE handoff state.
 * Written by Continuous3DStory (diveOnly), read by Mirage rAF — no CustomEvents.
 */

let verseHandoff = 0;

export function setVerseHandoff(progress: number) {
  verseHandoff = Math.max(0, Math.min(1, progress));
}

export function getVerseHandoff(): number {
  return verseHandoff;
}

function smooth(edge0: number, edge1: number, x: number): number {
  const t = Math.max(0, Math.min(1, (x - edge0) / Math.max(1e-6, edge1 - edge0)));
  return t * t * t * (t * (t * 6 - 15) + 10);
}

/**
 * Smooth diveOnly pin (normalized 0–1):
 * 0.00–0.70  cinematic plunge into singularity
 * 0.70–0.96  smooth cosmic dissolve — no pitch-black dead void wall
 * 0.96–1.00  seamless handoff into UTOPIANVERSE
 */
export function sampleDiveOnlyJourney(pinProgress: number) {
  const p = Math.max(0, Math.min(1, pinProgress));
  // Fast, continuous, unified dive journey — camera responds across 0.00 to 0.85
  const diveP = Math.max(0, Math.min(1, p / 0.85));
  const release = smooth(0.70, 0.96, p);

  return {
    diveP,
    /** No harsh black veil — let the celestial stars bridge across */
    blackCut: 0,
    /** Hole canvas fades softly as we complete the plunge */
    holeOpacity: 1 - smooth(0.68, 0.95, p),
    /** Entire dive stage eases out smoothly to hand off to UTOPIANVERSE */
    stageOpacity: 1 - release,
    /** Smooth handoff start so UTOPIANVERSE seamlessly receives the transition */
    handoff: smooth(0.48, 0.84, p),
  };
}

