import { BackgroundLab } from "@/components/review/BackgroundLab";

export const metadata = {
  title: "Awwwards Background Prototypes Lab | 13 Utopia Review",
  description: "Interactive real-time review lab for 5 curated Awwwards-tier WebGL background shaders matching 13 Utopia's signature monochrome atmosphere.",
};

export default function BackgroundReviewPage() {
  return (
    <main style={{ minHeight: "100vh", width: "100vw", overflow: "hidden", background: "#000000" }}>
      {/* Interactive Awwwards Background Prototype Engine & Transparent UI Preview */}
      <BackgroundLab />
    </main>
  );
}
