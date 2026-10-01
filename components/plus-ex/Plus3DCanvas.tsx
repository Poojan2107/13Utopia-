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
  const targetRotationRef = useRef({ x: 0.2, y: -0.4, z: 0 });
  const mouseRef = useRef({ x: 0, y: 0 });
  const progressRef = useRef(progress);

  useEffect(() => {
    progressRef.current = progress;
  }, [progress]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    // Scene setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x000000, 0.04);

    // Camera setup
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(-1.2, 0.4, 7.2);

    // Renderer setup
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

    // Construct 3D Plus / Cross Geometry
    const shape = new THREE.Shape();
    const w = 0.85; // arm half-width
    const l = 3.2;  // arm half-length

    shape.moveTo(-w, l);
    shape.lineTo(w, l);
    shape.lineTo(w, w);
    shape.lineTo(l, w);
    shape.lineTo(l, -w);
    shape.lineTo(w, -w);
    shape.lineTo(w, -l);
    shape.lineTo(-w, -l);
    shape.lineTo(-w, -w);
    shape.lineTo(-l, -w);
    shape.lineTo(-l, w);
    shape.lineTo(-w, w);
    shape.closePath();

    const extrudeSettings = {
      steps: 1,
      depth: 1.4,
      bevelEnabled: true,
      bevelThickness: 0.14,
      bevelSize: 0.14,
      bevelOffset: 0,
      bevelSegments: 4,
    };

    const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    geometry.center();

    // Dark tactile architectural metal material
    const material = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color(0x222222),
      emissive: new THREE.Color(0x080603),
      roughness: 0.28,
      metalness: 0.82,
      clearcoat: 0.5,
      clearcoatRoughness: 0.25,
      reflectivity: 0.85,
    });

    const plusMesh = new THREE.Mesh(geometry, material);
    plusMesh.position.set(-1.8, 0, 0);
    plusMesh.rotation.set(0.35, -0.65, 0.15);
    scene.add(plusMesh);
    meshRef.current = plusMesh;

    // Lighting Setup
    const ambientLight = new THREE.AmbientLight(0x222222, 1.8);
    scene.add(ambientLight);

    // Main Key Spotlight
    const spotLight = new THREE.SpotLight(0xffffff, 45);
    spotLight.position.set(-2, 5, 8);
    spotLight.angle = Math.PI / 4;
    spotLight.penumbra = 0.8;
    spotLight.decay = 1.6;
    scene.add(spotLight);

    // Warm Gold Rim Light
    const goldRimLight = new THREE.DirectionalLight(0xe8c56a, 2.8);
    goldRimLight.position.set(5, -2, -2);
    scene.add(goldRimLight);

    // Soft Fill Light
    const fillLight = new THREE.PointLight(0x446688, 12, 15);
    fillLight.position.set(4, 3, 2);
    scene.add(fillLight);

    // Mouse Parallax Interaction
    const onPointerMove = (e: MouseEvent) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      mouseRef.current.x = (e.clientX - cx) / cx;
      mouseRef.current.y = (e.clientY - cy) / cy;
    };
    window.addEventListener("mousemove", onPointerMove, { passive: true });

    // Resize Handler
    const onResize = () => {
      if (!container) return;
      const w = container.clientWidth || window.innerWidth;
      const h = container.clientHeight || window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", onResize);

    // Animation Render Loop
    let rafId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      rafId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();
      const p = progressRef.current;

      if (plusMesh) {
        // Continuous subtle organic floating rotation + scroll scrub + mouse parallax
        const targetRotX = 0.35 + p * Math.PI * 0.85 + mouseRef.current.y * 0.25 + Math.sin(elapsed * 0.4) * 0.04;
        const targetRotY = -0.65 + p * Math.PI * 1.25 + mouseRef.current.x * 0.35 + Math.cos(elapsed * 0.3) * 0.05;
        const targetRotZ = 0.15 + p * 0.6 + mouseRef.current.x * 0.15;

        plusMesh.rotation.x += (targetRotX - plusMesh.rotation.x) * 0.06;
        plusMesh.rotation.y += (targetRotY - plusMesh.rotation.y) * 0.06;
        plusMesh.rotation.z += (targetRotZ - plusMesh.rotation.z) * 0.06;

        // Position parallax
        const targetPosX = -1.8 + mouseRef.current.x * 0.3 - p * 0.4;
        const targetPosY = mouseRef.current.y * -0.25 + Math.sin(elapsed * 0.8) * 0.08;
        plusMesh.position.x += (targetPosX - plusMesh.position.x) * 0.05;
        plusMesh.position.y += (targetPosY - plusMesh.position.y) * 0.05;

        // Dynamic spotlight tracking
        spotLight.position.x = -2 + mouseRef.current.x * 2.5;
        spotLight.position.y = 5 + mouseRef.current.y * -2;
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", onPointerMove);
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
