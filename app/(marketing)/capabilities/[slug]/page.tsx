import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { PageHero, RelatedLinks } from "@/components/ui/PageHero";
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

type Props = { params: Promise<{ slug: string }> };

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
    return (
      <>
        <PageHero
          eyebrow="Capabilities"
          title={category.title}
          description={category.description}
        />
        <Container style={{ paddingBlock: "var(--space-3xl)" }}>
          <Breadcrumbs
            items={[
              { name: "Capabilities", path: "/capabilities" },
              { name: category.title, path: `/capabilities/${slug}` },
            ]}
          />
          <p style={{ color: "var(--color-fg-muted)" }}>
            Status: {category.status}. Deeper capability copy: [CONTENT NEEDED]
          </p>
          <RelatedLinks
            title="Capability groups"
            items={caps.map((c) => ({
              href: `/capabilities/${c.slug}`,
              label: c.title,
            }))}
          />
          <RelatedLinks
            title="Related solutions"
            items={[
              { href: "/solutions/launch", label: "Launch" },
              { href: "/solutions/grow", label: "Grow" },
              { href: "/solutions/transform", label: "Transform" },
            ]}
          />
        </Container>
      </>
    );
  }

  const cap = capability!;
  return (
    <>
      <PageHero eyebrow={cap.world.toUpperCase()} title={cap.title} description={cap.description} />
      <Container style={{ paddingBlock: "var(--space-3xl)" }}>
        <Breadcrumbs
          items={[
            { name: "Capabilities", path: "/capabilities" },
            { name: cap.world, path: `/capabilities/${cap.world}` },
            { name: cap.title, path: `/capabilities/${slug}` },
          ]}
        />
        <p style={{ color: "var(--color-fg-muted)" }}>
          Detailed capability content: [CONTENT NEEDED]
        </p>
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
      </Container>
    </>
  );
}
