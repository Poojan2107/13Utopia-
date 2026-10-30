/**
 * True while Lenis (or native scroll) is still moving.
 * Full-screen WebGPU scenes check this and skip presents so the
 * scroll thread is not waiting on a geodesic bake.
 */
let scrolling = false;
let timer = 0;

export function isUserScrolling(): boolean {
  return scrolling;
}

export function noteScrollActivity(): void {
  scrolling = true;
  if (typeof window === "undefined") return;
  window.clearTimeout(timer);
  timer = window.setTimeout(() => {
    scrolling = false;
  }, 80);
}
