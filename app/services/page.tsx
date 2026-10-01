import type { Metadata } from "next";
import { ServicesOverview } from "@/components/services";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  seo: {
    title: "Services — CREATE · BUILD · GROW",
    description:
      "Three worlds under one unreasonable standard: brand architecture, digital engineering, and growth systems from 13 UTOPIA.",
  },
  path: "/services",
});

export default function ServicesPage() {
  return <ServicesOverview />;
}
