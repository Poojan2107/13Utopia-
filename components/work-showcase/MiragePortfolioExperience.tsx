"use client";

import React, {
  forwardRef,
  useState,
  useEffect,
  useRef,
  useCallback,
  useImperativeHandle,
} from "react";
import * as THREE from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";
import { OutputPass } from "three/examples/jsm/postprocessing/OutputPass.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { getVerseHandoff } from "@/components/plus-ex/utopiaVerseHandoff";
import {
  SAND_VERTEX_SHADER,
  SAND_FRAGMENT_SHADER,
  getLightDirs,
} from "./mirageShaders";
import styles from "./MiragePortfolio.module.css";

export interface PortfolioProject {
  id: string;
  title: string;
  video: string;
  image: string;
  link?: string;
}

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: "difc",
    title: "DIFC – 4th edition",
    video: "/sites/studiomirage/videos/difc.mp4",
    image: "/sites/studiomirage/images/difc.jpg",
    link: "https://studiomirage.io/works/difc",
  },
  {
    id: "margiela",
    title: "Maison Margiela",
    video: "/sites/studiomirage/videos/margiela.mp4",
    image: "/sites/studiomirage/images/margiela.png",
    link: "https://studiomirage.io/works/margiela",
  },
  {
    id: "renault-trucks",
    title: "Renault Trucks",
    video: "/sites/studiomirage/videos/renault-trucks.mp4",
    image: "/sites/studiomirage/images/renault.jpg",
    link: "https://studiomirage.io/works/renault-trucks",
  },
  {
    id: "omnicell-explorer",
    title: "Omnicell Explorer",
    video: "/sites/studiomirage/videos/omnicell-explorer.mp4",
    image: "/sites/studiomirage/images/omnicell.jpg",
    link: "https://studiomirage.io/works/omnicell-explorer",
  },
  {
    id: "ubisoft",
    title: "Ubisoft – AC 15",
    video: "/sites/studiomirage/videos/ubisoft.mp4",
    image: "/sites/studiomirage/images/ubisoft.png",
    link: "https://studiomirage.io/works/ubisoft",
  },
  {
    id: "tasmim",
    title: "Tasmim",
    video: "/sites/studiomirage/videos/tasmim.mp4",
    image: "/sites/studiomirage/images/tasmim.png",
    link: "https://studiomirage.io/works/tasmim",
  },
  {
    id: "sopra-banking",
    title: "Sopra Banking Software",
    video: "/sites/studiomirage/videos/sopra-banking.mp4",
    image: "/sites/studiomirage/images/sopra.png",
    link: "https://studiomirage.io/works/sopra-banking",
  },
  {
    id: "caisse-des-depots",
    title: "Caisse des Dépôts",
    video: "/sites/studiomirage/videos/caisse-des-depots.mp4",
    image: "/sites/studiomirage/images/caisse.jpg",
    link: "https://studiomirage.io/works/caisse-des-depots",
  },
  {
    id: "jinns",
    title: "Jinns",
    video: "/sites/studiomirage/videos/jinns.mp4",
    image: "/sites/studiomirage/images/jinns.png",
    link: "https://studiomirage.io/works/jinns",
  },
  {
    id: "biotherm",
    title: "Biotherm",
    video: "/sites/studiomirage/videos/biotherm.mp4",
    image: "/sites/studiomirage/images/ubisoft.png",
    link: "https://studiomirage.io/works/biotherm",
  },
];

const NUM_SCREENS = PORTFOLIO_PROJECTS.length;
const ANGLE_STEP = (Math.PI * 2) / NUM_SCREENS;

function clamp01(t: number): number {
  return Math.max(0, Math.min(1, t));
}

function smootherstep(edge0: number, edge1: number, x: number): number {
  const t = clamp01((x - edge0) / Math.max(1e-6, edge1 - edge0));
  return t * t * t * (t * (t * 6 - 15) + 10);
}

export type MiragePortfolioExperienceProps = {
  /**
   * Homepage river mode: relative stage, no Mirage header.
   * Scroll is owned by the parent pin — do not hijack wheel.
   */
  embedded?: boolean;
};

export type MiragePortfolioHandle = {
  /** 0–1 pin progress from HomeSectionMirageWork ScrollTrigger */
  setRiverProgress: (progress: number) => void;
  /** 0–1 as the stage first enters the viewport (pre-pin arrival) */
  setApproachProgress: (progress: number) => void;
};

export const MiragePortfolioExperience = forwardRef<
  MiragePortfolioHandle,
  MiragePortfolioExperienceProps
