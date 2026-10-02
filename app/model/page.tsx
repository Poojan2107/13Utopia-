import type { Metadata } from "next";
import { ModelViewer } from "./ModelViewer";

export const metadata: Metadata = {
  title: "3D Monolith Artifact Inspector | 13 UTOPIA",
  description: "Interactive 3D architectural monolith viewer with real-time WebGL orbit controls, telemetry shaders, and lighting presets.",
};

export default function ModelPage() {
  return <ModelViewer />;
}
