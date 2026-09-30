import { getSiteUrl } from "@/lib/seo";

export function organizationSchema() {
  const siteUrl = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "13 UTOPIA",
    legalName: "13UTOPiA",
    slogan: "BE UNREAL. BE UNREASONABLE. MAKE IT WORK.",
    description: "Creative technology and growth company built for ambitious businesses.",
    url: siteUrl,
  };
}

export function websiteSchema() {
  const siteUrl = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "13 UTOPIA",
    url: siteUrl,
  };
}

export function jsonLdScript(data: Record<string, unknown>) {
  return {
    __html: JSON.stringify(data),
  };
}
