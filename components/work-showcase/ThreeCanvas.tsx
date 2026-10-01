"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { Project, RepeatedProject } from "./projects";
import styles from "./WorkShowcase.module.css";

// Custom Vertex Shader implementing Jesper Landberg's ribbon S-curve & physics
const vertexShader = `
uniform float u_sheetW;     // Frustum half-width at z=0
uniform float u_sheetD;     // Wave amplitude in world units
uniform float u_sheetT;     // S-curve span across frame
uniform float u_sheetC;     // Curve blend (0 = bowl parabola, 1 = sine S)
uniform float u_sheetP;     // Strength (1 on carousel, eases to 0 on detail)
uniform float u_sheetV;     // Smoothed velocity magnitude (0..1)
uniform float u_leanA;      // Door lean signed depth
uniform float u_leanW;      // Frustum half-width for lean
uniform float u_hover;      // Pointer hover strength (0..1)
uniform float u_dent;       // Hover dent depth

varying vec2 vUv;
varying vec3 vWorld;

const float SHEET_PI = 3.141592653589793;
const float SHEET_BANK = -0.12;       // Gentle resting bank roll angle
const float SHEET_DIAG = 0.02;        // Subtle uphill shear
const float SHEET_TAIL = 0.9;         // Smooth Gaussian decay
const float SHEET_SHIFT = -0.15;      // Crest shift
const float SHEET_REAR_Y = 0.06;      // Velocity lift
const float SHEET_REAR_Z = 0.12;      // Velocity approach
const float SHEET_VTWIST = 0.8;       // Velocity edge wring

float sheetQ(float wx) {
    return (wx / max(u_sheetW, 0.0001)) * u_sheetT + SHEET_SHIFT;
}

float sheetShape(float q) {
    return mix(1.0 - q * q, sin(SHEET_PI * q), u_sheetC) * exp(-SHEET_TAIL * q * q);
}

float sheetShapeSlope(float q) {
    float g = exp(-SHEET_TAIL * q * q);
    float bowl = -2.0 * q * (1.0 + SHEET_TAIL * (1.0 - q * q));
    float ess = SHEET_PI * cos(SHEET_PI * q) - 2.0 * SHEET_TAIL * q * sin(SHEET_PI * q);
    return mix(bowl, ess, u_sheetC) * g;
}

float sheetZ(float wx) {
    return -u_sheetD * sheetShape(sheetQ(wx));
}

float sheetRoll(float wx) {
    if (u_sheetW < 0.001) return 0.0;
    return (SHEET_BANK * sheetShapeSlope(sheetQ(wx)) / SHEET_PI) * u_sheetC * u_sheetP;
}

// Centerline roll & velocity edge twist
vec4 sheetWind(vec4 w) {
    float a = sheetRoll(w.x);
    if (u_sheetV > 0.001 && u_sheetW > 0.001 && u_sheetP > 0.001) {
        float qe = w.x / u_sheetW;
        a += SHEET_VTWIST * u_sheetV * smoothstep(0.3, 0.9, abs(qe)) * sign(qe) * u_sheetP;
    }
    if (abs(a) < 0.0001) return w;
    float s = sin(a);
    float c = cos(a);
    return vec4(w.x, w.y * c - w.z * s, w.y * s + w.z * c, w.w);
}

// Door lean cubic polynomial ramp
float leanRamp(float s) {
    s = clamp(s, -1.0, 1.0);
    return s * (1.5 - 0.5 * s * s);
}

vec4 lean(vec4 w, float k) {
    if (u_leanW > 0.001 && k > 0.001) {
        w.z += u_leanA * leanRamp(w.x / u_leanW) * k;
    }
    return w;
}

float sheetDome(vec2 uv) {
    vec2 q = uv * 2.0 - 1.0;
    return (1.0 - q.x * q.x) * (1.0 - q.y * q.y);
}

void main() {
    vUv = uv;

    // 1. World space position
    vec4 w = modelMatrix * vec4(position, 1.0);

    // 2. Cursor hover dent
    if (u_hover > 0.0001) {
        w.z -= u_hover * u_dent * sheetDome(uv);
    }

    // 3. Roll about centerline
    w = sheetWind(w);

    // 4. S-Curve in depth (Z)
    w.z += sheetZ(w.x) * u_sheetP;

    // 5. Diagonal shear & velocity rear-up
    if (u_sheetW > 0.001) {
        float qw = w.x / u_sheetW;
        w.y += SHEET_DIAG * w.x * u_sheetP;

        if (u_sheetV > 0.001) {
            float m = 1.0 - smoothstep(-1.0, 0.3, qw);
            w.y += SHEET_REAR_Y * u_sheetW * u_sheetV * m * u_sheetP;
            w.z += SHEET_REAR_Z * u_sheetW * u_sheetV * m * u_sheetP;
        }
    }

    // 6. Smooth door lean
    w = lean(w, u_sheetP);

    vWorld = w.xyz;
    gl_Position = projectionMatrix * viewMatrix * w;
}
`;

