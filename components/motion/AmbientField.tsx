"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import styles from "@/styles/motion/AmbientField.module.css";

/**
 * Tenbin Exact Hero Atmosphere:
 * 1. Volumetric Gaseous Cosmic Smoke & Nebula Cloud Shader (fBm Domain-Warped Simplex Noise)
 * 2. Ultra-Fine Stardust Grain Field (hundreds of micro-dust motes with 3D depth)
 * 3. Filmic Analogue Grain & Vignette Integration
 */
export function AmbientField() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let width = window.innerWidth;
    let height = window.innerHeight;

    // Perspective Camera for 3D Stardust Particulates
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 100);
    camera.position.set(0, 0, 10);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 1);
    container.appendChild(renderer.domElement);

    // ── 01. TENBIN EXACT GRANULAR STARDUST SPRAY SHADER ──────────────────
    const nebulaVertexShader = `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position.xy, 0.0, 1.0);
      }
    `;

    const nebulaFragmentShader = `
      precision highp float;
      uniform float uTime;
      uniform vec2 uResolution;
      uniform vec2 uMouse;
      uniform float uScroll;
      varying vec2 vUv;

      // High-precision pseudo-random hash
      float hash21(vec2 p) {
        p = fract(p * vec2(123.34, 456.21));
        p += dot(p, p + 45.32);
        return fract(p.x * p.y);
      }

      // Fast multi-scale stardust grain
      float stardust(vec2 uv, float scale, float density, float t) {
        vec2 gv = fract(uv * scale) - 0.5;
        vec2 id = floor(uv * scale);
        float n = hash21(id);
        if (n > density) return 0.0;

        vec2 offset = vec2(hash21(id + 1.3), hash21(id + 7.1)) - 0.5;
        float d = length(gv - offset * 0.6);
        float sparkle = 0.7 + 0.3 * sin(t * 3.0 + n * 6.28);
        return smoothstep(0.045, 0.005, d) * sparkle;
      }

      void main() {
        vec2 uv = gl_FragCoord.xy / uResolution.xy;
        vec2 centeredUv = (gl_FragCoord.xy - 0.5 * uResolution.xy) / min(uResolution.x, uResolution.y);

        // Smooth mouse parallax drift
        vec2 mouseOffset = uMouse * 0.035;
        vec2 p = centeredUv + mouseOffset;
        p.y += uScroll * 0.00015;

        float t = uTime * 0.015;

        // ── 1. TENBIN FULL-WIDTH PANORAMIC STARDUST CANOPY ──
        // Broad, majestic stardust veil spanning the full width of the upper 75% of the viewport
        float vertLight = smoothstep(0.15, 0.75, uv.y);
        float horizSpan = smoothstep(1.35, 0.05, abs(centeredUv.x * 0.55));
        float broadCanopy = vertLight * horizSpan;

        // Organic stardust density variations across the upper field
        float n1 = hash21(floor(p * 24.0) + fract(t * 0.05));
        float n2 = hash21(floor(p * 48.0) + fract(t * 0.08));
        float macroHaze = pow(broadCanopy, 1.1) * (0.85 + 0.15 * (n1 * 0.6 + n2 * 0.4));

        // ── 2. HIGH-DENSITY FULL-SPAN STARDUST SAND SPRAY ──
        // Multi-octave micro-stardust grains spanning edge-to-edge
        float d1 = stardust(p + vec2(t * 0.003, -t * 0.008), 160.0, 0.50, uTime);
        float d2 = stardust(p * 1.35 + vec2(-t * 0.005, -t * 0.010) + vec2(0.3, 0.7), 320.0, 0.45, uTime * 1.25);
        float d3 = stardust(p * 2.10 + vec2(t * 0.008, -t * 0.012) + vec2(0.8, 0.2), 580.0, 0.40, uTime * 0.90);
        float d4 = stardust(p * 3.40 + vec2(0.15, 0.45), 1050.0, 0.32, uTime * 1.15);
        float stardustSpray = d1 * 1.0 + d2 * 0.85 + d3 * 0.65 + d4 * 0.45;

        // ── 3. TENBIN EXACT MONOCHROME COLOR PALETTE ──
        // Pure Obsidian Void -> Neutral Charcoal Mist -> Radiant Silver Sand Spray -> Pure White Star Crystals
        vec3 cSpace = vec3(0.002, 0.002, 0.003);        // Deep void
        vec3 cMist = vec3(0.10, 0.10, 0.11);            // Ambient graphite mist
        vec3 cSilverGlow = vec3(0.40, 0.40, 0.43);      // Silver canopy mist
        vec3 cCoreLight = vec3(0.78, 0.78, 0.82);       // Overhead luminous crest
        vec3 cStarWhite = vec3(1.0, 1.0, 1.0);          // Pure white stardust points

        vec3 col = cSpace;
        col = mix(col, cMist, smoothstep(0.02, 0.30, macroHaze));
        col = mix(col, cSilverGlow, smoothstep(0.25, 0.65, macroHaze));
        col = mix(col, cCoreLight, smoothstep(0.60, 0.95, macroHaze) * 0.80);

        // Modulate fine stardust grains across the canopy
        float grainIntensity = (0.25 + 0.75 * macroHaze) * stardustSpray;
        col += cStarWhite * grainIntensity * 2.2;

        // Filmic camera grain
        float filmNoise = (hash21(gl_FragCoord.xy + fract(uTime * 9.21)) - 0.5) * 0.030;
        col += vec3(filmNoise);

        // Soft peripheral vignette keeping lower corners deep obsidian
        float vignette = smoothstep(1.50, 0.25, length(centeredUv));
        col *= (0.85 + 0.15 * vignette);

        gl_FragColor = vec4(col, 1.0);
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

    // ── 02. TENBIN DUAL-TIER PARTICULATE SYSTEM (Foreground Bokeh + Deep Cosmos) ──
    const pCanvas = document.createElement("canvas");
    pCanvas.width = 64;
    pCanvas.height = 64;
    const pCtx = pCanvas.getContext("2d");
    if (pCtx) {
      const grad = pCtx.createRadialGradient(32, 32, 0, 32, 32, 32);
      grad.addColorStop(0, "rgba(255, 255, 255, 1.0)");
      grad.addColorStop(0.25, "rgba(235, 244, 255, 0.85)");
      grad.addColorStop(0.60, "rgba(185, 210, 240, 0.25)");
      grad.addColorStop(1, "rgba(0, 0, 0, 0)");
      pCtx.fillStyle = grad;
      pCtx.fillRect(0, 0, 64, 64);
    }
    const particleTexture = new THREE.CanvasTexture(pCanvas);

    // Tier 1: Deep Cosmos Micro-Stardust (750 particles)
    const deepDustCount = 750;
    const deepDustGeo = new THREE.BufferGeometry();
    const deepDustPositions = new Float32Array(deepDustCount * 3);
    const deepDustVelocities: Array<{ vx: number; vy: number; vz: number }> = [];

    for (let i = 0; i < deepDustCount; i++) {
      deepDustPositions[i * 3] = (Math.random() - 0.5) * 32.0;
      deepDustPositions[i * 3 + 1] = (Math.random() - 0.5) * 22.0;
      deepDustPositions[i * 3 + 2] = (Math.random() - 0.5) * 14.0;

      deepDustVelocities.push({
        vx: (Math.random() - 0.5) * 0.0025,
        vy: 0.002 + Math.random() * 0.006,
        vz: (Math.random() - 0.5) * 0.0025,
      });
    }

    deepDustGeo.setAttribute("position", new THREE.BufferAttribute(deepDustPositions, 3));

    const deepDustMat = new THREE.PointsMaterial({
      size: 0.11,
      map: particleTexture,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const deepDustSystem = new THREE.Points(deepDustGeo, deepDustMat);
    scene.add(deepDustSystem);

    // Tier 2: Foreground Bokeh Motes (35 floating close particles)
    const bokehCount = 35;
    const bokehGeo = new THREE.BufferGeometry();
    const bokehPositions = new Float32Array(bokehCount * 3);
    const bokehData: Array<{ vx: number; vy: number; baseZ: number; phase: number }> = [];

    for (let i = 0; i < bokehCount; i++) {
      bokehPositions[i * 3] = (Math.random() - 0.5) * 16.0;
      bokehPositions[i * 3 + 1] = (Math.random() - 0.5) * 12.0;
      const bz = 5.5 + Math.random() * 3.5;
      bokehPositions[i * 3 + 2] = bz;

      bokehData.push({
        vx: (Math.random() - 0.5) * 0.004,
        vy: 0.003 + Math.random() * 0.008,
        baseZ: bz,
        phase: Math.random() * Math.PI * 2,
      });
    }

    bokehGeo.setAttribute("position", new THREE.BufferAttribute(bokehPositions, 3));

    const bokehMat = new THREE.PointsMaterial({
      size: 0.38,
      map: particleTexture,
      transparent: true,
      opacity: 0.35,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const bokehSystem = new THREE.Points(bokehGeo, bokehMat);
    scene.add(bokehSystem);

    // ── 03. TRACKERS & RENDER LOOP ─────────────────────────────────────────
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const onPointerMove = (e: MouseEvent) => {
      targetMouseX = (e.clientX / window.innerWidth) * 2 - 1;
      targetMouseY = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", onPointerMove, { passive: true });

    let scrollY = 0;
    const onScroll = () => {
      scrollY = window.scrollY || document.documentElement.scrollTop;
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
    };
    window.addEventListener("resize", onResize);

    let rafId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      rafId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Mouse Parallax Damping
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      // Update Nebula Shader Uniforms
      nebulaUniforms.uTime.value = elapsedTime;
      nebulaUniforms.uMouse.value.set(mouseX, mouseY);
      nebulaUniforms.uScroll.value = scrollY;

      // Update Deep Stardust Micro-particles
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

      // Update Foreground Bokeh Motes
      const bokehPosAttr = bokehGeo.attributes.position as THREE.BufferAttribute;
      const bokehArr = bokehPosAttr.array as Float32Array;

      for (let i = 0; i < bokehCount; i++) {
        const b = bokehData[i];
        bokehArr[i * 3 + 1] += b.vy;
        if (bokehArr[i * 3 + 1] > 7.0) {
          bokehArr[i * 3 + 1] = -7.0;
        }
        bokehArr[i * 3] += b.vx + Math.sin(elapsedTime * 0.8 + b.phase) * 0.003;
      }
      bokehPosAttr.needsUpdate = true;

      // Parallax on dust systems
      deepDustSystem.rotation.y = elapsedTime * 0.012 + mouseX * 0.06;
      deepDustSystem.rotation.x = mouseY * 0.04 + scrollY * 0.00015;
      deepDustSystem.position.y = -(scrollY * 0.0008);

      bokehSystem.rotation.y = elapsedTime * 0.008 + mouseX * 0.12;
      bokehSystem.rotation.x = mouseY * 0.08;

      // Render 2-pass: (1) Tenbin Nebula Shader Quad, then (2) 3D Volumetric Depth Fields
      renderer.autoClear = false;
      renderer.clear();
      renderer.render(bgScene, bgCamera);
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", onPointerMove);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      if (renderer.domElement) {
        renderer.domElement.remove();
      }
      nebulaGeo.dispose();
      nebulaMat.dispose();
      deepDustGeo.dispose();
      deepDustMat.dispose();
      bokehGeo.dispose();
      bokehMat.dispose();
      particleTexture.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={styles.root}
      aria-hidden="true"
    />
  );
}
