"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import styles from "@/styles/motion/AmbientField.module.css";

/**
 * Tenbin Exact 1:1 Atmosphere:
 * - Deep, moody dark obsidian/slate backdrop with subtle silver stardust haze
 * - High contrast for foreground typography
 * - Tactile sand grain and glistening micro-stardust particles
 */
export function AmbientField() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let width = window.innerWidth;
    let height = window.innerHeight;

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

    // ── 01. TENBIN 1:1 MOODY STARDUST SHADER ───────────────────────────────
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

        vec2 m = uMouse * 0.05;
        vec2 p = vec2(uv.x * 1.1 + m.x, uv.y - scrollOffset * 0.5);

        float t = uTime * 0.025;

        // 1. TENBIN SOFT HORIZONTAL COSMIC DUST ENVELOPE (Moody, not washed out)
        float vertGrad = smoothstep(-0.7, 0.8, uv.y + 0.2 - scrollOffset);
        float horizSpread = 1.0 - smoothstep(0.3, 2.4, abs(uv.x - m.x * 0.25));
        float cloudBase = vertGrad * horizSpread;

        float n1 = fbm(p * 1.4 + vec2(t * 0.04, -t * 0.06));
        float n2 = fbm(p * 2.8 + vec2(-t * 0.05, t * 0.03) + n1 * 0.5);

        float nebulaWisps = mix(n1, n2, 0.5);
        float atmosphere = cloudBase * 0.55 + nebulaWisps * cloudBase * 0.45;

        // Gentle central aura behind the monolith
        float centerDist = length(vec2(uv.x * 1.15 - m.x * 0.15, (uv.y - 0.15 + scrollOffset) * 1.25));
        float centralAura = exp(-centerDist * 1.8) * 0.35;
        atmosphere += centralAura * vertGrad;

        // 2. TACTILE SAND GRAIN & GLISTENING STARDUST
        vec2 grainCoord = gl_FragCoord.xy;
        float g1 = hash12(grainCoord + fract(uTime * 0.02) * 100.0);
        float g2 = hash12(grainCoord * 0.5 + vec2(23.4, 67.8));
        float g3 = hash12(grainCoord * 1.6 + vec2(89.2, 14.1));

        float stardustSpecks = step(0.966, g1) * (0.35 + 0.65 * g2);
        float fineSand = (g1 * 0.5 + g2 * 0.3 + g3 * 0.2);

        float dustGlow = clamp(atmosphere * 1.35, 0.08, 0.85);

        // 3. TENBIN MOODY DARK COLOR PALETTE (Deep Slate & Silver Mist — Never blinding white)
        vec3 deepVoid = vec3(0.012, 0.014, 0.018);       // Deep space base
        vec3 graphiteDust = vec3(0.055, 0.065, 0.085);  // Subtle ambient haze
        vec3 silverNebula = vec3(0.16, 0.19, 0.24);     // Atmospheric silver dust
        vec3 softHighlight = vec3(0.32, 0.37, 0.45);    // Peak ambient light

        vec3 col = deepVoid;
        col = mix(col, graphiteDust, smoothstep(0.04, 0.35, atmosphere));
        col = mix(col, silverNebula, smoothstep(0.32, 0.70, atmosphere));
        col = mix(col, softHighlight, smoothstep(0.65, 1.05, atmosphere));

        // Tactile photographic film grain
        col += (fineSand - 0.5) * 0.065 * (0.35 + 0.65 * cloudBase);

        // Stardust pin-prick points
        col += vec3(stardustSpecks * 0.65 * dustGlow);

        // Smooth cinematic vignette
        float vignette = 1.0 - smoothstep(0.55, 1.75, length(uv * vec2(0.95, 1.2)));
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
      grad.addColorStop(0.22, "rgba(220, 235, 255, 0.75)");
      grad.addColorStop(0.6, "rgba(160, 185, 220, 0.15)");
      grad.addColorStop(1, "rgba(0, 0, 0, 0)");
      pCtx.fillStyle = grad;
      pCtx.fillRect(0, 0, 64, 64);
    }
    const particleTexture = new THREE.CanvasTexture(pCanvas);

    const particleCount = 750;
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
      size: 0.09,
      map: particleTexture,
      transparent: true,
      opacity: 0.55,
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

      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      nebulaUniforms.uTime.value = elapsedTime;
      nebulaUniforms.uMouse.value.set(mouseX, mouseY);
      nebulaUniforms.uScroll.value = scrollY;

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

      particleSystem.rotation.y = elapsedTime * 0.012 + mouseX * 0.06;
      particleSystem.rotation.x = mouseY * 0.04;
      particleSystem.position.y = -(scrollY * 0.001);

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
