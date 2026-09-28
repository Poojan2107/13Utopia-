import { SiteFooter, SiteHeader } from "@/components/layout";
import {
  AmbientField,
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
      <AmbientField />
      <MagneticCursor />
      <PageTransition />
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <div className="marketing-shell">
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
      </div>
    </SmoothScrollProvider>
  );
}
