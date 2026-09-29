"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Flip } from "gsap/Flip";
import styles from "@/styles/work/ProofLayoutMorph.module.css";

gsap.registerPlugin(ScrollTrigger, Flip);

// ── Placeholder Case & Morph Datasets with Real Case Study Links ──
const ROW_ITEMS = [
  { img: "/images/proof-morph/6.jpg", size: styles.itemS, tag: "Brand Identity", title: "AURA LUXE", href: "/work/trendy-fashion-hub" },
  { img: "/images/proof-morph/3.jpg", size: styles.itemM, tag: "WebGL Experience", title: "KINESIS LAB", href: "/work/elite-sports-gear" },
  { img: "/images/proof-morph/4.jpg", size: styles.itemL, tag: "E-Commerce", title: "TRENDY COUTURE", href: "/work/trendy-fashion-hub" },
  { img: "/images/proof-morph/1.jpg", size: styles.itemXL, tag: "Next.js Architecture", title: "13 UTOPIA FLAGSHIP", href: "/work/kumar-cotton-textiles" },
  { img: "/images/proof-morph/5.jpg", size: styles.itemL, tag: "Custom AI Platform", title: "SYNAPSE HQ", href: "/work/elite-sports-gear" },
  { img: "/images/proof-morph/2.jpg", size: styles.itemM, tag: "Technical SEO", title: "ELITE PERFORMANCE", href: "/work/elite-sports-gear" },
  { img: "/images/proof-morph/7.jpg", size: styles.itemS, tag: "3D Visual World", title: "NOVA SPATIAL", href: "/work/trendy-fashion-hub" },
];

const MOSAIC_ITEMS = [
  { img: "/images/proof-morph/8.jpg", tag: "System 01", title: "Sub-100ms LCP", href: "/work/elite-sports-gear" },
  { img: "/images/proof-morph/9.jpg", tag: "System 02", title: "Headless Shopify", href: "/work/trendy-fashion-hub" },
  { img: "/images/proof-morph/15.jpg", tag: "System 03", title: "Three.js Canvas", href: "/work/kumar-cotton-textiles" },
  { img: "/images/proof-morph/12.jpg", tag: "System 04", title: "GLSL Shader Engine", href: "/work/elite-sports-gear" },
  { img: "/images/proof-morph/14.jpg", tag: "System 05", title: "Algorithmic Pricing", href: "/work/kumar-cotton-textiles" },
  { img: "/images/proof-morph/10.jpg", tag: "System 06", title: "B2B Order Portal", href: "/work/kumar-cotton-textiles" },
  { img: "/images/proof-morph/13.jpg", tag: "System 07", title: "Dynamic Editorial", href: "/work/trendy-fashion-hub" },
  { img: "/images/proof-morph/11.jpg", tag: "System 08", title: "AI Voice Agent", href: "/work/elite-sports-gear" },
  { img: "/images/proof-morph/16.jpg", tag: "System 09", title: "Global CDN Edge", href: "/work/kumar-cotton-textiles" },
];

