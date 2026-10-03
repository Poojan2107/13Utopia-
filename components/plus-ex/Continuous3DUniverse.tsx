"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Plus3DCanvas } from "./Plus3DCanvas";
import { Continuous3DStory } from "./Continuous3DStory";
import { HomeSectionWork, HomeCTASection } from "@/components/home";
import styles from "@/styles/plus-ex/Continuous3DUniverse.module.css";

gsap.registerPlugin(ScrollTrigger);

/**
 * Continuous3DUniverse — The Master 3D Continuum Architecture
 *
 * Spans Sections 03 (Narrative), 04 (Portfolio Showcase), and 05 (Initiation CTA).
 * Houses ONE persistent, unbroken WebGL Monolith canvas that travels continuously:
 * 1. Entry from Hero & Manifesto Center ("13")
 * 2. Narrative Acts: CREATE (Left "BE"), BUILD (Right "13"), GROW (Left "BE"), Finale (Center "13")
 * 3. Portfolio Showcase: Glides DOWN in 3D motion into depth behind the Selected Commissions cards
 * 4. Initiation CTA: Emerges UP in 3D motion from depth to center stage behind "HAVE AN UNREASONABLE IDEA?"
 */
export function Continuous3DUniverse() {
  const universeRef = useRef<HTMLDivElement | null>(null);

  const [entryProgress, setEntryProgress] = useState(0);
  const [storyProgress, setStoryProgress] = useState(0);
  const [workProgress, setWorkProgress] = useState(0);
  const [ctaProgress, setCtaProgress] = useState(0);

  useEffect(() => {
    const universe = universeRef.current;
    if (!universe) return;

    const ctx = gsap.context(() => {
      // 01. Entry into Section 03 Narrative from Hero
      ScrollTrigger.create({
        trigger: "#narrative",
        start: "top bottom",
        end: "top top",
        scrub: true,
        onUpdate: (self) => {
          setEntryProgress(self.progress);
        },
      });

      // 02. Section 03 Pinned 3D Narrative (CREATE · BUILD · GROW)
      ScrollTrigger.create({
        trigger: "#narrative",
        start: "top top",
        end: "+=7500",
        pin: "#narrative-stage",
        pinSpacing: true,
        scrub: 1.0,
        anticipatePin: 1,
        onUpdate: (self) => {
          const p = Math.max(0, Math.min(1, self.progress));
          setStoryProgress(p);
        },
      });

      // 03. Section 04 Selected Commissions Portfolio Showcase (Model dives DOWN behind cards)
      ScrollTrigger.create({
        trigger: "#work",
        start: "top bottom",
        end: "bottom top",
        scrub: 1.0,
        onUpdate: (self) => {
          setWorkProgress(self.progress);
        },
      });

      // 04. Section 05 Initiation CTA (Model emerges UP to center stage)
      ScrollTrigger.create({
        trigger: "#commission",
        start: "top bottom",
        end: "center center",
        scrub: 1.0,
        onUpdate: (self) => {
          setCtaProgress(self.progress);
        },
      });
    }, universe);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div
      ref={universeRef}
      className={styles.universeContainer}
      id="continuum-universe"
    >
      {/* ── 01. PERSISTENT STICKY 3D CONTINUUM LAYER ──────────── */}
      <div className={styles.stickyCanvasLayer} aria-hidden="true">
        <div className={styles.ambientGlow} />
        <div className={styles.architecturalGrid} />
        <div className={styles.canvasInner}>
          <Plus3DCanvas
            entryProgress={entryProgress}
            storyProgress={storyProgress}
            workProgress={workProgress}
            ctaProgress={ctaProgress}
          />
        </div>
      </div>

      {/* ── 02. CONTENT FLOW (Sections 03, 04, 05) ───────────── */}
      <div className={styles.contentFlow}>
        {/* Section 03: Editorial Narrative Acts (CREATE · BUILD · GROW) */}
        <Continuous3DStory
          standalone={false}
          externalProgress={storyProgress}
        />

        {/* Section 04: Selected Commissions (3D Portfolio Carousel) */}
        <HomeSectionWork />

        {/* Section 05: Initiation (Commission CTA) */}
        <HomeCTASection />
      </div>
    </div>
  );
}
