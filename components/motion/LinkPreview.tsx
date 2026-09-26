"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { MediaPlaceholder } from "@/components/ui/MediaPlaceholder";
import styles from "@/styles/motion/LinkPreview.module.css";

export type PreviewItem = {
  selector: string;
  need: string;
  tone?: "dark" | "warm" | "create" | "build" | "grow" | "strategy";
};

type Props = {
  items: PreviewItem[];
};

/**
 * Animmaster hover — floating media preview that follows the cursor on list links.
 * Parent links should use `data-preview-id` matching item.selector.
 */
export function LinkPreview({ items }: Props) {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root || items.length === 0) return;
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;

    const float = root.querySelector<HTMLElement>("[data-float]");
    const plates = root.querySelectorAll<HTMLElement>("[data-plate]");
    if (!float) return;

    gsap.set(float, { autoAlpha: 0, scale: 0.86 });
    gsap.set(plates, { autoAlpha: 0 });

    const xTo = gsap.quickTo(float, "x", { duration: 0.55, ease: "power3.out" });
    const yTo = gsap.quickTo(float, "y", { duration: 0.55, ease: "power3.out" });

    const show = (id: string, e: MouseEvent) => {
      const idx = items.findIndex((it) => it.selector === id);
      if (idx < 0) return;
      plates.forEach((p, i) => {
        gsap.set(p, { autoAlpha: i === idx ? 1 : 0 });
      });
      xTo(e.clientX + 28);
      yTo(e.clientY - 40);
      gsap.to(float, { autoAlpha: 1, scale: 1, duration: 0.35, ease: "power2.out" });
    };

    const move = (e: MouseEvent) => {
      xTo(e.clientX + 28);
      yTo(e.clientY - 40);
    };

    const hide = () => {
      gsap.to(float, { autoAlpha: 0, scale: 0.9, duration: 0.28, ease: "power2.in" });
    };

    const onOver = (e: Event) => {
      const t = e.currentTarget as HTMLElement;
      const id = t.getAttribute("data-preview-id");
      if (id) show(id, e as MouseEvent);
    };

    const links = items
      .map((it) => document.querySelectorAll(`[data-preview-id="${it.selector}"]`))
      .flatMap((nodeList) => Array.from(nodeList));

    links.forEach((link) => {
      link.addEventListener("mouseenter", onOver);
      link.addEventListener("mousemove", move as EventListener);
      link.addEventListener("mouseleave", hide);
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener("mouseenter", onOver);
        link.removeEventListener("mousemove", move as EventListener);
        link.removeEventListener("mouseleave", hide);
      });
    };
  }, [items]);

  return (
    <div ref={rootRef} className={styles.root} aria-hidden="true">
      <div className={styles.float} data-float>
        {items.map((item) => (
          <div key={item.selector} className={styles.plate} data-plate>
            <MediaPlaceholder
              aspect="portrait"
              tone={item.tone ?? "warm"}
              need={item.need}
              fill
            />
          </div>
        ))}
      </div>
    </div>
  );
}
