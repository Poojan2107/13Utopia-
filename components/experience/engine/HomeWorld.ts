import {
  Color,
  Entity,
  StandardMaterial,
  BLEND_NORMAL,
  type AppBase,
  type Texture,
} from "playcanvas";
import { createPlayCanvasApp, loadTexture } from "./createApp";
import { createSingularityMaterial } from "./singularityMaterial";
import { ScrollController, smootherstep } from "./ScrollController";

export type ChapterId =
  | "hold"
  | "swallow"
  | "horizon"
  | "presence"
  | "thesis"
  | "work"
  | "cta";

export type ExperienceFrame = {
  progress: number;
  chapter: ChapterId;
  heroCopy: number;
  dive: number;
  holeOpacity: number;
  presence: number;
  thesis: number;
  work: number;
  cta: number;
};

export type HomeWorldOptions = {
  canvas: HTMLCanvasElement;
  onFrame: (frame: ExperienceFrame) => void;
  /**
   * `host` — black clear + scroll only; homepage canvases own visuals (1:1 mode).
   * `full` — PlayCanvas draws singularity / presence / work (standalone demo).
   */
  visualMode?: "host" | "full";
};

const WORK_TEXTURES = [
  "/work/mayur.jpg",
  "/work/clothing.jpg",
  "/work/soft.jpg",
  "/work/comp.jpg",
] as const;

/**
 * Full homepage journey built inside PlayCanvas (AppBase + assets + shader).
 * Scroll is Edolus-style virtual progress on the engine update tick.
 */
export class HomeWorld {
  app: AppBase;
  scroll: ScrollController;
  private destroyApp: () => void;
  private camera!: Entity;
  private hole!: Entity;
  private holeMat!: ReturnType<typeof createSingularityMaterial>;
  private presenceRoot!: Entity;
  private monolith!: Entity;
  private workRoot!: Entity;
  private keyLight!: Entity;
  private destroyed = false;
  private onFrame: (frame: ExperienceFrame) => void;
  private time = 0;
  private visualMode: "host" | "full" = "full";

  private constructor(
    app: AppBase,
    destroyApp: () => void,
    onFrame: (frame: ExperienceFrame) => void,
    visualMode: "host" | "full"
  ) {
    this.app = app;
    this.destroyApp = destroyApp;
    this.onFrame = onFrame;
    this.visualMode = visualMode;
    this.scroll = new ScrollController({
      totalScrollPx: 22000,
      touchScrollPx: 3800,
      lerpSpeed: 0.1,
    });
  }