>(function MiragePortfolioExperience({ embedded = false }, ref) {
  const rootRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const embeddedRef = useRef(embedded);
  embeddedRef.current = embedded;

  // Homepage starts in UTOPIANVERSE hero; /work defaults to hero too
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [isHomeMode, setIsHomeMode] = useState(true);

  const heroOverlayRef = useRef<HTMLDivElement>(null);
  const carouselOverlayRef = useRef<HTMLDivElement>(null);
  const titleStageRef = useRef<HTMLDivElement>(null);
  const titleARef = useRef<HTMLHeadingElement>(null);
  const titleBRef = useRef<HTMLHeadingElement>(null);
  const titleFrontIsA = useRef(true);
  const lastTitleRef = useRef(PORTFOLIO_PROJECTS[0].title);
  const lastTitleIndexRef = useRef(0);

  const stateRef = useRef({
    isHomeMode: true,
    /** Current normalized pin progress 0-1 */
    riverProgress: 0,
    /** 1 = orbital UTOPIANVERSE hero, 0 = sand carousel (scroll-scrubbed on homepage) */
    riverHeroBlend: 1,
    /** Soft exit dissolve into the next homepage chapter */
    riverExitFade: 0,
    /** 0–1 pre-pin arrival (scale / lift into view) */
    riverApproach: 0,
    /** Extra yaw twist during the circle→sand dive */
    riverDiveTwist: 0,
    /** Camera FOV punch during dive */
    riverFov: 15,
    /** 0–1 project title visible only when card is snap-locked */
    riverTitleLock: 0,
    /** 0–1 impact birth out of the black cut */
    riverImpact: 0,
    /** 0-1 fade-in animation progress when landing on Utopianverse sequence */
    introTextFade: 0,
    activeSlideIndex: 0,
    targetRotationY: 0,
    currentRotationY: 0,
    mouseX: 0,
    mouseY: 0,
    targetMouseX: 0,
    targetMouseY: 0,
    isDragging: false,
    dragLastX: 0,
    dragDeltaX: 0,
    lastWheelAt: 0,
    wheelAccum: 0,
    /** True while a programmatic card step is in flight — blocks stacked steps */
    stepLocked: false,
    /** Latch: dive→showcase handoff already normalized rotation */
    diveHandoffDone: false,
  });

  const applyApproachProgress = useCallback((progress: number) => {
    if (!embeddedRef.current) return;
    stateRef.current.riverApproach = clamp01(progress);
  }, []);

  const applyRiverProgress = useCallback((progress: number) => {
    if (!embeddedRef.current) return;
    const p = clamp01(progress);
    const s = stateRef.current;
    s.riverProgress = p;

    // Unified pin sequence:
    // 0.00–0.22  Hero stage & dissolve to pure starfield (Mirage is idle/hidden)
    // 0.22–0.38  UTOPIANVERSE text blooms in pure starfield (carousel faint/hidden)
    // 0.38–0.48  Carousel rotunda emerges behind UTOPIANVERSE in overhead perspective
    // 0.48–0.56  Camera swoops to eye level; UTOPIANVERSE dissolves up; Card 0 active
    // 0.56–0.92  Smooth continuous card showcase (cards 0 to 9)
    // 0.92–1.00  Soft exit release into next homepage section
    let heroBlend = 1;
    let floatIndex = 0;
    let diveTwist = 0;
    let fov = 15.0;
    let titleLock = 0;

    if (p < 0.46) {
      heroBlend = 1;
      floatIndex = 0;
      diveTwist = 0;
      fov = 15.0;
    } else if (p < 0.56) {
      const expandT = smootherstep(0.46, 0.56, p);
      heroBlend = 1 - expandT;
      floatIndex = 0;
      diveTwist = 0;
      fov = 15.0;
    } else if (p <= 0.92) {
      heroBlend = 0;
      const scrub = (p - 0.56) / (0.92 - 0.56);
      floatIndex = scrub * (NUM_SCREENS - 1);
      diveTwist = 0;
      fov = 15.0;
    } else {
      heroBlend = 0;
      floatIndex = NUM_SCREENS - 1;
      diveTwist = 0;
      fov = 15.0;
    }

    // titleLock: active only during eye-level card showcase (p: 0.55 -> 0.92)
    titleLock = smootherstep(0.55, 0.60, p) * (1 - smootherstep(0.91, 0.96, p));

    const idx = Math.max(0, Math.min(NUM_SCREENS - 1, Math.round(floatIndex)));
    const inHero = heroBlend > 0.55;

    s.riverHeroBlend = heroBlend;
    s.riverExitFade = smootherstep(0.92, 1.0, p);
    s.riverDiveTwist = diveTwist;
    s.riverFov = fov;
    s.riverImpact = 1;
    s.riverTitleLock = titleLock;
    s.isHomeMode = inHero;

    s.targetRotationY = floatIndex * ANGLE_STEP;
    s.activeSlideIndex = idx;

    setIsHomeMode((prev) => (prev === inHero ? prev : inHero));
    setActiveSlideIndex((prev) => (prev === idx ? prev : idx));
  }, []);

  useImperativeHandle(
    ref,
    () => ({
      setRiverProgress: applyRiverProgress,
      setApproachProgress: applyApproachProgress,
    }),
    [applyRiverProgress, applyApproachProgress]
  );

  const currentProject = PORTFOLIO_PROJECTS[activeSlideIndex];
  const prevProject =
    PORTFOLIO_PROJECTS[(activeSlideIndex - 1 + NUM_SCREENS) % NUM_SCREENS];
  const nextProject =
    PORTFOLIO_PROJECTS[(activeSlideIndex + 1) % NUM_SCREENS];

  // Smooth project-title handoff (slide + blur) — not a hard text swap
  useEffect(() => {
    const nextTitle = currentProject.title;
    if (nextTitle === lastTitleRef.current) return;

    const front = titleFrontIsA.current ? titleARef.current : titleBRef.current;
    const back = titleFrontIsA.current ? titleBRef.current : titleARef.current;
    if (!front || !back) {
      lastTitleRef.current = nextTitle;
      return;
    }

    const prevIdx = lastTitleIndexRef.current;
    let dir = activeSlideIndex >= prevIdx ? 1 : -1;
    // Wrap around the ring
    if (prevIdx === NUM_SCREENS - 1 && activeSlideIndex === 0) dir = 1;
    if (prevIdx === 0 && activeSlideIndex === NUM_SCREENS - 1) dir = -1;

    back.textContent = nextTitle;
    back.style.transition = "none";
    back.style.opacity = "0";
    back.style.filter = "blur(10px)";
    back.style.transform = `translate(-50%, calc(-50% + ${dir * 36}px)) scale(0.96)`;

    // Force layout before transitioning in
    void back.offsetWidth;

    const ease = "cubic-bezier(0.16, 1, 0.3, 1)";
    const dur = embeddedRef.current ? "0.36s" : "0.55s";
    front.style.transition = `opacity ${dur} ${ease}, transform ${dur} ${ease}, filter ${dur} ${ease}`;
    back.style.transition = `opacity ${dur} ${ease}, transform ${dur} ${ease}, filter ${dur} ${ease}`;

    front.style.opacity = "0";
    front.style.filter = "blur(8px)";
    front.style.transform = `translate(-50%, calc(-50% - ${dir * 28}px)) scale(0.98)`;

    back.style.opacity = "1";
    back.style.filter = "blur(0px)";
    back.style.transform = "translate(-50%, -50%) scale(1)";

    titleFrontIsA.current = !titleFrontIsA.current;
    lastTitleRef.current = nextTitle;
    lastTitleIndexRef.current = activeSlideIndex;
  }, [currentProject.title, activeSlideIndex]);

  const handleEnterCarousel = useCallback(() => {
    stateRef.current.isHomeMode = false;
    setIsHomeMode(false);
  }, []);

  const handleEnterHero = useCallback(() => {
    stateRef.current.isHomeMode = true;
    setIsHomeMode(true);
  }, []);

  const requestCardStep = useCallback((index: number) => {
    const i = Math.max(0, Math.min(NUM_SCREENS - 1, index));
    const s = stateRef.current;
    if (embeddedRef.current && s.stepLocked) return;
    if (i === s.activeSlideIndex && embeddedRef.current) return;

    s.activeSlideIndex = i;
    s.targetRotationY = i * ANGLE_STEP;
    setActiveSlideIndex(i);
    if (embeddedRef.current) {
      s.stepLocked = true;
      window.dispatchEvent(
        new CustomEvent("mirage-card-step", { detail: { index: i } })
      );
    }
  }, []);

  const handlePrevSlide = useCallback(() => {
    const cur = stateRef.current.activeSlideIndex;
    if (embeddedRef.current) {
      if (cur <= 0 || stateRef.current.stepLocked) return;
      requestCardStep(cur - 1);
      return;
    }
    const nextIdx = (cur - 1 + NUM_SCREENS) % NUM_SCREENS;
    requestCardStep(nextIdx);
  }, [requestCardStep]);

  const handleNextSlide = useCallback(() => {
    const cur = stateRef.current.activeSlideIndex;
    if (embeddedRef.current) {
      if (cur >= NUM_SCREENS - 1 || stateRef.current.stepLocked) return;
      requestCardStep(cur + 1);
      return;
    }
    const nextIdx = (cur + 1) % NUM_SCREENS;
    requestCardStep(nextIdx);
  }, [requestCardStep]);

  // Homepage unlocks step gate when scroll animation finishes
  useEffect(() => {
    if (!embedded) return;
    const onDone = () => {
      stateRef.current.stepLocked = false;
      stateRef.current.wheelAccum = 0;
    };
    window.addEventListener("mirage-card-step-done", onDone);
    return () => window.removeEventListener("mirage-card-step-done", onDone);
  }, [embedded]);

  const handlersRef = useRef({
    enterCarousel: handleEnterCarousel,
    enterHero: handleEnterHero,
    prev: handlePrevSlide,
    next: handleNextSlide,
  });
  useEffect(() => {
    handlersRef.current = {
      enterCarousel: handleEnterCarousel,
      enterHero: handleEnterHero,
      prev: handlePrevSlide,
      next: handleNextSlide,
    };
  }, [handleEnterCarousel, handleEnterHero, handlePrevSlide, handleNextSlide]);

  // Keyboard — /work full control; homepage only while showcase is locked in
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const h = handlersRef.current;
      if (embedded) {
        if (stateRef.current.riverHeroBlend > 0.05) return;
        if (stateRef.current.riverExitFade > 0.2) return;
        if (e.key === "ArrowRight" || e.key === "d" || e.key === "D" || e.key === "ArrowDown") {
          e.preventDefault();
          h.next();
        } else if (e.key === "ArrowLeft" || e.key === "a" || e.key === "A" || e.key === "ArrowUp") {
          e.preventDefault();
          h.prev();
        }
        return;
      }
      if (e.key === "ArrowRight" || e.key === "d" || e.key === "D") {
        if (stateRef.current.isHomeMode) h.enterCarousel();
        else h.next();
      } else if (e.key === "ArrowLeft" || e.key === "a" || e.key === "A") {
        if (!stateRef.current.isHomeMode) h.prev();
      } else if (e.key === "ArrowDown" || e.key === " " || e.key === "Enter") {
        if (stateRef.current.isHomeMode) h.enterCarousel();
        else h.next();
      } else if (e.key === "ArrowUp" || e.key === "Escape") {
        if (!stateRef.current.isHomeMode) {
          if (stateRef.current.activeSlideIndex === 0 || e.key === "Escape") {
            h.enterHero();
          } else {
            h.prev();
          }
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [embedded]);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    let animId = 0;

    // 1. Scene, Camera, Renderer
    const isEmbedded = embeddedRef.current;
    const scene = new THREE.Scene();
    // Homepage: transparent sky so AmbientField starfield reads through
    scene.background = isEmbedded ? null : new THREE.Color(0x000000);
    // Fog paints opaque black into empty sky — keep it off when embedded
    if (!isEmbedded) {
      scene.fog = new THREE.FogExp2(0x000000, 0.024);
    }

    const camera = new THREE.PerspectiveCamera(15, 1, 0.1, 120);

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: isEmbedded,
      powerPreference: "high-performance",
      premultipliedAlpha: false,
    });
    if (isEmbedded) {
      renderer.setClearColor(0x000000, 0);
      renderer.autoClear = true;
    }
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.05;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));

    // Bloom/composer clears opaque black and kills the starfield — /work only
    let composer: EffectComposer | null = null;
    let bloomPass: UnrealBloomPass | null = null;
    if (!isEmbedded) {
      composer = new EffectComposer(renderer);
      composer.addPass(new RenderPass(scene, camera));
      bloomPass = new UnrealBloomPass(
        new THREE.Vector2(1, 1),
        0.22,
        0.35,
        0.9
      );
      composer.addPass(bloomPass);
      composer.addPass(new OutputPass());
    }

    const syncSize = () => {
      const w = Math.max(1, container.clientWidth);
      const h = Math.max(1, container.clientHeight);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h, false);
      composer?.setSize(w, h);
      bloomPass?.setSize(w, h);
      canvas.style.width = "100%";
      canvas.style.height = "100%";
    };
    syncSize();

    // 3. Ambient & Moonlit Directional Lighting
    scene.add(new THREE.AmbientLight(0xffffff, 0.05));

    const moonLight = new THREE.DirectionalLight(0xdde8f5, 0.35);
    moonLight.position.set(6, 14, 10);
    scene.add(moonLight);

    // 4. Sandfield Dunes with Authentic Studio Mirage Shader
    const textureLoader = new THREE.TextureLoader();
    const groundNormal = textureLoader.load(
      "/sites/studiomirage/images/ground-normal-512.Dl4_wN7d.webp"
    );
    groundNormal.wrapS = THREE.RepeatWrapping;
    groundNormal.wrapT = THREE.RepeatWrapping;

    const whiteTimelineTexture = new THREE.DataTexture(
      new Uint8Array([255, 255, 255, 255]),
      1,
      1,
      THREE.RGBAFormat
    );
    whiteTimelineTexture.needsUpdate = true;

    // Authentic Studio Mirage uniforms extracted from bundle 0.BjG-yHQV.js
    const duneShaderMat = new THREE.ShaderMaterial({
      transparent: isEmbedded,
      depthWrite: true,
      uniforms: {
        normalMap: { value: groundNormal },
        normalMapRepeat: { value: new THREE.Vector2(15, 15) },
        uColorTimeline: { value: whiteTimelineTexture },
        uLightBase: { value: 382 / 1024 }, // 0.37305
        uLightHalfLen: { value: 38 / 1024 }, // 0.0371
        uLightIntensity: { value: 0.4349 }, // Authentic Studio Mirage intensity
        uLightRange: { value: 92 / 1024 }, // 0.0898 - exact reach
        uLightExponent: { value: 5.6385 }, // Fast clean falloff to obsidian black
        uLightAngular: { value: 0.70 },
        uLightFloor: { value: 0.5 / (255 * 12.92) },
        uVideoTimes: { value: new Float32Array(10) },
        uFrameStart: { value: new Float32Array(10) },
        uFrameCount: { value: new Float32Array(10).fill(1) },
        uTotalFrames: { value: 1.0 },
        uUniformMode: { value: 1.0 },
        uUniformFrameStart: { value: 0.0 },
        uUniformFrameCount: { value: 1.0 },
        uUniformTime: { value: 0.0 },
        ulightMapRotation: { value: 0.0 },
        uSaturation: { value: 0.0 },
        uGroundFade: { value: 0.0 },
        uSkyBleed: { value: isEmbedded ? 1.0 : 0.0 },
        uLightDirs: { value: getLightDirs(0, -1) },
        uReliefColorHigh: { value: new THREE.Color(0xfcf3f0) },
        uReliefColorLow: { value: new THREE.Color(0xf7edd2) },
        uReliefTint: { value: 0.85 },
        uTime: { value: 0.0 },
        uGrainScale: { value: 10000.0 },
        uGrainIntensity: { value: 0.60 },
        uGrainGate: { value: 50.0 },
        uSparkleScale: { value: 9000.0 },
        uSparkleIntensity: { value: 3.5 },
        uSparkleSpeed: { value: 1.6 },
      },
      vertexShader: SAND_VERTEX_SHADER,
      fragmentShader: SAND_FRAGMENT_SHADER,
    });

    // Homepage: dense star dome in-scene (opaque sand was hiding AmbientField)
    let starPoints: THREE.Points | null = null;
    if (isEmbedded) {
      const STAR_COUNT = 3200;
      const starPos = new Float32Array(STAR_COUNT * 3);
      for (let i = 0; i < STAR_COUNT; i++) {
        const theta = Math.random() * Math.PI * 2;
        // Full sphere so the open ring center (overhead + eye-level) shows stars
        const phi = Math.acos(2 * Math.random() - 1);
        const r = 22 + Math.random() * 60;
        starPos[i * 3] = Math.sin(phi) * Math.cos(theta) * r;
        starPos[i * 3 + 1] = Math.cos(phi) * r;
        starPos[i * 3 + 2] = Math.sin(phi) * Math.sin(theta) * r;
      }
      const starGeo = new THREE.BufferGeometry();
      starGeo.setAttribute("position", new THREE.BufferAttribute(starPos, 3));
      const starMat = new THREE.PointsMaterial({
        color: 0xffffff,
        size: 0.09,
        sizeAttenuation: true,
        transparent: true,
        opacity: 0.95,
        depthWrite: false,
        depthTest: true,
        blending: THREE.AdditiveBlending,
      });
      starPoints = new THREE.Points(starGeo, starMat);
      starPoints.frustumCulled = false;
      starPoints.renderOrder = -1;
      scene.add(starPoints);
    }

    // Authentic Studio Mirage GLB Dunes Loader with Draco compression
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath("/sites/studiomirage/draco/");
    const gltfLoader = new GLTFLoader();
    gltfLoader.setDRACOLoader(dracoLoader);

    let groundModelMesh: THREE.Mesh | null = null;

    // Fallback procedural dune geometry
    const duneGeo = new THREE.PlaneGeometry(80, 80, 160, 160);
    duneGeo.rotateX(-Math.PI / 2);
    const pos = duneGeo.attributes.position;
    const uvAttr = duneGeo.attributes.uv;
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const z = pos.getZ(i);
      const dist = Math.sqrt(x * x + z * z);

      // Organic desert dunes
      const centralBlend = Math.min(Math.max((dist - 1.8) / 2.0, 0.0), 1.0);
      const swell =
        (Math.sin(x * 0.16 + z * 0.12) * 0.14 +
          Math.cos(x * 0.10 - z * 0.10) * 0.16) *
        centralBlend;

      // Lateral dunes on sides (|x| > 2) to frame the view
      const flankRidge =
        Math.sin(Math.min(Math.abs(x) * 0.28, Math.PI)) *
        0.16 *
        Math.min(Math.abs(x) / 3.0, 1.0);

      // Keep corridor between camera and card clear so video and title are 100% visible
      const corridorHollow =
        Math.exp(-x * x * 0.25) *
        Math.max(0, Math.min((z - 2.0) / 4.0, 1.0)) *
        0.18;

      // Gentle nesting under the active screen base (dist ~ 2.59)
      const ringCradle =
        Math.exp(-Math.pow(dist - 2.59, 2) * 2.0) * 0.05;

      const finalY = swell + flankRidge + ringCradle - corridorHollow - 0.04;
      pos.setY(i, finalY);

      // Authored UV mapping matching Studio Mirage's coordinate system
      uvAttr.setXY(i, 0.5 + x * (0.12695 / 2.59), 0.5 - z * (0.12695 / 2.59));
    }
    uvAttr.needsUpdate = true;
    duneGeo.computeVertexNormals();
    const fallbackGroundMesh = new THREE.Mesh(duneGeo, duneShaderMat);
    if (isEmbedded) {
      fallbackGroundMesh.visible = false;
    }
    scene.add(fallbackGroundMesh);

    // Load authentic Studio Mirage sculpted GLB terrain
    gltfLoader.load(
      "/sites/studiomirage/models/Mirage_scene_03.glb",
      (gltf) => {
        let ground: THREE.Mesh | null = null;
        const byName = gltf.scene.getObjectByName("ground");
        if (byName && (byName as THREE.Mesh).isMesh) {
          ground = byName as THREE.Mesh;
        } else {
          gltf.scene.traverse((child) => {
            if (!ground && (child as THREE.Mesh).isMesh) {
              ground = child as THREE.Mesh;
            }
          });
        }
        if (ground) {
          ground.material = duneShaderMat;
          ground.scale.set(1, 1, 1);
          ground.position.set(-0.15, 0, 0);
          ground.rotation.set(0, (Math.PI * 2 / 10) * 0.5, 0);
          scene.remove(fallbackGroundMesh);
          if (isEmbedded) {
            ground.visible = stateRef.current.riverProgress > 0.34;
          }
          scene.add(ground);
          groundModelMesh = ground;
        }
      },
      undefined,
      (err) => {
        console.warn("GLB load note: using procedural dunes:", err);
      }
    );

    // 5. Billboard Screens in Decagon Ring
    const carouselGroup = new THREE.Group();
    if (isEmbedded) {
      carouselGroup.visible = false;
    }
    scene.add(carouselGroup);

    // Authentic Studio Mirage decagon proportions — elegant, balanced framing
    const radius = 2.59;
    const screenW = 1.61;
    const screenH = 0.98;
    const screenD = 0.04;
    const screenBoxGeo = new THREE.BoxGeometry(screenW, screenH, screenD);
    const frameMat = new THREE.MeshStandardMaterial({
      color: 0x050505,
      roughness: 0.9,
      metalness: 0.1,
      transparent: true,
      opacity: isEmbedded ? 0 : 1,
    });

    const videoElements: HTMLVideoElement[] = [];
    const screenMeshes: THREE.Mesh[] = [];
    const screenMaterials: THREE.MeshBasicMaterial[] = [];

    PORTFOLIO_PROJECTS.forEach((proj, idx) => {
      const imgTex = textureLoader.load(proj.image);
      imgTex.colorSpace = THREE.SRGBColorSpace;

      const video = document.createElement("video");
      video.src = proj.video;
      video.crossOrigin = "anonymous";
      video.loop = true;
      video.muted = true;
      video.playsInline = true;
      video.autoplay = false;
      video.preload = isEmbedded ? "none" : "metadata";



      videoElements.push(video);

      const videoTex = new THREE.VideoTexture(video);
      videoTex.colorSpace = THREE.SRGBColorSpace;
      videoTex.generateMipmaps = false;
      videoTex.minFilter = THREE.LinearFilter;
      videoTex.magFilter = THREE.LinearFilter;

      const screenMat = new THREE.MeshBasicMaterial({
        map: isEmbedded ? imgTex : videoTex,
        transparent: true,
        opacity: isEmbedded ? 0 : 1,
      });
      screenMaterials.push(screenMat);
      video.addEventListener("playing", () => {
        screenMat.map = videoTex;
        screenMat.needsUpdate = true;
      });
      const materials = [
        frameMat,
        frameMat,
        frameMat,
        frameMat,
        screenMat,
        screenMat,
      ];

      const mesh = new THREE.Mesh(screenBoxGeo, materials);
      const angle = -idx * ANGLE_STEP;
      mesh.position.set(
        Math.sin(angle) * radius,
        0.48,
        Math.cos(angle) * radius
      );
      mesh.rotation.y = angle;
      carouselGroup.add(mesh);
      screenMeshes.push(mesh);

      video.addEventListener(
        "error",
        () => {
          screenMat.map = imgTex;
          screenMat.needsUpdate = true;
        },
        { once: true }
      );
    });

    // No inner void disc — starfield reads through the open ring center

    // 6. Camera — hero overhead; carousel pulls back to the proven ring framing
    const heroCamPos = isEmbedded
      ? new THREE.Vector3(0, 18.5, 21.5)
      : new THREE.Vector3(0, 16.5, 25.0);
    const heroLookAt = new THREE.Vector3(0, 0.15, 0);
    // Authentic Studio Mirage eye-level framing: cards sit in balanced desert perspective
    const carouselCamPos = new THREE.Vector3(0, 0.62, 8.25);
    const carouselLookAt = new THREE.Vector3(0, 0.44, 0);
    const diveSwingPos = new THREE.Vector3(4.8, 6.2, 14.5);
    const diveSwingLook = new THREE.Vector3(0.1, 0.35, 0);

    const currentCamPos = heroCamPos.clone();
    const currentLookAt = heroLookAt.clone();
    const parallaxTarget = new THREE.Vector3();
    /** 3D anchor for UTOPIANVERSE — ring center (no void mesh) */
    const wheelCenterWorld = new THREE.Vector3(0, 0.55, 0);
    const wheelCenterNdc = new THREE.Vector3();

    // 7. Interactive Physics & Wheel / Drag Navigation
    const WHEEL_COOLDOWN_MS = 620;
    const WHEEL_STEP_THRESHOLD = 48;

    const handleWheel = (e: WheelEvent) => {
      const now = performance.now();
      const st = stateRef.current;
      const delta =
        Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
      const h = handlersRef.current;

      // Homepage showcase: Lenis & ScrollTrigger naturally drive the river timeline smoothly.
      // Do NOT hijack or preventDefault the wheel!
      if (embeddedRef.current) return;

      if (now - st.lastWheelAt < 380) {
        e.preventDefault();
        return;
      }
      if (Math.abs(delta) < 12) return;

      e.preventDefault();
      st.lastWheelAt = now;

      if (delta > 0) {
        if (st.isHomeMode) h.enterCarousel();
        else h.next();
      } else if (!st.isHomeMode) {
        if (st.activeSlideIndex === 0) h.enterHero();
        else h.prev();
      }
    };

    const pointerRoot = isEmbedded ? container : window;

    const handleMouseDown = (e: MouseEvent) => {
      if (embeddedRef.current) return;
      if ((e.target as HTMLElement)?.closest("button, a")) return;
      stateRef.current.isDragging = true;
      stateRef.current.dragLastX = e.clientX;
      stateRef.current.dragDeltaX = 0;
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (embeddedRef.current) {
        const rect = container.getBoundingClientRect();
        const w = Math.max(1, rect.width);
        const h = Math.max(1, rect.height);
        stateRef.current.targetMouseX =
          ((e.clientX - rect.left) / w - 0.5) * 2;
        stateRef.current.targetMouseY =
          ((e.clientY - rect.top) / h - 0.5) * 2;
        return;
      }

      stateRef.current.targetMouseX =
        (e.clientX / window.innerWidth - 0.5) * 2;
      stateRef.current.targetMouseY =
        (e.clientY / window.innerHeight - 0.5) * 2;

      if (!stateRef.current.isDragging) return;

      const dx = e.clientX - stateRef.current.dragLastX;
      stateRef.current.dragDeltaX += dx;
      stateRef.current.dragLastX = e.clientX;

      if (!stateRef.current.isHomeMode) {
        stateRef.current.targetRotationY -=
          (dx / Math.max(window.innerWidth, 1)) * Math.PI * 1.5;
      }
    };

    const handleMouseUp = () => {
      if (embeddedRef.current) return;
      if (!stateRef.current.isDragging) return;
      stateRef.current.isDragging = false;

      if (stateRef.current.isHomeMode) {
        if (Math.abs(stateRef.current.dragDeltaX) > 55) {
          handlersRef.current.enterCarousel();
        }
        return;
      }

      const snapIndex = Math.round(
        stateRef.current.targetRotationY / ANGLE_STEP
      );
      const normalizedIndex =
        ((snapIndex % NUM_SCREENS) + NUM_SCREENS) % NUM_SCREENS;
      stateRef.current.targetRotationY = snapIndex * ANGLE_STEP;
      stateRef.current.activeSlideIndex = normalizedIndex;
      setActiveSlideIndex(normalizedIndex);
    };

    let touchStartX = 0;
    let touchStartY = 0;
    let touchLastX = 0;

    const handleTouchStart = (e: TouchEvent) => {
      if (embeddedRef.current) return;
      if (!e.touches[0]) return;
      stateRef.current.isDragging = true;
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
      touchLastX = e.touches[0].clientX;
      stateRef.current.dragDeltaX = 0;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (embeddedRef.current) return;
      if (!e.touches[0] || !stateRef.current.isDragging) return;
      const curX = e.touches[0].clientX;
      const curY = e.touches[0].clientY;
      const dx = curX - touchLastX;
      const totalDy = curY - touchStartY;
      touchLastX = curX;
      stateRef.current.dragDeltaX += dx;

      if (stateRef.current.isHomeMode) {
        if (totalDy < -45 || Math.abs(dx) > 50) {
          handlersRef.current.enterCarousel();
          stateRef.current.isDragging = false;
        }
      } else {
        stateRef.current.targetRotationY -=
          (dx / Math.max(window.innerWidth, 1)) * Math.PI * 1.5;
      }
    };

    const handleTouchEnd = () => {
      if (embeddedRef.current) return;
      if (!stateRef.current.isDragging) return;
      stateRef.current.isDragging = false;
      if (stateRef.current.isHomeMode) return;

      const snapIndex = Math.round(
        stateRef.current.targetRotationY / ANGLE_STEP
      );
      const normalizedIndex =
        ((snapIndex % NUM_SCREENS) + NUM_SCREENS) % NUM_SCREENS;
      stateRef.current.targetRotationY = snapIndex * ANGLE_STEP;
      stateRef.current.activeSlideIndex = normalizedIndex;
      setActiveSlideIndex(normalizedIndex);
    };

    const domEl = renderer.domElement;
    if (!isEmbedded) {
      domEl.addEventListener("wheel", handleWheel as EventListener, {
        passive: false,
      });
      pointerRoot.addEventListener("mousedown", handleMouseDown as EventListener);
      window.addEventListener("mouseup", handleMouseUp as EventListener);
      pointerRoot.addEventListener("touchstart", handleTouchStart as EventListener, {
        passive: true,
      });
      pointerRoot.addEventListener("touchmove", handleTouchMove as EventListener, {
        passive: true,
      });
      window.addEventListener("touchend", handleTouchEnd as EventListener, { passive: true });
    }
    pointerRoot.addEventListener("mousemove", handleMouseMove as EventListener);

    // 8. Render Loop
    const camBlendPos = new THREE.Vector3();
    const camBlendLook = new THREE.Vector3();
    const birthHeroPos = new THREE.Vector3();
    const birthHeroLook = new THREE.Vector3();

    let lastActiveVideoIdx = -1;
    const syncVideos = (activeIdx: number, inCarousel: boolean) => {
      if (!isEmbedded) {
        for (let i = 0; i < videoElements.length; i++) {
          const v = videoElements[i];
          if (i === activeIdx) {
            if (v.paused) v.play().catch(() => {});
          } else {
            if (!v.paused) v.pause();
          }
        }
        return;
      }

      if (!inCarousel) {
        if (lastActiveVideoIdx !== -1) {
          for (let i = 0; i < videoElements.length; i++) {
            if (!videoElements[i].paused) videoElements[i].pause();
          }
          lastActiveVideoIdx = -1;
        }
        return;
      }

      if (lastActiveVideoIdx !== activeIdx) {
        lastActiveVideoIdx = activeIdx;
        for (let i = 0; i < videoElements.length; i++) {
          const v = videoElements[i];
          if (i === activeIdx) {
            if (v.preload === "none" || v.preload === "metadata") {
              v.preload = "auto";
            }
            if (v.paused) v.play().catch(() => {});
          } else {
            if (!v.paused) v.pause();
          }
        }
      }
    };

    const animate = () => {
      animId = requestAnimationFrame(animate);

      const st = stateRef.current;
      const river = embeddedRef.current;

      if (river && (st.riverProgress < 0.18 || st.riverProgress > 0.99)) {
        syncVideos(st.activeSlideIndex, false);
        return;
      }

      const inCarousel = river
        ? st.riverProgress >= 0.28 && st.riverProgress <= 0.96
        : true;
      syncVideos(st.activeSlideIndex, inCarousel);
      const heroBlend = river
        ? st.riverHeroBlend
        : st.isHomeMode
          ? 1
          : 0;
      const diveT = 1 - heroBlend;
      // Sync approach from dive cut (shared float) without CustomEvents
      if (river) {
        const handoff = getVerseHandoff();
        if (handoff > st.riverApproach) st.riverApproach = handoff;
      }
      const approach = river ? st.riverApproach : 1;
      const impact = river ? st.riverImpact : 1;

      // Smooth mouse parallax damping
      st.mouseX += (st.targetMouseX - st.mouseX) * 0.06;
      st.mouseY += (st.targetMouseY - st.mouseY) * 0.06;

      // Impact ease — fast arrival, soft settle (no CSS blur)
      const slam = river ? impact * impact * (3 - 2 * impact) : 1;

      if (logoRef.current) {
        if (river) {
          const pinP = st.riverProgress;
          // 1. Text UTOPIANVERSE: blooms in deep starfield (p: 0.22 -> 0.30), holds, then dissolves as carousel expands (p: 0.46 -> 0.54)
          const heroShow = smootherstep(0.22, 0.30, pinP) * (1 - smootherstep(0.46, 0.54, pinP));
          const tracking = 0.14 + smootherstep(0.22, 0.32, pinP) * 0.06 - (1 - heroBlend) * 0.06;
          const scale = 0.94 + smootherstep(0.22, 0.32, pinP) * 0.06 + (1 - heroBlend) * 0.06;
          const yShift = (1 - heroBlend) * -45; // smoothly glides up as carousel expands

          logoRef.current.style.left = "50%";
          logoRef.current.style.top = "50%";
          logoRef.current.style.letterSpacing = `${tracking.toFixed(3)}em`;
          logoRef.current.style.transform = `translate(-50%, calc(-50% + ${yShift.toFixed(1)}px)) scale(${scale.toFixed(4)})`;
          logoRef.current.style.opacity = String(heroShow);
          logoRef.current.style.visibility = heroShow > 0.005 ? "visible" : "hidden";
        } else {
          const diveScale = 1 + diveT * 0.28;
          const px = st.mouseX * 10;
          const py = st.mouseY * 10;
          logoRef.current.style.transform = `translate(calc(-50% + ${px}px), calc(-50% + ${py}px)) scale(${diveScale})`;
          const heroShow = 1 - smootherstep(0.78, 0.97, diveT);
          logoRef.current.style.opacity = String(heroShow);
        }
      }

      if (heroOverlayRef.current) {
        if (river) {
          const pinP = st.riverProgress;
          const heroShow = smootherstep(0.22, 0.30, pinP) * (1 - smootherstep(0.46, 0.54, pinP));
          heroOverlayRef.current.style.opacity = heroShow > 0.005 ? "1" : "0";
          heroOverlayRef.current.style.pointerEvents =
            heroShow > 0.45 ? "auto" : "none";
        } else {
          const heroShow = 1 - smootherstep(0.78, 0.97, diveT);
          heroOverlayRef.current.style.opacity = String(heroShow);
          heroOverlayRef.current.style.pointerEvents =
            heroShow > 0.45 ? "auto" : "none";
        }
      }

      // 2. Carousel subtly appearing like a cinematic scroll-based event
      // At p < 0.34: dunes and screens are hidden (stars only)
      // At p: 0.34 -> 0.48: carousel subtly emerges behind UTOPIANVERSE into full 3D presence
      const carouselReveal = river ? smootherstep(0.34, 0.48, st.riverProgress) : 1;
      const showCarousel = !river || carouselReveal > 0.001;
      carouselGroup.visible = showCarousel;
      if (groundModelMesh) groundModelMesh.visible = showCarousel;
      if (fallbackGroundMesh) fallbackGroundMesh.visible = showCarousel;
      frameMat.opacity = river ? carouselReveal : 1;
      for (let i = 0; i < screenMaterials.length; i++) {
        screenMaterials[i].opacity = river ? carouselReveal : 1;
      }

      if (carouselOverlayRef.current) {
        // Bottom nav buttons only appear when carousel is at eye level (p >= 0.54)
        const show = river
          ? smootherstep(0.54, 0.60, st.riverProgress) * (1 - st.riverExitFade * 0.7)
          : smootherstep(0.9, 1, diveT);
        carouselOverlayRef.current.style.opacity = String(show);
        carouselOverlayRef.current.style.pointerEvents =
          show > 0.5 ? "auto" : "none";
      }

      const titleLock = river ? st.riverTitleLock : diveT > 0.9 ? 1 : 0;
      if (titleStageRef.current) {
        titleStageRef.current.style.left = "50%";
        titleStageRef.current.style.top = "50%";
        titleStageRef.current.style.opacity = String(titleLock);
      }
      if (river && rootRef.current) {
        // Continuous, weightless opacity — never CSS blur
        const mirageFadeIn = smootherstep(0.18, 0.26, st.riverProgress);
        const exitOp = (1 - st.riverExitFade * 0.35) * mirageFadeIn;
        rootRef.current.style.visibility = exitOp > 0.001 ? "visible" : "hidden";
        rootRef.current.style.opacity = String(exitOp);
        rootRef.current.style.filter = "none";
        rootRef.current.style.transform = "translate3d(0, 0, 0)";
        rootRef.current.style.pointerEvents = st.riverProgress > 0.22 ? "auto" : "none";
      }

      // Direct lerp — snappy, responsive, and buttery without lagging behind wheel
      const rotLerp = river ? (diveT > 0.98 ? 0.22 : 0.26) : 0.08;
      st.currentRotationY +=
        (st.targetRotationY - st.currentRotationY) * rotLerp;
      if (Math.abs(st.targetRotationY - st.currentRotationY) < 0.0015) {
        st.currentRotationY = st.targetRotationY;
      }
      carouselGroup.rotation.y = st.currentRotationY;
      carouselGroup.rotation.x = 0;

      // Keep screens at uniform scale (no viewport warp)
      for (let i = 0; i < screenMeshes.length; i++) {
        const m = screenMeshes[i];
        if (m.scale.x !== 1) m.scale.setScalar(1);
      }

      // Synchronize shader light footprints with carousel rotation
      duneShaderMat.uniforms.ulightMapRotation.value = st.currentRotationY;
      duneShaderMat.uniforms.uTime.value += 0.016;

      if (river) {
        const t = diveT;
        const u = 1 - t;
        camBlendPos.set(0, 0, 0);
        camBlendPos.addScaledVector(heroCamPos, u * u);
        camBlendPos.addScaledVector(diveSwingPos, 2 * u * t);
        camBlendPos.addScaledVector(carouselCamPos, t * t);

        camBlendLook.set(0, 0, 0);
        camBlendLook.addScaledVector(heroLookAt, u * u);
        camBlendLook.addScaledVector(diveSwingLook, 2 * u * t);
        camBlendLook.addScaledVector(carouselLookAt, t * t);

        const swingFade = 1 - smootherstep(0.85, 1, diveT);
        const swing =
          Math.sin(st.riverDiveTwist * 0.55) *
          (0.35 + diveT * 2.8) *
          swingFade;
        camBlendPos.x += swing;
        camBlendPos.z +=
          (Math.cos(st.riverDiveTwist * 0.4) * diveT * 1.2 - diveT * 1.2) *
          swingFade;
      } else {
        camBlendPos.lerpVectors(carouselCamPos, heroCamPos, heroBlend);
        camBlendLook.lerpVectors(carouselLookAt, heroLookAt, heroBlend);
      }

      const parallaxAmt = river
        ? 0.1 + heroBlend * 0.25
        : 0.18 + heroBlend * 0.47;
      parallaxTarget.set(
        camBlendPos.x + st.mouseX * parallaxAmt,
        camBlendPos.y + st.mouseY * (0.08 + heroBlend * 0.2),
        camBlendPos.z
      );

      const camLerp = river ? 0.26 : 0.06;
      currentCamPos.lerp(parallaxTarget, camLerp);
      currentLookAt.lerp(camBlendLook, camLerp);

      camera.position.copy(currentCamPos);
      camera.lookAt(currentLookAt);

      if (river) {
        const targetFov = st.riverFov;
        camera.fov += (targetFov - camera.fov) * 0.20;
        camera.updateProjectionMatrix();
      }

      // Authentic light intensity — hotter underglow as we enter the sand
      const targetIntensity =
        (0.42 + diveT * 0.12 + heroBlend * 0.015) * (river ? carouselReveal : 1);
      duneShaderMat.uniforms.uLightIntensity.value +=
        (targetIntensity - duneShaderMat.uniforms.uLightIntensity.value) * 0.16;

      // Full sky bleed so the open ring center always shows stars
      if (river) {
        duneShaderMat.uniforms.uSkyBleed.value = 0.88 + heroBlend * 0.12;
        if (starPoints) {
          (starPoints.material as THREE.PointsMaterial).opacity =
            carouselReveal * (0.75 + heroBlend * 0.2);
        }
      }

      if (composer && bloomPass) {
        bloomPass.strength +=
          (0.12 + heroBlend * 0.1 - bloomPass.strength) * 0.08;
        composer.render();
      } else {
        // Direct render preserves alpha → sitewide stars show in the sky
        renderer.render(scene, camera);
      }
    };

    animate();

    const handleResize = () => {
      syncSize();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animId);
      if (!isEmbedded) {
        domEl.removeEventListener("wheel", handleWheel as EventListener);
        pointerRoot.removeEventListener("mousedown", handleMouseDown as EventListener);
        window.removeEventListener("mouseup", handleMouseUp as EventListener);
        pointerRoot.removeEventListener("touchstart", handleTouchStart as EventListener);
        pointerRoot.removeEventListener("touchmove", handleTouchMove as EventListener);
        window.removeEventListener("touchend", handleTouchEnd as EventListener);
      }
      pointerRoot.removeEventListener("mousemove", handleMouseMove as EventListener);
      window.removeEventListener("resize", handleResize);

      videoElements.forEach((v) => {
        v.pause();
        v.removeAttribute("src");
        v.load();
      });

      dracoLoader.dispose();
      composer?.dispose();
      renderer.dispose();
      duneGeo.dispose();
      duneShaderMat.dispose();
      screenBoxGeo.dispose();
      frameMat.dispose();
      whiteTimelineTexture.dispose();
      if (starPoints) {
        starPoints.geometry.dispose();
        (starPoints.material as THREE.PointsMaterial).dispose();
        scene.remove(starPoints);
      }
    };
  }, []);

  return (
    <div
      ref={rootRef}
      style={embedded ? { opacity: 0, visibility: "hidden" } : undefined}
      className={`${styles.container}${
        embedded ? ` ${styles.containerEmbedded}` : ""
      }`}
    >
      {/* 3D WebGL Canvas Layer */}
      <div ref={containerRef} className={styles.canvasWrapper}>
        <canvas ref={canvasRef} className={styles.glCanvas} />
      </div>

      {/* Soft vignette — lighter on homepage so stars stay continuous */}
      <div
        className={`${styles.vignetteOverlay}${
          embedded ? ` ${styles.vignetteEmbedded}` : ""
        }`}
      />

      {/* Full /work page only — homepage already has SiteHeader */}
      {!embedded && (
        <header className={styles.header}>
          <button
            id="brand-hero-btn"
            type="button"
            onClick={handleEnterHero}
            className={styles.brandLink}
            aria-label="13 UTOPIA Home"
          >
            <BrandLogo variant="official" priority />
          </button>
        </header>
      )}

      {/* State 1: UTOPIANVERSE hero — dive out via scroll on homepage */}
      <div
        ref={heroOverlayRef}
        className={`${styles.heroOverlay}${
          !embedded && !isHomeMode ? ` ${styles.heroHidden}` : ""
        }${embedded ? ` ${styles.heroEmbedded}` : ""}`}
      >
        <div
          ref={logoRef}
          className={`${styles.heroCenterLockup}${
            embedded ? ` ${styles.heroCenterLockupEmbedded}` : ""
          }`}
        >
          <h1
            className={`${styles.centerLogo}${
              embedded ? ` ${styles.centerLogoEmbedded}` : ""
            }`}
          >
            UTOPIANVERSE
          </h1>
        </div>
        {!embedded && (
          <button
            id="scroll-explore-cta"
            type="button"
            onClick={handleEnterCarousel}
            className={styles.scrollCta}
            aria-label="Scroll to start exploring"
          >
            <span>Scroll to start exploring</span>
            <svg
              className={styles.scrollArrow}
              viewBox="0 0 24 24"
              width="15"
              height="15"
              aria-hidden="true"
            >
              <line
                x1="12"
                y1="5"
                x2="12"
                y2="19"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <polyline
                points="19 12 12 19 5 12"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        )}
      </div>

      {/* State 2: Carousel Mode UI */}
      <div
        ref={carouselOverlayRef}
        className={`${styles.carouselOverlay}${
          !embedded && isHomeMode ? ` ${styles.carouselHidden}` : ""
        }${embedded ? ` ${styles.carouselEmbedded}` : ""}`}
        style={embedded ? { opacity: 0 } : undefined}
      >
        <div
          ref={titleStageRef}
          className={`${styles.titleStage}${
            embedded ? ` ${styles.titleStageEmbedded}` : ""
          }`}
          aria-live="polite"
        >
          <h2
            ref={titleARef}
            className={`${styles.projectTitle} ${styles.projectTitleLayer}`}
          >
            {PORTFOLIO_PROJECTS[0].title}
          </h2>
          <h2
            ref={titleBRef}
            className={`${styles.projectTitle} ${styles.projectTitleLayer}`}
            style={{ opacity: 0 }}
            aria-hidden
          />
        </div>

        <nav
          className={`${styles.bottomNav}${
            embedded ? ` ${styles.bottomNavEmbedded}` : ""
          }`}
        >
          {embedded ? (
            <>
              <button
                type="button"
                className={styles.embedArrowBtn}
                onClick={handlePrevSlide}
                disabled={activeSlideIndex <= 0}
                aria-label={`Previous: ${prevProject.title}`}
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>

              <a href="/work" className={styles.exploreBtnEmbedded}>
                <span>VIEW ALL WORK</span>
                <svg
                  className={styles.exploreIcon}
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </a>

              <button
                type="button"
                className={styles.embedArrowBtn}
                onClick={handleNextSlide}
                disabled={activeSlideIndex >= NUM_SCREENS - 1}
                aria-label={`Next: ${nextProject.title}`}
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </>
          ) : (
            <>
              <button
                id="btn-prev-project"
                type="button"
                className={styles.prevButton}
                onClick={handlePrevSlide}
                aria-label={`Previous: ${prevProject.title}`}
              >
                <div className={styles.navGlow} />
                <span className={styles.navLabel}>PREV</span>
                <span className={styles.navName}>{prevProject.title}</span>
              </button>

              <a
                href={currentProject.link || `/work`}
                className={styles.exploreBtn}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>EXPLORE WORK</span>
                <svg
                  className={styles.exploreIcon}
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </a>

              <button
                id="btn-next-project"
                type="button"
                className={styles.nextButton}
                onClick={handleNextSlide}
                aria-label={`Next: ${nextProject.title}`}
              >
                <div className={styles.navGlow} />
                <span className={styles.navLabel}>NEXT</span>
                <span className={styles.navName}>{nextProject.title}</span>
              </button>
            </>
          )}
        </nav>
      </div>
    </div>
  );
});
