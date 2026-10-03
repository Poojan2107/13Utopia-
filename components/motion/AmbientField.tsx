"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import styles from "@/styles/motion/AmbientField.module.css";

/**
 * Tenbin Exact 1:1 Atmosphere:
 * 1. Wide-Angle Interstellar Stardust Cloud & Silvery Cosmic Haze
 * 2. High-Density Micro-Grain Sand / Cosmic Dust Particulates
 * 3. Overhead Volumetric Illumination with Natural Horizontal Spread
 * 4. 3D Floating Dust Motes with Cursor Parallax
 */
export function AmbientField() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let width = window.innerWidth;
    let height = window.innerHeight;

    // Perspective Scene for 3D Floating Dust Particulates
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

    // ── 01. TENBIN 1:1 WIDE COSMIC STARDUST & HAZE SHADER ──────────────────
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

      float hash12(vec2 p) {
        vec3 p3  = fract(vec3(p.xyx) * 0.1031);
        p3 += dot(p3, p3.yzx + 33.33);
        return fract((p3.x + p3.y) * p3.z);
      }

      float vnoise(vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);
        f = f * f * (3.0 - 2.0 * f);
        float a = hash12(i);
        float b = hash12(i + vec2(1.0, 0.0));
        float c = hash12(i + vec2(0.0, 1.0));
        float d = hash12(i + vec2(1.0, 1.0));
        return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
      }

      float fbm(vec2 p) {
        float v = 0.0;
        float a = 0.5;
        mat2 rot = mat2(0.8, 0.6, -0.6, 0.8);
        for (int i = 0; i < 5; ++i) {
          v += a * vnoise(p);
          p = rot * p * 2.05 + vec2(12.3, 7.5);
          a *= 0.5;
        }
        return v;
      }

      void main() {
        vec2 uv = (gl_FragCoord.xy - 0.5 * uResolution.xy) / min(uResolution.x, uResolution.y);

        float scrollFraction = uScroll / max(uResolution.y, 1.0);
        float scrollOffset = scrollFraction * 0.75;

        // Subtle mouse parallax
        vec2 m = uMouse * 0.06;
        vec2 p = vec2(uv.x * 1.1 + m.x, uv.y - scrollOffset * 0.5);

        float t = uTime * 0.03;

        // 1. WIDE HORIZONTAL OVERHEAD STARDUST CLOUD (Tenbin 1:1 exact broad envelope)
        // High density across top center, extending broadly to top-left and top-right
        float vertGrad = smoothstep(-0.65, 0.75, uv.y + 0.15 - scrollOffset);
        float horizSpread = 1.0 - smoothstep(0.4, 2.2, abs(uv.x - m.x * 0.3));
        float cloudBase = vertGrad * horizSpread;

        // Organic wispy stardust filaments & cosmic clouds
        float n1 = fbm(p * 1.35 + vec2(t * 0.05, -t * 0.08));
        float n2 = fbm(p * 2.8 + vec2(-t * 0.06, t * 0.04) + n1 * 0.65);
        float n3 = fbm(p * 5.2 + n2 * 0.5);

        float nebulaWisps = mix(n1, n2, 0.5) * 0.75 + n3 * 0.25;

        // Combine broad cloud envelope with organic cosmic filaments
        float atmosphere = cloudBase * 0.70 + nebulaWisps * cloudBase * 0.65;

        // Central luminous halo behind the monolith
        float centerDist = length(vec2(uv.x * 1.15 - m.x * 0.2, (uv.y - 0.15 + scrollOffset) * 1.3));
        float centralAura = exp(-centerDist * 1.6) * 0.45;
        atmosphere += centralAura * vertGrad;

        // 2. ULTRA-DENSE TACTILE MICRO-STARDUST & SAND GRAIN (Tenbin signature texture)
        vec2 grainCoord = gl_FragCoord.xy;
        float g1 = hash12(grainCoord + fract(uTime * 0.02) * 100.0);
        float g2 = hash12(grainCoord * 0.5 + vec2(23.4, 67.8));
        float g3 = hash12(grainCoord * 1.6 + vec2(89.2, 14.1));

        // Micro-speckles caught in light
        float stardustSpecks = step(0.965, g1) * (0.4 + 0.6 * g2);
        float fineSand = (g1 * 0.5 + g2 * 0.3 + g3 * 0.2);

        // Stardust illumination follows the atmosphere
        float dustGlow = clamp(atmosphere * 1.45, 0.10, 1.0);

        // 3. TENBIN MONOCHROMATIC COLOR COMPOSITION
        vec3 deepVoid = vec3(0.008, 0.009, 0.012);       // Deep space background
        vec3 graphiteDust = vec3(0.11, 0.12, 0.15);     // Ambient dust haze
        vec3 silverNebula = vec3(0.48, 0.52, 0.58);     // Illuminated silver stardust
        vec3 brightWhite = vec3(0.92, 0.94, 0.98);      // Peak cloud highlights

        vec3 col = deepVoid;
        col = mix(col, graphiteDust, smoothstep(0.05, 0.38, atmosphere));
        col = mix(col, silverNebula, smoothstep(0.35, 0.72, atmosphere));
        col = mix(col, brightWhite, smoothstep(0.68, 1.05, atmosphere));

        // Apply tactile photographic sand grain
        col += (fineSand - 0.5) * 0.085 * (0.4 + 0.8 * cloudBase);

        // Apply glistening stardust points
        col += vec3(stardustSpecks * 0.75 * dustGlow);

        // Smooth bottom and side vignette for cinematic framing
        float vignette = 1.0 - smoothstep(0.6, 1.8, length(uv * vec2(0.95, 1.2)));
        col *= vignette;

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

    // ── 02. CONTINUOUS 3D FLOATING DUST PARTICULATES ───────────────────────
    const pCanvas = document.createElement("canvas");
    pCanvas.width = 64;
    pCanvas.height = 64;
    const pCtx = pCanvas.getContext("2d");
    if (pCtx) {
      const grad = pCtx.createRadialGradient(32, 32, 0, 32, 32, 32);
      grad.addColorStop(0, "rgba(255, 255, 255, 1.0)");
      grad.addColorStop(0.22, "rgba(240, 246, 255, 0.85)");
      grad.addColorStop(0.6, "rgba(190, 210, 235, 0.2)");
      grad.addColorStop(1, "rgba(0, 0, 0, 0)");
      pCtx.fillStyle = grad;
      pCtx.fillRect(0, 0, 64, 64);
    }
    const particleTexture = new THREE.CanvasTexture(pCanvas);

    const particleCount = 850;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleVelocities: Array<{ vx: number; vy: number; vz: number }> = [];

    for (let i = 0; i < particleCount; i++) {
      particlePositions[i * 3] = (Math.random() - 0.5) * 32.0;
      particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 26.0;
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 16.0;

      particleVelocities.push({
        vx: (Math.random() - 0.5) * 0.002,
        vy: 0.002 + Math.random() * 0.004,
        vz: (Math.random() - 0.5) * 0.002,
      });
    }

    particleGeo.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.10,
      map: particleTexture,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particleSystem = new THREE.Points(particleGeo, particleMat);
    scene.add(particleSystem);

    // ── 03. INTERACTION & ANIMATION ────────────────────────────────────────
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

      // Update Shader Uniforms
      nebulaUniforms.uTime.value = elapsedTime;
      nebulaUniforms.uMouse.value.set(mouseX, mouseY);
      nebulaUniforms.uScroll.value = scrollY;

      // Update 3D Floating Dust
      const posAttr = particleGeo.attributes.position as THREE.BufferAttribute;
      const arr = posAttr.array as Float32Array;

      for (let i = 0; i < particleCount; i++) {
        const vel = particleVelocities[i];
        arr[i * 3 + 1] += vel.vy;
        if (arr[i * 3 + 1] > 13.0) {
          arr[i * 3 + 1] = -13.0;
        }
      }
      posAttr.needsUpdate = true;

      // Deep space orbital parallax
      particleSystem.rotation.y = elapsedTime * 0.012 + mouseX * 0.06;
      particleSystem.rotation.x = mouseY * 0.04;
      particleSystem.position.y = -(scrollY * 0.001);

      // Render 2-pass: (1) Continuous Atmospheric Shader, (2) 3D Micro-Stardust
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
      particleGeo.dispose();
      particleMat.dispose();
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
