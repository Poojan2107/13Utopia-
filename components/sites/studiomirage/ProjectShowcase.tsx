"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "./studiomirage.module.css";

interface Project {
  id: string;
  title: string;
  client: string;
  category: string;
  description: string;
  image: string;
}

const PROJECTS: Project[] = [
  {
    id: "difc",
    title: "DIFC Immersive Ecosystem",
    client: "Dubai International Financial Centre",
    category: "3D WebGL / Real-time",
    description:
      "An interactive 3D digital journey showcasing the architectural future, capital markets, and fintech innovations of the Middle East's premier financial hub.",
    image: "/sites/studiomirage/images/difc.jpg",
  },
  {
    id: "margiela",
    title: "Haute Couture Digital Archive",
    client: "Maison Margiela Paris",
    category: "Luxury / Spatial Experience",
    description:
      "A tactile, avant-garde digital runway experience exploring artisanal garments through interactive multi-angle photogrammetry and procedural soundscapes.",
    image: "/sites/studiomirage/images/margiela.png",
  },
  {
    id: "renault",
    title: "E-Tech Fleet Configurator",
    client: "Renault Trucks",
    category: "Automotive / WebGL",
    description:
      "High-performance WebGL vehicle configurator allowing global logistics operators to customize electric heavy-duty vehicles with photorealistic PBR materials.",
    image: "/sites/studiomirage/images/renault.jpg",
  },
  {
    id: "omnicell",
    title: "Autonomous Pharmacy Simulation",
    client: "Omnicell Explorer",
    category: "MedTech / Spatial Computing",
    description:
      "An interactive spatial simulation visualizing autonomous hospital robotic systems, medication dispensing workflows, and real-time data orchestration.",
    image: "/sites/studiomirage/images/omnicell.jpg",
  },
  {
    id: "ubisoft",
    title: "Next-Gen Worlds Launch Campaign",
    client: "Ubisoft Entertainment",
    category: "Gaming / Interactive Campaign",
    description:
      "Dynamic experiential web portal celebrating major AAA game universe launches with gamified Easter eggs, real-time particle effects, and interactive lore.",
    image: "/sites/studiomirage/images/ubisoft.png",
  },
  {
    id: "tasmim",
    title: "Arabic Design Biennial",
    client: "Tasmim Design Festival",
    category: "Culture / Typography",
    description:
      "Multilingual digital platform showcasing cutting-edge typography, experimental architecture, and cross-cultural design discourses across the Arab world.",
    image: "/sites/studiomirage/images/tasmim.png",
  },
  {
    id: "sopra",
    title: "Cloud Platform Transformation",
    client: "Sopra Banking Software",
    category: "FinTech / Digital Flagship",
    description:
      "Interactive global corporate flagship translating complex core-banking infrastructure and microservices into intuitive interactive visual journeys.",
    image: "/sites/studiomirage/images/sopra.png",
  },
  {
    id: "caisse",
    title: "Sovereign Impact & Ecological Transition",
    client: "Caisse des Dépôts",
    category: "Institutional / Web Experience",
    description:
      "Data-rich interactive journey showcasing public investment in regional infrastructure, renewable energy, and territorial cohesion across France.",
    image: "/sites/studiomirage/images/caisse.jpg",
  },
  {
    id: "jinns",
    title: "Jinns: Mythological Spatial Odyssey",
    client: "Studio Mirage Original Lab",
    category: "Creative Tech / Narrative 3D",
    description:
      "Experimental real-time WebGL narrative exploring folkloric Middle Eastern mythology through GPU particle simulations and generative spatial sound.",
    image: "/sites/studiomirage/images/jinns.png",
  },
];

export function ProjectShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentProject = PROJECTS[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? PROJECTS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === PROJECTS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="works" className={styles.sectionContainer}>
      <div className={styles.sectionHeader}>
        <span className={styles.sectionTag}>// 01 Selected Works</span>
        <h2 className={styles.sectionHeading}>Crafting Digital Monuments</h2>
      </div>

      {/* Main Active Project Showcase Card */}
      <div className={styles.sliderCard}>
        <div className={styles.projectImageWrapper}>
          <Image
            src={currentProject.image}
            alt={currentProject.title}
            fill
            sizes="(max-width: 960px) 100vw, 55vw"
            className={styles.projectImage}
            priority
          />
        </div>

        <div className={styles.projectDetails}>
          <div className={styles.projectMeta}>
            <span className={styles.projectCategory}>{currentProject.category}</span>
            <span className={styles.projectClient}>{currentProject.client}</span>
          </div>

          <h3 className={styles.projectTitle}>{currentProject.title}</h3>
          <p className={styles.projectDescription}>{currentProject.description}</p>

          <div className={styles.projectControls}>
            <div className={styles.sliderIndex}>
              <span className={styles.sliderIndexCurrent}>
                {String(currentIndex + 1).padStart(2, "0")}
              </span>
              <span> / {String(PROJECTS.length).padStart(2, "0")}</span>
            </div>

            <div className={styles.sliderNavButtons}>
              <button
                id="btn-prev-project"
                type="button"
                className={styles.navBtn}
                onClick={handlePrev}
                aria-label="Previous project"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 12H5M12 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              <button
                id="btn-next-project"
                type="button"
                className={styles.navBtn}
                onClick={handleNext}
                aria-label="Next project"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Thumbnail Selection Strip */}
      <div className={styles.thumbnailGrid}>
        {PROJECTS.map((proj, idx) => (
          <button
            key={proj.id}
            type="button"
            className={`${styles.thumbItem} ${idx === currentIndex ? styles.thumbItemActive : ""}`}
            onClick={() => setCurrentIndex(idx)}
            aria-label={`Select ${proj.title}`}
          >
            <Image
              src={proj.image}
              alt={proj.title}
              fill
              sizes="150px"
              className={styles.thumbImg}
            />
          </button>
        ))}
      </div>
    </section>
  );
}
