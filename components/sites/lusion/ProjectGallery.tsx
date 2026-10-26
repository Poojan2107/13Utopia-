"use client";

import React, { useState } from "react";
import styles from "./lusion.module.css";

interface Project {
  id: string;
  title: string;
  category: "3D" | "WebGL" | "Motion" | "AI";
  tags: string[];
  desc: string;
  gradient: string;
}

const PROJECTS: Project[] = [
  {
    id: "oryzo",
    title: "Oryzo AI",
    category: "AI",
    tags: ["3D Realtime", "AI", "WebGL"],
    desc: "Autonomous agricultural intelligence and real-time robotic fleet visualization.",
    gradient: "linear-gradient(135deg, #0ea5e9 0%, #1e1b4b 100%)",
  },
  {
    id: "atlas",
    title: "Atlas Motion",
    category: "Motion",
    tags: ["Motion Design", "3D", "Procedural"],
    desc: "A fluid, kinetic generative identity driven by mathematical wave physics.",
    gradient: "linear-gradient(135deg, #6366f1 0%, #312e81 100%)",
  },
  {
    id: "devin",
    title: "Devin AI",
    category: "AI",
    tags: ["Web Experience", "AI", "WebGL"],
    desc: "Launch experience for the world's first fully autonomous AI software engineer.",
    gradient: "linear-gradient(135deg, #10b981 0%, #064e3b 100%)",
  },
  {
    id: "oak",
    title: "Of The Oak",
    category: "3D",
    tags: ["3D Narrative", "Interactive", "CGI"],
    desc: "A sensory digital voyage through oak forests for ultra-rare Scottish whiskey.",
    gradient: "linear-gradient(135deg, #d97706 0%, #451a03 100%)",
  },
  {
    id: "porsche",
    title: "Porsche: Dream Machine",
    category: "WebGL",
    tags: ["Automotive", "WebGL 3D", "Configurator"],
    desc: "Real-time car configurator featuring ray-marched specular automotive paints.",
    gradient: "linear-gradient(135deg, #ef4444 0%, #450a0a 100%)",
  },
  {
    id: "synthetic",
    title: "Synthetic Human",
    category: "3D",
    tags: ["Digital Human", "CGI", "Biometrics"],
    desc: "Photorealistic digital avatar rendering with real-time facial micro-expressions.",
    gradient: "linear-gradient(135deg, #8b5cf6 0%, #2e1065 100%)",
  },
  {
    id: "spatial",
    title: "Meta: Spatial Fusion",
    category: "WebGL",
    tags: ["Spatial Computing", "WebXR", "3D"],
    desc: "Interactive spatial web interfaces previewing the future of mixed reality.",
    gradient: "linear-gradient(135deg, #06b6d4 0%, #083344 100%)",
  },
  {
    id: "ddd",
    title: "DDD Conference 2024",
    category: "Motion",
    tags: ["Conference Web", "Interactive", "Award Winner"],
    desc: "Experiential microsite exploring the intersection of human craft and generative algorithms.",
    gradient: "linear-gradient(135deg, #ec4899 0%, #500724 100%)",
  },
];

const FILTERS = ["All", "3D", "WebGL", "Motion", "AI"];

export function ProjectGallery() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className={styles.projectSection}>
      <div className={styles.projectHeader}>
        <div>
          <h2 className={styles.projectSectionTitle}>Featured Work</h2>
        </div>

        <div className={styles.filterList}>
          {FILTERS.map((f) => (
            <button
              key={f}
              className={`${styles.filterBtn} ${activeFilter === f ? styles.filterBtnActive : ""}`}
              onClick={() => setActiveFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.projectGrid}>
        {filteredProjects.map((project) => (
          <div key={project.id} className={styles.projectCard}>
            <div
              className={styles.projectMediaWrap}
              style={{ background: project.gradient }}
            >
              {/* Abstract decorative geometric overlay inside the card preview */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  opacity: 0.25,
                  backgroundImage:
                    "radial-gradient(circle at 70% 30%, #ffffff 0%, transparent 60%)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "20px",
                  left: "24px",
                  fontSize: "12px",
                  color: "rgba(255,255,255,0.7)",
                  textTransform: "uppercase",
                  letterSpacing: "0.15em",
                }}
              >
                {project.category} CASE STUDY
              </div>
            </div>

            <div className={styles.projectInfo}>
              <div>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDesc}>{project.desc}</p>
                <div className={styles.projectTags}>
                  {project.tags.map((tag) => (
                    <span key={tag} className={styles.projectTag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className={styles.projectArrow}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M3 13L13 3M13 3H5M13 3V11"
                  />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
