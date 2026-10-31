import type { Metadata } from "next";
import { LusionPage } from "@/components/sites/lusion/LusionPage";

export const metadata: Metadata = {
  title: "Lusion — Creative Production Studio",
  description:
    "We create 3D visual storytelling and interactive web experiences that help brands stand out.",
};

export default function Page() {
  return <LusionPage />;
}
