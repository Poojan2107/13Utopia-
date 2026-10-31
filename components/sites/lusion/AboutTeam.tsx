"use client";

import React, { useState, useEffect, useRef } from "react";
import * as THREE from "three";
import styles from "./about.module.css";

interface TeamMember {
  index: string;
  name: string;
  role: string;
  accentColor: number;
}

const TEAM_MEMBERS: TeamMember[] = [
  {
    index: "001",
    name: "Edan Kwan",
    role: "Founder & Creative Director",
    accentColor: 0x00f2fe,
  },
  {
    index: "002",
    name: "Julien Gaucher",
    role: "Creative Technologist",
    accentColor: 0x7928ca,
  },
  {
    index: "003",
    name: "Pierre Nottin",
    role: "Creative Developer",
    accentColor: 0x00ff87,
  },
  {
    index: "004",
    name: "Luke Twyman",
    role: "Sound & Audio Director",
    accentColor: 0xff007f,
  },
  {
    index: "005",
    name: "Paul Catoëra",
    role: "3D Motion Designer",
    accentColor: 0x38bdf8,
  },
];

export function AboutTeam() {
  const [currentIndex, setCurrentIndex] = useState(2); // Starts at Pierre Nottin (003) as seen on live site
  const containerRef = useRef<HTMLDivElement>(null);
  const headMeshRef = useRef<THREE.Points | null>(null);
  const contourGroupRef = useRef<THREE.Group | null>(null);

  const activeMember = TEAM_MEMBERS[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TEAM_MEMBERS.length);
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 1. Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 0.1, 4.6);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 2. Holographic Point Cloud Head & Torso Simulation
    const pointCount = 2200;
    const positions = new Float32Array(pointCount * 3);
    const colors = new Float32Array(pointCount * 3);

    const baseColor = new THREE.Color(activeMember.accentColor);

    for (let i = 0; i < pointCount; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);

      // Head shape dimensions with refined facial profile
      const rx = 0.9 + Math.sin(phi * 2.5) * 0.12;
      const ry = 1.3 + (1.0 - Math.cos(phi)) * 0.15;
      const rz = 0.95;

      let x = rx * Math.sin(phi) * Math.cos(theta);
      let y = ry * Math.cos(phi);
      let z = rz * Math.sin(phi) * Math.sin(theta);

      // Indent neck and shoulders
      if (y < -0.45) {
        x *= 1.45;
        z *= 1.35;
      }

      positions[i * 3] = x * 0.9;
      positions[i * 3 + 1] = y * 0.9 - 0.2;
      positions[i * 3 + 2] = z * 0.9;

      // Color shading
      const luminance = (y + 1.2) / 2.5;
      colors[i * 3] = baseColor.r * luminance + 0.15;
      colors[i * 3 + 1] = baseColor.g * luminance + 0.15;
      colors[i * 3 + 2] = baseColor.b * luminance + 0.15;
    }

    const headGeo = new THREE.BufferGeometry();
    headGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    headGeo.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const headMat = new THREE.PointsMaterial({
      size: 0.045,
      vertexColors: true,
      transparent: true,
      opacity: 0.95,
      blending: THREE.AdditiveBlending,
    });

    const headMesh = new THREE.Points(headGeo, headMat);
    headMeshRef.current = headMesh;
    scene.add(headMesh);

    // Holographic wireframe grid box on right
    const wireGeo = new THREE.BoxGeometry(0.8, 0.8, 0.8, 3, 3, 3);
    const wireMat = new THREE.MeshBasicMaterial({
      color: activeMember.accentColor,
      wireframe: true,
      transparent: true,
      opacity: 0.25,
    });
    const wireBox = new THREE.Mesh(wireGeo, wireMat);
    wireBox.position.set(1.4, -0.6, 0.5);
    scene.add(wireBox);

    // 3. Topographical Contour Rings (Around shoulders & neck)
    const contourGroup = new THREE.Group();
    contourGroup.position.set(0, -0.2, 0);
    contourGroupRef.current = contourGroup;
    scene.add(contourGroup);

    for (let j = 0; j < 8; j++) {
      const ringRadius = 1.1 + j * 0.2;
      const ringPoints: THREE.Vector3[] = [];
      const segments = 64;
      for (let s = 0; s <= segments; s++) {
        const angle = (s / segments) * Math.PI * 2;
        const wobble = Math.sin(angle * 5.0 + j) * 0.08 + Math.cos(angle * 3.0) * 0.05;
        ringPoints.push(
          new THREE.Vector3(
            Math.cos(angle) * (ringRadius + wobble),
            -1.1 - j * 0.15,
            Math.sin(angle) * (ringRadius + wobble) * 0.7
          )
        );
      }
      const ringGeo = new THREE.BufferGeometry().setFromPoints(ringPoints);
      const ringMat = new THREE.LineBasicMaterial({
        color: activeMember.accentColor,
        transparent: true,
        opacity: 0.6 - j * 0.06,
      });
      const ringLine = new THREE.Line(ringGeo, ringMat);
      contourGroup.add(ringLine);
    }

    // 4. Matrix Digital Rain Glyphs (Vertical stream particles)
    const rainCount = 200;
    const rainPositions = new Float32Array(rainCount * 3);
    for (let r = 0; r < rainCount; r++) {
      rainPositions[r * 3] = (Math.random() - 0.5) * 8.0;
      rainPositions[r * 3 + 1] = (Math.random() - 0.5) * 6.0;
      rainPositions[r * 3 + 2] = (Math.random() - 0.5) * 3.0 - 1.0;
    }
    const rainGeo = new THREE.BufferGeometry();
    rainGeo.setAttribute("position", new THREE.BufferAttribute(rainPositions, 3));
    const rainMat = new THREE.PointsMaterial({
      size: 0.035,
      color: 0x88ccff,
      transparent: true,
      opacity: 0.45,
    });
    const rainMesh = new THREE.Points(rainGeo, rainMat);
    scene.add(rainMesh);

    // 5. Mouse tracking & render
    let mouseX = 0;
    let mouseY = 0;
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      mouseY = -((e.clientY - rect.top) / rect.height - 0.5) * 2;
    };

    container.addEventListener("mousemove", handleMouseMove);

    let animId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // Smooth inertia rotation
      headMesh.rotation.y = mouseX * 0.5 + Math.sin(elapsed * 0.4) * 0.1;
      headMesh.rotation.x = mouseY * 0.25;

      // Pulse contour rings
      contourGroup.children.forEach((line, idx) => {
        line.rotation.y = elapsed * (0.05 + idx * 0.01);
      });

      // Digital rain drift down
      const rainPos = rainGeo.attributes.position;
      for (let p = 0; p < rainCount; p++) {
        let py = rainPos.getY(p) - 0.015;
        if (py < -3.0) py = 3.0;
        rainPos.setY(p, py);
      }
      rainPos.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animId);
      container.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      if (renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
      renderer.dispose();
      headGeo.dispose();
      headMat.dispose();
      rainGeo.dispose();
      rainMat.dispose();
    };
  }, [currentIndex, activeMember]);

  return (
    <section className={styles.teamSection} id="team">
      {/* Top Header Row */}
      <div className={styles.teamTopRow}>
        <span className={styles.teamIndex}>[[ {activeMember.index} ]]</span>
        <h2 className={styles.teamHeaderTitle}>T E A M</h2>
      </div>

      {/* Main Interactive Holographic Card */}
      <div className={styles.teamShowcaseContainer}>
        {/* Next Member Trigger Button */}
        <button
          className={styles.teamNextBtn}
          onClick={handleNext}
          title="Next team member"
          aria-label="Next team member"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </button>

        {/* 3D WebGL Canvas */}
        <div ref={containerRef} className={styles.teamCanvas} />

        {/* Member Meta (Bottom-Left) */}
        <div className={styles.teamMemberMeta}>
          <h3 className={styles.teamMemberName}>
            <span>::</span> {activeMember.name}
          </h3>
          <p className={styles.teamMemberRole}>{activeMember.role}</p>
          <div className={styles.teamProgressBar}>
            <div
              className={styles.teamProgressFill}
              style={{
                width: `${((currentIndex + 1) / TEAM_MEMBERS.length) * 100}%`,
              }}
            />
          </div>
        </div>

        {/* Studio Philosophy Narrative (Bottom-Right) */}
        <div className={styles.teamNarrativeBlock}>
          We combine different disciplines into one creative production process,
          allowing ideas to move from concept to execution with clarity and
          craft. The result is digital work that feels distinctive, technically
          refined, and built to make a lasting impact.
        </div>
      </div>
    </section>
  );
}
