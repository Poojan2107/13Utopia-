"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import Link from "next/link";
import styles from "./ModelViewer.module.css";

export function ModelViewer() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [activeModel, setActiveModel] = useState<"BE" | "13">("BE");
  const [wireframeMode, setWireframeMode] = useState(false);
  const [autoRotate, setAutoRotate] = useState(true);
  const [showGrid, setShowGrid] = useState(true);
  const [copied, setCopied] = useState(false);
  const [rotationCoords, setRotationCoords] = useState({ x: 0, y: 0 });

  const rootGroupRef = useRef<THREE.Group | null>(null);
  const thirteenGroupRef = useRef<THREE.Group | null>(null);
  const beGroupRef = useRef<THREE.Group | null>(null);
  const matOneRef = useRef<THREE.MeshPhysicalMaterial | null>(null);
  const matThreeRef = useRef<THREE.MeshPhysicalMaterial | null>(null);
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

  // Switch visible model
  useEffect(() => {
    if (thirteenGroupRef.current && beGroupRef.current) {
      thirteenGroupRef.current.visible = activeModel === "13";
      beGroupRef.current.visible = activeModel === "BE";
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

    // 4. Finalized 1:1 Website Materials (Signature Dark Titanium with Champagne Gold Rim)
    const matOne = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color(0x222428), // Dark architectural titanium
      roughness: 0.28,
      metalness: 0.82,
      clearcoat: 0.35,
      clearcoatRoughness: 0.20,
      reflectivity: 0.85,
    });
    matOneRef.current = matOne;

    const matThree = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color(0x1e2024), // Deep obsidian graphite
      roughness: 0.30,
      metalness: 0.80,
      clearcoat: 0.35,
      clearcoatRoughness: 0.20,
      reflectivity: 0.85,
    });
    matThreeRef.current = matThree;

    // 5. Extrusion & Bevel Settings (Exact Architectural Standard)
    const extrudeSettings = {
      steps: 1,
      depth: 0.96,
      bevelEnabled: true,
      bevelThickness: 0.075,
      bevelSize: 0.065,
      bevelOffset: 0,
      bevelSegments: 5,
    };

    // ── GEOMETRY A: "13" BRAND EMBLEM ─────────────────────────
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

    const thirteenGroup = new THREE.Group();
    thirteenGroupRef.current = thirteenGroup;

    const oneGeo = new THREE.ExtrudeGeometry(createOneShape(), extrudeSettings);
    oneGeo.center();
    const oneMesh = new THREE.Mesh(oneGeo, matOne);
    oneMesh.position.set(-1.35, 0, 0);
    thirteenGroup.add(oneMesh);

    const threeGeo = new THREE.ExtrudeGeometry(createThreeShape(), extrudeSettings);
    threeGeo.center();
    const threeMesh = new THREE.Mesh(threeGeo, matThree);
    threeMesh.position.set(0.65, 0, 0);
    thirteenGroup.add(threeMesh);

    // ── GEOMETRY B: "BE" MONUMENTAL EMBLEM ────────────────────
    const createBShape = () => {
      const shape = new THREE.Shape();
      const topY = 2.62;
      const botY = -2.42;
      const midY = 0.12;

      // Outer boundary of 'B'
      shape.moveTo(-1.10, botY);
      shape.lineTo(-1.10, topY);
      shape.lineTo(0.20, topY);
      shape.bezierCurveTo(1.40, topY, 1.60, midY + 0.35, 0.45, midY);
      shape.bezierCurveTo(1.75, midY - 0.25, 1.85, botY, 0.35, botY);
      shape.closePath();

      // Top loop counter cutout
      const topHole = new THREE.Path();
      topHole.moveTo(-0.40, topY - 0.72);
      topHole.lineTo(0.18, topY - 0.72);
      topHole.bezierCurveTo(0.85, topY - 0.72, 0.85, midY + 0.48, 0.18, midY + 0.48);
      topHole.lineTo(-0.40, midY + 0.48);
      topHole.closePath();
      shape.holes.push(topHole);

      // Bottom loop counter cutout
      const botHole = new THREE.Path();
      botHole.moveTo(-0.40, midY - 0.38);
      botHole.lineTo(0.25, midY - 0.38);
      botHole.bezierCurveTo(0.95, midY - 0.38, 0.95, botY + 0.72, 0.25, botY + 0.72);
      botHole.lineTo(-0.40, botY + 0.72);
      botHole.closePath();
      shape.holes.push(botHole);

      return shape;
    };

    const createEShape = () => {
      const shape = new THREE.Shape();
      const topY = 2.62;
      const botY = -2.42;
      const midY = 0.10;
      const leftX = -1.10;
      const rightX = 1.35;
      const midRightX = 0.95;
      const barH = 0.72;
      const spineW = 0.70;

      shape.moveTo(leftX, botY);
      shape.lineTo(leftX, topY);
      shape.lineTo(rightX, topY);
      shape.lineTo(rightX, topY - barH);
      shape.lineTo(leftX + spineW, topY - barH);
      shape.lineTo(leftX + spineW, midY + barH * 0.5);
      shape.lineTo(midRightX, midY + barH * 0.5);
      shape.lineTo(midRightX, midY - barH * 0.5);
      shape.lineTo(leftX + spineW, midY - barH * 0.5);
      shape.lineTo(leftX + spineW, botY + barH);
      shape.lineTo(rightX, botY + barH);
      shape.lineTo(rightX, botY);
      shape.closePath();

      return shape;
    };

    const beGroup = new THREE.Group();
    beGroupRef.current = beGroup;

    const bGeo = new THREE.ExtrudeGeometry(createBShape(), extrudeSettings);
    bGeo.center();
    const bMesh = new THREE.Mesh(bGeo, matOne);
    bMesh.position.set(-1.45, 0, 0);
    beGroup.add(bMesh);

    const eGeo = new THREE.ExtrudeGeometry(createEShape(), extrudeSettings);
    eGeo.center();
    const eMesh = new THREE.Mesh(eGeo, matThree);
    eMesh.position.set(1.25, 0, 0);
    beGroup.add(eMesh);

    // ── ROOT ORBIT ANCHOR ──────────────────────────────────────
    const rootGroup = new THREE.Group();
    rootGroupRef.current = rootGroup;
    rootGroup.scale.setScalar(0.80);
    rootGroup.position.set(0, 0, 0);

    thirteenGroup.visible = activeModel === "13";
    beGroup.visible = activeModel === "BE";

    rootGroup.add(thirteenGroup);
    rootGroup.add(beGroup);
    scene.add(rootGroup);

    // 6. Studio Lighting Setup (Signature Champagne Gold Bevel Rim Reflections)
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.4);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 3.8);
    keyLight.position.set(7, 9, 8);
    scene.add(keyLight);
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

      rootGroupRef.current.rotation.y += deltaX * 0.01;
      rootGroupRef.current.rotation.x += deltaY * 0.01;

      previousMousePosRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    };

    const onTouchEnd = () => {
      isDraggingRef.current = false;
    };

    container.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    container.addEventListener("wheel", onWheel, { passive: false });
    container.addEventListener("touchstart", onTouchStart);
    window.addEventListener("touchmove", onTouchMove);
    window.addEventListener("touchend", onTouchEnd);

    // Resize
    const onResize = () => {
      if (!container) return;
      width = container.clientWidth || window.innerWidth;
      height = container.clientHeight || window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener("resize", onResize);

    // 8. Render Loop
    let rafId: number;
    let stepCount = 0;

    const animate = () => {
      rafId = requestAnimationFrame(animate);

      if (rootGroupRef.current) {
        if (autoRotateRef.current && !isDraggingRef.current) {
          rootGroupRef.current.rotation.y += 0.006;
        }

        stepCount++;
        if (stepCount % 10 === 0) {
          setRotationCoords({
            x: Math.round(((rootGroupRef.current.rotation.x * 180) / Math.PI) % 360),
            y: Math.round(((rootGroupRef.current.rotation.y * 180) / Math.PI) % 360),
          });
        }
      }

      gridHelper.visible = showGrid;
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(rafId);
      container.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      container.removeEventListener("wheel", onWheel);
      container.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      oneGeo.dispose();
      threeGeo.dispose();
      bGeo.dispose();
      eGeo.dispose();
      matOne.dispose();
      matThree.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
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
          <span className={styles.hudBadge}>OFFICIAL 3D ARTIFACT</span>
        </div>

        {/* Model Switcher Pill Deck */}
        <div className={styles.modelSwitcher}>
          <button
            className={`${styles.modelSwitchBtn} ${activeModel === "BE" ? styles.modelSwitchBtnActive : ""}`}
            onClick={() => setActiveModel("BE")}
            type="button"
          >
            BE MONOLITH
          </button>
          <button
            className={`${styles.modelSwitchBtn} ${activeModel === "13" ? styles.modelSwitchBtnActive : ""}`}
            onClick={() => setActiveModel("13")}
            type="button"
          >
            13 EMBLEM
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
          <span className={styles.telemetryVal}>
            {activeModel === "BE" ? "BE MONUMENTAL MONOLITH (OFFICIAL)" : "13 MONOLITH EMBLEM (OFFICIAL)"}
          </span>
        </div>
        <div className={styles.telemetryRow}>
          <span className={styles.telemetryKey}>MATERIAL</span>
          <span className={styles.telemetryVal}>DARK ARCHITECTURAL TITANIUM OBSIDIAN</span>
        </div>
        <div className={styles.telemetryRow}>
          <span className={styles.telemetryKey}>COORDINATES</span>
          <span className={styles.telemetryVal}>
            X: {rotationCoords.x}° / Y: {rotationCoords.y}°
          </span>
        </div>
        <div className={styles.telemetryRow}>
          <span className={styles.telemetryKey}>RENDERER</span>
          <span className={styles.telemetryVal}>WebGL · Physical ACES Filmic</span>
        </div>
        <div className={styles.telemetryTip}>
          <span>Drag to orbit · Scroll to zoom</span>
        </div>
      </div>

      {/* Control Deck (Bottom Right) */}
      <div className={styles.controlDeck}>
        <div className={styles.toggleRow}>
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
