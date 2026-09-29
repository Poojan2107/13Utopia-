/** Shared long-form for leaf pages — working copy until founder/CMS approval */

export const WORLD_NARRATIVE: Record<
  string,
  { lead: string; body: string[]; practices: string[] }
> = {
  create: {
    lead: "Make the idea visible.",
    body: [
      "Brand, design, and digital experiences that make what you do immediately understood and respected.",
      "We design identity systems, interfaces, 3D CGI, and content that hold up under real scrutiny.",
    ],
    practices: [
      "Brand strategy & positioning",
      "Identity & visual systems",
      "Experience & UI/UX",
      "Creative direction",
      "CGI, motion & visual content",
    ],
  },
  build: {
    lead: "Make the idea real.",
    body: [
      "Websites, applications, and automation systems that perform from day one.",
      "We build with clean architecture: stacks you can explain, software you can ship, and systems your team can actually operate.",
    ],
    practices: [
      "Digital products & platforms",
      "AI & automation systems",
      "Cloud architecture & engineering",
      "APIs, infrastructure & reliability",
      "Modernization of legacy systems",
    ],
  },
  grow: {
    lead: "Make it matter in the market.",
    body: [
      "Connecting what you build to the people who need it — search, performance, lifecycle, and reputation working as one engine.",
      "No channel theater. Every growth initiative is designed to generate qualified demand and compound over time.",
    ],
    practices: [
      "Performance & paid media",
      "SEO & organic demand",
      "Content systems",
      "Lifecycle & CRM",
      "Brand reputation & social",
    ],
  },
  strategy: {
    lead: "Decide what to build and why.",
    body: [
      "Finding the real constraint before writing a single line of code or designing a screen.",
      "We question the default assumptions, clarify the business outcome, and sequence Create, Build, and Grow into a clear plan.",
    ],
    practices: [
      "Product & opportunity discovery",
      "Digital transformation roadmaps",
      "Technology advisory",
      "Operating model & process design",
      "Executive facilitation",
    ],
  },
};

export const CAPABILITY_NARRATIVE: Record<
  string,
  { approach: string; deliverables: string[]; when: string }
> = {
  "branding-creative": {
    approach:
      "We start with meaning — audience, category, and ambition — then build identity and experience systems that scale across product and growth.",
    deliverables: [
      "Brand strategy & verbal identity",
      "Visual identity & design systems",
      "Web & product experience design",
      "Campaign craft, motion & CGI",
      "Content art direction",
    ],
    when: "New brands, rebrands, launches, and moments when the surface no longer matches the ambition.",
  },
  "digital-products": {
    approach:
      "Product work that ships: discovery, UX, engineering, and iteration in one loop — from MVP to durable platform.",
    deliverables: [
      "Websites & marketing systems",
      "Mobile & web applications",
      "SaaS & internal tools",
      "E-commerce experiences",
      "MVP to scale engineering",
    ],
    when: "When you need software that people actually use — not a prototype that stalls after demo day.",
  },
  "ai-automation": {
    approach:
      "Practical intelligence: agents, workflows, and models wired to real processes — measured by time saved and decisions improved.",
    deliverables: [
      "AI opportunity mapping",
      "Agent & workflow design",
      "Generative systems in product",
      "Process automation",
      "Evaluation & governance basics",
    ],
    when: "When manual work is the bottleneck, or when product needs intelligence without the hype tax.",
  },
  "cloud-engineering": {
    approach:
      "Architecture and delivery that hold: cloud foundations, APIs, DevOps, security posture, and modernization paths you can operate.",
    deliverables: [
      "Cloud architecture",
      "Full-stack engineering",
      "API platforms",
      "DevOps & reliability",
      "Legacy modernization",
    ],
    when: "Scale pressure, fragile stacks, or greenfield systems that must be serious from day one.",
  },
  "growth-marketing": {
    approach:
      "Demand as a system — creative, channels, measurement, and content working together so growth compounds instead of resets every quarter.",
    deliverables: [
      "Performance marketing",
      "SEO & content engines",
      "Social & community",
      "Lead generation systems",
      "Analytics & experimentation",
    ],
    when: "When acquisition is noisy, retention is thin, or brand and performance are fighting each other.",
  },
  "strategy-consulting": {
    approach:
      "We clarify the outcome, stress-test the path, and sequence Create / Build / Grow so investment matches ambition.",
    deliverables: [
      "Discovery sprints",
      "Transformation roadmaps",
      "Product strategy",
      "Technology advisory",
      "Workshop facilitation",
    ],
    when: "Before a large build, during a pivot, or when teams need a shared definition of done.",
  },
};

export const SOLUTION_NARRATIVE: Record<
  string,
  { lead: string; phases: { title: string; body: string }[]; outcome: string }
