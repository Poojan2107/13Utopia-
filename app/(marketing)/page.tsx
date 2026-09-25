import {
  BrandWorldview,
  CreateBuildGrow,
  FeaturedWork,
  FinalCTA,
  HomeHero,
  ProcessOverview,
} from "@/components/home";

/** Homepage for team review — focused surface, one visual system */
export default function HomePage() {
  return (
    <>
      <HomeHero />
      <div id="main-after-hero">
        <BrandWorldview />
        <CreateBuildGrow />
        <FeaturedWork />
        <ProcessOverview />
        <FinalCTA />
      </div>
    </>
  );
}
