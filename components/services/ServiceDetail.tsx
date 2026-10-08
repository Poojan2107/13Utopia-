"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { EchoTitle } from "@/components/framer/EchoTitle";
import { FramerSectionCTA } from "@/components/framer/FramerSectionCTA";
import { SiteFooter, SiteHeader } from "@/components/layout";
import { ServiceCapabilityDeck } from "@/components/services/ServiceCapabilityDeck";
import { ServiceProcessVisualizer } from "@/components/services/ServiceProcessVisualizer";
import {
  EASE,
  fadeUp,
  staggerFast,
  staggerParent,
  viewportLoose,
  viewportOnce,
} from "@/components/services/svcMotion";
import type { ServiceWorld } from "@/data/services";
import { SERVICE_WORLDS } from "@/data/services";
import { AmbientField, SmoothScrollProvider, ScrollBlurText } from "@/components/motion";
import styles from "@/styles/services/ServiceDetail.module.css";

const ORDER: Array<"create" | "build" | "grow"> = ["create", "build", "grow"];

type Props = {
  world: ServiceWorld;
};

export function ServiceDetail({ world }: Props) {
  const others = ORDER.filter((s) => s !== world.slug).map((s) => SERVICE_WORLDS[s]);

  return (
    <SmoothScrollProvider>
      {/* Signature 3D Titanium "13" Emblem & Nebula Atmosphere offset to frame hero copy */}
      <AmbientField showEmblem={false} />
      <SiteHeader />

      <main
        className={styles.page}
        style={{ "--svc-accent": world.accent } as React.CSSProperties}
      >
        {/* HERO: CLEAN TYPOGRAPHY OVER ATMOSPHERIC 13 EMBLEM */}
        <section className={styles.hero} aria-labelledby={`svc-hero-${world.slug}`}>
          <motion.div
            className={styles.heroCopy}
            variants={staggerParent}
            initial="hidden"
            animate="show"
          >
            <div className={styles.heroMetaRail}>
              <span className={styles.liveDot} />
              <span className={styles.metaSlug}>{world.worldTag}</span>
              <span className={styles.metaDivider}>//</span>
              <span className={styles.metaTelemetry}>DISCIPLINE 0{world.indexNum.charAt(1)}</span>
            </div>

            <ScrollBlurText isHero maxBlur={16} interactiveFocus glowOnFocus>
              <EchoTitle text={world.echoTitle} className={styles.heroEcho} />
            </ScrollBlurText>

            <motion.h1
              id={`svc-hero-${world.slug}`}
              className={styles.heroTitle}
              variants={fadeUp}
              transition={{ duration: 0.85, ease: EASE }}
            >
              {world.title}
            </motion.h1>

            <motion.p
              className={styles.heroLead}
              variants={fadeUp}
              transition={{ duration: 0.8, ease: EASE }}
            >
              {world.heroLead}
            </motion.p>

            <motion.div
              className={styles.heroActions}
              variants={fadeUp}
              transition={{ duration: 0.75, ease: EASE }}
            >
              <Link
                href="/contact"
                className={styles.ctaPrimary}
                data-magnetic
                data-cursor="hover"
              >
                <span>{world.ctaLabel}</span>
                <span className={styles.ctaArrow} aria-hidden="true">
                  →
                </span>
              </Link>
              <Link href="/work" className={styles.ctaGhost} data-cursor="hover">
                View selected work
              </Link>
            </motion.div>
          </motion.div>
        </section>

        {/* 01. INTERACTIVE CAPABILITIES DECK WITH LIVE VISUAL ARTIFACTS */}
        <section className={styles.block} aria-labelledby={`svc-cap-${world.slug}`}>
          <BlockHead index="01" title={world.capabilitiesTitle} id={`svc-cap-${world.slug}`} />
          <ServiceCapabilityDeck capabilities={world.capabilities} worldSlug={world.slug} />
        </section>

        {/* 02. INTERACTIVE PROCESS PIPELINE SEQUENCER */}
        <section className={styles.block} aria-labelledby={`svc-proc-${world.slug}`}>
          <BlockHead index="02" title={world.processTitle} id={`svc-proc-${world.slug}`} />
          <ServiceProcessVisualizer steps={world.process} />
        </section>

        {/* 03. NEXT DISCIPLINES DOCK */}
        <section className={styles.others} aria-label="Other disciplines">
          <BlockHead index="03" title="Explore Related Disciplines" />
          <div className={styles.otherGrid}>
            {others.map((o, idx) => (
              <motion.div
                key={o.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportLoose}
                transition={{ duration: 0.7, delay: idx * 0.08, ease: EASE }}
              >
                <Link
                  href={`/services/${o.slug}`}
                  className={styles.otherCard}
                  data-cursor="hover"
                >
                  <div className={styles.otherCardGlow} aria-hidden="true" />
                  <div className={styles.otherTop}>
                    <span className={styles.otherTag}>{o.worldTag}</span>
                    <span className={styles.otherLabel}>{o.label}</span>
                  </div>
                  <span className={styles.otherTitle}>{o.title}</span>
                  <span className={styles.otherArrow} aria-hidden="true">
                    Explore {o.label} →
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        <FramerSectionCTA />
      </main>
      <SiteFooter />
    </SmoothScrollProvider>
  );
}

function BlockHead({
  index,
  title,
  id,
}: {
  index: string;
  title: string;
  id?: string;
}) {
  return (
    <motion.div
      className={styles.blockHead}
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportOnce}
      transition={{ duration: 0.65, ease: EASE }}
    >
      <div className={styles.blockHeadMeta}>
        <span className={styles.blockIndex}>{index}</span>
        <span className={styles.blockRail}>DISCIPLINE OVERVIEW</span>
      </div>
      <h2 id={id} className={styles.blockTitle}>
        {title}
      </h2>
    </motion.div>
  );
}
