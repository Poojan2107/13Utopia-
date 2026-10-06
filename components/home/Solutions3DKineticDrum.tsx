"use client";

import { useEffect, useRef, useCallback } from "react";
import * as THREE from "three";
import styles from "@/styles/home/Solutions3DKineticDrum.module.css";

interface DisciplineData {
  index: string;
  title: string;
  category: string;
  tagline: string;
  metricValue: string;
  metricLabel: string;
  deliverables: string[];
}

interface Solutions3DKineticDrumProps {
  items: DisciplineData[];
  activeIndex: number;
  onIndexChange: (index: number) => void;
}

export function Solutions3DKineticDrum({
  items,
  activeIndex,
  onIndexChange,
}: Solutions3DKineticDrumProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const activeIndexRef = useRef(activeIndex);
  const onIndexChangeRef = useRef(onIndexChange);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const currentRotationRef = useRef(0);
  const targetRotationRef = useRef(0);
  const velocityRef = useRef(0);

  useEffect(() => {
    activeIndexRef.current = activeIndex;
    targetRotationRef.current = -(activeIndex * ((Math.PI * 2) / items.length));
  }, [activeIndex, items.length]);

  useEffect(() => {
    onIndexChangeRef.current = onIndexChange;
  }, [onIndexChange]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let width = container.clientWidth || window.innerWidth;
    let height = container.clientHeight || 580;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(0, 0, 9.5);

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

    // Studio Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 2.4);
    keyLight.position.set(5, 8, 7);
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0xffffff, 1.6);
    rimLight.position.set(-6, -4, -4);
    scene.add(rimLight);

    const topGlint = new THREE.PointLight(0xffffff, 1.8, 20);
    topGlint.position.set(0, 4, 3);
    scene.add(topGlint);

    // 3D Drum Carousel Group
    const drumGroup = new THREE.Group();
    scene.add(drumGroup);

    const numItems = items.length;
    const radius = 4.2;
    const panelWidth = 3.6;
    const panelHeight = 2.4;

    // Create high-res dynamic texture for each discipline facet
    const panels: THREE.Mesh[] = [];

    items.forEach((item, i) => {
      const angle = (i / numItems) * Math.PI * 2;

      // Create high-density canvas texture with luxury Swiss typography
      const canvas = document.createElement("canvas");
      canvas.width = 1024;
      canvas.height = 680;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        // Deep obsidian background with subtle gradient
        const bgGrad = ctx.createLinearGradient(0, 0, 1024, 680);
        bgGrad.addColorStop(0, "#08080a");
        bgGrad.addColorStop(0.5, "#121216");
        bgGrad.addColorStop(1, "#060608");
        ctx.fillStyle = bgGrad;
        ctx.fillRect(0, 0, 1024, 680);

        // Architectural Border Glow
        ctx.strokeStyle = "rgba(255, 255, 255, 0.12)";
        ctx.lineWidth = 2;
        ctx.strokeRect(24, 24, 976, 632);

        // Corner Crosshairs
        const drawCross = (x: number, y: number) => {
          ctx.strokeStyle = "rgba(255, 255, 255, 0.4)";
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.moveTo(x - 8, y);
          ctx.lineTo(x + 8, y);
          ctx.moveTo(x, y - 8);
          ctx.lineTo(x, y + 8);
          ctx.stroke();
        };
        drawCross(40, 40);
        drawCross(984, 40);
        drawCross(40, 640);
        drawCross(984, 640);

        // Huge Background Watermark
        ctx.fillStyle = "rgba(255, 255, 255, 0.035)";
        ctx.font = "900 280px sans-serif";
        ctx.textAlign = "right";
        ctx.textBaseline = "bottom";
        ctx.fillText(item.index, 980, 640);

        // Top Metadata Bar
        ctx.fillStyle = "#ffffff";
        ctx.font = "700 24px monospace";
        ctx.textAlign = "left";
        ctx.fillText(`DISCIPLINE // ${item.index}`, 64, 90);

        ctx.fillStyle = "rgba(255, 255, 255, 0.45)";
        ctx.font = "600 20px monospace";
        ctx.textAlign = "right";
        ctx.fillText(item.category, 960, 90);

        // Main Title
        ctx.fillStyle = "#ffffff";
        ctx.font = "800 68px sans-serif";
        ctx.textAlign = "left";
        ctx.textBaseline = "top";

        // Word wrap title if long
        const words = item.title.split(" ");
        if (words.length > 2) {
          ctx.fillText(words.slice(0, 2).join(" "), 64, 180);
          ctx.fillText(words.slice(2).join(" "), 64, 260);
        } else {
          ctx.fillText(item.title, 64, 210);
        }

        // Deliverables bullet points
        ctx.fillStyle = "rgba(255, 255, 255, 0.75)";
        ctx.font = "400 26px sans-serif";
        item.deliverables.slice(0, 3).forEach((del, dIdx) => {
          ctx.fillText(`—  ${del}`, 64, 380 + dIdx * 46);
        });

        // Bottom Metric Value
        ctx.fillStyle = "#ffffff";
        ctx.font = "800 38px sans-serif";
        ctx.fillText(item.metricValue, 64, 580);

        ctx.fillStyle = "rgba(255, 255, 255, 0.4)";
        ctx.font = "600 18px monospace";
        ctx.fillText(item.metricLabel, 64, 620);
      }

      const texture = new THREE.CanvasTexture(canvas);
      texture.anisotropy = renderer.capabilities.getMaxAnisotropy();
      texture.generateMipmaps = true;

      // Curved or faceted geometry with chamfer
      const geom = new THREE.PlaneGeometry(panelWidth, panelHeight, 16, 1);

      const mat = new THREE.MeshPhysicalMaterial({
        map: texture,
        roughness: 0.25,
        metalness: 0.85,
        clearcoat: 0.95,
        clearcoatRoughness: 0.15,
        reflectivity: 0.9,
        side: THREE.DoubleSide,
      });

      const mesh = new THREE.Mesh(geom, mat);
      mesh.position.x = Math.sin(angle) * radius;
      mesh.position.z = Math.cos(angle) * radius;
      mesh.rotation.y = angle;

      drumGroup.add(mesh);
      panels.push(mesh);
    });

    // Handle Resize
    const onResize = () => {
      if (!container) return;
      width = container.clientWidth || window.innerWidth;
      height = container.clientHeight || 580;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener("resize", onResize);

    // Animation Render Loop with Physical Damping
    let animId: number;
    let lastTime = performance.now();

    const render = () => {
      const now = performance.now();
      const dt = Math.min((now - lastTime) / 1000, 0.1);
      lastTime = now;

      // Inertial spring rotation
      if (!isDraggingRef.current) {
        currentRotationRef.current += (targetRotationRef.current - currentRotationRef.current) * 0.08;
      }

      drumGroup.rotation.y = currentRotationRef.current;

      // Subtle dynamic float
      drumGroup.position.y = Math.sin(now * 0.0012) * 0.08;
      drumGroup.rotation.x = 0.06; // slight forward architectural angle

      // Dynamically calculate which facet is closest to front
      const stepAngle = (Math.PI * 2) / numItems;
      let normAngle = (-drumGroup.rotation.y % (Math.PI * 2));
      if (normAngle < 0) normAngle += Math.PI * 2;
      const nearestIdx = Math.round(normAngle / stepAngle) % numItems;

      if (nearestIdx !== activeIndexRef.current && !isDraggingRef.current) {
        activeIndexRef.current = nearestIdx;
        onIndexChangeRef.current(nearestIdx);
      }

      // Panel specular glint modulation
      panels.forEach((p, idx) => {
        const diff = Math.abs(idx - nearestIdx);
        const isClosest = diff === 0 || diff === numItems;
        (p.material as THREE.MeshPhysicalMaterial).opacity = isClosest ? 1.0 : 0.45;
        (p.material as THREE.MeshPhysicalMaterial).transparent = true;
      });

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
  }, [items]);

  // Touch & Mouse Drag Handlers for 3D kinetic spinning
  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    isDraggingRef.current = true;
    startXRef.current = e.clientX;
    velocityRef.current = 0;
  }, []);

  const handlePointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!isDraggingRef.current) return;
      const dx = e.clientX - startXRef.current;
      startXRef.current = e.clientX;
      const rotDelta = (dx / 350);
      currentRotationRef.current += rotDelta;
      velocityRef.current = rotDelta;
    },
    []
  );

  const handlePointerUp = useCallback(() => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;

    // Snap to nearest facet
    const stepAngle = (Math.PI * 2) / items.length;
    let normAngle = (-currentRotationRef.current % (Math.PI * 2));
    if (normAngle < 0) normAngle += Math.PI * 2;
    const targetIdx = Math.round(normAngle / stepAngle) % items.length;

    targetRotationRef.current = -(targetIdx * stepAngle);
    activeIndexRef.current = targetIdx;
    onIndexChangeRef.current(targetIdx);
  }, [items.length]);

  return (
    <div
      ref={containerRef}
      className={styles.drumContainer}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
      style={{ cursor: "grab" }}
    />
  );
}
