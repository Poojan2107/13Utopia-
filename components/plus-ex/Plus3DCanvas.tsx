"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import styles from "@/styles/plus-ex/Plus3DCanvas.module.css";

interface Plus3DCanvasProps {
  progress?: number;
  className?: string;
}

/**
 * 3D 13 Utopia Architectural Emblem Canvas
 * - Starts at progress 0 as the iconic, pristine front-facing "1 3" emblem.
 * - Undergoes a continuous 360-degree spatial tumble through the section scroll.
 * - Resolves at progress 1 back to the exact front-facing "1 3" emblem.
 * - High-craft physical shaders: 24k gold vertical "1" pillar + obsidian titanium "3" bars.
 */
export function Plus3DCanvas({ progress = 0, className }: Plus3DCanvasProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const groupRef = useRef<THREE.Group | null>(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });
  const progressRef = useRef(progress);

  useEffect(() => {
    progressRef.current = progress;
  }, [progress]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    // Scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);

    // Camera with balanced focal length
    const camera = new THREE.PerspectiveCamera(36, width / height, 0.1, 100);
    camera.position.set(0.5, 0, 10.8);

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      alpha: false,
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

    // Helper: Precision Pill Geometry
    const createPillGeometry = (w: number, h: number, depth: number) => {
      const shape = new THREE.Shape();
      const hw = w / 2;
      const hh = h / 2;
      const r = Math.min(hw, hh);

      if (h >= w) {
        // Vertical pill
        const straightH = hh - r;
        shape.moveTo(-hw, -straightH);
        shape.lineTo(-hw, straightH);
        shape.absarc(0, straightH, r, Math.PI, 0, true);
        shape.lineTo(hw, -straightH);
        shape.absarc(0, -straightH, r, 0, Math.PI, true);
      } else {
        // Horizontal pill
        const straightW = hw - r;
        shape.moveTo(-straightW, -hh);
        shape.lineTo(straightW, -hh);
        shape.absarc(straightW, 0, r, -Math.PI / 2, Math.PI / 2, false);
        shape.lineTo(-straightW, hh);
        shape.absarc(-straightW, 0, r, Math.PI / 2, (3 * Math.PI) / 2, false);
      }
      shape.closePath();

      const extrudeSettings = {
        steps: 1,
        depth: depth,
        bevelEnabled: true,
        bevelThickness: 0.05,
        bevelSize: 0.05,
        bevelOffset: 0,
        bevelSegments: 5,
      };

      const geo = new THREE.ExtrudeGeometry(shape, extrudeSettings);
      geo.center();
      return geo;
    };

    // Premium Materials
    // 24k Liquid Gold Physical Material for "1" Pillar
    const goldMaterial = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color(0xd8ad42),
      emissive: new THREE.Color(0x241804),
      roughness: 0.22,
      metalness: 0.94,
      clearcoat: 0.8,
      clearcoatRoughness: 0.14,
      reflectivity: 0.96,
    });

    // Brushed Obsidian Titanium Physical Material for "3" Bars
    const titaniumMaterial = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color(0x383838),
      emissive: new THREE.Color(0x0c0c0c),
      roughness: 0.32,
      metalness: 0.84,
      clearcoat: 0.65,
      clearcoatRoughness: 0.18,
      reflectivity: 0.9,
    });

    const depth = 0.95;

    // 1. The "1" Pillar: Vertical Golden Monolith
    const oneGeo = createPillGeometry(0.72, 5.8, depth);
    const oneMesh = new THREE.Mesh(oneGeo, goldMaterial);
    oneMesh.position.set(-1.75, 0, 0);
    emblemGroup.add(oneMesh);

    // 2. The "3" Bars: Three Stacked Titanium Horizontal Bars
    const barWidth = 3.2;
    const barHeight = 0.72;
    const threeX = 0.75;
    const barSpacing = 2.05;

    // Top Bar
    const topGeo = createPillGeometry(barWidth, barHeight, depth);
    const topMesh = new THREE.Mesh(topGeo, titaniumMaterial);
    topMesh.position.set(threeX, barSpacing, 0);
    emblemGroup.add(topMesh);

    // Middle Bar
    const midGeo = createPillGeometry(barWidth, barHeight, depth);
    const midMesh = new THREE.Mesh(midGeo, titaniumMaterial);
    midMesh.position.set(threeX, 0, 0);
    emblemGroup.add(midMesh);

    // Bottom Bar
    const botGeo = createPillGeometry(barWidth, barHeight, depth);
    const botMesh = new THREE.Mesh(botGeo, titaniumMaterial);
    botMesh.position.set(threeX, -barSpacing, 0);
    emblemGroup.add(botMesh);

    // Position the group on the right side of the canvas in deep space
    emblemGroup.position.set(1.5, 0, -1.4);
    emblemGroup.rotation.set(0, 0, 0); // starts pristine front-facing 1 3
    scene.add(emblemGroup);
    groupRef.current = emblemGroup;

    // High-End Studio Lighting Setup
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    // Key Light: Sharp directional light highlighting chamfered edges
    const keyLight = new THREE.DirectionalLight(0xffffff, 3.4);
    keyLight.position.set(6, 8, 8);
    scene.add(keyLight);

    // Fill Light: Soft ambient fill for dark facets
    const fillLight = new THREE.DirectionalLight(0xaaaaaa, 1.8);
    fillLight.position.set(-7, 2, 5);
    scene.add(fillLight);

    // Warm Gold Rim Light: 13 Utopia luxury signature glint
    const goldRimLight = new THREE.DirectionalLight(0xe8c56a, 2.8);
    goldRimLight.position.set(4, -6, -3);
    scene.add(goldRimLight);

    // Top Overhead Light
    const topLight = new THREE.DirectionalLight(0xffffff, 1.6);
    topLight.position.set(0, 9, 0);
    scene.add(topLight);

    // Mouse tracking
    const onMouseMove = (e: MouseEvent) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      mouseRef.current.targetX = (e.clientX - cx) / cx;
      mouseRef.current.targetY = (e.clientY - cy) / cy;
    };
    window.addEventListener("mousemove", onMouseMove, { passive: true });

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

    // Render loop
    let rafId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      rafId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();
      const p = Math.max(0, Math.min(1, progressRef.current));

      // Mouse inertia
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;

      if (emblemGroup) {
        /**
         * FULL 360-DEGREE ROTATION SEQUENCE:
         * - At progress 0 (entry): rotY = 0, rotX = 0, rotZ = 0 (Pristine 1 3 face)
         * - During progress (0 -> 1): full 360-deg rotation on Y (p * Math.PI * 2)
         *   + smooth sinusoidal architectural tilt on X and Z
         * - At progress 1 (exit): rotY = 2*PI (which equals 0 deg), rotX = 0, rotZ = 0 (Resolves back to pristine 1 3 face)
         */
        const fullSpinY = p * Math.PI * 2;
        const archTiltX = Math.sin(p * Math.PI) * 0.48;
        const archTiltZ = Math.sin(p * Math.PI) * 0.24;
        const idleFloat = Math.sin(elapsed * 0.5) * 0.025;

        const targetRotX = archTiltX + mouseRef.current.y * 0.16 + idleFloat;
        const targetRotY = fullSpinY + mouseRef.current.x * 0.22;
        const targetRotZ = archTiltZ + mouseRef.current.x * 0.08;

        emblemGroup.rotation.x += (targetRotX - emblemGroup.rotation.x) * 0.08;
        emblemGroup.rotation.y += (targetRotY - emblemGroup.rotation.y) * 0.08;
        emblemGroup.rotation.z += (targetRotZ - emblemGroup.rotation.z) * 0.08;

        // Subtle position depth shift
        const targetPosX = 1.5 + mouseRef.current.x * 0.3 - p * 0.35;
        const targetPosY = 0 - mouseRef.current.y * 0.2 + Math.sin(elapsed * 0.8) * 0.04;
        emblemGroup.position.x += (targetPosX - emblemGroup.position.x) * 0.06;
        emblemGroup.position.y += (targetPosY - emblemGroup.position.y) * 0.06;
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      oneGeo.dispose();
      topGeo.dispose();
      midGeo.dispose();
      botGeo.dispose();
      goldMaterial.dispose();
      titaniumMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`${styles.canvasWrap} ${className ?? ""}`}
      aria-hidden="true"
    />
  );
}
