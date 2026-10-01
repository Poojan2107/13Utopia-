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

    // Helper: Tapered Architectural Monolith for "1"
    const createOneShape = () => {
      const shape = new THREE.Shape();
      const topR = 0.38;
      const botR = 0.62;
      const topY = 2.72;
      const botY = -2.52;

      shape.moveTo(-botR, botY);
      shape.lineTo(-topR, topY);
      shape.absarc(0, topY, topR, Math.PI, 0, false);
      shape.lineTo(botR, botY);
      shape.absarc(0, botY, botR, 0, Math.PI, false);
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

    const extrudeSettings = {
      steps: 1,
      depth: 0.95,
      bevelEnabled: true,
      bevelThickness: 0.045,
      bevelSize: 0.045,
      bevelOffset: 0,
      bevelSegments: 4,
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

    // 1. The "1" Tapered Monolith
    const oneGeo = new THREE.ExtrudeGeometry(createOneShape(), extrudeSettings);
    oneGeo.center();
    const oneMesh = new THREE.Mesh(oneGeo, verticalBeamMaterial);
    oneMesh.position.set(-1.85, 0, 0);
    emblemGroup.add(oneMesh);

    // 2. The "3" Brand Ribbon
    const threeGeo = new THREE.ExtrudeGeometry(createThreeShape(), extrudeSettings);
    threeGeo.center();
    const threeMesh = new THREE.Mesh(threeGeo, horizontalBeamMaterial);
    threeMesh.position.set(0.95, 0, 0);
    emblemGroup.add(threeMesh);

    // Center the entire 13 emblem group in the screen
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
