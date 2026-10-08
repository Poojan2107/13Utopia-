"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

interface ServiceWorld3DCanvasProps {
  slug: "create" | "build" | "grow";
  accentColor?: string;
}

export function ServiceWorld3DCanvas({
  slug,
  accentColor = "#ffffff",
}: ServiceWorld3DCanvasProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let width = container.clientWidth || 600;
    let height = container.clientHeight || 700;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(0, 0, 8.5);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(typeof window !== "undefined" ? window.devicePixelRatio : 1, 1.75));
    renderer.setSize(width, height);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.4;
    container.appendChild(renderer.domElement);

    // Dynamic Studio Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 2.5);
    keyLight.position.set(5, 8, 7);
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0x88aacc, 1.8);
    rimLight.position.set(-6, -4, -5);
    scene.add(rimLight);

    const pointLight = new THREE.PointLight(0xffffff, 2.2, 12);
    pointLight.position.set(0, 2, 4);
    scene.add(pointLight);

    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // Geometries & meshes based on slug
    const disposables: { dispose: () => void }[] = [];

    if (slug === "create") {
      // WORLD 01: CREATE — Iridescent Refractive Polyhedral Monolith
      const coreGeo = new THREE.IcosahedronGeometry(2.0, 1);
      disposables.push(coreGeo);

      const coreMat = new THREE.MeshPhysicalMaterial({
        color: new THREE.Color(0x22262e),
        roughness: 0.14,
        metalness: 0.94,
        emissive: new THREE.Color(0x050608),
        clearcoat: 1.0,
        clearcoatRoughness: 0.08,
        reflectivity: 0.95,
      });
      disposables.push(coreMat);

      const coreMesh = new THREE.Mesh(coreGeo, coreMat);
      mainGroup.add(coreMesh);

      // Outer kinetic wireframe facet cage
      const wireGeo = new THREE.IcosahedronGeometry(2.35, 1);
      disposables.push(wireGeo);

      const wireMat = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        wireframe: true,
        transparent: true,
        opacity: 0.25,
      });
      disposables.push(wireMat);

      const wireMesh = new THREE.Mesh(wireGeo, wireMat);
      mainGroup.add(wireMesh);

      // Orbital halo ring
      const haloGeo = new THREE.TorusGeometry(2.7, 0.02, 16, 80);
      disposables.push(haloGeo);
      const haloMat = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.4,
      });
      disposables.push(haloMat);
      const haloMesh = new THREE.Mesh(haloGeo, haloMat);
      haloMesh.rotation.x = Math.PI / 3;
      mainGroup.add(haloMesh);
    } else if (slug === "build") {
      // WORLD 02: BUILD — Cybernetic Monolith Frame & Quantum Node Core
      const boxGeo = new THREE.BoxGeometry(2.4, 2.4, 2.4);
      disposables.push(boxGeo);

      const boxMat = new THREE.MeshPhysicalMaterial({
        color: new THREE.Color(0x22262e),
        roughness: 0.14,
        metalness: 0.94,
        emissive: new THREE.Color(0x050608),
        clearcoat: 0.9,
      });
      disposables.push(boxMat);

      const boxMesh = new THREE.Mesh(boxGeo, boxMat);
      mainGroup.add(boxMesh);

      // Inner glowing core
      const innerGeo = new THREE.OctahedronGeometry(1.2, 0);
      disposables.push(innerGeo);
      const innerMat = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        wireframe: true,
        transparent: true,
        opacity: 0.7,
      });
      disposables.push(innerMat);
      const innerMesh = new THREE.Mesh(innerGeo, innerMat);
      mainGroup.add(innerMesh);

      // Orbiting coordinate grid rings
      const ringGeo1 = new THREE.TorusGeometry(2.5, 0.02, 16, 64);
      disposables.push(ringGeo1);
      const ringMat = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.35,
      });
      disposables.push(ringMat);

      const ring1 = new THREE.Mesh(ringGeo1, ringMat);
      ring1.rotation.x = Math.PI / 4;
      mainGroup.add(ring1);

      const ring2 = new THREE.Mesh(ringGeo1, ringMat);
      ring2.rotation.y = Math.PI / 4;
      mainGroup.add(ring2);
    } else {
      // WORLD 03: GROW — Concentric Gravitational Vortex & Ascending Helix
      const torusGeo1 = new THREE.TorusGeometry(1.9, 0.18, 20, 64);
      disposables.push(torusGeo1);
      const torusMat1 = new THREE.MeshPhysicalMaterial({
        color: new THREE.Color(0x22262e),
        roughness: 0.14,
        metalness: 0.94,
        emissive: new THREE.Color(0x050608),
        clearcoat: 1.0,
      });
      disposables.push(torusMat1);

      const torus1 = new THREE.Mesh(torusGeo1, torusMat1);
      mainGroup.add(torus1);

      const torusGeo2 = new THREE.TorusGeometry(1.3, 0.12, 16, 48);
      disposables.push(torusGeo2);
      const torus2 = new THREE.Mesh(torusGeo2, torusMat1);
      torus2.rotation.x = Math.PI / 2.3;
      mainGroup.add(torus2);

      const torusGeo3 = new THREE.TorusGeometry(2.4, 0.025, 16, 80);
      disposables.push(torusGeo3);
      const torusWire = new THREE.Mesh(
        torusGeo3,
        new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.3 })
      );
      disposables.push(torusWire.material);
      mainGroup.add(torusWire);
    }

    // Ambient Floating Specimen Particles
    const particleCount = 100;
    const particleGeo = new THREE.BufferGeometry();
    disposables.push(particleGeo);
    const particlePositions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePositions[i] = (Math.random() - 0.5) * 8;
      particlePositions[i + 1] = (Math.random() - 0.5) * 8;
      particlePositions[i + 2] = (Math.random() - 0.5) * 6;
    }
    particleGeo.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3));
    const particleMat = new THREE.PointsMaterial({
      size: 0.035,
      color: 0xffffff,
      transparent: true,
      opacity: 0.5,
      blending: THREE.AdditiveBlending,
    });
    disposables.push(particleMat);
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // Mouse Interaction
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouse.targetX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.targetY = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
    };

    container.addEventListener("mousemove", handleMouseMove);

    const handleResize = () => {
      if (!container) return;
      width = container.clientWidth || 600;
      height = container.clientHeight || 700;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener("resize", handleResize);

    // Animation Loop
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Mouse Lerp
      mouse.x += (mouse.targetX - mouse.x) * 0.06;
      mouse.y += (mouse.targetY - mouse.y) * 0.06;

      mainGroup.rotation.y = elapsedTime * 0.28 + mouse.x * 0.4;
      mainGroup.rotation.x = Math.sin(elapsedTime * 0.35) * 0.15 - mouse.y * 0.3;
      mainGroup.position.y = Math.sin(elapsedTime * 1.2) * 0.12;

      particles.rotation.y = elapsedTime * 0.04;
      particles.rotation.x = -elapsedTime * 0.02;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      container.removeEventListener("mousemove", handleMouseMove);

      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }

      disposables.forEach((d) => d.dispose());
      renderer.dispose();
    };
  }, [slug, accentColor]);

  return (
    <div
      ref={containerRef}
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        minHeight: "480px",
        cursor: "grab",
        userSelect: "none",
      }}
      aria-label={`Interactive 3D Specimen for ${slug.toUpperCase()}`}
    />
  );
}
