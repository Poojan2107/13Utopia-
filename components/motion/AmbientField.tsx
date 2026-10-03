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

    // ── 01. TENBIN DIRECTIONAL STARDUST SPRAY & FILAMENT VEIL SHADER ────
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
      float hash(vec2 p) {
        p = fract(p * vec2(443.897, 441.423));
        p += dot(p, p.yx + 19.19);
        return fract((p.x + p.y) * p.x);
      }

      // 2D Simplex Noise
      vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
      vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
      vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }

      float snoise(vec2 v) {
        const vec4 C = vec4(0.211324865405187,
                            0.366025403784439,
                           -0.577350269189626,
                            0.024390243902439);
        vec2 i  = floor(v + dot(v, C.yy) );
        vec2 x0 = v -   i + dot(i, C.xx);
        vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
        vec4 x12 = x0.xyxy + C.xxzz;
        x12.xy -= i1;
        i = mod289(i);
        vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
              + i.x + vec3(0.0, i1.x, 1.0 ));
        vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
        m = m*m;
        m = m*m;
        vec3 x = 2.0 * fract(p * C.www) - 1.0;
        vec3 h = abs(x) - 0.5;
        vec3 ox = floor(x + 0.5);
        vec3 a0 = x - ox;
        m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
        vec3 g;
        g.x  = a0.x  * x0.x  + h.x  * x0.y;
        g.yz = a0.yz * x12.xz + h.yz * x12.yw;
        return 130.0 * dot(m, g);
      }

      // Directional Flow fBm for sweeping sand/stardust wave
      float directionalFbm(vec2 p, vec2 flowDir) {
        float v = 0.0;
        float a = 0.55;
        vec2 shift = vec2(37.2, 19.4);
        mat2 rot = mat2(cos(0.45), sin(0.45), -sin(0.45), cos(0.45));
        for (int i = 0; i < 5; ++i) {
          v += a * snoise(p + flowDir * float(i) * 0.35);
          p = rot * p * 2.15 + shift;
          a *= 0.48;
        }
        return v;
      }

      // Procedural Micro-Stardust Grain Generator
      float stardustLayer(vec2 uv, float scale, float density, float t) {
        vec2 gridUv = uv * scale;
        vec2 gridId = floor(gridUv);
        vec2 gridFract = fract(gridUv) - 0.5;

        float h = hash(gridId);
        if (h > density) return 0.0;

        vec2 offset = (vec2(hash(gridId + 1.1), hash(gridId + 7.3)) - 0.5) * 0.75;
        float dist = length(gridFract - offset);

        float twinkle = 0.65 + 0.35 * sin(t * (2.5 + h * 6.0) + h * 6.28);
        float dotSize = 0.022 + 0.048 * hash(gridId + 3.7);

        return smoothstep(dotSize, 0.0, dist) * twinkle;
      }

      void main() {
        vec2 uv = gl_FragCoord.xy / uResolution.xy;
        vec2 centeredUv = (gl_FragCoord.xy - 0.5 * uResolution.xy) / min(uResolution.x, uResolution.y);

        // Responsive parallax drift
        vec2 mouseOffset = uMouse * 0.05;
        vec2 p = centeredUv + mouseOffset;
        p.y += uScroll * 0.0002;

        float t = uTime * 0.018;

        // ── 1. TENBIN SWEEPING DIRECTIONAL DUST WAVE GEOMETRY ──
        // Directional flow: sweeping upward and diagonally across the upper 70% of the viewport
        vec2 flowVector = vec2(0.65, 0.85);
        vec2 warpedP = p * 1.35;
        warpedP += vec2(snoise(p * 1.8 + t * 0.2), snoise(p * 2.2 - t * 0.25)) * 0.45;

        float waveStructure = directionalFbm(warpedP * 1.4, flowVector);
        float microFilaments = directionalFbm(warpedP * 3.8 + vec2(t * 0.1, -t * 0.15), flowVector * 1.5);

        // Upper-half luminous concentration (Tenbin envelope: strong in upper 65%, deep void in lower 35%)
        float vertFalloff = smoothstep(0.08, 0.78, 1.0 - uv.y);
        float horizSpan = smoothstep(1.05, 0.15, abs(centeredUv.x * 0.75));
        float stardustEnvelope = vertFalloff * horizSpan;

        // Combine wave ridges and fibrous texture
        float combinedWave = clamp(0.45 + 0.55 * (waveStructure * 0.65 + microFilaments * 0.35), 0.0, 1.0);
        float waveIntensity = pow(stardustEnvelope, 1.25) * combinedWave;

        // ── 2. HIGH-DENSITY STARDUST GRAIN LATTICES ──
        float fineDust1 = stardustLayer(centeredUv + mouseOffset * 0.4, 420.0, 0.22, uTime);
        float fineDust2 = stardustLayer(centeredUv * 1.3 + mouseOffset * 0.7 + vec2(0.3, 0.5), 680.0, 0.18, uTime * 1.25);
        float fineDust3 = stardustLayer(centeredUv * 1.8 + mouseOffset * 1.0 + vec2(0.8, 0.2), 980.0, 0.12, uTime * 0.85);
        float stardustField = fineDust1 * 1.0 + fineDust2 * 0.8 + fineDust3 * 0.55;

        // ── 3. TENBIN EXACT COLOR GRADING ──
        vec3 cVoid = vec3(0.008, 0.009, 0.012);          // Deep black void
        vec3 cDarkMist = vec3(0.045, 0.052, 0.068);      // Graphite mist
        vec3 cSilverDust = vec3(0.22, 0.26, 0.33);       // Silver stardust spray
        vec3 cLuminousVeil = vec3(0.55, 0.62, 0.74);     // Luminous crest
        vec3 cSparkleGlitter = vec3(0.95, 0.98, 1.0);    // Crystalline glitter

        vec3 col = cVoid;
        col = mix(col, cDarkMist, smoothstep(0.05, 0.38, waveIntensity));
        col = mix(col, cSilverDust, smoothstep(0.35, 0.72, waveIntensity));
        col = mix(col, cLuminousVeil, smoothstep(0.68, 0.98, waveIntensity) * 0.75);

        // Modulate fine stardust particles along the wave filaments
        float dustGlow = (0.2 + 0.8 * waveIntensity) * stardustField;
        col += cSparkleGlitter * dustGlow * 1.55;

        // Filmic analogue grain
        float grain = (hash(gl_FragCoord.xy + fract(uTime * 8.31)) - 0.5) * 0.032;
        col += vec3(grain);

        // Soft peripheral vignette
        float vignette = smoothstep(1.35, 0.25, length(centeredUv));
        col *= (0.78 + 0.22 * vignette);

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
