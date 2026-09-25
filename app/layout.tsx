import type { Metadata } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans, Newsreader, Source_Serif_4 } from "next/font/google";
import { buildMetadata, defaultHomeSeo } from "@/lib/seo";
import { jsonLdScript, organizationSchema, websiteSchema } from "@/lib/schema";
import "./globals.css";
import "../styles/fonts-licensed.css";

/**
 * LOCKED type system (Lab 03):
 * Display — Tiempos Headline territory (Newsreader proxy until licensed .woff2)
 * UI/Body — IBM Plex Sans (restrained grotesk)
 * Mono    — rare technical only
 *
 * Source Serif 4 kept loaded for /type-lab archives only.
 */
const display = Newsreader({
  subsets: ["latin"],
  variable: "--font-display-face",
  display: "swap",
  axes: ["opsz"],
});

/** Archive labs only */
const typeA = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-type-a",
  display: "swap",
  axes: ["opsz"],
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
      className={`${display.variable} ${typeA.variable} ${sans.variable} ${mono.variable}`}
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
