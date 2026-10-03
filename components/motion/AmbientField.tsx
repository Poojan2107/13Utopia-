"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import styles from "@/styles/motion/AmbientField.module.css";

/**
 * Continuous Global Atmospheric Cosmos (Tenbin Exact):
 * - Hero has the overhead volumetric downlight cone and luminous stardust haze
 * - Background continuously flows into deep cosmic stardust and velvety space across Portfolio, CTA, and Footer
 * - Zero seams, zero borders, 100% unified global canvas
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

    // ── 01. UNIFIED CONTINUOUS ATMOSPHERE SHADER ───────────────────────────
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

      float fbm2D(vec2 p) {
        float v = 0.0;
        float a = 0.5;
        mat2 rot = mat2(0.8, 0.6, -0.6, 0.8);
        for (int i = 0; i < 5; ++i) {
          v += a * vnoise(p);
          p = rot * p * 2.02 + vec2(8.5, 12.3);
          a *= 0.5;
        }
        return v;
      }

      void main() {
        vec2 uv = (gl_FragCoord.xy - 0.5 * uResolution.xy) / min(uResolution.x, uResolution.y);

        // Calculate continuous scroll translation
        float scrollFraction = uScroll / max(uResolution.y, 1.0);
        float scrollOffset = scrollFraction * 0.75;

        // Cursor parallax
        vec2 m = uMouse * 0.06;
        vec2 p = vec2(uv.x + m.x, uv.y - scrollOffset * 0.5);

        float t = uTime * 0.035;

        // 1. HERO OVERHEAD VOLUMETRIC DOWNLIGHT (Scrolls naturally off-screen as user explores)
        vec2 heroLightOrigin = vec2(m.x * 0.35, 0.92 - scrollOffset);
        float distToHeroLight = length(vec2((uv.x - heroLightOrigin.x) * 1.25, (uv.y - heroLightOrigin.y) * 0.85));
        float heroDownwash = exp(-distToHeroLight * 1.55);

        // Volumetric light shafts that anchor to the Hero
        float rayX = (uv.x + m.x * 0.25) * 6.5 + sin((uv.y - scrollOffset * 0.3) * 1.6 + t) * 0.3;
        float rays = vnoise(vec2(rayX, t * 0.2)) * 0.22 + vnoise(vec2(rayX * 2.0, t * 0.35)) * 0.10;
        float rayFalloff = exp(-abs(uv.y - heroLightOrigin.y) * 1.35);
        heroDownwash += rays * rayFalloff * 0.38;

        // 2. UNIFIED CONTINUOUS INTERSTELLAR DUST HAZE
        float broadHaze = fbm2D(p * 1.05 + vec2(0.0, -t * 0.07));
        float fineHaze = fbm2D(p * 2.6 + vec2(t * 0.06, -t * 0.12));
        float dustHaze = mix(broadHaze, fineHaze, 0.32);

        // Unified atmosphere across all sections
        float atmosphere = heroDownwash * 0.78 + dustHaze * (0.10 + heroDownwash * 0.42);

        // 3. SEAMLESS MICRO-STARDUST & TACTILE SAND GRAIN
        vec2 grainCoord = gl_FragCoord.xy;
        float grain1 = hash12(grainCoord + fract(uTime * 0.025) * 100.0);
        float grain2 = hash12(grainCoord * 0.5 + vec2(17.4, 53.2));
        float grain3 = hash12(grainCoord * 1.4 + vec2(91.1, 33.7));

        float stardustSpeck = step(0.968, grain1) * (0.35 + 0.65 * grain2);
        float sandTexture = (grain1 * 0.5 + grain2 * 0.3 + grain3 * 0.2);

        float dustIllumination = clamp(heroDownwash * 1.35 + dustHaze * 0.35, 0.16, 1.0);

        // 4. TENBIN COLOR GRADING
        vec3 deepVoid = vec3(0.009, 0.011, 0.014);       // Deep space
        vec3 graphiteDust = vec3(0.10, 0.11, 0.14);     // Ambient dust
        vec3 silverHaze = vec3(0.44, 0.48, 0.54);       // Illuminated silver haze
        vec3 topGlowWhite = vec3(0.88, 0.91, 0.96);     // Top-down hero glow

        vec3 col = deepVoid;
        col = mix(col, graphiteDust, smoothstep(0.04, 0.36, atmosphere));
        col = mix(col, silverHaze, smoothstep(0.32, 0.70, atmosphere));
        col = mix(col, topGlowWhite, smoothstep(0.65, 1.02, atmosphere));

        // Tactile sand grain
        col += (sandTexture - 0.5) * 0.075 * (0.45 + 0.65 * heroDownwash);

        // Stardust micro-points
        col += vec3(stardustSpeck * 0.70 * dustIllumination);

        // Smooth subtle vignette
        float vignette = 1.0 - smoothstep(0.6, 1.8, length(uv * vec2(1.05, 1.25)));
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

      // Continuous deep space orbital parallax
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
