"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import styles from "@/styles/plus-ex/Plus3DCanvas.module.css";

export interface Plus3DCanvasProps {
  progress?: number;
  actIndex?: number;
  className?: string;
  theme?: "dark" | "light" | "transparent";
}

/**
 * 3D 13 Utopia Architectural Emblem Canvas
 * Plus-X Exact Materiality & Lighting:
 * Matte architectural graphite monoliths with razor chamfers, deep studio lighting,
 * responsive spatial shifts, and a full continuous 360-degree rotation story.
 */
export function Plus3DCanvas({
  progress = 0,
  actIndex = 0,
  className,
  theme = "transparent",
}: Plus3DCanvasProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const groupRef = useRef<THREE.Group | null>(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });
  const progressRef = useRef(progress);
  const actRef = useRef(actIndex);

  useEffect(() => {
    progressRef.current = progress;
  }, [progress]);

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
      color: new THREE.Color(0x2d2d2d),
      roughness: 0.35,
      metalness: 0.72,
    });

    const horizontalBeamMaterial = new THREE.MeshStandardMaterial({
      color: new THREE.Color(0x242424),
      roughness: 0.38,
      metalness: 0.68,
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
    emblemGroup.rotation.set(0, 0, 0);
    scene.add(emblemGroup);
    groupRef.current = emblemGroup;

    // Studio Lighting (Crisp Chamfer Definition & Bevel Highlights)
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.4);
    scene.add(ambientLight);

    // Key Light
    const keyLight = new THREE.DirectionalLight(0xffffff, 3.4);
    keyLight.position.set(7, 9, 8);
    scene.add(keyLight);

    // Fill Light
    const fillLight = new THREE.DirectionalLight(0xbbbbbb, 1.8);
    fillLight.position.set(-7, 2, 5);
    scene.add(fillLight);

    // Champagne/Gold Luxury Rim Accent Light
    const goldRimLight = new THREE.DirectionalLight(0xf4dfc8, 2.5);
    goldRimLight.position.set(4, -6, -3);
    scene.add(goldRimLight);

    // Top Overhead Light
    const topLight = new THREE.DirectionalLight(0xffffff, 1.5);
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
    const clock = new THREE.Clock();

    const animate = () => {
      rafId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();
      const p = Math.max(0, Math.min(1, progressRef.current));
      const act = actRef.current;
      const isMobile = window.innerWidth <= 900;

      // Mouse inertia
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;

      if (emblemGroup) {
        /**
         * FULL 360-DEGREE CONTINUOUS NARRATIVE ROTATION:
         * - Multi-act dynamic spin, tilt, and spatial positioning
         */
        const fullSpinY = p * Math.PI * 2;
        const archTiltX = Math.sin(p * Math.PI) * 0.42;
        const archTiltZ = Math.sin(p * Math.PI * 1.5) * 0.18;
        const idleFloat = Math.sin(elapsed * 0.6) * 0.025;

        const targetRotX = archTiltX + mouseRef.current.y * 0.12 + idleFloat;
        const targetRotY = fullSpinY + mouseRef.current.x * 0.18;
        const targetRotZ = archTiltZ + mouseRef.current.x * 0.06;

        emblemGroup.rotation.x += (targetRotX - emblemGroup.rotation.x) * 0.08;
        emblemGroup.rotation.y += (targetRotY - emblemGroup.rotation.y) * 0.08;
        emblemGroup.rotation.z += (targetRotZ - emblemGroup.rotation.z) * 0.08;

        // Dynamic spatial translation according to Act
        let actTargetX = 0;
        let actTargetY = 0;
        let actTargetZ = -1.4;

        if (isMobile) {
          actTargetY = act === 1 ? -1.0 : act === 2 ? 1.0 : 0;
          actTargetZ = -2.8;
        } else {
          if (act === 0) {
            // Genesis: Centered monumental
            actTargetX = 0;
            actTargetY = 0;
          } else if (act === 1) {
            // Triad of Creation: Offset to right, leaving left for editorial cards
            actTargetX = 2.0;
            actTargetY = 0.2;
          } else if (act === 2) {
            // Architectural Benchmarks: Offset to left, leaving right for metrics
            actTargetX = -2.0;
            actTargetY = -0.1;
          } else {
            // Initiation Finale: Centered
            actTargetX = 0;
            actTargetY = 0;
          }
        }

        const finalX = actTargetX + mouseRef.current.x * 0.3;
        const finalY = actTargetY - mouseRef.current.y * 0.2 + Math.sin(elapsed * 0.8) * 0.03;
        const finalZ = actTargetZ;

        emblemGroup.position.x += (finalX - emblemGroup.position.x) * 0.06;
        emblemGroup.position.y += (finalY - emblemGroup.position.y) * 0.06;
        emblemGroup.position.z += (finalZ - emblemGroup.position.z) * 0.06;
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
      threeGeo.dispose();
      verticalBeamMaterial.dispose();
      horizontalBeamMaterial.dispose();
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
