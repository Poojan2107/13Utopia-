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
    worldTag: "01 // BRAND & IDENTITY",
    label: "CREATE",
    title: "Memorable brands. Distinct digital experiences.",
    echoTitle: "CREATE.",
    heroLead: "Strategic branding and digital design that establish clear market leadership.",
    heroBody:
      "We craft cohesive visual identity systems, interactive UI/UX, 3D motion, and creative direction that build lasting trust and immediate recognition.",
    manifestoTitle: "Built for clarity, recognition, and scale.",
    manifestoBody:
      "A strong brand communicates who you are and why it matters. We connect positioning with purposeful design so every customer touchpoint looks and feels coherent.",
    heroImage: "/images/world-create.jpg",
    accent: "#ffffff",
    proof: [
      { value: "100%", label: "Custom Visual Systems" },
      { value: "60 FPS", label: "Fluid Motion Frameworks" },
      { value: "Unified", label: "Multi-Platform Cohesion" },
      { value: "0", label: "Off-the-Shelf Templates" },
    ],
    reasonsTitle: "Why brand systems drive commercial growth",
    reasons: [
      {
        num: "01",
        title: "Distinct Market Positioning",
        desc: "Clear visual hierarchy and messaging that differentiate your offering instantly across competitive categories.",
      },
      {
        num: "02",
        title: "Instant Credibility & Trust",
        desc: "Consistent design builds immediate authority, turning initial visitor interest into confident customer decisions.",
      },
      {
        num: "03",
        title: "Scalable Design Foundations",
        desc: "Modular design systems that seamlessly extend across web apps, marketing campaigns, and physical media.",
      },
    ],
    capabilitiesTitle: "Core Capabilities",
    capabilities: [
      {
        num: "01",
        title: "Brand Strategy & Positioning",
        desc: "Defining market positioning, audience segmentation, and key messaging pillars before design begins.",
        badge: "STRATEGY",
      },
      {
        num: "02",
        title: "Visual Identity Systems",
        desc: "Custom typography, color systems, iconography, and comprehensive design guidelines.",
        badge: "IDENTITY",
      },
      {
        num: "03",
        title: "UI / UX Product Design",
        desc: "Modern digital interfaces focused on intuitive user flows, accessibility, and high conversion.",
        badge: "EXPERIENCE",
      },
      {
        num: "04",
        title: "Creative Direction",
        desc: "Art direction and visual governance across digital products, campaigns, and brand touchpoints.",
        badge: "DIRECTION",
      },
      {
        num: "05",
        title: "3D Visuals & CGI",
        desc: "Interactive 3D models, photorealistic asset rendering, and spatial product showcases.",
        badge: "3D DESIGN",
      },
      {
        num: "06",
        title: "Kinetic Motion & Interaction",
        desc: "Micro-interactions and physics-driven motion design that make digital products responsive and engaging.",
        badge: "MOTION",
      },
    ],
    processTitle: "Our Approach",
    process: [
      {
        num: "01",
        title: "Discovery & Strategy",
        desc: "Analyzing category context, audience needs, and strategic objectives to set a clear direction.",
      },
      {
        num: "02",
        title: "Identity Architecture",
        desc: "Designing typography, layout grids, color science, and motion principles into one cohesive system.",
      },
      {
        num: "03",
        title: "Digital Implementation",
        desc: "Translating brand guidelines into interactive UI components, design tokens, and production assets.",
      },
      {
        num: "04",
        title: "Design Governance",
        desc: "Delivering modular design libraries and documentation for seamless team adoption and long-term consistency.",
      },
    ],
    fitTitle: "Ideal For",
    fitBody:
      "Growing companies, venture-backed startups, and established enterprises looking to modernize their brand, launch a new digital product, or expand into new markets.",
    faqs: [
      {
        q: "Does this include web and mobile product design?",
        a: "Yes. Our brand engagements regularly extend into full digital UI/UX design, interactive prototyping, and component design systems.",
      },
      {
        q: "How do you approach brand strategy vs visual design?",
        a: "We align on positioning and messaging first. Once the strategic foundation is clear, we build the visual identity and digital assets.",
      },
      {
        q: "What is the typical project timeline?",
        a: "Focused identity projects typically complete in 4–6 weeks. Comprehensive brand systems with full UI/UX design average 8–12 weeks.",
      },
    ],
    ctaLabel: "Start a Project",
    seo: {
      title: "Brand Strategy & Digital Design — 13 UTOPIA",
      description:
        "Strategic branding, visual identity systems, UI/UX design, and 3D motion for forward-thinking companies.",
    },
  },
  build: {
    slug: "build",
    indexNum: "02 // 03",
    worldTag: "02 // PRODUCT ENGINEERING",
    label: "BUILD",
    title: "High-performance software and digital products.",
    echoTitle: "BUILD.",
    heroLead: "Modern web architecture, scalable SaaS platforms, and intelligent automation.",
    heroBody:
      "We engineer custom digital products, web applications, and AI integrations designed for speed, reliability, and long-term maintainability.",
    manifestoTitle: "Engineered for speed, stability, and scale.",
    manifestoBody:
      "Great digital products combine clean design with robust engineering. We build resilient full-stack systems that load instantly and scale effortlessly with your user base.",
    heroImage: "/images/world-build.jpg",
    accent: "#ffffff",
    proof: [
      { value: "60 FPS", label: "Optimized Rendering" },
      { value: "<1s", label: "Target Load Speed" },
      { value: "100%", label: "Custom Codebase" },
      { value: "Global", label: "Edge Infrastructure" },
    ],
    reasonsTitle: "Why modern engineering drives business results",
    reasons: [
      {
        num: "01",
        title: "Sub-Second Performance",
        desc: "Fast load times directly improve search rankings, visitor engagement, and transaction conversion rates.",
      },
      {
        num: "02",
        title: "Maintainable Architecture",
        desc: "Clean, modular codebases that allow your internal team to iterate and add features without technical debt.",
      },
      {
        num: "03",
        title: "Scalable Infrastructure",
        desc: "Cloud-native and serverless architectures built to handle traffic spikes and enterprise security standards.",
      },
    ],
    capabilitiesTitle: "Engineering Capabilities",
    capabilities: [
      {
        num: "01",
        title: "Custom Web Applications",
        desc: "High-performance web apps built with Next.js, React, TypeScript, and modern API architectures.",
        badge: "FRONTEND",
      },
      {
        num: "02",
        title: "SaaS & Cloud Platforms",
        desc: "Scalable multi-tenant SaaS applications, authentication systems, and database architectures.",
        badge: "BACKEND",
      },
      {
        num: "03",
        title: "AI & Workflow Automation",
        desc: "Integrating intelligent LLM workflows, automated data pipelines, and operational agents.",
        badge: "AI & AUTOMATION",
      },
      {
        num: "04",
        title: "API & System Integrations",
        desc: "Robust REST and GraphQL API development connecting CRMs, payment gateways, and third-party tools.",
        badge: "INTEGRATION",
      },
      {
        num: "05",
        title: "Performance & SEO Optimization",
        desc: "Core Web Vitals optimization, semantic markup, and server-side rendering for top technical scores.",
        badge: "OPTIMIZATION",
      },
      {
        num: "06",
        title: "Cloud Infrastructure & DevOps",
        desc: "Automated CI/CD pipelines, containerization, edge hosting, and production monitoring.",
        badge: "DEVOPS",
      },
    ],
    processTitle: "Development Lifecycle",
    process: [
      {
        num: "01",
        title: "Technical Scoping & Architecture",
        desc: "Defining technology stacks, data models, API contracts, and development milestones.",
      },
      {
        num: "02",
        title: "Agile Development Sprints",
        desc: "Iterative two-week sprints with staging environments and regular code reviews.",
      },
      {
        num: "03",
        title: "Quality Assurance & Performance",
        desc: "Rigorous cross-browser testing, accessibility compliance, and load testing.",
      },
      {
        num: "04",
        title: "Deployment & Monitoring",
        desc: "Production rollout with zero downtime, automated telemetry, and team handover documentation.",
      },
    ],
    fitTitle: "Ideal For",
    fitBody:
      "Businesses needing custom web software, SaaS platforms, internal automation, or a high-performance rebuild of an existing digital product.",
    faqs: [
      {
        q: "Do you build both frontend and backend systems?",
        a: "Yes. We provide full-stack engineering, from interactive frontend interfaces to secure cloud databases and API architectures.",
      },
      {
        q: "What technology stack do you recommend?",
        a: "We specialize in modern TypeScript ecosystems, including Next.js, Node.js, PostgreSQL, Redis, TailwindCSS, and cloud providers like AWS, Vercel, and Cloudflare.",
      },
      {
        q: "How do you handle project handoff and maintenance?",
        a: "We deliver full documentation, clean Git repositories, and offer ongoing technical support or training for your in-house engineers.",
      },
    ],
    ctaLabel: "Discuss Engineering",
    seo: {
      title: "Product Engineering & Software Development — 13 UTOPIA",
      description:
        "Custom web applications, SaaS development, Next.js architecture, and AI integrations built for performance.",
    },
  },
  grow: {
    slug: "grow",
    indexNum: "03 // 03",
    worldTag: "03 // GROWTH & ACQUISITION",
    label: "GROW",
    title: "Data-driven growth systems and digital acquisition.",
    echoTitle: "GROW.",
    heroLead: "Organic search visibility, performance marketing, and conversion optimization.",
    heroBody:
      "We design measurable acquisition strategies and retention funnels that generate qualified demand and deliver sustainable return on investment.",
    manifestoTitle: "Designed for measurable, compounding growth.",
    manifestoBody:
      "Sustainable growth requires more than isolated campaigns. We connect technical SEO, paid acquisition, and conversion optimization into a unified system that compounds revenue.",
    heroImage: "/images/world-grow.jpg",
    accent: "#ffffff",
    proof: [
      { value: "SEO", label: "Organic Search Authority" },
      { value: "CRO", label: "Conversion Optimization" },
      { value: "PPC", label: "Targeted Paid Acquisition" },
      { value: "ROI", label: "Attribution & Reporting" },
    ],
    reasonsTitle: "Why integrated growth systems work",
    reasons: [
      {
        num: "01",
        title: "Sustainable Organic Traffic",
        desc: "Technical SEO and content authority that generate high-intent search traffic without continuous ad spend.",
      },
      {
        num: "02",
        title: "Higher Conversion Rates",
        desc: "Optimized user funnels and landing page testing that convert a higher percentage of existing visitors.",
      },
      {
        num: "03",
        title: "Transparent Attribution",
        desc: "Clear tracking and analytics dashboards linking every marketing initiative directly to pipeline and revenue.",
      },
    ],
    capabilitiesTitle: "Growth Services",
    capabilities: [
      {
        num: "01",
        title: "Search Engine Optimization (SEO)",
        desc: "Technical audits, on-page optimization, content strategy, and authority building for long-term rankings.",
        badge: "SEO",
      },
      {
        num: "02",
        title: "Paid Search & Social (PPC)",
        desc: "Targeted ad campaigns across Google, LinkedIn, and Meta with data-driven budget allocation and testing.",
        badge: "PAID MEDIA",
      },
      {
        num: "03",
        title: "Online Brand & Reputation Management",
        desc: "Search result curation, brand sentiment monitoring, review systems, and executive profile management.",
        badge: "REPUTATION",
      },
      {
        num: "04",
        title: "Email & Customer Lifecycle Marketing",
        desc: "Automated onboarding sequences, lead nurturing funnels, and CRM workflows to maximize retention.",
        badge: "LIFECYCLE",
      },
      {
        num: "05",
        title: "Conversion Rate Optimization (CRO)",
        desc: "A/B testing, user journey mapping, and landing page engineering to increase inquiry and sales rates.",
        badge: "CONVERSION",
      },
      {
        num: "06",
        title: "Analytics & Attribution Dashboards",
        desc: "Multi-touch attribution models, GA4 setups, and executive reporting linking marketing spend to revenue.",
        badge: "ANALYTICS",
      },
    ],
    processTitle: "Growth Framework",
    process: [
      {
        num: "01",
        title: "Audit & Opportunity Analysis",
        desc: "Evaluating current traffic, conversion funnels, competitor benchmarks, and high-impact growth channels.",
      },
      {
        num: "02",
        title: "Strategy & Channel Roadmap",
        desc: "Developing a structured growth roadmap covering SEO, paid acquisition, and conversion testing priorities.",
      },
      {
        num: "03",
        title: "Execution & Testing",
        desc: "Deploying technical optimizations, launching campaigns, and running continuous multivariate experiments.",
      },
      {
        num: "04",
        title: "Scale & Reporting",
        desc: "Scaling winning channels, refining attribution models, and providing transparent monthly ROI reports.",
      },
    ],
    fitTitle: "Ideal For",
    fitBody:
      "Companies with an established product or service ready to scale customer acquisition, improve conversion rates, and build long-term organic authority.",
    faqs: [
      {
        q: "How quickly do growth engagements deliver results?",
        a: "Paid campaigns and CRO improvements deliver measurable data within weeks. Technical SEO and organic authority build steady compounding returns over 3–6 months.",
      },
      {
        q: "Do you integrate with our existing sales and CRM tools?",
        a: "Yes. We integrate directly with your existing CRM, marketing automation, analytics stack, and sales pipeline infrastructure.",
      },
      {
        q: "How do you report on performance?",
        a: "We provide live dashboard access alongside bi-weekly executive summaries focusing on qualified leads, CAC, and pipeline revenue.",
      },
    ],
    ctaLabel: "Plan Growth Strategy",
    seo: {
      title: "Growth Marketing & SEO Services — 13 UTOPIA",
      description:
        "Technical SEO, performance advertising, conversion rate optimization, and reputation management.",
    },
  },
};

export const SERVICE_NAV = [
  { href: "/services", label: "Overview" },
  { href: "/services/create", label: "Create (Design)" },
  { href: "/services/build", label: "Build (Engineering)" },
  { href: "/services/grow", label: "Grow (Marketing)" },
] as const;
