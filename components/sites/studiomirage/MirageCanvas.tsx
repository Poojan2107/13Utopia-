"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";
import { OutputPass } from "three/examples/jsm/postprocessing/OutputPass.js";

interface MirageCanvasProps {
  isHomeMode: boolean;
  activeSlideIndex: number;
  onSlideChange: (newIndex: number) => void;
  onEnterCarousel: () => void;
  onEnterHero: () => void;
}

export const PROJECTS_DATA = [
  {
    id: "difc",
    title: "DIFC - 4th edition",
    video: "/sites/studiomirage/videos/difc.mp4",
    image: "/sites/studiomirage/images/difc.jpg",
  },
  {
    id: "margiela",
    title: "Maison Margiela",
    video: "/sites/studiomirage/videos/margiela.mp4",
    image: "/sites/studiomirage/images/margiela.png",
  },
  {
    id: "renault-trucks",
    title: "Renault Trucks",
    video: "/sites/studiomirage/videos/renault-trucks.mp4",
    image: "/sites/studiomirage/images/renault.jpg",
  },
  {
    id: "omnicell-explorer",
    title: "Omnicell Explorer",
    video: "/sites/studiomirage/videos/omnicell-explorer.mp4",
    image: "/sites/studiomirage/images/omnicell.jpg",
  },
  {
    id: "ubisoft",
    title: "Ubisoft",
    video: "/sites/studiomirage/videos/ubisoft.mp4",
    image: "/sites/studiomirage/images/ubisoft.png",
  },
  {
    id: "tasmim",
    title: "Tasmim",
    video: "/sites/studiomirage/videos/tasmim.mp4",
    image: "/sites/studiomirage/images/tasmim.png",
  },
  {
    id: "sopra-banking",
    title: "Sopra Banking",
    video: "/sites/studiomirage/videos/sopra-banking.mp4",
    image: "/sites/studiomirage/images/sopra.png",
  },
  {
    id: "caisse-des-depots",
    title: "Caisse des dépôts",
    video: "/sites/studiomirage/videos/caisse-des-depots.mp4",
    image: "/sites/studiomirage/images/caisse.jpg",
  },
  {
    id: "jinns",
    title: "Jinns",
    video: "/sites/studiomirage/videos/jinns.mp4",
    image: "/sites/studiomirage/images/jinns.png",
  },
  {
    id: "biotherm",
    title: "Biotherm",
    video: "/sites/studiomirage/videos/biotherm.mp4",
    image: "/sites/studiomirage/images/ubisoft.png",
  },
];

const NUM_SCREENS = PROJECTS_DATA.length;
const ANGLE_STEP = (Math.PI * 2) / NUM_SCREENS;

