import {
  AppBase,
  AppOptions,
  CameraComponentSystem,
  LightComponentSystem,
  RenderComponentSystem,
  TextureHandler,
  createGraphicsDevice,
  FILLMODE_FILL_WINDOW,
  RESOLUTION_AUTO,
} from "playcanvas";

export type CreateAppResult = {
  app: AppBase;
  destroy: () => void;
};

/**
 * Proper PlayCanvas bootstrap — AppBase + createGraphicsDevice
 * (tree-shakeable, WebGL2-first; matches current engine docs).
 */
export async function createPlayCanvasApp(
  canvas: HTMLCanvasElement
): Promise<CreateAppResult> {
  const device = await createGraphicsDevice(canvas, {
    deviceTypes: ["webgl2", "webgl1"],
    antialias: true,
    alpha: false,
    powerPreference: "high-performance",
  });

  if (!device) {
    throw new Error("PlayCanvas: failed to create graphics device");
  }

  const options = new AppOptions();
  options.graphicsDevice = device;
  options.componentSystems = [
    RenderComponentSystem,
    CameraComponentSystem,
    LightComponentSystem,
  ];
  options.resourceHandlers = [TextureHandler];

  const app = new AppBase(canvas);
  app.init(options);
  app.setCanvasFillMode(FILLMODE_FILL_WINDOW);
  app.setCanvasResolution(RESOLUTION_AUTO);

  const onResize = () => app.resizeCanvas();
  window.addEventListener("resize", onResize);
  app.resizeCanvas();

  return {
    app,
    destroy: () => {
      window.removeEventListener("resize", onResize);
      app.destroy();
    },
  };
}

export function loadTexture(
  app: AppBase,
  url: string
): Promise<import("playcanvas").Texture> {
  return new Promise((resolve, reject) => {
    app.assets.loadFromUrl(url, "texture", (err, asset) => {
      if (err || !asset) {
        reject(err || new Error(`Failed to load texture: ${url}`));
        return;
      }
      resolve(asset.resource as import("playcanvas").Texture);
    });
  });
}
