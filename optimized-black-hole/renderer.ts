// Browser lifecycle for the baked black-hole pipeline. VGPU stays dynamically imported.

import type { Frame, Gpu, Surface } from "vgpu";

type VgpuApi = typeof import("vgpu");

import {
  createEffects,
  createTargets,
  destroyTargets,
  prewarm,
  renderChain,
  setBakeUniforms,
  setBindings,
  setPostUniforms,
  setShadeUniforms,
  type Effects,
  type Targets,
} from "./pipeline";
import { isUserScrolling } from "@/components/motion/scrollActivity";
import { sampleDive, type DiveSample } from "./dive";
import { defaultHeroSettings } from "./settings";

/** Steady-state cursor yaw — buttery when hero is held. */
const SCENE_YAW_TAU_S = 0.325;
/** First frames after re-entering static hero — catch pointer immediately. */
const SCENE_YAW_REENTRY_TAU_S = 0.055;
const YAW_REENTRY_BOOST_MS = 220;

const MAX_FRAME_DT_S = 0.1;

const TARGET_FPS = 30;

const FRAME_PACING_EPSILON_MS = 2;

const MIN_FRAME_INTERVAL_MS = 1000 / TARGET_FPS - FRAME_PACING_EPSILON_MS;
const MOBILE_QUERY = "(max-width: 767px)";

interface RendererOptions {
  canvas: HTMLCanvasElement;
}

type RenderSize = { width: number; height: number };

