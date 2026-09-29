import type { Metadata } from "next";
import { FontPlaygroundClient } from "./FontPlaygroundClient";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  seo: {
    title: "Typography Arena & Font Playground | 13 UTOPIA",
    description: "Compare Molen, Bodoni Moda, Playfair, Fraunces, and custom display fonts across the complete 13 UTOPIA brand system in real-time.",
  },
  path: "/font-playground",
});

export default function FontPlaygroundPage() {
  return <FontPlaygroundClient />;
}
