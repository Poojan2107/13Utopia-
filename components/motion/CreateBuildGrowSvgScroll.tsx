"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils/cn";
import styles from "@/styles/motion/CreateBuildGrowSvgScroll.module.css";

gsap.registerPlugin(ScrollTrigger);

const SVG_NAMESPACE = "http://www.w3.org/2000/svg";

const PILLARS_DATA = [
  {
    num: "01",
    title: "CREATE",
    discipline: "BRAND · DESIGN · 3D CGI · SENSORY",
    desc: "Haute-couture aesthetics, brand identity, and high-fidelity visual worlds that command attention.",
    href: "/capabilities/create",
    standard: "Top 1% Visual Caliber",
    tags: ["Brand Identity", "Art Direction", "3D & Motion", "Sensory Web"],
  },
  {
    num: "02",
    title: "BUILD",
    discipline: "NEXT.JS · WEBGL · CUSTOM AI · COMMERCE",
    desc: "Sub-100ms digital systems, headless commerce, and custom AI architecture engineered to compound.",
    href: "/capabilities/build",
    standard: "Sub-100ms Response",
    tags: ["Next.js App Router", "WebGL & Three.js", "AI Pipelines", "Headless Scale"],
  },
  {
    num: "03",
    title: "GROW",
    discipline: "SEO · CAMPAIGNS · CONVERSION ENGINES",
    desc: "Turning artistic presence into compounding market demand through rigorous technical marketing.",
    href: "/capabilities/grow",
    standard: "Compounding Growth",
    tags: ["Technical SEO", "Conversion Rate", "Demand Engines", "Market Dominance"],
  },
];

/**
 * Awwwards 069 — Faithful SVG Scroll Animation & Cascading Stack Stage.
 * Direct 1:1 architectural port of Awwwards 069 with 6-layer vector SVG cascade,
 * dislodging rotating letter glyph, and gold illumination.
 * @see Awwwards_Master_Pack/01 - Scroll Animation/069 - SVG Scroll Animation
 */
