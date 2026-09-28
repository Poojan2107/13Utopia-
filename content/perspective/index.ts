import type { PerspectiveArticle } from "@/lib/content/types";

export const perspectiveArticles: PerspectiveArticle[] = [
  {
    slug: "brand-x-technology",
    title: "Brand × Technology: The Collapse of the Marketing Layer",
    category: "Strategy & Systems",
    author: "Poojan Patel",
    publishedAt: "2026-02-15",
    readingTime: "6 min",
    excerpt:
      "How product experience dictates brand perception — and why design and engineering can no longer be separate briefs.",
    body: `Brand is no longer a superficial veneer painted on top of a product. In the digital economy, your brand is the product’s behavior made legible: latency, typographic clarity, micro-interactions, empty states, onboarding speed, and how gracefully the system recovers when an API fails.

When brand and technology sit in separate organizational silos, customers immediately feel the seam. Marketing promises an emotional standard; the product delivers an inconsistent, sluggish reality. Trust evaporates in that gap.

At 13 UTOPIA, we treat Create and Build as one continuous motion. Identity systems inform interface design. Interface design informs technical architecture. Technical constraints inform what we choose to engineer next.

The practical move: write brand decisions as non-negotiable product requirements, and engineering performance as core brand equity. One unified brief. One uncompromising standard. One practice that executes both.`,
    relatedCapabilitySlugs: ["branding-creative", "digital-products"],
    relatedSolutionSlugs: ["launch", "transform"],
    relatedCaseSlugs: ["elite-sports-gear"],
    seo: {
      title: "Brand × Technology — Perspective | 13 UTOPIA",
      description: "How product experience dictates brand perception by 13 UTOPIA.",
    },
    status: "published",
  },
  {
    slug: "product-x-growth",
    title: "Product × Growth: Why Acquisition Cannot Save a Broken Funnel",
    category: "Growth & Retention",
    author: "Elena Rostova",
    publishedAt: "2026-03-01",
    readingTime: "5 min",
    excerpt:
      "Why paid media amplification without product-led retention is pure waste — and what to build instead.",
    body: `Growth systems merely amplify whatever the product already is — including its inherent friction. Paid media cannot rescue a confusing first-session experience. Content cannot compensate for a checkout path that fights the user's intent.

The market leaders treat Product and Growth as a unified feedback loop: ship, measure, learn, and iterate. Acquisition teaches product engineering what customers truly seek. Product craft creates natural virality and organic retention that lowers acquisition costs.

We refuse channel theater. Every growth move must compound organizational intelligence — creative tests that inform product roadmaps, technical SEO that turns search intent into permanent equity, and intelligent automation that eliminates friction.

If you are spending more to acquire users who abandon faster, you do not have a marketing budget problem. You have a product–growth integration problem. That is where the real work begins.`,
    relatedCapabilitySlugs: ["digital-products", "growth-marketing", "ai-automation"],
    relatedSolutionSlugs: ["grow", "automate"],
    relatedCaseSlugs: ["kumar-cotton-textiles"],
    seo: {
      title: "Product × Growth — Perspective | 13 UTOPIA",
      description: "Why acquisition cannot compensate for poor experience by 13 UTOPIA.",
    },
    status: "published",
  },
  {
    slug: "the-headless-commerce-standard",
    title: "Architecture × Experience: The Sub-Second Digital Flagship",
    category: "Architecture & Engineering",
    author: "Marcus Vance",
    publishedAt: "2026-03-18",
    readingTime: "7 min",
    excerpt:
      "Why monolithic commerce templates are obsolete, and how headless edge architecture unlocks high-margin brand luxury.",
    body: `In luxury and high-performance digital commerce, speed is tactile. A 200ms delay in a cart drawer transition does not just degrade Google Lighthouse scores — it sub-consciously signals cheapness to the buyer.

Monolithic e-commerce platforms force brands into predefined grid templates and bulky JavaScript runtimes that buckle under complex animations or custom configurators. Decoupling the frontend storefront using Next.js App Router and edge caching allows brands to craft couture interfaces while leveraging robust commerce engines like Shopify behind the scenes.

By pushing page rendering to global edge nodes and streaming interactive components, we achieve sub-800ms Time-to-Interactive with 60fps micro-animations. The result is a digital flagship that feels as responsive and refined as walking into a bespoke brick-and-mortar boutique.`,
    relatedCapabilitySlugs: ["digital-products", "cloud-engineering", "branding-creative"],
    relatedSolutionSlugs: ["launch", "modernize"],
    relatedCaseSlugs: ["trendy-fashion-hub", "elite-sports-gear"],
    seo: {
      title: "The Sub-Second Digital Flagship — Perspective | 13 UTOPIA",
      description: "Why headless edge architecture unlocks brand luxury by 13 UTOPIA.",
    },
    status: "published",
  },
];