export function createRenderer({ canvas }: RendererOptions) {
  const base = defaultHeroSettings();
  const settings = defaultHeroSettings();
  const baseBloomStrength = base.bloom.strength;
  const desktopLayout = {
    centerX: base.centerX,
    centerY: base.centerY,
    cameraRoll: base.cameraRoll,
    mouseYaw: base.mouseYaw,
    centerFade: base.centerFade,
  };
  const mobileQuery = window.matchMedia(MOBILE_QUERY);
  const bloomScale = Math.min(Math.max(window.devicePixelRatio, 1), 2) / 2;
  settings.bloom.radius *= bloomScale;
  settings.bloom.strength *= bloomScale;

  let disposed = false;
  let api: VgpuApi | undefined;
  let gpu: Gpu | undefined;
  let surface: Surface | undefined;
  let effects: Effects | undefined;
  let targets: Targets | undefined;
  let loop: { stop(): void } | undefined;
  let observer: ResizeObserver | undefined;
  let intersection: IntersectionObserver | undefined;
  let documentVisible =
    typeof document === "undefined" ? true : !document.hidden;
  let canvasIntersecting = true;
  let isExplicitlyActive = true;

  let started = false;
  let animationTime = 0;
  let lastFrameAt: number | undefined;
  let resizeFrame = 0;
  let pendingSize: RenderSize | undefined;
  let forceBake = true;
  let pointerXNormalized = 0;
  let currentSceneYaw = 0;
  let lastYawAt: number | undefined;
  /**
   * Dive progress is 1:1 with scroll. During dive we rebake EVERY frame —
   * quantized bake keys were the "frame switching" the eye reads as stutter.
   */
  let diveTarget = 0;
  let diveCurrent = 0;
  let diveActive = false;
  let lastDiveSample: DiveSample | undefined;
  let lastBakeKey = "";
  let lastPostBloom = -1;
  /** Until this timestamp, yaw uses the re-entry tau (instant cursor lock). */
  let yawBoostUntil = 0;

  const bakeKeyOf = () =>
    [
      settings.distance.toFixed(2),
      settings.centerX.toFixed(3),
      settings.centerY.toFixed(3),
      settings.cameraRoll.toFixed(3),
      settings.cameraY.toFixed(3),
      settings.fov.toFixed(3),
    ].join("|");

  const snapYawToPointer = () => {
    currentSceneYaw =
      pointerXNormalized * Math.max(0, settings.mouseYaw);
    yawBoostUntil = clockMs() + YAW_REENTRY_BOOST_MS;
    lastYawAt = undefined;
  };

  const boostYawReentry = () => {
    yawBoostUntil = clockMs() + YAW_REENTRY_BOOST_MS;
    lastYawAt = undefined;
  };

  const applyDiveOrLayout = (progress: number) => {
    const mobile = mobileQuery.matches;
    const wasDiving = diveActive;
    const diving = progress > 0.0005;
    diveActive = diving;

    if (!diving) {
      Object.assign(
        settings,
        mobile
          ? {
              centerX: 0,
              centerY: 0,
              cameraRoll: 0,
              mouseYaw: 0,
              centerFade: 1,
              distance: base.distance,
              fov: base.fov,
              cameraY: base.cameraY,
            }
          : {
              ...desktopLayout,
              distance: base.distance,
              fov: base.fov,
              cameraY: base.cameraY,
            }
      );
      settings.bloom.strength = baseBloomStrength * bloomScale;
      lastDiveSample = undefined;
      // Leaving dive → static hero: smoothly boost yaw to live pointer without sudden snap
      if (wasDiving) boostYawReentry();
    } else {
      const dive = sampleDive(progress, base, mobile);
      lastDiveSample = dive;
      settings.centerX = dive.centerX;
      settings.centerY = dive.centerY;
      settings.cameraRoll = dive.cameraRoll;
      settings.cameraY = dive.cameraY;
      settings.distance = dive.distance;
      settings.fov = dive.fov;
      settings.mouseYaw = dive.mouseYaw;
      settings.centerFade = mobile ? 1 : 0;
      settings.bloom.strength = dive.bloomStrength * bloomScale;
    }

    if (diving) {
      const key = bakeKeyOf();
      if (key !== lastBakeKey) {
        lastBakeKey = key;
        forceBake = true;
      }
    } else {
      const key = bakeKeyOf();
      if (key !== lastBakeKey) {
        lastBakeKey = key;
        forceBake = true;
      }
    }

    if (effects && targets && settings.bloom.strength !== lastPostBloom) {
      lastPostBloom = settings.bloom.strength;
      setPostUniforms(effects, targets, settings);
    }
  };

  applyDiveOrLayout(0);

  const onLayoutChange = () => {
    applyDiveOrLayout(diveTarget);
  };
  mobileQuery.addEventListener("change", onLayoutChange);

  const setDiveProgress = (progress: number) => {
    diveTarget = Math.max(0, Math.min(1, progress));
    return lastDiveSample;
  };

  const getDiveSample = () => lastDiveSample;

  const onPointerMove = (event: PointerEvent) => {
    if (event.pointerType !== "mouse") return;
    const width = Math.max(window.innerWidth, 1);
    pointerXNormalized = Math.min(
      1,
      Math.max(-1, (event.clientX / width) * 2 - 1)
    );
  };

  const recenterPointer = () => {
    pointerXNormalized = 0;
  };
  const onPointerOut = (event: PointerEvent) => {
    if (event.relatedTarget === null) recenterPointer();
  };
  const onVisibilityChange = () => {
    if (document.hidden) recenterPointer();
    documentVisible = !document.hidden;
    reconcileLoop();
  };

  function reconcileLoop(): void {
    if (!started || !gpu || !api) return;
    const shouldRun = !disposed && documentVisible && canvasIntersecting && isExplicitlyActive;
    if (shouldRun === Boolean(loop)) return;
    if (shouldRun) {
      lastFrameAt = undefined;
      // Canvas re-entered view (scroll back to hero) — lock yaw to live pointer.
      if (!diveActive) snapYawToPointer();
      else lastYawAt = undefined;
      loop = startPacedLoop(api, gpu);
    } else {
      loop?.stop();
      loop = undefined;
    }
  }

  function startPacedLoop(vgpu: VgpuApi, activeGpu: Gpu): { stop(): void } {
    let stopped = false;

    let lastPresentedAt: number | undefined;
    let catchUp = false;
    const tick = (timestamp: number): void => {
      if (stopped) return;
      // The scroll thread owns these frames. The hole stays on the last
      // picture and fades with CSS; the pose catches up when the wheel rests.
      if (isUserScrolling()) {
        catchUp = true;
        if (!stopped) frameHandle = requestAnimationFrame(tick);
        return;
      }
      // Skip GPU render when dive is 100% complete and fully settled
      if (diveTarget >= 1.0 && diveCurrent >= 0.999) {
        if (!stopped) frameHandle = requestAnimationFrame(tick);
        return;
      }
      const due =
        lastPresentedAt === undefined ||
        timestamp - lastPresentedAt >= MIN_FRAME_INTERVAL_MS;
      if (due) {
        if (catchUp) {
          diveCurrent = diveTarget;
          catchUp = false;
        }
        lastPresentedAt = timestamp;
        try {
          vgpu.frame(activeGpu, renderFrame);
        } catch (error) {
          handleFailure(error);
        }
      }
      if (!stopped) frameHandle = requestAnimationFrame(tick);
    };
    let frameHandle = requestAnimationFrame(tick);
    return {
      stop(): void {
        stopped = true;
        cancelAnimationFrame(frameHandle);
      },
    };
  }

  const advanceAnimationTime = (now: number): number => {
    animationTime +=
      lastFrameAt === undefined ? 0 : Math.max(0, (now - lastFrameAt) / 1000);
    lastFrameAt = now;
    return animationTime;
  };

  const renderFrame = (frame: Frame): void => {
    if (disposed || !effects || !targets || !surface) return;
    const now = clockMs();

    // Bidirectional dive ease — snappy, buttery smoothness in both forward and reverse
    if (diveTarget > 0.0001 || diveCurrent > 0.0001) {
      diveCurrent += (diveTarget - diveCurrent) * 0.28;
      if (Math.abs(diveTarget - diveCurrent) < 0.00015) {
        diveCurrent = diveTarget;
      }
      applyDiveOrLayout(diveCurrent);
    } else if (diveCurrent !== 0) {
      diveCurrent = 0;
      applyDiveOrLayout(0);
    }

    const runBake = forceBake;
    forceBake = false;
    if (runBake) setBakeUniforms(effects, targets, settings);
    setShadeUniforms(
      effects,
      targets,
      settings,
      advanceAnimationTime(now),
      advanceSceneYaw(now)
    );
    renderChain(frame, effects, targets, surface, runBake);
  };

  const advanceSceneYaw = (now: number): number => {
    if (settings.mouseYaw <= 0) {
      currentSceneYaw = 0;
      lastYawAt = now;
      return 0;
    }
    const target = pointerXNormalized * Math.max(0, settings.mouseYaw);
    const dt =
      lastYawAt === undefined
        ? // First sample after pause / re-entry: treat as a real frame so yaw moves.
          1 / 60
        : Math.min(Math.max((now - lastYawAt) / 1000, 0), MAX_FRAME_DT_S);
    lastYawAt = now;
    const tau =
      now < yawBoostUntil ? SCENE_YAW_REENTRY_TAU_S : SCENE_YAW_TAU_S;
    currentSceneYaw +=
      (target - currentSceneYaw) * (1 - Math.exp(-dt / tau));
    return currentSceneYaw;
  };

  const applyResize = () => {
    resizeFrame = 0;
    const size = pendingSize;
    pendingSize = undefined;
    if (disposed || !size || !gpu || !api || !effects || !targets || !surface)
      return;
    try {
      const previousTargets = targets;
      const nextTargets = createTargets(api, gpu, [
        Math.max(1, Math.round(size.width)),
        Math.max(1, Math.round(size.height)),
      ]);
      try {
        setBindings(effects, nextTargets);
        setPostUniforms(effects, nextTargets, settings);
      } catch (error) {
        destroyTargets(nextTargets);
        throw error;
      }
      targets = nextTargets;
      destroyTargets(previousTargets);
      forceBake = true;
    } catch (error) {
      handleFailure(error);
    }
  };
  const resize = (size: RenderSize) => {
    if (disposed || size.width <= 0 || size.height <= 0) return;
    pendingSize = size;
    if (!resizeFrame) resizeFrame = requestAnimationFrame(applyResize);
  };

  const renderScale = () => {
    const width = canvas.clientWidth || window.innerWidth;
    if (width < 768) return 0.7;
    return 0.75;
  };

  const measure = () => {
    const scale = renderScale();
    resize({
      width: Math.max(1, Math.round(canvas.clientWidth * scale)),
      height: Math.max(1, Math.round(canvas.clientHeight * scale)),
    });
  };

  const dispose = () => {
    if (disposed) return;
    disposed = true;
    loop?.stop();
    if (resizeFrame) cancelAnimationFrame(resizeFrame);
    observer?.disconnect();
    intersection?.disconnect();
    if (typeof window !== "undefined") {
      mobileQuery.removeEventListener("change", onLayoutChange);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerout", onPointerOut);
      window.removeEventListener("blur", recenterPointer);
      document.removeEventListener("visibilitychange", onVisibilityChange);
    }
    gpu?.dispose();
  };

  const initialize = async () => {
    const vgpu = await import("vgpu");
    const { init } = vgpu;
    if (disposed) return;
    const nextGpu = await init();
    if (disposed) {
      nextGpu.dispose();
      return;
    }
    gpu = nextGpu;
    api = vgpu;
    const cssWidth = canvas.clientWidth || window.innerWidth;
    surface = vgpu.surface(gpu, canvas, { dpr: cssWidth < 768 ? 0.7 : 0.75 });
    effects = createEffects(vgpu, gpu);
    targets = createTargets(vgpu, gpu, surface.size);
    setBakeUniforms(effects, targets, settings);
    setShadeUniforms(effects, targets, settings, animationTime, currentSceneYaw);
    setBindings(effects, targets);
    setPostUniforms(effects, targets, settings);
    await prewarm(effects, targets, surface);
    if (disposed) return;
    observer =
      typeof ResizeObserver === "undefined"
        ? undefined
        : new ResizeObserver(measure);
    observer?.observe(canvas);
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerout", onPointerOut, { passive: true });
    window.addEventListener("blur", recenterPointer);
    document.addEventListener("visibilitychange", onVisibilityChange);
    if (typeof IntersectionObserver !== "undefined") {
      intersection = new IntersectionObserver(
        (entries) => {
          canvasIntersecting =
            entries[entries.length - 1]?.isIntersecting ?? canvasIntersecting;
          reconcileLoop();
        },
        { threshold: 0 }
      );
      intersection.observe(canvas);
    }
    measure();
    started = true;
    documentVisible = !document.hidden;
    reconcileLoop();
  };

  function handleFailure(error: unknown): never {
    dispose();
    throw error;
  }

  const ready = initialize().catch((error: unknown) => {
    if (disposed) return;
    handleFailure(error);
  });

  function setActive(active: boolean): void {
    if (isExplicitlyActive === active) return;
    isExplicitlyActive = active;
    reconcileLoop();
  }

  return { ready, dispose, setDiveProgress, getDiveSample, setActive };
}

function clockMs(): number {
  return typeof performance === "undefined" ? Date.now() : performance.now();
}
