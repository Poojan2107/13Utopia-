"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import styles from "@/styles/motion/AmbientField.module.css";

/**
 * Tenbin Exact 1:1 Atmosphere Replication:
 * 1. Overhead Volumetric Downlight Cone with Soft Vertical Light Shafts
 * 2. Homogeneous, Velvety Interstellar Dust Haze (No Swirly Marble Artifacts)
 * 3. Dense Micro-Stardust & Tactile Sand Grain Texture Caught in Light
 * 4. 3D Floating Cosmic Particulates with Mouse Parallax
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

    // ── 01. TENBIN VOLUMETRIC DOWNLIGHT & DUST GRAIN SHADER ────────────────
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

      // High quality noise & hash
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

        // Gentle cursor parallax
        vec2 m = uMouse * 0.08;
        vec2 p = uv + m;
        p.y += uScroll * 0.00025;

        float t = uTime * 0.04;

        // 1. TOP-DOWN VOLUMETRIC LIGHT CONE (Tenbin signature overhead downlight)
        // High intensity at top center, smoothly washing down across the scene
        vec2 topOrigin = vec2(m.x * 0.4, 0.95);
        float distToTop = length(vec2((uv.x - topOrigin.x) * 1.25, (uv.y - topOrigin.y) * 0.9));
        float topDownwash = exp(-distToTop * 1.55);

        // Soft vertical volumetric shafts / subtle light striations
        float rayX = (uv.x + m.x * 0.3) * 7.0 + sin(uv.y * 1.8 + t) * 0.3;
        float rays = vnoise(vec2(rayX, t * 0.25)) * 0.25 + vnoise(vec2(rayX * 2.1, t * 0.4)) * 0.12;
        float rayFalloff = exp(-abs(uv.y - 0.35) * 1.4);
        topDownwash += rays * rayFalloff * 0.4;

        // 2. SOFT INTERSTELLAR DUST HAZE (Gentle, airy, atmospheric depth — no sharp swirls)
        float broadHaze = fbm2D(p * 1.1 + vec2(0.0, -t * 0.1));
        float fineHaze = fbm2D(p * 2.8 + vec2(t * 0.08, -t * 0.15));
        float dustHaze = mix(broadHaze, fineHaze, 0.35);

        // Combined volumetric atmosphere
        float atmosphere = topDownwash * 0.78 + dustHaze * (0.15 + topDownwash * 0.45);

        // 3. TACTILE MICRO-STARDUST & DENSE SAND GRAIN
        vec2 grainCoord = gl_FragCoord.xy;
        float grain1 = hash12(grainCoord + fract(uTime * 0.03) * 100.0);
        float grain2 = hash12(grainCoord * 0.5 + vec2(17.4, 53.2));
        float grain3 = hash12(grainCoord * 1.4 + vec2(91.1, 33.7));

        // Tenbin fine stardust specks caught in the light
        float stardustSpeck = step(0.968, grain1) * (0.35 + 0.65 * grain2);
        float sandTexture = (grain1 * 0.5 + grain2 * 0.3 + grain3 * 0.2);

        // Stardust illumination mask
        float dustIllumination = clamp(topDownwash * 1.35 + dustHaze * 0.35, 0.08, 1.0);

        // 4. TENBIN MONOCHROME COLOR COMPOSITION
        vec3 deepVoid = vec3(0.012, 0.014, 0.018);       // Deep space base
        vec3 graphiteDust = vec3(0.12, 0.13, 0.16);     // Dark dust atmosphere
        vec3 silverHaze = vec3(0.46, 0.50, 0.56);       // Soft illuminated dust
        vec3 topGlowWhite = vec3(0.88, 0.91, 0.96);     // Peak top overhead light

        vec3 col = deepVoid;
        col = mix(col, graphiteDust, smoothstep(0.06, 0.38, atmosphere));
        col = mix(col, silverHaze, smoothstep(0.35, 0.72, atmosphere));
        col = mix(col, topGlowWhite, smoothstep(0.68, 1.05, atmosphere));

        // Apply physical tactile sand grain
        col += (sandTexture - 0.5) * 0.085 * (0.5 + 0.7 * topDownwash);

        // Apply stardust micro-points
        col += vec3(stardustSpeck * 0.75 * dustIllumination);

        // Smooth bottom and side vignette for cinematic framing
        float vignette = 1.0 - smoothstep(0.5, 1.7, length(uv * vec2(1.05, 1.25)));
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

    // ── 02. 3D FLOATING COSMIC DUST PARTICULATES ───────────────────────────
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

    // 750 3D Micro-Dust Motes
    const particleCount = 750;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleVelocities: Array<{ vx: number; vy: number; vz: number }> = [];

    for (let i = 0; i < particleCount; i++) {
      particlePositions[i * 3] = (Math.random() - 0.5) * 30.0;
      particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 22.0;
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 14.0;

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
        if (arr[i * 3 + 1] > 11.0) {
          arr[i * 3 + 1] = -11.0;
        }
      }
      posAttr.needsUpdate = true;

      // Deep space orbital parallax
      particleSystem.rotation.y = elapsedTime * 0.012 + mouseX * 0.06;
      particleSystem.rotation.x = mouseY * 0.04 + scrollY * 0.0002;
      particleSystem.position.y = -(scrollY * 0.0008);

      // Render 2-pass: (1) Tenbin Downlight Shader, (2) 3D Micro-Stardust
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
