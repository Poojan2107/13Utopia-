import type { Metadata } from "next";
import { StudioMiragePage } from "@/components/sites/studiomirage/StudioMiragePage";

export const metadata: Metadata = {
  title: "Studio Mirage — 3D Experiential Clone",
  description: "Reverse-engineered isolated clone of Studio Mirage.",
};

export default function Page() {
  return <StudioMiragePage />;
}