  static async create(opts: HomeWorldOptions): Promise<HomeWorld> {
    const visualMode = opts.visualMode ?? "full";
    const { app, destroy } = await createPlayCanvasApp(opts.canvas);
    const world = new HomeWorld(app, destroy, opts.onFrame, visualMode);

    app.scene.ambientLight = new Color(0.015, 0.015, 0.02);

    // --- Camera ---
    world.camera = new Entity("camera");
    world.camera.addComponent("camera", {
      clearColor: new Color(0, 0, 0, 1),
      farClip: 200,
      nearClip: 0.05,
      fov: 42,
    });
    world.camera.setPosition(0, 0.12, 4.4);
    app.root.addChild(world.camera);

    if (visualMode === "host") {
      world.scroll.attach();
      app.on("update", (dt: number) => world._tick(dt));
      app.start();
      world._emit(0);
      return world;
    }

    // --- Lights ---
    world.keyLight = new Entity("key");
    world.keyLight.addComponent("light", {
      type: "directional",
      color: new Color(0.88, 0.92, 1),
      intensity: 0.4,
      castShadows: false,
    });
    world.keyLight.setEulerAngles(38, 42, 0);
    app.root.addChild(world.keyLight);

    const rim = new Entity("rim");
    rim.addComponent("light", {
      type: "directional",
      color: new Color(0.5, 0.58, 0.72),
      intensity: 0.45,
    });
    rim.setEulerAngles(-18, -125, 0);
    app.root.addChild(rim);

    const fill = new Entity("fill");
    fill.addComponent("light", {
      type: "omni",
      color: new Color(0.35, 0.4, 0.5),
      intensity: 0.3,
      range: 24,
    });
    fill.setPosition(0, 1.4, 2.2);
    app.root.addChild(fill);

    // --- Singularity disc (PlayCanvas shader) ---
    world.holeMat = createSingularityMaterial();
    world.hole = new Entity("singularity");
    world.hole.addComponent("render", {
      type: "plane",
      material: world.holeMat,
    });
    world.hole.setLocalEulerAngles(90, 0, 0);
    world.hole.setLocalScale(7.2, 1, 7.2);
    world.hole.setLocalPosition(0.55, 0.05, -0.2);
    app.root.addChild(world.hole);

    // --- Presence (metallic bust stand-in + portrait plate) ---
    world.presenceRoot = new Entity("presence");
    world.presenceRoot.setLocalScale(0.01, 0.01, 0.01);
    world.presenceRoot.setLocalPosition(0, -1.6, 0);
    world.presenceRoot.enabled = false;
    app.root.addChild(world.presenceRoot);

    const titanium = createTitanium();
    const head = new Entity("head");
    head.addComponent("render", { type: "sphere", material: titanium });
    head.setLocalPosition(0, 1.2, 0);
    head.setLocalScale(0.52, 0.6, 0.52);
    world.presenceRoot.addChild(head);

    const torso = new Entity("torso");
    torso.addComponent("render", { type: "capsule", material: titanium });
    torso.setLocalPosition(0, 0.28, 0);
    torso.setLocalScale(0.82, 0.68, 0.42);
    world.presenceRoot.addChild(torso);

    // Portrait plate from studio asset
    try {
      const portrait = await loadTexture(app, "/metal-human/metal-human.jpg");
      const plateMat = new StandardMaterial();
      plateMat.diffuseMap = portrait;
      plateMat.emissiveMap = portrait;
      plateMat.emissive = new Color(0.35, 0.35, 0.35);
      plateMat.useLighting = false;
      plateMat.opacity = 0.92;
      plateMat.blendType = BLEND_NORMAL;
      plateMat.update();

      const plate = new Entity("portrait");
      plate.addComponent("render", { type: "plane", material: plateMat });
      plate.setLocalEulerAngles(90, 0, 0);
      plate.setLocalPosition(0, 0.85, 0.35);
      plate.setLocalScale(1.35, 1, 1.7);
      world.presenceRoot.addChild(plate);
    } catch {
      /* geometry presence still works */
    }

    // --- Monolith ---
    world.monolith = new Entity("monolith");
    const monoMat = createTitanium();
    monoMat.metalness = 0.98;
    monoMat.gloss = 0.9;
    monoMat.update();
    world.monolith.addComponent("render", { type: "box", material: monoMat });
    world.monolith.setLocalScale(0.55, 1.7, 0.2);
    world.monolith.setLocalPosition(0, 0.15, -0.35);
    world.monolith.enabled = false;
    app.root.addChild(world.monolith);

    // --- Work cards (real project stills) ---
    world.workRoot = new Entity("work");
    world.workRoot.enabled = false;
    app.root.addChild(world.workRoot);

    const textures = await Promise.all(
      WORK_TEXTURES.map((url) =>
        loadTexture(app, url).catch(() => null as Texture | null)
      )
    );

    textures.forEach((tex, i) => {
      if (!tex) return;
      const mat = new StandardMaterial();
      mat.diffuseMap = tex;
      mat.emissiveMap = tex;
      mat.emissive = new Color(0.45, 0.45, 0.45);
      mat.useLighting = false;
      mat.update();

      const card = new Entity(`work-${i}`);
      card.addComponent("render", { type: "plane", material: mat });
      card.setLocalEulerAngles(90, 0, 0);
      const x = (i % 2 === 0 ? -1.15 : 1.15) + (i > 1 ? 0.15 : 0);
      const y = i < 2 ? 0.55 : -0.55;
      card.setLocalPosition(x, y, 0);
      card.setLocalScale(1.7, 1, 1.05);
      world.workRoot.addChild(card);
    });

    world.scroll.attach();
    app.on("update", (dt: number) => world._tick(dt));
    app.start();
    world._emit(0);
    return world;
  }

  destroy() {
    if (this.destroyed) return;
    this.destroyed = true;
    try {
      this.scroll?.detach();
    } catch {
      /* ignore */
    }
    try {
      this.destroyApp?.();
    } catch {
      /* ignore */
    }
  }

  private _tick(dt: number) {
    this.time += dt;
    this.scroll.update(dt);
    const p = this.scroll.progress;
    this._applyProgress(p, dt);
    this._emit(p);
  }

