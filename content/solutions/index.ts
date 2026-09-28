import type { Solution } from "@/lib/content/types";

export const solutions: Solution[] = [
  {
    slug: "launch",
    title: "Launch",
    description:
      "Bring something new into the world — brand, product, platform, and demand assembled around one outcome.",
    relatedCapabilitySlugs: [
      "branding-creative",
      "digital-products",
      "growth-marketing",
    ],
    relatedCaseSlugs: ["elite-sports-gear"],
    relatedPerspectiveSlugs: ["brand-x-technology"],
    seo: {
      title: "Launch | Solutions | 13 UTOPIA",
      description: "Launch new brands, products, and experiences with Create, Build, and Grow.",
    },
    status: "published",
  },
  {
    slug: "grow",
    title: "Grow",
    description: "Create more demand and momentum around the right proposition.",
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
    description: "Prepare the business for greater complexity, volume, and ambition.",
    relatedCapabilitySlugs: ["cloud-engineering", "digital-products", "growth-marketing"],
    relatedCaseSlugs: ["trendy-fashion-hub"],
    relatedPerspectiveSlugs: [],
    seo: {
      title: "Scale | Solutions | 13 UTOPIA",
      description: "Scale systems, products, and growth infrastructure.",
    },
    status: "published",
  },
  {
    slug: "modernize",
    title: "Modernize",
    description: "Replace outdated technology, processes, or experiences.",
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
      description: "Modernize legacy systems, experiences, and digital infrastructure.",
    },
    status: "published",
  },
  {
    slug: "automate",
    title: "Automate",
    description: "Turn repetitive operations into intelligent, useful systems.",
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
    description: "Rethink the business at a deeper level — strategy, systems, and momentum together.",
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
