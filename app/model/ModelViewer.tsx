"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import Link from "next/link";
import styles from "./ModelViewer.module.css";

export type ModelType = "13" | "BE" | "INVERTED_CURVES";

const MODELS_INFO: Record<ModelType, { label: string; tag: string; desc: string; formula: string }> = {
  "13": {
    label: "13 EMBLEM",
    tag: "13 MONOLITH EMBLEM (OFFICIAL)",
    desc: "Signature 13 Utopia brand emblem: Tapered monolith '1' paired with sculptural organic ribbon '3'.",
    formula: "oneGeo (-1.35) + threeGeo (+1.10)",
  },
  BE: {
    label: "BE MONOLITH",
    tag: "BE MONUMENTAL MONOLITH (OFFICIAL)",
    desc: "Signature BE mark: Monolithic '1' docked with organic '3' to form 'B', paired with mirrored '3' ('E').",
    formula: "bGroup (-2.28) + eMesh (+2.12)",
  },
  INVERTED_CURVES: {
    label: "INVERTED CURVES",
    tag: "INVERTED CURVES (Ɛ ✕ 3)",
    desc: "Mirrored '3' (Ɛ) on the left and standard '3' on the right facing inward with a cinched architectural waist.",
    formula: "mirroredThreeGeo (left) + threeGeo (right)",
  },
};

