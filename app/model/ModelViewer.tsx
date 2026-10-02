"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import Link from "next/link";
import styles from "./ModelViewer.module.css";

const MATERIALS = [
  {
    id: "titanium",
    name: "Titanium Graphite",
    colorOne: 0x34363a,
    colorThree: 0x2b2d31,
    roughness: 0.26,
    metalness: 0.86,
    clearcoat: 0.4,
    wireframe: false,
  },
  {
    id: "platinum",
    name: "Brushed Platinum",
    colorOne: 0xe2e4e8,
    colorThree: 0xc8cbd2,
    roughness: 0.20,
    metalness: 0.92,
    clearcoat: 0.6,
    wireframe: false,
  },
  {
    id: "gold",
    name: "Champagne Gold",
    colorOne: 0xd6b278,
    colorThree: 0xb59253,
    roughness: 0.22,
    metalness: 0.88,
    clearcoat: 0.5,
    wireframe: false,
  },
  {
    id: "gunmetal",
    name: "Deep Gunmetal",
    colorOne: 0x202226,
    colorThree: 0x181a1d,
    roughness: 0.30,
    metalness: 0.82,
    clearcoat: 0.3,
    wireframe: false,
  },
  {
    id: "wireframe",
    name: "Telemetry Wireframe",
    colorOne: 0xffffff,
    colorThree: 0xf4dfc8,
    roughness: 0.5,
    metalness: 0.5,
    clearcoat: 0,
    wireframe: true,
  },
];

const SHAPES = [
  {
    id: "organic",
    name: "Organic Ribbon (Final)",
    tag: "PRODUCTION BRAND MARK",
  },
  {
    id: "geometric",
    name: "Linear Geometric",
    tag: "ARCHITECTURAL BAUHAUS",
  },
  {
    id: "brutalist",
    name: "Brutalist Monolith",
    tag: "INTERSECTING BLOCKS",
  },
];