const MATRIX_ITEMS = [
  { img: "/images/proof-morph/17.jpg", pos: styles.pos1, client: "VOLT", num: "01", stat: "+310% Rev", href: "/work/elite-sports-gear" },
  { img: "/images/proof-morph/18.jpg", pos: styles.pos2, client: "ORBIT", num: "02", stat: "Top 1 Ranking", href: "/work/elite-sports-gear" },
  { img: "/images/proof-morph/19.jpg", pos: styles.pos3, client: "KUMAR", num: "03", stat: "$14M B2B", href: "/work/kumar-cotton-textiles" },
  { img: "/images/proof-morph/20.jpg", pos: styles.pos4, client: "PRISM", num: "04", stat: "0.2s TTFB", href: "/work/elite-sports-gear" },
  { img: "/images/proof-morph/21.jpg", pos: styles.pos5, client: "NEO", num: "05", stat: "+185% ROAS", href: "/work/trendy-fashion-hub" },
  { img: "/images/proof-morph/22.jpg", pos: styles.pos6, client: "VERTEX", num: "06", stat: "Sub-50ms API", href: "/work/kumar-cotton-textiles" },
  { img: "/images/proof-morph/23.jpg", pos: styles.pos7, client: "SILK", num: "07", stat: "4.8x AOV", href: "/work/trendy-fashion-hub" },
  { img: "/images/proof-morph/24.jpg", pos: styles.pos8, client: "AXIOM", num: "08", stat: "120K MAU", href: "/work/elite-sports-gear" },
  { img: "/images/proof-morph/25.jpg", pos: styles.pos9, client: "CHRONO", num: "09", stat: "Zero Downtime", href: "/work/kumar-cotton-textiles" },
  { img: "/images/proof-morph/26.jpg", pos: styles.pos10, client: "ELITE", num: "10", stat: "+240% Conv", href: "/work/elite-sports-gear" },
  { img: "/images/proof-morph/27.jpg", pos: styles.pos11, client: "FLUX", num: "11", stat: "60 FPS 3D", href: "/work/trendy-fashion-hub" },
  { img: "/images/proof-morph/28.jpg", pos: styles.pos12, client: "LUMEN", num: "12", stat: "Enterprise SEO", href: "/work/elite-sports-gear" },
  { img: "/images/proof-morph/29.jpg", pos: styles.pos13, client: "ECHO", num: "13", stat: "Headless CMS", href: "/work/kumar-cotton-textiles" },
  { img: "/images/proof-morph/30.jpg", pos: styles.pos14, client: "AEON", num: "14", stat: "Custom AI", href: "/work/elite-sports-gear" },
  { img: "/images/proof-morph/31.jpg", pos: styles.pos15, client: "TENSOR", num: "15", stat: "Smart Search", href: "/work/kumar-cotton-textiles" },
  { img: "/images/proof-morph/32.jpg", pos: styles.pos16, client: "UTOPIA", num: "16", stat: "Awwwards SOTD", href: "/work/trendy-fashion-hub" },
];

/**
 * ProofLayoutMorph — Direct 1:1 Architectural Implementation of Awwwards 021
 * "On Scroll Image Layout Animations" featuring GSAP Flip layout morphing,
 * multi-card pinned scrolling, inner image scale zoom, and luxury 13 UTOPIA craft.
 * @see Awwwards_Master_Pack/01 - Scroll Animation/021 - On Scroll Image Layout Animations
 */