export function ModelViewer() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [activeModel, setActiveModel] = useState<ModelType>("13");
  const [colorMode, setColorMode] = useState<"titanium" | "chrome" | "clay" | "gold">("chrome");
  const [lightBoost, setLightBoost] = useState(true);
  const [wireframeMode, setWireframeMode] = useState(false);
  const [autoRotate, setAutoRotate] = useState(true);
  const [showGrid, setShowGrid] = useState(true);
  const [copied, setCopied] = useState(false);
  const [rotationCoords, setRotationCoords] = useState({ x: 0, y: 0 });

  const rootGroupRef = useRef<THREE.Group | null>(null);
  const thirteenGroupRef = useRef<THREE.Group | null>(null);
  const beGroupRef = useRef<THREE.Group | null>(null);
  const invertedCurvesGroupRef = useRef<THREE.Group | null>(null);

  const matOneRef = useRef<THREE.MeshPhysicalMaterial | null>(null);
  const matThreeRef = useRef<THREE.MeshPhysicalMaterial | null>(null);
  const keyLightRef = useRef<THREE.DirectionalLight | null>(null);
  const ambientLightRef = useRef<THREE.AmbientLight | null>(null);
  const isDraggingRef = useRef(false);
  const previousMousePosRef = useRef({ x: 0, y: 0 });
  const autoRotateRef = useRef(autoRotate);

  useEffect(() => {
    autoRotateRef.current = autoRotate;
  }, [autoRotate]);

  // Update wireframe mode
  useEffect(() => {
    if (matOneRef.current && matThreeRef.current) {
      matOneRef.current.wireframe = wireframeMode;
      matThreeRef.current.wireframe = wireframeMode;
    }
  }, [wireframeMode]);

  // Update Material Color Mode
  useEffect(() => {
    if (!matOneRef.current || !matThreeRef.current) return;

    if (colorMode === "chrome") {
      matOneRef.current.color.setHex(0xd0d5dd);
      matOneRef.current.roughness = 0.18;
      matOneRef.current.metalness = 0.95;
      matOneRef.current.clearcoat = 0.90;
      matOneRef.current.clearcoatRoughness = 0.10;

      matThreeRef.current.color.setHex(0xb0b8c4);
      matThreeRef.current.roughness = 0.20;
      matThreeRef.current.metalness = 0.92;
      matThreeRef.current.clearcoat = 0.90;
      matThreeRef.current.clearcoatRoughness = 0.10;
    } else if (colorMode === "clay") {
      matOneRef.current.color.setHex(0xe5e7eb);
      matOneRef.current.roughness = 0.45;
      matOneRef.current.metalness = 0.15;
      matOneRef.current.clearcoat = 0.20;
      matOneRef.current.clearcoatRoughness = 0.30;

      matThreeRef.current.color.setHex(0xd1d5db);
      matThreeRef.current.roughness = 0.45;
      matThreeRef.current.metalness = 0.15;
      matThreeRef.current.clearcoat = 0.20;
      matThreeRef.current.clearcoatRoughness = 0.30;
    } else if (colorMode === "gold") {
      matOneRef.current.color.setHex(0xdfb76c);
      matOneRef.current.roughness = 0.22;
      matOneRef.current.metalness = 0.92;
      matOneRef.current.clearcoat = 0.50;
      matOneRef.current.clearcoatRoughness = 0.15;

      matThreeRef.current.color.setHex(0xc59e55);
      matThreeRef.current.roughness = 0.24;
      matThreeRef.current.metalness = 0.90;
      matThreeRef.current.clearcoat = 0.50;
      matThreeRef.current.clearcoatRoughness = 0.15;
    } else {
      matOneRef.current.color.setHex(0x222428);
      matOneRef.current.roughness = 0.28;
      matOneRef.current.metalness = 0.82;
      matOneRef.current.clearcoat = 0.35;
      matOneRef.current.clearcoatRoughness = 0.20;

      matThreeRef.current.color.setHex(0x1e2024);
      matThreeRef.current.roughness = 0.30;
      matThreeRef.current.metalness = 0.80;
      matThreeRef.current.clearcoat = 0.35;
      matThreeRef.current.clearcoatRoughness = 0.20;
    }
  }, [colorMode]);

  // Update Light Boost
  useEffect(() => {
    if (keyLightRef.current && ambientLightRef.current) {
      keyLightRef.current.intensity = lightBoost ? 5.8 : 3.8;
      ambientLightRef.current.intensity = lightBoost ? 2.4 : 1.4;
    }
  }, [lightBoost]);

  // Switch visible model
  useEffect(() => {
    if (thirteenGroupRef.current) {
      thirteenGroupRef.current.visible = activeModel === "13";
    }
    if (beGroupRef.current) {
      beGroupRef.current.visible = activeModel === "BE";
    }
    if (invertedCurvesGroupRef.current) {
      invertedCurvesGroupRef.current.visible = activeModel === "INVERTED_CURVES";
    }
  }, [activeModel]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let width = container.clientWidth || window.innerWidth;
    let height = container.clientHeight || window.innerHeight;

    // 1. Scene & Camera
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);

    const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 100);
    camera.position.set(0, 0, 11.2);

    // 2. WebGL Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(width, height);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.35;
    container.appendChild(renderer.domElement);

    // 3. Grid Helper
    const gridHelper = new THREE.GridHelper(20, 20, 0x222222, 0x111111);
    gridHelper.position.y = -3.2;
    scene.add(gridHelper);

    // 4. Materials with polygonOffset for zero Z-fighting
    const matOne = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color(0x38393d),
      roughness: 0.45,
      metalness: 0.55,
      clearcoat: 0.85,
      clearcoatRoughness: 0.10,
      reflectivity: 0.95,
      sheen: 0.60,
      sheenColor: new THREE.Color(0xf0f5ff),
      polygonOffset: true,
      polygonOffsetFactor: -1,
      polygonOffsetUnits: -1,
    });
    matOneRef.current = matOne;

    const matThree = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color(0x282a2e),
      roughness: 0.12,
      metalness: 0.92,
      clearcoat: 1.0,
      clearcoatRoughness: 0.02,
      reflectivity: 1.0,
      sheen: 0.85,
      sheenColor: new THREE.Color(0xffffff),
      polygonOffset: true,
      polygonOffsetFactor: 1,
      polygonOffsetUnits: 1,
    });
    matThreeRef.current = matThree;

    // 5. Extrusion & Bevel Settings
    const extrudeSettings = {
      steps: 1,
      depth: 0.96,
      bevelEnabled: true,
      bevelThickness: 0.075,
      bevelSize: 0.065,
      bevelOffset: 0,
      bevelSegments: 5,
    };

    // ── GEOMETRY HELPERS ───────────────────────────────────────
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

    const createThreeShape = () => {
      const shape = new THREE.Shape();
      shape.moveTo(-0.45, 2.82);
      shape.bezierCurveTo(0.30, 3.12, 1.30, 3.08, 1.88, 2.48);
      shape.bezierCurveTo(2.38, 1.95, 2.28, 1.12, 1.72, 0.52);
      shape.bezierCurveTo(1.32, 0.12, 1.12, 0.02, 1.18, -0.02);
      shape.bezierCurveTo(1.38, -0.22, 2.18, -0.68, 2.32, -1.38);
      shape.bezierCurveTo(2.46, -2.18, 1.78, -3.12, 0.62, -3.12);
      shape.bezierCurveTo(-0.18, -3.12, -0.65, -2.82, -0.92, -2.32);
      shape.bezierCurveTo(-1.18, -1.82, -1.02, -1.32, -0.52, -1.38);
      shape.bezierCurveTo(0.18, -1.42, 0.88, -1.68, 1.28, -1.32);
      shape.bezierCurveTo(1.58, -1.02, 1.48, -0.42, 0.98, -0.12);
      shape.bezierCurveTo(0.58, 0.12, 0.22, 0.18, 0.18, 0.08);
      shape.bezierCurveTo(0.12, -0.02, 0.38, 0.58, 0.78, 0.98);
      shape.bezierCurveTo(1.32, 1.48, 1.28, 1.98, 0.88, 2.18);
      shape.bezierCurveTo(0.38, 2.38, -0.12, 2.18, -0.48, 1.88);
      shape.bezierCurveTo(-0.95, 1.92, -0.95, 2.78, -0.45, 2.82);
      shape.closePath();
      return shape;
    };

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

    const oneGeo = new THREE.ExtrudeGeometry(createOneShape(), extrudeSettings);
    oneGeo.center();

    const threeGeo = new THREE.ExtrudeGeometry(createThreeShape(), extrudeSettings);
    threeGeo.center();

    const eGeo = new THREE.ExtrudeGeometry(createMirroredThreeShape(), extrudeSettings);
    eGeo.center();

    // ── 01. "13" GROUP ─────────────────────────────────────────
    const thirteenGroup = new THREE.Group();
    thirteenGroupRef.current = thirteenGroup;

    const oneMesh = new THREE.Mesh(oneGeo, matOne);
    oneMesh.position.set(-1.35, 0, 0);
    thirteenGroup.add(oneMesh);

    const threeMesh = new THREE.Mesh(threeGeo, matThree);
    threeMesh.position.set(1.10, 0, 0);
    thirteenGroup.add(threeMesh);

    // ── 02. "BE" GROUP ─────────────────────────────────────────
    const beGroup = new THREE.Group();
    beGroupRef.current = beGroup;

    const bGroup = new THREE.Group();
    const bSpine = new THREE.Mesh(oneGeo, matOne);
    bSpine.position.set(-1.00, 0, 0.003);
    const bBowls = new THREE.Mesh(threeGeo, matThree);
    bBowls.position.set(0.40, 0, -0.003);
    bGroup.add(bSpine);
    bGroup.add(bBowls);
    bGroup.position.set(-2.28, 0, 0);
    beGroup.add(bGroup);

    const eMesh = new THREE.Mesh(eGeo, matThree);
    eMesh.position.set(2.12, 0, 0);
    beGroup.add(eMesh);

    // ── 03. "INVERTED CURVES" (Ɛ ✕ 3) ───────────────────────────
    const invertedCurvesGroup = new THREE.Group();
    invertedCurvesGroupRef.current = invertedCurvesGroup;

    const icLeft = new THREE.Mesh(eGeo, matOne);
    icLeft.position.set(-1.42, 0, 0);
    invertedCurvesGroup.add(icLeft);

    const icRight = new THREE.Mesh(threeGeo, matThree);
    icRight.position.set(1.42, 0, 0);
    invertedCurvesGroup.add(icRight);

    // ── ROOT ORBIT ANCHOR ──────────────────────────────────────
    const rootGroup = new THREE.Group();
    rootGroupRef.current = rootGroup;
    rootGroup.scale.setScalar(0.78);
    rootGroup.position.set(0, 0, 0);

    thirteenGroup.visible = activeModel === "13";
    beGroup.visible = activeModel === "BE";
    invertedCurvesGroup.visible = activeModel === "INVERTED_CURVES";

    rootGroup.add(thirteenGroup);
    rootGroup.add(beGroup);
    rootGroup.add(invertedCurvesGroup);
    scene.add(rootGroup);

    // 6. Studio Lighting Setup
    const ambientLight = new THREE.AmbientLight(0xffffff, lightBoost ? 2.4 : 1.4);
    ambientLightRef.current = ambientLight;
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, lightBoost ? 5.8 : 3.8);
    keyLight.position.set(7, 9, 8);
    keyLightRef.current = keyLight;
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0xcccccc, 1.8);
    fillLight.position.set(-7, 2, 5);
    scene.add(fillLight);

    const goldRimLight = new THREE.DirectionalLight(0xf4dfc8, 4.5);
    goldRimLight.position.set(4, -6, -3);
    scene.add(goldRimLight);

    const leftRimLight = new THREE.DirectionalLight(0xffffff, 3.2);
    leftRimLight.position.set(-8, 3, -4);
    scene.add(leftRimLight);

    const topLight = new THREE.DirectionalLight(0xffffff, 1.5);
    topLight.position.set(0, 10, -1);
    scene.add(topLight);

    // 7. Interactive Orbit & Drag Mechanics
    const onMouseDown = (e: MouseEvent) => {
      isDraggingRef.current = true;
      previousMousePosRef.current = { x: e.clientX, y: e.clientY };
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDraggingRef.current || !rootGroupRef.current) return;
      const deltaX = e.clientX - previousMousePosRef.current.x;
      const deltaY = e.clientY - previousMousePosRef.current.y;

      rootGroupRef.current.rotation.y += deltaX * 0.008;
      rootGroupRef.current.rotation.x += deltaY * 0.008;

      previousMousePosRef.current = { x: e.clientX, y: e.clientY };
    };

    const onMouseUp = () => {
      isDraggingRef.current = false;
    };

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      camera.position.z = Math.max(6, Math.min(18, camera.position.z + e.deltaY * 0.008));
    };

    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        isDraggingRef.current = true;
        previousMousePosRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    };

    const onTouchMove = (e: TouchEvent) => {
      if (!isDraggingRef.current || !rootGroupRef.current || e.touches.length !== 1) return;
      const deltaX = e.touches[0].clientX - previousMousePosRef.current.x;
      const deltaY = e.touches[0].clientY - previousMousePosRef.current.y;

      rootGroupRef.current.rotation.y += deltaX * 0.008;
      rootGroupRef.current.rotation.x += deltaY * 0.008;

      previousMousePosRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    };

    const onTouchEnd = () => {
      isDraggingRef.current = false;
    };

    const domEl = renderer.domElement;
    domEl.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    domEl.addEventListener("wheel", onWheel, { passive: false });
    domEl.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("touchend", onTouchEnd);

    // 8. Resize
    const onResize = () => {
      if (!container) return;
      const w = container.clientWidth || window.innerWidth;
      const h = container.clientHeight || window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", onResize);

    // 9. Animation loop
    let rafId: number;
    const animate = () => {
      rafId = requestAnimationFrame(animate);

      if (rootGroupRef.current) {
        if (autoRotateRef.current && !isDraggingRef.current) {
          rootGroupRef.current.rotation.y += 0.005;
        }

        const degX = Math.round(((rootGroupRef.current.rotation.x * 180) / Math.PI) % 360);
        const degY = Math.round(((rootGroupRef.current.rotation.y * 180) / Math.PI) % 360);
        setRotationCoords({ x: degX, y: degY });
      }

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(rafId);
      domEl.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      domEl.removeEventListener("wheel", onWheel);
      domEl.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
      window.removeEventListener("resize", onResize);

      if (container.contains(domEl)) {
        container.removeChild(domEl);
      }
      oneGeo.dispose();
      threeGeo.dispose();
      eGeo.dispose();
      matOne.dispose();
      matThree.dispose();
      renderer.dispose();
    };
  }, []);

  // Update Grid
  useEffect(() => {
    // gridHelper managed in scene
  }, [showGrid]);

  const handleResetCamera = () => {
    if (rootGroupRef.current) {
      rootGroupRef.current.rotation.set(0, 0, 0);
    }
  };

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const currentInfo = MODELS_INFO[activeModel];

  return (
    <div className={styles.viewerPage}>
      {/* 3D WebGL Canvas Layer */}
      <div ref={containerRef} className={styles.canvasContainer} />

      {/* Top HUD Header */}
      <header className={styles.topHud}>
        <div className={styles.hudBrand}>
          <Link href="/" className={styles.backLink}>
            <span className={styles.backArrow}>←</span>
            <span className={styles.brandTitle}>13 UTOPIA</span>
          </Link>
          <span className={styles.hudDivider}>/</span>
          <span className={styles.hudBadge}>OFFICIAL 3D ARTIFACTS</span>
        </div>

        {/* Model Switcher Pill Deck: 13, BE, and INVERTED CURVES only */}
        <div className={styles.modelSwitcher}>
          <button
            className={`${styles.modelSwitchBtn} ${activeModel === "13" ? styles.modelSwitchBtnActive : ""}`}
            onClick={() => setActiveModel("13")}
            type="button"
          >
            13 EMBLEM
          </button>
          <button
            className={`${styles.modelSwitchBtn} ${activeModel === "BE" ? styles.modelSwitchBtnActive : ""}`}
            onClick={() => setActiveModel("BE")}
            type="button"
          >
            BE MONOLITH
          </button>
          <button
            className={`${styles.modelSwitchBtn} ${activeModel === "INVERTED_CURVES" ? styles.modelSwitchBtnActive : ""}`}
            onClick={() => setActiveModel("INVERTED_CURVES")}
            type="button"
          >
            INVERTED CURVES (Ɛ ✕ 3)
          </button>
        </div>

        <div className={styles.hudActions}>
          <button onClick={handleShare} className={styles.hudButton} type="button">
            {copied ? "Link Copied!" : "Share Model ↗"}
          </button>
          <Link href="/" className={styles.hudPrimaryBtn}>
            Enter Experience
          </Link>
        </div>
      </header>

      {/* Live Telemetry Info Panel (Bottom Left) */}
      <div className={styles.telemetryPanel}>
        <div className={styles.telemetryRow}>
          <span className={styles.telemetryKey}>ARTIFACT</span>
          <span className={styles.telemetryVal}>{currentInfo.tag}</span>
        </div>
        <div className={styles.telemetryRow}>
          <span className={styles.telemetryKey}>CONCEPT</span>
          <span className={styles.telemetryVal}>{currentInfo.desc}</span>
        </div>
        <div className={styles.telemetryRow}>
          <span className={styles.telemetryKey}>GEOMETRY</span>
          <span className={styles.telemetryVal}>{currentInfo.formula}</span>
        </div>
        <div className={styles.telemetryRow}>
          <span className={styles.telemetryKey}>MATERIAL</span>
          <span className={styles.telemetryVal}>
            {colorMode === "chrome" && "BRIGHT HIGH-VISIBILITY CHROME"}
            {colorMode === "clay" && "ARCHITECTURAL STUDIO CLAY"}
            {colorMode === "gold" && "POLISHED 18K GOLD ACCENT"}
            {colorMode === "titanium" && "DARK TITANIUM OBSIDIAN (WEBSITE)"}
          </span>
        </div>
        <div className={styles.telemetryRow}>
          <span className={styles.telemetryKey}>COORDINATES</span>
          <span className={styles.telemetryVal}>
            X: {rotationCoords.x}° / Y: {rotationCoords.y}°
          </span>
        </div>
        <div className={styles.telemetryRow}>
          <span className={styles.telemetryKey}>LIGHTING</span>
          <span className={styles.telemetryVal}>
            {lightBoost ? "BOOSTED STUDIO (5.8X)" : "WEBSITE AMBIENT (3.8X)"}
          </span>
        </div>
        <div className={styles.telemetryTip}>
          <span>Drag to orbit · Scroll to zoom · Switch 3D models above</span>
        </div>
      </div>

      {/* Control Deck (Bottom Right) */}
      <div className={styles.controlDeck}>
        {/* Material Presets */}
        <div className={styles.materialRow}>
          <span className={styles.controlSectionLabel}>INSPECTION MATERIAL</span>
          <div className={styles.materialBtnGroup}>
            <button
              className={`${styles.matBtn} ${colorMode === "chrome" ? styles.matBtnActive : ""}`}
              onClick={() => setColorMode("chrome")}
              type="button"
            >
              Bright Chrome
            </button>
            <button
              className={`${styles.matBtn} ${colorMode === "clay" ? styles.matBtnActive : ""}`}
              onClick={() => setColorMode("clay")}
              type="button"
            >
              Studio Clay
            </button>
            <button
              className={`${styles.matBtn} ${colorMode === "gold" ? styles.matBtnActive : ""}`}
              onClick={() => setColorMode("gold")}
              type="button"
            >
              Gold Accent
            </button>
            <button
              className={`${styles.matBtn} ${colorMode === "titanium" ? styles.matBtnActive : ""}`}
              onClick={() => setColorMode("titanium")}
              type="button"
            >
              Titanium (Site)
            </button>
          </div>
        </div>

        {/* Viewport & Lighting Toggles */}
        <div className={styles.toggleRow}>
          <button
            className={`${styles.toggleBtn} ${lightBoost ? styles.toggleBtnActive : ""}`}
            onClick={() => setLightBoost(!lightBoost)}
            type="button"
          >
            {lightBoost ? "Light Boost: ON" : "Light Boost: OFF"}
          </button>

          <button
            className={`${styles.toggleBtn} ${wireframeMode ? styles.toggleBtnActive : ""}`}
            onClick={() => setWireframeMode(!wireframeMode)}
            type="button"
          >
            {wireframeMode ? "Wireframe: ON" : "Wireframe: OFF"}
          </button>

          <button
            className={`${styles.toggleBtn} ${autoRotate ? styles.toggleBtnActive : ""}`}
            onClick={() => setAutoRotate(!autoRotate)}
            type="button"
          >
            {autoRotate ? "Auto-Rotate: ON" : "Auto-Rotate: OFF"}
          </button>

          <button
            className={`${styles.toggleBtn} ${showGrid ? styles.toggleBtnActive : ""}`}
            onClick={() => setShowGrid(!showGrid)}
            type="button"
          >
            {showGrid ? "Grid: ON" : "Grid: OFF"}
          </button>

          <button className={styles.toggleBtn} onClick={handleResetCamera} type="button">
            Reset Angle
          </button>
        </div>
      </div>
    </div>
  );
}
