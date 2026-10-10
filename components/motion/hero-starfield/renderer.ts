import type { Effect, Frame, Gpu, Surface } from "vgpu";
import { defaultHeroSettings } from "@/optimized-black-hole/settings";
import starfieldWgsl from "./starfield.wgsl";

type VgpuApi = typeof import("vgpu");

const TARGET_FPS = 30;
const FRAME_PACING_EPSILON_MS = 2;
const MIN_FRAME_INTERVAL_MS = 1000 / TARGET_FPS - FRAME_PACING_EPSILON_MS;

interface RendererOptions {
  canvas: HTMLCanvasElement;
}

/** Sitewide starfield: exact hero star look, no black hole. */
export function createStarfieldRenderer({ canvas }: RendererOptions) {
  const settings = defaultHeroSettings();
  // Centered framing for ambient (hero keeps off-center black hole)
  const camera = {
    yaw: 0,
    pitch: settings.cameraY,
    orbitRadius: settings.distance,
    fov: settings.fov,
    centerX: 0,
    centerY: 0,
    roll: 0,
  };
  const stars = settings.stars;

  let disposed = false;
  let api: VgpuApi | undefined;
  let gpu: Gpu | undefined;
  let surface: Surface | undefined;
  let effect: Effect | undefined;
  let loop: { stop(): void } | undefined;
  let observer: ResizeObserver | undefined;
  let intersection: IntersectionObserver | undefined;
  let documentVisible =
    typeof document === "undefined" ? true : !document.hidden;
  let canvasIntersecting = true;
  let started = false;
  let animationTime = 0;
  let lastFrameAt: number | undefined;

  const onVisibilityChange = () => {
    documentVisible = !document.hidden;
    reconcileLoop();
  };

  function reconcileLoop(): void {
    if (!started || !gpu || !api) return;
    const shouldRun = !disposed && documentVisible && canvasIntersecting;
    if (shouldRun === Boolean(loop)) return;
    if (shouldRun) {
      lastFrameAt = undefined;
      loop = startPacedLoop(api, gpu);
    } else {
      loop?.stop();
      loop = undefined;
    }
  }

  function startPacedLoop(vgpu: VgpuApi, activeGpu: Gpu): { stop(): void } {
    let stopped = false;
    let lastPresentedAt: number | undefined;
    const tick = (timestamp: number): void => {
      if (stopped) return;
      if (
        lastPresentedAt === undefined ||
        timestamp - lastPresentedAt >= MIN_FRAME_INTERVAL_MS
      ) {
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

  const renderFrame = (frame: Frame): void => {
    if (disposed || !effect || !surface) return;
    const now =
      typeof performance === "undefined" ? Date.now() : performance.now();
    animationTime +=
      lastFrameAt === undefined ? 0 : Math.max(0, (now - lastFrameAt) / 1000);
    lastFrameAt = now;

    effect.set({
      params: {
        resolution: surface.size,
        time: animationTime,
        ...camera,
        ...stars,
      },
    });
    frame.pass(surface, effect);
  };

  const dispose = () => {
    if (disposed) return;
    disposed = true;
    loop?.stop();
    observer?.disconnect();
    intersection?.disconnect();
    if (typeof document !== "undefined") {
      document.removeEventListener("visibilitychange", onVisibilityChange);
    }
    gpu?.dispose();
  };

  const initialize = async () => {
    const vgpu = await import("vgpu");
    if (disposed) return;
    const nextGpu = await vgpu.init();
    if (disposed) {
      nextGpu.dispose();
      return;
    }
    gpu = nextGpu;
    api = vgpu;
    surface = vgpu.surface(gpu, canvas, { dpr: 1 });
    effect = vgpu.effect(gpu, starfieldWgsl, {
      label: "hero-starfield",
      set: {
        params: {
          resolution: surface.size,
          time: 0,
          ...camera,
          ...stars,
        },
      },
    });
    surface.onResize(() => {
      effect?.set({ params: { resolution: surface!.size } });
    });

    observer =
      typeof ResizeObserver === "undefined"
        ? undefined
        : new ResizeObserver(() => {
            /* surface tracks canvas via vgpu */
          });
    observer?.observe(canvas);
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

  return { ready, dispose };
}
