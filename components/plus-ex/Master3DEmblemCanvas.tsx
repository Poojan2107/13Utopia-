"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export function Master3DEmblemCanvas() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });
  const scrollRef = useRef({ current: 0, target: 0 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = window.innerWidth;
    const height = window.innerHeight;

    // 1. Scene & Camera
    const scene = new THREE.Scene();
    scene.background = null; // Transparent master layer

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

    // Shape 3: Organic Ribbon "3"
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

    // Dynamic Materials (Dark vs Light Adaptability)
    const matOne = new THREE.MeshStandardMaterial({
      color: new THREE.Color(0x22262e),
      roughness: 0.14,
      metalness: 0.94,
      emissive: new THREE.Color(0x050608),
    });

    const matThree = new THREE.MeshStandardMaterial({
      color: new THREE.Color(0x1e222a),
      roughness: 0.14,
      metalness: 0.94,
      emissive: new THREE.Color(0x050608),
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

    emblemGroup.position.set(0, 0, -1.2);
    scene.add(emblemGroup);

    // 4. Studio Lighting Rig
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.5);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 3.6);
    keyLight.position.set(7, 9, 8);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0xaaaaaa, 1.8);
    fillLight.position.set(-7, 2, 5);
    scene.add(fillLight);

    const rimLight = new THREE.DirectionalLight(0xffffff, 2.8);
    rimLight.position.set(4, -6, -3);
    scene.add(rimLight);

    // 5. Scroll & Mouse Tracking
    const onScroll = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? window.scrollY / docHeight : 0;
      scrollRef.current.target = Math.max(0, Math.min(1, progress));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    const onMouseMove = (e: MouseEvent) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      mouseRef.current.targetX = (e.clientX - cx) / cx;
      mouseRef.current.targetY = (e.clientY - cy) / cy;
    };
    window.addEventListener("mousemove", onMouseMove, { passive: true });

    const onResize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", onResize);

    // 6. Master Render & Transformation Loop
    let rafId: number;
    const startTime = performance.now();

    // Color interpolation targets
    const darkColOne = new THREE.Color(0x22262e);
    const darkColThree = new THREE.Color(0x1e222a);
    const lightColOne = new THREE.Color(0x22262e);
    const lightColThree = new THREE.Color(0x1e222a);

    const animate = () => {
      rafId = requestAnimationFrame(animate);
      const elapsed = (performance.now() - startTime) * 0.001;
      const isMobile = window.innerWidth <= 900;

      // Smooth scroll interpolation
      scrollRef.current.current +=
        (scrollRef.current.target - scrollRef.current.current) * 0.08;
      const p = scrollRef.current.current;

      // Mouse inertia
      mouseRef.current.x +=
        (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
      mouseRef.current.y +=
        (mouseRef.current.targetY - mouseRef.current.y) * 0.05;

      /**
       * MULTI-SECTION ADAPTIVE TRANSFORMATION:
       *
       * 1. HERO (p: 0.00 -> 0.18):
       *    - Center position, front-facing with subtle cinematic breath
       *    - Dark palette
       *
       * 2. PORTFOLIO / THE WORK (p: 0.18 -> 0.45):
       *    - Transforms color to deep onyx (high contrast against cream #f4eae0)
       *    - Slightly elevated and deep in z-space behind cards
       *    - Majestic slow 3D rotation
       *
       * 3. CAPABILITIES / TRIAD (p: 0.45 -> 0.72):
       *    - Returns to dark graphite palette
       *    - Shifts to the right rail (x: +2.2) to make room for capability cards
       *    - Angled tilt & rotation
       *
       * 4. BENCHMARKS / STATS (p: 0.72 -> 0.88):
       *    - Shifts to the left rail (x: -2.2)
       *    - Elevated tilt with champagne rim light emphasis
       *
       * 5. INITIATION & FINALE (p: 0.88 -> 1.00):
       *    - Resolves back to dead center (x: 0, y: 0)
       *    - Full 360-deg rotation completes back to iconic front-facing "13"
       */

      // Calculate section weights
      let targetX = 0;
      let targetY = 0;
      let targetZ = -1.2;
      let targetRotY = p * Math.PI * 2.5;
      let targetRotX = Math.sin(p * Math.PI) * 0.35;
      let targetRotZ = Math.sin(p * Math.PI * 2) * 0.15;
      let isLightSection = false;

      if (p < 0.18) {
        // Hero: Centered monumental
        targetX = isMobile ? 0 : 0.8;
        targetY = isMobile ? -0.4 : 0;
        targetZ = isMobile ? -2.5 : -1.2;
        targetRotY = mouseRef.current.x * 0.25;
        targetRotX = mouseRef.current.y * 0.15;
        targetRotZ = 0;
      } else if (p >= 0.18 && p < 0.45) {
        // Portfolio (Light/Cream section):
        isLightSection = true;
        const subP = (p - 0.18) / (0.45 - 0.18);
        targetX = Math.sin(subP * Math.PI) * (isMobile ? 0 : 1.2);
        targetY = 0.3;
        targetZ = isMobile ? -3.8 : -2.6; // Deeper so cards float cleanly in front
        targetRotY = subP * Math.PI * 0.8;
        targetRotX = 0.2;
      } else if (p >= 0.45 && p < 0.72) {
        // Capabilities: Offset to Right
        targetX = isMobile ? 0 : 2.2;
        targetY = isMobile ? -1.0 : 0.2;
        targetZ = isMobile ? -2.8 : -1.4;
        targetRotY = (p - 0.45) * Math.PI * 1.5;
        targetRotX = 0.25;
      } else if (p >= 0.72 && p < 0.88) {
        // Benchmarks: Offset to Left
        targetX = isMobile ? 0 : -2.2;
        targetY = isMobile ? 1.0 : -0.1;
        targetZ = isMobile ? -2.8 : -1.4;
        targetRotY = (p - 0.72) * Math.PI * 1.5;
        targetRotX = -0.2;
      } else {
        // Finale: Center return
        targetX = 0;
        targetY = 0;
        targetZ = isMobile ? -2.5 : -1.2;
        targetRotY = Math.PI * 2; // Completes 360 deg
        targetRotX = 0;
        targetRotZ = 0;
      }

      // Smooth color morphing for light vs dark sections
      const targetColOne = isLightSection ? lightColOne : darkColOne;
      const targetColThree = isLightSection ? lightColThree : darkColThree;
      matOne.color.lerp(targetColOne, 0.06);
      matThree.color.lerp(targetColThree, 0.06);

      // Light intensity adjustments
      keyLight.intensity = isLightSection ? 4.2 : 3.6;
      ambientLight.intensity = isLightSection ? 2.0 : 1.5;

      // Mouse & Idle float addition
      const idleFloat = Math.sin(elapsed * 0.8) * 0.025;
      const finalRotX = targetRotX + mouseRef.current.y * 0.12 + idleFloat;
      const finalRotY = targetRotY + mouseRef.current.x * 0.18;
      const finalRotZ = targetRotZ + mouseRef.current.x * 0.06;

      emblemGroup.rotation.x += (finalRotX - emblemGroup.rotation.x) * 0.08;
      emblemGroup.rotation.y += (finalRotY - emblemGroup.rotation.y) * 0.08;
      emblemGroup.rotation.z += (finalRotZ - emblemGroup.rotation.z) * 0.08;

      const finalPosX = targetX + mouseRef.current.x * 0.25;
      const finalPosY = targetY - mouseRef.current.y * 0.15 + idleFloat;
      const finalPosZ = targetZ;

      emblemGroup.position.x += (finalPosX - emblemGroup.position.x) * 0.06;
      emblemGroup.position.y += (finalPosY - emblemGroup.position.y) * 0.06;
      emblemGroup.position.z += (finalPosZ - emblemGroup.position.z) * 0.06;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
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
      style={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: 1, // Behind typography and cards, but above base backgrounds
      }}
      aria-hidden="true"
    />
  );
}
