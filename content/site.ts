/**
 * Live-site sourced company facts from https://13utopia.com/
 * Use for approval builds before the photography / verified-metrics pass.
 * Do not invent counters — live site zeros are ignored on purpose.
 */

export const company = {
  name: "13 UTOPIA",
  legalName: "13UTOPiA",
  tagline: "BE UNREAL. BE UNREASONABLE.",
  positioning:
    "A Toronto creative technology and growth company — brand, web, SEO, and digital marketing for ambitious businesses.",
  about:
    "13 Utopia develops and executes campaigns from concept through launch. We combine strategy, storytelling, and craft across SEO, branding, web development, and digital marketing so brands leave a clear imprint in market.",
  aboutShort:
    "Creativity, strategy, and innovation — impactful campaigns that elevate brands in a competitive landscape.",
  email: "info@13utopia.com",
  phone: "+1 437-603-9004",
  phoneHref: "tel:+14376039004",
  addressLines: [
    "30 Kimbercroft Ct",
    "Markham Corners, Scarborough",
    "ON M1S 4K9, Canada",
  ],
  addressOneLine:
    "30 Kimbercroft Ct, Scarborough, ON M1S 4K9, Canada (Markham Corners)",
  social: {
    behance: "https://www.behance.net/",
    linkedin: "https://www.linkedin.com/",
    instagram: "https://www.instagram.com/",
  },
  sourceUrl: "https://13utopia.com/",
} as const;

/** Client names published on the live homepage logo strip */
export const clients = [
  "OOKO",
  "Mayur Dairy",
  "BAS",
  "Tanya's Dental House",
  "Fujitec Express",
  "Odhani Concept",
  "VHNM",
  "ZuuZuu",
  "Navkar Tubes & Tools",
  "Pehnaava",
  "Rayon Lab Tech",
  "Kripal Homes",
  "Gajjar",
  "ZFL",
  "Shivangi Pancholi",
  "Arteve",
  "Diet Diary",
  "Zaab",
  "SFW The Gym",
  "Rajbhog",
  "Axion",
  "Taksonz",
  "Zenithive",
  "Zaign",
  "Swaadus",
] as const;

/** Live service map → Create / Build / Grow */
export const liveServices = [
  {
    slug: "seo",
    title: "Search Engine Optimization",
    world: "grow" as const,
    body: "Improve how your site shows up in Google search — structure, content, and technical work that earns qualified traffic.",
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    world: "grow" as const,
    body: "Campaigns that raise visibility and sales — paid, organic, and lifecycle working as one system.",
  },
  {
    slug: "web-development",
    title: "Web Development",
    world: "build" as const,
    body: "Websites and digital products that look right, load fast, and work across devices — the foundation of online success.",
  },
  {
    slug: "cgi-videos",
    title: "CGI Videos",
    world: "create" as const,
    body: "Realistic CGI and motion that bring product and brand ideas to life on screen.",
  },
  {
    slug: "orm",
    title: "Online Reputation Management",
    world: "grow" as const,
    body: "Protect and strengthen how your brand is seen across search, reviews, and social — so reputation matches the work.",
  },
  {
    slug: "email-marketing",
    title: "Email Marketing",
    world: "grow" as const,
    body: "Lifecycle email measured by opens, clicks, and conversions — campaigns that improve from real performance data.",
  },
] as const;
