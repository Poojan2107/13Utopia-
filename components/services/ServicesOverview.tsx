"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FramerFooter } from "@/components/framer/FramerFooter";
import { FramerSectionCTA } from "@/components/framer/FramerSectionCTA";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { ServiceFaq } from "@/components/services/ServiceFaq";
import { ServiceNav } from "@/components/services/ServiceNav";
import {
  EASE,
  fadeUp,
  staggerParent,
  viewportLoose,
  viewportOnce,
} from "@/components/services/svcMotion";
import { SERVICE_WORLDS } from "@/data/services";
import { SmoothScrollProvider } from "@/components/motion";
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
      <SiteHeader />
      <main className={styles.page}>
        <div className={styles.topBar}>
          <div className={styles.topMeta}>
            <span className={styles.topNum}>00 // 03</span>
            <span className={styles.topSep}>·</span>
            <span className={styles.topTag}>SERVICES</span>
            <span className={styles.topHint}>THREE WORLDS</span>
          </div>
          <ServiceNav />
        </div>

        <motion.section
          className={styles.hero}
          variants={staggerParent}
          initial="hidden"
          animate="show"
        >
          <motion.p
            className={styles.eyebrow}
            variants={fadeUp}
            transition={{ duration: 0.7, ease: EASE }}
          >
            THREE WORLDS · ONE STANDARD
          </motion.p>
          <motion.h1
            className={styles.title}
            variants={fadeUp}
            transition={{ duration: 0.95, ease: EASE }}
          >
            We know what we&apos;re
            <br />
            <span className={styles.titleGold}>unreasonably good at.</span>
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
              <span>Initiate alliance</span>
              <span className={styles.ctaArrow} aria-hidden="true">
                →
              </span>
            </a>
            <Link href="/work" className={styles.ctaGhost} data-cursor="hover">
              Selected work
            </Link>
          </motion.div>
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
                <div className={styles.worldMeta}>
                  <span>{w.worldTag}</span>
                  <span>{w.indexNum}</span>
                </div>
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
      <FramerFooter />
    </SmoothScrollProvider>
  );
}
