"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils/cn";
import type { MotionImage } from "@/components/motion/MotionMedia";
import styles from "@/styles/home/HoverImageMenu.module.css";

gsap.registerPlugin(ScrollTrigger);

export type HoverImageMenuItem = {
  href: string;
  title: string;
  sub: string;
  image: MotionImage;
  tags?: string[];
};

type Props = {
  items: HoverImageMenuItem[];
  eyebrow?: string;
  lead?: string;
  id?: string;
  className?: string;
};

type Point = { x: number; y: number };

function lerp(a: number, b: number, n: number) {
  return (1 - n) * a + n * b;
}

function map(x: number, a: number, b: number, c: number, d: number) {
  return ((x - a) * (d - c)) / (b - a) + c;
}

function clamp(num: number, min: number, max: number) {
  return Math.min(Math.max(num, min), max);
}

/**
 * Hover Effects / 011 — Menu Hover Image Animation (pack-max).
 * Cursor-follow reveal + direction clip + ambient stage crossfade.
 * @see Awwwards_Master_Pack/08 - Hover Effects/011 - Menu Hover Image Animation
 */
export function HoverImageMenu({
  items,
  eyebrow = "Capabilities",
  lead = "Three worlds. One practice.",
  id,
  className,
}: Props) {
  const rootRef = useRef<HTMLElement | null>(null);
  const mouse = useRef<Point>({ x: 0, y: 0 });
  const mouseCache = useRef<Point>({ x: 0, y: 0 });
  const direction = useRef<Point>({ x: 0, y: 0 });
  const activeRow = useRef<number>(-1);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const stageA = root.querySelector<HTMLElement>("[data-stage-a]");
    const stageB = root.querySelector<HTMLElement>("[data-stage-b]");
    let stageFlip = false;

    const setStage = (src: string | undefined, strong = false) => {
      if (!stageA || !stageB || !src) return;
      const next = stageFlip ? stageA : stageB;
      const prev = stageFlip ? stageB : stageA;
      next.style.backgroundImage = `url(${src})`;
      gsap.to(next, {
        opacity: strong ? 0.42 : 0.22,
        duration: 0.55,
        ease: "power2.out",
      });
      gsap.to(prev, { opacity: 0, duration: 0.55, ease: "power2.out" });
      stageFlip = !stageFlip;
    };

    const ctx = gsap.context(() => {
      const titles = root.querySelectorAll<HTMLElement>(`.${styles.textInner}`);
      const head = root.querySelector<HTMLElement>(`.${styles.head}`);
      const menu = root.querySelector<HTMLElement>(`.${styles.menu}`);
      const indices = root.querySelectorAll<HTMLElement>(`.${styles.index}`);
      const rules = root.querySelectorAll<HTMLElement>(`.${styles.rule}`);

      if (!reduce) {
        const revealIfPast = (el: Element | null, tween: gsap.core.Tween) => {
          if (!el) return;
          const top = el.getBoundingClientRect().top;
          if (top < window.innerHeight * 0.92) tween.progress(1);
        };

        if (head) {
          const headTween = gsap.fromTo(
            head,
            { autoAlpha: 0, y: 36 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.95,
              ease: "power3.out",
              paused: true,
            },
          );
          ScrollTrigger.create({
            trigger: head,
            start: "top 88%",
            once: true,
            onEnter: () => headTween.play(),
            onRefresh: (self) => {
              if (self.progress > 0 || self.start <= self.scroll()) {
                headTween.progress(1);
              }
            },
          });
          revealIfPast(head, headTween);
        }

        if (titles.length && menu) {
          gsap.set(titles, { yPercent: 115 });
          gsap.set(indices, { autoAlpha: 0, x: -18 });
          gsap.set(rules, { scaleX: 0 });

          const titleTween = gsap
            .timeline({ paused: true })
            .to(titles, {
              yPercent: 0,
              duration: 1.15,
              stagger: 0.14,
              ease: "power4.out",
            })
            .to(
              indices,
              {
                autoAlpha: 0.55,
                x: 0,
                duration: 0.7,
                stagger: 0.12,
                ease: "power3.out",
              },
              0.35,
            )
            .to(
              rules,
              {
                scaleX: 1,
                duration: 0.85,
                stagger: 0.12,
                ease: "power3.out",
              },
              0.28,
            );

          ScrollTrigger.create({
            trigger: menu,
            start: "top 88%",
            once: true,
            onEnter: () => titleTween.play(),
            onRefresh: (self) => {
              if (self.progress > 0 || self.start <= self.scroll()) {
                titleTween.progress(1);
              }
            },
          });
          revealIfPast(menu, titleTween);
        }
      }
    }, root);

    const refresh = () => ScrollTrigger.refresh();
    requestAnimationFrame(refresh);
    const t = window.setTimeout(refresh, 120);

    if (items[0]?.image.src) {
      if (stageA) {
        stageA.style.backgroundImage = `url(${items[0].image.src})`;
        gsap.set(stageA, { opacity: 0.16 });
      }
      if (stageB) gsap.set(stageB, { opacity: 0 });
    }

    if (!fine || reduce) {
      return () => {
        window.clearTimeout(t);
        ctx.revert();
      };
    }

    const onMove = (ev: MouseEvent) => {
      mouse.current = { x: ev.clientX, y: ev.clientY };
    };
    window.addEventListener("mousemove", onMove);

    const rows = root.querySelectorAll<HTMLElement>("[data-hover-row]");
    const cleanups: Array<() => void> = [];

    rows.forEach((row, rowIndex) => {
      const reveal = row.querySelector<HTMLElement>("[data-reveal]");
      const revealInner = row.querySelector<HTMLElement>("[data-reveal-inner]");
      const revealImg = row.querySelector<HTMLElement>("[data-reveal-img]");
      const bg = row.dataset.bg;
      if (!reveal || !revealInner || !revealImg) return;

      let raf = 0;
      let first = true;
      const anim = {
        tx: { previous: 0, current: 0, amt: 0.12 },
        ty: { previous: 0, current: 0, amt: 0.12 },
        rotation: { previous: 0, current: 0, amt: 0.1 },
        brightness: { previous: 1, current: 1, amt: 0.08 },
      };

      const render = () => {
        const bounds = {
          el: row.getBoundingClientRect(),
          reveal: reveal.getBoundingClientRect(),
        };

        const distX = clamp(
          Math.abs(mouseCache.current.x - mouse.current.x),
          0,
          100,
        );
        direction.current = {
          x: mouseCache.current.x - mouse.current.x,
          y: mouseCache.current.y - mouse.current.y,
        };
        mouseCache.current = { ...mouse.current };

        anim.tx.current =
          Math.abs(mouse.current.x - bounds.el.left) - bounds.reveal.width / 2;
        anim.ty.current =
          Math.abs(mouse.current.y - bounds.el.top) - bounds.reveal.height / 2;
        anim.rotation.current = first
          ? 0
          : map(distX, 0, 100, 0, direction.current.x < 0 ? 48 : -48);
        anim.brightness.current = first ? 1 : map(distX, 0, 100, 1, 2.8);

        anim.tx.previous = first
          ? anim.tx.current
          : lerp(anim.tx.previous, anim.tx.current, anim.tx.amt);
        anim.ty.previous = first
          ? anim.ty.current
          : lerp(anim.ty.previous, anim.ty.current, anim.ty.amt);
        anim.rotation.previous = first
          ? anim.rotation.current
          : lerp(anim.rotation.previous, anim.rotation.current, anim.rotation.amt);
        anim.brightness.previous = first
          ? anim.brightness.current
          : lerp(
              anim.brightness.previous,
              anim.brightness.current,
              anim.brightness.amt,
            );

        gsap.set(reveal, {
          x: anim.tx.previous,
          y: anim.ty.previous,
          rotation: anim.rotation.previous,
          filter: `brightness(${anim.brightness.previous})`,
        });

        first = false;
        raf = requestAnimationFrame(render);
      };

      const enter = () => {
        first = true;
        activeRow.current = rowIndex;
        gsap.killTweensOf([revealInner, revealImg]);
        gsap.set(row, { zIndex: 40 });
        setStage(bg, true);
        root.dataset.active = String(rowIndex);

        const dirX = direction.current.x;
        gsap
          .timeline({
            onStart: () => {
              reveal.style.opacity = "1";
            },
          })
          .fromTo(
            revealInner,
            {
              clipPath:
                dirX < 0
                  ? "inset(0 100% 0 0)"
                  : "inset(0 0 0 100%)",
              scale: 1.06,
            },
            {
              clipPath: "inset(0 0% 0 0%)",
              scale: 1,
              duration: 0.42,
              ease: "power3.out",
            },
          )
          .fromTo(
            revealImg,
            {
              xPercent: dirX < 0 ? 18 : -18,
              scale: 1.18,
            },
            {
              xPercent: 0,
              scale: 1,
              duration: 0.55,
              ease: "power3.out",
            },
            0,
          );
        cancelAnimationFrame(raf);
        raf = requestAnimationFrame(render);
      };

      const leave = () => {
        cancelAnimationFrame(raf);
        raf = 0;
        gsap.killTweensOf([revealInner, revealImg]);
        if (activeRow.current === rowIndex) {
          activeRow.current = -1;
          root.removeAttribute("data-active");
          setStage(bg, false);
        }
        const dirX = direction.current.x;
        gsap
          .timeline({
            onStart: () => gsap.set(row, { zIndex: 1 }),
            onComplete: () => {
              gsap.set(reveal, { opacity: 0, filter: "none" });
              gsap.set(revealInner, { clipPath: "inset(0 0% 0 0%)", scale: 1 });
              gsap.set(revealImg, { xPercent: 0, scale: 1 });
            },
          })
          .to(revealInner, {
            clipPath:
              dirX < 0 ? "inset(0 0 0 100%)" : "inset(0 100% 0 0)",
            duration: 0.28,
            ease: "power2.in",
          })
          .to(
            revealImg,
            {
              xPercent: dirX < 0 ? -12 : 12,
              duration: 0.28,
              ease: "power2.in",
            },
            0,
          );
      };

      row.addEventListener("mouseenter", enter);
      row.addEventListener("mouseleave", leave);
      cleanups.push(() => {
        cancelAnimationFrame(raf);
        row.removeEventListener("mouseenter", enter);
        row.removeEventListener("mouseleave", leave);
      });
    });

    return () => {
      window.clearTimeout(t);
      ctx.revert();
      window.removeEventListener("mousemove", onMove);
      cleanups.forEach((fn) => fn());
    };
  }, [items]);

  return (
    <section
      ref={rootRef}
      id={id}
      className={cn(styles.root, className)}
      aria-label={eyebrow}
    >
      <div className={styles.stage} data-stage-a aria-hidden="true" />
      <div className={styles.stage} data-stage-b aria-hidden="true" />
      <div className={styles.stageVeil} aria-hidden="true" />
      <div className={styles.grain} aria-hidden="true" />

      <div className={styles.inner}>
        <header className={styles.head}>
          <div className={styles.headMeta}>
            <p className={styles.eyebrow}>{eyebrow}</p>
            <p className={styles.count} aria-hidden="true">
              {String(items.length).padStart(2, "0")}
            </p>
          </div>
          {lead ? <p className={styles.lead}>{lead}</p> : null}
        </header>

        <nav className={styles.menu}>
          {items.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              className={styles.item}
              data-hover-row
              data-bg={item.image.src}
              data-cursor="view"
              data-magnetic
            >
              <span className={styles.index} aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className={styles.ghost} aria-hidden="true">
                {item.title.charAt(0)}
              </span>
              <span className={styles.rowMain}>
                <span className={styles.text}>
                  <span className={styles.textInner}>{item.title}</span>
                </span>
                <span className={styles.rule} aria-hidden="true" />
                <span className={styles.subWrap}>
                  <span className={styles.sub}>{item.sub}</span>
                  {item.tags?.length ? (
                    <span className={styles.tagList} aria-hidden="true">
                      {item.tags.map((t) => (
                        <span key={t} className={styles.tagChip}>
                          {t}
                        </span>
                      ))}
                    </span>
                  ) : null}
                </span>
              </span>
              <span className={styles.arrow} aria-hidden="true">
                ↗
              </span>
              <span className={styles.reveal} data-reveal aria-hidden="true">
                <span className={styles.revealInner} data-reveal-inner>
                  <span
                    className={styles.revealImg}
                    data-reveal-img
                    style={{
                      backgroundImage: `url(${item.image.src})`,
                      backgroundPosition: item.image.objectPosition ?? "50% 50%",
                    }}
                  />
                </span>
              </span>
            </Link>
          ))}
        </nav>

        <div className={styles.foot}>
          <Link href="/capabilities" className={styles.footLink} data-magnetic>
            All capabilities
            <span aria-hidden="true"> →</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
