"use client";

import { useState, useRef, useEffect } from "react";
import * as THREE from "three";
import styles from "@/styles/home/HomeManifesto.module.css";

const TRIAD = [
  {
    num: "01",
    name: "CREATE",
    tag: "01 // CREATE",
    title: "Brand Identity & Visual Design",
    desc: "We build brand strategy, visual identity, and creative systems from first principles. Every deliverable is custom: strategy, identity, motion, and spatial design.",
    deliverables: ["Brand Strategy", "3D Art Direction", "UI/UX Design", "Motion Systems"],
  },
  {
    num: "02",
    name: "BUILD",
    tag: "02 // BUILD",
    title: "Product Engineering & Infrastructure",
    desc: "Full-stack engineering across web, mobile, and cloud. We build the product from architecture through deployment: performant, scalable, and maintainable.",
    deliverables: ["Web & Mobile Apps", "Cloud Infrastructure", "AI & Automation", "DevOps & CI/CD"],
  },
  {
    num: "03",
    name: "GROW",
    tag: "03 // GROW",
    title: "Marketing, SEO & Growth Systems",
    desc: "SEO, performance marketing, and content strategy built to compound. We design growth systems that generate qualified pipeline and build long-term brand authority.",
    deliverables: ["SEO Architecture", "Paid Acquisition", "Content Strategy", "Lead Generation"],
  },
];

const METRICS = [
  { val: "100%", lbl: "Custom-Built. No Templates." },
  { val: "6", lbl: "Core Capability Areas" },
  { val: "2", lbl: "Global Offices" },
  { val: "1", lbl: "Integrated Team" },
];

/**
 * Clean, High-Contrast 3D Monolith Emblem on Gallery Canvas
 */
