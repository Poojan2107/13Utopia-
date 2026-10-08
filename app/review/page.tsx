import { SmoothScrollProvider } from "@/components/motion";
import { ReviewStage } from "@/components/review/ReviewStage";

export const metadata = {
  title: "13 Utopia // Review Stage",
  description: "Production review stage mirroring the live homepage atmosphere.",
};

export default function ReviewPage() {
  return (
    <SmoothScrollProvider>
      <ReviewStage />
    </SmoothScrollProvider>
  );
}
