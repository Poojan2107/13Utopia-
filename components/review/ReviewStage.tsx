"use client";

import { AmbientField, ValeranCursor } from "@/components/motion";
import { SiteHeader, SiteFooter } from "@/components/layout";
import {
  HomeNarrativeSection,
  HomeHorizontalStatement,
  HomeSectionWork,
  HomeCTASection,
} from "@/components/home";
import { Continuous3DStory } from "@/components/plus-ex";
import styles from "@/styles/review/ReviewStage.module.css";

/**
 * ReviewStage — mirrors production homepage atmosphere (AmbientField).
 */
export function ReviewStage() {
  return (
    <div className={styles.stageRoot}>
      <AmbientField showEmblem={false} />
      <ValeranCursor />
      <SiteHeader />

      <main
        id="main-content"
        style={{
          position: "relative",
          zIndex: 2,
          backgroundColor: "transparent",
        }}
      >
        <Continuous3DStory />
        <HomeNarrativeSection />
        <HomeHorizontalStatement />
        <HomeSectionWork />
        <HomeCTASection />
        <SiteFooter />
      </main>
    </div>
  );
}