// Custom Fragment Shader with analytical normals & specular gloss
const fragmentShader = `
uniform sampler2D u_texture;
uniform sampler2D u_hoverTex;
uniform vec2 u_res;         // Plane scale in world units
uniform vec2 u_size;        // Source texture resolution
uniform float u_alpha;
uniform float u_corner;     // Rounded corner radius normalized to height
uniform float u_hover;
uniform float u_dent;
uniform float u_sheetW;
uniform float u_sheetD;
uniform float u_sheetT;
uniform float u_sheetP;
uniform float u_sheetC;
uniform float u_leanA;
uniform float u_leanW;

varying vec2 vUv;
varying vec3 vWorld;

const float SHEET_PI = 3.141592653589793;
const float SHEET_BANK = -0.12;
const float SHEET_TAIL = 0.9;
const float SHEET_SHIFT = -0.15;

float sheetQ(float wx) {
    return (wx / max(u_sheetW, 0.0001)) * u_sheetT + SHEET_SHIFT;
}

float sheetShapeSlope(float q) {
    float g = exp(-SHEET_TAIL * q * q);
    float bowl = -2.0 * q * (1.0 + SHEET_TAIL * (1.0 - q * q));
    float ess = SHEET_PI * cos(SHEET_PI * q) - 2.0 * SHEET_TAIL * q * sin(SHEET_PI * q);
    return mix(bowl, ess, u_sheetC) * g;
}

float sheetRoll(float wx) {
    if (u_sheetW < 0.001) return 0.0;
    return (SHEET_BANK * sheetShapeSlope(sheetQ(wx)) / SHEET_PI) * u_sheetC * u_sheetP;
}

float leanSlope(float s) {
    s = min(abs(s), 1.0);
    return 1.5 * (1.0 - s * s);
}

// Analytical Normal Calculation
vec3 calculateSheetNormal(float wx, vec2 uv, vec2 res) {
    float dzdx = 0.0;
    float dzdy = 0.0;

    // 1. Derivative of S-curve
    if (u_sheetW > 0.001 && u_sheetP > 0.001 && u_sheetD > 0.001) {
        dzdx += -u_sheetD * sheetShapeSlope(sheetQ(wx)) * (u_sheetT / u_sheetW) * u_sheetP;
    }

    // 2. Derivative of door lean
    if (u_leanW > 0.001) {
        dzdx += (u_leanA / u_leanW) * leanSlope(wx / u_leanW) * u_sheetP;
    }

    // 3. Derivative of hover dent
    if (u_hover > 0.0001) {
        vec2 q = uv * 2.0 - 1.0;
        float a = u_hover * u_dent;
        dzdx += 4.0 * a * res.y * q.x * (1.0 - q.y * q.y) / max(res.x, 0.0001);
        dzdy += 4.0 * a * q.y * (1.0 - q.x * q.x);
    }

    vec3 n = normalize(vec3(-dzdx, -dzdy, 1.0));

    // Rotate normal with the surface bank roll
    float a = sheetRoll(wx);
    if (abs(a) > 0.0001) {
        float s = sin(a);
        float c = cos(a);
        n = vec3(n.x, n.y * c - n.z * s, n.y * s + n.z * c);
    }

    return n;
}

// Signed distance field for rounded box corners
float roundedBoxSDF(vec2 p, vec2 b, float r) {
    vec2 d = abs(p) - b + vec2(r);
    return min(max(d.x, d.y), 0.0) + length(max(d, 0.0)) - r;
}

void main() {
    // Sample resting texture and hover texture
    vec4 texNormal = texture2D(u_texture, vUv);
    vec4 texHover = texture2D(u_hoverTex, vUv);
    vec4 tex = mix(texNormal, texHover, u_hover);

    // Rounded rectangle mask
    vec2 p = (vUv - 0.5) * u_res;
    float r = u_corner * u_res.y;
    float d = roundedBoxSDF(p, u_res * 0.5, r);
    float edgeAlpha = 1.0 - smoothstep(0.0, 1.5 / max(u_res.y, 1.0), d);

    // Analytical normal calculation for silky champagne specular sheen
    vec3 n = calculateSheetNormal(vWorld.x, vUv, u_res);
    vec3 lightDir = normalize(vec3(0.15, 0.75, 0.65));
    vec3 viewDir = normalize(vec3(0.0, 0.0, 1.0));
    vec3 halfVec = normalize(lightDir + viewDir);

    // Subtle specular highlight on crests (no dark shadows in troughs!)
    float spec = pow(max(dot(n, halfVec), 0.0), 32.0) * 0.16;
    float rim = pow(1.0 - max(dot(n, viewDir), 0.0), 2.8) * 0.07;
    vec3 sheen = vec3(1.0, 0.95, 0.85) * spec + vec3(0.9, 0.82, 0.7) * rim;

    // Crisp, pure texture color with zero muddy trough darkening
    vec3 col = tex.rgb + sheen;

    gl_FragColor = vec4(col, tex.a * u_alpha * edgeAlpha);
}
`;

