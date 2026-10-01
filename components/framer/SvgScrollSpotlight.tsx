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
const CIPHER_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#%*&";

export function SvgScrollSpotlight() {
  const containerRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const [displayText, setDisplayText] = useState("");
  const scrambleIntervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!containerRef.current || !stickyRef.current) return;

    const ctx = gsap.context(() => {
      const headers = stickyRef.current?.querySelectorAll<HTMLElement>(`.${styles.spotlightHeader}`);
      if (!headers || headers.length === 0) return;

      const frontHeader = headers[headers.length - 1];
      const frontSvg = frontHeader.querySelector("svg");
      if (!frontSvg) return;

      const paths = frontSvg.querySelectorAll("path");
      const letterIPath = paths[2]; // The "I" in BUILD
      if (!letterIPath) return;

      // Group the letter "I" so it can pivot and reveal text
      let letterIGroup = frontSvg.querySelector<SVGGElement>(`g.${styles.letterIGroup}`);
      if (!letterIGroup) {
        letterIGroup = document.createElementNS(SVG_NAMESPACE, "g") as SVGGElement;
        letterIGroup.setAttribute("class", styles.letterIGroup);
        letterIPath.parentNode?.insertBefore(letterIGroup, letterIPath);
        letterIGroup.appendChild(letterIPath);
      }

      gsap.set(letterIGroup, { transformOrigin: "center center" });

      const letterIBounds = letterIPath.getBBox();
      const letterICenterX = letterIBounds.x + letterIBounds.width / 2;
      const letterICenterY = letterIBounds.y + letterIBounds.height / 2;

      // Create or select the text element
      let labelElement = letterIGroup.querySelector<SVGTextElement>(`text.${styles.iLinkText}`);
      if (!labelElement) {
        labelElement = document.createElementNS(SVG_NAMESPACE, "text") as SVGTextElement;
        labelElement.setAttribute("class", styles.iLinkText);
        labelElement.setAttribute("x", `${letterICenterX}`);
        labelElement.setAttribute("y", `${letterICenterY}`);
        labelElement.setAttribute(
          "transform",
          `rotate(-90 ${letterICenterX} ${letterICenterY})`
        );
        letterIGroup.appendChild(labelElement);
      }

      let isRevealed = false;

      const scrambleText = (forward: boolean) => {
        if (scrambleIntervalRef.current) clearInterval(scrambleIntervalRef.current);
        let frame = 0;
        const totalFrames = 18;

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

      const updateDimensions = () => {
        const isMobile = window.innerWidth < 1000;
        return {
          slideDistance: isMobile ? 4200 : 2500,
          targetScale: isMobile ? 1.6 : 1.0,
          cascadeShift: isMobile ? 18 : 6,
        };
      };

      let config = updateDimensions();

      const st = ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.65,
        onUpdate: (self) => {
          const p = self.progress;

          // 1. Cascade scale and Y shift of stacked headers
          const cascadeProgress = Math.min(p / 0.5, 1);
          headers.forEach((header, index) => {
            const finalScale = 1 - index * 0.075;
            const scale = 1 + (finalScale - 1) * cascadeProgress;
            const y = index * config.cascadeShift * cascadeProgress;
            gsap.set(header, { scale, y });
          });

          // 2. Letter I pivot, rotation, downward slide & scale
          const letterIProgress = gsap.utils.clamp(0, 1, (p - 0.45) / 0.55);
          gsap.set(letterIGroup, {
            rotation: gsap.utils.interpolate(0, 90, letterIProgress),
            y: gsap.utils.interpolate(0, config.slideDistance, letterIProgress),
            scale: gsap.utils.interpolate(1, config.targetScale, letterIProgress),
          });

          // 3. Trigger Scramble Text on scroll threshold
          if (p > 0.68 && !isRevealed) {
            isRevealed = true;
            scrambleText(true);
          } else if (p <= 0.68 && isRevealed) {
            isRevealed = false;
            scrambleText(false);
          }
        },
      });

      const onResize = () => {
        config = updateDimensions();
        ScrollTrigger.refresh();
      };

      window.addEventListener("resize", onResize);

      return () => {
        window.removeEventListener("resize", onResize);
        st.kill();
        if (scrambleIntervalRef.current) clearInterval(scrambleIntervalRef.current);
      };
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className={styles.scrollWrapper} id="spotlight">
      {/* Sticky Fullscreen Stage */}
      <div ref={stickyRef} className={styles.stickyStage}>
        {/* Editorial Eyebrow */}
        <div className={styles.eyebrow}>
          <span className={styles.eyebrowNum}>08</span>
          <span className={styles.eyebrowSep}>//</span>
          <span className={styles.eyebrowLabel}>ARCHITECTURAL SPOTLIGHT · BUILD</span>
        </div>

        {/* 6 Depth-Stacked SVG Layers */}
        {[0, 1, 2, 3, 4, 5].map((layerIndex) => (
          <div key={layerIndex} className={styles.spotlightHeader} style={{ zIndex: 10 + layerIndex }}>
            <svg
              width="6661"
              height="1780"
              viewBox="0 0 6661 1780"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.svgElement}
            >
              {/* B */}
              <path
                d="M0 1750V0H717.5C839.167 0 941.667 19.1667 1025 57.5C1108.33 95.8333 1170.83 149.167 1212.5 217.5C1255.83 284.167 1277.5 361.667 1277.5 450C1277.5 538.333 1258.33 612.5 1220 672.5C1181.67 732.5 1130.83 779.167 1067.5 812.5C1005.83 844.167 937.5 862.5 862.5 867.5L902.5 840C982.5 843.333 1053.33 865 1115 905C1178.33 943.333 1227.5 995 1262.5 1060C1299.17 1125 1317.5 1195.83 1317.5 1272.5C1317.5 1365.83 1295 1448.33 1250 1520C1205 1591.67 1140 1648.33 1055 1690C970 1730 865.833 1750 742.5 1750H0ZM337.5 1475H687.5C779.167 1475 850 1454.17 900 1412.5C950 1370.83 975 1310.83 975 1232.5C975 1154.17 949.167 1093.33 897.5 1050C845.833 1005 774.167 982.5 682.5 982.5H337.5V1475ZM337.5 730H662.5C750.833 730 817.5 710 862.5 670C909.167 630 932.5 573.333 932.5 500C932.5 428.333 909.167 372.5 862.5 332.5C817.5 290.833 750 270 660 270H337.5V730Z"
                fill={layerIndex === 5 ? "#0A0A0A" : "#222222"}
              />
              {/* U */}
              <path
                d="M2221.74 1780C2093.4 1780 1976.74 1754.17 1871.74 1702.5C1766.74 1650.83 1683.4 1573.33 1621.74 1470C1560.07 1366.67 1529.24 1235 1529.24 1075V0H1866.74V1077.5C1866.74 1164.17 1880.9 1237.5 1909.24 1297.5C1937.57 1355.83 1978.4 1399.17 2031.74 1427.5C2086.74 1455.83 2151.74 1470 2226.74 1470C2303.4 1470 2368.4 1455.83 2421.74 1427.5C2476.74 1399.17 2518.4 1355.83 2546.74 1297.5C2575.07 1237.5 2589.24 1164.17 2589.24 1077.5V0H2926.74V1075C2926.74 1235 2895.07 1366.67 2831.74 1470C2768.4 1573.33 2682.57 1650.83 2574.24 1702.5C2467.57 1754.17 2350.07 1780 2221.74 1780Z"
                fill={layerIndex === 5 ? "#0A0A0A" : "#222222"}
              />
              {/* I */}
              <path
                d="M3205.66 1750V0H3543.16V1750H3205.66Z"
                fill={layerIndex === 5 ? "#0A0A0A" : "#222222"}
              />
              {/* L */}
              <path
                d="M3836.82 1750V0H4174.32V1487.5H4941.82V1750H3836.82Z"
                fill={layerIndex === 5 ? "#0A0A0A" : "#222222"}
              />
              {/* D */}
              <path
                d="M5180.86 1750V0H5765.86C5969.19 0 6136.69 36.6667 6268.36 110C6401.69 181.667 6500.03 283.333 6563.36 415C6628.36 545 6660.86 698.333 6660.86 875C6660.86 1051.67 6628.36 1205.83 6563.36 1337.5C6500.03 1467.5 6402.53 1569.17 6270.86 1642.5C6139.19 1714.17 5970.86 1750 5765.86 1750H5180.86ZM5518.36 1460H5748.36C5891.69 1460 6004.19 1436.67 6085.86 1390C6169.19 1343.33 6228.36 1276.67 6263.36 1190C6298.36 1101.67 6315.86 996.667 6315.86 875C6315.86 751.667 6298.36 646.667 6263.36 560C6228.36 471.667 6169.19 404.167 6085.86 357.5C6004.19 310.833 5891.69 287.5 5748.36 287.5H5518.36V1460Z"
                fill={layerIndex === 5 ? "#0A0A0A" : "#222222"}
              />
            </svg>
          </div>
        ))}
      </div>
    </div>
  );
}