  private _applyProgress(p: number, dt: number) {
    if (this.visualMode === "host") return;

    const dive = smootherstep(0.08, 0.42, p);
    const emerge = smootherstep(0.48, 0.62, p);
    const thesisT = smootherstep(0.62, 0.74, p);
    const workT = smootherstep(0.74, 0.86, p);
    const ctaT = smootherstep(0.86, 0.96, p);

    this.holeMat.setParameter("uDive", dive);
    this.holeMat.setParameter("uTime", this.time);
    const holeOp = 1 - smootherstep(0.5, 0.64, p);
    this.hole.enabled = holeOp > 0.02;
    this.hole.setLocalScale(7.2 * (1 + dive * 0.35), 1, 7.2 * (1 + dive * 0.35));

    // Camera path
    const camZ = lerp(4.4, 1.25, dive);
    const camY = lerp(0.12, -0.08, dive) + emerge * 0.28;
    const camX = Math.sin(thesisT * Math.PI) * 0.4 + workT * 0.7;
    this.camera.setPosition(
      camX,
      camY,
      lerp(camZ, workT > 0.2 ? 4.0 : 3.35, Math.max(emerge, thesisT))
    );
    this.camera.lookAt(0, emerge * 0.5 - workT * 0.1, 0);

    // Presence
    const showPresence = emerge > 0.02 && thesisT < 0.9;
    this.presenceRoot.enabled = showPresence;
    if (showPresence) {
      const ps = lerp(0.01, 1, emerge);
      this.presenceRoot.setLocalScale(ps, ps, ps);
      this.presenceRoot.setLocalPosition(0, lerp(-1.6, -0.12, emerge), 0);
      this.presenceRoot.setLocalEulerAngles(0, emerge * 14 + p * 10, 0);
    }

    // Monolith
    const monoOn = thesisT > 0.12 && workT < 0.55;
    this.monolith.enabled = monoOn;
    if (monoOn) {
      const ms = lerp(0.15, 1, thesisT);
      this.monolith.setLocalScale(0.55 * ms, 1.7 * ms, 0.2 * ms);
      this.monolith.rotate(0, 14 * dt * (0.35 + thesisT), 0);
    }

    // Work cards
    const showWork = workT > 0.05 && ctaT < 0.85;
    this.workRoot.enabled = showWork;
    if (showWork) {
      this.workRoot.setLocalPosition(0, 0.1, lerp(1.2, 0.2, workT));
      this.workRoot.setLocalScale(lerp(0.4, 1, workT), lerp(0.4, 1, workT), 1);
      this.workRoot.setLocalEulerAngles(8, workT * -6, 0);
    }

    if (this.keyLight.light) {
      this.keyLight.light.intensity = lerp(0.35, 1.3, emerge);
    }
  }

  private _emit(p: number) {
    const heroCopy = 1 - smootherstep(0.06, 0.36, p);
    const dive = smootherstep(0.08, 0.42, p);
    const holeOpacity = 1 - smootherstep(0.5, 0.64, p);
    const presence =
      smootherstep(0.48, 0.62, p) * (1 - smootherstep(0.72, 0.84, p));
    const thesis =
      smootherstep(0.62, 0.72, p) * (1 - smootherstep(0.78, 0.88, p));
    const work =
      smootherstep(0.74, 0.84, p) * (1 - smootherstep(0.9, 0.97, p));
    const cta = smootherstep(0.88, 0.96, p);

    let chapter: ChapterId = "hold";
    if (p >= 0.88) chapter = "cta";
    else if (p >= 0.74) chapter = "work";
    else if (p >= 0.62) chapter = "thesis";
    else if (p >= 0.48) chapter = "presence";
    else if (p >= 0.38) chapter = "horizon";
    else if (p >= 0.12) chapter = "swallow";

    this.onFrame({
      progress: p,
      chapter,
      heroCopy,
      dive,
      holeOpacity,
      presence,
      thesis,
      work,
      cta,
    });
  }
}

function createTitanium(): StandardMaterial {
  const m = new StandardMaterial();
  m.diffuse = new Color(0.1, 0.1, 0.11);
  m.specular = new Color(0.7, 0.74, 0.8);
  m.metalness = 1;
  m.useMetalness = true;
  m.gloss = 0.84;
  m.update();
  return m;
}

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}
