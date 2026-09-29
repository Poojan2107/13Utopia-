/**
 * 13 UTOPIA Content System & Rules
 *
 * The visual world can be unreal. The language should be real.
 * Brand language creates tension.
 * Practice language creates clarity.
 * Client language creates action.
 */
export const contentPrinciple = {
  visual: "The visual world can be unreal.",
  language: "The language should be real.",
  hierarchy: {
    brand: "Brand language creates tension.",
    practice: "Practice language creates clarity.",
    client: "Client language creates action.",
  },
  tenets: [
    "Never use complexity to make an idea feel intelligent.",
    "Never use abstraction where a concrete statement is stronger.",
    "Never explain a belief after the visual has already communicated it.",
    "Never make every section sound like a manifesto.",
    "The frameworks organize the experience. They don't become the experience.",
    "Possibility × Ambition × Execution = Impact is a rare signature, not a recurring formula.",
    "Let the work carry the weight.",
  ],
  creed: "BE UNREAL. BE UNREASONABLE. MAKE IT WORK.",
} as const;

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
