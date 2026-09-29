import { ProofLayoutMorph } from "@/components/work/ProofLayoutMorph";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  seo: {
    title: "Portfolio Proof Theater | 13 UTOPIA",
    description:
      "Interactive proof and motion archive showcasing 13 UTOPIA's visual craft, WebGL shaders, and high-conversion platform architecture.",
  },
  path: "/work/proof",
});

export default function ProofShowcasePage() {
  return (
    <main>
      <ProofLayoutMorph />
    </main>
  );
}
