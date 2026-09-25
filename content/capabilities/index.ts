import type { Capability, CapabilityCategory } from "@/lib/content/types";

export const capabilityCategories: CapabilityCategory[] = [
  {
    slug: "create",
    title: "Create",
    description:
      "Brand, design, and experience — how a business is understood, expressed, and experienced.",
    seo: {
      title: "Create | Capabilities | 13 UTOPIA",
      description:
        "Branding and creative capabilities from 13 UTOPIA — brand strategy, identity, experience, and visual content.",
    },
    status: "published",
    capabilitySlugs: ["branding-creative"],
  },
  {
    slug: "build",
    title: "Build",
    description:
      "Products, technology, AI, automation, and engineering — systems that work.",
    seo: {
      title: "Build | Capabilities | 13 UTOPIA",
      description:
        "Digital products, AI & automation, and cloud & engineering capabilities from 13 UTOPIA.",
    },
    status: "published",
    capabilitySlugs: ["digital-products", "ai-automation", "cloud-engineering"],
  },
  {
    slug: "grow",
    title: "Grow",
    description: "Marketing, performance, SEO, and content — turn attention into momentum.",
    seo: {
      title: "Grow | Capabilities | 13 UTOPIA",
      description: "Growth and marketing capabilities from 13 UTOPIA.",
    },
    status: "published",
    capabilitySlugs: ["growth-marketing"],
  },
  {
    slug: "strategy",
    title: "Strategy & Consulting",
    description:
      "The thinking layer that connects Create, Build, and Grow — what should be done and why.",
    seo: {
      title: "Strategy & Consulting | Capabilities | 13 UTOPIA",
      description: "Digital transformation, product discovery, and technology consulting.",
    },
    status: "published",
    capabilitySlugs: ["strategy-consulting"],
  },
];

export const capabilities: Capability[] = [
  {
    slug: "branding-creative",
    title: "Branding & Creative",
    description:
      "Brand strategy, identity, creative direction, experience, UI/UX, CGI & motion, and visual content.",
    world: "create",
    relatedSolutionSlugs: ["launch", "transform", "grow"],
    relatedCaseSlugs: ["placeholder-case-create"],
    relatedPerspectiveSlugs: ["placeholder-brand-tech"],
    seo: {
      title: "Branding & Creative | 13 UTOPIA",
      description: "CREATE capabilities — brand strategy, identity, and experience design.",
    },
    status: "placeholder",
  },
  {
    slug: "digital-products",
    title: "Digital Products",
    description:
      "Websites, mobile apps, SaaS, custom software, product engineering, e-commerce, and MVPs.",
    world: "build",
    relatedSolutionSlugs: ["launch", "scale", "modernize"],
    relatedCaseSlugs: ["placeholder-case-build"],
    relatedPerspectiveSlugs: ["placeholder-product-growth"],
    seo: {
      title: "Digital Products | 13 UTOPIA",
      description: "BUILD — websites, apps, SaaS, and product engineering.",
    },
    status: "placeholder",
  },
  {
    slug: "ai-automation",
    title: "AI & Automation",
    description:
      "AI strategy, agents, generative AI, workflow automation, process automation, chatbots, and ML — practical systems, not gimmicks.",
    world: "build",
    relatedSolutionSlugs: ["automate", "modernize", "transform"],
    relatedCaseSlugs: ["placeholder-case-build"],
    relatedPerspectiveSlugs: ["placeholder-product-growth"],
    seo: {
      title: "AI & Automation | 13 UTOPIA",
      description: "Practical AI and automation systems built around real business problems.",
    },
    status: "placeholder",
  },
  {
    slug: "cloud-engineering",
    title: "Cloud & Engineering",
    description:
      "Full-stack engineering, cloud architecture, DevOps, APIs, legacy modernization, infrastructure, and security where substantiated.",
    world: "build",
    relatedSolutionSlugs: ["scale", "modernize", "transform"],
    relatedCaseSlugs: ["placeholder-case-build"],
    relatedPerspectiveSlugs: [],
    seo: {
      title: "Cloud & Engineering | 13 UTOPIA",
      description: "Serious engineering — architecture, reliability, scalability, and modernization.",
    },
    status: "placeholder",
  },
  {
    slug: "growth-marketing",
    title: "Growth & Marketing",
    description:
      "SEO, performance marketing, social, content strategy, lead generation, and reputation — demand into momentum.",
    world: "grow",
    relatedSolutionSlugs: ["grow", "launch", "scale"],
    relatedCaseSlugs: ["placeholder-case-create"],
    relatedPerspectiveSlugs: ["placeholder-product-growth"],
    seo: {
      title: "Growth & Marketing | 13 UTOPIA",
      description: "GROW — SEO, performance, content, and demand systems.",
    },
    status: "placeholder",
  },
  {
    slug: "strategy-consulting",
    title: "Strategy & Consulting",
    description:
      "Digital transformation, product discovery, technology consulting, growth strategy, CTO advisory, architecture review, and due diligence.",
    world: "strategy",
    relatedSolutionSlugs: ["transform", "modernize", "automate", "scale"],
    relatedCaseSlugs: [],
    relatedPerspectiveSlugs: ["placeholder-brand-tech"],
    seo: {
      title: "Strategy & Consulting | 13 UTOPIA",
      description: "Determine what should be done, why, and which capabilities are required.",
    },
    status: "placeholder",
  },
];
