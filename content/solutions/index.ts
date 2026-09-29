import type { Solution } from "@/lib/content/types";

export const solutions: Solution[] = [
  {
    slug: "launch",
    title: "Launch",
    description:
      "Bring something new into the world — a new company, product, brand, platform, or market proposition assembled around one outcome.",
    relatedCapabilitySlugs: [
      "branding-creative",
      "digital-products",
      "growth-marketing",
    ],
    relatedCaseSlugs: ["elite-sports-gear"],
    relatedPerspectiveSlugs: ["brand-x-technology"],
    seo: {
      title: "Launch | Solutions | 13 UTOPIA",
      description: "Launch new brands, products, and digital experiences with Create, Build, and Grow.",
    },
    status: "published",
  },
  {
    slug: "grow",
    title: "Grow",
    description:
      "Increase attention, qualified demand, customer conversion, and compound momentum around the right value proposition.",
    relatedCapabilitySlugs: ["growth-marketing", "branding-creative", "digital-products"],
    relatedCaseSlugs: ["elite-sports-gear"],
    relatedPerspectiveSlugs: ["product-x-growth"],
    seo: {
      title: "Grow | Solutions | 13 UTOPIA",
      description: "Grow demand, conversion, and momentum with connected Create / Build / Grow work.",
    },
    status: "published",
  },
  {
    slug: "scale",
    title: "Scale",
    description:
      "Create resilient systems, architectures, and operations capable of handling 10x volume, complexity, and ambition.",
    relatedCapabilitySlugs: ["cloud-engineering", "digital-products", "growth-marketing"],
    relatedCaseSlugs: ["trendy-fashion-hub"],
    relatedPerspectiveSlugs: [],
    seo: {
      title: "Scale | Solutions | 13 UTOPIA",
      description: "Scale systems, products, and growth infrastructure for 10x volume.",
    },
    status: "published",
  },
  {
    slug: "modernize",
    title: "Modernize",
    description:
      "Replace fragile legacy technology, outdated processes, and friction-filled digital experiences without business disruption.",
    relatedCapabilitySlugs: [
      "cloud-engineering",
      "digital-products",
      "branding-creative",
      "ai-automation",
    ],
    relatedCaseSlugs: ["trendy-fashion-hub"],
    relatedPerspectiveSlugs: [],
    seo: {
      title: "Modernize | Solutions | 13 UTOPIA",
      description: "Modernize legacy systems, experiences, and digital infrastructure safely.",
    },
    status: "published",
  },
  {
    slug: "automate",
    title: "Automate",
    description:
      "Eliminate repetitive operational friction and turn complex workflows into intelligent, autonomous systems.",
    relatedCapabilitySlugs: ["ai-automation", "cloud-engineering", "strategy-consulting"],
    relatedCaseSlugs: ["trendy-fashion-hub"],
    relatedPerspectiveSlugs: ["product-x-growth"],
    seo: {
      title: "Automate | Solutions | 13 UTOPIA",
      description: "Automate workflows and operations with practical AI and engineering.",
    },
    status: "published",
  },
  {
    slug: "transform",
    title: "Transform",
    description:
      "Fundamentally align brand, technology, and market momentum around a new operating reality.",
    relatedCapabilitySlugs: [
      "strategy-consulting",
      "branding-creative",
      "digital-products",
      "ai-automation",
      "growth-marketing",
    ],
    relatedCaseSlugs: [],
    relatedPerspectiveSlugs: ["brand-x-technology"],
    seo: {
      title: "Transform | Solutions | 13 UTOPIA",
      description: "Business transformation across Create, Build, and Grow.",
    },
    status: "published",
  },
];
