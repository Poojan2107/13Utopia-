import type { Metadata } from "next";

export type SeoFields = {
  title: string;
  description: string;
  ogImage?: string;
};

const SITE_NAME = "13 UTOPIA";

export function getSiteUrl(): string {
  return (
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "http://localhost:3000"
  );
}

export function absoluteUrl(path = "/"): string {
  const base = getSiteUrl();
  if (!path || path === "/") return base;
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

type BuildMetadataInput = {
  seo: SeoFields;
  path: string;
  noIndex?: boolean;
};

export function buildMetadata({
  seo,
  path,
  noIndex = false,
}: BuildMetadataInput): Metadata {
  const url = absoluteUrl(path);
  const title = seo.title.includes(SITE_NAME) ? seo.title : `${seo.title} | ${SITE_NAME}`;

  return {
    title,
    description: seo.description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description: seo.description,
      url,
      siteName: SITE_NAME,
      type: "website",
      ...(seo.ogImage ? { images: [{ url: seo.ogImage }] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: seo.description,
    },
    robots: noIndex ? { index: false, follow: false } : { index: true, follow: true },
  };
}

export const defaultHomeSeo: SeoFields = {
  title: "13 UTOPIA — Brand, Technology & Growth",
  description:
    "BE UNREAL. BE UNREASONABLE. 13 UTOPIA is creative technology and growth.",
};
