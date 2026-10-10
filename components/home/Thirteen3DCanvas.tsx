"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

interface Thirteen3DCanvasProps {
  progress?: number;
  className?: string;
}

/**
 * Thirteen3DCanvas — Pure 3D Titanium "13" Monolith
 * Architectural monolithic numbers "1" and "3" in matte titanium with razor chamfers,
 * continuous idle physics, pointer reaction, and smooth scroll rotation.
 * Exclusively renders the 13 emblem (Zero "BE" glyphs).
 */
export function Thirteen3DCanvas({ progress = 0, className }: Thirteen3DCanvasProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const progressRef = useRef(progress);

  useEffect(() => {
    progressRef.current = progress;
  }, [progress]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;
    const isMobile = width < 768;

    // 1. Scene & Camera
    const scene = new THREE.Scene();
    scene.background = null;

    const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 100);
    camera.position.set(0, 0, 11.2);

    // 2. WebGL Renderer
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    const dpr = Math.min(window.devicePixelRatio || 1, isMobile ? 1.0 : 1.5);
    renderer.setPixelRatio(dpr);
    renderer.setSize(width, height);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.35;
    container.appendChild(renderer.domElement);

    // 3. 3D "13" Geometry Builders
    const createOneShape = () => {
      const shape = new THREE.Shape();
      const topR = 0.44;
      const botR = 0.68;
      const topY = 2.62;
      const botY = -2.42;

      shape.moveTo(-botR, botY);
      shape.lineTo(-topR, topY);
      shape.absarc(0, topY, topR, Math.PI, 0, true);
      shape.lineTo(botR, botY);
      shape.absarc(0, botY, botR, 0, Math.PI, true);
      shape.closePath();
      return shape;
    };

    const createThreeShape = () => {
      const shape = new THREE.Shape();
      shape.moveTo(-0.45, 2.82);
      shape.bezierCurveTo(0.30, 3.12, 1.30, 3.08, 1.88, 2.48);
      shape.bezierCurveTo(2.38, 1.95, 2.28, 1.12, 1.72, 0.52);
      shape.bezierCurveTo(1.32, 0.12, 1.12, 0.02, 1.18, -0.02);
      shape.bezierCurveTo(1.38, -0.22, 2.18, -0.68, 2.32, -1.38);
      shape.bezierCurveTo(2.46, -2.18, 1.78, -3.12, 0.62, -3.12);
      shape.bezierCurveTo(-0.18, -3.12, -0.65, -2.82, -0.92, -2.32);
      shape.bezierCurveTo(-1.18, -1.82, -1.02, -1.32, -0.52, -1.38);
      shape.bezierCurveTo(0.18, -1.42, 0.88, -1.68, 1.28, -1.32);
      shape.bezierCurveTo(1.58, -1.02, 1.48, -0.42, 0.98, -0.12);
      shape.bezierCurveTo(0.58, 0.12, 0.22, 0.18, 0.18, 0.08);
      shape.bezierCurveTo(0.12, -0.02, 0.38, 0.58, 0.78, 0.98);
      shape.bezierCurveTo(1.32, 1.48, 1.28, 1.98, 0.88, 2.18);
      shape.bezierCurveTo(0.38, 2.38, -0.12, 2.18, -0.48, 1.88);
      shape.bezierCurveTo(-0.95, 1.92, -0.95, 2.78, -0.45, 2.82);
      shape.closePath();
      return shape;
    };

    const extrudeSettings = {
      steps: 1,
      depth: 0.95,
      bevelEnabled: true,
      bevelThickness: 0.065,
      bevelSize: 0.055,
      bevelOffset: 0,
      bevelSegments: 3,
    };

    // 4. Obsidian and Smoked Chrome Materials with Review Route Grading
    const matOne = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color(0x38393d),
      roughness: 0.45,
      metalness: 0.55,
      clearcoat: 0.85,
      clearcoatRoughness: 0.10,
      reflectivity: 0.95,
      sheen: 0.60,
      sheenColor: new THREE.Color(0xf0f5ff),
    });

    const matThree = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color(0x282a2e),
      roughness: 0.12,
      metalness: 0.92,
      clearcoat: 1.0,
      clearcoatRoughness: 0.02,
      reflectivity: 1.0,
      sheen: 0.85,
      sheenColor: new THREE.Color(0xffffff),
    });

    // 5. Build Group
    const emblemGroup = new THREE.Group();

    const oneGeo = new THREE.ExtrudeGeometry(createOneShape(), extrudeSettings);
    oneGeo.center();
    const oneMesh = new THREE.Mesh(oneGeo, matOne);
    oneMesh.position.set(-1.20, 0, 0);
    emblemGroup.add(oneMesh);

    const threeGeo = new THREE.ExtrudeGeometry(createThreeShape(), extrudeSettings);
    threeGeo.center();
    const threeMesh = new THREE.Mesh(threeGeo, matThree);
    threeMesh.position.set(0.68, 0, 0);
    emblemGroup.add(threeMesh);

    // Center the combined group
    const box = new THREE.Box3().setFromObject(emblemGroup);
    const center = new THREE.Vector3();
    box.getCenter(center);
    oneMesh.position.x -= center.x;
    oneMesh.position.y -= center.y;
    threeMesh.position.x -= center.x;
    threeMesh.position.y -= center.y;

    const baseScale = isMobile ? 0.72 : 0.92;
    emblemGroup.scale.set(baseScale, baseScale, baseScale);
    emblemGroup.position.set(0, 0, 0);
    scene.add(emblemGroup);

    // 6. Studio Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 2.2);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 5.5);
    keyLight.position.set(6, 8, 7);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0xd0d8e8, 3.2);
    fillLight.position.set(-6, 3, 5);
    scene.add(fillLight);

    const rimLight = new THREE.DirectionalLight(0xffffff, 4.5);
    rimLight.position.set(3, -5, -2);
    scene.add(rimLight);

    const pointLight = new THREE.PointLight(0xffffff, 6.0, 16);
    pointLight.position.set(0, 0, 4);
    scene.add(pointLight);

    // 7. Trackers & Loop
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const onPointerMove = (e: MouseEvent) => {
      targetMouseX = (e.clientX / window.innerWidth) * 2 - 1;
      targetMouseY = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", onPointerMove, { passive: true });

    const onResize = () => {
      if (!container) return;
      const w = container.clientWidth || window.innerWidth;
      const h = container.clientHeight || window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
      const s = w < 768 ? 0.72 : 0.92;
      emblemGroup.scale.set(s, s, s);
    };
    window.addEventListener("resize", onResize);

    let rafId: number;
    let isRunning = true;
    const startTime = performance.now();

    const animate = () => {
      if (!isRunning) return;
      rafId = requestAnimationFrame(animate);
      const elapsedTime = (performance.now() - startTime) * 0.001;

      mouseX += (targetMouseX - mouseX) * 0.06;
      mouseY += (targetMouseY - mouseY) * 0.06;

      const p = progressRef.current;

      // Organic continuous idle hover + pointer reaction
      const idleFloatY = Math.sin(elapsedTime * 1.2) * 0.08;
      const idleRotX = Math.sin(elapsedTime * 0.8) * 0.025;
      const idleRotZ = Math.cos(elapsedTime * 0.6) * 0.02;

      // Rotates from dynamic 3D entry angle (-25 deg) to 100% FRONT-FACING lockup (0 deg) at the end frame
      const rotFromP = (1.0 - Math.min(1.0, Math.max(0.0, p))) * -0.42;
      const targetRotY = rotFromP + (mouseX * 0.22);
      const targetRotX = -(mouseY * 0.18) + (1.0 - p) * 0.06 + idleRotX;
      const targetRotZ = (mouseX * 0.05) + idleRotZ;

      emblemGroup.rotation.y += (targetRotY - emblemGroup.rotation.y) * 0.08;
      emblemGroup.rotation.x += (targetRotX - emblemGroup.rotation.x) * 0.08;
      emblemGroup.rotation.z += (targetRotZ - emblemGroup.rotation.z) * 0.08;

      emblemGroup.position.y += (idleFloatY - emblemGroup.position.y) * 0.08;
      emblemGroup.position.x += (mouseX * 0.15 - emblemGroup.position.x) * 0.08;

      const baseScale = isMobile ? 0.74 : 0.96;
      const currentScale = baseScale * (0.94 + 0.06 * p);
      emblemGroup.scale.set(currentScale, currentScale, currentScale);

      pointLight.position.x = mouseX * 5.0;
      pointLight.position.y = mouseY * 5.0;

      renderer.render(scene, camera);

    };

    animate();

    return () => {
      isRunning = false;
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", onPointerMove);
      window.removeEventListener("resize", onResize);
      renderer.domElement?.remove();
      oneGeo.dispose();
      threeGeo.dispose();
      matOne.dispose();
      matThree.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={className}
      aria-hidden="true"
    />
  );
}