// Floor Grid Shader
const floorVertexShader = `
uniform float u_leanA;
uniform float u_leanW;
varying vec2 vUv;
varying vec3 vWorld;

float leanRamp(float s) {
    s = clamp(s, -1.0, 1.0);
    return s * (1.5 - 0.5 * s * s);
}

void main() {
    vUv = uv;
    vec4 w = modelMatrix * vec4(position, 1.0);
    if (u_leanW > 0.001) {
        w.z += u_leanA * leanRamp(w.x / u_leanW);
    }
    vWorld = w.xyz;
    gl_Position = projectionMatrix * viewMatrix * w;
}
`;

const floorFragmentShader = `
uniform vec3 u_c0;
uniform vec3 u_c1;
uniform float u_alpha;
uniform vec2 u_gridF;
varying vec2 vUv;
varying vec3 vWorld;

void main() {
    vec2 g = abs(fract(vUv * u_gridF - 0.5) - 0.5) * 2.0;
    float line = max(smoothstep(0.92, 0.98, g.x), smoothstep(0.92, 0.98, g.y));
    float fade = smoothstep(0.0, 0.65, 1.0 - vUv.y);

    vec3 col = mix(u_c0, u_c1, line * 0.25);
    gl_FragColor = vec4(col, (line * 0.18 + 0.015) * u_alpha * fade);
}
`;

