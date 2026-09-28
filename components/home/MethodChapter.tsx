"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { UtopianBreak } from "@/components/ui/UtopianBreak";
import styles from "@/styles/home/MethodChapter.module.css";

gsap.registerPlugin(ScrollTrigger);

export type MethodBeat = {
  title: string;
  meta: string;
  body: string;
};

type Props = {
  items: readonly MethodBeat[] | MethodBeat[];
  eyebrow?: string;
};

/**
 * Method — creed design language.
 * Break · meta · monumental lead · editorial step list. No chat bubbles.
 */
export function MethodChapter({
  items,
  eyebrow = "04 · Method",
}: Props) {
  const rootRef = useRef<HTMLElement | null>(null);
  const list = [...items];

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      gsap.from(root.querySelectorAll("[data-method-rise]"), {
        autoAlpha: 0,
        y: 26,
        duration: 0.8,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: root,
          start: "top 76%",
          once: true,
        },
      });
    }, root);

    return () => ctx.revert();
  }, [list.length]);

  return (
    <section ref={rootRef} className={styles.root} aria-label="Method">
      <div className={styles.inner}>
        <div className={styles.mark} data-method-rise>
          <UtopianBreak size="md" />
        </div>
        <p className={styles.meta} data-method-rise>
          {eyebrow}
        </p>

        <h2 className={styles.lead} data-method-rise>
          <span className={styles.leadLine}>Six moves.</span>
          <span className={styles.leadLine}>One practice.</span>
          <span className={styles.hair} aria-hidden="true" />
        </h2>

        <ol className={styles.list}>
          {list.map((step, i) => (
            <li key={step.title} className={styles.item} data-method-rise>
              <span className={styles.num}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className={styles.copy}>
                <p className={styles.titleRow}>
                  <span className={styles.title}>{step.title}</span>
                  <span className={styles.stepMeta}>{step.meta}</span>
                </p>
                <p className={styles.body}>{step.body}</p>
              </div>
            </li>
          ))}
        </ol>

        <Link
          href="/connect/start-a-project"
          className={styles.cta}
          data-method-rise
          data-magnetic
        >
          Put the method to work
          <span aria-hidden="true"> →</span>
        </Link>
      </div>
    </section>
  );
}
