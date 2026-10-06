"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

interface Solutions3DStoryCanvasProps {
  progress: number;
}

export function Solutions3DStoryCanvas({ progress }: Solutions3DStoryCanvasProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const progressRef = useRef(progress);

  useEffect(() => {
    progressRef.current = progress;
  }, [progress]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let width = container.clientWidth || window.innerWidth;
    let height = container.clientHeight || window.innerHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(0, 0, 11);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
    renderer.setSize(width, height);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.4;
    container.appendChild(renderer.domElement);

    // Deep Studio Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 2.8);
    keyLight.position.set(6, 8, 8);
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0xffffff, 2.0);
    rimLight.position.set(-8, -4, -6);
    scene.add(rimLight);

    const centerGlint = new THREE.PointLight(0xffffff, 2.2, 25);
    centerGlint.position.set(0, 2, 4);
    scene.add(centerGlint);

    // ── MASTER 3D GEOMETRY WORLDS ──
    const rootGroup = new THREE.Group();
    scene.add(rootGroup);

    // Titanium Material
    const titaniumMat = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color(0x181a20),
      metalness: 0.95,
      roughness: 0.22,
      clearcoat: 0.95,
      clearcoatRoughness: 0.12,
      reflectivity: 0.95,
    });

    const wireMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });

    const glowMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.7,
    });

    // ── 01. BRAND & CREATIVE (Prismatic Octahedron Crystal) ──
    const brandGroup = new THREE.Group();
    const octaGeom = new THREE.OctahedronGeometry(2.4, 0);
    const octaMesh = new THREE.Mesh(octaGeom, titaniumMat);
    const octaWire = new THREE.Mesh(new THREE.OctahedronGeometry(2.48, 1), wireMat);
    brandGroup.add(octaMesh);
    brandGroup.add(octaWire);
    rootGroup.add(brandGroup);

    // ── 02. DIGITAL PRODUCTS (Modular Architectural 3D Lattice Matrix) ──
    const productGroup = new THREE.Group();
    for (let x = -1; x <= 1; x++) {
      for (let y = -1; y <= 1; y++) {
        for (let z = -1; z <= 1; z++) {
          const boxGeom = new THREE.BoxGeometry(0.7, 0.7, 0.7);
          const boxMesh = new THREE.Mesh(boxGeom, titaniumMat);
          boxMesh.position.set(x * 1.5, y * 1.5, z * 1.5);
          productGroup.add(boxMesh);

          const wireBox = new THREE.Mesh(new THREE.BoxGeometry(0.74, 0.74, 0.74), wireMat);
          wireBox.position.set(x * 1.5, y * 1.5, z * 1.5);
          productGroup.add(wireBox);
        }
      }
    }
    rootGroup.add(productGroup);

    // ── 03. AI & AUTOMATION (Neural Synapse Point Cloud & Node Constellation) ──
    const aiGroup = new THREE.Group();
    const particleCount = 180;
    const particleGeom = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const radius = 2.8 + Math.random() * 0.8;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
    }
    particleGeom.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.08,
      transparent: true,
      opacity: 0.9,
    });
    const particlePoints = new THREE.Points(particleGeom, particleMat);
    aiGroup.add(particlePoints);

    // Central AI Core Orb
    const coreMesh = new THREE.Mesh(new THREE.IcosahedronGeometry(1.4, 2), titaniumMat);
    aiGroup.add(coreMesh);
    const coreWire = new THREE.Mesh(new THREE.IcosahedronGeometry(1.45, 1), wireMat);
    aiGroup.add(coreWire);
    rootGroup.add(aiGroup);

    // ── 04. CLOUD & ARCHITECTURE (Concentric Orbital Torus Rings) ──
    const cloudGroup = new THREE.Group();
    const ring1 = new THREE.Mesh(new THREE.TorusGeometry(3.0, 0.12, 16, 64), titaniumMat);
    const ring2 = new THREE.Mesh(new THREE.TorusGeometry(2.3, 0.1, 16, 64), titaniumMat);
    const ring3 = new THREE.Mesh(new THREE.TorusGeometry(1.6, 0.08, 16, 64), titaniumMat);
    cloudGroup.add(ring1);
    cloudGroup.add(ring2);
    cloudGroup.add(ring3);
    rootGroup.add(cloudGroup);

    // ── 05. GROWTH & POSITIONING (Hyperbolic Ascending Crystalline Apex) ──
    const growthGroup = new THREE.Group();
    for (let i = 0; i < 7; i++) {
      const h = 1.0 + i * 0.6;
      const cone = new THREE.Mesh(new THREE.ConeGeometry(0.5 + i * 0.15, h, 6), titaniumMat);
      cone.position.set(0, (i - 3) * 0.7, 0);
      cone.rotation.y = i * 0.4;
      growthGroup.add(cone);
    }
    rootGroup.add(growthGroup);

    // Window resize handler
    const onResize = () => {
      if (!container) return;
      width = container.clientWidth || window.innerWidth;
      height = container.clientHeight || window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener("resize", onResize);

    // Smooth render loop driven by scroll progress
    let animId: number;
    let time = 0;
    let smoothProgress = 0;

    const render = () => {
      time += 0.015;
      smoothProgress += (progressRef.current - smoothProgress) * 0.08;

      // Determine which act is currently active (0.0 to 1.0 mapped to 5 acts)
      // Act 0: 0.0 - 0.2 (Brand)
      // Act 1: 0.2 - 0.4 (Products)
      // Act 2: 0.4 - 0.6 (AI)
      // Act 3: 0.6 - 0.8 (Cloud)
      // Act 4: 0.8 - 1.0 (Growth)
      const p = smoothProgress;

      const getActWeight = (actIdx: number) => {
        const center = (actIdx + 0.5) / 5;
        const dist = Math.abs(p - center);
        return Math.max(0, 1 - dist * 4.5);
      };

      const w0 = getActWeight(0);
      const w1 = getActWeight(1);
      const w2 = getActWeight(2);
      const w3 = getActWeight(3);
      const w4 = getActWeight(4);

      // 01 Brand Motion
      brandGroup.visible = w0 > 0.01;
      brandGroup.scale.setScalar(w0 * 1.15 + 0.01);
      brandGroup.rotation.x = time * 0.4 + p * 3.0;
      brandGroup.rotation.y = time * 0.6 + p * 4.0;
      brandGroup.position.x = -1.8 * (1 - w0);

      // 02 Products Motion
      productGroup.visible = w1 > 0.01;
      productGroup.scale.setScalar(w1 * 0.95 + 0.01);
      productGroup.rotation.x = time * 0.3 + p * 2.0;
      productGroup.rotation.y = time * 0.5 + p * 3.5;

      // 03 AI Motion
      aiGroup.visible = w2 > 0.01;
      aiGroup.scale.setScalar(w2 * 1.05 + 0.01);
      aiGroup.rotation.y = time * 0.4;
      coreMesh.rotation.x = -time * 0.6;
      coreMesh.rotation.y = time * 0.8;

      // 04 Cloud Motion
      cloudGroup.visible = w3 > 0.01;
      cloudGroup.scale.setScalar(w3 * 1.1 + 0.01);
      ring1.rotation.x = time * 0.5 + p * 2.0;
      ring1.rotation.y = time * 0.3;
      ring2.rotation.y = -time * 0.6;
      ring2.rotation.z = time * 0.4;
      ring3.rotation.z = time * 0.8;

      // 05 Growth Motion
      growthGroup.visible = w4 > 0.01;
      growthGroup.scale.setScalar(w4 * 1.0 + 0.01);
      growthGroup.rotation.y = time * 0.5 + p * 4.0;

      // Global subtle camera parallax
      camera.position.x = Math.sin(time * 0.3) * 0.4;
      camera.position.y = Math.cos(time * 0.4) * 0.3;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(animId);
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 1,
      }}
    />
  );
}
