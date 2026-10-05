import { BackgroundLab } from "@/components/review/BackgroundLab";

export const metadata = {
  title: "Valeran WebGL Background & Cursor Lab | 13 Utopia Review",
  description: "Pure standalone inspection route for the 1:1 Valeran WebGL volumetric raymarch nebula shader and custom square cursor.",
};

export default function BackgroundReviewPage() {
  return (
    <main style={{ minHeight: "100vh", width: "100vw", overflow: "hidden", background: "#000000" }}>
      {/* Standalone Valeran WebGL Volumetric Raymarch Engine & Director HUD */}
      <BackgroundLab />
    </main>
  );
}
