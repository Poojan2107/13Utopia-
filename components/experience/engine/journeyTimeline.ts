/**
 * Global virtual-scroll map for the homepage journey.
 * Weights approximate homepage scroll lengths (story pin ~3×vh, thesis +=170%, etc.).
 */
export const JOURNEY = {
  story: { start: 0, end: 0.48 },
  presence: { start: 0.48, end: 0.6 },
  thesis: { start: 0.6, end: 0.74 },
  work: { start: 0.74, end: 0.88 },
  cta: { start: 0.88, end: 0.96 },
  footer: { start: 0.96, end: 1 },
} as const;

export type JourneyChapter = keyof typeof JOURNEY;

export function chapterLocalProgress(
  global: number,
  key: JourneyChapter
): number {
  const { start, end } = JOURNEY[key];
  return clamp01((global - start) / Math.max(1e-6, end - start));
}

export function isChapterActive(global: number, key: JourneyChapter): boolean {
  const { start, end } = JOURNEY[key];
  if (key === "footer") return global >= start;
  return global >= start && global < end;
}

/** Story segment remapped to Continuous3DStory's 0–1 pin progress. */
export function storyProgress(global: number): number {
  return chapterLocalProgress(global, "story");
}

function clamp01(t: number) {
  return Math.max(0, Math.min(1, t));
}
