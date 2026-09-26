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
import {
  CAPABILITY_NARRATIVE,
  WORLD_NARRATIVE,
} from "@/content/narratives";
import {
  getCapability,
  getCapabilityCategory,
  getCapabilityRouteSlugs,
  getCapabilitiesByWorld,
  getCaseStudy,
  getPerspectiveArticle,
  getSolution,
} from "@/lib/content";
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

    return (
      <>
        <PageHero
          eyebrow="Capabilities"
          title={category.title}
          description={category.description}
          layout="full"
          media={
            media ? (
              <MediaPlaceholder
                aspect="hero"
                tone={media.tone}
                need={media.need}
              />
            ) : undefined
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
            <p className={hub.slugLead} data-reveal>
              {narrative?.lead ?? category.description}
            </p>
          </PageReveal>

          {narrative ? <ProseBlock paragraphs={narrative.body} /> : null}

          <MediaBreak
            need={`${category.title} world — atmosphere`}
            tone={media?.tone ?? "warm"}
            aspect="wide"
          />

          {narrative ? (
            <PracticeList title="In practice" items={narrative.practices} />
          ) : null}

          <PageReveal>
            <h2 className={hub.subhead} data-reveal>
              Capability groups
            </h2>
            <ul className={hub.groupsDense}>
              {caps.map((c, i) => (
                <li key={c.slug} data-reveal>
                  <Link href={`/capabilities/${c.slug}`} className={hub.groupDense}>
                    <span className={hub.groupDenseNum}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span>
                      <h3 className={hub.groupTitle}>{c.title}</h3>
                      <p className={hub.groupBody}>{c.description}</p>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
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
