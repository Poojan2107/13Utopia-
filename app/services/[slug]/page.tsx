import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceDetail } from "@/components/services";
import { SERVICE_WORLDS } from "@/data/services";
import { buildMetadata } from "@/lib/seo";

const SLUGS = ["create", "build", "grow"] as const;
type Slug = (typeof SLUGS)[number];

function isValidSlug(value: string): value is Slug {
  return (SLUGS as readonly string[]).includes(value);
}

export function generateStaticParams() {
  return SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  if (!isValidSlug(slug)) return {};
  const world = SERVICE_WORLDS[slug];
  return buildMetadata({
    seo: {
      title: world.seo.title,
      description: world.seo.description,
    },
    path: `/services/${slug}`,
  });
}

export default async function ServiceWorldPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!isValidSlug(slug)) notFound();
  return <ServiceDetail world={SERVICE_WORLDS[slug]} />;
}
