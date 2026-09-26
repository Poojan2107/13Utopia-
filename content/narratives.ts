/** Shared long-form for leaf pages — working copy until founder/CMS approval */

export const WORLD_NARRATIVE: Record<
  string,
  { lead: string; body: string[]; practices: string[] }
> = {
  create: {
    lead: "How a business is understood before it is sold — and felt before it is explained.",
    body: [
      "Create is the surface people trust first: brand, design, experience, and the stories that make ambition legible.",
      "We treat craft as strategy made visible — identity systems, interfaces, motion, and content that hold under scrutiny.",
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
    lead: "Systems, products, and intelligence that have to work on day one.",
    body: [
      "Build is where ambition becomes operable — products, platforms, automation, and engineering that survive real use.",
      "We design for clarity in the stack: architecture you can explain, interfaces you can ship, operations you can run.",
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
    lead: "Attention turned into momentum — momentum into market.",
    body: [
      "Grow connects what you make to who needs it — demand, content, performance, and reputation as one system.",
      "We refuse channel theater. Every growth move should compound learning, not just spend.",
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
    lead: "The thinking layer that decides what should be done, and why.",
    body: [
      "Strategy sits across Create, Build, and Grow — discovery, prioritization, and the decisions that keep work honest.",
      "We question the obvious brief, define the real problem, then assemble the worlds that solve it.",
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
    lead: "Take something new to market with a coherent brand, product, and demand plan.",
    phases: [
      { title: "Define", body: "Audience, offer, and the minimum story that earns attention." },
      { title: "Make", body: "Identity, experience, and the product surface ready to ship." },
      { title: "Release", body: "Launch narrative, channels, and feedback loops from day one." },
    ],
    outcome: "A credible first impression — and a system you can iterate, not a one-week spike.",
  },
  grow: {
    lead: "Turn early traction into compounding demand.",
    phases: [
      { title: "Diagnose", body: "Where attention leaks — creative, funnel, product, or message." },
      { title: "Systemize", body: "Content, performance, and lifecycle as one operating rhythm." },
      { title: "Scale", body: "Increase what works; cut what only looks busy." },
    ],
    outcome: "Growth you can explain — and repeat — without burning the brand.",
  },
  scale: {
    lead: "Prepare product and platform for the next order of magnitude.",
    phases: [
      { title: "Assess", body: "Architecture, team, and bottlenecks under real load." },
      { title: "Strengthen", body: "Reliability, APIs, and product foundations that unlock speed." },
      { title: "Operate", body: "Cadence for shipping without breaking trust." },
    ],
    outcome: "A stack and product shape that can absorb growth instead of collapsing under it.",
  },
  modernize: {
    lead: "Replace fragile legacy with systems people want to use.",
    phases: [
      { title: "Map", body: "What must stay, what must move, what can retire." },
      { title: "Migrate", body: "Incremental replacement with clear rollback paths." },
      { title: "Adopt", body: "Training, change, and interfaces that stick." },
    ],
    outcome: "Modern capability without a big-bang rewrite that freezes the business.",
  },
  automate: {
    lead: "Remove friction from operations with intelligent workflows.",
    phases: [
      { title: "Find", body: "High-cost, high-volume work that automation can responsibly own." },
      { title: "Design", body: "Human-in-the-loop flows, agents, and integrations." },
      { title: "Measure", body: "Time, quality, and exception rates — then improve." },
    ],
    outcome: "Automation that earns trust — not a bot that creates new tickets.",
  },
  transform: {
    lead: "Align brand, product, and growth around a new operating reality.",
    phases: [
      { title: "Orient", body: "Vision, constraints, and the honest gap to close." },
      { title: "Assemble", body: "Create, Build, and Grow sequenced as one program." },
      { title: "Embed", body: "Governance and rituals so the change survives the launch week." },
    ],
    outcome: "A business that looks, works, and grows differently — on purpose.",
  },
};

export const STORY_PAGES = {
  why: {
    lead: "13 UTOPIA exists to help ambitious businesses move beyond the obvious.",
    body: [
      "The name holds a tension: utopia as direction, thirteen as discipline — a reminder that vision without craft is decoration.",
      "We built a practice where Create, Build, and Grow share one standard. Not three agencies glued together — one collective that refuses default answers.",
      "Founder narrative and personal origin details publish when approved. Until then, the work and the method speak for the why.",
    ],
  },
  vision: {
    lead: "A world where ambitious businesses don’t settle for the expected move.",
    body: [
      "We aim to be the partner that makes unreasonable ambition operable — brand, product, and growth as one continuous practice.",
      "The horizon is clear: more companies shipping work that feels inevitable in hindsight, because the thinking was sharp enough first.",
    ],
  },
  mission: {
    lead: "Help ambitious businesses create, build, and grow what others couldn’t imagine — then make it work.",
    body: [
      "Every engagement starts with the outcome. We question the brief, define the real problem, and assemble the worlds required.",
      "Mission in practice: clarity over theater, craft over volume, systems over one-off heroics.",
    ],
  },
};

export const CULTURE_COPY = {
  lead: "Culture is how the work gets done when no one is watching the mood board.",
  principles: [
    { title: "Question the obvious", body: "Default answers are usually someone else’s leftover strategy." },
    { title: "Make it real", body: "Ideas earn their place when they ship and hold." },
    { title: "Share the standard", body: "Create, Build, and Grow use the same bar for quality." },
    { title: "Stay human", body: "Ambition without respect is just noise with a budget." },
  ],
  rituals:
    "Critiques, discovery rooms, and launch reviews keep the collective honest. Detailed rituals publish with people content.",
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
