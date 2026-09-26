import type { PerspectiveArticle } from "@/lib/content/types";

export const perspectiveArticles: PerspectiveArticle[] = [
  {
    slug: "placeholder-brand-tech",
    title: "Brand × Technology",
    category: "Strategy",
    author: "13 UTOPIA",
    publishedAt: "2026-01-01",
    readingTime: "6 min",
    excerpt:
      "How product experience changes brand perception — and why the two can no longer be separate briefs.",
    body: `Brand is no longer a layer painted on top of product. It is the product’s behavior made legible — latency, copy, empty states, onboarding, and the way a system recovers when it fails.

When brand and technology sit in separate rooms, customers feel the seam. Marketing promises a feeling; the product delivers a different one. Trust erodes in the gap.

At 13 UTOPIA we treat Create and Build as one continuous motion. Identity systems inform interface. Interface informs story. Story informs what we choose to engineer next.

The practical move: write brand decisions as product requirements, and product constraints as brand strategy. One brief. One standard. One team that can hold both.`,
    relatedCapabilitySlugs: ["branding-creative", "digital-products"],
    relatedSolutionSlugs: ["launch", "transform"],
    relatedCaseSlugs: ["placeholder-case-create"],
    seo: {
      title: "Brand × Technology | Perspective | 13 UTOPIA",
      description: "Editorial — Brand × Technology.",
    },
    status: "placeholder",
  },
  {
    slug: "placeholder-product-growth",
    title: "Product × Growth",
    category: "Growth",
    author: "13 UTOPIA",
    publishedAt: "2026-01-15",
    readingTime: "5 min",
    excerpt:
      "Why acquisition cannot compensate for a weak experience — and what to build instead.",
    body: `Growth systems amplify whatever the product already is — including its flaws. Paid media cannot fix a confusing first session. Content cannot compensate for a funnel that fights the offer.

The teams that win treat Product and Growth as a shared loop: ship, measure, learn, redesign. Acquisition teaches product. Product teaches acquisition.

We refuse channel theater. Every growth move should compound learning — creative that informs roadmap, analytics that inform craft, automation that removes friction without removing judgment.

If you are spending more to acquire users who leave faster, you do not have a media problem. You have a product–growth integration problem. That is where we start.`,
    relatedCapabilitySlugs: ["digital-products", "growth-marketing", "ai-automation"],
    relatedSolutionSlugs: ["grow", "automate"],
    relatedCaseSlugs: ["placeholder-case-build"],
    seo: {
      title: "Product × Growth | Perspective | 13 UTOPIA",
      description: "Editorial — Product × Growth.",
    },
    status: "placeholder",
  },
];
