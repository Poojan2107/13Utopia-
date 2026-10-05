"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { EchoTitle } from "@/components/framer/EchoTitle";
import { FramerSectionCTA } from "@/components/framer/FramerSectionCTA";
import { SiteFooter, SiteHeader } from "@/components/layout";
import { ServiceFaq } from "@/components/services/ServiceFaq";
import { ServiceNav } from "@/components/services/ServiceNav";
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
import { AmbientField, SmoothScrollProvider } from "@/components/motion";
import styles from "@/styles/services/ServiceDetail.module.css";

const ORDER: Array<"create" | "build" | "grow"> = ["create", "build", "grow"];

type Props = {
  world: ServiceWorld;
};

export function ServiceDetail({ world }: Props) {
  const others = ORDER.filter((s) => s !== world.slug).map((s) => SERVICE_WORLDS[s]);
  const mediaRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: mediaRef,
    offset: ["start end", "end start"],
  });
  const mediaY = useTransform(scrollYProgress, [0, 1], ["-4%", "4%"]);
  const mediaScale = useTransform(scrollYProgress, [0, 1], [1.08, 1]);

  return (
    <SmoothScrollProvider>
      <AmbientField />
      <SiteHeader />
      <main
        className={styles.page}
        style={{ "--svc-accent": world.accent } as React.CSSProperties}
      >
        {/* HERO */}
        <section className={styles.hero} aria-labelledby={`svc-hero-${world.slug}`}>
          <motion.div
            className={styles.heroCopy}
            variants={staggerParent}
            initial="hidden"
            animate="show"
          >
            <EchoTitle text={world.echoTitle} className={styles.heroEcho} />
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
            <motion.p
              className={styles.heroBody}
              variants={fadeUp}
              transition={{ duration: 0.8, ease: EASE }}
            >
              {world.heroBody}
            </motion.p>
            <motion.div
              className={styles.heroActions}
              variants={fadeUp}
              transition={{ duration: 0.75, ease: EASE }}
            >
              <a
                href="mailto:poojan@13utopia.com?subject=Initiate%20Alliance%20%E2%80%94%2013%20UTOPIA"
                className={styles.ctaPrimary}
                data-magnetic
                data-cursor="hover"
              >
                <span>{world.ctaLabel}</span>
                <span className={styles.ctaArrow} aria-hidden="true">
                  →
                </span>
              </a>
              <Link href="/work" className={styles.ctaGhost} data-cursor="hover">
                View selected work
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            ref={mediaRef}
            className={styles.heroMedia}
            initial={{ opacity: 0, clipPath: "inset(8% 6% 8% 6%)" }}
            animate={{ opacity: 1, clipPath: "inset(0% 0% 0% 0%)" }}
            transition={{ duration: 1.25, delay: 0.12, ease: EASE }}
          >
            <div className={styles.mediaGlow} aria-hidden="true" />
            <div className={styles.mediaFrame}>
              <motion.img
                src={world.heroImage}
                alt={`${world.label} specimen`}
                className={styles.mediaImage}
                width={1400}
                height={1750}
                fetchPriority="high"
                decoding="async"
                style={{ y: mediaY, scale: mediaScale }}
              />
              <span className={styles.corner} data-c="tl" aria-hidden="true">
                +
              </span>
              <span className={styles.corner} data-c="tr" aria-hidden="true">
                +
              </span>
              <span className={styles.corner} data-c="bl" aria-hidden="true">
                +
              </span>
              <span className={styles.corner} data-c="br" aria-hidden="true">
                +
              </span>
              <div className={styles.mediaBadge}>
                <span className={styles.badgeDot} />
                <span>SPECIMEN // {world.label} — UNREASONABLE SURFACE</span>
              </div>
            </div>
          </motion.div>
        </section>

        {/* PROOF */}
        <motion.section
          className={styles.proof}
          aria-label="Proof signals"
          variants={staggerFast}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          {world.proof.map((p) => (
            <motion.div
              key={p.label}
              className={styles.proofItem}
              variants={fadeUp}
              transition={{ duration: 0.7, ease: EASE }}
            >
              <span className={styles.proofValue}>{p.value}</span>
              <span className={styles.proofLabel}>{p.label}</span>
            </motion.div>
          ))}
        </motion.section>

        {/* MANIFESTO */}
        <section className={styles.manifesto}>
          <motion.h2
            className={styles.manifestoTitle}
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 1, ease: EASE }}
          >
            {world.manifestoTitle}
          </motion.h2>
          <motion.div
            className={styles.manifestoSide}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.9, delay: 0.1, ease: EASE }}
          >
            <span className={styles.manifestoRule} aria-hidden="true" />
            <p className={styles.manifestoBody}>{world.manifestoBody}</p>
          </motion.div>
        </section>

        {/* REASONS */}
        <section className={styles.block} aria-labelledby={`svc-why-${world.slug}`}>
          <BlockHead index="01" title={world.reasonsTitle} id={`svc-why-${world.slug}`} />
          <div className={styles.reasonGrid}>
            {world.reasons.map((r, idx) => (
              <motion.article
                key={r.num}
                className={styles.reasonCard}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportLoose}
                transition={{ duration: 0.75, delay: idx * 0.08, ease: EASE }}
              >
                <span className={styles.reasonNum}>{r.num}</span>
                <h3 className={styles.reasonTitle}>{r.title}</h3>
                <p className={styles.reasonDesc}>{r.desc}</p>
                <span className={styles.reasonLine} aria-hidden="true" />
              </motion.article>
            ))}
          </div>
        </section>

        {/* CAPABILITIES */}
        <section className={styles.block} aria-labelledby={`svc-cap-${world.slug}`}>
          <BlockHead index="02" title={world.capabilitiesTitle} id={`svc-cap-${world.slug}`} />
          <div className={styles.capMatrix}>
            {world.capabilities.map((c, idx) => (
              <motion.div
                key={c.num}
                className={styles.capRow}
                initial={{ opacity: 0, x: 18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewportLoose}
                transition={{ duration: 0.65, delay: idx * 0.045, ease: EASE }}
              >
                <span className={styles.capNum}>{c.num}</span>
                <div className={styles.capCopy}>
                  <div className={styles.capHeader}>
                    <h3 className={styles.capTitle}>{c.title}</h3>
                    <span className={styles.capBadge}>{c.badge}</span>
                  </div>
                  <p className={styles.capDesc}>{c.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* PROCESS */}
        <section className={styles.block} aria-labelledby={`svc-proc-${world.slug}`}>
          <BlockHead index="03" title={world.processTitle} id={`svc-proc-${world.slug}`} />
          <ol className={styles.processList}>
            {world.process.map((step, idx) => (
              <motion.li
                key={step.num}
                className={styles.processItem}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportLoose}
                transition={{ duration: 0.7, delay: idx * 0.07, ease: EASE }}
              >
                <span className={styles.processNum}>{step.num}</span>
                <div>
                  <h3 className={styles.processTitle}>{step.title}</h3>
                  <p className={styles.processDesc}>{step.desc}</p>
                </div>
              </motion.li>
            ))}
          </ol>
        </section>

        {/* FIT */}
        <motion.section
          className={styles.fit}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.9, ease: EASE }}
        >
          <span className={styles.fitEyebrow}>FIT SIGNAL</span>
          <h2 className={styles.fitTitle}>{world.fitTitle}</h2>
          <p className={styles.fitBody}>{world.fitBody}</p>
          <a
            href="mailto:poojan@13utopia.com?subject=Initiate%20Alliance%20%E2%80%94%2013%20UTOPIA"
            className={styles.ctaPrimary}
            data-magnetic
            data-cursor="hover"
          >
            <span>{world.ctaLabel}</span>
            <span className={styles.ctaArrow} aria-hidden="true">
              →
            </span>
          </a>
        </motion.section>

        {/* FAQ */}
        <section className={styles.block} aria-labelledby={`svc-faq-${world.slug}`}>
          <BlockHead index="04" title="Questions before the alliance" id={`svc-faq-${world.slug}`} />
          <ServiceFaq items={world.faqs} />
        </section>

        {/* OTHER WORLDS */}
        <section className={styles.others} aria-label="Other worlds">
          <BlockHead index="NEXT" title="Continue through the worlds" />
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
                  <span className={styles.otherTag}>{o.worldTag}</span>
                  <span className={styles.otherLabel}>{o.label}</span>
                  <span className={styles.otherTitle}>{o.title}</span>
                  <span className={styles.otherArrow} aria-hidden="true">
                    Enter →
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
      <span className={styles.blockIndex}>{index}</span>
      <h2 id={id} className={styles.blockTitle}>
        {title}
      </h2>
      <motion.span
        className={styles.blockRule}
        aria-hidden="true"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={viewportOnce}
        transition={{ duration: 0.85, delay: 0.12, ease: EASE }}
      />
    </motion.div>
  );
}
