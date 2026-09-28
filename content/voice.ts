/**
 * 13 UTOPIA content voice — internal writing rules.
 * Prefer concrete nouns. Prefer short sentences. Headlines may be poetic;
 * supporting copy must be clear. Make "Be unreal. Be unreasonable." scarce.
 */
export const voiceRules = {
  core: [
    "Intelligent",
    "Direct",
    "Human",
    "Confident",
    "Curious",
    "Editorial",
    "Specific",
  ],
  never: [
    "Corporate",
    "Overly poetic",
    "Generic agency",
    "AI-generated",
    "Motivational",
    "Salesy",
    "Self-important",
    "Over-engineered",
  ],
  blacklist: [
    "practice",
    "echoes",
    "opens",
    "velocity",
    "ambition realized",
    "worldview",
    "compound",
    "signal",
    "shipped evidence",
    "strategic architecture",
    "possibility beyond the familiar brief",
    "systems that hold",
    "create momentum",
    "durable market",
    "unreasonable by design",
    "digital transformation",
    "future-forward",
    "next-generation",
    "cutting-edge",
    "innovative",
    "seamless",
    "impactful",
    "elevate",
    "empower",
    "unlock",
    "reimagine",
    "revolutionize",
    "disrupt",
  ],
  oneLiner:
    "Write like a smart person explaining something important to another smart person — not like a marketing department trying to sound impressive.",
} as const;
