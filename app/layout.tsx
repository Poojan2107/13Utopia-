import type { Metadata } from "next";
import {
  Bodoni_Moda,
  IBM_Plex_Mono,
  IBM_Plex_Sans,
  M_PLUS_Rounded_1c,
  Pinyon_Script,
  Alex_Brush,
  Playfair_Display,
  Cormorant_Garamond,
} from "next/font/google";
import { buildMetadata, defaultHomeSeo } from "@/lib/seo";
import { jsonLdScript, organizationSchema, websiteSchema } from "@/lib/schema";
import { AmbientField } from "@/components/motion";
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

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
  weight: ["400", "600", "700"],
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

const pinyon = Pinyon_Script({
  subsets: ["latin"],
  variable: "--font-script",
  display: "swap",
  weight: "400",
});

const alexBrush = Alex_Brush({
  subsets: ["latin"],
  variable: "--font-cursive",
  display: "swap",
  weight: "400",
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
      className={`${didone.variable} ${playfair.variable} ${cormorant.variable} ${brand.variable} ${sans.variable} ${mono.variable} ${pinyon.variable} ${alexBrush.variable}`}
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
        {/* Sitewide starfield — pages keep transparent grounds; black hole stays hero-only */}
        <AmbientField showEmblem={false} />
        {children}
      </body>
    </html>
  );
}
