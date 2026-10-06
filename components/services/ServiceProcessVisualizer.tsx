"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { ServiceStep } from "@/data/services";
import { ProcessVisualArtifact } from "./visuals/ProcessVisualArtifact";
import styles from "@/styles/services/ServiceProcessVisualizer.module.css";

interface ServiceProcessVisualizerProps {
  steps: ServiceStep[];
}

export function ServiceProcessVisualizer({ steps }: ServiceProcessVisualizerProps) {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const activeStep = steps[activeStepIndex] || steps[0];

  return (
    <div className={styles.container}>
      {/* Step Sequence Bar */}
      <div className={styles.stepperBar} role="tablist" aria-label="Process Steps">
        <div className={styles.trackLine} aria-hidden="true">
          <motion.div
            className={styles.activeTrackFill}
            initial={false}
            animate={{
              width: `${(activeStepIndex / (steps.length - 1)) * 100}%`,
            }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          />
        </div>

        {steps.map((step, idx) => {
          const isActive = idx === activeStepIndex;
          const isCompleted = idx < activeStepIndex;

          return (
            <button
              key={step.num}
              role="tab"
              aria-selected={isActive}
              className={`${styles.stepNode} ${isActive ? styles.nodeActive : ""} ${
                isCompleted ? styles.nodeCompleted : ""
              }`}
              onClick={() => setActiveStepIndex(idx)}
              data-cursor="hover"
            >
              <div className={styles.nodeCircle}>
                <span>{step.num}</span>
                {isActive && (
                  <motion.div
                    layoutId="nodePulse"
                    className={styles.nodeHalo}
                    transition={{ type: "spring", stiffness: 350, damping: 25 }}
                  />
                )}
              </div>
              <span className={styles.nodeTitle}>{step.title}</span>
            </button>
          );
        })}
      </div>

      {/* Dynamic Stage Display Card */}
      <div className={styles.cardContainer}>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep.num}
            className={styles.stageCard}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className={styles.cardHeader}>
              <div className={styles.phaseTag}>
                <span className={styles.pulseDot} />
                <span>PHASE {activeStep.num} OF 0{steps.length}</span>
              </div>
              <div className={styles.stageTimeline}>PHASE MILESTONE</div>
            </div>

            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>{activeStep.title}</h3>
              <p className={styles.cardDesc}>{activeStep.desc}</p>
            </div>

            {/* Visual Schematic Deliverable Artifact */}
            <ProcessVisualArtifact
              stepNum={activeStep.num}
              title={activeStep.title}
            />

            <div className={styles.cardFooter}>
              <div className={styles.velocityMetric}>
                <span className={styles.metricLabel}>WORKFLOW</span>
                <span className={styles.metricVal}>AGILE SPRINTS</span>
              </div>
              <div className={styles.deliverableSignal}>
                <span className={styles.metricLabel}>KEY OUTPUT</span>
                <span className={styles.metricVal}>MILESTONE DELIVERABLES</span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
