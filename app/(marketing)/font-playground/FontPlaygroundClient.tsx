"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { UtopianBreak } from "@/components/ui/UtopianBreak";
import { cases } from "@/content/cases";
import { METHOD_STEPS } from "@/content/site";
import styles from "@/styles/home/FontPlayground.module.css";

type FontOption = {
  id: string;
  name: string;
  family: string;
  category: string;
  vibe: string;
  fallbackStack: string;
};

const FONT_PRESETS: FontOption[] = [
  {
    id: "molen",
    name: "Molen",
    family: "'Molen', 'Fraunces', serif",
    category: "Flared Art-Nouveau",
    vibe: "Sculpted liquid terminals, haute couture authority, uncompromising craft",
    fallbackStack: "'Fraunces', 'Playfair Display', serif",
  },
  {
    id: "bodoni-moda",
    name: "Bodoni Moda",
    family: "var(--font-didone), 'Bodoni Moda', serif",
    category: "Haute Didone",
    vibe: "High-contrast razor serifs, Italian luxury editorial, timeless stature",
    fallbackStack: "'Bodoni MT', 'Didot', serif",
  },
  {
    id: "playfair",
    name: "Playfair Display",
    family: "'Playfair Display', serif",
    category: "Awwwards Editorial",
    vibe: "Dramatic transitions, cinematic editorial headline strength",
    fallbackStack: "Georgia, serif",
  },
  {
    id: "cinzel-dec",
    name: "Cinzel Decorative",
    family: "'Cinzel Decorative', serif",
    category: "Roman Sculptural",
    vibe: "Monumental chiselled geometry, regal ceremonial presence",
    fallbackStack: "Trajan, serif",
  },
  {
    id: "fraunces",
    name: "Fraunces",
    family: "'Fraunces', serif",
    category: "Organic Flared Serif",
    vibe: "Sensory flared curves, tactile editorial warmth with sharp edges",
    fallbackStack: "serif",
  },
  {
    id: "italiana",
    name: "Italiana",
    family: "'Italiana', serif",
    category: "Milanese Runway",
    vibe: "Ultra-slender Didone proportions, haute horlogerie elegance",
    fallbackStack: "serif",
  },
  {
    id: "syne",
    name: "Syne",
    family: "'Syne', sans-serif",
    category: "Avant-Garde Display",
    vibe: "Brutalist sculptural weight, bold contemporary technological tension",
    fallbackStack: "sans-serif",
  },
  {
    id: "cormorant",
    name: "Cormorant Garamond",
    family: "'Cormorant Garamond', serif",
    category: "Classical Haute",
    vibe: "Extremely delicate hairlines, pure bespoke literary distinction",
    fallbackStack: "Garamond, serif",
  },
  {
    id: "prata",
    name: "Prata",
    family: "'Prata', serif",
    category: "Didone Contrast",
    vibe: "Teardrop terminals, elegant Didot rhythm, luxury poise",
    fallbackStack: "serif",
  },
];

