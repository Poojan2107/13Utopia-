import type { Metadata } from "next";
import { Bodoni_Moda, IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import { buildMetadata, defaultHomeSeo } from "@/lib/seo";
import { jsonLdScript, organizationSchema, websiteSchema } from "@/lib/schema";
import "./globals.css";

/**
 * Type system:
 * Display — Bodoni Moda (Didone / PURITY-of-NOISE territory)
 * UI/Body — IBM Plex Sans (readable grotesk)
 * Mono    — rare technical only
 */
const didone = Bodoni_Moda({
  subsets: ["latin"],
  variable: "--font-didone",
  display: "swap",
  axes: ["opsz"],
  style: ["normal", "italic"],
});

const sans = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600"],
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono-face",
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = buildMetadata({
  seo: defaultHomeSeo,
  path: "/",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${didone.variable} ${sans.variable} ${mono.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLdScript(organizationSchema())}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLdScript(websiteSchema())}
        />
        {children}
      </body>
    </html>
  );
}
