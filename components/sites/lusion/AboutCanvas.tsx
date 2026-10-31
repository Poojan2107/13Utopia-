"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export function AboutCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x060709, 0.04);

    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 9);

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

    // 2. Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const celestialLight = new THREE.DirectionalLight(0xe2f1ff, 2.5);
    celestialLight.position.set(0, 10, 5);
    scene.add(celestialLight);

    const rimLight = new THREE.DirectionalLight(0x00f2fe, 1.8);
    rimLight.position.set(-6, -4, -4);
    scene.add(rimLight);

    // 3. Floating Particle Cloud / Nebula
    const particleCount = 650;
    const particlePositions = new Float32Array(particleCount * 3);
    const particleScales = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = Math.cbrt(Math.random()) * 2.8;

      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta) + 2.5; // elevated
      const z = r * Math.cos(phi);

      particlePositions[i * 3] = x;
      particlePositions[i * 3 + 1] = y;
      particlePositions[i * 3 + 2] = z;
      particleScales[i] = Math.random() * 0.08 + 0.02;
    }

    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.12,
      color: 0xffffff,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
    });

    const particleCloud = new THREE.Points(particleGeo, particleMat);
    scene.add(particleCloud);

    // Also add central dense glowing core spheres
    const coreGroup = new THREE.Group();
    coreGroup.position.set(0, 2.5, 0);
    const coreMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      emissive: 0x88ccff,
      emissiveIntensity: 0.8,
      roughness: 0.2,
      metalness: 0.9,
    });
    const coreSphereGeo = new THREE.SphereGeometry(0.18, 16, 16);

    for (let i = 0; i < 30; i++) {
      const sphere = new THREE.Mesh(coreSphereGeo, coreMat);
      const radius = Math.random() * 1.2;
      const angle = Math.random() * Math.PI * 2;
      const elevation = (Math.random() - 0.5) * 1.0;
      sphere.position.set(
        Math.cos(angle) * radius,
        elevation,
        Math.sin(angle) * radius
      );
      const scale = 0.4 + Math.random() * 0.8;
      sphere.scale.set(scale, scale, scale);
      coreGroup.add(sphere);
    }
    scene.add(coreGroup);

    // 4. Lunar Moonscape Crater Terrain (Wavy Surface)
    const terrainGeo = new THREE.PlaneGeometry(30, 24, 64, 48);
    const posAttr = terrainGeo.attributes.position;
    for (let i = 0; i < posAttr.count; i++) {
      const vx = posAttr.getX(i);
      const vy = posAttr.getY(i);
      // Crater ridges and undulating hills
      const distFromCenter = Math.sqrt(vx * vx + vy * vy);
      let elevation = Math.sin(vx * 0.4) * Math.cos(vy * 0.4) * 0.8;
      elevation += Math.sin(vx * 1.2 + vy * 0.8) * 0.25;
      // bowl depression in center
      elevation += Math.min(2.5, Math.pow(distFromCenter * 0.2, 2.2));
      posAttr.setZ(i, elevation);
    }
    terrainGeo.computeVertexNormals();

    const terrainMat = new THREE.MeshStandardMaterial({
      color: 0x181a20,
      roughness: 0.85,
      metalness: 0.2,
      flatShading: true,
      wireframe: false,
    });

    const terrainMesh = new THREE.Mesh(terrainGeo, terrainMat);
    terrainMesh.rotation.x = -Math.PI / 2;
    terrainMesh.position.set(0, -3.2, 0);
    scene.add(terrainMesh);

    // 5. Stylized Standing Astronaut Figure
    const astronautGroup = new THREE.Group();
    astronautGroup.position.set(0, -2.6, 0.5);

    const suitMat = new THREE.MeshStandardMaterial({
      color: 0xeeeeee,
      roughness: 0.4,
      metalness: 0.1,
    });

    const visorMat = new THREE.MeshPhysicalMaterial({
      color: 0x050505,
      roughness: 0.05,
      metalness: 0.95,
      clearcoat: 1.0,
      reflectivity: 1.0,
    });

    // Helmet
    const helmet = new THREE.Mesh(new THREE.SphereGeometry(0.2, 16, 16), suitMat);
    helmet.position.y = 0.65;
    astronautGroup.add(helmet);

    // Visor
    const visor = new THREE.Mesh(new THREE.SphereGeometry(0.12, 16, 16), visorMat);
    visor.position.set(0, 0.65, 0.12);
    astronautGroup.add(visor);

    // Torso & backpack
    const torso = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.16, 0.45, 12), suitMat);
    torso.position.y = 0.32;
    astronautGroup.add(torso);

    const backpack = new THREE.Mesh(new THREE.BoxGeometry(0.26, 0.35, 0.14), suitMat);
    backpack.position.set(0, 0.36, -0.15);
    astronautGroup.add(backpack);

    // Legs
    const leftLeg = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.08, 0.4, 8), suitMat);
    leftLeg.position.set(-0.11, -0.05, 0);
    const rightLeg = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.08, 0.4, 8), suitMat);
    rightLeg.position.set(0.11, -0.05, 0);
    astronautGroup.add(leftLeg, rightLeg);

    scene.add(astronautGroup);

    // 6. Vertical Volumetric Light Column / Beam
    const beamGeo = new THREE.CylinderGeometry(0.15, 0.9, 5.8, 24, 1, true);
    const beamMat = new THREE.MeshBasicMaterial({
      color: 0xdff6ff,
      transparent: true,
      opacity: 0.38,
      blending: THREE.AdditiveBlending,
      side: THREE.DoubleSide,
    });
    const lightBeam = new THREE.Mesh(beamGeo, beamMat);
    lightBeam.position.set(0, 0.1, 0.5);
    scene.add(lightBeam);

    // 7. Mouse & Scroll interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;
    let scrollY = 0;
    let targetScrollY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      targetMouseX = (e.clientX / innerWidth - 0.5) * 2;
      targetMouseY = -(e.clientY / innerHeight - 0.5) * 2;
    };

    const handleScroll = () => {
      targetScrollY = window.scrollY;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll, { passive: true });

    // 8. Animation Loop
    let animId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth inertia
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;
      scrollY += (targetScrollY - scrollY) * 0.08;

      // Scroll progression (0 at top, 1 at 800px, 2 at 1800px+)
      const scrollProgress = Math.min(scrollY / 900, 2.5);

      // Camera position interpolation based on scroll:
      // Hero stage: Camera looks up at particle cloud
      // Manifesto/Astronaut stage: Camera moves down, pitches forward to frame astronaut and beam
      const camY = 0.5 - scrollProgress * 1.4 + mouseY * 0.4;
      const camZ = 9.0 - Math.min(scrollProgress * 2.2, 4.0);
      const camX = mouseX * 0.8;

      camera.position.set(camX, camY, camZ);
      camera.lookAt(0, -1.2 + (1.0 - Math.min(scrollProgress, 1.0)) * 2.5, 0);

      // Rotate particle cloud gently
      particleCloud.rotation.y = elapsedTime * 0.08;
      particleCloud.rotation.x = Math.sin(elapsedTime * 0.2) * 0.05;

      // Pulse core spheres
      coreGroup.rotation.y = elapsedTime * 0.12;
      coreGroup.position.y = 2.5 + Math.sin(elapsedTime * 1.2) * 0.15;

      // Pulse vertical beam
      beamMat.opacity = 0.25 + Math.sin(elapsedTime * 3.0) * 0.1 + Math.min(scrollProgress * 0.15, 0.2);

      // Fade out scene when user scrolls past the astronaut (scrollY > 600px)
      const fadeFactor = Math.max(0, 1.0 - Math.max(0, scrollY - 600) / 450);
      renderer.domElement.style.opacity = fadeFactor.toString();

      renderer.render(scene, camera);
    };

    animate();

    // 9. Resize handler
    const handleResize = () => {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      if (renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
      renderer.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      coreSphereGeo.dispose();
      coreMat.dispose();
      terrainGeo.dispose();
      terrainMat.dispose();
      suitMat.dispose();
      visorMat.dispose();
      beamGeo.dispose();
      beamMat.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
      }}
    />
  );
}
