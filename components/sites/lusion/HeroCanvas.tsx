"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export function HeroCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x07080a, 0.045);

    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 7);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.3;
    container.appendChild(renderer.domElement);

    // 2. Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0x00f2fe, 3.5);
    keyLight.position.set(5, 5, 5);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0x7928ca, 3.0);
    fillLight.position.set(-5, -3, 3);
    scene.add(fillLight);

    const pointLight = new THREE.PointLight(0xffffff, 2.5, 10);
    pointLight.position.set(0, 2, 4);
    scene.add(pointLight);

    // 3. Central 3D Geometric Group (Lusion Cross / Abstract Torus Knot Cluster)
    const centralGroup = new THREE.Group();
    scene.add(centralGroup);

    // Material with metallic sheen & iridescence simulation
    const material = new THREE.MeshPhysicalMaterial({
      color: 0x1a2130,
      metalness: 0.85,
      roughness: 0.15,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      reflectivity: 0.9,
    });

    // Create 3D Cross-like geometry (overlapping rounded cylinders / boxes)
    const boxGeo1 = new THREE.BoxGeometry(0.8, 3.4, 0.8);
    const boxGeo2 = new THREE.BoxGeometry(3.4, 0.8, 0.8);
    const boxGeo3 = new THREE.BoxGeometry(0.8, 0.8, 3.4);

    const m1 = new THREE.Mesh(boxGeo1, material);
    const m2 = new THREE.Mesh(boxGeo2, material);
    const m3 = new THREE.Mesh(boxGeo3, material);
    centralGroup.add(m1, m2, m3);

    // Additional floating geometric nodes
    const satellites: THREE.Mesh[] = [];
    const smallGeo = new THREE.OctahedronGeometry(0.4, 0);
    const satMaterial = new THREE.MeshStandardMaterial({
      color: 0x00f2fe,
      metalness: 0.9,
      roughness: 0.2,
      wireframe: false,
    });

    for (let i = 0; i < 12; i++) {
      const sat = new THREE.Mesh(smallGeo, satMaterial);
      const angle = (i / 12) * Math.PI * 2;
      const radius = 2.4 + Math.random() * 1.5;
      sat.position.set(
        Math.cos(angle) * radius,
        (Math.random() - 0.5) * 2,
        Math.sin(angle) * radius
      );
      satellites.push(sat);
      scene.add(sat);
    }

    // Floating particle field
    const particlesCount = 350;
    const positions = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 14;
      positions[i + 1] = (Math.random() - 0.5) * 14;
      positions[i + 2] = (Math.random() - 0.5) * 10;
    }

    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.04,
      color: 0x94a3b8,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending,
    });

    const particleSystem = new THREE.Points(particleGeo, particleMat);
    scene.add(particleSystem);

    // 4. Mouse interaction & animation
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      mouseX = (event.clientX / innerWidth - 0.5) * 2;
      mouseY = -(event.clientY / innerHeight - 0.5) * 2;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // 5. Render Loop
    let animId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth inertia mouse tracking
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      // Rotate central cluster
      centralGroup.rotation.x = targetY * 0.8 + elapsedTime * 0.2;
      centralGroup.rotation.y = targetX * 1.2 + elapsedTime * 0.3;
      centralGroup.position.y = Math.sin(elapsedTime * 0.8) * 0.2;

      // Orbit satellites
      satellites.forEach((sat, idx) => {
        const offset = idx * 0.5;
        sat.position.y += Math.sin(elapsedTime * 1.5 + offset) * 0.003;
        sat.rotation.x += 0.02;
        sat.rotation.y += 0.02;
      });

      // Drifting particles
      particleSystem.rotation.y = elapsedTime * 0.03;
      particleSystem.rotation.x = targetY * 0.2;

      renderer.render(scene, camera);
    };

    animate();

    // 6. Resize listener
    const handleResize = () => {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      if (renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
      renderer.dispose();
      boxGeo1.dispose();
      boxGeo2.dispose();
      boxGeo3.dispose();
      smallGeo.dispose();
      material.dispose();
      satMaterial.dispose();
      particleGeo.dispose();
      particleMat.dispose();
    };
  }, []);

  return <div ref={containerRef} style={{ width: "100%", height: "100%", position: "absolute", inset: 0 }} />;
}
