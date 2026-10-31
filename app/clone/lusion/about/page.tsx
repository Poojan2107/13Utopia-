import type { Metadata } from "next";
import { AboutPage } from "@/components/sites/lusion/AboutPage";

export const metadata: Metadata = {
  title: "Lusion - About Us",
  description:
    "Lusion is a boutique creative production studio with wide range of talents and capabilities for your next project.",
};

export default function Page() {
  return <AboutPage />;
}
