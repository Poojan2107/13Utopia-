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

    // ── 01. TENBIN EXACT COSMIC STARDUST & NEBULA FIELD ──────────────────
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

      // 2D Simplex Noise for soft gaseous envelope
      vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
      vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
      vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }

      float snoise(vec2 v) {
        const vec4 C = vec4(0.211324865405187,  // (3.0-sqrt(3.0))/6.0
                            0.366025403784439,  // 0.5*(sqrt(3.0)-1.0)
                           -0.577350269189626,  // -1.0 + 2.0 * C.x
                            0.024390243902439); // 1.0 / 41.0
        vec2 i  = floor(v + dot(v, C.yy) );
        vec2 x0 = v -   i + dot(i, C.xx);
        vec2 i1;
        i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
        vec4 x12 = x0.xyxy + C.xxzz;
        x12.xy -= i1;
        i = mod289(i);
        vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
              + i.x + vec3(0.0, i1.x, 1.0 ));
        vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
        m = m*m ;
        m = m*m ;
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

      // Smooth fractal noise for cosmic dust clouds
      float fbm(vec2 p) {
        float v = 0.0;
        float a = 0.5;
        for (int i = 0; i < 4; ++i) {
          v += a * snoise(p);
          p = p * 2.05 + vec2(12.3, 45.6);
          a *= 0.5;
        }
        return v;
      }

      // Tenbin Micro-Stardust Grain Generator (Procedural micro-dot lattice)
      float stardustLayer(vec2 uv, float scale, float density, float t) {
        vec2 gridUv = uv * scale;
        vec2 gridId = floor(gridUv);
        vec2 gridFract = fract(gridUv) - 0.5;

        float h = hash(gridId);
        if (h > density) return 0.0;

        vec2 offset = (vec2(hash(gridId + 1.1), hash(gridId + 7.3)) - 0.5) * 0.7;
        float dist = length(gridFract - offset);

        // Twinkle
        float twinkle = 0.6 + 0.4 * sin(t * (3.0 + h * 5.0) + h * 6.28);
        float dotSize = 0.025 + 0.045 * hash(gridId + 3.7);

        return smoothstep(dotSize, 0.0, dist) * twinkle;
      }

      void main() {
        vec2 uv = gl_FragCoord.xy / uResolution.xy;
        vec2 centeredUv = (gl_FragCoord.xy - 0.5 * uResolution.xy) / min(uResolution.x, uResolution.y);

        // Gentle mouse parallax and scroll motion
        vec2 mouseOffset = uMouse * 0.04;
        vec2 p = centeredUv + mouseOffset;
        p.y += uScroll * 0.00015;

        float t = uTime * 0.02;

        // ── 1. TENBIN GASEOUS NEBULA CLOUD ENVELOPE ──
        // Broad horizontal stardust cloud concentrated in the upper 65% of the viewport
        float vertEnvelope = smoothstep(0.05, 0.75, 1.0 - uv.y);
        float horizEnvelope = smoothstep(0.95, 0.2, abs(centeredUv.x * 0.85));
        float baseGlowMask = vertEnvelope * horizEnvelope;

        // Soft organic turbulence
        float cloudNoise1 = fbm(p * 1.6 + vec2(t * 0.4, -t * 0.2));
        float cloudNoise2 = fbm(p * 3.2 - vec2(t * 0.3, t * 0.5));
        float organicCloud = clamp(0.5 + 0.5 * (cloudNoise1 * 0.65 + cloudNoise2 * 0.35), 0.0, 1.0);

        // ── 2. TENBIN MICRO-STARDUST VEIL ──
        // Multi-octave fine stardust particle lattices
        float dust1 = stardustLayer(centeredUv + mouseOffset * 0.5, 380.0, 0.18, uTime);
        float dust2 = stardustLayer(centeredUv + mouseOffset * 0.8 + vec2(0.2, 0.4), 620.0, 0.14, uTime * 1.2);
        float dust3 = stardustLayer(centeredUv * 1.2 + mouseOffset * 1.1 + vec2(0.7, 0.1), 900.0, 0.10, uTime * 0.9);
        float fineDust = dust1 * 1.0 + dust2 * 0.75 + dust3 * 0.5;

        // ── 3. TENBIN EXACT COLOR PALETTE ──
        // Base Void: #020204 (deep obsidian black)
        // Mid-tone Ambient Haze: #0c0f14 to #181d26
        // Luminous Silver Stardust: #3a4556 to #68778d
        // Crisp Stardust Specular: #d8e2ed to #ffffff
        vec3 cVoid = vec3(0.012, 0.014, 0.018);
        vec3 cAmbientMist = vec3(0.055, 0.065, 0.085);
        vec3 cSilverHaze = vec3(0.18, 0.21, 0.27);
        vec3 cLuminousCloud = vec3(0.42, 0.48, 0.58);
        vec3 cSparkle = vec3(0.90, 0.94, 1.0);

        // Blend gaseous ambient mist
        float hazeDensity = pow(baseGlowMask, 1.3) * (0.4 + 0.6 * organicCloud);
        vec3 col = cVoid;
        col = mix(col, cAmbientMist, smoothstep(0.05, 0.40, hazeDensity));
        col = mix(col, cSilverHaze, smoothstep(0.35, 0.75, hazeDensity));
        col = mix(col, cLuminousCloud, smoothstep(0.70, 1.0, hazeDensity) * 0.6);

        // Modulate fine stardust veil by cosmic cloud density + ambient sparkle
        float stardustIntensity = (0.25 + 0.75 * hazeDensity) * fineDust;
        col += cSparkle * stardustIntensity * 1.4;

        // Subtle filmic analogue grain
        float filmGrain = (hash(gl_FragCoord.xy + fract(uTime * 7.13)) - 0.5) * 0.028;
        col += vec3(filmGrain);

        // Soft vignette to keep edges deep and focus on central monolith & typography
        float distFromCenter = length(centeredUv);
        float vignette = smoothstep(1.3, 0.3, distFromCenter);
        col *= (0.75 + 0.25 * vignette);

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

    // ── 02. TENBIN MICRO-STARDUST PARTICULATE FIELD ────────────────────────
    const pCanvas = document.createElement("canvas");
    pCanvas.width = 64;
    pCanvas.height = 64;
    const pCtx = pCanvas.getContext("2d");
    if (pCtx) {
      const grad = pCtx.createRadialGradient(32, 32, 0, 32, 32, 32);
      grad.addColorStop(0, "rgba(255, 255, 255, 1.0)");
      grad.addColorStop(0.25, "rgba(240, 246, 255, 0.85)");
      grad.addColorStop(0.65, "rgba(190, 210, 235, 0.25)");
      grad.addColorStop(1, "rgba(0, 0, 0, 0)");
      pCtx.fillStyle = grad;
      pCtx.fillRect(0, 0, 64, 64);
    }
    const particleTexture = new THREE.CanvasTexture(pCanvas);

    // 700 Micro-Stardust particles scattered in 3D depth
    const particleCount = 700;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleVelocities: Array<{ vx: number; vy: number; vz: number }> = [];

    for (let i = 0; i < particleCount; i++) {
      particlePositions[i * 3] = (Math.random() - 0.5) * 28.0;
      particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 20.0;
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 12.0;

      particleVelocities.push({
        vx: (Math.random() - 0.5) * 0.002,
        vy: 0.002 + Math.random() * 0.005,
        vz: (Math.random() - 0.5) * 0.002,
      });
    }

    particleGeo.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.12,
      map: particleTexture,
      transparent: true,
      opacity: 0.70,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particleSystem = new THREE.Points(particleGeo, particleMat);
    scene.add(particleSystem);

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

      // Update Stardust Micro-particles
      const posAttr = particleGeo.attributes.position as THREE.BufferAttribute;
      const arr = posAttr.array as Float32Array;

      for (let i = 0; i < particleCount; i++) {
        const vel = particleVelocities[i];
        arr[i * 3 + 1] += vel.vy;
        if (arr[i * 3 + 1] > 10.0) {
          arr[i * 3 + 1] = -10.0;
        }
      }
      posAttr.needsUpdate = true;

      // Orbital parallax on dust cloud
      particleSystem.rotation.y = elapsedTime * 0.015 + mouseX * 0.08;
      particleSystem.rotation.x = mouseY * 0.05 + scrollY * 0.0002;
      particleSystem.position.y = -(scrollY * 0.001);

      // Render 2-pass: (1) Tenbin Nebula Shader Quad, then (2) 3D Micro-Stardust Depth Field
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
