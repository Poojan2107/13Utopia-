import type { Capability, CapabilityCategory } from "@/lib/content/types";

export const capabilityCategories: CapabilityCategory[] = [
  {
    slug: "create",
    title: "Create",
    description:
      "Brand, design, experience, and CGI — how a business is understood and felt before it is sold.",
    seo: {
      title: "Create | Capabilities | 13 UTOPIA",
      description:
        "Branding, creative, and CGI capabilities from 13 UTOPIA.",
    },
    status: "published",
    capabilitySlugs: ["branding-creative", "cgi-videos"],
  },
  {
    slug: "build",
    title: "Build",
    description:
      "Web development, products, and systems — digital foundations that work on day one.",
    seo: {
      title: "Build | Capabilities | 13 UTOPIA",
      description: "Web development and digital product capabilities from 13 UTOPIA.",
    },
    status: "published",
    capabilitySlugs: [
      "digital-products",
      "web-development",
      "ai-automation",
      "cloud-engineering",
    ],
  },
  {
    slug: "grow",
    title: "Grow",
    description:
      "SEO, digital marketing, email, and reputation — attention turned into demand.",
    seo: {
      title: "Grow | Capabilities | 13 UTOPIA",
      description:
        "SEO, digital marketing, email, and ORM capabilities from 13 UTOPIA.",
    },
    status: "published",
    capabilitySlugs: [
      "seo",
      "digital-marketing",
      "email-marketing",
      "orm",
      "growth-marketing",
    ],
  },
  {
    slug: "strategy",
    title: "Strategy & Consulting",
    description:
      "Direction before delivery — what should be done and why across Create, Build, and Grow.",
    seo: {
      title: "Strategy & Consulting | Capabilities | 13 UTOPIA",
      description: "Strategy and consulting from 13 UTOPIA.",
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
      "Brand strategy, identity, creative direction, and experience — campaigns developed from concept so the story resonates.",
    world: "create",
    relatedSolutionSlugs: ["launch", "transform", "grow"],
    relatedCaseSlugs: ["kumar-cotton-textiles", "trendy-fashion-hub"],
    relatedPerspectiveSlugs: [],
    seo: {
      title: "Branding & Creative | 13 UTOPIA",
      description: "Brand elevation and creative campaigns from 13 UTOPIA.",
    },
    status: "published",
  },
  {
    slug: "cgi-videos",
    title: "CGI Videos",
    description:
      "Captivating, realistic CGI video production that brings product and brand ideas to life.",
    world: "create",
    relatedSolutionSlugs: ["launch", "grow"],
    relatedCaseSlugs: [],
    relatedPerspectiveSlugs: [],
    seo: {
      title: "CGI Videos | 13 UTOPIA",
      description: "CGI and motion production from 13 UTOPIA.",
    },
    status: "published",
  },
  {
    slug: "web-development",
    title: "Web Development",
    description:
      "Design and run websites that determine success online — visual craft, UX, and reliable performance across platforms.",
    world: "build",
    relatedSolutionSlugs: ["launch", "modernize", "scale"],
    relatedCaseSlugs: [
      "elite-sports-gear",
      "kumar-cotton-textiles",
      "trendy-fashion-hub",
    ],
    relatedPerspectiveSlugs: [],
    seo: {
      title: "Web Development | 13 UTOPIA",
      description: "Website design and development from 13 UTOPIA.",
    },
    status: "published",
  },
  {
    slug: "digital-products",
    title: "Digital Products",
    description:
      "Websites, apps, and custom product engineering — systems built to hold under real use.",
    world: "build",
    relatedSolutionSlugs: ["launch", "scale", "modernize"],
    relatedCaseSlugs: ["elite-sports-gear", "trendy-fashion-hub"],
    relatedPerspectiveSlugs: [],
    seo: {
      title: "Digital Products | 13 UTOPIA",
      description: "Digital product engineering from 13 UTOPIA.",
    },
    status: "published",
  },
  {
    slug: "ai-automation",
    title: "AI & Automation",
    description:
      "Practical AI, agents, and workflow automation — systems built around real operations, not demos.",
    world: "build",
    relatedSolutionSlugs: ["automate", "modernize", "transform"],
    relatedCaseSlugs: [],
    relatedPerspectiveSlugs: [],
    seo: {
      title: "AI & Automation | 13 UTOPIA",
      description: "Practical AI and automation from 13 UTOPIA.",
    },
    status: "published",
  },
  {
    slug: "cloud-engineering",
    title: "Cloud & Engineering",
    description:
      "Architecture, reliability, APIs, and modernization — engineering that holds under load.",
    world: "build",
    relatedSolutionSlugs: ["scale", "modernize", "transform"],
    relatedCaseSlugs: [],
    relatedPerspectiveSlugs: [],
    seo: {
      title: "Cloud & Engineering | 13 UTOPIA",
      description: "Cloud and engineering from 13 UTOPIA.",
    },
    status: "published",
  },
  {
    slug: "seo",
    title: "Search Engine Optimization",
    description:
      "Enhance how a website ranks in Google — technical, content, and structural work that earns qualified discovery.",
    world: "grow",
    relatedSolutionSlugs: ["grow", "launch"],
    relatedCaseSlugs: ["elite-sports-gear"],
    relatedPerspectiveSlugs: [],
    seo: {
      title: "SEO | 13 UTOPIA",
      description: "Search engine optimization from 13 UTOPIA, Toronto.",
    },
    status: "published",
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    description:
      "Campaigns that raise brand visibility and sales — channels coordinated around one outcome.",
    world: "grow",
    relatedSolutionSlugs: ["grow", "launch", "scale"],
    relatedCaseSlugs: [],
    relatedPerspectiveSlugs: [],
    seo: {
      title: "Digital Marketing | 13 UTOPIA",
      description: "Digital marketing campaigns from 13 UTOPIA.",
    },
    status: "published",
  },
  {
    slug: "email-marketing",
    title: "Email Marketing",
    description:
      "Lifecycle email improved from real performance data — opens, clicks, and conversion measured together.",
    world: "grow",
    relatedSolutionSlugs: ["grow", "scale"],
    relatedCaseSlugs: [],
    relatedPerspectiveSlugs: [],
    seo: {
      title: "Email Marketing | 13 UTOPIA",
      description: "Email marketing from 13 UTOPIA.",
    },
    status: "published",
  },
  {
    slug: "orm",
    title: "Online Reputation Management",
    description:
      "Protect and enhance brand image across the digital landscape — search, reviews, and social.",
    world: "grow",
    relatedSolutionSlugs: ["grow", "transform"],
    relatedCaseSlugs: [],
    relatedPerspectiveSlugs: [],
    seo: {
      title: "ORM | 13 UTOPIA",
      description: "Online reputation management from 13 UTOPIA.",
    },
    status: "published",
  },
  {
    slug: "growth-marketing",
    title: "Growth & Marketing",
    description:
      "SEO, performance, social, content, lead generation, and reputation — demand into momentum.",
    world: "grow",
    relatedSolutionSlugs: ["grow", "launch", "scale"],
    relatedCaseSlugs: ["elite-sports-gear"],
    relatedPerspectiveSlugs: [],
    seo: {
      title: "Growth & Marketing | 13 UTOPIA",
      description: "Connected growth marketing from 13 UTOPIA.",
    },
    status: "published",
  },
  {
    slug: "strategy-consulting",
    title: "Strategy & Consulting",
    description:
      "Digital direction before delivery — what should be done, why, and which capabilities are required.",
    world: "strategy",
    relatedSolutionSlugs: ["transform", "modernize", "scale"],
    relatedCaseSlugs: [],
    relatedPerspectiveSlugs: [],
    seo: {
      title: "Strategy & Consulting | 13 UTOPIA",
      description: "Strategy and consulting from 13 UTOPIA.",
    },
    status: "published",
  },
];
