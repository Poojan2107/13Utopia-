"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SiteFooter, SiteHeader } from "@/components/layout";
import { FramerSectionCTA } from "@/components/framer/FramerSectionCTA";
import { ServiceFaq } from "@/components/services/ServiceFaq";
import {
  EASE,
  fadeUp,
  staggerParent,
  viewportLoose,
  viewportOnce,
} from "@/components/services/svcMotion";
import { SERVICE_WORLDS } from "@/data/services";
import { AmbientField, SmoothScrollProvider } from "@/components/motion";
import styles from "@/styles/services/ServicesOverview.module.css";

const WORLDS = [
  SERVICE_WORLDS.create,
  SERVICE_WORLDS.build,
  SERVICE_WORLDS.grow,
] as const;

const OVERVIEW_FAQS = [
  {
    q: "Can CREATE, BUILD, and GROW run as one alliance?",
    a: "Yes. Brand, product, and growth stay one connected system — identity, engineering, and compounding under a single unreasonable standard.",
  },
  {
    q: "Where should we start?",
    a: "CREATE when positioning or identity is unclear. BUILD when the brand is strong but the surface underperforms. GROW when the offer is ready to compound demand.",
  },
  {
    q: "How does 13 Utopia collaborate with our team?",
    a: "Direct access to senior craft and engineering leads. Strategy, design, and development happen in the same room with zero handoff friction.",
  },
  {
    q: "What does the work feel like day to day?",
    a: "Fast, transparent, and iterative. We embed directly with your team to ship production-ready assets and systems rapidly.",
  },
];

export function ServicesOverview() {
  return (
    <SmoothScrollProvider>
      <AmbientField />
      <SiteHeader />
      <main className={styles.page}>
        <motion.section
          className={styles.hero}
          variants={staggerParent}
          initial="hidden"
          animate="show"
        >
          <div className={styles.heroContent}>
            <div className={styles.topMeta}>
              <span className={styles.metaLiveDot} />
              <span>03 // SERVICES</span>
              <span className={styles.metaSep}>·</span>
              <span className={styles.topMetaTag}>THREE WORLDS ALLIANCE</span>
            </div>

            <motion.h1
              className={styles.title}
              variants={fadeUp}
              transition={{ duration: 0.95, ease: EASE }}
            >
              We know what we&apos;re
              <br />
              <span className={styles.titleHighlight}>unreasonably good at.</span>
            </motion.h1>

            <motion.p
              className={styles.lead}
              variants={fadeUp}
              transition={{ duration: 0.85, ease: EASE }}
            >
              CREATE builds brands people remember. BUILD engineers products that
              perform. GROW compounds attention into outcomes. Enter one world —
              or the full alliance.
            </motion.p>
          </div>
        </motion.section>

        <section className={styles.worlds} aria-label="Service worlds">
          {WORLDS.map((w, idx) => (
            <motion.article
              key={w.slug}
              className={styles.worldCard}
              style={{ "--svc-accent": w.accent } as React.CSSProperties}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportLoose}
              transition={{ duration: 0.95, delay: idx * 0.06, ease: EASE }}
            >
              <div className={styles.worldCopy}>
                <h2 className={styles.worldLabel}>{w.label}.</h2>
                <p className={styles.worldTitle}>{w.title}</p>
                <p className={styles.worldBody}>{w.heroBody}</p>
                <ul className={styles.capPreview}>
                  {w.capabilities.slice(0, 4).map((c) => (
                    <li key={c.num}>
                      <span>{c.num}</span>
                      {c.title}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/services/${w.slug}`}
                  className={styles.worldLink}
                  data-cursor="hover"
                >
                  Enter {w.label}
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
              <div className={styles.worldMedia}>
                <div className={styles.worldMediaInner}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={w.heroImage}
                    alt=""
                    className={styles.worldImage}
                    loading={idx === 0 ? "eager" : "lazy"}
                    decoding="async"
                    width={900}
                    height={1125}
                  />
                </div>
                <span className={styles.worldCorner} data-c="tl" aria-hidden="true">
                  +
                </span>
                <span className={styles.worldCorner} data-c="tr" aria-hidden="true">
                  +
                </span>
                <span className={styles.worldCorner} data-c="bl" aria-hidden="true">
                  +
                </span>
                <span className={styles.worldCorner} data-c="br" aria-hidden="true">
                  +
                </span>
              </div>
            </motion.article>
          ))}
        </section>

        <motion.section
          className={styles.faqBlock}
          aria-labelledby="svc-overview-faq"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.8, ease: EASE }}
        >
          <div className={styles.faqHead}>
            <span className={styles.faqIndex}>FAQ</span>
            <h2 id="svc-overview-faq" className={styles.faqTitle}>
              Before you choose a world
            </h2>
          </div>
          <ServiceFaq items={OVERVIEW_FAQS} />
        </motion.section>

        <FramerSectionCTA />
      </main>
      <SiteFooter />
    </SmoothScrollProvider>
  );
}
