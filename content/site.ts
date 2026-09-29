/**
 * Live-site sourced company facts from https://13utopia.com/
 * Primary public contact for this build: India (Ahmedabad).
 */

export const company = {
  name: "13 UTOPIA",
  legalName: "13UTOPiA",
  tagline: "BE UNREAL. BE UNREASONABLE. MAKE IT WORK.",
  positioning:
    "Creative technology and growth company built for ambitious businesses that refuse to accept the obvious answer.",
  about:
    "13 UTOPIA brings together strategy, creativity, technology, and growth. We question default assumptions, turn ambition into operable systems, and build work that produces real commercial momentum.",
  aboutShort:
    "Creative technology and growth company — creating what should exist, building what does not exist yet, and growing what matters.",
  equation: "Possibility × Ambition × Execution = Impact",
  centralBelief: "The obvious answer is rarely the only answer.",
  worldviews: [
    { title: "Default is not destiny", body: "Just because something is standard does not mean it is optimal." },
    { title: "Creativity without execution is incomplete", body: "Ideas matter. Execution decides whether they matter in the real world." },
    { title: "Technology should enable possibility", body: "Technology is the machinery that allows better ideas to become real." },
    { title: "Growth should follow value", body: "The purpose of growth is not vanity. It must connect to something useful and sustainable." },
    { title: "Different does not automatically mean better", body: "Being unconventional is not enough. We are different for a reason." },
    { title: "Complexity is not intelligence", body: "The smartest solution is often the one that makes complexity disappear." },
    { title: "Ambition deserves systems", body: "Big ideas require strategy, design, engineering, measurement, and discipline." },
    { title: "The best work lives between disciplines", body: "Brand informs technology; technology drives growth; growth refines product." },
  ],
  personalityBalance: [
    { trait: "Bold", caveat: "not loud" },
    { trait: "Experimental", caveat: "not chaotic" },
    { trait: "Playful", caveat: "not childish" },
    { trait: "Intelligent", caveat: "not pretentious" },
    { trait: "Ambitious", caveat: "not reckless" },
    { trait: "Premium", caveat: "not sterile" },
    { trait: "Technical", caveat: "not cold" },
    { trait: "Human", caveat: "not corporate" },
  ],
  modesOfValue: {
    create: { name: "CREATE", focus: "Brand / Design / Experience", role: "Creates meaning and perception — What should this become?" },
    build: { name: "BUILD", focus: "Product / Technology / AI", role: "Creates function and infrastructure — How does this actually work?" },
    grow: { name: "GROW", focus: "Marketing / Strategy / Performance", role: "Creates traction and momentum — How does the business become stronger?" },
  },
  email: "info@13utopia.com",
  phone: "+91 9924131397",
  phoneHref: "tel:+919924131397",
  addressLines: [
    "1123, Iconic Shyamal, Shyamal Cross Roads",
    "132 Feet Ring Rd, Ahmedabad",
    "Gujarat 380015, India",
  ],
  addressOneLine:
    "1123, Iconic Shyamal, Shyamal Cross Roads, 132 Feet Ring Rd, Ahmedabad, Gujarat 380015, India",
  canadaAddressLines: [
    "30 Kimbercroft Ct",
    "Markham Corners, Scarborough",
    "ON M1S 4K9, Canada",
  ],
  canadaAddressOneLine:
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
