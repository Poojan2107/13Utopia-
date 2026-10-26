import type { Metadata } from "next";
import WorkClientView from "@/components/work-showcase/WorkClientView";

export const metadata: Metadata = {
  title: "Work & Portfolio — 13 UTOPIA",
  description:
    "Curated work index and real-time WebGL portfolio showcase of 13 UTOPIA. Creative technology and design engineering.",
};

export default function WorkPage() {
  return <WorkClientView />;
}


