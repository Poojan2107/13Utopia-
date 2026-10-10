"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import styles from "@/styles/home/Hero3DCanvas.module.css";

export function Hero3DCanvas() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let width = container.clientWidth || window.innerWidth;
    let height = container.clientHeight || window.innerHeight;

    // 1. Scene & Camera (Centered perspective)
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
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    renderer.setPixelRatio(dpr);
    renderer.setSize(width, height);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.35;
    container.appendChild(renderer.domElement);

    // 3. 3D "13" Emblem Group
    const emblemGroup = new THREE.Group();

    // Shape 1: Tapered Monolith "1"
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

    // Shape 3: Sculptural Ribbon "3"
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
      bevelThickness: 0.045,
      bevelSize: 0.045,
      bevelOffset: 0,
      bevelSegments: 4,
    };

    // Exact architectural obsidian & smoked chrome materiality matching the review model
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

    const oneGeo = new THREE.ExtrudeGeometry(createOneShape(), extrudeSettings);
    oneGeo.center();
    const oneMesh = new THREE.Mesh(oneGeo, matOne);
    oneMesh.position.set(-1.85, 0, 0);
    emblemGroup.add(oneMesh);

    const threeGeo = new THREE.ExtrudeGeometry(createThreeShape(), extrudeSettings);
    threeGeo.center();
    const threeMesh = new THREE.Mesh(threeGeo, matThree);
    threeMesh.position.set(0.95, 0, 0);
    emblemGroup.add(threeMesh);

    let baseOffsetX = width > 980 ? 2.5 : 0;
    emblemGroup.position.set(baseOffsetX, 0, 0);
    scene.add(emblemGroup);

    // 4. Studio Lighting Rig Matching Review Route
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 5.0);
    keyLight.position.set(6, 8, 7);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0xe8eeff, 3.2);
    fillLight.position.set(-6, 3, 5);
    scene.add(fillLight);

    const rimLight = new THREE.DirectionalLight(0xdde8ff, 5.5);
    rimLight.position.set(3, -5, -2);
    scene.add(rimLight);

    const topLight = new THREE.DirectionalLight(0xffffff, 2.5);
    topLight.position.set(0, 8, 2);
    scene.add(topLight);

    // Mouse follow specular light
    const mouseLight = new THREE.PointLight(0xffffff, 8.0, 15);
    mouseLight.position.set(0, 0, 4);
    scene.add(mouseLight);

    // 5. Mouse Interaction
    const onMouseMove = (e: MouseEvent) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      mouseRef.current.targetX = (e.clientX - cx) / cx;
      mouseRef.current.targetY = (e.clientY - cy) / cy;
    };
    window.addEventListener("mousemove", onMouseMove, { passive: true });

    // 6. Resize handler
    const onResize = () => {
      if (!container) return;
      width = container.clientWidth || window.innerWidth;
      height = container.clientHeight || window.innerHeight;
      baseOffsetX = width > 980 ? 2.5 : 0;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener("resize", onResize);

    // 7. Animation loop
    let rafId: number;
    const startTime = performance.now();

    const animate = () => {
      rafId = requestAnimationFrame(animate);
      const elapsed = (performance.now() - startTime) * 0.001;

      // Smooth cursor inertia
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;

      // Update dynamic mouse specular highlight
      mouseLight.position.x = baseOffsetX + mouseRef.current.x * 6;
      mouseLight.position.y = -mouseRef.current.y * 6;

      // Subtle organic breath & slight 3D angle
      const idleFloat = Math.sin(elapsed * 0.6) * 0.025;
      const targetRotX = mouseRef.current.y * 0.15 + idleFloat;
      const targetRotY = mouseRef.current.x * 0.22;
      const targetRotZ = mouseRef.current.x * 0.06;

      emblemGroup.rotation.x += (targetRotX - emblemGroup.rotation.x) * 0.08;
      emblemGroup.rotation.y += (targetRotY - emblemGroup.rotation.y) * 0.08;
      emblemGroup.rotation.z += (targetRotZ - emblemGroup.rotation.z) * 0.08;

      const targetPosX = baseOffsetX + mouseRef.current.x * 0.25;
      const targetPosY = -mouseRef.current.y * 0.15 + idleFloat;

      emblemGroup.position.x += (targetPosX - emblemGroup.position.x) * 0.06;
      emblemGroup.position.y += (targetPosY - emblemGroup.position.y) * 0.06;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      if (renderer.domElement) {
        renderer.domElement.remove();
      }
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
      className={styles.canvasContainer}
      aria-hidden="true"
    />
  );
}
