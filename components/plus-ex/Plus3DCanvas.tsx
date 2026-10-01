"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import styles from "@/styles/plus-ex/Plus3DCanvas.module.css";

interface Plus3DCanvasProps {
  progress?: number;
  className?: string;
}

export function Plus3DCanvas({ progress = 0, className }: Plus3DCanvasProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const meshRef = useRef<THREE.Mesh | null>(null);
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
    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 100);
    camera.position.set(-0.8, 0, 8.5);

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
    renderer.toneMappingExposure = 1.25;
    container.appendChild(renderer.domElement);

    // 3D Plus Geometry (Precision Extruded Architectural Cross)
    const shape = new THREE.Shape();
    const armW = 1.05; // half-width
    const armL = 3.9;  // half-length

    shape.moveTo(-armW, armL);
    shape.lineTo(armW, armL);
    shape.lineTo(armW, armW);
    shape.lineTo(armL, armW);
    shape.lineTo(armL, -armW);
    shape.lineTo(armW, -armW);
    shape.lineTo(armW, -armL);
    shape.lineTo(-armW, -armL);
    shape.lineTo(-armW, -armW);
    shape.lineTo(-armL, -armW);
    shape.lineTo(-armL, armW);
    shape.lineTo(-armW, armW);
    shape.closePath();

    const extrudeSettings = {
      steps: 1,
      depth: 1.5,
      bevelEnabled: true,
      bevelThickness: 0.12,
      bevelSize: 0.12,
      bevelOffset: 0,
      bevelSegments: 4,
    };

    const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    geometry.center();

    // Dark tactile matte-metallic obsidian material matching Plus-X
    const material = new THREE.MeshStandardMaterial({
      color: new THREE.Color(0x282828),
      roughness: 0.38,
      metalness: 0.72,
    });

    const plusMesh = new THREE.Mesh(geometry, material);
    plusMesh.position.set(-1.6, 0.2, 0);
    plusMesh.rotation.set(0.32, -0.68, 0.18);
    scene.add(plusMesh);
    meshRef.current = plusMesh;

    // Lighting (Directional Key Light + Soft Rim for Chamfered Edges)
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.65);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 2.6);
    keyLight.position.set(4, 7, 6);
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0xffffff, 1.4);
    rimLight.position.set(-6, -4, 3);
    scene.add(rimLight);

    const topLight = new THREE.DirectionalLight(0xffffff, 1.1);
    topLight.position.set(0, 8, -2);
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

      // Smooth mouse dampening
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;

      if (plusMesh) {
        // Continuous smooth 3D rotation driven by scroll scrub + gentle idle float + mouse tilt
        const baseRotX = 0.32 + p * Math.PI * 0.95 + mouseRef.current.y * 0.22 + Math.sin(elapsed * 0.35) * 0.03;
        const baseRotY = -0.68 + p * Math.PI * 1.35 + mouseRef.current.x * 0.28 + Math.cos(elapsed * 0.3) * 0.04;
        const baseRotZ = 0.18 + p * 0.55 + mouseRef.current.x * 0.1;

        plusMesh.rotation.x += (baseRotX - plusMesh.rotation.x) * 0.08;
        plusMesh.rotation.y += (baseRotY - plusMesh.rotation.y) * 0.08;
        plusMesh.rotation.z += (baseRotZ - plusMesh.rotation.z) * 0.08;

        const targetPosX = -1.6 + mouseRef.current.x * 0.25 - p * 0.3;
        const targetPosY = 0.2 - mouseRef.current.y * 0.2;
        plusMesh.position.x += (targetPosX - plusMesh.position.x) * 0.06;
        plusMesh.position.y += (targetPosY - plusMesh.position.y) * 0.06;
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
      geometry.dispose();
      material.dispose();
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
