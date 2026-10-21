/**
 * Edolus-style virtual scroll — wheel/touch write a target;
 * one RAF lerps current → target with frame-rate independent exponential smoothing.
 * No document scroll. No Lenis. No ScrollTrigger.
 */
export type ScrollControllerOptions = {
  totalScrollPx?: number;
  touchScrollPx?: number;
  /** Edolus default 0.1 — (0 = none, 1 = instant) */
  lerpSpeed?: number;
  onProgress?: (progress: number) => void;
};

export class ScrollController {
  totalScrollPx: number;
  touchScrollPx: number;
  lerpSpeed: number;
  onProgress?: (progress: number) => void;

  private _target = 0;
  private _current = 0;
  private _touchY = 0;
  private _enabled = true;
  private _wheelFn: (e: WheelEvent) => void;
  private _keyFn: (e: KeyboardEvent) => void;
  private _touchStartFn: (e: TouchEvent) => void;
  private _touchMoveFn: (e: TouchEvent) => void;

  constructor(opts: ScrollControllerOptions = {}) {
    this.totalScrollPx = opts.totalScrollPx ?? 24000;
    this.touchScrollPx = opts.touchScrollPx ?? 4000;
    this.lerpSpeed = opts.lerpSpeed ?? 0.1;
    this.onProgress = opts.onProgress;

    this._wheelFn = this._onWheel.bind(this);
    this._keyFn = this._onKey.bind(this);
    this._touchStartFn = this._onTouchStart.bind(this);
    this._touchMoveFn = this._onTouchMove.bind(this);
  }

  get progress() {
    return this._current;
  }

  get target() {
    return this._target;
  }

  attach() {
    window.addEventListener("wheel", this._wheelFn, { passive: false });
    window.addEventListener("keydown", this._keyFn);
    window.addEventListener("touchstart", this._touchStartFn, { passive: true });
    window.addEventListener("touchmove", this._touchMoveFn, { passive: false });
  }

  detach() {
    window.removeEventListener("wheel", this._wheelFn);
    window.removeEventListener("keydown", this._keyFn);
    window.removeEventListener("touchstart", this._touchStartFn);
    window.removeEventListener("touchmove", this._touchMoveFn);
  }

  setEnabled(v: boolean) {
    this._enabled = v;
  }

  setProgress(p: number, immediate = false) {
    const c = clamp01(p);
    this._target = c;
    if (immediate) {
      this._current = c;
      this.onProgress?.(c);
    }
  }

  /** Call every frame with dt in seconds (PlayCanvas dt). */
  update(dt: number) {
    const alpha = 1 - Math.pow(1 - this.lerpSpeed, 60 * Math.max(0, dt));
    this._current += (this._target - this._current) * alpha;
    if (Math.abs(this._target - this._current) < 1e-6) {
      this._current = this._target;
    }
    this.onProgress?.(this._current);
  }

  private _onWheel(e: WheelEvent) {
    if (!this._enabled) return;
    e.preventDefault();
    let dy = e.deltaY;
    if (e.deltaMode === 1) dy *= 18;
    if (e.deltaMode === 2) dy *= window.innerHeight;
    this._target = clamp01(this._target + dy / this.totalScrollPx);
  }

  private _onKey(e: KeyboardEvent) {
    if (!this._enabled) return;
    let step = 0;
    if (e.key === "ArrowDown" || e.key === "PageDown" || e.key === " ") step = 0.06;
    if (e.key === "ArrowUp" || e.key === "PageUp") step = -0.06;
    if (e.key === "Home") {
      this._target = 0;
      return;
    }
    if (e.key === "End") {
      this._target = 1;
      return;
    }
    if (step !== 0) {
      e.preventDefault();
      this._target = clamp01(this._target + step);
    }
  }

  private _onTouchStart(e: TouchEvent) {
    if (!e.touches[0]) return;
    this._touchY = e.touches[0].clientY;
  }

  private _onTouchMove(e: TouchEvent) {
    if (!this._enabled || !e.touches[0]) return;
    e.preventDefault();
    const y = e.touches[0].clientY;
    const dy = this._touchY - y;
    this._touchY = y;
    this._target = clamp01(this._target + dy / this.touchScrollPx);
  }
}

function clamp01(t: number) {
  return Math.max(0, Math.min(1, t));
}

/** Smoothstep helper for chapter windows */
export function smootherstep(edge0: number, edge1: number, x: number) {
  const t = clamp01((x - edge0) / Math.max(1e-6, edge1 - edge0));
  return t * t * t * (t * (t * 6 - 15) + 10);
}