export function CreateBuildGrowSvgScroll() {
  const rootRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const spotlight = root.querySelector<HTMLElement>(`.${styles.spotlight}`);
    const spotlightHeaders = root.querySelectorAll<HTMLElement>(`.${styles.spotlightHeader}`);
    if (!spotlight || !spotlightHeaders.length) return;

    const frontHeader = spotlightHeaders[spotlightHeaders.length - 1];
    const frontSvg = frontHeader.querySelector("svg");
    if (!frontSvg) return;

    const paths = frontSvg.querySelectorAll("path");
    const letterIPath = paths[2]; // Path 2 is the letter 'I' in 'BUILD'
    if (!letterIPath) return;

    let letterIGroup: SVGGElement | null = null;
    let labelElement: SVGTextElement | null = null;

    try {
      letterIGroup = document.createElementNS(SVG_NAMESPACE, "g");
      letterIPath.parentNode?.insertBefore(letterIGroup, letterIPath);
      letterIGroup.appendChild(letterIPath);
      gsap.set(letterIGroup, { transformOrigin: "center center" });

      const letterIBounds = letterIPath.getBBox();
      const letterICenterX = letterIBounds.x + letterIBounds.width / 2;
      const letterICenterY = letterIBounds.y + letterIBounds.height / 2;

      labelElement = document.createElementNS(SVG_NAMESPACE, "text");
      labelElement.setAttribute("class", styles.iLinkText);
      labelElement.setAttribute("x", String(letterICenterX));
      labelElement.setAttribute("y", String(letterICenterY));
      labelElement.setAttribute("transform", `rotate(-90 ${letterICenterX} ${letterICenterY})`);
      labelElement.textContent = "CREATE · BUILD · GROW";
      letterIGroup.appendChild(labelElement);
    } catch {
      // SVG BBox fallback for SSR/early renders
    }

    const ctx = gsap.context(() => {
      let isMobileViewport = window.innerWidth < 1000;
      let letterISlideDistance = isMobileViewport ? 5000 : 2500;
      let letterITargetScale = isMobileViewport ? 2.2 : 1;
      let cascadeShiftStep = isMobileViewport ? 20 : 6;

      const trigger = ScrollTrigger.create({
        trigger: spotlight,
        start: "top 70%",
        end: "bottom 70%",
        scrub: true,
        onUpdate: (self) => {
          const scrollProgress = self.progress;

          // 1. Cascading stack scale and vertical shift
          const cascadeProgress = Math.min(scrollProgress / 0.5, 1);
          spotlightHeaders.forEach((header, index) => {
            const finalScale = 1 - index * 0.075;
            const scale = 1 + (finalScale - 1) * cascadeProgress;
            const y = index * cascadeShiftStep * cascadeProgress;
            gsap.set(header, { scale, y });
          });

          // 2. Letter I Rotation and Slide
          if (letterIGroup) {
            const letterIProgress = gsap.utils.clamp(0, 1, (scrollProgress - 0.5) / 0.5);
            gsap.set(letterIGroup, {
              rotation: gsap.utils.interpolate(0, 90, letterIProgress),
              y: gsap.utils.interpolate(0, letterISlideDistance, letterIProgress),
              scale: gsap.utils.interpolate(1, letterITargetScale, letterIProgress),
            });
          }
        },
      });

      const onResize = () => {
        isMobileViewport = window.innerWidth < 1000;
        letterISlideDistance = isMobileViewport ? 5000 : 2500;
        letterITargetScale = isMobileViewport ? 2.2 : 1;
        cascadeShiftStep = isMobileViewport ? 20 : 6;
        trigger.refresh();
      };

      window.addEventListener("resize", onResize);
    }, root);

    return () => ctx.revert();
  }, []);

  // 6 Layers of BUILD Vector Path
  const buildSvgPath = (fillColor: string) => (
    <svg
      width="6661"
      height="1780"
      viewBox="0 0 6661 1780"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={styles.svgElement}
    >
      <path
        d="M0 1750V0H717.5C839.167 0 941.667 19.1667 1025 57.5C1108.33 95.8333 1170.83 149.167 1212.5 217.5C1255.83 284.167 1277.5 361.667 1277.5 450C1277.5 538.333 1258.33 612.5 1220 672.5C1181.67 732.5 1130.83 779.167 1067.5 812.5C1005.83 844.167 937.5 862.5 862.5 867.5L902.5 840C982.5 843.333 1053.33 865 1115 905C1178.33 943.333 1227.5 995 1262.5 1060C1299.17 1125 1317.5 1195.83 1317.5 1272.5C1317.5 1365.83 1295 1448.33 1250 1520C1205 1591.67 1140 1648.33 1055 1690C970 1730 865.833 1750 742.5 1750H0ZM337.5 1475H687.5C779.167 1475 850 1454.17 900 1412.5C950 1370.83 975 1310.83 975 1232.5C975 1154.17 949.167 1093.33 897.5 1050C845.833 1005 774.167 982.5 682.5 982.5H337.5V1475ZM337.5 730H662.5C750.833 730 817.5 710 862.5 670C909.167 630 932.5 573.333 932.5 500C932.5 428.333 909.167 372.5 862.5 332.5C817.5 290.833 750 270 660 270H337.5V730Z"
        fill={fillColor}
      />
      <path
        d="M2221.74 1780C2093.4 1780 1976.74 1754.17 1871.74 1702.5C1766.74 1650.83 1683.4 1573.33 1621.74 1470C1560.07 1366.67 1529.24 1235 1529.24 1075V0H1866.74V1077.5C1866.74 1164.17 1880.9 1237.5 1909.24 1297.5C1937.57 1355.83 1978.4 1399.17 2031.74 1427.5C2086.74 1455.83 2151.74 1470 2226.74 1470C2303.4 1470 2368.4 1455.83 2421.74 1427.5C2476.74 1399.17 2518.4 1355.83 2546.74 1297.5C2575.07 1237.5 2589.24 1164.17 2589.24 1077.5V0H2926.74V1075C2926.74 1235 2895.07 1366.67 2831.74 1470C2768.4 1573.33 2682.57 1650.83 2574.24 1702.5C2467.57 1754.17 2350.07 1780 2221.74 1780Z"
        fill={fillColor}
      />
      <path d="M3205.66 1750V0H3543.16V1750H3205.66Z" fill={fillColor} />
      <path
        d="M3836.82 1750V0H4174.32V1487.5H4941.82V1750H3836.82Z"
        fill={fillColor}
      />
      <path
        d="M5180.86 1750V0H5765.86C5969.19 0 6136.69 36.6667 6268.36 110C6401.69 181.667 6500.03 283.333 6563.36 415C6628.36 545 6660.86 698.333 6660.86 875C6660.86 1051.67 6628.36 1205.83 6563.36 1337.5C6500.03 1467.5 6402.53 1569.17 6270.86 1642.5C6139.19 1714.17 5970.86 1750 5765.86 1750H5180.86ZM5518.36 1460H5748.36C5891.69 1460 6004.19 1436.67 6085.86 1390C6169.19 1343.33 6228.36 1276.67 6263.36 1190C6298.36 1101.67 6315.86 996.667 6315.86 875C6315.86 751.667 6298.36 646.667 6263.36 560C6228.36 471.667 6169.19 404.167 6085.86 357.5C6004.19 310.833 5891.69 287.5 5748.36 287.5H5518.36V1460Z"
        fill={fillColor}
      />
    </svg>
  );

  return (
    <section ref={rootRef} className={styles.section} aria-label="13 Utopia Spotlight">
      {/* Intro Lead */}
      <div className={styles.intro}>
        <p className={styles.kicker}>The Threefold Matrix</p>
        <h2 className={styles.introHeading}>
          Taste without systems is vanity. Systems without taste are invisible.
        </h2>
      </div>

      {/* Awwwards 069 Spotlight Cascading Section */}
      <div className={styles.spotlight}>
        <div className={styles.spotlightHeader}>{buildSvgPath("#111111")}</div>
        <div className={styles.spotlightHeader}>{buildSvgPath("#1a1712")}</div>
        <div className={styles.spotlightHeader}>{buildSvgPath("#292215")}</div>
        <div className={styles.spotlightHeader}>{buildSvgPath("#47381e")}</div>
        <div className={styles.spotlightHeader}>{buildSvgPath("#7a612e")}</div>
        <div className={styles.spotlightHeader}>{buildSvgPath("#e8c56a")}</div>
      </div>

      {/* 3-Pillar Interactive Practice Cards */}
      <div className={styles.pillarsGrid}>
        {PILLARS_DATA.map((p) => (
          <Link
            key={p.href}
            href={p.href}
            className={styles.pillarCard}
            data-magnetic
          >
            <div className={styles.cardHeader}>
              <span className={styles.cardNum}>{p.num}</span>
              <span className={styles.cardDiscipline}>{p.discipline}</span>
            </div>

            <h3 className={styles.cardTitle}>{p.title}.</h3>
            <p className={styles.cardDesc}>{p.desc}</p>

            <div className={styles.tagsRow}>
              {p.tags.map((t) => (
                <span key={t} className={styles.tagPill}>
                  {t}
                </span>
              ))}
            </div>

            <div className={styles.cardFooter}>
              <span className={styles.standardLabel}>{p.standard}</span>
              <span className={styles.cardArrow} aria-hidden="true">
                Enter {p.title} →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
