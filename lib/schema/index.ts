import { company } from "@/content/site";
import { absoluteUrl, getSiteUrl } from "@/lib/seo";

export function organizationSchema() {
  const siteUrl = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: company.name,
    legalName: company.legalName,
    slogan: company.tagline,
    description: company.about,
    url: siteUrl,
    logo: absoluteUrl("/images/og/default.jpg"),
    email: company.email,
    telephone: company.phone,
    address: [
      {
        "@type": "PostalAddress",
        streetAddress: "1123, Iconic Shyamal, Shyamal Cross Roads, 132 Feet Ring Rd",
        addressLocality: "Ahmedabad",
        addressRegion: "Gujarat",
        postalCode: "380015",
        addressCountry: "IN",
      },
      {
        "@type": "PostalAddress",
        streetAddress: "30 Kimbercroft Ct, Markham Corners",
        addressLocality: "Scarborough",
        addressRegion: "ON",
        postalCode: "M1S 4K9",
        addressCountry: "CA",
      },
    ],
    sameAs: [
      company.social.behance,
      company.social.linkedin,
      company.social.instagram,
    ],
  };
}

export function websiteSchema() {
  const siteUrl = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: company.name,
    url: siteUrl,
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteUrl}/work?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function serviceSchema(options: {
  name: string;
  description: string;
  path: string;
  category?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: options.name,
    description: options.description,
    serviceType: options.category || options.name,
    provider: {
      "@type": "Organization",
      name: company.name,
      url: getSiteUrl(),
    },
    url: absoluteUrl(options.path),
  };
}

export function caseStudySchema(options: {
  title: string;
  summary: string;
  path: string;
  client: string;
  year?: string;
  stack?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: options.title,
    headline: options.title,
    abstract: options.summary,
    creator: {
      "@type": "Organization",
      name: company.name,
      url: getSiteUrl(),
    },
    sponsor: {
      "@type": "Organization",
      name: options.client,
    },
    copyrightYear: options.year || new Date().getFullYear().toString(),
    keywords: options.stack ? options.stack.join(", ") : undefined,
    url: absoluteUrl(options.path),
  };
}

export function articleSchema(options: {
  title: string;
  description: string;
  path: string;
  datePublished?: string;
  author?: string;
  wordCount?: number;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: options.title,
    description: options.description,
    author: {
      "@type": "Person",
      name: options.author || "13 UTOPIA Research",
    },
    publisher: {
      "@type": "Organization",
      name: company.name,
      url: getSiteUrl(),
    },
    datePublished: options.datePublished || new Date().toISOString(),
    wordCount: options.wordCount,
    url: absoluteUrl(options.path),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function jsonLdScript(data: Record<string, unknown>) {
  return {
    __html: JSON.stringify(data),
  };
}
