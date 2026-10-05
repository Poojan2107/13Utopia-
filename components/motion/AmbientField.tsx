"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import styles from "@/styles/motion/AmbientField.module.css";

interface AmbientFieldProps {
  showEmblem?: boolean;
}

/**
 * 13 UTOPIA Signature Atmosphere:
 * 1. Volumetric Cosmic Smoke & Nebula Shader
 * 2. Stardust Grain Field
 * 3. Centered Liquid Titanium "13" Emblem with continuous scroll & idle motion across all inner pages
 */
export function AmbientField({ showEmblem = true }: AmbientFieldProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    const isMobile = width < 768;

    // Perspective Camera for 3D Emblem & Stardust
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 100);
    camera.position.set(0, 0, 11.2);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });

    const dpr = Math.min(window.devicePixelRatio || 1, isMobile ? 1.0 : 1.5);
    renderer.setPixelRatio(dpr);
    renderer.setSize(width, height);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.35;
    renderer.setClearColor(0x000000, 1);
    container.appendChild(renderer.domElement);

    // ── 01. HIGH-EFFICIENCY VOLUMETRIC LIQUID SMOKE SHADER ──
    const nebulaVertexShader = `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position.xy, 0.0, 1.0);
      }
    `;

    const nebulaFragmentShader = `
      precision mediump float;
      uniform float uTime;
      uniform vec2 uResolution;
      uniform vec2 uMouse;
      uniform float uScroll;
      varying vec2 vUv;

      vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
      vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
      vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
      vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

      float snoise(vec3 v) {
        const vec2 C = vec2(1.0/6.0, 1.0/3.0);
        const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
        vec3 i  = floor(v + dot(v, C.yyy));
        vec3 x0 = v - i + dot(i, C.xxx);
        vec3 g = step(x0.yzx, x0.xyz);
        vec3 l = 1.0 - g;
        vec3 i1 = min(g.xyz, l.zxy);
        vec3 i2 = max(g.xyz, l.zxy);
        vec3 x1 = x0 - i1 + C.xxx;
        vec3 x2 = x0 - i2 + C.yyy;
        vec3 x3 = x0 - D.yyy;
        i = mod289(i);
        vec4 p = permute(permute(permute(
                   i.z + vec4(0.0, i1.z, i2.z, 1.0))
                 + i.y + vec4(0.0, i1.y, i2.y, 1.0))
                 + i.x + vec4(0.0, i1.x, i2.x, 1.0));
        float n_ = 0.142857142857;
        vec3  ns = n_ * D.wyz - D.xzx;
        vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
        vec4 x_ = floor(j * ns.z);
        vec4 y_ = floor(j - 7.0 * x_);
        vec4 x = x_ *ns.x + ns.yyyy;
        vec4 y = y_ *ns.x + ns.yyyy;
        vec4 h = 1.0 - abs(x) - abs(y);
        vec4 b0 = vec4(x.xy, y.xy);
        vec4 b1 = vec4(x.zw, y.zw);
        vec4 s0 = floor(b0)*2.0 + 1.0;
        vec4 s1 = floor(b1)*2.0 + 1.0;
        vec4 sh = -step(h, vec4(0.0));
        vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
        vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;
        vec3 p0 = vec3(a0.xy, h.x);
        vec3 p1 = vec3(a0.zw, h.y);
        vec3 p2 = vec3(a1.xy, h.z);
        vec3 p3 = vec3(a1.zw, h.w);
        vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
        p0 *= norm.x;
        p1 *= norm.y;
        p2 *= norm.z;
        p3 *= norm.w;
        vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
        m = m * m;
        return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
      }

      float fbm(vec3 p) {
        float v = 0.52 * snoise(p);
        v += 0.30 * snoise(p * 2.05 + vec3(17.3));
        v += 0.14 * snoise(p * 4.12 + vec3(43.8));
        return v;
      }

      float hash(vec2 p) {
        p = fract(p * vec2(123.34, 456.21));
        p += dot(p, p + 45.32);
        return fract(p.x * p.y);
      }

      void main() {
        vec2 centeredUv = (gl_FragCoord.xy - 0.5 * uResolution.xy) / min(uResolution.x, uResolution.y);
        vec2 mouseP = uMouse * 0.5;

        vec2 p = centeredUv * 1.30 + uMouse * 0.08;
        p.y += uScroll * 0.00022;

        float t = uTime * 0.038;

        // 4-octave curl-noise fluid advection & domain warping (Prototype 03)
        float q1 = fbm(vec3(p * 1.15, t));
        float q2 = fbm(vec3(p * 1.75 + vec2(q1 * 0.65, -q1 * 0.45), t * 1.15));
        float smoke = fbm(vec3(p * 2.10 + vec2(q2 * 0.50, q1 * 0.50), t * 1.30));

        float density = smoothstep(-0.15, 0.78, smoke + q1 * 0.25 + q2 * 0.15);

        vec3 spaceVoid = vec3(0.0, 0.0, 0.0);
        vec3 graphitePlume = vec3(0.035, 0.035, 0.038);
        vec3 liquidSilver = vec3(0.11, 0.11, 0.12);
        vec3 titaniumLight = vec3(0.32, 0.32, 0.34);
        vec3 crystalGlint = vec3(0.92, 0.92, 0.95);

        vec3 col = spaceVoid;
        col = mix(col, graphitePlume, smoothstep(0.0, 0.35, density));
        col = mix(col, liquidSilver, smoothstep(0.28, 0.70, density));
        col = mix(col, titaniumLight, smoothstep(0.60, 1.00, density) * 0.85);

        // Stardust Sparkles
        vec2 sUv = (centeredUv + uMouse * 0.03) * 75.0;
        vec2 sId = floor(sUv);
        vec2 sGv = fract(sUv) - 0.5;
        float sH = hash(sId);
        if (sH > 0.84) {
          float d = length(sGv);
          float sparkle = smoothstep(0.05, 0.008, d) * (0.4 + 0.6 * sin(uTime * 3.5 + sH * 6.28));
          col += crystalGlint * sparkle * 0.35;
        }

        // Pointer Bloom
        float mDist = length(centeredUv - mouseP);
        col += titaniumLight * exp(-mDist * 2.8) * 0.12;

        // Luxury Grain
        float grain = (hash(gl_FragCoord.xy + fract(uTime * 11.3)) - 0.5) * 0.012;
        col += vec3(grain);

        // Vignette
        float vig = smoothstep(1.4, 0.3, length(centeredUv));
        col *= (0.75 + 0.25 * vig);

        gl_FragColor = vec4(max(vec3(0.0), col), 1.0);
      }
    `;

    const nebulaUniforms = {
      uTime: { value: 0 },
      uResolution: { value: new THREE.Vector2(width, height) },
      uMouse: { value: new THREE.Vector2(0, 0) },
      uScroll: { value: 0 },
    };

    const nebulaGeo = new THREE.PlaneGeometry(2, 2);
    const nebulaMat = new THREE.ShaderMaterial({
      vertexShader: nebulaVertexShader,
      fragmentShader: nebulaFragmentShader,
      uniforms: nebulaUniforms,
      depthTest: false,
      depthWrite: false,
    });

    const bgScene = new THREE.Scene();
    const bgCamera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const bgMesh = new THREE.Mesh(nebulaGeo, nebulaMat);
    bgScene.add(bgMesh);

    // ── 02. PARTICULATE SYSTEM ──
    const pCanvas = document.createElement("canvas");
    pCanvas.width = 32;
    pCanvas.height = 32;
    const pCtx = pCanvas.getContext("2d");
    if (pCtx) {
      const grad = pCtx.createRadialGradient(16, 16, 0, 16, 16, 16);
      grad.addColorStop(0, "rgba(255, 255, 255, 0.65)");
      grad.addColorStop(0.3, "rgba(255, 255, 255, 0.25)");
      grad.addColorStop(1, "rgba(0, 0, 0, 0)");
      pCtx.fillStyle = grad;
      pCtx.fillRect(0, 0, 32, 32);
    }
    const particleTexture = new THREE.CanvasTexture(pCanvas);

    const deepDustCount = isMobile ? 80 : 160;
    const deepDustGeo = new THREE.BufferGeometry();
    const deepDustPositions = new Float32Array(deepDustCount * 3);
    const deepDustVelocities: Array<{ vx: number; vy: number; vz: number }> = [];

    for (let i = 0; i < deepDustCount; i++) {
      deepDustPositions[i * 3] = (Math.random() - 0.5) * 32.0;
      deepDustPositions[i * 3 + 1] = (Math.random() - 0.5) * 22.0;
      deepDustPositions[i * 3 + 2] = (Math.random() - 0.5) * 14.0;

      deepDustVelocities.push({
        vx: (Math.random() - 0.5) * 0.0015,
        vy: 0.0012 + Math.random() * 0.0035,
        vz: (Math.random() - 0.5) * 0.0015,
      });
    }

    deepDustGeo.setAttribute("position", new THREE.BufferAttribute(deepDustPositions, 3));

    const deepDustMat = new THREE.PointsMaterial({
      size: 0.055,
      map: particleTexture,
      transparent: true,
      opacity: 0.22,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const deepDustSystem = new THREE.Points(deepDustGeo, deepDustMat);
    scene.add(deepDustSystem);

    // ── 03. CENTERED 3D "13" EMBLEM IN CONTINUOUS MOTION ──
    let emblemGroup: THREE.Group | null = null;
    let oneGeo: THREE.ExtrudeGeometry | null = null;
    let threeGeo: THREE.ExtrudeGeometry | null = null;
    let matOne: THREE.MeshPhysicalMaterial | null = null;
    let matThree: THREE.MeshPhysicalMaterial | null = null;
    let mouseLight: THREE.PointLight | null = null;

    if (showEmblem) {
      emblemGroup = new THREE.Group();

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
        depth: 0.95,
        bevelEnabled: true,
        bevelThickness: 0.045,
        bevelSize: 0.045,
        bevelOffset: 0,
        bevelSegments: 4,
      };

      matOne = new THREE.MeshPhysicalMaterial({
        color: new THREE.Color(0x3a3a3a),
        roughness: 0.16,
        metalness: 0.88,
        clearcoat: 0.85,
        clearcoatRoughness: 0.12,
        reflectivity: 0.9,
        transparent: true,
        opacity: 1.0,
      });

      matThree = new THREE.MeshPhysicalMaterial({
        color: new THREE.Color(0x323232),
        roughness: 0.18,
        metalness: 0.85,
        clearcoat: 0.85,
        clearcoatRoughness: 0.12,
        reflectivity: 0.9,
        transparent: true,
        opacity: 1.0,
      });

      oneGeo = new THREE.ExtrudeGeometry(createOneShape(), extrudeSettings);
      oneGeo.center();
      const oneMesh = new THREE.Mesh(oneGeo, matOne);
      oneMesh.position.set(-1.85, 0, 0);
      emblemGroup.add(oneMesh);

      threeGeo = new THREE.ExtrudeGeometry(createThreeShape(), extrudeSettings);
      threeGeo.center();
      const threeMesh = new THREE.Mesh(threeGeo, matThree);
      threeMesh.position.set(0.95, 0, 0);
      emblemGroup.add(threeMesh);

      // Dead center in screen
      emblemGroup.position.set(0, 0, 0);
      const initialScale = isMobile ? 0.72 : 0.95;
      emblemGroup.scale.set(initialScale, initialScale, initialScale);
      scene.add(emblemGroup);

      // Studio Lighting for 3D Emblem
      const ambientLight = new THREE.AmbientLight(0xffffff, 2.0);
      scene.add(ambientLight);

      const keyLight = new THREE.DirectionalLight(0xffffff, 5.0);
      keyLight.position.set(6, 8, 7);
      scene.add(keyLight);

      const fillLight = new THREE.DirectionalLight(0xd0d0d0, 3.2);
      fillLight.position.set(-6, 3, 5);
      scene.add(fillLight);

      const rimLight = new THREE.DirectionalLight(0xffffff, 4.5);
      rimLight.position.set(3, -5, -2);
      scene.add(rimLight);

      const topLight = new THREE.DirectionalLight(0xffffff, 2.5);
      topLight.position.set(0, 8, 2);
      scene.add(topLight);

      mouseLight = new THREE.PointLight(0xffffff, 8.0, 18);
      mouseLight.position.set(0, 0, 4);
      scene.add(mouseLight);
    }

    // ── 04. TRACKERS & RENDER LOOP ──
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;
    let smoothScrollY = 0;
    let currentScrollY = 0;

    const onPointerMove = (e: MouseEvent) => {
      targetMouseX = (e.clientX / window.innerWidth) * 2 - 1;
      targetMouseY = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", onPointerMove, { passive: true });

    const onTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        targetMouseX = (e.touches[0].clientX / window.innerWidth) * 2 - 1;
        targetMouseY = -(e.touches[0].clientY / window.innerHeight) * 2 + 1;
      }
    };
    window.addEventListener("touchmove", onTouchMove, { passive: true });

    const onScroll = () => {
      currentScrollY = window.scrollY || document.documentElement.scrollTop;
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    const onResize = () => {
      if (!container) return;
      width = window.innerWidth;
      height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      nebulaUniforms.uResolution.value.set(width, height);

      if (emblemGroup) {
        const resScale = width < 768 ? 0.72 : 0.95;
        emblemGroup.scale.set(resScale, resScale, resScale);
      }
    };
    window.addEventListener("resize", onResize);

    let rafId: number;
    let isRunning = true;
    const startTime = performance.now();

    const animate = () => {
      if (!isRunning) return;
      rafId = requestAnimationFrame(animate);
      const elapsedTime = (performance.now() - startTime) * 0.001;

      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;
      smoothScrollY += (currentScrollY - smoothScrollY) * 0.06;

      nebulaUniforms.uTime.value = elapsedTime;
      nebulaUniforms.uMouse.value.set(mouseX, mouseY);
      nebulaUniforms.uScroll.value = smoothScrollY;

      // Dust particulate float
      const deepPosAttr = deepDustGeo.attributes.position as THREE.BufferAttribute;
      const deepArr = deepPosAttr.array as Float32Array;

      for (let i = 0; i < deepDustCount; i++) {
        const vel = deepDustVelocities[i];
        deepArr[i * 3 + 1] += vel.vy;
        if (deepArr[i * 3 + 1] > 11.0) {
          deepArr[i * 3 + 1] = -11.0;
        }
      }
      deepPosAttr.needsUpdate = true;

      deepDustSystem.rotation.y = elapsedTime * 0.012 + mouseX * 0.06;
      deepDustSystem.rotation.x = mouseY * 0.04 + smoothScrollY * 0.00015;
      deepDustSystem.position.y = -(smoothScrollY * 0.0008);

      // Centered 3D Emblem: Rotate on Scroll, parallax drift & smooth fade as user scrolls into content
      if (emblemGroup && matOne && matThree) {
        // Measure real footer and CTA position relative to viewport
        const footerEl = document.querySelector("footer");
        let footerProximityFactor = 1.0;
        if (footerEl) {
          const footerRect = footerEl.getBoundingClientRect();
          const fadeStart = height * 1.35;
          const fadeEnd = height * 0.85;
          if (footerRect.top <= fadeEnd) {
            footerProximityFactor = 0.0;
          } else if (footerRect.top < fadeStart) {
            footerProximityFactor = (footerRect.top - fadeEnd) / (fadeStart - fadeEnd);
          }
        }

        // Hero-focused scroll fade: smoothly ascends with parallax and fades as user scrolls down
        const heroFadeOut = Math.max(0, Math.min(1, 1.0 - (smoothScrollY / (height * 0.75))));
        const combinedFade = Math.min(footerProximityFactor, heroFadeOut);

        if (combinedFade <= 0.01) {
          emblemGroup.visible = false;
        } else {
          emblemGroup.visible = true;
          const baseScale = (width < 768 ? 0.72 : 0.95) * Math.max(combinedFade, 0.4);
          emblemGroup.scale.set(baseScale, baseScale, baseScale);
          matOne.opacity = combinedFade;
          matThree.opacity = combinedFade;

          // Parallax ascend on scroll + subtle responsive tilt
          const targetRotY = (smoothScrollY * 0.0022) + (mouseX * 0.18);
          const targetRotX = -(mouseY * 0.12) + (smoothScrollY * 0.0003);
          const targetRotZ = mouseX * 0.03;

          emblemGroup.rotation.y += (targetRotY - emblemGroup.rotation.y) * 0.08;
          emblemGroup.rotation.x += (targetRotX - emblemGroup.rotation.x) * 0.08;
          emblemGroup.rotation.z += (targetRotZ - emblemGroup.rotation.z) * 0.08;

          // Natural parallax upward drift
          const targetPosY = (smoothScrollY * 0.0035);
          emblemGroup.position.y += (targetPosY - emblemGroup.position.y) * 0.08;

          if (mouseLight) {
            mouseLight.position.x = mouseX * 5.5;
            mouseLight.position.y = mouseY * 5.5;
          }
        }
      }

      renderer.autoClear = false;
      renderer.clear();
      renderer.render(bgScene, bgCamera);
      renderer.render(scene, camera);
    };

    animate();

    const onVisibilityChange = () => {
      if (document.hidden) {
        isRunning = false;
        cancelAnimationFrame(rafId);
      } else {
        isRunning = true;
        animate();
      }
    };
    document.addEventListener("visibilitychange", onVisibilityChange);

    return () => {
      isRunning = false;
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", onPointerMove);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVisibilityChange);
      if (renderer.domElement) {
        renderer.domElement.remove();
      }
      nebulaGeo.dispose();
      nebulaMat.dispose();
      deepDustGeo.dispose();
      deepDustMat.dispose();
      particleTexture.dispose();
      if (oneGeo) oneGeo.dispose();
      if (threeGeo) threeGeo.dispose();
      if (matOne) matOne.dispose();
      if (matThree) matThree.dispose();
      renderer.dispose();
    };
  }, [showEmblem]);

  return (
    <div
      ref={containerRef}
      className={styles.root}
      aria-hidden="true"
    />
  );
}
