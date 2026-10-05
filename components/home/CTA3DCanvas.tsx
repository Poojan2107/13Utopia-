"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * CTA3DCanvas — Section 05 (Initiation CTA)
 * The 3D 13 Monolith ascends into center stage directly behind "HAVE AN UNREASONABLE IDEA?".
 */
export function CTA3DCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });
  const scrollEntryRef = useRef(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 100);
    camera.position.set(0, 0, 11.2);

    const isMobile = (container.clientWidth || window.innerWidth) < 768;
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, isMobile ? 1.0 : 1.35));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.35;
    container.appendChild(renderer.domElement);

    // Geometry for 13 Utopia Monolith
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

    const matTitaniumOne = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color(0x18191c),
      roughness: 0.20,
      metalness: 0.88,
      clearcoat: 0.85,
      clearcoatRoughness: 0.08,
      reflectivity: 0.95,
    });

    const matTitaniumThree = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color(0x141518),
      roughness: 0.22,
      metalness: 0.86,
      clearcoat: 0.85,
      clearcoatRoughness: 0.08,
      reflectivity: 0.95,
    });

    const oneGeo = new THREE.ExtrudeGeometry(createOneShape(), extrudeSettings);
    oneGeo.center();
    const oneMesh = new THREE.Mesh(oneGeo, matTitaniumOne);
    oneMesh.position.set(-1.35, 0, 0);

    const threeGeo = new THREE.ExtrudeGeometry(createThreeShape(), extrudeSettings);
    threeGeo.center();
    const threeMesh = new THREE.Mesh(threeGeo, matTitaniumThree);
    threeMesh.position.set(0.65, 0, 0);

    const emblemGroup = new THREE.Group();
    emblemGroup.add(oneMesh);
    emblemGroup.add(threeMesh);
    scene.add(emblemGroup);

    // ── Floating Particle Field ──
    const particleCount = 180;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleVelocities: Array<{ vy: number }> = [];

    for (let i = 0; i < particleCount; i++) {
      const radius = 3.2 + Math.random() * 6.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      particlePositions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 7.0;
      particlePositions[i * 3 + 2] = radius * Math.sin(phi) * Math.sin(theta) - 2.0;

      particleVelocities.push({
        vy: 0.003 + Math.random() * 0.005,
      });
    }

    particleGeo.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3));

    const pCanvas = document.createElement("canvas");
    pCanvas.width = 64;
    pCanvas.height = 64;
    const pCtx = pCanvas.getContext("2d");
    if (pCtx) {
      const grad = pCtx.createRadialGradient(32, 32, 0, 32, 32, 32);
      grad.addColorStop(0, "rgba(255, 255, 255, 1.0)");
      grad.addColorStop(0.3, "rgba(244, 223, 200, 0.65)");
      grad.addColorStop(0.7, "rgba(255, 255, 255, 0.15)");
      grad.addColorStop(1, "rgba(0, 0, 0, 0)");
      pCtx.fillStyle = grad;
      pCtx.fillRect(0, 0, 64, 64);
    }
    const particleTexture = new THREE.CanvasTexture(pCanvas);

    const particleMat = new THREE.PointsMaterial({
      size: 0.06,
      map: particleTexture,
      transparent: true,
      opacity: 0.22,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particleSystem = new THREE.Points(particleGeo, particleMat);
    scene.add(particleSystem);

    // Studio Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 4.2);
    keyLight.position.set(6, 8, 7);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0x8899aa, 2.0);
    fillLight.position.set(-8, 3, 5);
    scene.add(fillLight);

    const goldRimLight = new THREE.DirectionalLight(0xf4dfc8, 5.5);
    goldRimLight.position.set(5, -5, -4);
    scene.add(goldRimLight);

    const cyanRimLight = new THREE.DirectionalLight(0xd0e8ff, 4.2);
    cyanRimLight.position.set(-7, 4, -4);
    scene.add(cyanRimLight);

    const topSpecularLight = new THREE.DirectionalLight(0xffffff, 2.8);
    topSpecularLight.position.set(0, 12, 1);
    scene.add(topSpecularLight);

    // Mouse & Touch Interaction
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.targetX = (e.clientX / window.innerWidth - 0.5) * 0.35;
      mouseRef.current.targetY = (e.clientY / window.innerHeight - 0.5) * 0.35;
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        mouseRef.current.targetX = (e.touches[0].clientX / window.innerWidth - 0.5) * 0.35;
        mouseRef.current.targetY = (e.touches[0].clientY / window.innerHeight - 0.5) * 0.35;
      }
    };
    window.addEventListener("touchmove", handleTouchMove, { passive: true });

    // ScrollTrigger across CTA Section
    const sectionEl = container.closest("section") || container;
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionEl,
        start: "top bottom",
        end: "center center",
        scrub: 1.0,
        onUpdate: (self) => {
          scrollEntryRef.current = self.progress;
        },
      });
    }, container);

    let rafId: number;
    let isVisible = true;
    const startTime = performance.now();

    // IntersectionObserver to pause rendering when out of viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0.05 }
    );
    observer.observe(container);

    let currentY = -3.5;
    let currentZ = -4.0;
    let currentScale = 0.70;
    let currentRotX = -0.20;
    let currentRotY = 0;

    const smoothstep = (min: number, max: number, value: number) => {
      const x = Math.max(0, Math.min(1, (value - min) / (max - min)));
      return x * x * (3 - 2 * x);
    };

    const animate = () => {
      rafId = requestAnimationFrame(animate);
      if (!isVisible || document.hidden) return;

      const elapsedTime = (performance.now() - startTime) * 0.001;
      const entry = smoothstep(0.0, 1.0, scrollEntryRef.current);

      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;

      // Update 3D Floating Particle Sparks
      const posAttr = particleGeo.attributes.position as THREE.BufferAttribute;
      const arr = posAttr.array as Float32Array;
      for (let i = 0; i < particleCount; i++) {
        const vel = particleVelocities[i];
        arr[i * 3 + 1] += vel.vy;
        if (arr[i * 3 + 1] > 5.0) {
          arr[i * 3 + 1] = -5.0;
        }
      }
      posAttr.needsUpdate = true;
      particleSystem.rotation.y = elapsedTime * 0.04 + mouseRef.current.x * 0.2;

      // Smooth ascent from below right into center stage + continuous 360-degree rotation
      const targetY = -3.5 * (1 - entry) + Math.sin(elapsedTime * 0.5) * 0.06;
      const targetZ = -4.0 * (1 - entry);
      const targetScale = 0.70 + 0.25 * entry;
      const targetRotX = -0.20 * (1 - entry) + 0.06 + Math.sin(elapsedTime * 0.3) * 0.04 - mouseRef.current.y * 0.2;
      const targetRotY = (1 - entry) * -Math.PI * 0.5 + elapsedTime * 0.55 + mouseRef.current.x * 0.35;

      const damp = 0.08;
      currentY += (targetY - currentY) * damp;
      currentZ += (targetZ - currentZ) * damp;
      currentScale += (targetScale - currentScale) * damp;
      currentRotX += (targetRotX - currentRotX) * damp;
      currentRotY += (targetRotY - currentRotY) * damp;

      emblemGroup.position.set(0, currentY, currentZ);
      emblemGroup.scale.setScalar(currentScale);
      emblemGroup.rotation.set(currentRotX, currentRotY, 0);

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", handleResize, { passive: true });

    return () => {
      ctx.revert();
      cancelAnimationFrame(rafId);
      observer.disconnect();
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("resize", handleResize);
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      oneGeo.dispose();
      threeGeo.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      particleTexture.dispose();
      matTitaniumOne.dispose();
      matTitaniumThree.dispose();
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