> = {
  launch: {
    lead: "Bring something new into the world.",
    phases: [
      { title: "Define", body: "Audience, offer, and the single clear reason why someone should care." },
      { title: "Make", body: "Brand identity, web experience, and product surfaces built ready to ship." },
      { title: "Release", body: "Launch campaigns, distribution channels, and analytics to measure what works." },
    ],
    outcome: "A strong first impression and a system you can build on — not a one-week spike.",
  },
  grow: {
    lead: "Turn traction into compounding demand.",
    phases: [
      { title: "Diagnose", body: "Find where interest or conversions are dropping off across your funnel." },
      { title: "Systemize", body: "Align SEO, content, paid media, and email into one consistent rhythm." },
      { title: "Compound", body: "Double down on what converts and cut the activities that only look busy." },
    ],
    outcome: "Predictable, repeatable growth without burning budget or cheapening the brand.",
  },
  scale: {
    lead: "Prepare architecture for 10× volume and complexity.",
    phases: [
      { title: "Audit", body: "Identify technical bottlenecks and points of failure before heavy load hits." },
      { title: "Harden", body: "Engineer reliable cloud infrastructure, fast APIs, and clean data flows." },
      { title: "Accelerate", body: "Establish release pipelines and observability so your team can ship quickly." },
    ],
    outcome: "A foundation that absorbs rapid business growth without breaking.",
  },
  modernize: {
    lead: "Replace fragile legacy systems safely.",
    phases: [
      { title: "Map", body: "Identify what to keep, what to migrate, and what to retire completely." },
      { title: "Migrate", body: "Incremental, step-by-step replacement with zero downtime and rollback safety." },
      { title: "Adopt", body: "Deliver intuitive interfaces and clear documentation so teams actually use the new tools." },
    ],
    outcome: "Modern speed and reliability without the risk of a messy big-bang rewrite.",
  },
  automate: {
    lead: "Eliminate repetitive work with practical AI.",
    phases: [
      { title: "Identify", body: "Pinpoint repetitive, high-cost manual tasks across your business workflows." },
      { title: "Engineer", body: "Deploy purpose-built AI agents, automated integrations, and human review steps." },
      { title: "Optimize", body: "Track speed, accuracy, and hours saved to continuously refine the system." },
    ],
    outcome: "Automation that removes operational friction and frees your team for high-value work.",
  },
  transform: {
    lead: "Align brand, technology, and market momentum.",
    phases: [
      { title: "Orient", body: "Clarify the destination, the constraints, and the gap between where you are and where you need to be." },
      { title: "Assemble", body: "Sequence Create, Build, and Grow into a single, cohesive execution roadmap." },
      { title: "Embed", body: "Set up the metrics, standards, and habits so the new way of working lasts." },
    ],
    outcome: "A business that looks, works, and grows with complete clarity.",
  },
};

export const STORY_PAGES = {
  why: {
    lead: "13 UTOPIA exists to bridge the gap between what businesses currently accept and what they could become.",
    body: [
      "The name holds a deliberate tension: utopia as direction, thirteen as discipline — because imagination without rigorous execution is merely decoration.",
      "Most businesses inherit assumptions: their brand no longer matches their ambition, their technology is fragmented, and their marketing is disconnected from the product.",
      "We built a practice where Create, Build, and Grow share one uncompromising standard. Not three siloed agencies glued together, but one unified collective that refuses default answers and turns unreasonable ambition into operable reality.",
    ],
  },
  vision: {
    lead: "A market where ambitious businesses never settle for the conventional move.",
    body: [
      "We exist to be the creative technology and growth partner that makes unreasonable ideas buildable and commercial momentum inevitable.",
      "Our horizon is clear: empowering organizations to question the obvious, build what does not exist yet, and ship work that feels inevitable in hindsight because the strategic thinking was sharp enough first.",
    ],
  },
  mission: {
    lead: "Help ambitious businesses discover stronger possibilities, build them with engineering rigor, and move them toward measurable market value.",
    body: [
      "Every engagement starts with the outcome rather than a service menu. We question the brief, diagnose the core constraint, and assemble Create, Build, and Grow into one synchronized system.",
      "Our standard in practice: possibility over conformity, craft over volume, systems over one-off heroics, and commercial impact over vanity metrics.",
    ],
  },
};

export const CULTURE_COPY = {
  lead: "Culture is how the work gets done when no one is watching the mood board.",
  principles: [
    { title: "Default is not destiny", body: "Just because something is industry standard does not mean it is optimal. Question the obvious." },
    { title: "Creativity without execution is incomplete", body: "Ideas earn their place when they survive contact with reality and perform in the market." },
    { title: "Technology enables possibility", body: "Technology is not the goal — it is the machinery that makes better ideas operable." },
    { title: "The best work lives between disciplines", body: "Brand informs technology; technology drives growth; growth refines product." },
  ],
  rituals:
    "Weekly peer critiques, discovery rooms, and cross-disciplinary architecture reviews ensure Create, Build, and Grow operate with one shared standard of excellence.",
};

export const CONNECT_COPY = {
  discovery: {
    lead: "A focused conversation before the brief hardens.",
    agenda: [
      "What you are trying to make happen",
      "Constraints — time, stack, market, politics",
      "Where Create / Build / Grow should concentrate",
      "Whether a project, partnership, or pause is the right next step",
    ],
    prep: "Bring the problem, any existing materials, and the decision you need to make in the next 90 days.",
  },
  general: {
    lead: "Press, speaking, and other inquiries.",
    channels: [
      { label: "Projects", href: "/connect/start-a-project", note: "Briefs and RFPs" },
      { label: "Discovery", href: "/connect/discovery", note: "Exploratory conversations" },
      { label: "Partnerships", href: "/connect/partnerships", note: "Agency & technology partners" },
      { label: "Support", href: "/connect/support", note: "Existing clients" },
    ],
  },
  support: {
    lead: "Help for clients and products already in market with us.",
    body: "Open a support thread with your project context. Response expectations are set per engagement — we don’t publish a generic SLA that we can’t keep.",
  },
  partnerships: {
    lead: "We partner when the work gets better for the client.",
    criteria: [
      "Complementary craft — not a duplicate bench",
      "Shared quality bar and communication style",
      "Clear ownership on delivery",
      "Willingness to be measured by outcomes",
    ],
  },
};
