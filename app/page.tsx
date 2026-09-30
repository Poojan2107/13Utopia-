import { HomeHero, HeroPreloader } from "@/components/home";
import { SiteHeader } from "@/components/layout";
import {
  AmbientField,
  MagneticCursor,
  SmoothScrollProvider,
} from "@/components/motion";

export default function HomePage() {
  return (
    <SmoothScrollProvider>
      <HeroPreloader />
      <AmbientField />
      <MagneticCursor />
      <div className="marketing-shell">
        <SiteHeader />
        <main
          id="main-content"
          style={{
            width: "100vw",
            height: "100dvh",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <HomeHero />
        </main>
      </div>
    </SmoothScrollProvider>
  );
}
