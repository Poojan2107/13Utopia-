import { SiteFooter, SiteHeader } from "@/components/layout";
import {
  MagneticCursor,
  PageTransition,
  SmoothScrollProvider,
} from "@/components/motion";

export default function MarketingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SmoothScrollProvider>
      <PageTransition />
      <MagneticCursor />
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main-content">{children}</main>
      <SiteFooter />
    </SmoothScrollProvider>
  );
}
