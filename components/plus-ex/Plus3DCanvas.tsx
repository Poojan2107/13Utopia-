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
 * Renders the iconic "1" (vertical gold bar) and "3" (three horizontal bars)
 * rotating in 3D perspective with physical metallic shaders and lighting.
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

    // Camera
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(-0.6, 0.2, 9.2);

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

    // Create 3D "13" Emblem Group
    const emblemGroup = new THREE.Group();

    // Helper: Rounded Box Shape for extrusion
    const createRoundedBar = (w: number, h: number, r: number, depth: number) => {
      const shape = new THREE.Shape();
      const hw = w / 2;
      const hh = h / 2;
      const rad = Math.min(r, hw, hh);

      shape.moveTo(-hw + rad, hh);
      shape.lineTo(hw - rad, hh);
      shape.quadraticCurveTo(hw, hh, hw, hh - rad);
      shape.lineTo(hw, -hh + rad);
      shape.quadraticCurveTo(hw, -hh, hw - rad, -hh);
      shape.lineTo(-hw + rad, -hh);
      shape.quadraticCurveTo(-hw, -hh, -hw, -hh + rad);
      shape.lineTo(-hw, hh - rad);
      shape.quadraticCurveTo(-hw, hh, -hw + rad, hh);
      shape.closePath();

      const extrudeSettings = {
        steps: 1,
        depth: depth,
        bevelEnabled: true,
        bevelThickness: 0.14,
        bevelSize: 0.14,
        bevelOffset: 0,
        bevelSegments: 4,
      };

      const geo = new THREE.ExtrudeGeometry(shape, extrudeSettings);
      geo.center();
      return geo;
    };

    // Materials
    // 18k/24k Lustrous Gold Material for "1"
    const goldMaterial = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color(0xdfb248),
      emissive: new THREE.Color(0x281c05),
      roughness: 0.22,
      metalness: 0.88,
      clearcoat: 0.6,
      clearcoatRoughness: 0.18,
      reflectivity: 0.95,
    });

    // Brushed Obsidian-Silver White Material for "3" (Three horizontal bars)
    const whiteMaterial = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color(0xf2f2f2),
      emissive: new THREE.Color(0x101010),
      roughness: 0.28,
      metalness: 0.75,
      clearcoat: 0.5,
      clearcoatRoughness: 0.2,
      reflectivity: 0.85,
    });

    const barDepth = 1.35;
    const cornerRadius = 0.24;

    // 1. The "1" Bar: Vertical Pillar on the Left
    const oneGeo = createRoundedBar(0.85, 4.6, cornerRadius, barDepth);
    const oneMesh = new THREE.Mesh(oneGeo, goldMaterial);
    oneMesh.position.set(-1.45, 0, 0);
    emblemGroup.add(oneMesh);

    // 2. The "3" Bars: Three Stacked Horizontal Bars on the Right
    const barWidth = 2.4;
    const barHeight = 0.85;
    const threeX = 0.85;
    const barSpacing = 1.88;

    // Top Bar
    const topGeo = createRoundedBar(barWidth, barHeight, cornerRadius, barDepth);
    const topMesh = new THREE.Mesh(topGeo, whiteMaterial);
    topMesh.position.set(threeX, barSpacing, 0);
    emblemGroup.add(topMesh);

    // Middle Bar
    const midGeo = createRoundedBar(barWidth, barHeight, cornerRadius, barDepth);
    const midMesh = new THREE.Mesh(midGeo, whiteMaterial);
    midMesh.position.set(threeX, 0, 0);
    emblemGroup.add(midMesh);

    // Bottom Bar
    const botGeo = createRoundedBar(barWidth, barHeight, cornerRadius, barDepth);
    const botMesh = new THREE.Mesh(botGeo, whiteMaterial);
    botMesh.position.set(threeX, -barSpacing, 0);
    emblemGroup.add(botMesh);

    // Initial positioning of the 3D group
    emblemGroup.position.set(-1.2, 0.1, 0);
    emblemGroup.rotation.set(0.3, -0.65, 0.15);
    scene.add(emblemGroup);
    groupRef.current = emblemGroup;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.85);
    scene.add(ambientLight);

    // Key Directional Light (Crisp highlights on bevels)
    const keyLight = new THREE.DirectionalLight(0xffffff, 3.2);
    keyLight.position.set(5, 8, 7);
    scene.add(keyLight);

    // Warm Gold Accent Light
    const goldLight = new THREE.DirectionalLight(0xe8c56a, 2.2);
    goldLight.position.set(-6, -4, 4);
    scene.add(goldLight);

    // Top-down Rim Light
    const rimLight = new THREE.DirectionalLight(0xffffff, 1.6);
    rimLight.position.set(0, 9, -3);
    scene.add(rimLight);

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

      // Smooth mouse dampening
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;

      if (emblemGroup) {
        // Continuous smooth 3D rotation driven by scroll scrub + gentle idle float + mouse tilt
        const baseRotX = 0.3 + p * Math.PI * 0.95 + mouseRef.current.y * 0.22 + Math.sin(elapsed * 0.35) * 0.03;
        const baseRotY = -0.65 + p * Math.PI * 1.35 + mouseRef.current.x * 0.28 + Math.cos(elapsed * 0.3) * 0.04;
        const baseRotZ = 0.15 + p * 0.55 + mouseRef.current.x * 0.1;

        emblemGroup.rotation.x += (baseRotX - emblemGroup.rotation.x) * 0.08;
        emblemGroup.rotation.y += (baseRotY - emblemGroup.rotation.y) * 0.08;
        emblemGroup.rotation.z += (baseRotZ - emblemGroup.rotation.z) * 0.08;

        const targetPosX = -1.2 + mouseRef.current.x * 0.25 - p * 0.35;
        const targetPosY = 0.1 - mouseRef.current.y * 0.2;
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
      whiteMaterial.dispose();
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
