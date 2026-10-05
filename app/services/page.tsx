import type { Metadata } from "next";
import { ServicesOverview } from "@/components/services";

export const metadata: Metadata = {
  title: "Services & Capabilities — 13 UTOPIA",
  description: "Bespoke venture architecture, product engineering, spatial computing, and growth systems.",
};

export default function ServicesPage() {
  return <ServicesOverview />;
}