// Helper: Generates composite card canvas texture
const createCardCanvasTexture = (
  image: HTMLImageElement,
  title: string,
  isHovered: boolean,
  aspectRatio = 1.7
): THREE.CanvasTexture => {
  const canvas = document.createElement("canvas");
  const w = 1600;
  const h = Math.round(w / aspectRatio);
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext("2d");

  if (!ctx) return new THREE.CanvasTexture(canvas);

  // 1. Draw Image with cover fit
  const imgRatio = image.width / image.height;
  const canvasRatio = w / h;
  let sx = 0,
    sy = 0,
    sWidth = image.width,
    sHeight = image.height;
  if (imgRatio > canvasRatio) {
    sWidth = image.height * canvasRatio;
    sx = (image.width - sWidth) / 2;
  } else {
    sHeight = image.width / canvasRatio;
    sy = (image.height - sHeight) / 2;
  }
  ctx.drawImage(image, sx, sy, sWidth, sHeight, 0, 0, w, h);

  // 2. Soft, subtle bottom gradient vignette (doesn't wash out card image)
  const scrim = ctx.createLinearGradient(0, h * 0.74, 0, h);
  scrim.addColorStop(0, "rgba(0, 0, 0, 0)");
  scrim.addColorStop(0.5, "rgba(0, 0, 0, 0.22)");
  scrim.addColorStop(1, "rgba(0, 0, 0, 0.52)");
  ctx.fillStyle = scrim;
  ctx.fillRect(0, h * 0.74, w, h * 0.26);

  // 3. Project Title (PP Neue Montreal — 13 UTOPIA signature)
  ctx.save();
  ctx.font =
    "600 50px 'PP Neue Montreal', 'Neue Montreal', -apple-system, BlinkMacSystemFont, sans-serif";
  ctx.fillStyle = "#ffffff";
  ctx.shadowColor = "rgba(0, 0, 0, 0.9)";
  ctx.shadowBlur = 12;
  ctx.shadowOffsetY = 2;
  ctx.fillText(title, 55, h - 55);
  ctx.restore();

  // 4. Arrow Pill Button (13 UTOPIA Gold Signature)
  const pillX = w - 85;
  const pillY = h - 72;
  const pillRadius = isHovered ? 42 : 36;

  ctx.save();
  ctx.beginPath();
  ctx.arc(pillX, pillY, pillRadius, 0, Math.PI * 2);

  if (isHovered) {
    ctx.fillStyle = "#dfb76c"; // Solid 13 UTOPIA Gold
    ctx.fill();
    ctx.shadowColor = "rgba(223, 183, 108, 0.6)";
    ctx.shadowBlur = 18;
  } else {
    ctx.fillStyle = "rgba(8, 7, 5, 0.85)";
    ctx.fill();
    ctx.strokeStyle = "rgba(223, 183, 108, 0.55)"; // Gold outline
    ctx.lineWidth = 2.5;
    ctx.stroke();
  }

  // Draw Arrow
  ctx.beginPath();
  ctx.strokeStyle = isHovered ? "#000000" : "#dfb76c";
  ctx.lineWidth = isHovered ? 4.5 : 4;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";

  const sz = isHovered ? 16 : 13;
  ctx.moveTo(pillX - sz * 0.6, pillY + sz * 0.6);
  ctx.lineTo(pillX + sz * 0.6, pillY - sz * 0.6);
  ctx.moveTo(pillX + sz * 0.6 - sz * 0.8, pillY - sz * 0.6);
  ctx.lineTo(pillX + sz * 0.6, pillY - sz * 0.6);
  ctx.lineTo(pillX + sz * 0.6, pillY - sz * 0.6 + sz * 0.8);
  ctx.stroke();
  ctx.restore();

  const texture = new THREE.CanvasTexture(canvas);
  texture.minFilter = THREE.LinearFilter;
  texture.magFilter = THREE.LinearFilter;
  texture.generateMipmaps = false;
  return texture;
};

// Fallback solid placeholder
const createSolidTexture = () => {
  const canvas = document.createElement("canvas");
  canvas.width = 4;
  canvas.height = 4;
  const ctx = canvas.getContext("2d");
  if (ctx) {
    ctx.fillStyle = "#181818";
    ctx.fillRect(0, 0, 4, 4);
  }
  const tex = new THREE.CanvasTexture(canvas);
  tex.needsUpdate = true;
  return tex;
};

export interface CardMetric {
  uniqueId: string;
  slug: string;
  project: Project;
  wPx: number;
  hPx: number;
  leftPx: number;
}

interface ThreeCanvasProps {
  repeatedProjects: RepeatedProject[];
  scrollCurrentRef: React.MutableRefObject<number>;
  velocityRef: React.MutableRefObject<number>;
  hoveredSlug: string | null;
  onCardClick: (project: Project) => void;
  onCardMetricsReady?: (metrics: CardMetric[], singleLoopWidth: number) => void;
  /** Optional className override — use to switch from fixed to absolute positioning when embedding inline */
  className?: string;
}

