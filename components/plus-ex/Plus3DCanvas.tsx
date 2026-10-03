"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import styles from "@/styles/plus-ex/Plus3DCanvas.module.css";

export interface Plus3DCanvasProps {
  progress?: number;
  entryProgress?: number;
  className?: string;
  theme?: "dark" | "light" | "transparent";
}

/**
 * 3D 13 Utopia Architectural Emblem Canvas
 * Plus-X Exact Materiality & Kinematics:
 * Matte architectural titanium monoliths with razor chamfers, deep studio lighting,
 * and a full continuous scroll-driven rotation story:
 * Act 0: Centered "13"
 * Act 1 (CREATE): Left Column "BE" (360° spin)
 * Act 2 (BUILD): Right Column "13" (360° spin)
 * Act 3 (GROW): Left Column "BE" (360° spin)
 * Finale: Sweeps to Center "13" and dives down into depth behind the portfolio
 */
export function Plus3DCanvas({
  progress = 0,
  entryProgress = 1,
  className,
  theme = "transparent",
}: Plus3DCanvasProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const groupRef = useRef<THREE.Group | null>(null);
  const progressRef = useRef(progress);
  const entryProgressRef = useRef(entryProgress);

  useEffect(() => {
    progressRef.current = progress;
  }, [progress]);

  useEffect(() => {
    entryProgressRef.current = entryProgress;
  }, [entryProgress]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    // Scene
    const scene = new THREE.Scene();
    if (theme === "dark") {
      scene.background = new THREE.Color(0x000000);
    } else if (theme === "light") {
      scene.background = new THREE.Color(0xf4eae0);
    } else {
      scene.background = null;
    }

    // Camera with cinematic perspective centered
    const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 100);
    camera.position.set(0, 0, 11.2);

    // Renderer
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

    // 3D "13" Emblem Group
    const emblemGroup = new THREE.Group();

    // Helper: Tapered Architectural Monolith for "1"
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

    // Helper: Continuous Organic Ribbon for "3" (13 Utopia Brand Mark)
    const createThreeShape = () => {
      const shape = new THREE.Shape();

      shape.moveTo(-0.45, 2.82);
      shape.bezierCurveTo(0.30, 3.12, 1.30, 3.08, 1.88, 2.48);
      shape.bezierCurveTo(2.38, 1.95, 2.28, 1.12, 1.72, 0.52);

      // Outer waist transition
      shape.bezierCurveTo(1.32, 0.12, 1.12, 0.02, 1.18, -0.02);

      // Outer lower bowl & bottom crest
      shape.bezierCurveTo(1.38, -0.22, 2.18, -0.68, 2.32, -1.38);
      shape.bezierCurveTo(2.46, -2.18, 1.78, -3.12, 0.62, -3.12);
      shape.bezierCurveTo(-0.18, -3.12, -0.65, -2.82, -0.92, -2.32);

      // Bottom terminal rounded bulb
      shape.bezierCurveTo(-1.18, -1.82, -1.02, -1.32, -0.52, -1.38);

      // Inner lower bowl returning to center waist
      shape.bezierCurveTo(0.18, -1.42, 0.88, -1.68, 1.28, -1.32);
      shape.bezierCurveTo(1.58, -1.02, 1.48, -0.42, 0.98, -0.12);
      shape.bezierCurveTo(0.58, 0.12, 0.22, 0.18, 0.18, 0.08);

      // Inner upper bowl returning to top terminal
      shape.bezierCurveTo(0.12, -0.02, 0.38, 0.58, 0.78, 0.98);
      shape.bezierCurveTo(1.32, 1.48, 1.28, 1.98, 0.88, 2.18);
      shape.bezierCurveTo(0.38, 2.38, -0.12, 2.18, -0.48, 1.88);

      // Top terminal rounded cap closure
      shape.bezierCurveTo(-0.95, 1.92, -0.95, 2.78, -0.45, 2.82);

      shape.closePath();
      return shape;
    };

    // Helper: Mirrored Organic Ribbon for "E" (Exact 1:1 Kinship to "3", Mirrored)
    const createMirroredThreeShape = () => {
      const shape = new THREE.Shape();
      shape.moveTo(0.45, 2.82);
      shape.bezierCurveTo(-0.30, 3.12, -1.30, 3.08, -1.88, 2.48);
      shape.bezierCurveTo(-2.38, 1.95, -2.28, 1.12, -1.72, 0.52);
      shape.bezierCurveTo(-1.32, 0.12, -1.12, 0.02, -1.18, -0.02);
      shape.bezierCurveTo(-1.38, -0.22, -2.18, -0.68, -2.32, -1.38);
      shape.bezierCurveTo(-2.46, -2.18, -1.78, -3.12, -0.62, -3.12);
      shape.bezierCurveTo(0.18, -3.12, 0.65, -2.82, 0.92, -2.32);
      shape.bezierCurveTo(1.18, -1.82, 1.02, -1.32, 0.52, -1.38);
      shape.bezierCurveTo(-0.18, -1.42, -0.88, -1.68, -1.28, -1.32);
      shape.bezierCurveTo(-1.58, -1.02, -1.48, -0.42, -0.98, -0.12);
      shape.bezierCurveTo(-0.58, 0.12, -0.22, 0.18, -0.18, 0.08);
      shape.bezierCurveTo(-0.12, -0.02, -0.38, 0.58, -0.78, 0.98);
      shape.bezierCurveTo(-1.32, 1.48, -1.28, 1.98, -0.88, 2.18);
      shape.bezierCurveTo(-0.38, 2.38, 0.12, 2.18, 0.48, 1.88);
      shape.bezierCurveTo(0.95, 1.92, 0.95, 2.78, 0.45, 2.82);
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

    // 13 Utopia Exact Plus-X & Tenbin Material Grading: Matte Obsidian Architectural Titanium
    const matTitaniumOne = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color(0x1a1d22),
      roughness: 0.36,
      metalness: 0.72,
      clearcoat: 0.55,
      clearcoatRoughness: 0.20,
      reflectivity: 0.80,
      emissive: new THREE.Color(0x060709),
      emissiveIntensity: 0.15,
      polygonOffset: true,
      polygonOffsetFactor: -1,
      polygonOffsetUnits: -1,
    });

    const matTitaniumThree = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color(0x17191e),
      roughness: 0.38,
      metalness: 0.70,
      clearcoat: 0.55,
      clearcoatRoughness: 0.20,
      reflectivity: 0.80,
      emissive: new THREE.Color(0x050608),
      emissiveIntensity: 0.15,
      polygonOffset: true,
      polygonOffsetFactor: 1,
      polygonOffsetUnits: 1,
    });

    // ── 01. SUB-GROUP: "13" EMBLEM ─────────────────────────────
    const thirteenGroup = new THREE.Group();

    const oneGeo = new THREE.ExtrudeGeometry(createOneShape(), extrudeSettings);
    oneGeo.center();
    const oneMesh = new THREE.Mesh(oneGeo, matTitaniumOne);
    oneMesh.position.set(-1.35, 0, 0);
    thirteenGroup.add(oneMesh);

    const threeGeo = new THREE.ExtrudeGeometry(createThreeShape(), extrudeSettings);
    threeGeo.center();
    const threeMesh = new THREE.Mesh(threeGeo, matTitaniumThree);
    threeMesh.position.set(0.65, 0, 0);
    thirteenGroup.add(threeMesh);

    emblemGroup.add(thirteenGroup);

    // ── 02. SUB-GROUP: "BE" MONOLITH EMBLEM ────────────────────
    const beGroup = new THREE.Group();

    const bGroup = new THREE.Group();
    const bSpine = new THREE.Mesh(oneGeo, matTitaniumOne);
    bSpine.position.set(-1.00, 0, 0.003);
    const bBowls = new THREE.Mesh(threeGeo, matTitaniumThree);
    bBowls.position.set(0.40, 0, -0.003);
    bGroup.add(bSpine);
    bGroup.add(bBowls);
    bGroup.position.set(-2.28, 0, 0);
    beGroup.add(bGroup);

    const eGeo = new THREE.ExtrudeGeometry(createMirroredThreeShape(), extrudeSettings);
    eGeo.center();
    const eMesh = new THREE.Mesh(eGeo, matTitaniumThree);
    eMesh.position.set(2.12, 0, 0);
    beGroup.add(eMesh);

    beGroup.visible = false;
    emblemGroup.add(beGroup);

    // Center the entire 13 emblem group
    emblemGroup.scale.setScalar(0.88);
    emblemGroup.position.set(0, 0, -1.0);
    emblemGroup.rotation.set(0, 0, 0);
    scene.add(emblemGroup);
    groupRef.current = emblemGroup;

    // Procedural glowing circular point texture
    const pCanvas = document.createElement("canvas");
    pCanvas.width = 64;
    pCanvas.height = 64;
    const pCtx = pCanvas.getContext("2d");
    if (pCtx) {
      const grad = pCtx.createRadialGradient(32, 32, 0, 32, 32, 32);
      grad.addColorStop(0, "rgba(255, 255, 255, 1.0)");
      grad.addColorStop(0.25, "rgba(225, 238, 255, 0.85)");
      grad.addColorStop(0.60, "rgba(180, 205, 235, 0.25)");
      grad.addColorStop(1, "rgba(0, 0, 0, 0)");
      pCtx.fillStyle = grad;
      pCtx.fillRect(0, 0, 64, 64);
    }
    const particleTexture = new THREE.CanvasTexture(pCanvas);

    // ── 03. TENBIN EXACT ORBITING MODEL PARTICLES (Surrounding 3D Crystalline Stardust Halo) ──
    const auraParticleCount = 110;
    const auraParticleGeo = new THREE.BufferGeometry();
    const auraPositions = new Float32Array(auraParticleCount * 3);
    const auraData: Array<{ radius: number; theta: number; vr: number; vtheta: number; z: number; phase: number }> = [];

    for (let i = 0; i < auraParticleCount; i++) {
      const radius = 1.1 + Math.random() * 3.6;
      const theta = Math.random() * Math.PI * 2;
      const z = (Math.random() - 0.5) * 3.6;

      auraPositions[i * 3] = radius * Math.cos(theta);
      auraPositions[i * 3 + 1] = radius * Math.sin(theta);
      auraPositions[i * 3 + 2] = z;

      auraData.push({
        radius,
        theta,
        vr: 0.002 + Math.random() * 0.005,
        vtheta: (Math.random() > 0.5 ? 1 : -1) * (0.002 + Math.random() * 0.004),
        z,
        phase: Math.random() * Math.PI * 2,
      });
    }

    auraParticleGeo.setAttribute("position", new THREE.BufferAttribute(auraPositions, 3));

    const auraParticleMat = new THREE.PointsMaterial({
      size: 0.09,
      map: particleTexture,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const auraParticleSystem = new THREE.Points(auraParticleGeo, auraParticleMat);
    scene.add(auraParticleSystem);

    // Studio Lighting (Tenbin Exact Overhead Grazing & Dual Rim Pipeline)
    const ambientLight = new THREE.AmbientLight(0xffffff, 2.0);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 4.5);
    keyLight.position.set(8, 14, 12);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0x9cb0c8, 2.5);
    fillLight.position.set(-12, -4, 10);
    scene.add(fillLight);

    // Overhead high-intensity grazing light for sharp top chamfer specular highlights
    const topRimLight = new THREE.DirectionalLight(0xffffff, 7.5);
    topRimLight.position.set(0, 18, 1);
    scene.add(topRimLight);

    // Back-kicker rim light for crisp edge separation from dark stardust void
    const backRimLight = new THREE.DirectionalLight(0xdde8f5, 6.0);
    backRimLight.position.set(0, -6, -10);
    scene.add(backRimLight);

    const sideGrazingLight = new THREE.DirectionalLight(0xcfdbe8, 3.5);
    sideGrazingLight.position.set(12, -2, -4);
    scene.add(sideGrazingLight);

    // Mouse Parallax Trackers
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const onPointerMove = (e: MouseEvent) => {
      const nx = (e.clientX / window.innerWidth) * 2 - 1;
      const ny = -(e.clientY / window.innerHeight) * 2 + 1;
      targetMouseX = nx;
      targetMouseY = ny;
    };
    window.addEventListener("mousemove", onPointerMove, { passive: true });

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

    // Render loop — 3D deep spatial kinematics & organic momentum
    let rafId: number;
    let currentX = 0;
    let currentY = 0;
    let currentZ = -1.0;
    let currentRotX = 0.08;
    let currentRotY = 0;
    let currentRotZ = 0;
    let currentScale = 0.88;
    let currentMorph = 0; // 0 = "13", 1.0 = "BE"
    let clock = new THREE.Clock();

    const smoothstep = (min: number, max: number, value: number) => {
      const x = Math.max(0, Math.min(1, (value - min) / (max - min)));
      return x * x * (3 - 2 * x);
    };

    const animate = () => {
      rafId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();
      const p = Math.max(0, Math.min(1, progressRef.current));
      const entryP = Math.max(0, Math.min(1, entryProgressRef.current));

      // Smooth mouse parallax damping
      mouseX += (targetMouseX - mouseX) * 0.06;
      mouseY += (targetMouseY - mouseY) * 0.06;

      // Soft studio key light parallax (Natural, diffused edge sheen — zero glare blobs)
      keyLight.position.x = 10 + mouseX * 2.5;
      keyLight.position.y = 16 + mouseY * 2.0;

      topRimLight.position.x = mouseX * 2.0;

      // Update Tenbin Orbiting Stardust Halo Particles
      const auraAttr = auraParticleGeo.attributes.position as THREE.BufferAttribute;
      const aArr = auraAttr.array as Float32Array;

      for (let i = 0; i < auraParticleCount; i++) {
        const item = auraData[i];
        item.radius += item.vr;
        item.theta += item.vtheta;

        if (item.radius > 4.8) {
          item.radius = 1.0 + Math.random() * 0.8;
          item.theta = Math.random() * Math.PI * 2;
        }

        const harmonicZ = item.z + Math.sin(elapsedTime * 1.8 + item.phase) * 0.35;
        aArr[i * 3] = currentX + item.radius * Math.cos(item.theta);
        aArr[i * 3 + 1] = currentY + item.radius * Math.sin(item.theta) * 0.95;
        aArr[i * 3 + 2] = currentZ + harmonicZ;
      }
      auraAttr.needsUpdate = true;
      auraParticleSystem.rotation.y = elapsedTime * 0.04 + mouseX * 0.05;





      if (emblemGroup) {
        const entryFade = smoothstep(0.05, 0.65, entryP);

        // Harmonic organic floating breath
        const idleFloatY = Math.sin(elapsedTime * 1.4) * 0.07;
        const idleRotX = Math.cos(elapsedTime * 1.1) * 0.025;
        const idleRotZ = Math.sin(elapsedTime * 0.9) * 0.02;

        let targetX = 0;
        let targetY = idleFloatY;
        let targetZ = -1.0;
        let targetRotY = 0;
        let targetRotX = 0.08 + idleRotX;
        let targetRotZ = idleRotZ;
        let targetScale = 0.88;
        let targetMorph = 0; // 0 = 13, 1.0 = BE

        if (p < 0.08) {
          // Act Hero: 3D Titanium Monolith centered majestically behind BE UNREAL UNREASONABLE
          const localP = p / 0.08;
          targetX = 0;
          targetY = idleFloatY;
          targetZ = -0.82;
          targetRotY = localP * 0.22;
          targetRotX = 0.06 + idleRotX;
          targetRotZ = idleRotZ;
          targetScale = 0.94;
          targetMorph = 0;
        } else if (p >= 0.08 && p < 0.24) {
          // Act 0: Manifesto Editorial Statement
          const localP = (p - 0.08) / 0.16;
          targetX = 0;
          targetY = idleFloatY;
          targetZ = -0.85 - localP * 0.15;
          targetRotY = 0.22 + localP * 0.22;
          targetRotX = 0.06 + idleRotX;
          targetRotZ = idleRotZ;
          targetScale = 0.90;
          targetMorph = 0;
        } else if (p >= 0.24 && p < 0.32) {
          // Transition 0 -> 1: Center -> Left Column deep 3D arc swoop & 360° spin (13 => BE)
          const t = smoothstep(0.24, 0.32, p);
          const arcDepth = Math.sin(t * Math.PI) * -2.8;
          const arcY = Math.sin(t * Math.PI) * -0.45;

          targetX = -3.85 * t;
          targetY = idleFloatY + arcY;
          targetZ = -1.0 + arcDepth;
          targetRotY = 0.44 * (1 - t) + (Math.PI * 2 + 0.24) * t;
          targetRotX = 0.06 + Math.sin(t * Math.PI) * 0.28 + idleRotX;
          targetRotZ = -Math.sin(t * Math.PI) * 0.14 + 0.04 * t;
          targetScale = 0.90 + 0.06 * t;
          targetMorph = t;
        } else if (p >= 0.32 && p < 0.48) {
          // Act 1: CREATE (Settled Full Left Column as BE)
          const localP = (p - 0.32) / 0.16;
          targetX = -3.85;
          targetY = idleFloatY;
          targetZ = -1.0;
          targetRotY = Math.PI * 2 + 0.24 + Math.sin(localP * Math.PI) * 0.10;
          targetRotX = 0.08 + Math.cos(localP * Math.PI) * 0.035 + idleRotX;
          targetRotZ = 0.04 + idleRotZ;
          targetScale = 0.96;
          targetMorph = 1.0;
        } else if (p >= 0.48 && p < 0.56) {
          // Transition 1 -> 2: Left -> Right Column deep 3D orbital sweep & 360° spin (BE => 13)
          const t = smoothstep(0.48, 0.56, p);
          const arcDepth = Math.sin(t * Math.PI) * -3.2;
          const arcY = Math.sin(t * Math.PI) * -0.55;

          targetX = -3.85 + 7.7 * t;
          targetY = idleFloatY + arcY;
          targetZ = -1.0 + arcDepth;
          targetRotY = (Math.PI * 2 + 0.24) * (1 - t) + (Math.PI * 4 - 0.24) * t;
          targetRotX = 0.08 + Math.sin(t * Math.PI) * 0.30 + idleRotX;
          targetRotZ = 0.04 * (1 - 2 * t) + Math.sin(t * Math.PI) * 0.16;
          targetScale = 0.96;
          targetMorph = 1.0 - t;
        } else if (p >= 0.56 && p < 0.74) {
          // Act 2: BUILD (Settled Full Right Column as 13)
          const localP = (p - 0.56) / 0.18;
          targetX = 3.85;
          targetY = idleFloatY;
          targetZ = -1.0;
          targetRotY = Math.PI * 4 - 0.24 - Math.sin(localP * Math.PI) * 0.10;
          targetRotX = 0.08 + Math.cos(localP * Math.PI) * 0.035 + idleRotX;
          targetRotZ = -0.04 + idleRotZ;
          targetScale = 0.96;
          targetMorph = 0.0;
        } else if (p >= 0.74 && p < 0.82) {
          // Transition 2 -> 3: Right -> Left Column deep 3D orbital sweep & 360° spin (13 => BE)
          const t = smoothstep(0.74, 0.82, p);
          const arcDepth = Math.sin(t * Math.PI) * -3.2;
          const arcY = Math.sin(t * Math.PI) * -0.55;

          targetX = 3.85 - 7.7 * t;
          targetY = idleFloatY + arcY;
          targetZ = -1.0 + arcDepth;
          targetRotY = (Math.PI * 4 - 0.24) * (1 - t) + (Math.PI * 6 + 0.24) * t;
          targetRotX = 0.08 + Math.sin(t * Math.PI) * 0.30 + idleRotX;
          targetRotZ = -0.04 * (1 - 2 * t) - Math.sin(t * Math.PI) * 0.16;
          targetScale = 0.96;
          targetMorph = t;
        } else if (p >= 0.82 && p < 0.96) {
          // Act 3: GROW (Settled Full Left Column as BE)
          const localP = (p - 0.82) / 0.14;
          targetX = -3.85;
          targetY = idleFloatY;
          targetZ = -1.0;
          targetRotY = Math.PI * 6 + 0.24 + Math.sin(localP * Math.PI) * 0.10;
          targetRotX = 0.08 + Math.cos(localP * Math.PI) * 0.035 + idleRotX;
          targetRotZ = 0.04 + idleRotZ;
          targetScale = 0.96;
          targetMorph = 1.0;
        } else {
          // Continuous handover to Section 04: Sweeps Left -> Center, dives into depth
          const t = smoothstep(0.96, 1.00, p);
          targetX = -3.85 * (1 - t);
          targetY = idleFloatY;
          targetZ = -1.0 - 1.5 * t;
          targetRotY = (Math.PI * 6 + 0.24) * (1 - t) + (Math.PI * 8.0) * t;
          targetRotX = 0.08 - 0.08 * t + idleRotX;
          targetRotZ = 0.04 * (1 - t) + idleRotZ;
          targetScale = 0.96 * (1 - 0.12 * t);
          targetMorph = 1.0 - t;
        }

        // Apply Mouse Parallax Offsets
        targetX += mouseX * 0.45;
        targetY += mouseY * 0.35;
        targetRotY += mouseX * 0.28;
        targetRotX += -mouseY * 0.22;

        // Precision physics damping
        const dampFactor = 0.095;
        const morphDamp = 0.14;

        currentX += (targetX - currentX) * dampFactor;
        currentY += (targetY - currentY) * dampFactor;
        currentZ += (targetZ - currentZ) * dampFactor;
        currentScale += (targetScale - currentScale) * dampFactor;
        currentRotX += (targetRotX - currentRotX) * dampFactor;
        currentRotY += (targetRotY - currentRotY) * dampFactor;
        currentRotZ += (targetRotZ - currentRotZ) * dampFactor;
        currentMorph += (targetMorph - currentMorph) * morphDamp;

        renderer.domElement.style.opacity = `${entryFade}`;
        emblemGroup.visible = entryP > 0.02;

        if (emblemGroup.visible) {
          emblemGroup.position.set(currentX, currentY, currentZ);
          emblemGroup.scale.setScalar(currentScale);
          emblemGroup.rotation.set(currentRotX, currentRotY, currentRotZ);

          thirteenGroup.visible = currentMorph < 0.50;
          beGroup.visible = currentMorph >= 0.50;
        }
      }

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
      eGeo.dispose();

      auraParticleGeo.dispose();
      auraParticleMat.dispose();
      particleTexture.dispose();
      matTitaniumOne.dispose();
      matTitaniumThree.dispose();
      renderer.dispose();
    };
  }, [theme]);

  return (
    <div
      ref={containerRef}
      className={`${styles.canvasWrap} ${className ?? ""}`}
      aria-hidden="true"
    />
  );
}
