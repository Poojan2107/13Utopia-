"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export function CTA3DCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 1. Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      42,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 11);

    // 2. Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.35;
    container.appendChild(renderer.domElement);

    // 3. Official 13 Utopia Organic Ribbon Geometry
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
      depth: 0.96,
      bevelEnabled: true,
      bevelThickness: 0.075,
      bevelSize: 0.065,
      bevelOffset: 0,
      bevelSegments: 5,
    };

    // 4. Materials: Dark Architectural Titanium Obsidian with Champagne Gold Glints
    const matOne = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color(0x222428),
      roughness: 0.28,
      metalness: 0.82,
      clearcoat: 0.35,
      clearcoatRoughness: 0.20,
      reflectivity: 0.85,
    });

    const matThree = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color(0x1e2024),
      roughness: 0.30,
      metalness: 0.85,
      clearcoat: 0.35,
      clearcoatRoughness: 0.20,
      reflectivity: 0.85,
    });

    const emblemGroup = new THREE.Group();

    const oneGeo = new THREE.ExtrudeGeometry(createOneShape(), extrudeSettings);
    oneGeo.center();
    const oneMesh = new THREE.Mesh(oneGeo, matOne);
    oneMesh.position.set(-1.35, 0, 0);
    emblemGroup.add(oneMesh);

    const threeGeo = new THREE.ExtrudeGeometry(createThreeShape(), extrudeSettings);
    threeGeo.center();
    const threeMesh = new THREE.Mesh(threeGeo, matThree);
    threeMesh.position.set(0.65, 0, 0);
    emblemGroup.add(threeMesh);

    emblemGroup.scale.setScalar(0.86);
    emblemGroup.position.set(0, 0, 0);
    scene.add(emblemGroup);

    // 5. Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.3);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 3.6);
    keyLight.position.set(7, 9, 8);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0x8899aa, 1.8);
    fillLight.position.set(-9, -5, 5);
    scene.add(fillLight);

    // Signature Champagne Gold Chamfer Rim Light
    const goldRimLight = new THREE.DirectionalLight(0xf4dfc8, 4.5);
    goldRimLight.position.set(4, -6, -3);
    scene.add(goldRimLight);

    const topRimLight = new THREE.DirectionalLight(0xf4eae0, 3.2);
    topRimLight.position.set(0, 10, -5);
    scene.add(topRimLight);

    // 6. Interactive Mouse Movement
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      mouseRef.current.targetX = x * 0.35;
      mouseRef.current.targetY = y * 0.25;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // 7. Animation Loop
    let rafId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      rafId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse interpolation
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;

      // Subtle breathing idle rotation + interactive tilt
      emblemGroup.rotation.y = Math.sin(elapsedTime * 0.4) * 0.12 + mouseRef.current.x;
      emblemGroup.rotation.x = 0.06 + Math.cos(elapsedTime * 0.3) * 0.05 - mouseRef.current.y;
      emblemGroup.position.y = Math.sin(elapsedTime * 0.6) * 0.08;

      renderer.render(scene, camera);
    };

    animate();

    // 8. Resize Handler
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      oneGeo.dispose();
      threeGeo.dispose();
      matOne.dispose();
      matThree.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        zIndex: 1,
        width: "100%",
        height: "100%",
        overflow: "hidden",
      }}
      aria-hidden="true"
    />
  );
}
