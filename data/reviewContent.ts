/**
 * 13 UTOPIA // Authenticated Real-World Content Database
 * Scraped and refined from 13utopia.com.
 * Zero AI slop, zero "gods" themes, pure senior engineering & creative standard.
 */

export interface ReviewBlogPost {
  slug: string;
  title: string;
  category: "BRAND & DESIGN" | "ENGINEERING" | "GROWTH SYSTEMS" | "CGI & SPATIAL" | "REPUTATION";
  readTime: string;
  date: string;
  excerpt: string;
  author: {
    name: string;
    role: string;
  };
  content: {
    lead: string;
    sections: Array<{
      heading: string;
      body: string[];
      highlight?: string;
    }>;
  };
}

export const REVIEW_BLOG_POSTS: ReviewBlogPost[] = [
  {
    slug: "why-online-reputation-management-is-essential-for-modern-businesses",
    title: "Why Online Reputation Management Is Essential for Modern Enterprise",
    category: "REPUTATION",
    readTime: "6 MIN READ",
    date: "OCTOBER 2026",
    excerpt:
      "Your search graph and public sentiment are your most valuable balance sheet assets. How sovereign entities manage digital footprint, PR defense, and organic search sentiment.",
    author: {
      name: "13 Utopia Intelligence",
      role: "Reputation & Brand Protection Practice",
    },
    content: {
      lead:
        "In modern commerce, prospective buyers and partners research your entity before the first executive handshake. Unmanaged search anomalies, outdated press mentions, or malicious reviews directly degrade conversion velocity and commercial valuation.",
      sections: [
        {
          heading: "The Anatomy of Digital Perception",
          body: [
            "Online Reputation Management (ORM) is not merely reactive crisis cleanup — it is the continuous engineering of sovereign brand authority across search engine result pages (SERPs), knowledge panels, and social feeds.",
            "When high-intent stakeholders Google your brand name or executive leadership, the top 10 search results must represent accurate, high-authority sentiment. Disjointed narratives erode trust immediately.",
          ],
          highlight:
            "Reputation is not what you claim about your brand; it is the algorithmic consensus returned when someone searches your name in private.",
        },
        {
          heading: "Strategic Levers of Proactive ORM",
          body: [
            "1. Search Engine Dominance: Engineering authoritative tier-1 assets (case studies, press releases, thought leadership) that rank for high-intent branded search keywords.",
            "2. Review Ecosystem Governance: Establishing automated customer feedback loops on verified platforms to ensure authentic positive sentiment compounds steadily over time.",
            "3. Digital Crisis Shielding: Implementing algorithmic monitoring to catch negative sentiment surges or PR crises before they permeate organic search indexes.",
          ],
        },
        {
          heading: "Compounding Brand Valuation",
          body: [
            "Enterprises with verified 4.8+ ratings and immaculate first-page search authority experience up to a 34% higher inbound close rate compared to competitors with unmonitored digital footprints.",
            "ORM turns your digital footprint from an uncontrollable liability into a permanent commercial moat.",
          ],
        },
      ],
    },
  },
  {
    slug: "the-future-of-advertising-why-brands-are-turning-to-cgi",
    title: "The Future of Advertising: Why Brands Are Turning to CGI & Spatial 3D",
    category: "CGI & SPATIAL",
    readTime: "7 MIN READ",
    date: "OCTOBER 2026",
    excerpt:
      "Traditional video production has reached structural limits in cost and visual velocity. Why world-class brands are turning to hyper-realistic CGI and 3D spatial commercials.",
    author: {
      name: "13 Utopia Spatial Lab",
      role: "3D Art Direction & Motion Design",
    },
    content: {
      lead:
        "The constraints of physical soundstages, weather logistics, and physical filming limitations are being superseded by photorealistic 3D CGI pipelines. Computer-generated imagery allows brands to visualize impossible physical spectacles with pinpoint lighting and physics precision.",
      sections: [
        {
          heading: "Beyond the Limitations of Physical Production",
          body: [
            "Physical filming requires studio rentals, lighting crews, physical talent, and rigid timelines. If a product packaging changes after shooting, the entire shoot is obsolete.",
            "With custom CGI production pipelines, 3D asset geometries and photorealistic lighting rigs are modular. Changes in scale, lighting mood, colorways, or product revisions can be re-rendered in hours without logistical overhead.",
          ],
          highlight:
            "CGI enables visual narratives that gravity and physical soundstages cannot accommodate.",
        },
        {
          heading: "Visual Disruption on Social & Digital Feeds",
          body: [
            "Surreal 'Out-of-Home' (FOOH) 3D CGI campaigns — such as giant products interacting with landmark cityscapes — regularly achieve 10x higher organic shareability compared to conventional video ads.",
            "Audiences stop scrolling when the boundary between physical reality and cinematic digital art becomes indistinguishable.",
          ],
        },
        {
          heading: "Spatial Computing and Multi-Platform Longevity",
          body: [
            "Assets modeled in 3D (Houdini, Cinema 4D, Blender, Unreal Engine) do not end their life cycle as a flat MP4 video. They export directly into interactive real-time WebGL models, AR product previews, and spatial computing environments.",
          ],
        },
      ],
    },
  },
  {
    slug: "the-role-of-email-marketing-in-building-lasting-customer-relationships",
    title: "The Role of Email Marketing in Compounding Customer Lifetime Value",
    category: "GROWTH SYSTEMS",
    readTime: "5 MIN READ",
    date: "OCTOBER 2026",
    excerpt:
      "Paid ads purchase the first transaction; owned email architectures drive lifetime compounding revenue. Building high-retention lifecycle automation.",
    author: {
      name: "13 Utopia Growth Team",
      role: "Retention & Lifecycle Engineering",
    },
    content: {
      lead:
        "While advertising acquisition costs (CAC) continue to rise across paid ad platforms, email marketing remains the highest ROI owned asset in digital business, routinely delivering $36 to $42 return for every dollar invested.",
      sections: [
        {
          heading: "The Shift from Blast Newsletters to Event-Driven Sequences",
          body: [
            "Generic batch-and-blast newsletters yield declining open rates and customer fatigue. Modern email engineering relies on behavioral triggers and real-time event segmentation.",
            "When communications adapt to user actions — onboarding stage, browse abandonment, feature adoption, repurchase milestones — open rates routinely exceed 45%.",
          ],
          highlight:
            "The goal of email is not to send more volume, but to deliver the exact right insight at the precise moment of intent.",
        },
        {
          heading: "Core Lifecycle Automation Pillars",
          body: [
            "1. Value-First Onboarding: Educating new customers on product mastery during the critical first 72 hours.",
            "2. Predictive Replenishment & Re-engagement: Triggering tailored replenishment sequences based on historical consumption cycles.",
            "3. VIP & Loyalty Mechanics: Providing exclusive product access and insider editorial content to high-LTV cohorts.",
          ],
        },
      ],
    },
  },
  {
    slug: "interactive-web-design-creating-engaging-digital-experiences-for-modern-users",
    title: "Interactive Web Design: Engineering Fluid Digital Experiences for Modern Users",
    category: "ENGINEERING",
    readTime: "8 MIN READ",
    date: "OCTOBER 2026",
    excerpt:
      "Static web brochures no longer hold consumer attention. How WebGL, real-time physics, and micro-interactions turn websites into interactive category monuments.",
    author: {
      name: "13 Utopia Engineering",
      role: "Creative Technology & Spatial Web",
    },
    content: {
      lead:
        "Modern web users expect interfaces that feel alive, responsive, and tactile. Moving beyond standard template grids, interactive web design leverages GPU acceleration, smooth momentum physics, and curated typography to produce unforgettable digital experiences.",
      sections: [
        {
          heading: "Performance-First Interactive Architecture",
          body: [
            "Great interactivity never compromises performance. Using Next.js Server Components for layout structure combined with lightweight Three.js and custom GLSL shaders ensures sub-second initial loads and 60 FPS fluidity.",
            "By offloading visual processing to WebGL shaders, client memory footprint remains minimal while delivering rich cinematic depth.",
          ],
          highlight:
            "Interaction is not decorative ornament; it is the visceral proof of a brand's engineering excellence.",
        },
        {
          heading: "Micro-Interactions as Conversion Drivers",
          body: [
            "Subtle magnetic button pulls, progressive typography disclosure, and kinetic cursor tracking guide user gaze directly toward key commercial calls-to-action.",
            "When an interface responds with zero lag to touch and cursor movement, bounce rates drop and average session durations climb dramatically.",
          ],
        },
      ],
    },
  },
  {
    slug: "innovative-brand-design-shaping-the-future-of-modern-branding",
    title: "Innovative Brand Design: Shaping the Future of Modern Brand Systems",
    category: "BRAND & DESIGN",
    readTime: "7 MIN READ",
    date: "OCTOBER 2026",
    excerpt:
      "A logo is not a brand system. How first-principles visual identity, spatial typography, and unified motion design establish unassailable category leadership.",
    author: {
      name: "13 Utopia Creative Direction",
      role: "Brand Strategy & Visual Systems",
    },
    content: {
      lead:
        "In a market flooded with templated brands and homogeneous corporate design, true visual distinction is a rare commercial moat. Innovative brand design treats identity as a living, dynamic system across physical, digital, and spatial surfaces.",
      sections: [
        {
          heading: "The Death of Static Brand Guidelines",
          body: [
            "Traditional 100-page PDF brand manuals that dictate static logo placements are obsolete in interactive media.",
            "Modern brand design defines motion curves, shader materials, kinetic typography rules, audio signatures, and interactive physics parameters.",
          ],
          highlight:
            "A brand is a coherent system of behavior across every digital touchpoint.",
        },
        {
          heading: "The Aesthetic Economics of Category Dominance",
          body: [
            "Consumers intuitively associate visual sophistication with product quality. Category leaders don't blend in; they establish unreasonable aesthetic standards that force competitors to look outdated.",
          ],
        },
      ],
    },
  },
  {
    slug: "local-seo-services-driving-visibility-for-local-businesses",
    title: "Local SEO Architecture: Driving Measurable Authority for High-Intent Growth",
    category: "GROWTH SYSTEMS",
    readTime: "6 MIN READ",
    date: "OCTOBER 2026",
    excerpt:
      "Ranking for high-intent local search queries requires technical schema, localized entity authority, and citation velocity. Engineering predictable local market capture.",
    author: {
      name: "13 Utopia Search Practice",
      role: "Technical SEO & Entity Graph",
    },
    content: {
      lead:
        "When prospective clients search for specialized commercial services in their region, 78% of local mobile searches result in offline or online transactions within 24 hours. Local SEO is the pipeline engine that captures this high-intent demand.",
      sections: [
        {
          heading: "Technical Entity & Schema Architecture",
          body: [
            "Local ranking is no longer about keyword stuffing in footer text. Google evaluates entity relationships, structured JSON-LD LocalBusiness schemas, and consistent geo-coordinate validation across international registries.",
            "Clean technical site architecture combined with fast Core Web Vitals guarantees priority crawling and Map Pack prominence.",
          ],
          highlight:
            "Local search captures prospects at the exact instant their commercial intent is highest.",
        },
      ],
    },
  },
  {
    slug: "seo-services-proven-strategy-predictable-results",
    title: "Enterprise SEO Systems: Proven Architecture, Compounding Organic Results",
    category: "GROWTH SYSTEMS",
    readTime: "9 MIN READ",
    date: "OCTOBER 2026",
    excerpt:
      "Search engine algorithms reward technical performance, semantic depth, and domain authority. How to engineer an organic pipeline that compounds month over month.",
    author: {
      name: "13 Utopia Search Practice",
      role: "SEO Architecture Lead",
    },
    content: {
      lead:
        "Paid advertising stops delivering the moment ad spend pauses. Enterprise SEO transforms your digital presence into a capital asset that compounds in traffic and revenue year after year without ongoing ad tax.",
      sections: [
        {
          heading: "The Three Pillars of Organic Compounding",
          body: [
            "1. Technical Cleanliness: Flawless crawlability, sub-500ms server response times, optimized canonical hierarchies, and automated XML sitemap streaming.",
            "2. Semantic Depth & Content Hubs: Comprehensive topic clusters that answer high-intent buyer inquiries thoroughly, establishing undeniable topical authority.",
            "3. Authoritative Link Equity: High-tier editorial backlinks from established industry publications and press institutions.",
          ],
          highlight:
            "SEO is software engineering applied to market discovery.",
        },
      ],
    },
  },
  {
    slug: "e-commerce-website-development-building-smarter-online-stores",
    title: "Modern E-Commerce Architecture: Engineering High-Converting Digital Stores",
    category: "ENGINEERING",
    readTime: "8 MIN READ",
    date: "OCTOBER 2026",
    excerpt:
      "Monolithic e-commerce platforms struggle with page speed and custom checkout workflows. Headless e-commerce architectures for scale, speed, and conversion.",
    author: {
      name: "13 Utopia Product Engineering",
      role: "Full-Stack Commerce Practice",
    },
    content: {
      lead:
        "Every 100ms improvement in e-commerce page load speed increases checkout conversion rates by up to 8.4%. Modern online stores must combine instantaneous responsiveness with bespoke shopping experiences.",
      sections: [
        {
          heading: "The Headless Commerce Advantage",
          body: [
            "By decoupling the frontend presentation layer (Next.js, Edge CDN caching) from backend inventory and payment processing engines, brands achieve sub-second page transitions, dynamic currency localization, and frictionless custom checkouts.",
          ],
          highlight:
            "Speed is the single greatest multiplier in e-commerce conversion rate optimization.",
        },
      ],
    },
  },
];

