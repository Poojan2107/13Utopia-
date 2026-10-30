/**
 * While the hero black hole still covers the viewport, the sitewide
 * starfield stays paused so two full-screen GPU scenes never run together.
 */
let covering = false;
const subscribers = new Set<() => void>();

export function isHeroHoleCovering(): boolean {
  return covering;
}

export function setHeroHoleCovering(next: boolean): void {
  if (covering === next) return;
  covering = next;
  subscribers.forEach((notify) => notify());
}

export function subscribeHeroHoleCover(listener: () => void): () => void {
  subscribers.add(listener);
  return () => {
    subscribers.delete(listener);
  };
}