export function ProofLayoutMorph() {
  const rootRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      // ── Act 1: Row Gallery Flip Morph ──
      const galleryRow = root.querySelector<HTMLElement>("[data-gallery-row]");
      const wrapRow = root.querySelector<HTMLElement>("[data-wrap-row]");
      if (galleryRow && wrapRow) {
        const rowItems = galleryRow.querySelectorAll(`.${styles.galleryItem}`);
        const caption = galleryRow.querySelector(`.${styles.caption}`);

        galleryRow.classList.add(styles.gallerySwitch);
        const rowTargets = [...Array.from(rowItems), caption].filter(Boolean) as Element[];
        const rowFlipState = Flip.getState(rowTargets, {
          props: "opacity,filter,transform",
        });
        galleryRow.classList.remove(styles.gallerySwitch);

        Flip.to(rowFlipState, {
          ease: "none",
          absoluteOnLeave: true,
          scale: false,
          simple: true,
          scrollTrigger: {
            trigger: galleryRow,
            start: "center center",
            end: "+=220%",
            pin: wrapRow,
            scrub: true,
          },
        });
      }

      // ── Act 2: 9-Tile Breakout Mosaic Flip Morph with Inner Zoom ──
      const galleryMosaic = root.querySelector<HTMLElement>("[data-gallery-mosaic]");
      const wrapMosaic = root.querySelector<HTMLElement>("[data-wrap-mosaic]");
      if (galleryMosaic && wrapMosaic) {
        const mosaicItems = galleryMosaic.querySelectorAll(`.${styles.galleryItem}`);
        const mosaicInners = galleryMosaic.querySelectorAll(`.${styles.galleryItemInner}`);
        const caption = galleryMosaic.querySelector(`.${styles.caption}`);

        galleryMosaic.classList.add(styles.gallerySwitch);
        const mosaicTargets = [...Array.from(mosaicItems), caption].filter(Boolean) as Element[];
        const mosaicFlipState = Flip.getState(mosaicTargets, {
          props: "opacity,filter",
        });
        galleryMosaic.classList.remove(styles.gallerySwitch);

        const mosaicTl = Flip.to(mosaicFlipState, {
          ease: "none",
          scale: true,
          simple: true,
          scrollTrigger: {
            trigger: galleryMosaic,
            start: "center center",
            end: "+=280%",
            pin: wrapMosaic,
            scrub: true,
          },
        });

        if (mosaicInners.length) {
          mosaicTl.fromTo(
            mosaicInners,
            { scale: 1.8 },
            {
              scale: 1,
              ease: "none",
              scrollTrigger: {
                trigger: galleryMosaic,
                start: "center center",
                end: "+=280%",
                scrub: true,
              },
            },
            0,
          );
        }
      }

      // ── Act 3: 16-Plate Matrix Grid Flip Morph ──
      const galleryMatrix = root.querySelector<HTMLElement>("[data-gallery-matrix]");
      const wrapMatrix = root.querySelector<HTMLElement>("[data-wrap-matrix]");
      if (galleryMatrix && wrapMatrix) {
        const matrixItems = galleryMatrix.querySelectorAll(`.${styles.galleryItem}`);
        const caption = galleryMatrix.querySelector(`.${styles.caption}`);

        galleryMatrix.classList.add(styles.gallerySwitch);
        const matrixTargets = [...Array.from(matrixItems), caption].filter(Boolean) as Element[];
        const matrixFlipState = Flip.getState(matrixTargets, {
          props: "opacity,filter",
        });
        galleryMatrix.classList.remove(styles.gallerySwitch);

        Flip.to(matrixFlipState, {
          ease: "none",
          absolute: true,
          scale: false,
          stagger: 0.04,
          scrollTrigger: {
            trigger: galleryMatrix,
            start: "center center",
            end: "+=320%",
            pin: wrapMatrix,
            scrub: true,
          },
        });
      }
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={rootRef} className={styles.root} aria-label="Portfolio Proof Showcase">
      {/* ── Editorial Section Entrance ── */}
      <header className={styles.showcaseHeader}>
        <div className={styles.kickerRow}>
          <span className={styles.kickerDot} aria-hidden="true" />
          <p className={styles.kicker}>05 · Evidence Archive // Awwwards 021 Engine</p>
        </div>

        <h2 className={styles.title}>
          Every project is built to prove what is <span className={styles.titleHighlight}>possible</span>.
        </h2>

        <p className={styles.lead}>
          We don&apos;t just design websites. We engineer high-conversion brand platforms, WebGL sensory worlds, and compounding digital engines. Scroll to explore our portfolio theatre.
        </p>

        <div className={styles.metricsGrid}>
          <div className={styles.metricCard}>
            <span className={styles.metricVal}>+240%</span>
            <span className={styles.metricLabel}>Average Client Conversion Lift</span>
          </div>
          <div className={styles.metricCard}>
            <span className={styles.metricVal}>Sub-100ms</span>
            <span className={styles.metricLabel}>Edge Architecture & Speed</span>
          </div>
          <div className={styles.metricCard}>
            <span className={styles.metricVal}>$14.2M+</span>
            <span className={styles.metricLabel}>Client Revenue Powered</span>
          </div>
          <div className={styles.metricCard}>
            <span className={styles.metricVal}>Top 1%</span>
            <span className={styles.metricLabel}>Visual & Motion Caliber</span>
          </div>
        </div>
      </header>

      {/* ── ACT 1: Converging Staggered Row Morph ── */}
      <div className={styles.actWrapper}>
        <div className={styles.galleryWrap} data-wrap-row>
          <div className={`${styles.gallery} ${styles.galleryRow}`} data-gallery-row>
            {ROW_ITEMS.map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className={`${styles.galleryItem} ${item.size}`}
                style={{ backgroundImage: `url(${item.img})` }}
                data-cursor="view"
                data-magnetic
              >
                <div className={styles.itemMeta}>
                  <span className={styles.itemTag}>{item.tag}</span>
                  <p className={styles.itemTitle}>{item.title}</p>
                </div>
              </Link>
            ))}

            <div className={styles.caption}>
              <p className={styles.captionMantra}>ACT I // CONVERGENCE</p>
              <h3 className={styles.captionTitle}>
                Haute-Couture Brand Craft × Next.js Edge Engineering
              </h3>
              <p className={styles.captionBody}>
                Where artistic taste meets sub-second performance. We sculpt bespoke visual identities that immediately command market authority and set industry benchmarks.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Editorial Interlude 1 ── */}
      <div className={styles.interlude}>
        <div className={styles.interludeMeta}>
          <span className={styles.interludeNum}>ACT II · ARCHITECTURE</span>
          <h3 className={styles.interludeHeading}>The Modular Systems Matrix</h3>
        </div>
        <p className={styles.interludeBody}>
          Behind every stunning visual interface is an ironclad tech stack. We combine Next.js App Router, custom GLSL shaders, headless commerce architectures, and automated intelligence to turn visitors into lifelong brand advocates.
        </p>
      </div>

      {/* ── ACT 2: 9-Tile Breakout Mosaic Morph ── */}
      <div className={styles.actWrapper}>
        <div className={styles.galleryWrap} data-wrap-mosaic>
          <div className={`${styles.gallery} ${styles.galleryGrid}`} data-gallery-mosaic>
            {MOSAIC_ITEMS.map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className={`${styles.galleryItem} ${styles.galleryItemCut}`}
                data-cursor="view"
                data-magnetic
              >
                <div
                  className={styles.galleryItemInner}
                  style={{ backgroundImage: `url(${item.img})` }}
                />
                <div className={styles.itemMeta}>
                  <span className={styles.itemTag}>{item.tag}</span>
                  <p className={styles.itemTitle}>{item.title}</p>
                </div>
              </Link>
            ))}

            <div className={styles.caption}>
              <p className={styles.captionMantra}>ACT II // EXPANSION</p>
              <h3 className={styles.captionTitle}>Engineered for Compounding Growth</h3>
              <p className={styles.captionBody}>
                Every component is crafted with micro-motion precision, responsive pinning, and flawless accessibility to guarantee an unforgettable client impression.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Editorial Interlude 2 ── */}
      <div className={styles.interlude}>
        <div className={styles.interludeMeta}>
          <span className={styles.interludeNum}>ACT III · THE PROOF INDEX</span>
          <h3 className={styles.interludeHeading}>16 Documented Case Studies</h3>
        </div>
        <p className={styles.interludeBody}>
          A comprehensive record of brands transformed across sports, couture fashion, B2B textiles, AI platforms, and luxury e-commerce. Scroll to observe the matrix collapse into order.
        </p>
      </div>

      {/* ── ACT 3: 16-Plate Kinetic Matrix Morph ── */}
      <div className={styles.actWrapper}>
        <div className={styles.galleryWrap} data-wrap-matrix>
          <div className={`${styles.gallery} ${styles.galleryGrid10}`} data-gallery-matrix>
            {MATRIX_ITEMS.map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className={`${styles.galleryItem} ${item.pos}`}
                style={{ backgroundImage: `url(${item.img})` }}
                data-cursor="view"
                data-magnetic
              >
                <div className={styles.itemMeta}>
                  <span className={styles.itemTag}>
                    {item.num} · {item.client}
                  </span>
                  <p className={styles.itemTitle}>{item.stat}</p>
                </div>
              </Link>
            ))}

            <div className={styles.caption}>
              <p className={styles.captionMantra}>ACT III // THE INDEX</p>
              <h3 className={styles.captionTitle}>Ready to build something unforgettable?</h3>
              <p className={styles.captionBody}>
                Let&apos;s create work that redefines your industry and turns your digital presence into your greatest competitive advantage.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Portfolio CTA Floor ── */}
      <div className={styles.showcaseCta}>
        <p className={styles.kicker}>Next Step</p>
        <h3 className={styles.title}>
          Have an ambitious vision? <span className={styles.titleHighlight}>Let&apos;s make it real.</span>
        </h3>
        <Link href="/connect/start-a-project" className={styles.ctaBtn} data-magnetic>
          <span>Start a Project Brief</span>
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}