export default function ThreeCanvas({
  repeatedProjects,
  scrollCurrentRef,
  velocityRef,
  hoveredSlug,
  onCardClick,
  onCardMetricsReady,
  className,
}: ThreeCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardMetricsRef = useRef<CardMetric[]>([]);
  const singleLoopWidthRef = useRef<number>(0);

  useEffect(() => {
    if (!containerRef.current) return;

    let renderer: THREE.WebGLRenderer | null = null;
    let animationFrameId: number;

    try {
      // 1. Scene & Camera
      const scene = new THREE.Scene();
      scene.background = new THREE.Color(0x000000);

      const fov = 75;
      const camera = new THREE.PerspectiveCamera(
        fov,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      camera.position.set(0, 0, 27);

      // 2. WebGL Renderer
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: false,
        powerPreference: "high-performance",
      });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      containerRef.current.appendChild(renderer.domElement);

      // 3. Shared Plane Geometry (24x24 for fluid S-curve ribbon deformation)
      const cardGeometry = new THREE.PlaneGeometry(1, 1, 24, 24);

      // 4. Preload Textures & Cache
      const textureCache = new Map<
        string,
        { normal: THREE.CanvasTexture; hover: THREE.CanvasTexture; isLoaded: boolean }
      >();
      const defaultPlaceholder = createSolidTexture();

      // Pre-warm unique projects textures
      repeatedProjects.forEach((p) => {
        if (!textureCache.has(p.slug)) {
          const entry = {
            normal: defaultPlaceholder,
            hover: defaultPlaceholder,
            isLoaded: false,
          };
          textureCache.set(p.slug, entry);

          const img = new Image();
          img.crossOrigin = "anonymous";
          img.src = p.image;
          img.onload = () => {
            try {
              const aspect =
                p.width && p.height ? p.width / p.height : img.width / img.height;
              const norm = createCardCanvasTexture(img, p.title, false, aspect);
              const hov = createCardCanvasTexture(img, p.title, true, aspect);
              entry.normal = norm;
              entry.hover = hov;
              entry.isLoaded = true;

              // `initTexture` exists on some renderer builds but not on the
              // public WebGLRenderer type, so probe for it structurally.
              const initable = renderer as
                | (THREE.WebGLRenderer & { initTexture?: (t: THREE.Texture) => void })
                | null;
              if (initable && typeof initable.initTexture === "function") {
                try {
                  initable.initTexture(norm);
                  initable.initTexture(hov);
                } catch {
                  // Safe ignore if WebGL context not ready
                }
              }
            } catch (err) {
              console.warn("Failed texture creation for", p.slug, err);
            }
          };
          img.onerror = () => {
            entry.isLoaded = true;
          };
        }
      });

      // 5. Precompute Card Metrics (Deterministic Layout — Zero DOM queries in RAF loop!)
      const updateMetrics = () => {
        const ww = window.innerWidth;
        const wh = window.innerHeight;
        const isDesktop = ww > 650;
        const hPx = Math.min(wh * 0.435, isDesktop ? 540 : 380);
        const gapPx = isDesktop ? 100 : 32;

        let leftAccumulator = 0;
        const metrics: CardMetric[] = [];

        repeatedProjects.forEach((p) => {
          const aspect = p.width / p.height;
          const wPx = Math.round(hPx * aspect);
          metrics.push({
            uniqueId: p.uniqueId,
            slug: p.slug,
            project: p,
            wPx,
            hPx,
            leftPx: leftAccumulator,
          });
          leftAccumulator += wPx + gapPx;
        });

        cardMetricsRef.current = metrics;
        const singleW = leftAccumulator / 3;
        singleLoopWidthRef.current = singleW;

        if (onCardMetricsReady) {
          onCardMetricsReady(metrics, singleW);
        }
      };

      updateMetrics();

      // 6. Create Meshes for each Card
      const cardMeshes: {
        mesh: THREE.Mesh;
        slug: string;
        uniqueId: string;
        metricIndex: number;
      }[] = [];

      repeatedProjects.forEach((p, idx) => {
        const entry = textureCache.get(p.slug)!;
        const sizeVec = new THREE.Vector2(p.width || 1920, p.height || 1080);

        const material = new THREE.ShaderMaterial({
          vertexShader,
          fragmentShader,
          uniforms: {
            u_texture: { value: entry.normal },
            u_hoverTex: { value: entry.hover },
            u_res: { value: new THREE.Vector2(1, 1) },
            u_size: { value: sizeVec },
            u_alpha: { value: 1.0 },
            u_corner: { value: 0.045 },
            u_hover: { value: 0.0 },
            u_dent: { value: 0.08 },
            u_sheetW: { value: 1.0 },
            u_sheetD: { value: 0.15 },
            u_sheetT: { value: 1.1 },
            u_sheetC: { value: 1.0 },
            u_sheetP: { value: 1.0 },
            u_sheetV: { value: 0.0 },
            u_leanA: { value: -0.06 },
            u_leanW: { value: 1.0 },
          },
          transparent: true,
          side: THREE.DoubleSide,
        });

        const mesh = new THREE.Mesh(cardGeometry, material);
        mesh.visible = false;
        scene.add(mesh);
        cardMeshes.push({
          mesh,
          slug: p.slug,
          uniqueId: p.uniqueId,
          metricIndex: idx,
        });
      });

      // 7. Floor Grid Mesh
      const floorGeo = new THREE.PlaneGeometry(1, 1, 32, 16);
      floorGeo.rotateX(-Math.PI / 2);
      const floorMat = new THREE.ShaderMaterial({
        vertexShader: floorVertexShader,
        fragmentShader: floorFragmentShader,
        uniforms: {
          u_c0: { value: new THREE.Color(0x000000) },
          u_c1: { value: new THREE.Color(0x282828) },
          u_alpha: { value: 0.8 },
          u_gridF: { value: new THREE.Vector2(40, 20) },
          u_leanA: { value: -0.06 },
          u_leanW: { value: 1.0 },
        },
        transparent: true,
        depthWrite: false,
      });
      const floorMesh = new THREE.Mesh(floorGeo, floorMat);
      scene.add(floorMesh);

      // 8. Ribbon Parameters calculation
      const calculateSheetParams = () => {
        const vFov = (camera.fov * Math.PI) / 180;
        const frustumHeight = 2 * Math.tan(vFov / 2) * camera.position.z;
        const frustumWidth = frustumHeight * camera.aspect;
        const halfW = frustumWidth / 2;

        return {
          W: halfW,
          H: frustumHeight / 2,
          D: halfW * 0.14,
          T: 1.1,
          C: 1.0,
          A: halfW * -0.06,
        };
      };

      // 9. Main Animation Loop (High-speed 120fps Math, No Layout Reflows!)
      const animate = () => {
        animationFrameId = requestAnimationFrame(animate);

        const ww = window.innerWidth;
        const wh = window.innerHeight;
        const sheet = calculateSheetParams();
        const currentVel = velocityRef.current || 0;
        const smoothVel = Math.min(Math.abs(currentVel) / 250, 1.0);

        // Frustum coordinates
        const vFov = (camera.fov * Math.PI) / 180;
        const frustumHeight = 2 * Math.tan(vFov / 2) * camera.position.z;
        const frustumWidth = frustumHeight * (ww / wh);
        const pxToWorld = frustumHeight / wh;

        // Position Floor Grid
        floorMesh.scale.set(frustumWidth * 2.5, 1, frustumHeight * 2.5);
        floorMesh.position.set(0, -frustumHeight * 0.38, -frustumHeight * 0.4);
        floorMat.uniforms.u_leanA.value = sheet.A;
        floorMat.uniforms.u_leanW.value = sheet.W;

        // Virtual Scroll Position
        const scroll = scrollCurrentRef.current || 0;
        const singleW = singleLoopWidthRef.current;
        const totalSpan = singleW * 3;

        // Update cards with seamless modulo wrap
        cardMeshes.forEach(({ mesh, slug, metricIndex }) => {
          const metric = cardMetricsRef.current[metricIndex];
          if (!metric || singleW <= 0) return;

          let cardScreenX = (metric.leftPx - scroll) % totalSpan;
          if (cardScreenX < -metric.wPx - 200) {
            cardScreenX += totalSpan;
          }
          if (cardScreenX > totalSpan - metric.wPx - 200) {
            cardScreenX -= totalSpan;
          }
          if (cardScreenX > ww + 200 && cardScreenX - totalSpan >= -metric.wPx - 200) {
            cardScreenX -= totalSpan;
          }

          // Offscreen culling check
          if (cardScreenX < -metric.wPx - 150 || cardScreenX > ww + 150) {
            mesh.visible = false;
            return;
          }

          mesh.visible = true;

          // Convert screen pixels to Three.js world coordinates
          const scaleX = metric.wPx * pxToWorld;
          const scaleY = metric.hPx * pxToWorld;
          const worldX = (cardScreenX + metric.wPx * 0.5 - ww * 0.5) * pxToWorld;
          const worldY = 0; // Centered vertically, matching top-1/2 -translate-y-1/2

          mesh.scale.set(scaleX, scaleY, 1);
          mesh.position.set(worldX, worldY, 0);

          // Update textures if loaded
          const pair = textureCache.get(slug);
          const u = (mesh.material as THREE.ShaderMaterial).uniforms;
          if (pair?.isLoaded) {
            if (u.u_texture.value !== pair.normal) {
              u.u_texture.value = pair.normal;
            }
            if (u.u_hoverTex.value !== pair.hover) {
              u.u_hoverTex.value = pair.hover;
            }
          }

          // Update shader uniforms
          u.u_res.value.set(scaleX, scaleY);
          u.u_sheetW.value = sheet.W;
          u.u_sheetD.value = sheet.D;
          u.u_sheetT.value = sheet.T;
          u.u_sheetC.value = sheet.C;
          u.u_sheetV.value = smoothVel;
          u.u_leanA.value = sheet.A;
          u.u_leanW.value = sheet.W;

          // Smooth hover dent & highlight lerp
          const isHovered = hoveredSlug === slug;
          const targetHover = isHovered ? 1.0 : 0.0;
          u.u_hover.value += (targetHover - u.u_hover.value) * 0.16;
        });

        if (renderer) {
          renderer.render(scene, camera);
        }
      };

      animate();

      // 10. Raycasting for direct-click on 3D card meshes
      const raycaster = new THREE.Raycaster();
      const mouseVec = new THREE.Vector2();
      let pointerDownX = 0;
      let pointerDownY = 0;

      const handlePointerDown = (e: PointerEvent) => {
        pointerDownX = e.clientX;
        pointerDownY = e.clientY;
      };

      const handleCanvasClick = (e: MouseEvent) => {
        const dx = Math.abs(e.clientX - pointerDownX);
        const dy = Math.abs(e.clientY - pointerDownY);
        if (dx > 12 || dy > 12) return; // Drag occurred, cancel click

        mouseVec.x = (e.clientX / window.innerWidth) * 2 - 1;
        mouseVec.y = -(e.clientY / window.innerHeight) * 2 + 1;

        raycaster.setFromCamera(mouseVec, camera);
        const visibleMeshes = cardMeshes
          .filter((c) => c.mesh.visible)
          .map((c) => c.mesh);
        const intersects = raycaster.intersectObjects(visibleMeshes);

        if (intersects.length > 0) {
          const hitMesh = intersects[0].object;
          const found = cardMeshes.find((c) => c.mesh === hitMesh);
          if (found) {
            const project = repeatedProjects[found.metricIndex];
            if (project) {
              onCardClick(project);
            }
          }
        }
      };

      const canvasEl = renderer.domElement;
      canvasEl.style.pointerEvents = "auto";
      canvasEl.addEventListener("pointerdown", handlePointerDown);
      canvasEl.addEventListener("click", handleCanvasClick);

      // 11. Handle Resize
      const handleResize = () => {
        if (!renderer) return;
        const w = window.innerWidth;
        const h = window.innerHeight;
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
        updateMetrics();
      };

      window.addEventListener("resize", handleResize);

      return () => {
        cancelAnimationFrame(animationFrameId);
        window.removeEventListener("resize", handleResize);
        canvasEl.removeEventListener("pointerdown", handlePointerDown);
        canvasEl.removeEventListener("click", handleCanvasClick);
        if (
          containerRef.current &&
          renderer?.domElement &&
          renderer.domElement.parentNode === containerRef.current
        ) {
          containerRef.current.removeChild(renderer.domElement);
        }
        renderer?.dispose();
      };
    } catch (e) {
      console.error("ThreeCanvas error:", e);
    }
  }, [repeatedProjects, hoveredSlug, velocityRef, scrollCurrentRef, onCardClick, onCardMetricsReady]);

  return <div ref={containerRef} className={className ?? styles.glCanvasContainer} />;
}
