import { BackgroundLab } from "@/components/review/BackgroundLab";
import { ReviewHeader } from "@/components/review/ReviewHeader";

export const metadata = {
  title: "Background Direction Review Lab | 13 Utopia Staging",
  description: "Interactive visual review lab to inspect and test 5 luxury monochrome background concepts live with the 3D emblem and typography.",
};

export default function BackgroundReviewPage() {
  return (
    <>
      <ReviewHeader />
      <BackgroundLab />
    </>
  );
}