export function FontPlaygroundClient() {
  const [selectedFont, setSelectedFont] = useState<FontOption>(FONT_PRESETS[0]);
  const [customFontName, setCustomFontName] = useState<string | null>(null);
  const [fontWeight, setFontWeight] = useState<number>(400);
  const [letterSpacing, setLetterSpacing] = useState<number>(-0.02);
  const [isItalic, setIsItalic] = useState<boolean>(false);
  const [scale, setScale] = useState<number>(100);
  const [isSticky, setIsSticky] = useState<boolean>(true);
  const [copiedStatus, setCopiedStatus] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Handle custom uploaded font file
  const handleFontUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const fontData = event.target?.result as ArrayBuffer;
      const fontName = `UserFont_${Date.now()}`;
      const fontFace = new FontFace(fontName, fontData);

      fontFace
        .load()
        .then((loadedFace) => {
          document.fonts.add(loadedFace);
          const newOption: FontOption = {
            id: fontName,
            name: file.name.replace(/\.[^/.]+$/, ""),
            family: `'${fontName}', serif`,
            category: "Custom Uploaded Font",
            vibe: "Uploaded font file (.otf/.woff2/.ttf)",
            fallbackStack: "serif",
          };
          setCustomFontName(file.name);
          setSelectedFont(newOption);
        })
        .catch((err) => {
          console.error("Font loading error:", err);
          alert("Could not load font file. Please provide a valid .otf, .ttf, or .woff2 file.");
        });
    };
    reader.readAsArrayBuffer(file);
  };

  const dynamicStyle = {
    "--font-display": selectedFont.family,
    "--font-serif": selectedFont.family,
    "--font-didone": selectedFont.family,
    "--display-weight": fontWeight,
    "--display-tracking": `${letterSpacing}em`,
    "--display-style": isItalic ? "italic" : "normal",
    "--display-scale": `${scale}%`,
  } as React.CSSProperties;

  const copyCSS = () => {
    const cssSnippet = `/* 13 UTOPIA Selected Typography Configuration */
--font-display: ${selectedFont.family};
--tracking-display: ${letterSpacing}em;
font-weight: ${fontWeight};
font-style: ${isItalic ? "italic" : "normal"};`;
    navigator.clipboard.writeText(cssSnippet);
    setCopiedStatus("Copied CSS to clipboard!");
    setTimeout(() => setCopiedStatus(null), 3000);
  };

  return (
    <div className={styles.playgroundRoot} style={dynamicStyle}>
      {/* ── Fixed Floating Control Deck ── */}
      <aside className={`${styles.controlDeck} ${isSticky ? styles.deckSticky : ""}`}>
        <div className={styles.deckInner}>
          <div className={styles.deckHeader}>
            <div className={styles.brandBadge}>
              <span className={styles.goldDot} />
              <span className={styles.deckTitle}>13 UTOPIA · TYPOGRAPHY ARENA</span>
            </div>
            <div className={styles.activeFontInfo}>
              <span className={styles.fontNameBadge}>{selectedFont.name}</span>
              <span className={styles.fontCatBadge}>{selectedFont.category}</span>
            </div>
            <div className={styles.deckActions}>
              <button
                type="button"
                className={styles.uploadBtn}
                onClick={() => fileInputRef.current?.click()}
                title="Upload .otf / .woff2 / .ttf font file"
              >
                Upload Font (.otf/.woff2)
              </button>
              <input
                ref={fileInputRef}
                type="file"
                accept=".otf,.ttf,.woff,.woff2"
                style={{ display: "none" }}
                onChange={handleFontUpload}
              />
              <button type="button" className={styles.copyBtn} onClick={copyCSS}>
                {copiedStatus ?? "Copy CSS"}
              </button>
            </div>
          </div>

          {/* Font Selector Strip */}
          <div className={styles.fontSelectorBar}>
            {FONT_PRESETS.map((font) => (
              <button
                key={font.id}
                type="button"
                className={`${styles.fontBtn} ${
                  selectedFont.id === font.id ? styles.fontBtnActive : ""
                }`}
                onClick={() => setSelectedFont(font)}
              >
                <span className={styles.fontBtnName} style={{ fontFamily: font.family }}>
                  {font.name}
                </span>
                <span className={styles.fontBtnTag}>{font.category}</span>
              </button>
            ))}
          </div>

          {/* Micro Sliders & Switches */}
          <div className={styles.controlsRow}>
            {/* Weight Switcher */}
            <div className={styles.controlGroup}>
              <span className={styles.controlLabel}>Weight: {fontWeight}</span>
              <div className={styles.pillGroup}>
                {[400, 500, 600, 700, 900].map((w) => (
                  <button
                    key={w}
                    type="button"
                    className={`${styles.pillBtn} ${fontWeight === w ? styles.pillBtnActive : ""}`}
                    onClick={() => setFontWeight(w)}
                  >
                    {w}
                  </button>
                ))}
              </div>
            </div>

            {/* Tracking Slider */}
            <div className={styles.controlGroup}>
              <span className={styles.controlLabel}>Tracking: {letterSpacing.toFixed(3)}em</span>
              <input
                type="range"
                min="-0.06"
                max="0.1"
                step="0.005"
                value={letterSpacing}
                onChange={(e) => setLetterSpacing(parseFloat(e.target.value))}
                className={styles.rangeSlider}
              />
            </div>

            {/* Scale Slider */}
            <div className={styles.controlGroup}>
              <span className={styles.controlLabel}>Scale: {scale}%</span>
              <input
                type="range"
                min="80"
                max="135"
                step="2"
                value={scale}
                onChange={(e) => setScale(parseInt(e.target.value, 10))}
                className={styles.rangeSlider}
              />
            </div>

            {/* Italic Toggle */}
            <div className={styles.controlGroup}>
              <button
                type="button"
                className={`${styles.toggleBtn} ${isItalic ? styles.toggleBtnActive : ""}`}
                onClick={() => setIsItalic((v) => !v)}
              >
                <em>Italic Style</em>: {isItalic ? "ON" : "OFF"}
              </button>
            </div>
          </div>
        </div>
      </aside>

      {/* ── FULL HOMEPAGE COPY ARENA ── */}
      <main className={styles.arenaContent}>
        {/* Section 01: Hero Statement */}
        <section className={styles.arenaSection} aria-label="Hero Typography">
          <div className={styles.sectionMeta}>
            <UtopianBreak size="sm" />
            <span>01 · HOMEPAGE HERO STATEMENT</span>
          </div>

          <div className={styles.heroProofGrid}>
            <div className={styles.heroProofCol}>
              <p className={styles.kickerLabel}>CREATE · BUILD · GROW</p>
              <h1 className={styles.heroPrimaryTitle}>
                BE UNREAL<span className={styles.goldPeriod}>.</span>
              </h1>
              <p className={styles.heroDescriptor}>
                We build brands, technology and growth systems for businesses ready to move beyond the obvious.
              </p>
            </div>

            <div className={styles.heroProofCol}>
              <p className={styles.kickerLabel}>MANIFESTO</p>
              <h2 className={styles.heroSecondaryTitle}>
                BE UNREASONABLE<span className={styles.goldPeriod}>.</span>
              </h2>
              <p className={styles.heroDescriptor}>
                Question what exists. Find what could work better. Then build it.
              </p>
            </div>
          </div>
        </section>

        {/* Section 02: Core Worldview Belief */}
        <section className={styles.arenaSection} aria-label="Worldview Belief Typography">
          <div className={styles.sectionMeta}>
            <UtopianBreak size="sm" />
            <span>02 · CENTRAL BELIEF STATEMENT</span>
          </div>

          <div className={styles.statementBox}>
            <h2 className={styles.monumentalStatement}>
              The obvious answer is rarely the only answer.
            </h2>
            <p className={styles.statementBody}>
              Every business inherits assumptions — about its brand, its technology, its customers, and how growth is supposed to work. We question those assumptions first. Then we decide what is worth keeping, what needs to change, and what could exist instead.
            </p>
          </div>
        </section>

        {/* Section 03: Practice Architecture */}
        <section className={styles.arenaSection} aria-label="Practice Architecture">
          <div className={styles.sectionMeta}>
            <UtopianBreak size="sm" />
            <span>03 · THREE WORLDS. ONE PRACTICE.</span>
          </div>

          <div className={styles.practiceTriad}>
            <div className={styles.practiceCard}>
              <span className={styles.practiceNum}>01</span>
              <h3 className={styles.practiceTitle}>CREATE</h3>
              <p className={styles.practiceSub}>Brand · Design · CGI · Experience</p>
              <p className={styles.practiceBody}>Make the idea visible, tangible, and impossible to ignore.</p>
            </div>

            <div className={styles.practiceCard}>
              <span className={styles.practiceNum}>02</span>
              <h3 className={styles.practiceTitle}>BUILD</h3>
              <p className={styles.practiceSub}>Web · Product · Systems · AI</p>
              <p className={styles.practiceBody}>Make the idea real, high-performance, and scalable.</p>
            </div>

            <div className={styles.practiceCard}>
              <span className={styles.practiceNum}>03</span>
              <h3 className={styles.practiceTitle}>GROW</h3>
              <p className={styles.practiceSub}>SEO · Campaigns · Content · Demand</p>
              <p className={styles.practiceBody}>Make the idea compound and dominate category share.</p>
            </div>
          </div>
        </section>

        {/* Section 04: The 13 Creed Equation */}
        <section className={styles.arenaSection} aria-label="The Equation">
          <div className={styles.sectionMeta}>
            <UtopianBreak size="sm" />
            <span>04 · THE OPERATING EQUATION</span>
          </div>

          <div className={styles.creedStage}>
            <h2 className={styles.creedEquation}>
              <span>POSSIBILITY × AMBITION × EXECUTION</span>
              <span className={styles.creedImpact}> = IMPACT.</span>
            </h2>
          </div>
        </section>

        {/* Section 05: Method Moves */}
        <section className={styles.arenaSection} aria-label="Method Moves">
          <div className={styles.sectionMeta}>
            <UtopianBreak size="sm" />
            <span>05 · SIX MOVES. ONE PRACTICE.</span>
          </div>

          <div className={styles.methodGrid}>
            {METHOD_STEPS.map((step) => (
              <div key={step.number} className={styles.methodCard}>
                <span className={styles.methodNum}>{step.number}</span>
                <span className={styles.methodStage}>{step.stage}</span>
                <h4 className={styles.methodName}>{step.name}</h4>
                <p className={styles.methodSummary}>{step.summary}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 06: Fullscreen Menu Preview */}
        <section className={styles.arenaSection} aria-label="Menu Typography Preview">
          <div className={styles.sectionMeta}>
            <UtopianBreak size="sm" />
            <span>06 · 13 SIGNATURE MENU TYPOGRAPHY</span>
          </div>

          <div className={styles.menuSampleGrid}>
            <div className={styles.menuSampleCol}>
              <p className={styles.kickerLabel}>01 · THE PRACTICE INDEX</p>
              <div className={styles.menuLinkList}>
                {["01 Capabilities", "02 Solutions", "03 Work", "04 Perspective", "05 Our Story", "06 Collective"].map((link) => (
                  <div key={link} className={styles.menuLinkRow}>
                    <span className={styles.menuLinkTitle}>{link}</span>
                    <span className={styles.menuLinkArrow}>↗</span>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.menuSampleCol}>
              <p className={styles.kickerLabel}>03 · WORLDVIEW & DIRECT INTAKE</p>
              <h3 className={styles.menuCreed}>
                POSSIBILITY × AMBITION × EXECUTION
                <span className={styles.goldPeriod}> = IMPACT.</span>
              </h3>
              <div className={styles.intakeCardSample}>
                <span className={styles.intakeKicker}>Direct Intake Brief</span>
                <h4 className={styles.intakeTitle}>Start a Project →</h4>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
