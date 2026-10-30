"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SITE_SCRUB } from "@/components/motion/scrollFeel";
import orbits from "./orbit-paths.json";
import styles from "@/styles/home/HomeCreatePath.module.css";

gsap.registerPlugin(ScrollTrigger);

/**
 * After the portfolio, one stroke draws the 13 mark on the hero starfield.
 * The stem is the 1. The pen returns inside that stem, then draws the 3.
 */

const VIEW_X = -120;
const VIEW_Y = -60;
const VIEW_W = 1860;
const VIEW_H = 2020;
const PATH = orbits.a;

const ONE_END = 0.25;
const THREE_START = 0.49;

const STATIONS = [
  {
    id: "create",
    index: "01",
    word: "CREATE",
    at: 0.12,
    x: -240,
    y: 860,
    pill: "Strategy, identity, and the idea people remember.",
  },
  {
    id: "build",
    index: "02",
    word: "BUILD",
    at: 0.62,
    x: 860,
    y: 560,
    pill: "Products and systems made to hold under real use.",
  },
  {
    id: "grow",
    index: "03",
    word: "GROW",
    at: 0.86,
    x: 980,
    y: 1180,
    pill: "Demand and pipeline that compound into a position.",
  },
] as const;

/** Scroll time spent on the 1, then the 3. The retrace inside the stem is skipped. */
function pathProgress(scroll: number) {
  const p = clamp01(scroll);
  if (p <= 0.42) return (p / 0.42) * ONE_END;
  return THREE_START + ((p - 0.42) / 0.58) * (1 - THREE_START);
}

function clamp01(t: number) {
  return Math.max(0, Math.min(1, t));
}

function smoothstep(edge0: number, edge1: number, value: number) {
  const t = clamp01((value - edge0) / (edge1 - edge0));
  return t * t * (3 - 2 * t);
}

function uprightAngle(radians: number) {
  let angle = radians;
  if (angle > Math.PI / 2) angle -= Math.PI;
  if (angle < -Math.PI / 2) angle += Math.PI;
  return angle;
}

export function HomeCreatePath() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const drawRef = useRef<SVGPathElement | null>(null);
  const penRef = useRef<SVGGElement | null>(null);
  const stationRefs = useRef<(HTMLDivElement | null)[]>([]);
  const letterRefs = useRef<(HTMLSpanElement | null)[][]>([]);
  const pillRefs = useRef<(HTMLParagraphElement | null)[]>([]);
  const indexRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    const draw = drawRef.current;
    const pen = penRef.current;
    if (!section || !draw || !pen) return;

    const length = draw.getTotalLength();
    draw.style.strokeDasharray = `${length}`;

    const angles = STATIONS.map((station) => {
      const distance = station.at * length;
      const ahead = draw.getPointAtLength(Math.min(length, distance + 16));
      const behind = draw.getPointAtLength(Math.max(0, distance - 16));
      return uprightAngle(Math.atan2(ahead.y - behind.y, ahead.x - behind.x));
    });

    const placeStations = () => {
      const narrow = window.innerWidth <= 640;
      STATIONS.forEach((station, index) => {
        const node = stationRefs.current[index];
        if (!node) return;
        if (narrow) {
          node.style.left = "50%";
          node.style.top = `${108 + index * 16}%`;
          return;
        }
        node.style.left = `${((station.x - VIEW_X) / VIEW_W) * 100}%`;
        node.style.top = `${((station.y - VIEW_Y) / VIEW_H) * 100}%`;
      });
    };

    const apply = (progress: number) => {
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const drawn = reduced ? 1 : pathProgress(progress);

      draw.style.strokeDashoffset = `${length * (1 - drawn)}`;

      const tip = draw.getPointAtLength(length * drawn);
      pen.setAttribute("transform", `translate(${tip.x} ${tip.y})`);
      pen.style.opacity = drawn > 0.02 && drawn < 0.985 ? "1" : "0";

      STATIONS.forEach((station, index) => {
        const letters = letterRefs.current[index] ?? [];
        const mid = (letters.length - 1) / 2;
        const angle = angles[index];
        letters.forEach((letter, letterIndex) => {
          if (!letter) return;
          const start = station.at + letterIndex * 0.008;
          const settle = smoothstep(start, start + 0.07, drawn);
          const ride = 1 - settle;
          const along = (letterIndex - mid) * 0.32;
          const tx = ride * (Math.cos(angle) * along - along);
          const ty = ride * Math.sin(angle) * along;
          const ripple = settle * Math.sin((drawn - station.at) * 18 + letterIndex * 0.85) * 0.045;
          const scale = 0.9 + settle * 0.1;
          letter.style.transform = `translate(${tx.toFixed(3)}em, ${(ty + ripple).toFixed(3)}em) rotate(${(angle * ride).toFixed(4)}rad) scale(${scale.toFixed(3)})`;
          letter.style.opacity = settle < 0.02 ? "0" : Math.min(1, 0.45 + settle * 0.55).toFixed(3);
        });

        const label = smoothstep(station.at + 0.04, station.at + 0.14, drawn);
        const indexNode = indexRefs.current[index];
        if (indexNode) {
          indexNode.style.opacity = label.toFixed(3);
          indexNode.style.transform = `translateY(${((1 - label) * 10).toFixed(2)}px)`;
        }
        const pill = pillRefs.current[index];
        if (pill) {
          pill.style.opacity = label.toFixed(3);
          pill.style.transform = `translateY(${((1 - label) * 14).toFixed(2)}px)`;
        }
      });
    };

    placeStations();

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      apply(1);
      return;
    }

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: "+=140%",
        pin: true,
        pinSpacing: true,
        anticipatePin: 0,
        scrub: SITE_SCRUB,
        onUpdate: (self) => apply(self.progress),
        onRefresh: (self) => {
          placeStations();
          apply(self.progress);
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="create-path"
      className={styles.section}
      aria-label="Create, build, and grow"
    >
      <div className={styles.frame}>
      <div className={styles.mark}>
      <svg
        className={styles.canvas}
        viewBox={`${VIEW_X} ${VIEW_Y} ${VIEW_W} ${VIEW_H}`}
        role="img"
        aria-hidden="true"
      >
        <path className={styles.ghost} d={PATH} />
        <path ref={drawRef} className={styles.draw} d={PATH} />
        <g ref={penRef} className={styles.pen}>
          <circle r="42" />
          <circle r="14" />
        </g>
      </svg>

      {STATIONS.map((station, index) => (
        <div
          key={station.id}
          ref={(node) => {
            stationRefs.current[index] = node;
          }}
          className={styles.station}
        >
          <span
            ref={(node) => {
              indexRefs.current[index] = node;
            }}
            className={styles.index}
          >
            {station.index}
          </span>
          <h2 className={styles.word} aria-label={station.word}>
            {station.word.split("").map((character, letterIndex) => (
              <span
                key={`${station.id}-${letterIndex}`}
                ref={(node) => {
                  if (!letterRefs.current[index]) letterRefs.current[index] = [];
                  letterRefs.current[index][letterIndex] = node;
                }}
                className={styles.letter}
                aria-hidden="true"
              >
                {character}
              </span>
            ))}
          </h2>
          <p
            ref={(node) => {
              pillRefs.current[index] = node;
            }}
            className={styles.pill}
          >
            {station.pill}
          </p>
        </div>
      ))}
      </div>
      </div>
    </section>
  );
}
