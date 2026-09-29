import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageReveal } from "@/components/motion";
import {
  Breadcrumbs,
  Container,
  DetailBridge,
  DetailCloser,
  DetailCtaRow,
  MediaBreak,
  MediaPlaceholder,
  PageHero,
  PracticeList,
  ProseBlock,
  RelatedLinks,
} from "@/components/ui";
import Image from "next/image";
import {
  CAPABILITY_NARRATIVE,
  WORLD_NARRATIVE,
} from "@/content/narratives";
import { plateForTone, plates } from "@/content/plates";
import {
  getCapability,
  getCapabilityCategory,
  getCapabilityRouteSlugs,
  getCapabilitiesByWorld,
  getCaseStudy,
  getPerspectiveArticle,
  getSolution,
} from "@/lib/content";
import { jsonLdScript, serviceSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import hub from "@/styles/ui/HubBody.module.css";

type Props = { params: Promise<{ slug: string }> };

const WORLD_MEDIA: Record<string, { need: string; tone: "create" | "build" | "grow" | "strategy" }> =
  {
    create: { need: "Create — identity / experience hero plate", tone: "create" },
    build: { need: "Build — product / engineering hero plate", tone: "build" },
    grow: { need: "Grow — demand / content hero plate", tone: "grow" },
    strategy: { need: "Strategy — advisory / direction hero plate", tone: "strategy" },
  };

export function generateStaticParams() {
  return getCapabilityRouteSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = getCapabilityCategory(slug);
  if (category) {
    return buildMetadata({ seo: category.seo, path: `/capabilities/${slug}` });
  }
  const capability = getCapability(slug);
  if (capability) {
    return buildMetadata({ seo: capability.seo, path: `/capabilities/${slug}` });
  }
  return {};
}

export default async function CapabilitySlugPage({ params }: Props) {
  const { slug } = await params;
  const category = getCapabilityCategory(slug);
  const capability = getCapability(slug);

  if (!category && !capability) notFound();

  if (category) {
    const caps = getCapabilitiesByWorld(category.slug);
    const media = WORLD_MEDIA[category.slug];
    const narrative = WORLD_NARRATIVE[category.slug];
    const plateImg = plateForTone(media?.tone ?? "warm");

    const categoryStats: Record<string, { val: string; label: string; desc: string }[]> = {
      create: [
        { val: "Top 1%", label: "Visual Caliber", desc: "Didone typography, 3D CGI, and sensory art direction." },
        { val: "100%", label: "Custom Architecture", desc: "No pre-made templates or off-the-shelf theme restrictions." },
        { val: "Awwwards", label: "Design Pedigree", desc: "Crafted to command immediate category leadership and prestige." },
      ],
      build: [
        { val: "< 100ms", label: "Edge Response", desc: "Next.js App Router, edge rendering, and sub-second LCP." },
        { val: "Custom AI", label: "Intelligence Pipelines", desc: "Automated agent workflows, vector search, and custom LLMs." },
        { val: "99.99%", label: "Uptime & Scalability", desc: "Headless commerce and cloud architecture built to compound." },
      ],
      grow: [
        { val: "+240%", label: "Conversion Lift", desc: "High-intent customer journeys and frictionless checkout funnels." },
        { val: "Top 3", label: "Search Rankings", desc: "Technical SEO and programmatic search architecture dominance." },
        { val: "4.8x", label: "Average ROI", desc: "Turning digital prestige into durable, compounding pipeline." },
      ],
    };

    const stats = categoryStats[category.slug] || categoryStats.create;

    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLdScript(
            serviceSchema({
              name: category.title,
              description: category.description,
              path: `/capabilities/${slug}`,
              category: "Capability World",
            }),
          )}
        />
        <PageHero
          eyebrow={`Capabilities · ${category.title.toUpperCase()}`}
          title={category.title}
          description={category.description}
          layout="full"
          media={
            <div style={{ position: "absolute", inset: 0 }}>
              <Image
                src={plateImg.src}
                alt={category.title}
                fill
                priority
                sizes="100vw"
                style={{ objectFit: "cover", objectPosition: plateImg.objectPosition ?? "50% 45%" }}
              />
            </div>
          }
        />
        <Container className={hub.body}>
          <PageReveal>
            <div data-reveal>
              <Breadcrumbs
                items={[
                  { name: "Capabilities", path: "/capabilities" },
                  { name: category.title, path: `/capabilities/${slug}` },
                ]}
              />
            </div>

            <div className={hub.editorialLeadBlock} data-reveal>
              <div className={hub.editorialKicker}>
                <span className={hub.editorialKickerDot} aria-hidden="true" />
                <span>Discipline Matrix</span>
              </div>
              <h2 className={hub.editorialLeadTitle}>
                {narrative?.lead ?? category.description}
              </h2>
            </div>
          </PageReveal>

          {/* Stat Metrics Grid */}
          <PageReveal>
            <div className={hub.statGrid} data-reveal>
              {stats.map((s) => (
                <div key={s.label} className={hub.statCard}>
                  <span className={hub.statVal}>{s.val}</span>
                  <span className={hub.statLabel}>{s.label}</span>
                  <p className={hub.statDesc}>{s.desc}</p>
                </div>
              ))}
            </div>
          </PageReveal>

          {narrative ? <ProseBlock paragraphs={narrative.body} /> : null}

          {narrative ? (
            <PracticeList title="Discipline Deliverables" items={narrative.practices} />
          ) : null}

          {/* Capability Sub-Groups Hub Cards */}
          <PageReveal>
            <div className={hub.editorialSection} data-reveal>
              <div className={hub.editorialKicker}>
                <span className={hub.editorialKickerDot} aria-hidden="true" />
                <span>Specialized Practices</span>
              </div>
              <h3 className={hub.subhead} style={{ fontSize: "clamp(2rem, 3.5vw, 2.75rem)" }}>
                Core Capability Streams
              </h3>

              <div className={hub.hubCardGrid}>
                {caps.map((c, i) => (
                  <Link
                    key={c.slug}
                    href={`/capabilities/${c.slug}`}
                    className={hub.hubCard}
                    data-magnetic
                  >
                    <div className={hub.hubCardTop}>
                      <span className={hub.hubCardNum}>{String(i + 1).padStart(2, "0")}</span>
                      <h4 className={hub.hubCardTitle}>{c.title}</h4>
                      <p className={hub.hubCardBody}>{c.description}</p>
                    </div>
                    <div className={hub.hubCardFoot}>
                      <span>Explore Practice</span>
                      <span aria-hidden="true">→</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </PageReveal>

          <DetailBridge
            eyebrow={category.title}
            statement="One world. Multiple practices. One standard."
            support="Related solutions show how this world shows up in client outcomes."
            need={`${category.title} — bridge atmosphere`}
            tone={media?.tone ?? "warm"}
          />

          <RelatedLinks
            title="Related solutions"
            items={[
              { href: "/solutions/launch", label: "Launch" },
              { href: "/solutions/grow", label: "Grow" },
              { href: "/solutions/transform", label: "Transform" },
            ]}
          />

          <DetailCtaRow
            primaryHref="/connect/start-a-project"
            primaryLabel="Start a Project"
            secondaryHref="/capabilities"
            secondaryLabel="All capabilities"
          />
          <DetailCloser
            title={`Enter ${category.title}`}
            lead="Bring the problem. We’ll assemble the practice around the outcome."
            secondaryHref="/solutions"
            secondaryLabel="Browse solutions"
          />
        </Container>
      </>
    );
  }

  const cap = capability!;
  const detail = CAPABILITY_NARRATIVE[cap.slug];
  const tone = WORLD_MEDIA[cap.world]?.tone ?? "warm";

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(
          serviceSchema({
            name: cap.title,
            description: cap.description,
            path: `/capabilities/${slug}`,
            category: `Capability Practice (${cap.world})`,
          }),
        )}
      />
      <PageHero
        eyebrow={cap.world.toUpperCase()}
        title={cap.title}
        description={cap.description}
        layout="full"
        media={
          <MediaPlaceholder
            aspect="hero"
            tone={tone}
            need={`${cap.title} — practice imagery`}
            fill
          />
        }
      />
      <Container className={hub.body}>
        <PageReveal>
          <div data-reveal>
            <Breadcrumbs
              items={[
                { name: "Capabilities", path: "/capabilities" },
                { name: cap.world, path: `/capabilities/${cap.world}` },
                { name: cap.title, path: `/capabilities/${slug}` },
              ]}
            />
          </div>
          <p className={hub.slugLead} data-reveal>
            {detail?.approach ?? cap.description}
          </p>
        </PageReveal>

        <MediaBreak need={`${cap.title} — detail strip`} tone={tone} aspect="film" />

        {detail ? (
          <>
            <PracticeList title="What we deliver" items={detail.deliverables} />
            <PageReveal>
              <p className={hub.note} data-reveal>
                <span className={hub.noteEm}>When it fits — </span>
                {detail.when}
              </p>
            </PageReveal>
          </>
        ) : null}

        <DetailBridge
          eyebrow={cap.title}
          statement="Craft without systems stalls. Systems without craft never land."
          support="This practice plugs into solutions and case stories across the ecosystem."
          need={`${cap.title} — collaborative atmosphere`}
          tone={tone}
        />

        <RelatedLinks
          title="Related solutions"
          items={cap.relatedSolutionSlugs
            .map((s) => getSolution(s))
            .filter(Boolean)
            .map((s) => ({ href: `/solutions/${s!.slug}`, label: s!.title }))}
        />
        <RelatedLinks
          title="Related case stories"
          items={cap.relatedCaseSlugs
            .map((s) => getCaseStudy(s))
            .filter(Boolean)
            .map((s) => ({ href: `/work/${s!.slug}`, label: s!.title }))}
        />
        <RelatedLinks
          title="Related Perspective"
          items={cap.relatedPerspectiveSlugs
            .map((s) => getPerspectiveArticle(s))
            .filter(Boolean)
            .map((s) => ({ href: `/perspective/${s!.slug}`, label: s!.title }))}
        />

        <DetailCtaRow
          secondaryHref={`/capabilities/${cap.world}`}
          secondaryLabel={`Back to ${cap.world}`}
        />
        <DetailCloser />
      </Container>
    </>
  );
}