export function ModelViewer() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [activeMaterial, setActiveMaterial] = useState("titanium");
  const [activeShape, setActiveShape] = useState("organic");
  const [autoRotate, setAutoRotate] = useState(true);
  const [showGrid, setShowGrid] = useState(true);
  const [copied, setCopied] = useState(false);
  const [rotationCoords, setRotationCoords] = useState({ x: 0, y: 0 });

  const sceneRef = useRef<THREE.Scene | null>(null);
  const emblemGroupRef = useRef<THREE.Group | null>(null);
  const matOneRef = useRef<THREE.MeshPhysicalMaterial | null>(null);
  const matThreeRef = useRef<THREE.MeshPhysicalMaterial | null>(null);
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
      matOneRef.current.clearcoat = matConfig.clearcoat;
      matOneRef.current.wireframe = matConfig.wireframe;

      matThreeRef.current.color.setHex(matConfig.colorThree);
      matThreeRef.current.roughness = matConfig.roughness;
      matThreeRef.current.metalness = matConfig.metalness;
      matThreeRef.current.clearcoat = matConfig.clearcoat;
      matThreeRef.current.wireframe = matConfig.wireframe;
    }
  }, [activeMaterial]);

  // Build Geometry for selected shape
  const buildEmblemMeshes = (shapeType: string, group: THREE.Group) => {
    // Clear existing children
    while (group.children.length > 0) {
      const child = group.children[0] as THREE.Mesh;
      if (child.geometry) child.geometry.dispose();
      group.remove(child);
    }

    const extrudeSettings = {
      steps: 1,
      depth: 0.96,
      bevelEnabled: true,
      bevelThickness: 0.075,
      bevelSize: 0.065,
      bevelOffset: 0,
      bevelSegments: 5,
    };

    if (shapeType === "organic") {
      // 1. Organic Tapered Monolith "1"
      const oneShape = new THREE.Shape();
      const topR = 0.44;
      const botR = 0.68;
      const topY = 2.62;
      const botY = -2.42;

      oneShape.moveTo(-botR, botY);
      oneShape.lineTo(-topR, topY);
      oneShape.absarc(0, topY, topR, Math.PI, 0, true);
      oneShape.lineTo(botR, botY);
      oneShape.absarc(0, botY, botR, 0, Math.PI, true);
      oneShape.closePath();

      const oneGeo = new THREE.ExtrudeGeometry(oneShape, extrudeSettings);
      oneGeo.center();
      const oneMesh = new THREE.Mesh(oneGeo, matOneRef.current!);
      oneMesh.position.set(-1.45, 0, 0);
      group.add(oneMesh);

      // 2. Continuous Organic Ribbon "3"
      const threeShape = new THREE.Shape();
      threeShape.moveTo(-0.45, 2.82);
      threeShape.bezierCurveTo(0.30, 3.12, 1.30, 3.08, 1.88, 2.48);
      threeShape.bezierCurveTo(2.38, 1.95, 2.28, 1.12, 1.72, 0.52);
      threeShape.bezierCurveTo(1.32, 0.12, 1.12, 0.02, 1.18, -0.02);
      threeShape.bezierCurveTo(1.38, -0.22, 2.18, -0.68, 2.32, -1.38);
      threeShape.bezierCurveTo(2.46, -2.18, 1.78, -3.12, 0.62, -3.12);
      threeShape.bezierCurveTo(-0.18, -3.12, -0.65, -2.82, -0.92, -2.32);
      threeShape.bezierCurveTo(-1.18, -1.82, -1.02, -1.32, -0.52, -1.38);
      threeShape.bezierCurveTo(0.18, -1.42, 0.88, -1.68, 1.28, -1.32);
      threeShape.bezierCurveTo(1.58, -1.02, 1.48, -0.42, 0.98, -0.12);
      threeShape.bezierCurveTo(0.58, 0.12, 0.22, 0.18, 0.18, 0.08);
      threeShape.bezierCurveTo(0.12, -0.02, 0.38, 0.58, 0.78, 0.98);
      threeShape.bezierCurveTo(1.32, 1.48, 1.28, 1.98, 0.88, 2.18);
      threeShape.bezierCurveTo(0.38, 2.38, -0.12, 2.18, -0.48, 1.88);
      threeShape.bezierCurveTo(-0.95, 1.92, -0.95, 2.78, -0.45, 2.82);
      threeShape.closePath();

      const threeGeo = new THREE.ExtrudeGeometry(threeShape, extrudeSettings);
      threeGeo.center();
      const threeMesh = new THREE.Mesh(threeGeo, matThreeRef.current!);
      threeMesh.position.set(0.75, 0, 0);
      group.add(threeMesh);
    } else if (shapeType === "geometric") {
      // Linear Geometric Bauhaus Monolith
      // "1" Pillar
      const oneShape = new THREE.Shape();
      oneShape.moveTo(-0.55, -2.5);
      oneShape.lineTo(-0.55, 1.8);
      oneShape.lineTo(0.0, 2.6);
      oneShape.lineTo(0.55, 2.6);
      oneShape.lineTo(0.55, -2.5);
      oneShape.closePath();

      const oneGeo = new THREE.ExtrudeGeometry(oneShape, extrudeSettings);
      oneGeo.center();
      const oneMesh = new THREE.Mesh(oneGeo, matOneRef.current!);
      oneMesh.position.set(-1.4, 0, 0);
      group.add(oneMesh);

      // "3" Geometric Linear Cutout
      const threeShape = new THREE.Shape();
      threeShape.moveTo(-1.2, 2.6);
      threeShape.lineTo(1.5, 2.6);
      threeShape.lineTo(1.5, 0.4);
      threeShape.lineTo(0.3, 0.4);
      threeShape.lineTo(0.3, -0.4);
      threeShape.lineTo(1.5, -0.4);
      threeShape.lineTo(1.5, -2.6);
      threeShape.lineTo(-1.2, -2.6);
      threeShape.lineTo(-1.2, -1.8);
      threeShape.lineTo(0.65, -1.8);
      threeShape.lineTo(0.65, -1.0);
      threeShape.lineTo(-0.4, -1.0);
      threeShape.lineTo(-0.4, 1.0);
      threeShape.lineTo(0.65, 1.0);
      threeShape.lineTo(0.65, 1.8);
      threeShape.lineTo(-1.2, 1.8);
      threeShape.closePath();

      const threeGeo = new THREE.ExtrudeGeometry(threeShape, extrudeSettings);
      threeGeo.center();
      const threeMesh = new THREE.Mesh(threeGeo, matThreeRef.current!);
      threeMesh.position.set(0.9, 0, 0);
      group.add(threeMesh);
    } else {
      // Brutalist Intersecting Monoliths
      // Vertical Pillar "1"
      const oneGeo = new THREE.BoxGeometry(1.1, 5.2, 1.0);
      const oneMesh = new THREE.Mesh(oneGeo, matOneRef.current!);
      oneMesh.position.set(-1.4, 0, 0);
      group.add(oneMesh);

      // Segmented Block "3"
      const topBarGeo = new THREE.BoxGeometry(2.4, 0.95, 1.0);
      const topBar = new THREE.Mesh(topBarGeo, matThreeRef.current!);
      topBar.position.set(0.8, 2.1, 0);
      group.add(topBar);

      const midBarGeo = new THREE.BoxGeometry(1.8, 0.9, 1.0);
      const midBar = new THREE.Mesh(midBarGeo, matThreeRef.current!);
      midBar.position.set(0.5, 0, 0);
      group.add(midBar);

      const botBarGeo = new THREE.BoxGeometry(2.4, 0.95, 1.0);
      const botBar = new THREE.Mesh(botBarGeo, matThreeRef.current!);
      botBar.position.set(0.8, -2.1, 0);
      group.add(botBar);

      const rightColGeo = new THREE.BoxGeometry(0.95, 4.2, 1.0);
      const rightCol = new THREE.Mesh(rightColGeo, matThreeRef.current!);
      rightCol.position.set(1.5, 0, 0);
      group.add(rightCol);
    }
  };

  // Switch Shape
  useEffect(() => {
    if (emblemGroupRef.current) {
      buildEmblemMeshes(activeShape, emblemGroupRef.current);
    }
  }, [activeShape]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let width = container.clientWidth || window.innerWidth;
    let height = container.clientHeight || window.innerHeight;

    // 1. Scene & Camera
    const scene = new THREE.Scene();
    sceneRef.current = scene;
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

    // 4. Physical Materials Setup
    const matConfig = MATERIALS.find((m) => m.id === activeMaterial) || MATERIALS[0];
    const matOne = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color(matConfig.colorOne),
      roughness: matConfig.roughness,
      metalness: matConfig.metalness,
      clearcoat: matConfig.clearcoat,
      clearcoatRoughness: 0.22,
      reflectivity: 0.85,
    });
    matOneRef.current = matOne;

    const matThree = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color(matConfig.colorThree),
      roughness: matConfig.roughness,
      metalness: matConfig.metalness,
      clearcoat: matConfig.clearcoat,
      clearcoatRoughness: 0.22,
      reflectivity: 0.85,
    });
    matThreeRef.current = matThree;

    // 5. 3D "13" Emblem Group
    const emblemGroup = new THREE.Group();
    emblemGroupRef.current = emblemGroup;
    buildEmblemMeshes(activeShape, emblemGroup);
    scene.add(emblemGroup);

    // 6. Studio Lighting Setup
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.8);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 4.5);
    keyLight.position.set(7, 9, 8);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0xdde5f0, 2.4);
    fillLight.position.set(-8, 3, 5);
    scene.add(fillLight);

    const leftRimLight = new THREE.DirectionalLight(0xffffff, 4.5);
    leftRimLight.position.set(-9, 4, -4);
    scene.add(leftRimLight);

    const rightRimLight = new THREE.DirectionalLight(0xf5ebe0, 3.8);
    rightRimLight.position.set(9, -3, -4);
    scene.add(rightRimLight);

    const overheadLight = new THREE.DirectionalLight(0xffffff, 2.2);
    overheadLight.position.set(0, 10, 1);
    scene.add(overheadLight);

    // 7. Interactive Drag / Orbit Mechanics
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

    // 8. Render Loop
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

        {/* Model Shape Switcher in Top Bar */}
        <div className={styles.shapeSelector}>
          <span className={styles.shapeLabel}>SHAPE:</span>
          {SHAPES.map((shape) => (
            <button
              key={shape.id}
              className={`${styles.shapeBtn} ${
                activeShape === shape.id ? styles.shapeBtnActive : ""
              }`}
              onClick={() => setActiveShape(shape.id)}
              type="button"
            >
              {shape.name}
            </button>
          ))}
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
          <span className={styles.telemetryKey}>ACTIVE SHAPE</span>
          <span className={styles.telemetryVal}>
            {SHAPES.find((s) => s.id === activeShape)?.tag}
          </span>
        </div>
        <div className={styles.telemetryRow}>
          <span className={styles.telemetryKey}>MATERIAL</span>
          <span className={styles.telemetryVal}>
            {MATERIALS.find((m) => m.id === activeMaterial)?.name}
          </span>
        </div>
        <div className={styles.telemetryRow}>
          <span className={styles.telemetryKey}>COORDINATES</span>
          <span className={styles.telemetryVal}>
            X: {rotationCoords.x}° / Y: {rotationCoords.y}°
          </span>
        </div>
        <div className={styles.telemetryRow}>
          <span className={styles.telemetryKey}>RENDERER</span>
          <span className={styles.telemetryVal}>WebGL · Physical ACES</span>
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
