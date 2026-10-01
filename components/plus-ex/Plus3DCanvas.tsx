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
 * Slender, ultra-sharp architectural steel & gold beams rendered in Three.js
 * positioned in deep spatial perspective behind typography with cinematic studio lighting.
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

    // Camera with deep cinematic perspective
    const camera = new THREE.PerspectiveCamera(36, width / height, 0.1, 100);
    camera.position.set(0.4, 0, 10.5);

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
    renderer.toneMappingExposure = 1.4;
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
        bevelSegments: 3,
      };

      const geo = new THREE.ExtrudeGeometry(shape, extrudeSettings);
      geo.center();
      return geo;
    };

    // Premium Materials: Dark Brushed Obsidian & 18k Chamfered Gold
    const goldBeamMaterial = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color(0x382c16),
      emissive: new THREE.Color(0x0d0903),
      roughness: 0.26,
      metalness: 0.94,
      clearcoat: 0.7,
      clearcoatRoughness: 0.15,
      reflectivity: 0.95,
    });

    const titaniumBeamMaterial = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color(0x1f1f1f),
      emissive: new THREE.Color(0x060606),
      roughness: 0.32,
      metalness: 0.88,
      clearcoat: 0.5,
      clearcoatRoughness: 0.2,
      reflectivity: 0.9,
    });

    const beamDepth = 0.85;
    const bevelSize = 0.035;

    // 1. The "1" Beam: Slender Vertical Monolith
    const oneWidth = 0.52;
    const oneHeight = 6.2;
    const oneGeo = createSlenderBeam(oneWidth, oneHeight, beamDepth, bevelSize);
    const oneMesh = new THREE.Mesh(oneGeo, goldBeamMaterial);
    oneMesh.position.set(-1.85, 0, 0);
    emblemGroup.add(oneMesh);

    // 2. The "3" Beams: Three Slender Cantilevered Horizontal Monoliths
    const barWidth = 3.6;
    const barHeight = 0.52;
    const threeX = 0.65;
    const barSpacing = 2.15;

    // Top horizontal beam
    const topGeo = createSlenderBeam(barWidth, barHeight, beamDepth, bevelSize);
    const topMesh = new THREE.Mesh(topGeo, titaniumBeamMaterial);
    topMesh.position.set(threeX, barSpacing, 0);
    emblemGroup.add(topMesh);

    // Middle horizontal beam
    const midGeo = createSlenderBeam(barWidth, barHeight, beamDepth, bevelSize);
    const midMesh = new THREE.Mesh(midGeo, titaniumBeamMaterial);
    midMesh.position.set(threeX, 0, 0);
    emblemGroup.add(midMesh);

    // Bottom horizontal beam
    const botGeo = createSlenderBeam(barWidth, barHeight, beamDepth, bevelSize);
    const botMesh = new THREE.Mesh(botGeo, titaniumBeamMaterial);
    botMesh.position.set(threeX, -barSpacing, 0);
    emblemGroup.add(botMesh);

    // Deep spatial positioning: sits elegantly to the right in the background
    emblemGroup.position.set(1.4, 0, -1.2);
    emblemGroup.rotation.set(0.28, -0.62, 0.12);
    scene.add(emblemGroup);
    groupRef.current = emblemGroup;

    // High-Craft Studio Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    // Key Light: Sharp directional light highlighting chamfers
    const keyLight = new THREE.DirectionalLight(0xffffff, 3.8);
    keyLight.position.set(7, 9, 8);
    scene.add(keyLight);

    // Gold Rim Light: Warm metallic accent from opposite angle
    const goldRimLight = new THREE.DirectionalLight(0xe8c56a, 2.6);
    goldRimLight.position.set(-8, -5, 4);
    scene.add(goldRimLight);

    // Top Overhead Light
    const topLight = new THREE.DirectionalLight(0xffffff, 1.8);
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
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.04;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.04;

      if (emblemGroup) {
        // Architectural rotation linked to scroll scrubbing + mouse tilt
        const targetRotX = 0.28 + p * Math.PI * 0.85 + mouseRef.current.y * 0.18 + Math.sin(elapsed * 0.3) * 0.02;
        const targetRotY = -0.62 + p * Math.PI * 1.25 + mouseRef.current.x * 0.24 + Math.cos(elapsed * 0.25) * 0.03;
        const targetRotZ = 0.12 + p * 0.45 + mouseRef.current.x * 0.08;

        emblemGroup.rotation.x += (targetRotX - emblemGroup.rotation.x) * 0.06;
        emblemGroup.rotation.y += (targetRotY - emblemGroup.rotation.y) * 0.06;
        emblemGroup.rotation.z += (targetRotZ - emblemGroup.rotation.z) * 0.06;

        const targetPosX = 1.4 + mouseRef.current.x * 0.35 - p * 0.4;
        const targetPosY = 0 - mouseRef.current.y * 0.25;
        emblemGroup.position.x += (targetPosX - emblemGroup.position.x) * 0.05;
        emblemGroup.position.y += (targetPosY - emblemGroup.position.y) * 0.05;
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
      goldBeamMaterial.dispose();
      titaniumBeamMaterial.dispose();
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
