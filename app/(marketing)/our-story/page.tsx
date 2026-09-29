import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  PageReveal,
  ThirteenProtocolStage,
} from "@/components/motion";
import {
  Container,
  DetailCloser,
  DetailCtaRow,
  PageHero,
} from "@/components/ui";
import { plates } from "@/content/plates";
import { buildMetadata } from "@/lib/seo";
import hub from "@/styles/ui/HubBody.module.css";

export const metadata: Metadata = buildMetadata({
  seo: {
    title: "Our Story | 13 UTOPIA",
    description:
      "Why 13 UTOPIA exists — the philosophy, vision, mission, methodology, and presence of a transcontinental multidisciplinary practice.",
  },
  path: "/our-story",
});

const CHAPTERS = [
  {
    num: "01",
    href: "/our-story/why-13-utopia",
    title: "Why 13 UTOPIA",
    kicker: "Chapter 01 · Origin & Purpose",
    tags: ["Brand", "Technology", "Growth"],
    body: "The gap between what businesses settle for and what they could become — combining brand, product, and growth under one roof.",
    image: plates.heroSculpture.src,
  },
  {
    num: "02",
    href: "/our-story/vision",
    title: "The Vision",
    kicker: "Chapter 02 · Where We're Pointed",
    tags: ["Clarity", "Standards", "Value"],
    body: "A market where ambitious companies don't default to the expected move just because it feels safe.",
    image: plates.grow.src,
  },
  {
    num: "03",
    href: "/our-story/mission",
    title: "The Mission",
    kicker: "Chapter 03 · What We Do Every Day",
    tags: ["Senior Craft", "Fast Delivery", "Real Impact"],
    body: "Questioning assumptions, building clean products, and shipping growth engines that actually work.",
    image: plates.create.src,
  },
  {
    num: "04",
    href: "/our-story/process",
    title: "The Process",
    kicker: "Chapter 04 · How We Work",
    tags: ["Question", "Define", "Make", "Grow"],
    body: "Six practical steps that take an ambitious idea from initial problem diagnosis to a live, compounding system.",
    image: plates.build.src,
  },
  {
    num: "05",
    href: "/our-story/global-presence",
    title: "Global Presence",
    kicker: "Chapter 05 · Toronto & India",
    tags: ["Toronto Studio", "India Hub", "Continuous Rhythm"],
    body: "Two synchronized teams in Canada and India delivering strategy, design, and engineering across time zones.",
    image: plates.collective.src,
  },
];

export default function OurStoryPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Story · The Practice"
        title="Why 13 UTOPIA exists"
        description="Brand, technology, and growth — built for businesses ready to move beyond the obvious."
        layout="full"
        media={
          <div style={{ position: "absolute", inset: 0 }}>
            <Image
              src={plates.work.src}
              alt="13 Utopia Story"
              fill
              priority
              sizes="100vw"
              style={{ objectFit: "cover", objectPosition: "50% 50%" }}
            />
          </div>
        }
      />

      {/* ── 1 & 3 Origin Protocol Spatial Theater (Awwwards 040 + 047) ── */}
      <ThirteenProtocolStage />

      <Container className={hub.body}>
        {/* Editorial Narrative Lead */}
        <PageReveal>
          <div className={hub.editorialLeadBlock} data-reveal>
            <div className={hub.editorialKicker}>
              <span className={hub.editorialKickerDot} aria-hidden="true" />
              <span>The Five Chapters</span>
            </div>
            <h2 className={hub.editorialLeadTitle}>
              An architectural journey from origin to global scale.
            </h2>
            <p className={hub.editorialLeadLead}>
              Explore the five foundational pillars that define our philosophy, methodology, and transcontinental execution.
            </p>
          </div>
        </PageReveal>

        {/* 5 Bespoke Chapter Feature Cards */}
        <PageReveal>
          <div className={hub.hubCardGrid} style={{ gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 380px), 1fr))" }} data-reveal>
            {CHAPTERS.map((ch) => (
              <Link
                key={ch.num}
                href={ch.href}
                className={hub.hubCard}
                data-magnetic
              >
                <div className={hub.hubCardTop}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span className={hub.hubCardNum}>{ch.num}</span>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.625rem", color: "var(--color-gold)", letterSpacing: "0.14em", textTransform: "uppercase" }}>
                      {ch.kicker}
                    </span>
                  </div>
                  <h3 className={hub.hubCardTitle}>{ch.title}</h3>
                  <p className={hub.hubCardBody}>{ch.body}</p>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginTop: "0.5rem" }}>
                    {ch.tags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          fontFamily: "var(--font-ui)",
                          fontSize: "0.5625rem",
                          fontWeight: 700,
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          color: "rgba(243, 241, 234, 0.6)",
                          background: "rgba(243, 241, 234, 0.05)",
                          padding: "0.2rem 0.5rem",
                          borderRadius: "4px",
                          border: "1px solid rgba(243, 241, 234, 0.08)",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className={hub.hubCardFoot}>
                  <span>Enter {ch.title}</span>
                  <span aria-hidden="true">→</span>
                </div>
              </Link>
            ))}
          </div>
        </PageReveal>

        {/* Global Practice Stat Matrix */}
        <PageReveal>
          <div className={hub.statGrid} data-reveal>
            <div className={hub.statCard}>
              <span className={hub.statVal}>24H</span>
              <span className={hub.statLabel}>Continuous Momentum</span>
              <p className={hub.statDesc}>
                Synchronized development across Toronto and India with zero idle project latency.
              </p>
            </div>
            <div className={hub.statCard}>
              <span className={hub.statVal}>Top 1%</span>
              <span className={hub.statLabel}>Aesthetic Caliber</span>
              <p className={hub.statDesc}>
                Haute Didone typography, bespoke 3D motion, and sub-100ms response architecture.
              </p>
            </div>
            <div className={hub.statCard}>
              <span className={hub.statVal}>100%</span>
              <span className={hub.statLabel}>Senior Partner Access</span>
              <p className={hub.statDesc}>
                Direct collaboration with senior creative directors and full-stack architects.
              </p>
            </div>
          </div>
        </PageReveal>

        {/* Haute Editorial Pull Quote */}
        <PageReveal>
          <div className={hub.quotePullout} data-reveal>
            <blockquote className={hub.quotePulloutText}>
              “The obvious answer isn’t always the right one. We look at what exists, challenge what isn’t working, and find a clearer way forward.”
            </blockquote>
            <cite className={hub.quotePulloutCite}>
              — 13 UTOPIA Practice Manifesto
            </cite>
          </div>
        </PageReveal>

        <DetailCtaRow
          primaryHref="/connect/start-a-project"
          primaryLabel="Start a Project"
          secondaryHref="/collective"
          secondaryLabel="Meet the Collective"
        />

        <DetailCloser
          title="Meet the people behind the practice"
          lead="The collective is where theory and engineering become human reality."
          secondaryHref="/collective"
          secondaryLabel="Meet the Collective"
        />
      </Container>
    </>
  );
}
