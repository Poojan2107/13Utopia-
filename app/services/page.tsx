import type { Metadata } from "next";
import { ComingSoonScreen } from "@/components/ui/ComingSoonScreen";

export const metadata: Metadata = {
  title: "Services & Capabilities — 13 UTOPIA",
  description: "Bespoke venture architecture, spatial computing, and zero-latency systems.",
};

export default function ServicesPage() {
  return (
    <ComingSoonScreen
      title="CAPABILITIES & SERVICES"
      subtitle="The comprehensive service architecture and technical capability registry are currently being finalized. Experience our 3D Flagship and Work Archive."
    />
  );
}
