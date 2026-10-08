"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import styles from "@/styles/plus-ex/Plus3DCanvas.module.css";

export interface Plus3DCanvasProps {
  progress?: number;
  entryProgress?: number;
  className?: string;
  theme?: "dark" | "light" | "transparent";
}

/**
 * 3D 13 Utopia Architectural Emblem Canvas
 * Plus-X Exact Materiality & Kinematics:
 * Matte architectural titanium monoliths with razor chamfers, deep studio lighting,
 * and a full continuous scroll-driven rotation story:
 * Act 0: Centered "13"
 * Act 1 (CREATE): Left Column "BE" (360° spin)
 * Act 2 (BUILD): Right Column "13" (360° spin)
 * Act 3 (GROW): Left Column "BE" (360° spin)
 * Finale: Sweeps to Center "13" and dives down into depth behind the portfolio
 */
export function Plus3DCanvas({
  progress = 0,
  entryProgress = 1,
  className,
  theme = "transparent",
}: Plus3DCanvasProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const groupRef = useRef<THREE.Group | null>(null);
  const progressRef = useRef(progress);
  const entryProgressRef = useRef(entryProgress);

  useEffect(() => {
    progressRef.current = progress;
  }, [progress]);

  useEffect(() => {
    entryProgressRef.current = entryProgress;
  }, [entryProgress]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    // Scene
    const scene = new THREE.Scene();
    if (theme === "dark") {
      scene.background = new THREE.Color(0x000000);
    } else if (theme === "light") {
      scene.background = new THREE.Color(0xf4eae0);
    } else {
      scene.background = null;
    }

    // Camera with cinematic perspective centered
    const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 100);
    camera.position.set(0, 0, 11.2);

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
      premultipliedAlpha: true,
    });
    renderer.debug.checkShaderErrors = false;
    // Balanced DPR for smooth 120Hz ProMotion on MacBook and mobile devices
    const isMobile = (container.clientWidth || window.innerWidth) < 768;
    const dpr = Math.min(window.devicePixelRatio || 1, isMobile ? 1.0 : 1.35);
    renderer.setPixelRatio(dpr);
    renderer.setSize(width, height);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.35;
    // Keep stage transparent so fixed steel field shows through
    renderer.setClearColor(0x000000, 0);
    renderer.setClearAlpha(0);
    container.appendChild(renderer.domElement);

    // 3D "13" Emblem Group
    const emblemGroup = new THREE.Group();

    // Helper: Tapered Architectural Monolith for "1"
    const createOneShape = () => {
      const shape = new THREE.Shape();
      const topR = 0.44;
      const botR = 0.68;
      const topY = 2.62;
      const botY = -2.42;

      shape.moveTo(-botR, botY);
      shape.lineTo(-topR, topY);
      shape.absarc(0, topY, topR, Math.PI, 0, true);
      shape.lineTo(botR, botY);
      shape.absarc(0, botY, botR, 0, Math.PI, true);
      shape.closePath();
      return shape;
    };

    // Helper: Continuous Organic Ribbon for "3" (13 Utopia Brand Mark)
    const createThreeShape = () => {
      const shape = new THREE.Shape();

      shape.moveTo(-0.45, 2.82);
      shape.bezierCurveTo(0.30, 3.12, 1.30, 3.08, 1.88, 2.48);
      shape.bezierCurveTo(2.38, 1.95, 2.28, 1.12, 1.72, 0.52);

      // Outer waist transition
      shape.bezierCurveTo(1.32, 0.12, 1.12, 0.02, 1.18, -0.02);

      // Outer lower bowl & bottom crest
      shape.bezierCurveTo(1.38, -0.22, 2.18, -0.68, 2.32, -1.38);
      shape.bezierCurveTo(2.46, -2.18, 1.78, -3.12, 0.62, -3.12);
      shape.bezierCurveTo(-0.18, -3.12, -0.65, -2.82, -0.92, -2.32);

      // Bottom terminal rounded bulb
      shape.bezierCurveTo(-1.18, -1.82, -1.02, -1.32, -0.52, -1.38);

      // Inner lower bowl returning to center waist
      shape.bezierCurveTo(0.18, -1.42, 0.88, -1.68, 1.28, -1.32);
      shape.bezierCurveTo(1.58, -1.02, 1.48, -0.42, 0.98, -0.12);
      shape.bezierCurveTo(0.58, 0.12, 0.22, 0.18, 0.18, 0.08);

      // Inner upper bowl returning to top terminal
      shape.bezierCurveTo(0.12, -0.02, 0.38, 0.58, 0.78, 0.98);
      shape.bezierCurveTo(1.32, 1.48, 1.28, 1.98, 0.88, 2.18);
      shape.bezierCurveTo(0.38, 2.38, -0.12, 2.18, -0.48, 1.88);

      // Top terminal rounded cap closure
      shape.bezierCurveTo(-0.95, 1.92, -0.95, 2.78, -0.45, 2.82);

      shape.closePath();
      return shape;
    };

    // Helper: Mirrored Organic Ribbon for "E" (Exact 1:1 Kinship to "3", Mirrored)
    const createMirroredThreeShape = () => {
      const shape = new THREE.Shape();
      shape.moveTo(0.45, 2.82);
      shape.bezierCurveTo(-0.30, 3.12, -1.30, 3.08, -1.88, 2.48);
      shape.bezierCurveTo(-2.38, 1.95, -2.28, 1.12, -1.72, 0.52);
      shape.bezierCurveTo(-1.32, 0.12, -1.12, 0.02, -1.18, -0.02);
      shape.bezierCurveTo(-1.38, -0.22, -2.18, -0.68, -2.32, -1.38);
      shape.bezierCurveTo(-2.46, -2.18, -1.78, -3.12, -0.62, -3.12);
      shape.bezierCurveTo(0.18, -3.12, 0.65, -2.82, 0.92, -2.32);
      shape.bezierCurveTo(1.18, -1.82, 1.02, -1.32, 0.52, -1.38);
      shape.bezierCurveTo(-0.18, -1.42, -0.88, -1.68, -1.28, -1.32);
      shape.bezierCurveTo(-1.58, -1.02, -1.48, -0.42, -0.98, -0.12);
      shape.bezierCurveTo(-0.58, 0.12, -0.22, 0.18, -0.18, 0.08);
      shape.bezierCurveTo(-0.12, -0.02, -0.38, 0.58, -0.78, 0.98);
      shape.bezierCurveTo(-1.32, 1.48, -1.28, 1.98, -0.88, 2.18);
      shape.bezierCurveTo(-0.38, 2.38, 0.12, 2.18, 0.48, 1.88);
      shape.bezierCurveTo(0.95, 1.92, 0.95, 2.78, 0.45, 2.82);
      shape.closePath();
      return shape;
    };

    const extrudeSettings = {
      steps: 1,
      depth: 0.72,
      bevelEnabled: true,
      bevelThickness: 0.065,
      bevelSize: 0.055,
      bevelOffset: 0,
      bevelSegments: 6,
    };

    // ── 01. PROCEDURAL LIQUID TITANIUM NORMAL MAP (Molten wave ripples on planar faces) ──
    const normalCanvas = document.createElement("canvas");
    normalCanvas.width = 512;
    normalCanvas.height = 512;
    const nCtx = normalCanvas.getContext("2d");
    if (nCtx) {
      const nImgData = nCtx.createImageData(512, 512);
      const nData = nImgData.data;
      const heights = new Float32Array(512 * 512);

      for (let y = 0; y < 512; y++) {
        const ny = (y / 512) * Math.PI * 4.0;
        for (let x = 0; x < 512; x++) {
          const nx = (x / 512) * Math.PI * 4.0;
          const wave1 = Math.sin(nx * 1.3 + Math.sin(ny * 1.5) * 1.6);
          const wave2 = Math.cos(nx * 2.1 - ny * 1.2 + Math.sin(nx * 0.8) * 1.2);
          const wave3 = Math.sin((nx + ny) * 1.4 + Math.sin(nx * 2.2) * 0.7);
          const h = (wave1 * 0.50 + wave2 * 0.35 + wave3 * 0.15) * 0.5 + 0.5;
          heights[y * 512 + x] = h;
        }
      }

      const strength = 1.35;
      for (let y = 0; y < 512; y++) {
        for (let x = 0; x < 512; x++) {
          const xL = (x - 1 + 512) % 512;
          const xR = (x + 1) % 512;
          const yU = (y - 1 + 512) % 512;
          const yD = (y + 1) % 512;

          const dX = (heights[y * 512 + xR] - heights[y * 512 + xL]) * strength;
          const dY = (heights[yD * 512 + x] - heights[yU * 512 + x]) * strength;
          const len = Math.sqrt(dX * dX + dY * dY + 1.0);

          const idx = (y * 512 + x) * 4;
          nData[idx]     = Math.floor(((-dX / len) * 0.5 + 0.5) * 255);
          nData[idx + 1] = Math.floor(((-dY / len) * 0.5 + 0.5) * 255);
          nData[idx + 2] = Math.floor(((1.0 / len) * 0.5 + 0.5) * 255);
          nData[idx + 3] = 255;
        }
      }
      nCtx.putImageData(nImgData, 0, 0);
    }
    const liquidNormalMap = new THREE.CanvasTexture(normalCanvas);
    liquidNormalMap.wrapS = THREE.RepeatWrapping;
    liquidNormalMap.wrapT = THREE.RepeatWrapping;
    liquidNormalMap.repeat.set(1.5, 1.5);

    // ── 02. HIGH-CONTRAST CINEMATIC SILK HDR ENVIRONMENT MAP (92% Black Void + Razor Champagne Filaments) ──
    const envCanvas = document.createElement("canvas");
    envCanvas.width = 1024;
    envCanvas.height = 512;
    const envCtx = envCanvas.getContext("2d");
    if (envCtx) {
      // 1. Inky cosmic void base (No muddy brown washing out the shadows)
      envCtx.fillStyle = "#020304";
      envCtx.fillRect(0, 0, 1024, 512);

      // Subtle warm dark horizon depth
      const deepH = envCtx.createLinearGradient(0, 180, 0, 330);
      deepH.addColorStop(0.0, "rgba(2, 3, 4, 1.0)");
      deepH.addColorStop(0.5, "rgba(22, 16, 10, 0.40)");
      deepH.addColorStop(1.0, "rgba(2, 3, 4, 1.0)");
      envCtx.fillStyle = deepH;
      envCtx.fillRect(0, 180, 1024, 150);

      // 2. Primary Incandescent Champagne Silk Filament (Laser specular streak across upper bevels)
      const streak1 = envCtx.createLinearGradient(0, 120, 1024, 210);
      streak1.addColorStop(0.0, "rgba(0, 0, 0, 0)");
      streak1.addColorStop(0.35, "rgba(235, 175, 95, 0.40)");
      streak1.addColorStop(0.48, "rgba(255, 245, 225, 1.0)"); // Blinding incandescent core
      streak1.addColorStop(0.52, "rgba(255, 245, 225, 1.0)");
      streak1.addColorStop(0.65, "rgba(240, 185, 110, 0.45)");
      streak1.addColorStop(1.0, "rgba(0, 0, 0, 0)");
      envCtx.fillStyle = streak1;
      envCtx.fillRect(0, 135, 1024, 55);

      // 3. Secondary Razor Gold Filament (Lower edge specular catch)
      const streak2 = envCtx.createLinearGradient(0, 275, 1024, 335);
      streak2.addColorStop(0.0, "rgba(0, 0, 0, 0)");
      streak2.addColorStop(0.20, "rgba(215, 150, 75, 0.35)");
      streak2.addColorStop(0.50, "rgba(255, 235, 195, 0.90)");
      streak2.addColorStop(0.80, "rgba(215, 150, 75, 0.35)");
      streak2.addColorStop(1.0, "rgba(0, 0, 0, 0)");
      envCtx.fillStyle = streak2;
      envCtx.fillRect(0, 280, 1024, 45);

      // 4. Focused Champagne Studio Softbox (Upper-right key highlight)
      const rightSoft = envCtx.createRadialGradient(820, 160, 5, 820, 160, 240);
      rightSoft.addColorStop(0.0, "rgba(255, 252, 240, 1.0)");
      rightSoft.addColorStop(0.25, "rgba(255, 225, 170, 0.85)");
      rightSoft.addColorStop(0.60, "rgba(180, 115, 50, 0.25)");
      rightSoft.addColorStop(1.0, "rgba(0, 0, 0, 0)");
      envCtx.fillStyle = rightSoft;
      envCtx.fillRect(0, 0, 1024, 512);

      // 5. Razor Edge Kicker Strip (Left rim glint)
      const leftRim = envCtx.createRadialGradient(200, 310, 5, 200, 310, 200);
      leftRim.addColorStop(0.0, "rgba(255, 240, 205, 0.85)");
      leftRim.addColorStop(0.35, "rgba(220, 160, 85, 0.40)");
      leftRim.addColorStop(1.0, "rgba(0, 0, 0, 0)");
      envCtx.fillStyle = leftRim;
      envCtx.fillRect(0, 0, 1024, 512);
    }
    const envTexture = new THREE.CanvasTexture(envCanvas);
    envTexture.mapping = THREE.EquirectangularReflectionMapping;
    scene.environment = envTexture;

    // ── 03. TWO-TONE ARCHITECTURAL MATERIALITY ────────────────────────────────
    // FRONT & BACK FACES: Inky Obsidian Satin Titanium with Liquid Ripples (High legibility, dark contrast)
    const matFaceOne = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color(0x0a0c10),
      roughness: 0.10,
      metalness: 0.97,
      clearcoat: 1.0,
      clearcoatRoughness: 0.02,
      reflectivity: 1.0,
      ior: 2.7,
      iridescence: 0.30,
      iridescenceIOR: 1.40,
      sheen: 0.55,
      sheenColor: new THREE.Color(0xf0c870),
      sheenRoughness: 0.22,
      emissive: new THREE.Color(0x050304),
      normalMap: liquidNormalMap,
      normalScale: new THREE.Vector2(0.12, 0.12),
      envMapIntensity: 2.2,
      polygonOffset: true,
      polygonOffsetFactor: -1,
      polygonOffsetUnits: -1,
    });

    const matFaceThree = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color(0x080a0e),
      roughness: 0.12,
      metalness: 0.95,
      clearcoat: 1.0,
      clearcoatRoughness: 0.03,
      reflectivity: 1.0,
      ior: 2.6,
      iridescence: 0.22,
      iridescenceIOR: 1.38,
      sheen: 0.45,
      sheenColor: new THREE.Color(0xe2be88),
      sheenRoughness: 0.25,
      emissive: new THREE.Color(0x020203),
      normalMap: liquidNormalMap,
      normalScale: new THREE.Vector2(0.12, 0.12),
      envMapIntensity: 1.9,
      polygonOffset: true,
      polygonOffsetFactor: 1,
      polygonOffsetUnits: 1,
    });

    // BEVEL CHAMFERS & SIDEWALLS: Mirror-Polished Smoked Chrome with Razor Champagne-Gold Flare
    const matSideOne = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color(0x0e1014),
      roughness: 0.03,
      metalness: 0.99,
      clearcoat: 1.0,
      clearcoatRoughness: 0.010,
      reflectivity: 1.0,
      ior: 2.9,
      iridescence: 0.45,
      iridescenceIOR: 1.48,
      sheen: 0.90,
      sheenColor: new THREE.Color(0xffd080),
      sheenRoughness: 0.16,
      emissive: new THREE.Color(0x080605),
      envMapIntensity: 3.2,
      polygonOffset: true,
      polygonOffsetFactor: -1,
      polygonOffsetUnits: -1,
    });

    const matSideThree = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color(0x0d0f13),
      roughness: 0.04,
      metalness: 0.98,
      clearcoat: 1.0,
      clearcoatRoughness: 0.015,
      reflectivity: 1.0,
      ior: 2.8,
      iridescence: 0.35,
      iridescenceIOR: 1.45,
      sheen: 0.8,
      sheenColor: new THREE.Color(0xf6d296),
      sheenRoughness: 0.20,
      emissive: new THREE.Color(0x050403),
      envMapIntensity: 2.8,
      polygonOffset: true,
      polygonOffsetFactor: 1,
      polygonOffsetUnits: 1,
    });

    // ── 04. SUB-GROUP: "13" EMBLEM ─────────────────────────────
    const thirteenGroup = new THREE.Group();

    const oneGeo = new THREE.ExtrudeGeometry(createOneShape(), extrudeSettings);
    oneGeo.center();
    const oneMesh = new THREE.Mesh(oneGeo, [matFaceOne, matSideOne]);
    oneMesh.position.set(-1.22, 0, 0);
    thirteenGroup.add(oneMesh);

    const threeGeo = new THREE.ExtrudeGeometry(createThreeShape(), extrudeSettings);
    threeGeo.center();
    const threeMesh = new THREE.Mesh(threeGeo, [matFaceThree, matSideThree]);
    threeMesh.position.set(0.60, 0, 0);
    thirteenGroup.add(threeMesh);

    emblemGroup.add(thirteenGroup);

    // ── 05. SUB-GROUP: "BE" MONOLITH EMBLEM ────────────────────
    const beGroup = new THREE.Group();

    const bGroup = new THREE.Group();
    const bSpine = new THREE.Mesh(oneGeo, [matFaceOne, matSideOne]);
    bSpine.position.set(-1.00, 0, 0.003);
    const bBowls = new THREE.Mesh(threeGeo, [matFaceThree, matSideThree]);
    bBowls.position.set(0.40, 0, -0.003);
    bGroup.add(bSpine);
    bGroup.add(bBowls);
    bGroup.position.set(-2.28, 0, 0);
    beGroup.add(bGroup);

    const eGeo = new THREE.ExtrudeGeometry(createMirroredThreeShape(), extrudeSettings);
    eGeo.center();
    const eMesh = new THREE.Mesh(eGeo, [matFaceThree, matSideThree]);
    eMesh.position.set(2.12, 0, 0);
    beGroup.add(eMesh);

    beGroup.visible = false;
    emblemGroup.add(beGroup);

    // Center the entire 13 emblem group
    emblemGroup.scale.setScalar(0.88);
    emblemGroup.position.set(0, 0, -1.0);
    emblemGroup.rotation.set(0, 0, 0);
    scene.add(emblemGroup);
    groupRef.current = emblemGroup;

    // Procedural glowing circular point texture
    const pCanvas = document.createElement("canvas");
    pCanvas.width = 64;
    pCanvas.height = 64;
    const pCtx = pCanvas.getContext("2d");
    if (pCtx) {
      const grad = pCtx.createRadialGradient(32, 32, 0, 32, 32, 32);
      grad.addColorStop(0, "rgba(255, 250, 240, 1.0)");
      grad.addColorStop(0.25, "rgba(255, 230, 195, 0.95)");
      grad.addColorStop(0.60, "rgba(215, 175, 120, 0.40)");
      grad.addColorStop(1, "rgba(0, 0, 0, 0)");
      pCtx.fillStyle = grad;
      pCtx.fillRect(0, 0, 64, 64);
    }
    const particleTexture = new THREE.CanvasTexture(pCanvas);

    // ── 06. TENBIN EXACT ORBITING MODEL PARTICLES (Surrounding 3D Crystalline Stardust Halo) ──
    const auraParticleCount = 45;
    const auraParticleGeo = new THREE.BufferGeometry();
    const auraPositions = new Float32Array(auraParticleCount * 3);
    const auraData: Array<{ radius: number; theta: number; vr: number; vtheta: number; z: number; phase: number }> = [];

    for (let i = 0; i < auraParticleCount; i++) {
      const radius = 0.9 + Math.random() * 3.8;
      const theta = Math.random() * Math.PI * 2;
      const z = (Math.random() - 0.5) * 3.8;

      auraPositions[i * 3] = radius * Math.cos(theta);
      auraPositions[i * 3 + 1] = radius * Math.sin(theta);
      auraPositions[i * 3 + 2] = z;

      auraData.push({
        radius,
        theta,
        vr: 0.002 + Math.random() * 0.006,
        vtheta: (Math.random() > 0.5 ? 1 : -1) * (0.0025 + Math.random() * 0.005),
        z,
        phase: Math.random() * Math.PI * 2,
      });
    }

    auraParticleGeo.setAttribute("position", new THREE.BufferAttribute(auraPositions, 3));

    const auraParticleMat = new THREE.PointsMaterial({
      size: 0.05,
      map: particleTexture,
      color: new THREE.Color(0xf6e2c8),
      transparent: true,
      opacity: 0.45,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const auraParticleSystem = new THREE.Points(auraParticleGeo, auraParticleMat);
    scene.add(auraParticleSystem);

    // ── 07. HIGH-CONTRAST SCULPTURAL STUDIO LIGHTING ──
    // 1. Inky low ambient to preserve dramatic obsidian contrast
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.35);
    scene.add(ambientLight);

    // 2. High-power back rim kicker (Incandescent golden halo directly echoing background silk glow)
    const backRimLight = new THREE.DirectionalLight(0xffd998, 26.0);
    backRimLight.position.set(0, -2, -6);
    scene.add(backRimLight);

    // 3. Overhead razor chamfer glint
    const topRimLight = new THREE.DirectionalLight(0xfffaee, 18.0);
    topRimLight.position.set(0, 16, 2);
    scene.add(topRimLight);

    // 4. Primary champagne sculptural key light
    const keyLight = new THREE.DirectionalLight(0xffeed4, 3.8);
    keyLight.position.set(7, 11, 8);
    scene.add(keyLight);

    // 5. Left liquid gold silhouette kicker
    const sideGrazingLight = new THREE.DirectionalLight(0xebb770, 8.5);
    sideGrazingLight.position.set(-9, 3, 5);
    scene.add(sideGrazingLight);

    // 6. Subtle soft front volume fill
    const frontKeyLight = new THREE.DirectionalLight(0xffffff, 1.0);
    frontKeyLight.position.set(0, 2.0, 9.0);
    scene.add(frontKeyLight);

    // 7. Dark amber-bronze under bounce
    const floorBounceLight = new THREE.DirectionalLight(0x402510, 2.0);
    floorBounceLight.position.set(0, -8, 4);
    scene.add(floorBounceLight);

    // 8. Dynamic sweeping champagne specular point light
    const mouseLight = new THREE.PointLight(0xffe6b8, 7.5, 16);
    mouseLight.position.set(0, 0, 4.0);
    scene.add(mouseLight);

    // Mouse & Touch Parallax Trackers
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const onPointerMove = (e: MouseEvent) => {
      const nx = (e.clientX / window.innerWidth) * 2 - 1;
      const ny = -(e.clientY / window.innerHeight) * 2 + 1;
      targetMouseX = nx;
      targetMouseY = ny;
    };
    window.addEventListener("mousemove", onPointerMove, { passive: true });

    const onTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        targetMouseX = (e.touches[0].clientX / window.innerWidth) * 2 - 1;
        targetMouseY = -(e.touches[0].clientY / window.innerHeight) * 2 + 1;
      }
    };
    window.addEventListener("touchmove", onTouchMove, { passive: true });

    // Resize
    const onResize = () => {
      if (!container) return;
      const w = container.clientWidth || window.innerWidth;
      const h = container.clientHeight || window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", onResize, { passive: true });

    // Render loop — 3D deep spatial kinematics & organic momentum
    let rafId: number;
    let isVisible = true;
    let currentX = 0;
    let currentY = 0;
    let currentZ = -1.0;
    let currentRotX = 0.08;
    let currentRotY = 0;
    let currentRotZ = 0;
    let currentScale = 0.88;
    let currentMorph = 0; // 0 = "13", 1.0 = "BE"
    const startTime = performance.now();

    // IntersectionObserver to pause RAF when out of view
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0.05 }
    );
    observer.observe(container);

    const smoothstep = (min: number, max: number, value: number) => {
      const x = Math.max(0, Math.min(1, (value - min) / (max - min)));
      return x * x * (3 - 2 * x);
    };

    const animate = () => {
      rafId = requestAnimationFrame(animate);
      if (!isVisible || document.hidden) return;

      const elapsedTime = (performance.now() - startTime) * 0.001;
      const p = Math.max(0, Math.min(1, progressRef.current));
      const entryP = Math.max(0, Math.min(1, entryProgressRef.current));

      // Smooth mouse parallax damping
      mouseX += (targetMouseX - mouseX) * 0.06;
      mouseY += (targetMouseY - mouseY) * 0.06;

      // Soft studio key light parallax (Natural, diffused edge sheen & dynamic chamfer reflections)
      frontKeyLight.position.x = mouseX * 4.0;
      frontKeyLight.position.y = 3 + mouseY * 3.0;

      keyLight.position.x = 8 + mouseX * 2.5;
      keyLight.position.y = 14 + mouseY * 2.0;

      topRimLight.position.x = mouseX * 2.0;

      if (mouseLight) {
        mouseLight.position.x = mouseX * 6.0;
        mouseLight.position.y = mouseY * 5.0;
      }

      // Update Tenbin Orbiting Stardust Halo Particles
      const auraAttr = auraParticleGeo.attributes.position as THREE.BufferAttribute;
      const aArr = auraAttr.array as Float32Array;

      for (let i = 0; i < auraParticleCount; i++) {
        const item = auraData[i];
        item.radius += item.vr;
        item.theta += item.vtheta;

        if (item.radius > 4.8) {
          item.radius = 1.0 + Math.random() * 0.8;
          item.theta = Math.random() * Math.PI * 2;
        }

        const harmonicZ = item.z + Math.sin(elapsedTime * 1.8 + item.phase) * 0.35;
        aArr[i * 3] = currentX + item.radius * Math.cos(item.theta);
        aArr[i * 3 + 1] = currentY + item.radius * Math.sin(item.theta) * 0.95;
        aArr[i * 3 + 2] = currentZ + harmonicZ;
      }
      auraAttr.needsUpdate = true;
      auraParticleSystem.rotation.y = elapsedTime * 0.04 + mouseX * 0.05;

      if (emblemGroup) {
        const entryFade = smoothstep(0.05, 0.65, entryP);

        // Harmonic organic floating breath
        const idleFloatY = Math.sin(elapsedTime * 1.4) * 0.07;
        const idleRotX = Math.cos(elapsedTime * 1.1) * 0.025;
        const idleRotZ = Math.sin(elapsedTime * 0.9) * 0.02;

        let targetX = 0;
        let targetY = idleFloatY;
        let targetZ = -1.0;
        let targetRotY = 0;
        let targetRotX = 0.08 + idleRotX;
        let targetRotZ = idleRotZ;
        let targetScale = 0.88;
        let targetMorph = 0; // 0 = 13, 1.0 = BE

        if (p < 0.08) {
          // Act Hero: 3D Titanium Monolith centered majestically behind BE UNREAL UNREASONABLE
          const localP = p / 0.08;
          targetX = 0;
          targetY = 0.28 + idleFloatY;
          targetZ = -1.15;
          targetRotY = localP * 0.20;
          targetRotX = 0.05 + idleRotX;
          targetRotZ = idleRotZ;
          targetScale = 0.78;
          targetMorph = 0;
        } else if (p >= 0.08 && p < 0.24) {
          // Act 0: Manifesto Editorial Statement
          const localP = (p - 0.08) / 0.16;
          targetX = 0;
          targetY = idleFloatY;
          targetZ = -0.85 - localP * 0.15;
          targetRotY = 0.22 + localP * 0.22;
          targetRotX = 0.06 + idleRotX;
          targetRotZ = idleRotZ;
          targetScale = 0.90;
          targetMorph = 0;
        } else if (p >= 0.24 && p < 0.32) {
          // Transition 0 -> 1: Center -> Left Column deep 3D arc swoop & 360° spin (13 => BE)
          const t = smoothstep(0.24, 0.32, p);
          const arcDepth = Math.sin(t * Math.PI) * -2.8;
          const arcY = Math.sin(t * Math.PI) * -0.45;

          targetX = -3.85 * t;
          targetY = idleFloatY + arcY;
          targetZ = -1.0 + arcDepth;
          targetRotY = 0.44 * (1 - t) + (Math.PI * 2 + 0.24) * t;
          targetRotX = 0.06 + Math.sin(t * Math.PI) * 0.28 + idleRotX;
          targetRotZ = -Math.sin(t * Math.PI) * 0.14 + 0.04 * t;
          targetScale = 0.90 + 0.06 * t;
          targetMorph = t;
        } else if (p >= 0.25 && p < 0.45) {
          // Act 1: CREATE (Settled Full Left Column as BE)
          const localP = (p - 0.25) / 0.20;
          targetX = -3.85;
          targetY = idleFloatY;
          targetZ = -1.0;
          targetRotY = Math.PI * 2 + 0.24 + Math.sin(localP * Math.PI) * 0.10;
          targetRotX = 0.08 + Math.cos(localP * Math.PI) * 0.035 + idleRotX;
          targetRotZ = 0.04 + idleRotZ;
          targetScale = 0.96;
          targetMorph = 1.0;
        } else if (p >= 0.45 && p < 0.50) {
          // Transition 1 -> 2: Left -> Right Column deep 3D orbital sweep & 360° spin (BE => 13)
          const t = smoothstep(0.45, 0.50, p);
          const arcDepth = Math.sin(t * Math.PI) * -3.2;
          const arcY = Math.sin(t * Math.PI) * -0.55;

          targetX = -3.85 + 7.7 * t;
          targetY = idleFloatY + arcY;
          targetZ = -1.0 + arcDepth;
          targetRotY = (Math.PI * 2 + 0.24) * (1 - t) + (Math.PI * 4 - 0.24) * t;
          targetRotX = 0.08 + Math.sin(t * Math.PI) * 0.30 + idleRotX;
          targetRotZ = 0.04 * (1 - 2 * t) + Math.sin(t * Math.PI) * 0.16;
          targetScale = 0.96;
          targetMorph = 1.0 - t;
        } else if (p >= 0.50 && p < 0.67) {
          // Act 2: BUILD (Settled Full Right Column as 13)
          const localP = (p - 0.50) / 0.17;
          targetX = 3.85;
          targetY = idleFloatY;
          targetZ = -1.0;
          targetRotY = Math.PI * 4 - 0.24 - Math.sin(localP * Math.PI) * 0.10;
          targetRotX = 0.08 + Math.cos(localP * Math.PI) * 0.035 + idleRotX;
          targetRotZ = -0.04 + idleRotZ;
          targetScale = 0.96;
          targetMorph = 0.0;
        } else if (p >= 0.67 && p < 0.72) {
          // Transition 2 -> 3: Right -> Left Column deep 3D orbital sweep & 360° spin (13 => BE)
          const t = smoothstep(0.67, 0.72, p);
          const arcDepth = Math.sin(t * Math.PI) * -3.2;
          const arcY = Math.sin(t * Math.PI) * -0.55;

          targetX = 3.85 - 7.7 * t;
          targetY = idleFloatY + arcY;
          targetZ = -1.0 + arcDepth;
          targetRotY = (Math.PI * 4 - 0.24) * (1 - t) + (Math.PI * 6 + 0.24) * t;
          targetRotX = 0.08 + Math.sin(t * Math.PI) * 0.30 + idleRotX;
          targetRotZ = -0.04 * (1 - 2 * t) - Math.sin(t * Math.PI) * 0.16;
          targetScale = 0.96;
          targetMorph = t;
        } else if (p >= 0.72 && p < 0.88) {
          // Act 3: GROW (Settled Full Left Column as BE)
          const localP = (p - 0.72) / 0.16;
          targetX = -3.85;
          targetY = idleFloatY;
          targetZ = -1.0;
          targetRotY = Math.PI * 6 + 0.24 + Math.sin(localP * Math.PI) * 0.10;
          targetRotX = 0.08 + Math.cos(localP * Math.PI) * 0.035 + idleRotX;
          targetRotZ = 0.04 + idleRotZ;
          targetScale = 0.96;
          targetMorph = 1.0;
        } else if (p >= 0.88 && p < 0.92) {
          // Transition 3 -> Finale: Left -> Center (BE => 13)
          const t = smoothstep(0.88, 0.92, p);
          const arcDepth = Math.sin(t * Math.PI) * -2.8;
          const arcY = Math.sin(t * Math.PI) * -0.45;

          targetX = -3.85 * (1 - t);
          targetY = idleFloatY + arcY;
          targetZ = -1.0 + arcDepth;
          targetRotY = (Math.PI * 6 + 0.24) * (1 - t) + (Math.PI * 8.0) * t;
          targetRotX = 0.08 + Math.sin(t * Math.PI) * 0.24 + idleRotX;
          targetRotZ = 0.04 * (1 - t) + idleRotZ;
          targetScale = 0.96 * (1 - 0.04 * t);
          targetMorph = 1.0 - t;
        } else {
          // Act Finale: Core CREATE · BUILD · GROW Trilogy (Settled Center as 13 aligned with UTOPIA)
          targetX = 0;
          targetY = 0.0 + idleFloatY * 0.2;
          targetZ = -0.92;
          targetRotY = Math.PI * 8.0;
          targetRotX = 0.0 + idleRotX * 0.2;
          targetRotZ = idleRotZ * 0.2;
          targetScale = 0.94;
          targetMorph = 0.0;
        }

        // Apply Mouse Parallax Offsets (anchored in finale so 13 and UTOPIA stay perfectly aligned)
        const isFinale = p >= 0.92;
        const pScale = isFinale ? 0.14 : 1.0;
        targetX += mouseX * 0.45 * pScale;
        targetY += mouseY * 0.35 * pScale;
        targetRotY += mouseX * 0.28 * pScale;
        targetRotX += -mouseY * 0.22 * pScale;

        // Precision physics damping
        const dampFactor = 0.095;
        const morphDamp = 0.14;

        currentX += (targetX - currentX) * dampFactor;
        currentY += (targetY - currentY) * dampFactor;
        currentZ += (targetZ - currentZ) * dampFactor;
        currentScale += (targetScale - currentScale) * dampFactor;
        currentRotX += (targetRotX - currentRotX) * dampFactor;
        currentRotY += (targetRotY - currentRotY) * dampFactor;
        currentRotZ += (targetRotZ - currentRotZ) * dampFactor;
        currentMorph += (targetMorph - currentMorph) * morphDamp;

        renderer.domElement.style.opacity = `${entryFade}`;
        emblemGroup.visible = entryP > 0.02;

        if (emblemGroup.visible) {
          emblemGroup.position.set(currentX, currentY, currentZ);
          emblemGroup.scale.setScalar(currentScale);
          emblemGroup.rotation.set(currentRotX, currentRotY, currentRotZ);

          thirteenGroup.visible = currentMorph < 0.50;
          beGroup.visible = currentMorph >= 0.50;
        }
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(rafId);
      observer.disconnect();
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onPointerMove);
      window.removeEventListener("touchmove", onTouchMove);
      if (renderer.domElement) {
        renderer.domElement.remove();
      }
      oneGeo.dispose();
      threeGeo.dispose();
      eGeo.dispose();

      auraParticleGeo.dispose();
      auraParticleMat.dispose();
      particleTexture.dispose();
      matFaceOne.dispose();
      matFaceThree.dispose();
      matSideOne.dispose();
      matSideThree.dispose();
      liquidNormalMap.dispose();
      envTexture.dispose();
      renderer.dispose();
    };
  }, [theme]);

  return (
    <div
      ref={containerRef}
      className={`${styles.canvasWrap} ${className ?? ""}`}
      aria-hidden="true"
    />
  );
}
