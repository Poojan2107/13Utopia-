"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "@/styles/framer/SvgScrollSpotlight.module.css";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const SVG_NAMESPACE = "http://www.w3.org/2000/svg";
const TARGET_LABEL = "INITIATE";
const CIPHER_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

export function SvgScrollSpotlight() {
  const containerRef = useRef<HTMLDivElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);
  const [activeStage, setActiveStage] = useState<"create" | "build" | "grow">("create");
  const scrambleIntervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!containerRef.current || !spotlightRef.current) return;

    const ctx = gsap.context(() => {
      const stage = spotlightRef.current;
      if (!stage) return;

      const headers = stage.querySelectorAll<HTMLElement>(`.${styles.spotlightHeader}`);
      const frontHeader = headers[headers.length - 1];
      const frontSvg = frontHeader.querySelector("svg");
      if (!frontSvg) return;

      // Select letter group parts
      const createParts = stage.querySelectorAll(`.${styles.createParts}`);
      const buildParts = stage.querySelectorAll(`.${styles.buildParts}`);
      const growParts = stage.querySelectorAll(`.${styles.growParts}`);

      // The SINGLE continuous shared monolith bar across all 3 words
      const sharedMonolith = frontSvg.querySelector(`.${styles.sharedMonolith}`);
      if (!sharedMonolith) return;

      // Group for rotating and cipher decoding
      let monolithGroup = frontSvg.querySelector<SVGGElement>(`g.${styles.monolithGroup}`);
      if (!monolithGroup) {
        monolithGroup = document.createElementNS(SVG_NAMESPACE, "g") as SVGGElement;
        monolithGroup.setAttribute("class", styles.monolithGroup);
        sharedMonolith.parentNode?.insertBefore(monolithGroup, sharedMonolith);
        monolithGroup.appendChild(sharedMonolith);
        gsap.set(monolithGroup, { transformOrigin: "center center" });
      }

      // Cipher text element inside the monolith
      let labelElement = monolithGroup.querySelector<SVGTextElement>(`text.${styles.iLinkText}`);
      if (!labelElement) {
        labelElement = document.createElementNS(SVG_NAMESPACE, "text") as SVGTextElement;
        labelElement.setAttribute("class", styles.iLinkText);
        labelElement.setAttribute("x", "3500");
        labelElement.setAttribute("y", "875");
        labelElement.setAttribute("transform", "rotate(-90 3500 875)");
        labelElement.textContent = "";
        monolithGroup.appendChild(labelElement);
      }

      let isRevealed = false;

      const scrambleText = (forward: boolean) => {
        if (scrambleIntervalRef.current) clearInterval(scrambleIntervalRef.current);
        let frame = 0;
        const totalFrames = 16;

        scrambleIntervalRef.current = setInterval(() => {
          frame++;
          if (forward) {
            const revealedCount = Math.floor((frame / totalFrames) * TARGET_LABEL.length);
            let result = TARGET_LABEL.slice(0, revealedCount);
            for (let i = revealedCount; i < TARGET_LABEL.length; i++) {
              result += CIPHER_CHARS[Math.floor(Math.random() * CIPHER_CHARS.length)];
            }
            if (labelElement) labelElement.textContent = result;
            if (frame >= totalFrames) {
              if (labelElement) labelElement.textContent = TARGET_LABEL;
              if (scrambleIntervalRef.current) clearInterval(scrambleIntervalRef.current);
            }
          } else {
            const hiddenCount = Math.floor((frame / totalFrames) * TARGET_LABEL.length);
            let result = "";
            for (let i = 0; i < TARGET_LABEL.length - hiddenCount; i++) {
              result += CIPHER_CHARS[Math.floor(Math.random() * CIPHER_CHARS.length)];
            }
            if (labelElement) labelElement.textContent = result;
            if (frame >= totalFrames) {
              if (labelElement) labelElement.textContent = "";
              if (scrambleIntervalRef.current) clearInterval(scrambleIntervalRef.current);
            }
          }
        }, 30);
      };

      const getDimensions = () => {
        const isMobile = window.innerWidth < 1000;
        return {
          slideDistance: isMobile ? 4200 : 2400,
          targetScale: isMobile ? 1.6 : 1.0,
          cascadeShift: isMobile ? 18 : 5,
        };
      };

      let dims = getDimensions();

      // Initial state of letter groups
      gsap.set(createParts, { opacity: 1, x: 0 });
      gsap.set(buildParts, { opacity: 0, x: -180 });
      gsap.set(growParts, { opacity: 0, x: 180 });

      // Monolith starts at CREATE's final E position (x: 5750)
      gsap.set(monolithGroup, { x: 5750, y: 0, rotation: 0, scale: 1 });

      // Master GSAP Continuous Timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: () => `+=${Math.max(4500, window.innerHeight * 4.8)}`,
          scrub: 1.1,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const p = self.progress;
            if (p < 0.33) {
              setActiveStage("create");
            } else if (p < 0.66) {
              setActiveStage("build");
            } else {
              setActiveStage("grow");
            }

            if (p > 0.88 && !isRevealed) {
              isRevealed = true;
              scrambleText(true);
            } else if (p < 0.88 && isRevealed) {
              isRevealed = false;
              scrambleText(false);
            }
          },
        },
      });

      // ─────────────────────────────────────────────────────────────
      // ACT 1: CREATE (Timeline 0.00 -> 0.33)
      // ─────────────────────────────────────────────────────────────
      // Fan out 3D perspective layers for CREATE (0.00 -> 0.18)
      headers.forEach((h, i) => {
        tl.to(
          h,
          {
            scale: 1 - i * 0.075,
            y: i * dims.cascadeShift,
            ease: "none",
            duration: 0.18,
          },
          0
        );
      });

      // Monolith slides seamlessly from CREATE (x: 5750) to BUILD center (x: 3331) (0.18 -> 0.33)
      tl.to(
        monolithGroup,
        {
          x: 3331,
          ease: "power2.inOut",
          duration: 0.15,
        },
        0.18
      );

      // CREATE letters disperse horizontally to the left (0.18 -> 0.30)
      tl.to(
        createParts,
        {
          opacity: 0,
          x: -250,
          ease: "power2.in",
          duration: 0.12,
        },
        0.18
      );

      // BUILD letters assemble and snap onto the persistent monolith (0.24 -> 0.35)
      tl.to(
        buildParts,
        {
          opacity: 1,
          x: 0,
          ease: "power2.out",
          duration: 0.11,
        },
        0.24
      );

      // ─────────────────────────────────────────────────────────────
      // ACT 2: BUILD (Timeline 0.33 -> 0.66)
      // ─────────────────────────────────────────────────────────────
      // Fan out 3D perspective layers for BUILD (0.33 -> 0.48)
      headers.forEach((h, i) => {
        tl.to(
          h,
          {
            scale: 1 - i * 0.075,
            y: i * dims.cascadeShift,
            ease: "none",
            duration: 0.15,
          },
          0.33
        );
      });

      // Monolith slides seamlessly from BUILD center (x: 3331) to GROW R-stem (x: 1650) (0.48 -> 0.63)
      tl.to(
        monolithGroup,
        {
          x: 1650,
          ease: "power2.inOut",
          duration: 0.15,
        },
        0.48
      );

      // BUILD letters disperse outward (0.48 -> 0.60)
      tl.to(
        buildParts,
        {
          opacity: 0,
          x: 250,
          ease: "power2.in",
          duration: 0.12,
        },
        0.48
      );

      // GROW letters assemble onto the persistent monolith (0.54 -> 0.66)
      tl.to(
        growParts,
        {
          opacity: 1,
          x: 0,
          ease: "power2.out",
          duration: 0.12,
        },
        0.54
      );

      // ─────────────────────────────────────────────────────────────
      // ACT 3: GROW & INITIATE CIPHER (Timeline 0.66 -> 1.00)
      // ─────────────────────────────────────────────────────────────
      // Fan out 3D perspective layers for GROW (0.66 -> 0.82)
      headers.forEach((h, i) => {
        tl.to(
          h,
          {
            scale: 1 - i * 0.075,
            y: i * dims.cascadeShift,
            ease: "none",
            duration: 0.16,
          },
          0.66
        );
      });

      // GROW surrounding letters disperse, leaving the monolith alone in center stage (0.80 -> 0.88)
      tl.to(
        growParts,
        {
          opacity: 0,
          x: -150,
          ease: "power2.in",
          duration: 0.08,
        },
        0.80
      );

      // Monolith centers, pivots 90deg, scales and slides down revealing cipher text (0.82 -> 0.94)
      tl.to(
        monolithGroup,
        {
          x: 3331,
          rotation: 90,
          y: dims.slideDistance,
          scale: dims.targetScale,
          ease: "power2.out",
          duration: 0.12,
        },
        0.82
      );

      // Climax hold buffer before unpinning (0.94 -> 1.00)
      tl.to({}, { duration: 0.06 }, 0.94);

      const refreshTimeout = setTimeout(() => {
        ScrollTrigger.refresh();
      }, 500);

      const handleResize = () => {
        dims = getDimensions();
        ScrollTrigger.refresh();
      };

      window.addEventListener("resize", handleResize);

      return () => {
        clearTimeout(refreshTimeout);
        window.removeEventListener("resize", handleResize);
        tl.kill();
        if (scrambleIntervalRef.current) clearInterval(scrambleIntervalRef.current);
      };
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const stageTitles = {
    create: "I. CREATE · AESTHETIC ARCHITECTURE",
    build: "II. BUILD · SYSTEM ENGINEERING",
    grow: "III. GROW · REVENUE ENGINES",
  };

  return (
    <section ref={containerRef} className={styles.scrollWrapper} id="spotlight">
      <div className={styles.stickyContainer}>
        {/* Top Architectural Eyebrow */}
        <div className={styles.topBar}>
          <div className={styles.topBarLeft}>
            <span className={styles.topBarNum}>08</span>
            <span className={styles.topBarSep}>//</span>
            <span className={styles.topBarTitle}>{stageTitles[activeStage]}</span>
          </div>
          <div className={styles.topBarRight}>
            <span className={styles.topBarYear}>2026</span>
          </div>
        </div>

        {/* The 6-Layer Spotlight Container */}
        <div ref={spotlightRef} className={styles.spotlight}>
          {[0, 1, 2, 3, 4, 5].map((idx) => (
            <div key={idx} className={styles.spotlightHeader} style={{ zIndex: 10 + idx }}>
              <svg
                width="7000"
                height="1780"
                viewBox="0 0 7000 1780"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* ── 1. CREATE LETTERS (Assemble / Disperse) ── */}
                <g className={styles.createParts}>
                  {/* C */}
                  <path d="M1250 270H450C380 270 337.5 330 337.5 450V1300C337.5 1420 380 1480 450 1480H1250V1750H350C150 1750 0 1600 0 1400V350C0 150 150 0 350 0H1250V270Z" fill="#0A0A0A" />
                  {/* R */}
                  <path d="M1550 1750V0H2350C2550 0 2700 120 2750 300C2800 480 2750 680 2600 800C2500 880 2380 920 2200 930L2800 1750H2350L1887.5 1000H1887.5V1750H1550ZM1887.5 730H2250C2380 730 2450 670 2450 500C2450 330 2380 270 2250 270H1887.5V730Z" fill="#0A0A0A" />
                  {/* E1 */}
                  <path d="M3050 1750V0H4100V270H3387.5V740H3950V1010H3387.5V1480H4100V1750H3050Z" fill="#0A0A0A" />
                  {/* A */}
                  <path d="M4950 0L5550 1750H5180L5040 1320H4660L4520 1750H4150L4750 0H4950ZM4850 420L4730 1050H4970L4850 420Z" fill="#0A0A0A" />
                  {/* T */}
                  <path d="M5750 0H6800V270H6443.75V1750H6106.25V270H5750V0Z" fill="#0A0A0A" />
                  {/* E2 Horizontal Arms (Stem is the shared monolith) */}
                  <path d="M6087.5 0H6800V270H6087.5V0ZM6087.5 740H6650V1010H6087.5V740ZM6087.5 1480H6800V1750H6087.5V1480Z" fill="#0A0A0A" />
                </g>

                {/* ── 2. BUILD LETTERS (Assemble / Disperse) ── */}
                <g className={styles.buildParts}>
                  {/* B */}
                  <path d="M150 1750V0H867.5C989.167 0 1091.67 19.1667 1175 57.5C1258.33 95.8333 1320.83 149.167 1362.5 217.5C1405.83 284.167 1427.5 361.667 1427.5 450C1427.5 538.333 1408.33 612.5 1370 672.5C1331.67 732.5 1280.83 779.167 1217.5 812.5C1155.83 844.167 1087.5 862.5 1012.5 867.5L1052.5 840C1132.5 843.333 1203.33 865 1265 905C1328.33 943.333 1377.5 995 1412.5 1060C1449.17 1125 1467.5 1195.83 1467.5 1272.5C1467.5 1365.83 1445 1448.33 1400 1520C1355 1591.67 1290 1648.33 1205 1690C1120 1730 1015.83 1750 892.5 1750H150ZM487.5 1475H837.5C929.167 1475 1000 1454.17 1050 1412.5C1100 1370.83 1125 1310.83 1125 1232.5C1125 1154.17 1099.17 1093.33 1047.5 1050C995.833 1005 924.167 982.5 832.5 982.5H487.5V1475ZM487.5 730H812.5C900.833 730 967.5 710 1012.5 670C1059.17 630 1082.5 573.333 1082.5 500C1082.5 428.333 1059.17 372.5 1012.5 332.5C967.5 290.833 900 270 810 270H487.5V730Z" fill="#0A0A0A" />
                  {/* U */}
                  <path d="M2371.74 1780C2243.4 1780 2126.74 1754.17 2021.74 1702.5C1916.74 1650.83 1833.4 1573.33 1771.74 1470C1710.07 1366.67 1679.24 1235 1679.24 1075V0H2016.74V1077.5C2016.74 1164.17 2030.9 1237.5 2059.24 1297.5C2087.57 1355.83 2128.4 1399.17 2181.74 1427.5C2236.74 1455.83 2301.74 1470 2376.74 1470C2453.4 1470 2518.4 1455.83 2571.74 1427.5C2626.74 1399.17 2668.4 1355.83 2696.74 1297.5C2725.07 1237.5 2739.24 1164.17 2739.24 1077.5V0H3076.74V1075C3076.74 1235 3045.07 1366.67 2981.74 1470C2918.4 1573.33 2832.57 1650.83 2724.24 1702.5C2617.57 1754.17 2500.07 1780 2371.74 1780Z" fill="#0A0A0A" />
                  {/* L */}
                  <path d="M3986.82 1750V0H4324.32V1487.5H5091.82V1750H3986.82Z" fill="#0A0A0A" />
                  {/* D */}
                  <path d="M5330.86 1750V0H5915.86C6119.19 0 6286.69 36.6667 6418.36 110C6551.69 181.667 6650.03 283.333 6713.36 415C6778.36 545 6810.86 698.333 6810.86 875C6810.86 1051.67 6778.36 1205.83 6713.36 1337.5C6650.03 1467.5 6552.53 1569.17 6420.86 1642.5C6289.19 1714.17 6120.86 1750 5915.86 1750H5330.86ZM5668.36 1460H5898.36C6041.69 1460 6154.19 1436.67 6235.86 1390C6319.19 1343.33 6378.36 1276.67 6413.36 1190C6448.36 1101.67 6465.86 996.667 6465.86 875C6465.86 751.667 6448.36 646.667 6413.36 560C6378.36 471.667 6319.19 404.167 6235.86 357.5C6154.19 310.833 6041.69 287.5 5898.36 287.5H5668.36V1460Z" fill="#0A0A0A" />
                </g>

                {/* ── 3. GROW LETTERS (Assemble / Disperse) ── */}
                <g className={styles.growParts}>
                  {/* G */}
                  <path d="M1400 270H450C380 270 337.5 330 337.5 450V1300C337.5 1420 380 1480 450 1480H1062.5V1010H750V740H1400V1750H350C150 1750 0 1600 0 1400V350C0 150 150 0 350 0H1400V270Z" fill="#0A0A0A" />
                  {/* R Loop + Leg (Stem is the shared monolith) */}
                  <path d="M1987.5 0H2500C2700 0 2850 120 2900 300C2950 480 2900 680 2750 800C2650 880 2530 920 2350 930L2950 1750H2500L1987.5 1000V0ZM1987.5 730H2400C2530 730 2600 670 2600 500C2600 330 2530 270 2400 270H1987.5V730Z" fill="#0A0A0A" />
                  {/* O */}
                  <path d="M3600 0H4300C4500 0 4650 150 4650 350V1400C4650 1600 4500 1750 4300 1750H3600C3400 1750 3250 1600 3250 1400V350C3250 150 3400 0 3600 0ZM3600 270C3500 270 3450 330 3450 450V1300C3450 1420 3500 1480 3600 1480H4300C4400 1480 4450 1420 4450 1300V450C4450 330 4400 270 4300 270H3600Z" fill="#0A0A0A" />
                  {/* W */}
                  <path d="M4950 0H5280L5550 1250L5800 250H6000L6250 1250L6520 0H6850L6420 1750H6100L5870 700L5640 1750H5320L4950 0Z" fill="#0A0A0A" />
                </g>

                {/* ── 4. THE PERSISTENT MONOLITH PILLAR (Shared Across All 3 Words) ── */}
                {idx === 5 && (
                  <path
                    className={styles.sharedMonolith}
                    d="M0 1750V0H337.5V1750H0Z"
                    fill="#0A0A0A"
                  />
                )}
              </svg>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
