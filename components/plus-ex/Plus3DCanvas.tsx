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
      depth: 0.96,
      bevelEnabled: true,
      bevelThickness: 0.075,
      bevelSize: 0.065,
      bevelOffset: 0,
      bevelSegments: 5,
    };

    // 13 Utopia Signature Dark Titanium Obsidian Physical Material (Pure Architectural Metal)
    const matTitaniumOne = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color(0x222428), // Dark architectural titanium
      roughness: 0.28,
      metalness: 0.82,
      clearcoat: 0.45,
      clearcoatRoughness: 0.16,
      reflectivity: 0.90,
    });

    const matTitaniumThree = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color(0x1e2024), // Deep obsidian graphite
      roughness: 0.30,
      metalness: 0.80,
      clearcoat: 0.45,
      clearcoatRoughness: 0.16,
      reflectivity: 0.90,
    });

    // ── 01. SUB-GROUP: "13" EMBLEM ─────────────────────────────
    const thirteenGroup = new THREE.Group();

    const oneGeo = new THREE.ExtrudeGeometry(createOneShape(), extrudeSettings);
    oneGeo.center();
    const oneMesh = new THREE.Mesh(oneGeo, matTitaniumOne);
    oneMesh.position.set(-1.35, 0, 0);
    thirteenGroup.add(oneMesh);

    const threeGeo = new THREE.ExtrudeGeometry(createThreeShape(), extrudeSettings);
    threeGeo.center();
    const threeMesh = new THREE.Mesh(threeGeo, matTitaniumThree);
    threeMesh.position.set(0.65, 0, 0);
    thirteenGroup.add(threeMesh);

    emblemGroup.add(thirteenGroup);

    // ── 02. SUB-GROUP: "BE" MONOLITH EMBLEM ────────────────────
    const beGroup = new THREE.Group();

    // "B": Signature "1" + "3" docked together from the 13 brand mark
    const bGroup = new THREE.Group();
    const bSpine = new THREE.Mesh(oneGeo, matTitaniumOne);
    bSpine.position.set(-0.95, 0, 0);
    const bBowls = new THREE.Mesh(threeGeo, matTitaniumThree);
    bBowls.position.set(0.60, 0, 0);
    bGroup.add(bSpine);
    bGroup.add(bBowls);
    bGroup.position.set(-1.85, 0, 0);
    beGroup.add(bGroup);

    // "E": Organic "3" ribbon mirrored with balanced kerning space
    const eGeo = new THREE.ExtrudeGeometry(createMirroredThreeShape(), extrudeSettings);
    eGeo.center();
    const eMesh = new THREE.Mesh(eGeo, matTitaniumThree);
    eMesh.position.set(1.85, 0, 0);
    beGroup.add(eMesh);

    beGroup.visible = false;
    emblemGroup.add(beGroup);

    // Center the entire 13 emblem group in the screen
    emblemGroup.scale.setScalar(0.80);
    emblemGroup.position.set(0, 0, -1.0);
    emblemGroup.rotation.set(0, 0, 0);
    scene.add(emblemGroup);
    groupRef.current = emblemGroup;

    // Studio Lighting (Crisp Dark Body with Luxury Rim Highlights)
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

    // Champagne Rim Light (Accentuates Curves & Chamfers)
    const goldRimLight = new THREE.DirectionalLight(0xf4dfc8, 4.5);
    goldRimLight.position.set(4, -6, -3);
    scene.add(goldRimLight);

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

    // Render loop — continuous scroll-driven cinematic kinematics & clean 13 ⇄ BE transformations
    let rafId: number;
    let currentX = 0;
    let currentY = 0;
    let currentZ = -1.0;
    let currentRotX = 0.08;
    let currentRotY = 0;
    let currentRotZ = 0;
    let currentScale = 0.80;
    let currentMorph = 0; // 0 = "13", 1.0 = "BE"

    // Smoothstep easing helper
    const smoothstep = (min: number, max: number, value: number) => {
      const x = Math.max(0, Math.min(1, (value - min) / (max - min)));
      return x * x * (3 - 2 * x);
    };

    const animate = () => {
      rafId = requestAnimationFrame(animate);
      const p = Math.max(0, Math.min(1, progressRef.current));
      const entryP = Math.max(0, Math.min(1, entryProgressRef.current));

      if (emblemGroup) {
        // Slide smoothly from behind video during entry (entryP: 0 -> 1)
        const targetSlideY = (1 - entryP) * -4.2;

        let targetX = 0;
        let targetRotY = 0;
        let targetRotX = 0.08;
        let targetRotZ = 0;
        let targetScale = 0.88;
        let targetMorph = 0; // 0 = 13, 1.0 = BE

        if (p < 0.16) {
          // Act 0: Centered Manifesto -> Pure 13
          const localP = p / 0.16;
          targetX = 0;
          targetRotY = localP * 0.20;
          targetRotX = 0.06;
          targetRotZ = 0;
          targetScale = 0.88;
          targetMorph = 0;
        } else if (p >= 0.16 && p < 0.28) {
          // Transition 0 -> 1: Center -> Left Column with 360° spin
          // Transforms dynamically from 13 -> BE during the spin
          const t = smoothstep(0.16, 0.28, p);
          targetX = -3.9 * t;
          targetRotY = 0.20 * (1 - t) + (Math.PI * 2 + 0.22) * t;
          targetRotX = 0.06 + Math.sin(t * Math.PI) * 0.12;
          targetRotZ = 0.04 * t;
          targetScale = 0.88 + 0.08 * t;
          targetMorph = t;
        } else if (p >= 0.28 && p < 0.46) {
          // Act 1: CREATE (Settled Full Left Column as BE)
          const localP = (p - 0.28) / 0.18;
          targetX = -3.9;
          targetRotY = Math.PI * 2 + 0.22 + Math.sin(localP * Math.PI) * 0.08;
          targetRotX = 0.08 + Math.cos(localP * Math.PI) * 0.03;
          targetRotZ = 0.04;
          targetScale = 0.96;
          targetMorph = 1.0;
        } else if (p >= 0.46 && p < 0.54) {
          // Transition 1 -> 2: Left -> Right Column sweep with 360° spin
          // Transforms dynamically from BE -> 13 during the sweep
          const t = smoothstep(0.46, 0.54, p);
          targetX = -3.9 + 7.8 * t;
          targetRotY = (Math.PI * 2 + 0.22) * (1 - t) + (Math.PI * 4 - 0.22) * t;
          targetRotX = 0.08 + Math.sin(t * Math.PI) * 0.14;
          targetRotZ = 0.04 * (1 - 2 * t);
          targetScale = 0.96;
          targetMorph = 1.0 - t;
        } else if (p >= 0.54 && p < 0.74) {
          // Act 2: BUILD (Settled Full Right Column as 13)
          const localP = (p - 0.54) / 0.20;
          targetX = 3.9;
          targetRotY = Math.PI * 4 - 0.22 - Math.sin(localP * Math.PI) * 0.08;
          targetRotX = 0.08 + Math.cos(localP * Math.PI) * 0.03;
          targetRotZ = -0.04;
          targetScale = 0.96;
          targetMorph = 0;
        } else if (p >= 0.74 && p < 0.82) {
          // Transition 2 -> 3: Right -> Left Column sweep with 360° spin
          // Transforms dynamically from 13 -> BE during the sweep
          const t = smoothstep(0.74, 0.82, p);
          targetX = 3.9 - 7.8 * t;
          targetRotY = (Math.PI * 4 - 0.22) * (1 - t) + (Math.PI * 6 + 0.22) * t;
          targetRotX = 0.08 + Math.sin(t * Math.PI) * 0.14;
          targetRotZ = -0.04 * (1 - 2 * t);
          targetScale = 0.96;
          targetMorph = t;
        } else if (p >= 0.82 && p < 0.94) {
          // Act 3: GROW (Settled Full Left Column as BE)
          const localP = (p - 0.82) / 0.12;
          targetX = -3.9;
          targetRotY = Math.PI * 6 + 0.22 + Math.sin(localP * Math.PI) * 0.08;
          targetRotX = 0.08 + Math.cos(localP * Math.PI) * 0.03;
          targetRotZ = 0.04;
          targetScale = 0.96;
          targetMorph = 1.0;
        } else {
          // Finale [0.94 -> 1.00]: Sweeps to Center, settles back to 13
          const t = smoothstep(0.94, 1.00, p);
          targetX = -3.9 * (1 - t);
          targetRotY = (Math.PI * 6 + 0.22) * (1 - t) + (Math.PI * 8) * t;
          targetRotX = 0.08;
          targetRotZ = 0.04 * (1 - t);
          targetScale = 0.96 - 0.08 * t;
          targetMorph = 1.0 - t;
        }

        // High-inertia smooth damping for cinematic motion & transformation
        const dampFactor = 0.036;
        const morphDamp = 0.065;

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

        // Seamless solid edge-on flip (0 wireframe or depth clipping)
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
      eGeo.dispose();
      matTitaniumOne.dispose();
      matTitaniumThree.dispose();
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
