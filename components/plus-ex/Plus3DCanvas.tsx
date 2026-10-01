"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import styles from "@/styles/plus-ex/Plus3DCanvas.module.css";

interface Plus3DCanvasProps {
  progress?: number;
  className?: string;
}

/**
 * 3D Architectural Monolith "13" Emblem Canvas
 * Accurately calibrated to Plus-X 15th anniversary material color & lighting:
 * Refined architectural matte graphite/titanium monoliths with crisp chamfers and gold rim lighting.
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

    // Camera with deep spatial perspective
    const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 100);
    camera.position.set(0.6, 0, 11);

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

    // 3D "13" Architectural Monolith Group
    const emblemGroup = new THREE.Group();

    // Helper: Precision Slender Beveled Beam
    const createSlenderBeam = (w: number, h: number, depth: number, bevel: number) => {
      const shape = new THREE.Shape();
      const hw = w / 2;
      const hh = h / 2;

      shape.moveTo(-hw, hh);
      shape.lineTo(hw, hh);
      shape.lineTo(hw, -hh);
      shape.lineTo(-hw, -hh);
      shape.closePath();

      const extrudeSettings = {
        steps: 1,
        depth: depth,
        bevelEnabled: true,
        bevelThickness: bevel,
        bevelSize: bevel,
        bevelOffset: 0,
        bevelSegments: 4,
      };

      const geo = new THREE.ExtrudeGeometry(shape, extrudeSettings);
      geo.center();
      return geo;
    };

    // Plus-X Exact Architectural Graphite & Titanium Materials
    const verticalBeamMaterial = new THREE.MeshStandardMaterial({
      color: new THREE.Color(0x3a3a3a), // Plus-X signature architectural graphite
      roughness: 0.38,
      metalness: 0.68,
    });

    const horizontalBeamMaterial = new THREE.MeshStandardMaterial({
      color: new THREE.Color(0x343434), // Plus-X refined deep charcoal
      roughness: 0.42,
      metalness: 0.65,
    });

    const beamDepth = 0.95;
    const bevelSize = 0.04;

    // 1. The "1" Beam: Slender Vertical Pillar
    const oneWidth = 0.62;
    const oneHeight = 6.6;
    const oneGeo = createSlenderBeam(oneWidth, oneHeight, beamDepth, bevelSize);
    const oneMesh = new THREE.Mesh(oneGeo, verticalBeamMaterial);
    oneMesh.position.set(-2.1, 0, 0);
    emblemGroup.add(oneMesh);

    // 2. The "3" Beams: Three Horizontal Beams
    const barWidth = 4.0;
    const barHeight = 0.62;
    const threeX = 0.85;
    const barSpacing = 2.35;

    // Top horizontal beam
    const topGeo = createSlenderBeam(barWidth, barHeight, beamDepth, bevelSize);
    const topMesh = new THREE.Mesh(topGeo, horizontalBeamMaterial);
    topMesh.position.set(threeX, barSpacing, 0);
    emblemGroup.add(topMesh);

    // Middle horizontal beam
    const midGeo = createSlenderBeam(barWidth, barHeight, beamDepth, bevelSize);
    const midMesh = new THREE.Mesh(midGeo, horizontalBeamMaterial);
    midMesh.position.set(threeX, 0, 0);
    emblemGroup.add(midMesh);

    // Bottom horizontal beam
    const botGeo = createSlenderBeam(barWidth, barHeight, beamDepth, bevelSize);
    const botMesh = new THREE.Mesh(botGeo, horizontalBeamMaterial);
    botMesh.position.set(threeX, -barSpacing, 0);
    emblemGroup.add(botMesh);

    // Deep spatial positioning: sits in background to the right of the text
    emblemGroup.position.set(1.8, 0.1, -1.8);
    emblemGroup.rotation.set(0.32, -0.68, 0.16);
    scene.add(emblemGroup);
    groupRef.current = emblemGroup;

    // High-Craft Studio Lighting (Clear, Visible & Dramatic)
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.4);
    scene.add(ambientLight);

    // Key Light: Sharp directional light creating clear contrast across beam facets
    const keyLight = new THREE.DirectionalLight(0xffffff, 3.2);
    keyLight.position.set(7, 9, 8);
    scene.add(keyLight);

    // Fill Light: Soft grey fill so all sides are visible
    const fillLight = new THREE.DirectionalLight(0xcccccc, 1.8);
    fillLight.position.set(-6, 2, 5);
    scene.add(fillLight);

    // Gold Rim Accent Light: 13 Utopia signature edge glint
    const goldRimLight = new THREE.DirectionalLight(0xe8c56a, 2.4);
    goldRimLight.position.set(5, -6, -2);
    scene.add(goldRimLight);

    // Top Light: Overhead rim
    const topLight = new THREE.DirectionalLight(0xffffff, 1.6);
    topLight.position.set(0, 10, -2);
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
      const p = progressRef.current;

      // Mouse inertia
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;

      if (emblemGroup) {
        // Continuous smooth 3D rotation driven by scroll scrub + gentle idle float + mouse tilt
        const baseRotX = 0.32 + p * Math.PI * 0.85 + mouseRef.current.y * 0.18 + Math.sin(elapsed * 0.3) * 0.02;
        const baseRotY = -0.68 + p * Math.PI * 1.25 + mouseRef.current.x * 0.24 + Math.cos(elapsed * 0.25) * 0.03;
        const baseRotZ = 0.16 + p * 0.45 + mouseRef.current.x * 0.08;

        emblemGroup.rotation.x += (baseRotX - emblemGroup.rotation.x) * 0.07;
        emblemGroup.rotation.y += (baseRotY - emblemGroup.rotation.y) * 0.07;
        emblemGroup.rotation.z += (baseRotZ - emblemGroup.rotation.z) * 0.07;

        const targetPosX = 1.8 + mouseRef.current.x * 0.35 - p * 0.4;
        const targetPosY = 0.1 - mouseRef.current.y * 0.25;
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
