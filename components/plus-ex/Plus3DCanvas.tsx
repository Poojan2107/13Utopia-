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
 * 3D 13 Utopia Architectural Emblem Canvas — Tenbin 1:1 Match:
 * 1. Chiseled obsidian architectural titanium / meteorite stone physical material.
 * 2. High-precision multi-octave rock bump texture & sharp specular chamfers.
 * 3. 5-point studio lighting: top rim grazing, direct front key, and dual back kicker rims.
 * 4. Dense sparkling crystalline dust halo orbiting immediately around the monolith contour.
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

    const scene = new THREE.Scene();
    scene.background = null;

    const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 100);
    camera.position.set(0, 0, 11.2);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    container.appendChild(renderer.domElement);

    const emblemGroup = new THREE.Group();

    // ── SHAPE GENERATION: 1, 3, AND MIRRORED 3 ("BE") ──────────
    const createOneShape = () => {
      const shape = new THREE.Shape();
      const r = 0.58;
      const topY = 2.92;
      const botY = -2.92;
      shape.moveTo(0, topY);
      shape.absarc(0, topY - r, r, Math.PI / 2, -Math.PI / 2, true);
      shape.lineTo(0, botY + r);
      shape.absarc(0, botY + r, r, -Math.PI / 2, Math.PI / 2, true);
      shape.closePath();
      return shape;
    };

    const createThreeShape = () => {
      const shape = new THREE.Shape();
      shape.moveTo(0.45, 2.82);
      shape.bezierCurveTo(1.68, 2.75, 2.45, 1.85, 2.45, 0.72);
      shape.bezierCurveTo(2.45, -0.05, 1.85, -0.42, 1.05, -0.48);
      shape.bezierCurveTo(1.95, -0.58, 2.52, -1.02, 2.52, -2.05);
      shape.bezierCurveTo(2.52, -3.22, 1.62, -3.98, 0.38, -3.98);
      shape.bezierCurveTo(-0.52, -3.98, -1.18, -3.38, -1.18, -2.62);
      shape.bezierCurveTo(-1.18, -1.95, -0.68, -1.45, 0.05, -1.45);
      shape.bezierCurveTo(0.68, -1.45, 1.15, -1.88, 1.15, -2.48);
      shape.bezierCurveTo(1.15, -2.85, 0.85, -3.08, 0.42, -3.08);
      shape.bezierCurveTo(0.18, -3.08, -0.02, -2.95, -0.15, -2.78);
      shape.bezierCurveTo(-0.12, -2.35, 0.38, -2.22, 0.72, -2.22);
      shape.bezierCurveTo(1.12, -2.22, 1.48, -1.82, 1.48, -1.35);
      shape.bezierCurveTo(1.48, -0.78, 0.98, -0.42, 0.32, -0.42);
      shape.lineTo(-0.35, -0.42);
      shape.lineTo(-0.35, 0.45);
      shape.lineTo(0.38, 0.45);
      shape.bezierCurveTo(0.98, 0.45, 1.42, 0.78, 1.42, 1.32);
      shape.bezierCurveTo(1.42, 1.78, 1.08, 2.12, 0.62, 2.12);
      shape.bezierCurveTo(0.28, 2.12, -0.12, 1.95, -0.12, 1.58);
      shape.bezierCurveTo(-0.12, 1.38, 0.05, 1.25, 0.25, 1.25);
      shape.bezierCurveTo(0.62, 1.25, 0.95, 1.55, 0.95, 2.15);
      shape.bezierCurveTo(0.95, 2.85, 0.28, 3.32, -0.45, 3.32);
      shape.bezierCurveTo(-1.18, 3.32, -1.68, 2.78, -1.68, 2.05);
      shape.bezierCurveTo(-1.68, 1.32, -1.18, 0.82, -0.48, 0.82);
      shape.bezierCurveTo(0.15, 0.82, 0.58, 1.22, 0.58, 1.75);
      shape.bezierCurveTo(0.58, 2.08, 0.38, 2.28, 0.08, 2.28);
      shape.bezierCurveTo(-0.38, 2.38, -0.85, 2.85, -0.45, 3.52);
      shape.bezierCurveTo(-0.12, 3.98, 0.72, 3.98, 1.22, 3.75);
      shape.bezierCurveTo(0.95, 3.45, 0.68, 3.12, 0.45, 2.82);
      shape.closePath();
      return shape;
    };

    const createMirroredThreeShape = () => {
      const shape = new THREE.Shape();
      shape.moveTo(-0.45, 2.82);
      shape.bezierCurveTo(-1.68, 2.75, -2.45, 1.85, -2.45, 0.72);
      shape.bezierCurveTo(-2.45, -0.05, -1.85, -0.42, -1.05, -0.48);
      shape.bezierCurveTo(-1.95, -0.58, -2.52, -1.02, -2.52, -2.05);
      shape.bezierCurveTo(-2.52, -3.22, -1.62, -3.98, -0.38, -3.98);
      shape.bezierCurveTo(0.52, -3.98, 1.18, -3.38, 1.18, -2.62);
      shape.bezierCurveTo(1.18, -1.95, 0.68, -1.45, -0.05, -1.45);
      shape.bezierCurveTo(-0.68, -1.45, -1.15, -1.88, -1.15, -2.48);
      shape.bezierCurveTo(-1.15, -2.85, -0.85, -3.08, -0.42, -3.08);
      shape.bezierCurveTo(-0.18, -3.08, 0.02, -2.95, 0.15, -2.78);
      shape.bezierCurveTo(0.12, -2.35, -0.38, -2.22, -0.72, -2.22);
      shape.bezierCurveTo(-1.12, -2.22, -1.48, -1.82, -1.48, -1.35);
      shape.bezierCurveTo(-1.48, -0.78, -0.98, -0.42, -0.32, -0.42);
      shape.lineTo(0.35, -0.42);
      shape.lineTo(0.35, 0.45);
      shape.lineTo(-0.38, 0.45);
      shape.bezierCurveTo(-0.98, 0.45, -1.42, 0.78, -1.42, 1.32);
      shape.bezierCurveTo(-1.42, 1.78, -1.08, 2.12, -0.62, 2.12);
      shape.bezierCurveTo(-0.28, 2.12, 0.12, 1.95, 0.12, 1.58);
      shape.bezierCurveTo(0.12, 1.38, -0.05, 1.25, -0.25, 1.25);
      shape.bezierCurveTo(-0.62, 1.25, -0.95, 1.55, -0.95, 2.15);
      shape.bezierCurveTo(-0.95, 2.85, -0.28, 3.32, 0.45, 3.32);
      shape.bezierCurveTo(1.18, 3.32, 1.68, 2.78, 1.68, 2.05);
      shape.bezierCurveTo(1.68, 1.32, 1.18, 0.82, 0.48, 0.82);
      shape.bezierCurveTo(-0.15, 0.82, -0.58, 1.22, -0.58, 1.75);
      shape.bezierCurveTo(-0.58, 2.08, -0.38, 2.28, -0.08, 2.28);
      shape.bezierCurveTo(0.38, 2.38, 0.12, 2.18, 0.48, 1.88);
      shape.bezierCurveTo(0.95, 1.92, 0.95, 2.78, 0.45, 2.82);
      shape.closePath();
      return shape;
    };

    const extrudeSettings = {
      steps: 1,
      depth: 0.98,
      bevelEnabled: true,
      bevelThickness: 0.085,
      bevelSize: 0.075,
      bevelOffset: 0,
      bevelSegments: 6,
    };

    // Procedural High-Detail Chiseled Meteorite / Obsidian Stone Bump Map (Tenbin 1:1)
    const bumpCanvas = document.createElement("canvas");
    bumpCanvas.width = 512;
    bumpCanvas.height = 512;
    const bumpCtx = bumpCanvas.getContext("2d");
    if (bumpCtx) {
      const imgData = bumpCtx.createImageData(512, 512);
      for (let y = 0; y < 512; y++) {
        for (let x = 0; x < 512; x++) {
          const idx = (y * 512 + x) * 4;
          const n1 = Math.random() * 180;
          const n2 = (Math.sin(x * 0.08) * Math.cos(y * 0.08)) * 45;
          const n3 = (Math.sin(x * 0.25 + y * 0.25)) * 30;
          const val = Math.min(255, Math.max(0, n1 + n2 + n3 + 20));
          imgData.data[idx] = val;
          imgData.data[idx + 1] = val;
          imgData.data[idx + 2] = val;
          imgData.data[idx + 3] = 255;
        }
      }
      bumpCtx.putImageData(imgData, 0, 0);
    }
    const bumpTexture = new THREE.CanvasTexture(bumpCanvas);
    bumpTexture.wrapS = THREE.RepeatWrapping;
    bumpTexture.wrapT = THREE.RepeatWrapping;
    bumpTexture.repeat.set(4, 4);

    // 13 Utopia Exact Tenbin Material: Chiseled Obsidian Architectural Titanium
    const matTitaniumOne = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color(0x1a1e24),
      roughness: 0.36,
      metalness: 0.78,
      clearcoat: 0.80,
      clearcoatRoughness: 0.16,
      reflectivity: 0.90,
      bumpMap: bumpTexture,
      bumpScale: 0.030,
      emissive: new THREE.Color(0x050608),
      emissiveIntensity: 0.12,
      polygonOffset: true,
      polygonOffsetFactor: -1,
      polygonOffsetUnits: -1,
    });

    const matTitaniumThree = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color(0x181c22),
      roughness: 0.37,
      metalness: 0.78,
      clearcoat: 0.80,
      clearcoatRoughness: 0.16,
      reflectivity: 0.90,
      bumpMap: bumpTexture,
      bumpScale: 0.030,
      emissive: new THREE.Color(0x040507),
      emissiveIntensity: 0.12,
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

    // Center emblem group
    emblemGroup.scale.setScalar(0.88);
    emblemGroup.position.set(0, 0, -1.0);
    emblemGroup.rotation.set(0, 0, 0);
    scene.add(emblemGroup);
    groupRef.current = emblemGroup;

    // ── 03. TENBIN SPARKLING CRYSTALLINE DUST HALO (Model Orbit Dust) ──────
    const pCanvas = document.createElement("canvas");
    pCanvas.width = 64;
    pCanvas.height = 64;
    const pCtx = pCanvas.getContext("2d");
    if (pCtx) {
      const grad = pCtx.createRadialGradient(32, 32, 0, 32, 32, 32);
      grad.addColorStop(0, "rgba(255, 255, 255, 1.0)");
      grad.addColorStop(0.25, "rgba(240, 246, 255, 0.85)");
      grad.addColorStop(0.65, "rgba(180, 205, 235, 0.22)");
      grad.addColorStop(1, "rgba(0, 0, 0, 0)");
      pCtx.fillStyle = grad;
      pCtx.fillRect(0, 0, 64, 64);
    }
    const particleTexture = new THREE.CanvasTexture(pCanvas);

    // 120 Sparkling crystalline dust particles hugging the monolith contour
    const auraParticleCount = 120;
    const auraParticleGeo = new THREE.BufferGeometry();
    const auraPositions = new Float32Array(auraParticleCount * 3);
    const auraSizes = new Float32Array(auraParticleCount);
    const auraData: Array<{ radius: number; theta: number; vr: number; vtheta: number; z: number; phase: number; baseSize: number }> = [];

    for (let i = 0; i < auraParticleCount; i++) {
      const radius = 1.2 + Math.random() * 3.8;
      const theta = Math.random() * Math.PI * 2;
      const z = (Math.random() - 0.5) * 2.8;

      auraPositions[i * 3] = radius * Math.cos(theta);
      auraPositions[i * 3 + 1] = radius * Math.sin(theta) * 1.15;
      auraPositions[i * 3 + 2] = z;

      const baseSize = 0.05 + Math.random() * 0.10;
      auraSizes[i] = baseSize;

      auraData.push({
        radius,
        theta,
        vr: (Math.random() - 0.5) * 0.003,
        vtheta: (Math.random() > 0.5 ? 1 : -1) * (0.002 + Math.random() * 0.004),
        z,
        phase: Math.random() * Math.PI * 2,
        baseSize,
      });
    }

    auraParticleGeo.setAttribute("position", new THREE.BufferAttribute(auraPositions, 3));

    const auraParticleMat = new THREE.PointsMaterial({
      size: 0.10,
      map: particleTexture,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const auraParticleSystem = new THREE.Points(auraParticleGeo, auraParticleMat);
    scene.add(auraParticleSystem);

    // ── 04. TENBIN 5-POINT STUDIO LIGHTING ─────────────────────────────────
    const ambientLight = new THREE.AmbientLight(0xffffff, 2.4);
    scene.add(ambientLight);

    // 1. Direct Front Key Light — Illuminates stone face facets & reveals 3D chiseled depth
    const frontKeyLight = new THREE.DirectionalLight(0xffffff, 5.0);
    frontKeyLight.position.set(0, 1.5, 12);
    scene.add(frontKeyLight);

    // 2. High-Impact Top Rim Grazing Light — Tenbin signature top chamfer highlight
    const topRimLight = new THREE.DirectionalLight(0xffffff, 7.5);
    topRimLight.position.set(0, 16, 2.5);
    scene.add(topRimLight);

    // 3. Side Key Light — Dramatic directional angle
    const keyLight = new THREE.DirectionalLight(0xdfe8f5, 4.5);
    keyLight.position.set(10, 12, 10);
    scene.add(keyLight);

    // 4. Left Soft Fill
    const fillLight = new THREE.DirectionalLight(0x8fa0b8, 3.2);
    fillLight.position.set(-12, -2, 10);
    scene.add(fillLight);

    // 5. Dual Back-Kicker Rim Lights — Razor-sharp edge contours separating from void
    const backRimLeft = new THREE.DirectionalLight(0xcfdbe8, 6.0);
    backRimLeft.position.set(-12, -4, -10);
    scene.add(backRimLeft);

    const backRimRight = new THREE.DirectionalLight(0xe5effa, 6.0);
    backRimRight.position.set(12, -4, -10);
    scene.add(backRimRight);

    // 6. Subtle bottom upwash
    const bottomGlow = new THREE.DirectionalLight(0xa5b4c8, 3.0);
    bottomGlow.position.set(0, -12, 6);
    scene.add(bottomGlow);

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

    // Render loop
    let rafId: number;
    let currentX = 0;
    let currentY = 0;
    let currentZ = -1.0;
    let currentRotX = 0.08;
    let currentRotY = 0;
    let currentRotZ = 0;
    let currentScale = 0.88;
    let currentMorph = 0;
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

      // Damped mouse parallax
      mouseX += (targetMouseX - mouseX) * 0.06;
      mouseY += (targetMouseY - mouseY) * 0.06;

      // Dynamic studio lighting parallax
      frontKeyLight.position.x = mouseX * 4.5;
      frontKeyLight.position.y = 1.5 + mouseY * 3.5;

      keyLight.position.x = 10 + mouseX * 2.5;
      keyLight.position.y = 12 + mouseY * 2.0;

      topRimLight.position.x = mouseX * 2.0;

      // Update Sparkling Dust Halo Orbiting Model
      const auraAttr = auraParticleGeo.attributes.position as THREE.BufferAttribute;
      const aArr = auraAttr.array as Float32Array;

      for (let i = 0; i < auraParticleCount; i++) {
        const item = auraData[i];
        item.theta += item.vtheta;
        item.radius += item.vr;

        if (item.radius > 4.6 || item.radius < 0.9) {
          item.vr = -item.vr;
        }

        const harmonicZ = item.z + Math.sin(elapsedTime * 1.8 + item.phase) * 0.35;
        aArr[i * 3] = item.radius * Math.cos(item.theta) + currentX * 0.6;
        aArr[i * 3 + 1] = item.radius * Math.sin(item.theta) * 1.25 + currentY * 0.6;
        aArr[i * 3 + 2] = harmonicZ;
      }
      auraAttr.needsUpdate = true;
      auraParticleSystem.rotation.z = elapsedTime * 0.02;

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
        let targetMorph = 0;

        if (p < 0.08) {
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
          const localP = (p - 0.08) / 0.16;
          targetX = 0;
          targetY = idleFloatY;
          targetZ = -0.85 - localP * 0.15;
          targetRotY = 0.22 + localP * 0.22;
          targetRotX = 0.08 + idleRotX;
          targetRotZ = idleRotZ;
          targetScale = 0.92;
          targetMorph = localP * 0.4;
        } else if (p >= 0.24 && p < 0.48) {
          const localP = (p - 0.24) / 0.24;
          targetX = -2.75 + localP * 0.35;
          targetY = 0.05 + idleFloatY;
          targetZ = -0.45;
          targetRotY = 0.44 + localP * (Math.PI * 2);
          targetRotX = 0.10 + Math.sin(localP * Math.PI) * 0.15 + idleRotX;
          targetRotZ = idleRotZ;
          targetScale = 0.78;
          targetMorph = 1.0;
        } else if (p >= 0.48 && p < 0.72) {
          const localP = (p - 0.48) / 0.24;
          targetX = 2.75 - localP * 0.35;
          targetY = 0.05 + idleFloatY;
          targetZ = -0.45;
          targetRotY = 0.44 + (Math.PI * 2) + localP * (Math.PI * 2);
          targetRotX = 0.10 - Math.sin(localP * Math.PI) * 0.15 + idleRotX;
          targetRotZ = idleRotZ;
          targetScale = 0.78;
          targetMorph = 0;
        } else if (p >= 0.72 && p < 0.92) {
          const localP = (p - 0.72) / 0.20;
          targetX = -2.75 + localP * 0.35;
          targetY = 0.05 + idleFloatY;
          targetZ = -0.45;
          targetRotY = 0.44 + (Math.PI * 4) + localP * (Math.PI * 2);
          targetRotX = 0.10 + Math.sin(localP * Math.PI) * 0.15 + idleRotX;
          targetRotZ = idleRotZ;
          targetScale = 0.78;
          targetMorph = 1.0;
        } else {
          const localP = (p - 0.92) / 0.08;
          targetX = 0;
          targetY = -1.2 - localP * 3.5;
          targetZ = -0.6 - localP * 4.5;
          targetRotY = (Math.PI * 6) + localP * 0.4;
          targetRotX = 0.25 + idleRotX;
          targetRotZ = idleRotZ;
          targetScale = 0.88 - localP * 0.35;
          targetMorph = 0;
        }

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
      bumpTexture.dispose();
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
