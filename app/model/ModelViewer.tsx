"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import Link from "next/link";
import styles from "./ModelViewer.module.css";

const MATERIALS = [
  { id: "titanium", name: "Titanium Graphite", colorOne: 0x2d2d2d, colorThree: 0x242424, roughness: 0.35, metalness: 0.72, wireframe: false },
  { id: "obsidian", name: "Obsidian Onyx", colorOne: 0x111111, colorThree: 0x0a0a0a, roughness: 0.15, metalness: 0.95, wireframe: false },
  { id: "gold", name: "Liquid Gold", colorOne: 0xd4af37, colorThree: 0xaa8c2c, roughness: 0.22, metalness: 0.88, wireframe: false },
  { id: "chrome", name: "Brushed Chrome", colorOne: 0xcccccc, colorThree: 0xb5b5b5, roughness: 0.18, metalness: 0.92, wireframe: false },
  { id: "wireframe", name: "Telemetry Wireframe", colorOne: 0xffffff, colorThree: 0xf4dfc8, roughness: 0.5, metalness: 0.5, wireframe: true },
];

export function ModelViewer() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [activeMaterial, setActiveMaterial] = useState("titanium");
  const [autoRotate, setAutoRotate] = useState(true);
  const [showGrid, setShowGrid] = useState(true);
  const [copied, setCopied] = useState(false);
  const [rotationCoords, setRotationCoords] = useState({ x: 0, y: 0 });

  const emblemGroupRef = useRef<THREE.Group | null>(null);
  const matOneRef = useRef<THREE.MeshStandardMaterial | null>(null);
  const matThreeRef = useRef<THREE.MeshStandardMaterial | null>(null);
  const isDraggingRef = useRef(false);
  const previousMousePosRef = useRef({ x: 0, y: 0 });
  const autoRotateRef = useRef(autoRotate);

  useEffect(() => {
    autoRotateRef.current = autoRotate;
  }, [autoRotate]);

  // Update material on state change
  useEffect(() => {
    const matConfig = MATERIALS.find((m) => m.id === activeMaterial) || MATERIALS[0];
    if (matOneRef.current && matThreeRef.current) {
      matOneRef.current.color.setHex(matConfig.colorOne);
      matOneRef.current.roughness = matConfig.roughness;
      matOneRef.current.metalness = matConfig.metalness;
      matOneRef.current.wireframe = matConfig.wireframe;

      matThreeRef.current.color.setHex(matConfig.colorThree);
      matThreeRef.current.roughness = matConfig.roughness;
      matThreeRef.current.metalness = matConfig.metalness;
      matThreeRef.current.wireframe = matConfig.wireframe;
    }
  }, [activeMaterial]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let width = container.clientWidth || window.innerWidth;
    let height = container.clientHeight || window.innerHeight;

    // 1. Scene & Camera
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x050505);

    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(0, 0, 10.5);

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
    const gridHelper = new THREE.GridHelper(20, 20, 0x333333, 0x181818);
    gridHelper.position.y = -3.2;
    scene.add(gridHelper);

    // 4. 3D "13" Emblem Group
    const emblemGroup = new THREE.Group();
    emblemGroupRef.current = emblemGroup;

    // Shape 1: Tapered Monolith "1"
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

    // Shape 3: Sculptural Ribbon "3"
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

    const extrudeSettings = {
      steps: 1,
      depth: 0.95,
      bevelEnabled: true,
      bevelThickness: 0.045,
      bevelSize: 0.045,
      bevelOffset: 0,
      bevelSegments: 4,
    };

    const matOne = new THREE.MeshStandardMaterial({
      color: new THREE.Color(0x2d2d2d),
      roughness: 0.35,
      metalness: 0.72,
    });
    matOneRef.current = matOne;

    const matThree = new THREE.MeshStandardMaterial({
      color: new THREE.Color(0x242424),
      roughness: 0.38,
      metalness: 0.68,
    });
    matThreeRef.current = matThree;

    const oneGeo = new THREE.ExtrudeGeometry(createOneShape(), extrudeSettings);
    oneGeo.center();
    const oneMesh = new THREE.Mesh(oneGeo, matOne);
    oneMesh.position.set(-1.85, 0, 0);
    emblemGroup.add(oneMesh);

    const threeGeo = new THREE.ExtrudeGeometry(createThreeShape(), extrudeSettings);
    threeGeo.center();
    const threeMesh = new THREE.Mesh(threeGeo, matThree);
    threeMesh.position.set(1.45, 0, 0);
    emblemGroup.add(threeMesh);

    scene.add(emblemGroup);

    // 5. Studio Lighting Setup
    const keyLight = new THREE.DirectionalLight(0xffffff, 4.2);
    keyLight.position.set(7, 9, 8);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0x777777, 2.2);
    fillLight.position.set(-8, 3, 5);
    scene.add(fillLight);

    const goldRimLight = new THREE.DirectionalLight(0xf5d77f, 3.2);
    goldRimLight.position.set(4, -6, -4);
    scene.add(goldRimLight);

    const overheadLight = new THREE.DirectionalLight(0xffffff, 2.0);
    overheadLight.position.set(0, 10, 0);
    scene.add(overheadLight);

    // 6. Interactive Drag / Orbit Mechanics
    const onMouseDown = (e: MouseEvent) => {
      isDraggingRef.current = true;
      previousMousePosRef.current = { x: e.clientX, y: e.clientY };
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDraggingRef.current || !emblemGroupRef.current) return;
      const deltaX = e.clientX - previousMousePosRef.current.x;
      const deltaY = e.clientY - previousMousePosRef.current.y;

      emblemGroupRef.current.rotation.y += deltaX * 0.008;
      emblemGroupRef.current.rotation.x += deltaY * 0.008;

      previousMousePosRef.current = { x: e.clientX, y: e.clientY };
    };

    const onMouseUp = () => {
      isDraggingRef.current = false;
    };

    // Zoom via Wheel
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      camera.position.z = Math.max(6, Math.min(18, camera.position.z + e.deltaY * 0.008));
    };

    // Touch Support
    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        isDraggingRef.current = true;
        previousMousePosRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    };

    const onTouchMove = (e: TouchEvent) => {
      if (!isDraggingRef.current || !emblemGroupRef.current || e.touches.length !== 1) return;
      const deltaX = e.touches[0].clientX - previousMousePosRef.current.x;
      const deltaY = e.touches[0].clientY - previousMousePosRef.current.y;

      emblemGroupRef.current.rotation.y += deltaX * 0.01;
      emblemGroupRef.current.rotation.x += deltaY * 0.01;

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

    // 7. Render Loop
    let rafId: number;
    let stepCount = 0;

    const animate = () => {
      rafId = requestAnimationFrame(animate);

      if (emblemGroupRef.current) {
        if (autoRotateRef.current && !isDraggingRef.current) {
          emblemGroupRef.current.rotation.y += 0.006;
        }

        stepCount++;
        if (stepCount % 10 === 0) {
          setRotationCoords({
            x: Math.round(((emblemGroupRef.current.rotation.x * 180) / Math.PI) % 360),
            y: Math.round(((emblemGroupRef.current.rotation.y * 180) / Math.PI) % 360),
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
      matOne.dispose();
      matThree.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [showGrid]);

  const handleResetCamera = () => {
    if (emblemGroupRef.current) {
      emblemGroupRef.current.rotation.set(0, 0, 0);
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
          <span className={styles.hudBadge}>3D ARTIFACT INSPECTOR</span>
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
          <span className={styles.telemetryVal}>13 MONOLITH EMBLEM</span>
        </div>
        <div className={styles.telemetryRow}>
          <span className={styles.telemetryKey}>COORDINATES</span>
          <span className={styles.telemetryVal}>
            X: {rotationCoords.x}° / Y: {rotationCoords.y}°
          </span>
        </div>
        <div className={styles.telemetryRow}>
          <span className={styles.telemetryKey}>RENDERER</span>
          <span className={styles.telemetryVal}>WebGL · ACES Filmic</span>
        </div>
        <div className={styles.telemetryTip}>
          <span>Drag to orbit · Scroll to zoom</span>
        </div>
      </div>

      {/* Material & Control Deck (Bottom Center / Right) */}
      <div className={styles.controlDeck}>
        {/* Material Presets */}
        <div className={styles.materialSelector}>
          {MATERIALS.map((mat) => (
            <button
              key={mat.id}
              className={`${styles.materialBtn} ${
                activeMaterial === mat.id ? styles.materialBtnActive : ""
              }`}
              onClick={() => setActiveMaterial(mat.id)}
              type="button"
            >
              {mat.name}
            </button>
          ))}
        </div>

        {/* Viewport Toggles */}
        <div className={styles.toggleRow}>
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
