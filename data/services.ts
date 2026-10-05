export type ServiceCapability = {
  num: string;
  title: string;
  desc: string;
  badge: string;
};

export type ServiceReason = {
  num: string;
  title: string;
  desc: string;
};

export type ServiceStep = {
  num: string;
  title: string;
  desc: string;
};

export type ServiceFaq = {
  q: string;
  a: string;
};

export type ServiceWorld = {
  slug: "create" | "build" | "grow";
  indexNum: string;
  worldTag: string;
  label: string;
  title: string;
  echoTitle: string;
  heroLead: string;
  heroBody: string;
  manifestoTitle: string;
  manifestoBody: string;
  heroImage: string;
  accent: string;
  proof: { value: string; label: string }[];
  reasonsTitle: string;
  reasons: ServiceReason[];
  capabilitiesTitle: string;
  capabilities: ServiceCapability[];
  processTitle: string;
  process: ServiceStep[];
  fitTitle: string;
  fitBody: string;
  faqs: ServiceFaq[];
  ctaLabel: string;
  seo: { title: string; description: string };
};

export const SERVICE_WORLDS: Record<"create" | "build" | "grow", ServiceWorld> = {
  create: {
    slug: "create",
    indexNum: "01 // 03",
    worldTag: "WORLD 01",
    label: "CREATE",
    title: "Brands people remember. Experiences people feel.",
    echoTitle: "CREATE.",
    heroLead: "Aesthetic architecture for brands that refuse sameness.",
    heroBody:
      "Living brand systems — identity, spatial UI, motion language, and creative direction — built to demand attention and compound recognition.",
    manifestoTitle: "More than a logo. A living brand system.",
    manifestoBody:
      "A brand is how people understand you, remember you, and decide to trust you. We bind positioning to feeling — so every surface speaks one unreasonable language.",
    heroImage: "/images/world-create.jpg",
    accent: "#e8c56a",
    proof: [
      { value: "100%", label: "Bespoke Brand Systems" },
      { value: "60", label: "FPS motion systems locked" },
      { value: "1", label: "Visual language per brand" },
      { value: "0", label: "Template identities shipped" },
    ],
    reasonsTitle: "Why brand architecture matters",
    reasons: [
      {
        num: "01",
        title: "Stand out in saturated markets",
        desc: "Make the difference obvious — visually, verbally, experientially. No soft edges.",
      },
      {
        num: "02",
        title: "Build trust faster",
        desc: "Coherence reads as intention. Intention converts belief into action.",
      },
      {
        num: "03",
        title: "Scale without dilution",
        desc: "A system that holds across web, product, campaigns, and space — same language, every surface.",
      },
    ],
    capabilitiesTitle: "What we create",
    capabilities: [
      {
        num: "01",
        title: "Brand Strategy & Positioning",
        desc: "The unreasonable edge — what you own that no one else can claim.",
        badge: "STRATEGY",
      },
      {
        num: "02",
        title: "Visual Identity Systems",
        desc: "Typography, color science, and tactile language built to be recognized at a glance.",
        badge: "IDENTITY",
      },
      {
        num: "03",
        title: "Spatial UI / UX Design",
        desc: "Interfaces engineered as high-end living spaces — not wireframe leftovers.",
        badge: "EXPERIENCE",
      },
      {
        num: "04",
        title: "Creative Direction",
        desc: "Aesthetic governance across every touchpoint. One standard. Zero drift.",
        badge: "DIRECTION",
      },
      {
        num: "05",
        title: "CGI & 3D Spatial Worlds",
        desc: "Photoreal sculptural dimensions that stop the scroll and hold the stare.",
        badge: "3D LAB",
      },
      {
        num: "06",
        title: "Kinetic Motion Systems",
        desc: "Physics-driven motion that makes the digital feel physical — locked at 60.",
        badge: "MOTION",
      },
    ],
    processTitle: "CREATE process",
    process: [
      {
        num: "01",
        title: "Signal & positioning",
        desc: "Category, audience, and the edge the brand must own — before a pixel moves.",
      },
      {
        num: "02",
        title: "Identity system",
        desc: "Type, color, form, and motion rules as one architecture — not a style sheet.",
      },
      {
        num: "03",
        title: "Spatial expression",
        desc: "The system into UI, campaigns, and dimensional assets that earn attention.",
      },
      {
        num: "04",
        title: "Governance",
        desc: "Guides and rituals so the brand stays sharp as it scales — without dilution.",
      },
    ],
    fitTitle: "Who CREATE is for",
    fitBody:
      "Founders and enterprises who have outgrown a temporary identity, face a crowded market, or need a brand that can carry product, web, and culture without going soft.",
    faqs: [
      {
        q: "Can CREATE include website and product interfaces?",
        a: "Yes. Identity often extends into spatial UI and motion — so the brand is experienced, not only documented in a PDF.",
      },
      {
        q: "Do you start from positioning or visuals?",
        a: "Positioning first when the story is unclear. Visual systems first when the strategy is strong but the expression is weak.",
      },
      {
        q: "How long does a CREATE engagement take?",
        a: "Focused identity systems can move in weeks. Full brand + spatial + motion architectures run longer — scoped to surface area, never padded.",
      },
    ],
    ctaLabel: "Start a CREATE alliance",
    seo: {
      title: "CREATE — Brand & Spatial Experience",
      description:
        "Brand strategy, visual identity, spatial UI, CGI, and motion systems for companies ready to refuse digital sameness.",
    },
  },
  build: {
    slug: "build",
    indexNum: "02 // 03",
    worldTag: "WORLD 02",
    label: "BUILD",
    title: "Digital products and technology built to perform.",
    echoTitle: "BUILD.",
    heroLead: "High-velocity architectures. Zero bloat. Uncompromising code.",
    heroBody:
      "Websites, SaaS platforms, and intelligent systems that feel cinematic and survive real-world load — design and development as one instrument.",
    manifestoTitle: "More than a website. A digital instrument.",
    manifestoBody:
      "The best products don’t just explain what a company does. They make people feel the brand, understand the value, and know what to do next — at locked performance.",
    heroImage: "/images/world-build.jpg",
    accent: "#f3c35b",
    proof: [
      { value: "60", label: "FPS rendering pipelines" },
      { value: "<1s", label: "Target interaction latency" },
      { value: "0", label: "Template stacks preferred" },
      { value: "Edge", label: "Global deployment ready" },
    ],
    reasonsTitle: "Why digital engineering matters",
    reasons: [
      {
        num: "01",
        title: "Make the offer clearer",
        desc: "Structure, UX, and messaging that help people understand faster — and decide sooner.",
      },
      {
        num: "02",
        title: "Turn attention into action",
        desc: "Paths to inquiry, product, and proof without friction or decorative dead ends.",
      },
      {
        num: "03",
        title: "Build systems that scale",
        desc: "Architectures flexible enough for new surfaces, content, and growth — without a rebuild tax.",
      },
    ],
    capabilitiesTitle: "What we build",
    capabilities: [
      {
        num: "01",
        title: "Web & Full-Stack Architecture",
        desc: "Sub-second loads. Zero bloat. Code quality that holds under pressure.",
        badge: "ENGINEERING",
      },
      {
        num: "02",
        title: "Custom Software & SaaS",
        desc: "Resilient cloud applications from first principles — not theme stacks.",
        badge: "PLATFORM",
      },
      {
        num: "03",
        title: "Autonomous Agents & LLMs",
        desc: "Operational intelligence and workflow automation tuned to your reality.",
        badge: "AI LAB",
      },
      {
        num: "04",
        title: "Intelligent Automation",
        desc: "Eliminate human error and operational drag with systems that don’t tire.",
        badge: "AUTOMATION",
      },
      {
        num: "05",
        title: "Next.js & Performance",
        desc: "Cinematic rendering pipelines running at locked 60 FPS.",
        badge: "PERFORMANCE",
      },
      {
        num: "06",
        title: "Cloud Infrastructure & Edge",
        desc: "Global edge deployment with enterprise-grade resilience.",
        badge: "CLOUD",
      },
    ],
    processTitle: "BUILD process",
    process: [
      {
        num: "01",
        title: "System direction",
        desc: "Goals, audiences, constraints, and conversion paths — before architecture hardens.",
      },
      {
        num: "02",
        title: "UX & information architecture",
        desc: "Flows, hierarchy, and content structure before pixels pretend to be final.",
      },
      {
        num: "03",
        title: "Design + engineering",
        desc: "One system from visual language through production code. No handoff theater.",
      },
      {
        num: "04",
        title: "Launch & harden",
        desc: "Performance, accessibility, edge deploy, and iteration loops that stay sharp.",
      },
    ],
    fitTitle: "Who BUILD is for",
    fitBody:
      "Teams whose site or product no longer matches the brand, converts poorly, or cannot scale — and want design and development under one unreasonable standard.",
    faqs: [
      {
        q: "Do you handle both design and development?",
        a: "Yes. Keeping design and engineering together preserves intent from concept through production — no soft edges at handoff.",
      },
      {
        q: "Can you rebuild on an existing brand?",
        a: "Yes — when the foundation is strong. If positioning or identity is weak, we align CREATE before or alongside BUILD.",
      },
      {
        q: "What stack do you prefer?",
        a: "Modern web stacks centered on Next.js, edge delivery, and performance-first architecture — chosen for the problem, not fashion.",
      },
    ],
    ctaLabel: "Start a BUILD alliance",
    seo: {
      title: "BUILD — Products & Digital Engineering",
      description:
        "Web, SaaS, AI automation, and edge architecture engineered for performance, clarity, and scale.",
    },
  },
  grow: {
    slug: "grow",
    indexNum: "03 // 03",
    worldTag: "WORLD 03",
    label: "GROW",
    title: "Systems that turn attention into measurable outcomes.",
    echoTitle: "GROW.",
    heroLead: "Acquisition, conversion, and retention that compound.",
    heroBody:
      "Attention without conversion is vanity. Organic search dominance, high-intent funnels, and flywheels that move the bottom line — not the vanity scoreboard.",
    manifestoTitle: "More than campaigns. Revenue architecture.",
    manifestoBody:
      "Growth is a system — technical SEO, conversion science, authority, and attribution as one engine. We design the loops that keep compounding after launch week.",
    heroImage: "/images/world-grow.jpg",
    accent: "#dfc17b",
    proof: [
      { value: "SEO", label: "Technical dominance first" },
      { value: "CRO", label: "Experiment-led conversion" },
      { value: "LTV", label: "Retention compounding" },
      { value: "ROI", label: "Attribution that holds" },
    ],
    reasonsTitle: "Why growth systems matter",
    reasons: [
      {
        num: "01",
        title: "Own demand, don’t rent it",
        desc: "Organic and authority channels that reduce paid dependency — and compound while you sleep.",
      },
      {
        num: "02",
        title: "Convert with intent",
        desc: "Funnels and experiments tuned to real behavior — not vanity metrics dressed as strategy.",
      },
      {
        num: "03",
        title: "Compound what works",
        desc: "Flywheels and attribution that turn wins into durable advantage — then protect them.",
      },
    ],
    capabilitiesTitle: "What we grow",
    capabilities: [
      {
        num: "01",
        title: "Search Engine Optimization (SEO)",
        desc: "Technical SEO architecture, entity graph authority, and high-intent organic rankings that compound without ad tax.",
        badge: "SEARCH // SEO",
      },
      {
        num: "02",
        title: "Paid Performance Ads (PPC)",
        desc: "High-yield paid acquisition across Google, Meta, and YouTube with algorithmic conversion rate optimization.",
        badge: "PERFORMANCE // ADS",
      },
      {
        num: "03",
        title: "Online Reputation Management (ORM)",
        desc: "Search graph protection, digital PR defense, executive sentiment curation, and review ecosystem governance.",
        badge: "ORM // DEFENSE",
      },
      {
        num: "04",
        title: "Email Marketing & Retention",
        desc: "Automated event-driven lifecycle sequences and CRM workflows that compound customer lifetime value.",
        badge: "LIFECYCLE // EMAIL",
      },
      {
        num: "05",
        title: "Conversion Rate Engineering (CRO)",
        desc: "Data-driven behavioral experiments and frictionless landing page architectures that maximize yield per visit.",
        badge: "CONVERSION",
      },
      {
        num: "06",
        title: "Attribution & Revenue Analytics",
        desc: "Multi-touch attribution models connecting every media dollar to verified bottom-line commercial outcomes.",
        badge: "ANALYTICS",
      },
    ],
    processTitle: "GROW process",
    process: [
      {
        num: "01",
        title: "Audit & opportunity map",
        desc: "Find the friction, the leaks, and the highest-leverage channels — then rank them.",
      },
      {
        num: "02",
        title: "System design",
        desc: "SEO, content, CRO, and funnel architecture as one plan — not three vendors.",
      },
      {
        num: "03",
        title: "Ship & experiment",
        desc: "Release instrumentation, run tests, and kill what doesn’t move numbers.",
      },
      {
        num: "04",
        title: "Compound",
        desc: "Scale winners, tighten attribution, and lock the flywheel so it keeps spinning.",
      },
    ],
    fitTitle: "Who GROW is for",
    fitBody:
      "Companies with a real offer who need acquisition without proportional spend, clearer conversion paths, and growth systems that survive beyond a single campaign.",
    faqs: [
      {
        q: "Is GROW only SEO?",
        a: "No. SEO is one pillar. Search, conversion engineering, authority, and attribution run as one growth architecture.",
      },
      {
        q: "Do you need CREATE or BUILD first?",
        a: "If the brand or product foundation is broken, we fix that first. GROW compounds strongest on a clear offer and a performant surface.",
      },
      {
        q: "How do you measure success?",
        a: "Qualified pipeline, conversion rate, organic growth, and retention — not vanity traffic dressed as progress.",
      },
    ],
    ctaLabel: "Start a GROW alliance",
    seo: {
      title: "GROW — Revenue Engines & Compounding",
      description:
        "Technical SEO, CRO, authority, funnels, and attribution systems that turn attention into measurable outcomes.",
    },
  },
};

export const SERVICE_NAV = [
  { href: "/services", label: "Overview" },
  { href: "/services/create", label: "CREATE" },
  { href: "/services/build", label: "BUILD" },
  { href: "/services/grow", label: "GROW" },
] as const;