export function MirageCanvas({
  isHomeMode,
  activeSlideIndex,
  onSlideChange,
  onEnterCarousel,
  onEnterHero,
}: MirageCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const stateRef = useRef({
    isHomeMode,
    activeSlideIndex,
    targetRotationY: 0,
    currentRotationY: 0,
    mouseX: 0,
    mouseY: 0,
    targetMouseX: 0,
    targetMouseY: 0,
  });

  const callbacksRef = useRef({
    onSlideChange,
    onEnterCarousel,
    onEnterHero,
  });

  useEffect(() => {
    callbacksRef.current = { onSlideChange, onEnterCarousel, onEnterHero };
  }, [onSlideChange, onEnterCarousel, onEnterHero]);

  useEffect(() => {
    stateRef.current.isHomeMode = isHomeMode;
    stateRef.current.activeSlideIndex = activeSlideIndex;
    stateRef.current.targetRotationY = activeSlideIndex * ANGLE_STEP;
  }, [isHomeMode, activeSlideIndex]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);
    scene.fog = new THREE.FogExp2(0x000000, 0.028);

    const camera = new THREE.PerspectiveCamera(15, 1, 0.1, 120);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: false,
      powerPreference: "high-performance",
    });
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const composer = new EffectComposer(renderer);
    const renderPass = new RenderPass(scene, camera);
    composer.addPass(renderPass);

    const bloomPass = new UnrealBloomPass(new THREE.Vector2(1, 1), 0.72, 0.42, 0.48);
    composer.addPass(bloomPass);

    const outputPass = new OutputPass();
    composer.addPass(outputPass);

    const syncSize = () => {
      const w = Math.max(1, container.clientWidth);
      const h = Math.max(1, container.clientHeight);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h, false);
      composer.setSize(w, h);
      bloomPass.setSize(w, h);
      renderer.domElement.style.width = "100%";
      renderer.domElement.style.height = "100%";
    };

    syncSize();

    scene.add(new THREE.AmbientLight(0xffffff, 0.55));

    const sunLight = new THREE.DirectionalLight(0xfff4e0, 2.8);
    sunLight.position.set(6, 12, 10);
    scene.add(sunLight);

    const duneLight = new THREE.DirectionalLight(0xffeedd, 1.5);
    duneLight.position.set(0, 4, 12);
    scene.add(duneLight);

    const centerPointLight = new THREE.PointLight(0xffffff, 40, 16, 1.2);
    centerPointLight.position.set(0, 0.6, 0);
    scene.add(centerPointLight);

    const textureLoader = new THREE.TextureLoader();
    const groundNormal = textureLoader.load(
      "/sites/studiomirage/images/ground-normal-512.Dl4_wN7d.webp"
    );
    groundNormal.wrapS = THREE.RepeatWrapping;
    groundNormal.wrapT = THREE.RepeatWrapping;
    groundNormal.repeat.set(24, 24);

    const duneMat = new THREE.MeshStandardMaterial({
      color: 0x161412,
      roughness: 0.78,
      metalness: 0.12,
      normalMap: groundNormal,
      normalScale: new THREE.Vector2(0.95, 0.95),
    });

    const duneGeo = new THREE.PlaneGeometry(80, 80, 140, 140);
    duneGeo.rotateX(-Math.PI / 2);
    const pos = duneGeo.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const z = pos.getZ(i);
      const dist = Math.sqrt(x * x + z * z);
      const w1 = Math.sin(x * 0.16 + z * 0.12) * 0.75;
      const w2 = Math.cos(x * 0.08 - z * 0.14) * 0.95;
      const w3 = Math.sin(x * 0.32 + z * 0.22) * 0.25;
      const foregroundDune = Math.max(0, (z - 2.5) * 0.18);
      const flatten = Math.min(dist / 4.2, 1.0);
      pos.setY(i, (w1 + w2 + w3) * flatten + foregroundDune - 0.35);
    }
    duneGeo.computeVertexNormals();
    scene.add(new THREE.Mesh(duneGeo, duneMat));

    const carouselGroup = new THREE.Group();
    scene.add(carouselGroup);

    const radius = 2.59;
    const screenW = 1.61;
    const screenH = 0.98;
    const screenD = 0.05;
    const screenBoxGeo = new THREE.BoxGeometry(screenW, screenH, screenD);
    const frameMat = new THREE.MeshStandardMaterial({
      color: 0x050505,
      roughness: 0.9,
      metalness: 0.1,
    });

    const videoElements: HTMLVideoElement[] = [];

    PROJECTS_DATA.forEach((proj, idx) => {
      const imgTex = textureLoader.load(proj.image);
      imgTex.colorSpace = THREE.SRGBColorSpace;

      const video = document.createElement("video");
      video.src = proj.video;
      video.crossOrigin = "anonymous";
      video.loop = true;
      video.muted = true;
      video.playsInline = true;
      video.autoplay = true;
      video.preload = "auto";
      video.load();
      video.play().catch(() => {});
      videoElements.push(video);

      const videoTex = new THREE.VideoTexture(video);
      videoTex.colorSpace = THREE.SRGBColorSpace;
      videoTex.generateMipmaps = false;
      videoTex.minFilter = THREE.LinearFilter;
      videoTex.magFilter = THREE.LinearFilter;

      const screenMat = new THREE.MeshBasicMaterial({ map: videoTex });
      const materials = [
        frameMat,
        frameMat,
        frameMat,
        frameMat,
        screenMat,
        screenMat,
      ];

      const mesh = new THREE.Mesh(screenBoxGeo, materials);
      const angle = -idx * ANGLE_STEP;
      mesh.position.set(
        Math.sin(angle) * radius,
        0.42,
        Math.cos(angle) * radius
      );
      mesh.rotation.y = angle;
      carouselGroup.add(mesh);

      // Swap to still if video never produces frames
      video.addEventListener(
        "error",
        () => {
          screenMat.map = imgTex;
          screenMat.needsUpdate = true;
        },
        { once: true }
      );
    });

    const centerBlockerGeo = new THREE.CylinderGeometry(2.38, 2.38, 1.4, 64);
    const centerBlockerMat = new THREE.MeshBasicMaterial({ color: 0x000000 });
    const centerBlocker = new THREE.Mesh(centerBlockerGeo, centerBlockerMat);
    centerBlocker.position.set(0, 0.45, 0);
    carouselGroup.add(centerBlocker);

    const rimGeo = new THREE.RingGeometry(2.38, 3.55, 96);
    rimGeo.rotateX(-Math.PI / 2);
    const rimMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.95,
      blending: THREE.AdditiveBlending,
      side: THREE.DoubleSide,
      depthWrite: false,
    });
    const rimMesh = new THREE.Mesh(rimGeo, rimMat);
    rimMesh.position.set(0, 0.44, 0);
    carouselGroup.add(rimMesh);

    const groundHaloGeo = new THREE.RingGeometry(2.35, 4.4, 96);
    groundHaloGeo.rotateX(-Math.PI / 2);
    const groundHaloMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.4,
      blending: THREE.AdditiveBlending,
      side: THREE.DoubleSide,
      depthWrite: false,
    });
    const groundHaloMesh = new THREE.Mesh(groundHaloGeo, groundHaloMat);
    groundHaloMesh.position.set(0, 0.22, 0);
    carouselGroup.add(groundHaloMesh);

    // Studio Mirage camera positions (bundle-derived)
    const heroCamPos = new THREE.Vector3(0, 16.5, 25.0);
    const heroLookAt = new THREE.Vector3(0, 0.2, 0);
    const carouselCamPos = new THREE.Vector3(0, 0.62, 8.35);
    const carouselLookAt = new THREE.Vector3(0, 0.42, 0);

    const currentCamPos = heroCamPos.clone();
    const currentLookAt = heroLookAt.clone();
    const parallaxTarget = new THREE.Vector3();

    let isDragging = false;
    let dragStartX = 0;
    let dragLastX = 0;
    let dragDeltaX = 0;
    let lastWheelAt = 0;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      const now = performance.now();
      if (now - lastWheelAt < 280) return;
      if (Math.abs(e.deltaY) < 12 && Math.abs(e.deltaX) < 12) return;
      lastWheelAt = now;

      const delta =
        Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
      const { onEnterCarousel: enter, onEnterHero: home, onSlideChange: slide } =
        callbacksRef.current;

      if (delta > 0) {
        if (stateRef.current.isHomeMode) enter();
        else slide((stateRef.current.activeSlideIndex + 1) % NUM_SCREENS);
      } else if (!stateRef.current.isHomeMode) {
        if (stateRef.current.activeSlideIndex === 0) home();
        else
          slide(
            (stateRef.current.activeSlideIndex - 1 + NUM_SCREENS) % NUM_SCREENS
          );
      }
    };

    const handleMouseDown = (e: MouseEvent) => {
      if ((e.target as HTMLElement)?.closest("button, a")) return;
      isDragging = true;
      dragStartX = e.clientX;
      dragLastX = e.clientX;
      dragDeltaX = 0;
    };

    const handleMouseMove = (e: MouseEvent) => {
      stateRef.current.targetMouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      stateRef.current.targetMouseY = (e.clientY / window.innerHeight - 0.5) * 2;

      if (!isDragging) return;
      const dx = e.clientX - dragLastX;
      dragDeltaX += dx;
      dragLastX = e.clientX;

      if (!stateRef.current.isHomeMode) {
        stateRef.current.targetRotationY -=
          (dx / Math.max(window.innerWidth, 1)) * Math.PI * 1.5;
      }
    };

    const handleMouseUp = () => {
      if (!isDragging) return;
      isDragging = false;

      const { onEnterCarousel: enter, onSlideChange: slide } =
        callbacksRef.current;

      if (stateRef.current.isHomeMode) {
        if (Math.abs(dragDeltaX) > 55) enter();
        return;
      }

      const snapIndex = Math.round(
        stateRef.current.targetRotationY / ANGLE_STEP
      );
      const normalized =
        ((snapIndex % NUM_SCREENS) + NUM_SCREENS) % NUM_SCREENS;
      stateRef.current.targetRotationY = snapIndex * ANGLE_STEP;
      stateRef.current.activeSlideIndex = normalized;
      slide(normalized);
    };

    let touchStartX = 0;
    let touchLastX = 0;

    const handleTouchStart = (e: TouchEvent) => {
      if (!e.touches[0]) return;
      isDragging = true;
      touchStartX = e.touches[0].clientX;
      touchLastX = e.touches[0].clientX;
      dragDeltaX = 0;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isDragging || !e.touches[0]) return;
      const curX = e.touches[0].clientX;
      const dx = curX - touchLastX;
      touchLastX = curX;
      dragDeltaX += dx;

      if (stateRef.current.isHomeMode) {
        if (Math.abs(dragDeltaX) > 50) {
          callbacksRef.current.onEnterCarousel();
          isDragging = false;
        }
      } else {
        stateRef.current.targetRotationY -=
          (dx / Math.max(window.innerWidth, 1)) * Math.PI * 1.5;
      }
    };

    const handleTouchEnd = () => {
      if (!isDragging) return;
      isDragging = false;
      if (stateRef.current.isHomeMode) return;

      const snapIndex = Math.round(
        stateRef.current.targetRotationY / ANGLE_STEP
      );
      const normalized =
        ((snapIndex % NUM_SCREENS) + NUM_SCREENS) % NUM_SCREENS;
      stateRef.current.targetRotationY = snapIndex * ANGLE_STEP;
      stateRef.current.activeSlideIndex = normalized;
      callbacksRef.current.onSlideChange(normalized);
    };

    const domEl = renderer.domElement;
    domEl.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });

    const resizeObserver = new ResizeObserver(() => syncSize());
    resizeObserver.observe(container);

    let animId = 0;
    const animate = () => {
      animId = requestAnimationFrame(animate);

      const inHome = stateRef.current.isHomeMode;

      stateRef.current.mouseX +=
        (stateRef.current.targetMouseX - stateRef.current.mouseX) * 0.06;
      stateRef.current.mouseY +=
        (stateRef.current.targetMouseY - stateRef.current.mouseY) * 0.06;

      stateRef.current.currentRotationY +=
        (stateRef.current.targetRotationY - stateRef.current.currentRotationY) *
        0.08;
      carouselGroup.rotation.y = stateRef.current.currentRotationY;

      const baseCam = inHome ? heroCamPos : carouselCamPos;
      const targetLook = inHome ? heroLookAt : carouselLookAt;
      parallaxTarget.set(
        baseCam.x + stateRef.current.mouseX * (inHome ? 0.65 : 0.18),
        baseCam.y + stateRef.current.mouseY * (inHome ? 0.35 : 0.1),
        baseCam.z
      );

      currentCamPos.lerp(parallaxTarget, 0.06);
      currentLookAt.lerp(targetLook, 0.06);
      camera.position.copy(currentCamPos);
      camera.lookAt(currentLookAt);

      const targetRim = inHome ? 0.95 : 0.0;
      rimMat.opacity += (targetRim - rimMat.opacity) * 0.08;
      rimMesh.visible = rimMat.opacity > 0.01;

      const targetHalo = inHome ? 0.4 : 0.0;
      groundHaloMat.opacity += (targetHalo - groundHaloMat.opacity) * 0.08;
      groundHaloMesh.visible = groundHaloMat.opacity > 0.01;

      centerPointLight.intensity +=
        ((inHome ? 42 : 12) - centerPointLight.intensity) * 0.08;
      bloomPass.strength += ((inHome ? 0.72 : 0.14) - bloomPass.strength) * 0.08;

      composer.render();
    };

    animate();
    // Second layout pass after paint — fixes 300×150 default buffer
    requestAnimationFrame(syncSize);

    return () => {
      cancelAnimationFrame(animId);
      resizeObserver.disconnect();
      domEl.removeEventListener("wheel", handleWheel);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);

      videoElements.forEach((v) => {
        v.pause();
        v.removeAttribute("src");
        v.load();
      });

      if (domEl.parentNode) domEl.parentNode.removeChild(domEl);
      composer.dispose();
      renderer.dispose();
      duneGeo.dispose();
      duneMat.dispose();
      screenBoxGeo.dispose();
      frameMat.dispose();
      centerBlockerGeo.dispose();
      centerBlockerMat.dispose();
      rimGeo.dispose();
      rimMat.dispose();
      groundHaloGeo.dispose();
      groundHaloMat.dispose();
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
        cursor: isHomeMode ? "pointer" : "grab",
      }}
    />
  );
}
