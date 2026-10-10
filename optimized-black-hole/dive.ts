import type { HeroSettings } from "./settings";

export interface DiveSample {
  centerX: number;
  centerY: number;
  cameraRoll: number;
  cameraY: number;
  distance: number;
  fov: number;
  mouseYaw: number;
  bloomStrength: number;
  /** 0 = clear view, 1 = full black (horizon swallow) */
  overlay: number;
  /** Hero lockup opacity */
  heroCopyOpacity: number;
  /** When true, story content / emblem may emerge */
  emerged: boolean;
}

function clamp01(t: number): number {
  return Math.max(0, Math.min(1, t));
}

/** Quintic smoothstep — soft shoulders, no hard corners. */
function smootherstep(edge0: number, edge1: number, x: number): number {
  const t = clamp01((x - edge0) / Math.max(1e-6, edge1 - edge0));
  return t * t * t * (t * (t * 6 - 15) + 10);
}

function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}

/**
 * Buttery dive curve — wide overlapping phases, immediate responsive scroll,
 * and clean event-horizon swallow-and-emerge clearing.
 */
export function sampleDive(
  progress: number,
  base: HeroSettings,
  mobile: boolean
): DiveSample {
  const p = clamp01(progress);

  // Responsive centering without initial dead zone
  const centerT = smootherstep(0.0, 0.40, p);
  // Fast, cinematic approach into the event horizon
  const approachT = smootherstep(0.04, 0.82, p);
  // Event horizon swallow peaks around the singularity (0.60-0.88)
  const swallowT = smootherstep(0.60, 0.88, p);
  // Emergence veil clears as we burst through into the 3D narrative (0.84-0.98)
  const emergeT = smootherstep(0.84, 0.98, p);

  const startCX = mobile ? 0 : base.centerX;
  const startCY = mobile ? 0 : base.centerY;
  const startRoll = mobile ? 0 : base.cameraRoll;
  const startYaw = mobile ? 0 : base.mouseYaw;

  const nearDistance = mobile ? 3.5 : 3.1;
  const nearFov = mobile ? 2.42 : 2.22;

  // Overlay peaks during horizon swallow, then cleanly dissipates to 0 on emergence
  const overlay = Math.max(0, swallowT * (1 - emergeT));

  return {
    centerX: lerp(startCX, 0, centerT),
    centerY: lerp(startCY, 0, centerT),
    cameraRoll: lerp(startRoll, 0, centerT),
    cameraY: lerp(base.cameraY, base.cameraY * 0.42, approachT),
    distance: lerp(base.distance, nearDistance, approachT),
    fov: lerp(base.fov, nearFov, approachT),
    mouseYaw: lerp(startYaw, 0, centerT),
    bloomStrength: lerp(
      base.bloom.strength,
      base.bloom.strength * 2.0,
      approachT
    ),
    overlay,
    heroCopyOpacity: 1 - smootherstep(0.0, 0.42, p),
    emerged: emergeT > 0.4,
  };
}

/** Scroll span of the Continuous3DStory pin owned by the dive. */
export const DIVE_SCROLL_END = 0.20;
