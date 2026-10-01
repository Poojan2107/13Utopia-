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
      const stageCreate = spotlightRef.current?.querySelector<HTMLElement>(`.${styles.stageCreate}`);
      const stageBuild = spotlightRef.current?.querySelector<HTMLElement>(`.${styles.stageBuild}`);
      const stageGrow = spotlightRef.current?.querySelector<HTMLElement>(`.${styles.stageGrow}`);

      const createHeaders = stageCreate?.querySelectorAll<HTMLElement>(`.${styles.spotlightHeader}`);
      const buildHeaders = stageBuild?.querySelectorAll<HTMLElement>(`.${styles.spotlightHeader}`);
      const growHeaders = stageGrow?.querySelectorAll<HTMLElement>(`.${styles.spotlightHeader}`);

      // 1. CREATE animated pillar (stem of final E)
      const frontCreate = createHeaders ? createHeaders[createHeaders.length - 1] : null;
      const frontCreateSvg = frontCreate?.querySelector("svg");
      const createStemPath = frontCreateSvg?.querySelectorAll("path")[5]; // The pillar of final E

      let createStemGroup = frontCreateSvg?.querySelector<SVGGElement>(`g.${styles.createStemGroup}`);
      if (createStemPath && !createStemGroup) {
        createStemGroup = document.createElementNS(SVG_NAMESPACE, "g") as SVGGElement;
        createStemGroup.setAttribute("class", styles.createStemGroup);
        createStemPath.parentNode?.insertBefore(createStemGroup, createStemPath);
        createStemGroup.appendChild(createStemPath);
        gsap.set(createStemGroup, { transformOrigin: "center center" });
      }

      // 2. BUILD animated pillar (letter I)
      const frontBuild = buildHeaders ? buildHeaders[buildHeaders.length - 1] : null;
      const frontBuildSvg = frontBuild?.querySelector("svg");
      const buildIPath = frontBuildSvg?.querySelectorAll("path")[2]; // The I in BUILD

      let buildIGroup = frontBuildSvg?.querySelector<SVGGElement>(`g.${styles.buildIGroup}`);
      if (buildIPath && !buildIGroup) {
        buildIGroup = document.createElementNS(SVG_NAMESPACE, "g") as SVGGElement;
        buildIGroup.setAttribute("class", styles.buildIGroup);
        buildIPath.parentNode?.insertBefore(buildIGroup, buildIPath);
        buildIGroup.appendChild(buildIPath);
        gsap.set(buildIGroup, { transformOrigin: "center center" });
      }

      // 3. GROW animated pillar (stem of R with cipher text)
      const frontGrow = growHeaders ? growHeaders[growHeaders.length - 1] : null;
      const frontGrowSvg = frontGrow?.querySelector("svg");
      const growRPath = frontGrowSvg?.querySelectorAll("path")[1]; // Stem of R in GROW

      let growRGroup = frontGrowSvg?.querySelector<SVGGElement>(`g.${styles.growRGroup}`);
      if (growRPath && !growRGroup) {
        growRGroup = document.createElementNS(SVG_NAMESPACE, "g") as SVGGElement;
        growRGroup.setAttribute("class", styles.growRGroup);
        growRPath.parentNode?.insertBefore(growRGroup, growRPath);
        growRGroup.appendChild(growRPath);
        gsap.set(growRGroup, { transformOrigin: "center center" });
      }

      // Cipher text on the final GROW monolith
      let labelElement: SVGTextElement | null = null;
      if (growRGroup && growRPath) {
        const bounds = growRPath.getBBox();
        const cx = bounds.x + bounds.width / 2;
        const cy = bounds.y + bounds.height / 2;

        labelElement = growRGroup.querySelector<SVGTextElement>(`text.${styles.iLinkText}`);
        if (!labelElement) {
          labelElement = document.createElementNS(SVG_NAMESPACE, "text") as SVGTextElement;
          labelElement.setAttribute("class", styles.iLinkText);
          labelElement.setAttribute("x", `${cx}`);
          labelElement.setAttribute("y", `${cy}`);
          labelElement.setAttribute("transform", `rotate(-90 ${cx} ${cy})`);
          labelElement.textContent = "";
          growRGroup.appendChild(labelElement);
        }
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

      // Master GSAP Timeline across all 3 Continuous Acts
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

            // Scramble trigger on Act 3 climax
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

      // ==========================================
      // ACT 1: CREATE (Timeline: 0.00 -> 0.33)
      // ==========================================
      gsap.set(stageCreate, { opacity: 1, visibility: "visible" });
      gsap.set(stageBuild, { opacity: 0, visibility: "hidden" });
      gsap.set(stageGrow, { opacity: 0, visibility: "hidden" });

      // Fan out CREATE layers (0.00 -> 0.16)
      if (createHeaders) {
        createHeaders.forEach((h, i) => {
          tl.to(
            h,
            {
              scale: 1 - i * 0.075,
              y: i * dims.cascadeShift,
              ease: "none",
              duration: 0.16,
            },
            0
          );
        });
      }

      // Stem of E lifts, rotates 90deg, slides down (0.16 -> 0.28)
      if (createStemGroup) {
        tl.to(
          createStemGroup,
          {
            rotation: 90,
            y: dims.slideDistance,
            scale: dims.targetScale,
            ease: "none",
            duration: 0.12,
          },
          0.16
        );
      }

      // Transition CREATE -> BUILD (0.28 -> 0.33)
      tl.to(stageCreate, { opacity: 0, ease: "power2.inOut", duration: 0.05 }, 0.28);
      tl.set(stageCreate, { visibility: "hidden" }, 0.33);
      tl.set(stageBuild, { visibility: "visible" }, 0.28);
      tl.to(stageBuild, { opacity: 1, ease: "power2.inOut", duration: 0.05 }, 0.28);

      // ==========================================
      // ACT 2: BUILD (Timeline: 0.33 -> 0.66)
      // ==========================================
      // Fan out BUILD layers (0.33 -> 0.48)
      if (buildHeaders) {
        buildHeaders.forEach((h, i) => {
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
      }

      // Letter I rotates 90deg, slides down into next transition (0.48 -> 0.60)
      if (buildIGroup) {
        tl.to(
          buildIGroup,
          {
            rotation: 90,
            y: dims.slideDistance,
            scale: dims.targetScale,
            ease: "none",
            duration: 0.12,
          },
          0.48
        );
      }

      // Transition BUILD -> GROW (0.60 -> 0.66)
      tl.to(stageBuild, { opacity: 0, ease: "power2.inOut", duration: 0.06 }, 0.60);
      tl.set(stageBuild, { visibility: "hidden" }, 0.66);
      tl.set(stageGrow, { visibility: "visible" }, 0.60);
      tl.to(stageGrow, { opacity: 1, ease: "power2.inOut", duration: 0.06 }, 0.60);

      // ==========================================
      // ACT 3: GROW (Timeline: 0.66 -> 1.00)
      // ==========================================
      // Fan out GROW layers (0.66 -> 0.82)
      if (growHeaders) {
        growHeaders.forEach((h, i) => {
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
      }

      // Stem of R rotates 90deg, slides down, reveals cipher (0.82 -> 0.94)
      if (growRGroup) {
        tl.to(
          growRGroup,
          {
            rotation: 90,
            y: dims.slideDistance,
            scale: dims.targetScale,
            ease: "none",
            duration: 0.12,
          },
          0.82
        );
      }

      // Hold climax buffer (0.94 -> 1.00)
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

        {/* The 3 Sequential Spotlight Stages */}
        <div ref={spotlightRef} className={styles.spotlight}>
          {/* ================= STAGE 1: CREATE ================= */}
          <div className={`${styles.stageLayer} ${styles.stageCreate}`}>
            {[0, 1, 2, 3, 4, 5].map((idx) => (
              <div key={`create-${idx}`} className={styles.spotlightHeader} style={{ zIndex: 10 + idx }}>
                <svg width="8300" height="1780" viewBox="0 0 8300 1780" fill="none">
                  {/* C */}
                  <path d="M1250 270H450C380 270 337.5 330 337.5 450V1300C337.5 1420 380 1480 450 1480H1250V1750H350C150 1750 0 1600 0 1400V350C0 150 150 0 350 0H1250V270Z" fill="#2e2e2e" />
                  {/* R */}
                  <path d="M1550 1750V0H2350C2550 0 2700 120 2750 300C2800 480 2750 680 2600 800C2500 880 2380 920 2200 930L2800 1750H2350L1887.5 1000H1887.5V1750H1550ZM1887.5 730H2250C2380 730 2450 670 2450 500C2450 330 2380 270 2250 270H1887.5V730Z" fill="#2e2e2e" />
                  {/* E1 */}
                  <path d="M3100 1750V0H4150V270H3437.5V740H4000V1010H3437.5V1480H4150V1750H3100Z" fill="#2e2e2e" />
                  {/* A */}
                  <path d="M5050 0L5650 1750H5280L5140 1320H4760L4620 1750H4250L4850 0H5050ZM4950 420L4830 1050H5070L4950 420Z" fill="#2e2e2e" />
                  {/* T */}
                  <path d="M5900 0H6950V270H6593.75V1750H6256.25V270H5900V0Z" fill="#2e2e2e" />
                  {/* E2 Stem (Pillar that detaches into I) */}
                  <path d="M7250 1750V0H7587.5V1750H7250Z" fill="#2e2e2e" />
                  {/* E2 Horizontal Bars */}
                  <path d="M7587.5 0H8300V270H7587.5V0ZM7587.5 740H8150V1010H7587.5V740ZM7587.5 1480H8300V1750H7587.5V1480Z" fill="#2e2e2e" />
                </svg>
              </div>
            ))}
          </div>

          {/* ================= STAGE 2: BUILD ================= */}
          <div className={`${styles.stageLayer} ${styles.stageBuild}`}>
            {[0, 1, 2, 3, 4, 5].map((idx) => (
              <div key={`build-${idx}`} className={styles.spotlightHeader} style={{ zIndex: 10 + idx }}>
                <svg width="6661" height="1780" viewBox="0 0 6661 1780" fill="none">
                  {/* B */}
                  <path d="M0 1750V0H717.5C839.167 0 941.667 19.1667 1025 57.5C1108.33 95.8333 1170.83 149.167 1212.5 217.5C1255.83 284.167 1277.5 361.667 1277.5 450C1277.5 538.333 1258.33 612.5 1220 672.5C1181.67 732.5 1130.83 779.167 1067.5 812.5C1005.83 844.167 937.5 862.5 862.5 867.5L902.5 840C982.5 843.333 1053.33 865 1115 905C1178.33 943.333 1227.5 995 1262.5 1060C1299.17 1125 1317.5 1195.83 1317.5 1272.5C1317.5 1365.83 1295 1448.33 1250 1520C1205 1591.67 1140 1648.33 1055 1690C970 1730 865.833 1750 742.5 1750H0ZM337.5 1475H687.5C779.167 1475 850 1454.17 900 1412.5C950 1370.83 975 1310.83 975 1232.5C975 1154.17 949.167 1093.33 897.5 1050C845.833 1005 774.167 982.5 682.5 982.5H337.5V1475ZM337.5 730H662.5C750.833 730 817.5 710 862.5 670C909.167 630 932.5 573.333 932.5 500C932.5 428.333 909.167 372.5 862.5 332.5C817.5 290.833 750 270 660 270H337.5V730Z" fill="#2e2e2e" />
                  {/* U */}
                  <path d="M2221.74 1780C2093.4 1780 1976.74 1754.17 1871.74 1702.5C1766.74 1650.83 1683.4 1573.33 1621.74 1470C1560.07 1366.67 1529.24 1235 1529.24 1075V0H1866.74V1077.5C1866.74 1164.17 1880.9 1237.5 1909.24 1297.5C1937.57 1355.83 1978.4 1399.17 2031.74 1427.5C2086.74 1455.83 2151.74 1470 2226.74 1470C2303.4 1470 2368.4 1455.83 2421.74 1427.5C2476.74 1399.17 2518.4 1355.83 2546.74 1297.5C2575.07 1237.5 2589.24 1164.17 2589.24 1077.5V0H2926.74V1075C2926.74 1235 2895.07 1366.67 2831.74 1470C2768.4 1573.33 2682.57 1650.83 2574.24 1702.5C2467.57 1754.17 2350.07 1780 2221.74 1780Z" fill="#2e2e2e" />
                  {/* I (Detachable Monolith) */}
                  <path d="M3205.66 1750V0H3543.16V1750H3205.66Z" fill="#2e2e2e" />
                  {/* L */}
                  <path d="M3836.82 1750V0H4174.32V1487.5H4941.82V1750H3836.82Z" fill="#2e2e2e" />
                  {/* D */}
                  <path d="M5180.86 1750V0H5765.86C5969.19 0 6136.69 36.6667 6268.36 110C6401.69 181.667 6500.03 283.333 6563.36 415C6628.36 545 6660.86 698.333 6660.86 875C6660.86 1051.67 6628.36 1205.83 6563.36 1337.5C6500.03 1467.5 6402.53 1569.17 6270.86 1642.5C6139.19 1714.17 5970.86 1750 5765.86 1750H5180.86ZM5518.36 1460H5748.36C5891.69 1460 6004.19 1436.67 6085.86 1390C6169.19 1343.33 6228.36 1276.67 6263.36 1190C6298.36 1101.67 6315.86 996.667 6315.86 875C6315.86 751.667 6298.36 646.667 6263.36 560C6228.36 471.667 6169.19 404.167 6085.86 357.5C6004.19 310.833 5891.69 287.5 5748.36 287.5H5518.36V1460Z" fill="#2e2e2e" />
                </svg>
              </div>
            ))}
          </div>

          {/* ================= STAGE 3: GROW ================= */}
          <div className={`${styles.stageLayer} ${styles.stageGrow}`}>
            {[0, 1, 2, 3, 4, 5].map((idx) => (
              <div key={`grow-${idx}`} className={styles.spotlightHeader} style={{ zIndex: 10 + idx }}>
                <svg width="6850" height="1780" viewBox="0 0 6850 1780" fill="none">
                  {/* G */}
                  <path d="M1400 270H450C380 270 337.5 330 337.5 450V1300C337.5 1420 380 1480 450 1480H1062.5V1010H750V740H1400V1750H350C150 1750 0 1600 0 1400V350C0 150 150 0 350 0H1400V270Z" fill="#2e2e2e" />
                  {/* R Stem (Detachable Monolith with Cipher) */}
                  <path d="M1700 1750V0H2037.5V1750H1700Z" fill="#2e2e2e" />
                  {/* R Loop + Leg */}
                  <path d="M2037.5 0H2500C2700 0 2850 120 2900 300C2950 480 2900 680 2750 800C2650 880 2530 920 2350 930L2950 1750H2500L2037.5 1000V0ZM2037.5 730H2400C2530 730 2600 670 2600 500C2600 330 2530 270 2400 270H2037.5V730Z" fill="#2e2e2e" />
                  {/* O */}
                  <path d="M3600 0H4300C4500 0 4650 150 4650 350V1400C4650 1600 4500 1750 4300 1750H3600C3400 1750 3250 1600 3250 1400V350C3250 150 3400 0 3600 0ZM3600 270C3500 270 3450 330 3450 450V1300C3450 1420 3500 1480 3600 1480H4300C4400 1480 4450 1420 4450 1300V450C4450 330 4400 270 4300 270H3600Z" fill="#2e2e2e" />
                  {/* W */}
                  <path d="M4950 0H5280L5550 1250L5800 250H6000L6250 1250L6520 0H6850L6420 1750H6100L5870 700L5640 1750H5320L4950 0Z" fill="#2e2e2e" />
                </svg>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
