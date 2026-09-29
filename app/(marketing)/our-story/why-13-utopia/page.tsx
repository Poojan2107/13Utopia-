import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Breadcrumbs,
  Container,
  DetailCloser,
  DetailCtaRow,
  PageHero,
} from "@/components/ui";
import { PageReveal, ClipReveal } from "@/components/motion";
import { plates } from "@/content/plates";
import { STORY_PAGES } from "@/content/narratives";
import { buildMetadata } from "@/lib/seo";
import hub from "@/styles/ui/HubBody.module.css";

export const metadata: Metadata = buildMetadata({
  seo: {
    title: "Why 13 UTOPIA | Our Story",
    description:
      "Why 13 UTOPIA exists — the fusion of 1 sovereign vision and 3 compounding engines.",
  },
  path: "/our-story/why-13-utopia",
});

const PILLARS = [
  {
    num: "01",
    title: "Create",
    desc: "Sensory brand identities, Didone typography, 3D CGI, and experiential UI that command category gravity.",
    href: "/capabilities/create",
    badge: "Discipline 01",
  },
  {
    num: "02",
    title: "Build",
    desc: "Sub-100ms Next.js architecture, WebGL shaders, bespoke AI pipelines, and headless commerce systems.",
    href: "/capabilities/build",
    badge: "Discipline 02",
  },
  {
    num: "03",
    title: "Grow",
    desc: "Technical SEO dominance, high-conversion demand loops, and data-backed scale engines that compound.",
    href: "/capabilities/grow",
    badge: "Discipline 03",
  },
];

export default function Why13UtopiaPage() {
  const copy = STORY_PAGES.why;

  return (
    <>
      <PageHero
        eyebrow="Our Story · Chapter 01"
        title="Why 13 UTOPIA"
        description="One sovereign vision. Three compounding disciplines. Built for the ones who refuse the ordinary."
        layout="full"
        media={
          <div style={{ position: "absolute", inset: 0 }}>
            <Image
              src={plates.heroSculpture.src}
              alt="13 Utopia Gold Sculpture"
              fill
              priority
              sizes="100vw"
              style={{ objectFit: "cover", objectPosition: "50% 35%" }}
            />
          </div>
        }
      />

      <Container className={hub.body}>
        <PageReveal>
          <div data-reveal>
            <Breadcrumbs
              items={[
                { name: "Our Story", path: "/our-story" },
                { name: "Why 13 UTOPIA", path: "/our-story/why-13-utopia" },
              ]}
            />
          </div>

          <div className={hub.editorialLeadBlock} data-reveal>
            <div className={hub.editorialKicker}>
              <span className={hub.editorialKickerDot} aria-hidden="true" />
              <span>Origin & Architecture</span>
            </div>
            <h2 className={hub.editorialLeadTitle}>
              Why we built 13 UTOPIA.
            </h2>
            <p className={hub.editorialLeadLead}>
              {copy.lead}
            </p>
          </div>
        </PageReveal>

        {/* 3 High-Impact Stat Metrics */}
        <PageReveal>
          <div className={hub.statGrid} data-reveal>
            <div className={hub.statCard}>
              <span className={hub.statVal}>01</span>
              <span className={hub.statLabel}>Unified Team</span>
              <p className={hub.statDesc}>
                Strategy, design, and engineering aligned from the first conversation with zero handoff friction.
              </p>
            </div>
            <div className={hub.statCard}>
              <span className={hub.statVal}>03</span>
              <span className={hub.statLabel}>Connected Disciplines</span>
              <p className={hub.statDesc}>
                Create, Build, and Grow designed to reinforce each other rather than operate in separate silos.
              </p>
            </div>
            <div className={hub.statCard}>
              <span className={hub.statVal}>100%</span>
              <span className={hub.statLabel}>Senior Involvement</span>
              <p className={hub.statDesc}>
                Direct collaboration with senior designers, architects, and growth leads on every build.
              </p>
            </div>
          </div>
        </PageReveal>

        {/* 2-Column Asymmetric Editorial Section */}
        <div className={hub.editorialSplit}>
          <PageReveal>
            <div className={hub.editorialSplitSticky} data-reveal>
              <span className={hub.editorialKicker}>Origin & Philosophy</span>
              <h3 className={hub.subhead} style={{ fontSize: "clamp(2rem, 3.5vw, 2.75rem)", lineHeight: "1.05" }}>
                The name is not an accident.
              </h3>
              <p className={hub.note} style={{ maxWidth: "28rem", fontSize: "1.05rem", lineHeight: "1.7" }}>
                Thirteen is the refusal of polite consensus. In a digital landscape saturated with identical SaaS templates and beige minimalism, 13 UTOPIA exists to forge bold, high-contrast cultural artifacts.
              </p>
            </div>
          </PageReveal>

          <PageReveal>
            <div className={hub.prose} data-reveal>
              {copy.body.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </PageReveal>
        </div>

        {/* Haute Editorial Pull Quote */}
        <PageReveal>
          <div className={hub.quotePullout} data-reveal>
            <blockquote className={hub.quotePulloutText}>
              “Taste without systems is vanity. Systems without taste are invisible. 13 UTOPIA was built to fuse both into one compounding reality.”
            </blockquote>
            <cite className={hub.quotePulloutCite}>
              — 13 UTOPIA Founding Principle
            </cite>
          </div>
        </PageReveal>

        {/* 3-Pillar Interactive Card Stage */}
        <PageReveal>
          <div className={hub.editorialSection} data-reveal>
            <div className={hub.editorialKicker}>
              <span className={hub.editorialKickerDot} aria-hidden="true" />
              <span>The 3 Engines</span>
            </div>
            <h3 className={hub.subhead} style={{ fontSize: "clamp(1.85rem, 3vw, 2.5rem)" }}>
              The Trinity in Practice
            </h3>

            <div className={hub.hubCardGrid}>
              {PILLARS.map((p) => (
                <Link key={p.num} href={p.href} className={hub.hubCard} data-magnetic>
                  <div className={hub.hubCardTop}>
                    <span className={hub.hubCardNum}>{p.num}</span>
                    <h4 className={hub.hubCardTitle}>{p.title}</h4>
                    <p className={hub.hubCardBody}>{p.desc}</p>
                  </div>
                  <div className={hub.hubCardFoot}>
                    <span>{p.badge}</span>
                    <span aria-hidden="true">Explore →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </PageReveal>

        <DetailCtaRow
          primaryHref="/connect/start-a-project"
          primaryLabel="Start a Project"
          secondaryHref="/our-story"
          secondaryLabel="Our Story Overview"
        />

        <DetailCloser
          title="See how the protocol executes"
          lead="Explore our six-step methodology or inspect our presence across India and Canada."
          secondaryHref="/our-story/process"
          secondaryLabel="Inspect the Process"
        />
      </Container>
    </>
  );
}
