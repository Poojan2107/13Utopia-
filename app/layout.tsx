import type { Metadata } from "next";
import {
  Bodoni_Moda,
  IBM_Plex_Mono,
  IBM_Plex_Sans,
  M_PLUS_Rounded_1c,
} from "next/font/google";
import { buildMetadata, defaultHomeSeo } from "@/lib/seo";
import { jsonLdScript, organizationSchema, websiteSchema } from "@/lib/schema";
import "./globals.css";

/**
 * Type system:
 * Display — Bodoni Moda (Didone / editorial voice)
 * Brand   — M PLUS Rounded 1c (logo-adjacent soft black for mark moments)
 * UI/Body — IBM Plex Sans
 * Mono    — rare technical only
 */
const didone = Bodoni_Moda({
  subsets: ["latin"],
  variable: "--font-didone",
  display: "swap",
  axes: ["opsz"],
  style: ["normal", "italic"],
});

const brand = M_PLUS_Rounded_1c({
  subsets: ["latin"],
  variable: "--font-brand-face",
  display: "swap",
  weight: ["800", "900"],
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
      className={`${didone.variable} ${brand.variable} ${sans.variable} ${mono.variable}`}
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