function LightMonolithCanvas({ activeIdx }: { activeIdx: number }) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });
  const activeRef = useRef(activeIdx);

  useEffect(() => {
    activeRef.current = activeIdx;
  }, [activeIdx]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let width = container.clientWidth || 500;
    let height = container.clientHeight || 500;

    const scene = new THREE.Scene();
    scene.background = null;

    const camera = new THREE.PerspectiveCamera(36, width / height, 0.1, 100);
    camera.position.set(0, 0, 11.5);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(width, height);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.35;
    container.appendChild(renderer.domElement);

    const emblemGroup = new THREE.Group();

    // Shape 1: Monolith "1"
    const shapeOne = new THREE.Shape();
    const topR = 0.44;
    const botR = 0.68;
    const topY = 2.62;
    const botY = -2.42;
    shapeOne.moveTo(-botR, botY);
    shapeOne.lineTo(-topR, topY);
    shapeOne.absarc(0, topY, topR, Math.PI, 0, true);
    shapeOne.lineTo(botR, botY);
    shapeOne.absarc(0, botY, botR, 0, Math.PI, true);
    shapeOne.closePath();

    // Shape 3: Ribbon "3"
    const shapeThree = new THREE.Shape();
    shapeThree.moveTo(-0.45, 2.82);
    shapeThree.bezierCurveTo(0.30, 3.12, 1.30, 3.08, 1.88, 2.48);
    shapeThree.bezierCurveTo(2.38, 1.95, 2.28, 1.12, 1.72, 0.52);
    shapeThree.bezierCurveTo(1.32, 0.12, 1.12, 0.02, 1.18, -0.02);
    shapeThree.bezierCurveTo(1.38, -0.22, 2.18, -0.68, 2.32, -1.38);
    shapeThree.bezierCurveTo(2.46, -2.18, 1.78, -3.12, 0.62, -3.12);
    shapeThree.bezierCurveTo(-0.18, -3.12, -0.65, -2.82, -0.92, -2.32);
    shapeThree.bezierCurveTo(-1.18, -1.82, -1.02, -1.32, -0.52, -1.38);
    shapeThree.bezierCurveTo(0.18, -1.42, 0.88, -1.68, 1.28, -1.32);
    shapeThree.bezierCurveTo(1.58, -1.02, 1.48, -0.42, 0.98, -0.12);
    shapeThree.bezierCurveTo(0.58, 0.12, 0.22, 0.18, 0.18, 0.08);
    shapeThree.bezierCurveTo(0.12, -0.02, 0.38, 0.58, 0.78, 0.98);
    shapeThree.bezierCurveTo(1.32, 1.48, 1.28, 1.98, 0.88, 2.18);
    shapeThree.bezierCurveTo(0.38, 2.38, -0.12, 2.18, -0.48, 1.88);
    shapeThree.bezierCurveTo(-0.95, 1.92, -0.95, 2.78, -0.45, 2.82);
    shapeThree.closePath();

    const extrudeSettings = {
      steps: 1,
      depth: 0.95,
      bevelEnabled: true,
      bevelThickness: 0.045,
      bevelSize: 0.045,
      bevelOffset: 0,
      bevelSegments: 4,
    };

    const matOne = new THREE.MeshStandardMaterial({
      color: new THREE.Color(0x202020),
      roughness: 0.3,
      metalness: 0.8,
    });
    const matThree = new THREE.MeshStandardMaterial({
      color: new THREE.Color(0x161616),
      roughness: 0.32,
      metalness: 0.76,
    });

    const geomOne = new THREE.ExtrudeGeometry(shapeOne, extrudeSettings);
    const geomThree = new THREE.ExtrudeGeometry(shapeThree, extrudeSettings);
    geomOne.center();
    geomThree.center();

    const meshOne = new THREE.Mesh(geomOne, matOne);
    meshOne.position.set(-1.18, 0, 0);

    const meshThree = new THREE.Mesh(geomThree, matThree);
    meshThree.position.set(1.08, 0, 0);

    emblemGroup.add(meshOne);
    emblemGroup.add(meshThree);
    emblemGroup.scale.set(0.68, 0.68, 0.68);
    scene.add(emblemGroup);

    // Studio Lighting
    const keyLight = new THREE.DirectionalLight(0xffffff, 4.0);
    keyLight.position.set(6, 8, 7);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0x999999, 2.2);
    fillLight.position.set(-6, -2, 5);
    scene.add(fillLight);

    const goldRim = new THREE.DirectionalLight(0xf5d77f, 2.4);
    goldRim.position.set(3, -6, -3);
    scene.add(goldRim);

    const onMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      mouseRef.current.targetX = (e.clientX - cx) / (rect.width / 2);
      mouseRef.current.targetY = (e.clientY - cy) / (rect.height / 2);
    };
    window.addEventListener("mousemove", onMouseMove, { passive: true });

    const onResize = () => {
      if (!container) return;
      width = container.clientWidth || 500;
      height = container.clientHeight || 500;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener("resize", onResize);

    let rafId: number;
    const startTime = performance.now();

    const animate = () => {
      rafId = requestAnimationFrame(animate);
      const elapsed = (performance.now() - startTime) * 0.001;
      const active = activeRef.current;

      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;

      const tabRotations = [
        { rotY: 0.15, rotX: 0.04, rotZ: -0.02 },
        { rotY: -0.35, rotX: 0.1, rotZ: 0.04 },
        { rotY: 0.44, rotX: -0.08, rotZ: -0.05 },
      ];
      const targetBase = tabRotations[active] || tabRotations[0];

      const floatY = Math.sin(elapsed * 0.8) * 0.06;
      const floatRotX = Math.cos(elapsed * 0.6) * 0.02;

      const targetX = targetBase.rotX + floatRotX + mouseRef.current.y * 0.12;
      const targetY = targetBase.rotY + mouseRef.current.x * 0.22;
      const targetZ = targetBase.rotZ + mouseRef.current.x * 0.06;

      emblemGroup.rotation.x += (targetX - emblemGroup.rotation.x) * 0.06;
      emblemGroup.rotation.y += (targetY - emblemGroup.rotation.y) * 0.06;
      emblemGroup.rotation.z += (targetZ - emblemGroup.rotation.z) * 0.06;
      emblemGroup.position.y += (floatY - emblemGroup.position.y) * 0.06;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      geomOne.dispose();
      geomThree.dispose();
      matOne.dispose();
      matThree.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={containerRef} className={styles.canvasContainer} />;
}

export function HomeManifesto() {
  const [activeTriadIndex, setActiveTriadIndex] = useState(0);

  return (
    <section className={styles.section} id="manifesto" aria-label="About & Capabilities">
      {/* Chapter Eyebrow Header */}
      <div className={styles.eyebrowStrip}>
        <div className={styles.eyebrowLeft}>
          <span className={styles.eyebrowNum}>02</span>
          <span className={styles.eyebrowSep}>//</span>
          <span className={styles.eyebrowLabel}>ARCHITECTURAL IDENTITY &amp; CAPABILITIES</span>
        </div>
        <div className={styles.eyebrowRight}>
          <span>STUDIO GENESIS [01 / 04]</span>
        </div>
      </div>

      <div className={styles.container}>
        {/* Top Locked Manifesto Headline */}
        <div className={styles.manifestoHeader}>
          <div className={styles.chapterBadge}>
            <span className={styles.chapterDot} />
            <span>01 // ARCHITECTURAL IDENTITY</span>
          </div>

          <h2 className={styles.manifestoHeading}>
            WE BUILD WHAT MATTERS.{" "}
            <span className={styles.manifestoHeadingAlt}>CREATIVE, TECHNOLOGY AND GROWTH. FULLY INTEGRATED.</span>
          </h2>
        </div>

        {/* 2-Column Capabilities Triad & 3D Monolith Workspace */}
        <div className={styles.capabilitiesStage}>
          {/* Left Column: Interactive Triad Selector & Active Card */}
          <div className={styles.stageLeft}>
            <div className={styles.triadNavHeader}>
              <div className={styles.chapterBadge}>
                <span className={styles.chapterDot} />
                <span>02 // CAPABILITIES &amp; CRAFT</span>
              </div>

              {/* Triad Tabs */}
              <div className={styles.triadTabs}>
                {TRIAD.map((item, idx) => (
                  <button
                    key={item.name}
                    className={`${styles.triadTab} ${
                      activeTriadIndex === idx ? styles.triadTabActive : ""
                    }`}
                    onClick={() => setActiveTriadIndex(idx)}
                    type="button"
                  >
                    0{idx + 1} {item.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Active Triad Card */}
            <div className={styles.triadCard}>
              <div className={styles.triadCardTag}>
                {TRIAD[activeTriadIndex].num} // {TRIAD[activeTriadIndex].name}
              </div>

              <h3 className={styles.triadCardTitle}>
                {TRIAD[activeTriadIndex].title}
              </h3>

              <div className={styles.servicesGrid}>
                {(TRIAD[activeTriadIndex]?.deliverables || []).map((serv, sIdx) => (
                  <div key={sIdx} className={styles.serviceItem}>
                    <span className={styles.servicePlus}>+</span>
                    <span className={styles.serviceName}>{serv}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: 3D Monolith Emblem Stage */}
          <div className={styles.stageRight}>
            <div className={styles.canvasFrame}>
              <LightMonolithCanvas activeIdx={activeTriadIndex} />
              <div className={styles.canvasBadge}>
                <span>3D MONOLITH EMBLEM // INTERACTIVE</span>
              </div>
            </div>
          </div>
        </div>

        {/* Locked Impact Benchmarks Bar */}
        <div className={styles.statsSection}>
          <div className={styles.statsGrid}>
            {METRICS.map((stat, sIdx) => (
              <div key={sIdx} className={styles.statCard}>
                <div className={styles.statValue}>{stat.val}</div>
                <div className={styles.statLabel}>{stat.lbl}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