export interface ReviewService {
  slug: string;
  world: "create" | "build" | "grow";
  worldTag: string;
  indexNum: string;
  label: string;
  title: string;
  tagline: string;
  overview: string;
  deliverables: Array<{
    title: string;
    description: string;
  }>;
  benefits: Array<{
    heading: string;
    detail: string;
  }>;
  techStack: string[];
}

export const REVIEW_SERVICES: ReviewService[] = [
  {
    slug: "search-engine-optimization",
    world: "grow",
    worldTag: "GROW // DISCIPLINE 01",
    indexNum: "01",
    label: "SEO Systems",
    title: "Search Engine Optimization & Technical Entity Authority",
    tagline: "Dominate search indexes and capture high-intent organic demand with proven engineering.",
    overview:
      "We engineer technical SEO foundations, semantic topic clusters, and authoritative digital PR pipelines that secure sustainable #1 rankings on Google without disposable shortcuts.",
    deliverables: [
      {
        title: "Technical SEO & Schema Architecture",
        description: "Full crawl optimization, Core Web Vitals acceleration, structured JSON-LD entity graph, and sitemap streaming.",
      },
      {
        title: "High-Intent Keyword & Semantic Mapping",
        description: "Comprehensive competitive search gap analysis, transactional intent targeting, and topical authority clusters.",
      },
      {
        title: "Authoritative Link Acquisition & Digital PR",
        description: "Editorial backlink engineering from high-DR domain authorities to build sovereign ranking trust.",
      },
      {
        title: "Local & Map Pack Dominance",
        description: "Multi-location citation optimization, geo-targeted landing architectures, and review ecosystem management.",
      },
    ],
    benefits: [
      {
        heading: "Compounding Organic Traffic",
        detail: "Grow sustainable inbound pipeline that continues producing qualified leads without recurring pay-per-click costs.",
      },
      {
        heading: "Category Authority",
        detail: "Establish top search visibility for your brand's core offerings across global and localized market queries.",
      },
      {
        heading: "Conversion Rate Alignment",
        detail: "Align landing page UX and transactional messaging to turn search visitors into paying customers immediately.",
      },
    ],
    techStack: ["Technical Schema (JSON-LD)", "Ahrefs / SEMrush Intelligence", "Next.js Static ISR", "Google Search Console API", "Core Web Vitals Engine"],
  },
  {
    slug: "web-development",
    world: "build",
    worldTag: "BUILD // DISCIPLINE 02",
    indexNum: "02",
    label: "Web Engineering",
    title: "Full-Stack Web Development & High-Performance SaaS",
    tagline: "Custom-coded digital products and web applications engineered from first principles.",
    overview:
      "Zero templates, zero disposable themes. We design and build bespoke full-stack web applications, headless commerce systems, and SaaS platforms engineered for extreme velocity, security, and scale.",
    deliverables: [
      {
        title: "Bespoke Web Applications & SaaS",
        description: "Full-stack React/Next.js architectures, modular microservices, REST/GraphQL APIs, and Postgres/Redis database layers.",
      },
      {
        title: "Headless E-Commerce Platforms",
        description: "Sub-second shopping experiences, custom checkout flows, ERP/CRM integrations, and multi-currency global billing.",
      },
      {
        title: "Interactive WebGL & 3D Spatial Interfaces",
        description: "GPU-accelerated Three.js canvas components, custom shaders, and kinetic micro-interactions.",
      },
      {
        title: "Resilient Cloud Infrastructure & DevOps",
        description: "Automated CI/CD pipelines, Dockerized container deployments, edge caching, and 99.99% uptime SLAs.",
      },
    ],
    benefits: [
      {
        heading: "Sub-Second Speed",
        detail: "Edge-cached architectures delivering instant page loads and 100/100 Google Lighthouse performance scores.",
      },
      {
        heading: "Complete Code Sovereignty",
        detail: "100% proprietary client ownership with zero recurring third-party framework lock-in or theme constraints.",
      },
      {
        heading: "Architectural Scalability",
        detail: "Modular codebases built to effortlessly handle spikes from tens of thousands to millions of concurrent users.",
      },
    ],
    techStack: ["Next.js App Router", "TypeScript", "Tailwind / Vanilla CSS", "Node.js / Python FastAPI", "PostgreSQL", "Three.js / WebGL", "Docker / AWS / Cloudflare"],
  },
  {
    slug: "cgi-videos",
    world: "create",
    worldTag: "CREATE // DISCIPLINE 03",
    indexNum: "03",
    label: "CGI & 3D Visuals",
    title: "Cinematic CGI, 3D Commercials & Spatial Motion Design",
    tagline: "Spectacular 3D visual storytelling that breaks digital feeds and defines brand prestige.",
    overview:
      "We engineer photorealistic 3D CGI product commercials, surreal FOOH (Fake Out-of-Home) spatial campaigns, and cinematic brand animations that captivate audiences and elevate brand positioning.",
    deliverables: [
      {
        title: "3D Product Commercials & Films",
        description: "Photorealistic product modeling, cinematic lighting, fluid simulation, and broadcast-quality audio design.",
      },
      {
        title: "Surreal FOOH Spatial Campaigns",
        description: "Viral 3D visual illusions blending real-world footage with hyper-realistic CGI spectacles for social amplification.",
      },
      {
        title: "Interactive 3D WebGL Assets",
        description: "Real-time 3D models optimized for interactive browser manipulation, AR previews, and spatial interfaces.",
      },
      {
        title: "Brand Motion Identity & Title Sequences",
        description: "Custom motion theory, animated brand emblems, and dynamic kinetic typography packages.",
      },
    ],
    benefits: [
      {
        heading: "Unmatched Visual Impact",
        detail: "Create impossible visual spectacles that command 10x higher attention and engagement across digital channels.",
      },
      {
        heading: "Zero Physical Production Friction",
        detail: "Eliminate soundstage rentals, weather delays, and talent logistics with flexible modular 3D scenes.",
      },
      {
        heading: "Cross-Platform Asset Reusability",
        detail: "One 3D master asset feeds video ads, website WebGL models, AR try-ons, and high-resolution print campaigns.",
      },
    ],
    techStack: ["Blender / Cinema 4D", "Houdini FX", "Unreal Engine 5", "Three.js WebGL", "After Effects", "Octane / Redshift"],
  },
  {
    slug: "digital-marketing",
    world: "grow",
    worldTag: "GROW // DISCIPLINE 04",
    indexNum: "04",
    label: "Paid Acquisition",
    title: "Performance Marketing, Paid Ads & Conversion Engineering",
    tagline: "Multi-channel paid acquisition engines optimized for scalable customer acquisition and ROAS.",
    overview:
      "We design, manage, and scale high-performance paid ad campaigns across Google Search, YouTube, Meta, and LinkedIn with algorithmic audience testing and rigorous conversion rate optimization.",
    deliverables: [
      {
        title: "Google & Search PPC Campaigns",
        description: "High-intent search keyword architecture, smart bidding management, and negative match filtering.",
      },
      {
        title: "Meta & YouTube Video Acquisition",
        description: "Creative ad iteration, hook testing, lookalike modeling, and full-funnel retargeting strategies.",
      },
      {
        title: "Conversion Rate Optimization (CRO)",
        description: "A/B split testing, bespoke landing page design, heat-map user analysis, and checkout friction elimination.",
      },
      {
        title: "Attribution Modeling & Pipeline Analytics",
        description: "Multi-touch attribution tracking, server-side tracking (CAPI), and executive ROI dashboards.",
      },
    ],
    benefits: [
      {
        heading: "Predictable ROAS",
        detail: "Data-driven campaign management focused strictly on bottom-line revenue, blended CAC, and customer lifetime value.",
      },
      {
        heading: "Rapid Creative Iteration",
        detail: "Continuous creative testing cycles that identify winning ad hooks and scale winning campaigns rapidly.",
      },
      {
        heading: "Zero Budget Wastage",
        detail: "Tight negative targeting and conversion monitoring that ensures every ad dollar is deployed profitably.",
      },
    ],
    techStack: ["Google Ads Suite", "Meta Ads Manager", "Server-Side CAPI", "PostHog / GA4 Analytics", "Triple Whale / Segment"],
  },
  {
    slug: "online-reputation-management",
    world: "grow",
    worldTag: "GROW // DISCIPLINE 05",
    indexNum: "05",
    label: "ORM & PR Defense",
    title: "Online Reputation Management & Executive Search Defense",
    tagline: "Protect, shape, and master your public search graph and digital brand sentiment.",
    overview:
      "We proactively protect and elevate corporate, brand, and executive search reputation through search sentiment engineering, digital PR defense, review ecosystem management, and Wikipedia/Knowledge Graph governance.",
    deliverables: [
      {
        title: "Search Results & Page 1 Curation",
        description: "Engineering positive tier-1 search assets to push unfavorable mentions down and highlight verified achievements.",
      },
      {
        title: "Executive & Founder Reputation Defense",
        description: "Curating high-authority biographical profiles, press placements, and verified personal branding channels.",
      },
      {
        title: "Review Ecosystem Governance",
        description: "Automated review generation workflows and removal of fraudulent reviews via verified regulatory procedures.",
      },
      {
        title: "Knowledge Panel & Entity Optimization",
        description: "Claiming, verifying, and optimizing official Google Knowledge Panels and Wikidata entity relationships.",
      },
    ],
    benefits: [
      {
        heading: "Trust & Deal Velocity",
        detail: "Ensure prospective partners and investors encounter authoritative, positive sentiment during due diligence.",
      },
      {
        heading: "Crisis Mitigation",
        detail: "Rapid response protocols that neutralize negative press and maintain brand stability during market shifts.",
      },
      {
        heading: "Long-Term Digital Sovereignty",
        detail: "A fortified first page on search engines that acts as a permanent shield against malicious smear campaigns.",
      },
    ],
    techStack: ["SERP Tracking Engines", "Entity Knowledge Graph", "Digital PR Networks", "Automated Sentiment Webhooks"],
  },
  {
    slug: "email-marketing-automation",
    world: "build",
    worldTag: "BUILD // DISCIPLINE 06",
    indexNum: "06",
    label: "Lifecycle & AI",
    title: "Email Marketing, Retention Automation & AI Workflows",
    tagline: "Compounding lifecycle revenue and autonomous AI agent workflows under one standard.",
    overview:
      "We engineer automated lifecycle email sequences, CRM retention engines, and autonomous AI process automations that scale customer lifetime value and eliminate operational bottlenecks.",
    deliverables: [
      {
        title: "Lifecycle Email Sequences",
        description: "Welcome flows, browse/cart recovery, post-purchase onboarding, VIP rewards, and win-back automations.",
      },
      {
        title: "Autonomous AI & Process Workflows",
        description: "Custom AI agent pipelines for customer inquiry triage, automated CRM data enrichment, and content distribution.",
      },
      {
        title: "Audience Segmentation & Cohort Analysis",
        description: "RFM (Recency, Frequency, Monetary) clustering and personalized dynamic email content rendering.",
      },
      {
        title: "Deliverability & Domain Health",
        description: "Dedicated IP warming, SPF/DKIM/DMARC authentication, and inbox placement optimization.",
      },
    ],
    benefits: [
      {
        heading: "High-Margin Compounding Revenue",
        detail: "Generate 25% to 40% of total revenue on autopilot through automated owned channel flows with zero ad cost.",
      },
      {
        heading: "Operational Efficiency with AI",
        detail: "Automate repetitive operational tasks with custom LLM orchestrations and autonomous agent pipelines.",
      },
      {
        heading: "Maximum Deliverability",
        detail: "Maintain 99%+ primary inbox placement through pristine sender reputation protocols.",
      },
    ],
    techStack: ["Klaviyo / Customer.io", "Python / FastAPI", "LangGraph / LLM Pipelines", "PostgreSQL", "SendGrid / Amazon SES"],
  },
];
