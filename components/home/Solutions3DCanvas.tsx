"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

interface Solutions3DCanvasProps {
  activeIndex?: number;
}

/**
 * Solutions3DCanvas
 * 3D Titanium 13 Monolith background for the Capabilities (What We Do) section.
 * Operates in continuous slow kinetic drift and responds to active capability hover.
 */
export function Solutions3DCanvas({ activeIndex = 0 }: Solutions3DCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const activeIndexRef = useRef(activeIndex);

  useEffect(() => {
    activeIndexRef.current = activeIndex;
  }, [activeIndex]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 100);
    camera.position.set(0, 0, 11.2);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.35;
    container.appendChild(renderer.domElement);

    // Helper: 1 Monolith
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

    // Helper: 3 Ribbon
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

    // Materials: Dark Obsidian Titanium with specular glint
    const matTitaniumOne = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color(0x08090c),
      roughness: 0.28,
      metalness: 0.90,
      clearcoat: 0.90,
      clearcoatRoughness: 0.10,
      reflectivity: 0.95,
      transparent: true,
      opacity: 0.80,
    });

    const matTitaniumThree = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color(0x06070a),
      roughness: 0.28,
      metalness: 0.90,
      clearcoat: 0.90,
      clearcoatRoughness: 0.10,
      reflectivity: 0.95,
      transparent: true,
      opacity: 0.80,
    });

    const oneGeo = new THREE.ExtrudeGeometry(createOneShape(), extrudeSettings);
    oneGeo.center();
    const oneMesh = new THREE.Mesh(oneGeo, matTitaniumOne);
    oneMesh.position.set(-1.35, 0, 0);

    const threeGeo = new THREE.ExtrudeGeometry(createThreeShape(), extrudeSettings);
    threeGeo.center();
    const threeMesh = new THREE.Mesh(threeGeo, matTitaniumThree);
    threeMesh.position.set(0.65, 0, 0);

    const thirteenGroup = new THREE.Group();
    thirteenGroup.add(oneMesh);
    thirteenGroup.add(threeMesh);
    thirteenGroup.scale.setScalar(0.46);
    scene.add(thirteenGroup);

    // Stardust ambient particles
    const particleCount = 70;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleData: Array<{ radius: number; theta: number; vr: number; vtheta: number; z: number }> = [];

    for (let i = 0; i < particleCount; i++) {
      const radius = 1.0 + Math.random() * 3.2;
      const theta = Math.random() * Math.PI * 2;
      const z = (Math.random() - 0.5) * 3.2;

      particlePositions[i * 3] = radius * Math.cos(theta);
      particlePositions[i * 3 + 1] = radius * Math.sin(theta);
      particlePositions[i * 3 + 2] = z;

      particleData.push({
        radius,
        theta,
        vr: 0.001 + Math.random() * 0.0025,
        vtheta: (Math.random() > 0.5 ? 1 : -1) * (0.002 + Math.random() * 0.0035),
        z,
      });
    }

    particleGeo.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3));

    const pCanvas = document.createElement("canvas");
    pCanvas.width = 64;
    pCanvas.height = 64;
    const pCtx = pCanvas.getContext("2d");
    if (pCtx) {
      const grad = pCtx.createRadialGradient(32, 32, 0, 32, 32, 32);
      grad.addColorStop(0, "rgba(255, 255, 255, 0.9)");
      grad.addColorStop(0.3, "rgba(200, 220, 255, 0.4)");
      grad.addColorStop(1, "rgba(0, 0, 0, 0)");
      pCtx.fillStyle = grad;
      pCtx.fillRect(0, 0, 64, 64);
    }
    const pTexture = new THREE.CanvasTexture(pCanvas);

    const particleMat = new THREE.PointsMaterial({
      size: 0.04,
      map: pTexture,
      transparent: true,
      opacity: 0.22,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const particleSystem = new THREE.Points(particleGeo, particleMat);
    scene.add(particleSystem);

    // Studio Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.35);
    scene.add(ambientLight);

    const topLight = new THREE.DirectionalLight(0xffffff, 10.0);
    topLight.position.set(0, 16, 2);
    scene.add(topLight);

    const frontLight = new THREE.DirectionalLight(0xffffff, 1.2);
    frontLight.position.set(0, 2, 10);
    scene.add(frontLight);

    const sideLight = new THREE.DirectionalLight(0xffffff, 4.0);
    sideLight.position.set(10, 5, -3);
    scene.add(sideLight);

    const backRim = new THREE.DirectionalLight(0xffffff, 5.0);
    backRim.position.set(0, -6, -8);
    scene.add(backRim);

    // Mouse Parallax
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
    };
    window.addEventListener("resize", onResize);

    // Per-capability target rotations [rotY, rotX, posY, scale]
    const CAP_TARGETS = [
      { rotY: 0.0,            rotX: 0.05,  posY: 0.2,  scale: 0.50 }, // 01 Brand
      { rotY: Math.PI * 0.4, rotX: -0.08, posY: -0.3, scale: 0.48 }, // 02 Products
      { rotY: Math.PI * 0.9, rotX: 0.12,  posY: 0.5,  scale: 0.46 }, // 03 AI
      { rotY: Math.PI * 1.4, rotX: -0.04, posY: -0.1, scale: 0.52 }, // 04 Cloud
      { rotY: Math.PI * 1.8, rotX: 0.08,  posY: 0.3,  scale: 0.44 }, // 05 Growth
    ];

    // Kinematics Loop
    let rafId: number;
    let currentX = 0;
    let currentY = 1.5;
    let currentZ = -1.6;
    let currentRotX = 0.06;
    let currentRotY = 0;
    let currentRotZ = 0;
    const startTime = performance.now();

    const animate = () => {
      rafId = requestAnimationFrame(animate);
      const elapsedTime = (performance.now() - startTime) * 0.001;

      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      const active = activeIndexRef.current;
      const cap = CAP_TARGETS[Math.min(active, CAP_TARGETS.length - 1)];
      const idleFloatY = Math.sin(elapsedTime * 1.2) * 0.06;

      // Per-capability target overrides scroll-based drift
      const targetX = mouseX * 0.25;
      const targetY = cap.posY + idleFloatY + mouseY * 0.15;
      const targetZ = -1.6;
      const targetRotY = cap.rotY + mouseX * 0.18 + elapsedTime * 0.04;
      const targetRotX = cap.rotX + Math.sin(elapsedTime * 0.8) * 0.025 - mouseY * 0.10;
      const targetRotZ = mouseX * 0.025;

      // Slower damp for dramatic inter-capability transitions
      const damp = 0.032;
      currentX += (targetX - currentX) * damp;
      currentY += (targetY - currentY) * damp;
      currentZ += (targetZ - currentZ) * damp;
      currentRotX += (targetRotX - currentRotX) * damp;
      currentRotY += (targetRotY - currentRotY) * damp;
      currentRotZ += (targetRotZ - currentRotZ) * damp;

      // Scale per capability
      const targetScale = cap.scale;
      thirteenGroup.scale.x += (targetScale - thirteenGroup.scale.x) * 0.04;
      thirteenGroup.scale.y = thirteenGroup.scale.x;
      thirteenGroup.scale.z = thirteenGroup.scale.x;

      thirteenGroup.position.set(currentX, currentY, currentZ);
      thirteenGroup.rotation.set(currentRotX, currentRotY, currentRotZ);

      // Update particles
      const posAttr = particleGeo.attributes.position as THREE.BufferAttribute;
      const arr = posAttr.array as Float32Array;
      for (let i = 0; i < particleCount; i++) {
        const item = particleData[i];
        item.radius += item.vr;
        item.theta += item.vtheta;
        if (item.radius > 5.0) item.radius = 1.2;
        arr[i * 3] = currentX + item.radius * Math.cos(item.theta);
        arr[i * 3 + 1] = currentY + item.radius * Math.sin(item.theta) * 0.85;
        arr[i * 3 + 2] = currentZ + item.z + Math.sin(elapsedTime * 1.5 + i) * 0.2;
      }
      posAttr.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onPointerMove);
      if (renderer.domElement) {
        renderer.domElement.remove();
      }
      oneGeo.dispose();
      threeGeo.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      pTexture.dispose();
      matTitaniumOne.dispose();
      matTitaniumThree.dispose();
      renderer.dispose();
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
        overflow: "hidden",
      }}
      aria-hidden="true"
    />
  );
}
