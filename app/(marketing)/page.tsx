import {
  BrandWorldview,
  CollectivePreview,
  CreateBuildGrow,
  FeaturedWork,
  FinalCTA,
  HomeHero,
  PerspectivePreview,
  ProcessOverview,
  SolutionsOverview,
} from "@/components/home";
import { HorizontalScroll } from "@/components/motion";

/** Homepage — full ecosystem map (wsplan §15 / §32) */
export default function HomePage() {
  return (
    <>
      <HomeHero />
      <div id="main-after-hero">
        <BrandWorldview />
        <CreateBuildGrow />
        <FeaturedWork />

        <HorizontalScroll
          eyebrow="Practice"
          lead="Create. Build. Grow — one continuous motion."
          panels={[
            {
              title: "Create",
              meta: "Brand · Design · Experience",
              href: "/capabilities/create",
              need: "Home horizontal — Create world",
              tone: "create",
            },
            {
              title: "Build",
              meta: "Product · Systems · AI",
              href: "/capabilities/build",
              need: "Home horizontal — Build world",
              tone: "build",
            },
            {
              title: "Grow",
              meta: "Demand · Content · Performance",
              href: "/capabilities/grow",
              need: "Home horizontal — Grow world",
              tone: "grow",
            },
            {
              title: "Strategy",
              meta: "Direction before delivery",
              href: "/capabilities",
              need: "Home horizontal — Strategy",
              tone: "strategy",
            },
            {
              title: "Work",
              meta: "Proof in market",
              href: "/work",
              need: "Home horizontal — Work",
              tone: "warm",
            },
            {
              title: "Connect",
              meta: "Begin the brief",
              href: "/connect/start-a-project",
              need: "Home horizontal — Connect",
              tone: "warm",
            },
          ]}
        />

        <SolutionsOverview />
        <ProcessOverview />
        <PerspectivePreview />
        <CollectivePreview />
        <FinalCTA />
      </div>
    </>
  );
}
