"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import styles from "@/styles/plus-ex/Plus3DCanvas.module.css";

export interface Plus3DCanvasProps {
  progress?: number;
  entryProgress?: number;
  actIndex?: number;
  className?: string;
  theme?: "dark" | "light" | "transparent";
}

/**
 * 3D 13 Utopia Architectural Emblem Canvas
 * Plus-X Exact Materiality & Lighting:
 * Matte architectural graphite monoliths with razor chamfers, deep studio lighting,
 * and a full continuous scroll-driven rotation story.
 */
export function Plus3DCanvas({
  progress = 0,
  entryProgress = 1,
  actIndex = 0,
  className,
  theme = "transparent",
}: Plus3DCanvasProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const groupRef = useRef<THREE.Group | null>(null);
  const progressRef = useRef(progress);
  const entryProgressRef = useRef(entryProgress);
  const actRef = useRef(actIndex);

  useEffect(() => {
    progressRef.current = progress;
  }, [progress]);

  useEffect(() => {
    entryProgressRef.current = entryProgress;
  }, [entryProgress]);

  useEffect(() => {
    actRef.current = actIndex;
  }, [actIndex]);

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
    });
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    renderer.setPixelRatio(dpr);
    renderer.setSize(width, height);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.35;
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

      // Start at left bottom
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

      // Top outer cap & upper arch
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

    // ── GEOMETRY B: "BE" MONUMENTAL EMBLEM (Exact 1:1 "13" Font & Ribbon Kinship) ────
    const createBShape = () => {
      const shape = new THREE.Shape();
      const topY = 2.62;
      const botY = -2.42;

      // Outer outline of 'B':
      // 1. Start at bottom of left spine
      shape.moveTo(-1.15, botY);
      // 2. Ascend left vertical spine (tapered like '1')
      shape.lineTo(-0.90, topY);
      // 3. Top-left rounded shoulder
      shape.bezierCurveTo(-0.90, topY + 0.33, -0.60, 2.95, -0.15, 2.95);
      // 4. Top horizontal shelf
      shape.lineTo(0.30, 2.95);
      // 5. Top outer bowl arch (matching '3' upper curve)
      shape.bezierCurveTo(1.10, 2.95, 1.95, 2.55, 1.95, 1.60);
      shape.bezierCurveTo(1.95, 0.85, 1.40, 0.25, 0.70, 0.08);
      // 6. Center waist pinch transitioning into bottom bowl
      shape.bezierCurveTo(1.50, -0.08, 2.15, -0.65, 2.15, -1.55);
      // 7. Bottom outer bowl arch (matching '3' lower curve)
      shape.bezierCurveTo(2.15, -2.45, 1.35, -2.95, 0.35, -2.95);
      // 8. Bottom horizontal shelf
      shape.lineTo(-0.15, -2.95);
      // 9. Bottom-left rounded shoulder
      shape.bezierCurveTo(-0.65, -2.95, -1.15, -2.75, -1.15, botY);
      shape.closePath();

      // Top Counter Hole (Silky smooth organic D-capsule)
      const topHole = new THREE.Path();
      topHole.moveTo(-0.15, 0.75);
      topHole.lineTo(-0.15, 2.15);
      topHole.bezierCurveTo(-0.15, 2.45, 0.20, 2.45, 0.50, 2.35);
      topHole.bezierCurveTo(1.10, 2.15, 1.10, 1.10, 0.50, 0.85);
      topHole.bezierCurveTo(0.20, 0.75, -0.15, 0.75, -0.15, 0.75);
      topHole.closePath();
      shape.holes.push(topHole);

      // Bottom Counter Hole (Silky smooth organic D-capsule)
      const botHole = new THREE.Path();
      botHole.moveTo(-0.15, -2.25);
      botHole.lineTo(-0.15, -0.65);
      botHole.bezierCurveTo(-0.15, -0.40, 0.25, -0.40, 0.60, -0.52);
      botHole.bezierCurveTo(1.25, -0.78, 1.25, -1.95, 0.60, -2.22);
      botHole.bezierCurveTo(0.25, -2.35, -0.15, -2.35, -0.15, -2.25);
      botHole.closePath();
      shape.holes.push(botHole);

      return shape;
    };

    const createEShape = () => {
      const shape = new THREE.Shape();
      const topY = 2.62;
      const botY = -2.42;

      // 1. Bottom-left spine anchor
      shape.moveTo(-1.15, botY);

      // 2. Left vertical spine ascending (tapered like '1')
      shape.lineTo(-0.90, topY);

      // 3. Top-left rounded shoulder
      shape.bezierCurveTo(-0.90, topY + 0.33, -0.60, 2.95, -0.15, 2.95);

      // 4. Top horizontal arm top edge
      shape.lineTo(1.50, 2.95);

      // 5. Top arm rounded terminal cap (matching '3' top bulb)
      shape.bezierCurveTo(1.95, 2.95, 1.95, 2.05, 1.50, 2.05);

      // 6. Top inner bay underside returning to left spine
      shape.lineTo(0.05, 2.05);
      // Smooth inner corner fillet into vertical spine wall
      shape.bezierCurveTo(-0.25, 2.05, -0.25, 1.65, -0.25, 1.15);
      shape.lineTo(-0.25, 0.80);
      // Smooth fillet turning out into middle arm
      shape.bezierCurveTo(-0.25, 0.40, 0.05, 0.40, 0.20, 0.40);

      // 7. Middle horizontal arm
      shape.lineTo(1.15, 0.40);
      // Middle arm rounded terminal cap
      shape.bezierCurveTo(1.55, 0.40, 1.55, -0.40, 1.15, -0.40);
      // Middle arm underside returning to left spine
      shape.lineTo(0.20, -0.40);
      // Smooth fillet turning down into lower bay
      shape.bezierCurveTo(0.05, -0.40, -0.25, -0.40, -0.25, -0.80);
      shape.lineTo(-0.25, -1.15);
      // Smooth fillet turning out into bottom arm
      shape.bezierCurveTo(-0.25, -1.65, -0.25, -2.05, 0.05, -2.05);

      // 8. Bottom horizontal arm top edge
      shape.lineTo(1.55, -2.05);
      // Bottom arm rounded terminal cap (matching '3' bottom bulb)
      shape.bezierCurveTo(2.05, -2.05, 2.05, -2.95, 1.55, -2.95);

      // 9. Bottom shelf returning to bottom-left corner
      shape.lineTo(-0.15, -2.95);
      // Bottom-left rounded shoulder
      shape.bezierCurveTo(-0.65, -2.95, -1.15, -2.75, -1.15, botY);

      shape.closePath();
      return shape;
    };

    const extrudeSettings = {
      steps: 1,
      depth: 0.96,
      bevelEnabled: true,
      bevelThickness: 0.075,
      bevelSize: 0.065,
      bevelOffset: 0,
      bevelSegments: 5,
    };

    // 13 Utopia Signature Dark Titanium Body with Champagne Gold Bevel Reflections (100% OPAQUE - Zero Wireframe Glitches)
    const mat13_One = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color(0x222428), // Dark architectural titanium
      roughness: 0.28,
      metalness: 0.82,
      clearcoat: 0.40,
      clearcoatRoughness: 0.18,
      reflectivity: 0.85,
    });

    const mat13_Three = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color(0x1e2024), // Deep obsidian graphite
      roughness: 0.30,
      metalness: 0.80,
      clearcoat: 0.40,
      clearcoatRoughness: 0.18,
      reflectivity: 0.85,
    });

    const matBE_B = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color(0x222428),
      roughness: 0.28,
      metalness: 0.82,
      clearcoat: 0.40,
      clearcoatRoughness: 0.18,
      reflectivity: 0.85,
    });

    const matBE_E = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color(0x1e2024),
      roughness: 0.30,
      metalness: 0.80,
      clearcoat: 0.40,
      clearcoatRoughness: 0.18,
      reflectivity: 0.85,
    });

    // ── SUBTLE ANIMATED GLOWING GOLDEN BORDER ACCENT MATERIAL ──────
    const goldEdgeMaterial = new THREE.LineBasicMaterial({
      color: new THREE.Color(0xf5d77f), // 18k Champagne Gold
      transparent: true,
      opacity: 0.42,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    // ── SUB-GROUP A: "13" ──────────────────────────────────────
    const thirteenGroup = new THREE.Group();

    const oneGeo = new THREE.ExtrudeGeometry(createOneShape(), extrudeSettings);
    oneGeo.center();
    const oneMesh = new THREE.Mesh(oneGeo, mat13_One);
    oneMesh.position.set(-1.35, 0, 0);
    thirteenGroup.add(oneMesh);

    const oneEdgesGeo = new THREE.EdgesGeometry(oneGeo, 26);
    const oneEdgeLine = new THREE.LineSegments(oneEdgesGeo, goldEdgeMaterial);
    oneMesh.add(oneEdgeLine);

    const threeGeo = new THREE.ExtrudeGeometry(createThreeShape(), extrudeSettings);
    threeGeo.center();
    const threeMesh = new THREE.Mesh(threeGeo, mat13_Three);
    threeMesh.position.set(0.65, 0, 0);
    thirteenGroup.add(threeMesh);

    const threeEdgesGeo = new THREE.EdgesGeometry(threeGeo, 26);
    const threeEdgeLine = new THREE.LineSegments(threeEdgesGeo, goldEdgeMaterial);
    threeMesh.add(threeEdgeLine);

    emblemGroup.add(thirteenGroup);

    // ── SUB-GROUP B: "BE" ──────────────────────────────────────
    const beGroup = new THREE.Group();

    const bGeo = new THREE.ExtrudeGeometry(createBShape(), extrudeSettings);
    bGeo.center();
    const bMesh = new THREE.Mesh(bGeo, matBE_B);
    bMesh.position.set(-1.45, 0, 0);
    beGroup.add(bMesh);

    const bEdgesGeo = new THREE.EdgesGeometry(bGeo, 26);
    const bEdgeLine = new THREE.LineSegments(bEdgesGeo, goldEdgeMaterial);
    bMesh.add(bEdgeLine);

    const eGeo = new THREE.ExtrudeGeometry(createEShape(), extrudeSettings);
    eGeo.center();
    const eMesh = new THREE.Mesh(eGeo, matBE_E);
    eMesh.position.set(1.25, 0, 0);
    beGroup.add(eMesh);

    const eEdgesGeo = new THREE.EdgesGeometry(eGeo, 26);
    const eEdgeLine = new THREE.LineSegments(eEdgesGeo, goldEdgeMaterial);
    eMesh.add(eEdgeLine);

    beGroup.visible = false;
    emblemGroup.add(beGroup);

    // Center the entire 13 emblem group in the screen and scale for Plus-X parity
    emblemGroup.scale.setScalar(0.80);
    emblemGroup.position.set(0, 0, -1.0);
    emblemGroup.rotation.set(0, 0, 0);
    scene.add(emblemGroup);
    groupRef.current = emblemGroup;

    // Studio Lighting (Deep Dark Body with Signature Champagne Gold Chamfer Rim Gleam)
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.4);
    scene.add(ambientLight);

    // Key Light
    const keyLight = new THREE.DirectionalLight(0xffffff, 3.8);
    keyLight.position.set(7, 9, 8);
    scene.add(keyLight);

    // Soft Fill Light
    const fillLight = new THREE.DirectionalLight(0xcccccc, 1.8);
    fillLight.position.set(-7, 2, 5);
    scene.add(fillLight);

    // Signature Champagne Gold Luxury Rim Accent Light (Inner Chamfers & Curves)
    const goldRimLight = new THREE.DirectionalLight(0xf4dfc8, 4.5);
    goldRimLight.position.set(4, -6, -3);
    scene.add(goldRimLight);

    // Dynamic Orbital Gold Border Sweep Light (Animates smoothly around model perimeter)
    const orbitGoldLight = new THREE.PointLight(0xffdf99, 4.5, 14);
    orbitGoldLight.position.set(0, 0, 2.5);
    scene.add(orbitGoldLight);

    // Left Rim Light (Edge Definition)
    const leftRimLight = new THREE.DirectionalLight(0xffffff, 3.2);
    leftRimLight.position.set(-8, 3, -4);
    scene.add(leftRimLight);

    // Top Overhead Light
    const topLight = new THREE.DirectionalLight(0xffffff, 1.5);
    topLight.position.set(0, 10, -1);
    scene.add(topLight);

    // Resize
    const onResize = () => {
      if (!container) return;
      const w = container.clientWidth || window.innerWidth;
      const h = container.clientHeight || window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", onResize);

    // Render loop — continuous scroll-driven kinematics & flawless solid 13 <-> BE transformation
    let rafId: number;
    let currentX = 0;
    let currentY = 0;
    let currentZ = -1.0;
    let currentRotX = 0.08;
    let currentRotY = 0;
    let currentRotZ = 0;
    let currentScale = 0.80;
    let currentMorph = 0; // 0 = 13, 1 = BE

    // Smoothstep easing helper
    const smoothstep = (min: number, max: number, value: number) => {
      const x = Math.max(0, Math.min(1, (value - min) / (max - min)));
      return x * x * (3 - 2 * x);
    };

    const animate = () => {
      rafId = requestAnimationFrame(animate);
      const p = Math.max(0, Math.min(1, progressRef.current));
      const entryP = Math.max(0, Math.min(1, entryProgressRef.current));

      // ── ANIMATED GOLDEN BORDER PATH HIGHLIGHT ──────────────────────
      const time = performance.now() * 0.0018;
      // Fluid orbital sweep around the letter contours (Lissajous path for organic depth)
      orbitGoldLight.position.x = Math.sin(time * 1.2) * 4.2 + currentX;
      orbitGoldLight.position.y = Math.cos(time * 1.5) * 3.4 + currentY;
      orbitGoldLight.position.z = 2.2 + Math.sin(time * 2.1) * 0.8;
      // Gentle breathing glow on edge lines
      goldEdgeMaterial.opacity = 0.32 + 0.22 * Math.sin(time * 2.4);

      if (emblemGroup) {
        // Slide smoothly from behind video during entry (entryP: 0 -> 1)
        const targetSlideY = (1 - entryP) * -4.2;

        let targetX = 0;
        let targetRotY = 0;
        let targetRotX = 0.08;
        let targetRotZ = 0;
        let targetScale = 0.88;
        let targetMorph = 0; // 0 = 13, 1 = BE

        if (p < 0.18) {
          // Act 0: Centered Manifesto -> Pure 13
          const localP = p / 0.18;
          targetX = 0;
          targetRotY = localP * 0.20;
          targetRotX = 0.06;
          targetRotZ = 0;
          targetScale = 0.88;
          targetMorph = 0;
        } else if (p >= 0.18 && p < 0.26) {
          // Transition 0 -> 1: Center -> Full Left Column sweep with 360° roll
          // Transforms dynamically from 13 -> BE during the 360° revolution
          const t = smoothstep(0.18, 0.26, p);
          targetX = -3.9 * t;
          targetRotY = 0.20 * (1 - t) + (Math.PI * 2 + 0.22) * t;
          targetRotX = 0.06 + Math.sin(t * Math.PI) * 0.12;
          targetRotZ = 0.04 * t;
          targetScale = 0.88 + 0.08 * t;
          targetMorph = t; // Seamless transition 13 -> BE
        } else if (p >= 0.26 && p < 0.46) {
          // Act 1: CREATE (Settled Full Left Column as BE)
          const localP = (p - 0.26) / 0.20;
          targetX = -3.9;
          targetRotY = Math.PI * 2 + 0.22 + Math.sin(localP * Math.PI) * 0.08;
          targetRotX = 0.08 + Math.cos(localP * Math.PI) * 0.03;
          targetRotZ = 0.04;
          targetScale = 0.96;
          targetMorph = 1; // Pure BE
        } else if (p >= 0.46 && p < 0.54) {
          // Transition 1 -> 2: Left -> Right Column sweep with full 360° roll
          // Transforms dynamically from BE -> 13 during the sweep
          const t = smoothstep(0.46, 0.54, p);
          targetX = -3.9 + 7.8 * t;
          targetRotY = (Math.PI * 2 + 0.22) * (1 - t) + (Math.PI * 4 - 0.22) * t;
          targetRotX = 0.08 + Math.sin(t * Math.PI) * 0.14;
          targetRotZ = 0.04 * (1 - 2 * t);
          targetScale = 0.96;
          targetMorph = 1 - t; // Seamless transition BE -> 13
        } else if (p >= 0.54 && p < 0.74) {
          // Act 2: BUILD (Settled Full Right Column as 13)
          const localP = (p - 0.54) / 0.20;
          targetX = 3.9;
          targetRotY = Math.PI * 4 - 0.22 - Math.sin(localP * Math.PI) * 0.08;
          targetRotX = 0.08 + Math.cos(localP * Math.PI) * 0.03;
          targetRotZ = -0.04;
          targetScale = 0.96;
          targetMorph = 0; // Pure 13
        } else if (p >= 0.74 && p < 0.82) {
          // Transition 2 -> 3: Right -> Left Column sweep with full 360° roll
          // Transforms dynamically from 13 -> BE during the sweep
          const t = smoothstep(0.74, 0.82, p);
          targetX = 3.9 - 7.8 * t;
          targetRotY = (Math.PI * 4 - 0.22) * (1 - t) + (Math.PI * 6 + 0.22) * t;
          targetRotX = 0.08 + Math.sin(t * Math.PI) * 0.14;
          targetRotZ = -0.04 * (1 - 2 * t);
          targetScale = 0.96;
          targetMorph = t; // Seamless transition 13 -> BE
        } else if (p >= 0.82 && p < 0.94) {
          // Act 3: GROW (Settled Full Left Column as BE)
          const localP = (p - 0.82) / 0.12;
          targetX = -3.9;
          targetRotY = Math.PI * 6 + 0.22 + Math.sin(localP * Math.PI) * 0.08;
          targetRotX = 0.08 + Math.cos(localP * Math.PI) * 0.03;
          targetRotZ = 0.04;
          targetScale = 0.96;
          targetMorph = 1; // Pure BE
        } else {
          // Finale [0.94 -> 1.00]: Sweeps to Center, settles back to 13
          const t = smoothstep(0.94, 1.00, p);
          targetX = -3.9 * (1 - t);
          targetRotY = (Math.PI * 6 + 0.22) * (1 - t) + (Math.PI * 8) * t;
          targetRotX = 0.08;
          targetRotZ = 0.04 * (1 - t);
          targetScale = 0.96 - 0.08 * t;
          targetMorph = 1 - t; // Settles to 13
        }

        // High-inertia smooth damping for cinematic motion & transformation
        const dampFactor = 0.036;
        const morphDamp = 0.060;

        currentX += (targetX - currentX) * dampFactor;
        currentY += (targetSlideY - currentY) * dampFactor;
        currentScale += (targetScale - currentScale) * dampFactor;
        currentRotX += (targetRotX - currentRotX) * dampFactor;
        currentRotY += (targetRotY - currentRotY) * dampFactor;
        currentRotZ += (targetRotZ - currentRotZ) * dampFactor;
        currentMorph += (targetMorph - currentMorph) * morphDamp;

        emblemGroup.position.set(currentX, currentY, currentZ);
        emblemGroup.scale.setScalar(currentScale);
        emblemGroup.rotation.set(currentRotX, currentRotY, currentRotZ);

        // Solid Opaque Transition — flips seamlessly during the edge-on revolution without ANY wireframe or transparency sorting artifact
        thirteenGroup.visible = currentMorph < 0.50;
        beGroup.visible = currentMorph >= 0.50;
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", onResize);
      if (renderer.domElement) {
        renderer.domElement.remove();
      }
      oneGeo.dispose();
      threeGeo.dispose();
      oneEdgesGeo.dispose();
      threeEdgesGeo.dispose();
      bGeo.dispose();
      eGeo.dispose();
      bEdgesGeo.dispose();
      eEdgesGeo.dispose();
      goldEdgeMaterial.dispose();
      mat13_One.dispose();
      mat13_Three.dispose();
      matBE_B.dispose();
      matBE_E.dispose();
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
