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
 * Plus-X Exact Materiality & Lighting:
 * Matte architectural graphite monoliths with razor chamfers, deep studio lighting,
 * and a full 360-degree rotation loop that starts and ends on the iconic front-facing "1 3" emblem.
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

    // Camera with cinematic perspective centered
    const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 100);
    camera.position.set(0, 0, 11.2);

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
    renderer.toneMappingExposure = 1.3;
    container.appendChild(renderer.domElement);

    // 3D "13" Emblem Group
    const emblemGroup = new THREE.Group();

    // Helper: Precision Pill Geometry with Crisp Chamfer
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
        bevelThickness: 0.045,
        bevelSize: 0.045,
        bevelOffset: 0,
        bevelSegments: 4,
      };

      const geo = new THREE.ExtrudeGeometry(shape, extrudeSettings);
      geo.center();
      return geo;
    };

    // Plus-X Exact Architectural Graphite & Titanium Materials
    const verticalBeamMaterial = new THREE.MeshStandardMaterial({
      color: new THREE.Color(0x343434), // Plus-X signature dark architectural graphite
      roughness: 0.38,
      metalness: 0.65,
    });

    const horizontalBeamMaterial = new THREE.MeshStandardMaterial({
      color: new THREE.Color(0x2c2c2c), // Plus-X refined deep charcoal
      roughness: 0.42,
      metalness: 0.62,
    });

    const depth = 0.95;

    // 1. The "1" Pillar: Vertical Architectural Pillar on Left
    const oneGeo = createPillGeometry(0.72, 6.2, depth);
    const oneMesh = new THREE.Mesh(oneGeo, verticalBeamMaterial);
    oneMesh.position.set(-2.2, 0, 0);
    emblemGroup.add(oneMesh);

    // 2. The "3" Bars: Three Horizontal Architectural Bars on Right
    const barWidth = 3.6;
    const barHeight = 0.72;
    const threeX = 0.76;
    const barSpacing = 2.2;

    // Top Bar
    const topGeo = createPillGeometry(barWidth, barHeight, depth);
    const topMesh = new THREE.Mesh(topGeo, horizontalBeamMaterial);
    topMesh.position.set(threeX, barSpacing, 0);
    emblemGroup.add(topMesh);

    // Middle Bar
    const midGeo = createPillGeometry(barWidth, barHeight, depth);
    const midMesh = new THREE.Mesh(midGeo, horizontalBeamMaterial);
    midMesh.position.set(threeX, 0, 0);
    emblemGroup.add(midMesh);

    // Bottom Bar
    const botGeo = createPillGeometry(barWidth, barHeight, depth);
    const botMesh = new THREE.Mesh(botGeo, horizontalBeamMaterial);
    botMesh.position.set(threeX, -barSpacing, 0);
    emblemGroup.add(botMesh);

    // Center the emblem group in the screen in deep spatial background
    emblemGroup.position.set(0, 0, -1.4);
    emblemGroup.rotation.set(0, 0, 0); // Starts pristine front-facing "1 3"
    scene.add(emblemGroup);
    groupRef.current = emblemGroup;

    // Studio Lighting (Plus-X Clear Bevel Definition)
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.3);
    scene.add(ambientLight);

    // Key Light: Sharp directional light highlighting chamfered edges
    const keyLight = new THREE.DirectionalLight(0xffffff, 3.2);
    keyLight.position.set(7, 9, 8);
    scene.add(keyLight);

    // Fill Light: Soft ambient fill for dark facets
    const fillLight = new THREE.DirectionalLight(0xbbbbbb, 1.6);
    fillLight.position.set(-7, 2, 5);
    scene.add(fillLight);

    // Subtle Gold Rim Accent Light: 13 Utopia luxury signature
    const goldRimLight = new THREE.DirectionalLight(0xe8c56a, 2.2);
    goldRimLight.position.set(4, -6, -3);
    scene.add(goldRimLight);

    // Overhead Light
    const topLight = new THREE.DirectionalLight(0xffffff, 1.4);
    topLight.position.set(0, 10, -1);
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
         * - At progress 1 (exit): rotY = 2*PI (= 0 deg), rotX = 0, rotZ = 0 (Resolves back to pristine 1 3 face)
         */
        const fullSpinY = p * Math.PI * 2;
        const archTiltX = Math.sin(p * Math.PI) * 0.45;
        const archTiltZ = Math.sin(p * Math.PI) * 0.22;
        const idleFloat = Math.sin(elapsed * 0.5) * 0.02;

        const targetRotX = archTiltX + mouseRef.current.y * 0.15 + idleFloat;
        const targetRotY = fullSpinY + mouseRef.current.x * 0.2;
        const targetRotZ = archTiltZ + mouseRef.current.x * 0.08;

        emblemGroup.rotation.x += (targetRotX - emblemGroup.rotation.x) * 0.08;
        emblemGroup.rotation.y += (targetRotY - emblemGroup.rotation.y) * 0.08;
        emblemGroup.rotation.z += (targetRotZ - emblemGroup.rotation.z) * 0.08;

        const targetPosX = 0 + mouseRef.current.x * 0.3;
        const targetPosY = 0 - mouseRef.current.y * 0.2 + Math.sin(elapsed * 0.8) * 0.03;
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
      verticalBeamMaterial.dispose();
      horizontalBeamMaterial.dispose();
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
