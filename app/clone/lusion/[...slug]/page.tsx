import { notFound } from "next/navigation";
import { AboutPage } from "@/components/sites/lusion/AboutPage";
import { LusionPage } from "@/components/sites/lusion/LusionPage";

interface PageProps {
  params: Promise<{
    slug?: string[];
  }>;
}

export default async function CatchAllPage({ params }: PageProps) {
  const { slug } = await params;
  const path = slug?.join("/") || "";

  if (path === "about") {
    return <AboutPage />;
  }

  if (path === "projects" || path === "") {
    return <LusionPage />;
  }

  notFound();
}
