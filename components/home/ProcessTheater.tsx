"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { MotionImage } from "@/components/motion/MotionMedia";
import styles from "@/styles/home/ProcessTheater.module.css";

gsap.registerPlugin(ScrollTrigger);

export type ProcessBeat = {
  title: string;
  meta?: string;
  body: string;
};

type Props = {
  items: ProcessBeat[];
  eyebrow?: string;
  lead?: string;
  image?: MotionImage;
};

/**
 * Scroll / 070 FAQ DNA — chat-bubble expand theater for Process.
 * @see Awwwards_Master_Pack/01 - Scroll Animation/070 - Scroll Powered FAQ Animation
 */
export function ProcessTheater({
  items,
  eyebrow = "Process",
  lead = "Six moves. One practice.",
  image,
}: Props) {
  const rootRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let cancelled = false;
    const cleanups: Array<() => void> = [];

    const setup = () => {
      if (cancelled) return;

      const messages = gsap.utils.toArray<HTMLElement>(
        root.querySelectorAll("[data-faq-message]"),
      );

      messages.forEach((message) => {
        const row = message.parentElement as HTMLElement | null;
        const typing = message.querySelector<HTMLElement>("[data-typing]");
        const copy = message.querySelectorAll<HTMLElement>("[data-faq-copy]");
        if (!row || !typing) return;

        gsap.set(message, { clearProps: "all" });
        const expandedWidth = Math.ceil(message.scrollWidth + 8);
        const expandedHeight = Math.ceil(message.scrollHeight + 8);
        message.style.width = `${expandedWidth}px`;
        row.style.minHeight = `${expandedHeight}px`;

        gsap.set(message, {
          width: 64,
          height: 64,
          borderRadius: "50%",
          padding: 0,
          scale: 0,
        });
        gsap.set(copy, { opacity: 0 });
        gsap.set(typing, { autoAlpha: 1 });

        let collapseWhenDone = false;

        const enterTimeline = gsap.timeline({ paused: true });
        enterTimeline.to(message, {
          scale: 1,
          duration: 0.32,
          ease: "power2.out",
        });

        const expandTimeline = gsap.timeline({
          paused: true,
          onReverseComplete: () => {
            if (collapseWhenDone) {
              collapseWhenDone = false;
              enterTimeline.reverse();
            }
          },
        });

        expandTimeline
          .to(typing, { autoAlpha: 0, duration: 0.2 })
          .to(message, {
            width: expandedWidth,
            borderRadius: "1.75rem",
            paddingLeft: "1.75rem",
            paddingRight: "1.75rem",
            duration: 0.42,
            ease: "power3.inOut",
          })
          .to(
            message,
            {
              height: expandedHeight,
              paddingTop: "1.35rem",
              paddingBottom: "1.35rem",
              duration: 0.42,
              ease: "power3.inOut",
            },
            "-=0.22",
          )
          .to(copy, { opacity: 1, duration: 0.32, stagger: 0.05 }, "-=0.25");

        const stEnter = ScrollTrigger.create({
          trigger: message,
          start: "top 88%",
          onEnter: () => {
            collapseWhenDone = false;
            enterTimeline.play();
          },
          onLeaveBack: () => {
            if (expandTimeline.progress() > 0) {
              collapseWhenDone = true;
            } else {
              enterTimeline.reverse();
            }
          },
          onRefresh: (self) => {
            if (self.progress > 0 || self.start <= self.scroll()) {
              collapseWhenDone = false;
              enterTimeline.progress(1);
            }
          },
        });

        const stExpand = ScrollTrigger.create({
          trigger: message,
          start: "top 72%",
          onEnter: () => expandTimeline.play(),
          onLeaveBack: () => expandTimeline.reverse(),
          onRefresh: (self) => {
            if (self.progress > 0 || self.start <= self.scroll()) {
              expandTimeline.progress(1);
            }
          },
        });

        // Catch jump-scrolls that already passed the trigger
        if (message.getBoundingClientRect().top < window.innerHeight * 0.88) {
          collapseWhenDone = false;
          enterTimeline.progress(1);
        }
        if (message.getBoundingClientRect().top < window.innerHeight * 0.72) {
          expandTimeline.progress(1);
        }

        cleanups.push(() => {
          stEnter.kill();
          stExpand.kill();
          enterTimeline.kill();
          expandTimeline.kill();
        });
      });

      ScrollTrigger.refresh();
    };

    const fontsReady =
      "fonts" in document ? document.fonts.ready : Promise.resolve();
    fontsReady.then(() => {
      requestAnimationFrame(setup);
    });

    return () => {
      cancelled = true;
      cleanups.forEach((fn) => fn());
    };
  }, [items]);

  return (
    <section ref={rootRef} className={styles.root} aria-label={eyebrow}>
      <div className={styles.bg} aria-hidden="true">
        {image?.src ? (
          <Image
            src={image.src}
            alt=""
            fill
            sizes="100vw"
            className={styles.bgImg}
            style={{ objectPosition: image.objectPosition ?? "50% 45%" }}
          />
        ) : null}
        <span className={styles.bgVeil} />
      </div>

      <header className={styles.head}>
        <p className={styles.eyebrow}>{eyebrow}</p>
        <h2 className={styles.lead}>{lead}</h2>
      </header>

      <div className={styles.container}>
        {items.map((item, i) => (
          <div key={item.title} className={styles.item}>
            <div className={`${styles.row} ${styles.questionSlot}`}>
              <div
                className={`${styles.message} ${styles.question}`}
                data-faq-message
              >
                <div className={styles.typing} data-typing aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </div>
                <div className={styles.content}>
                  <p data-faq-copy>
                    <span className={styles.num}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {item.title}
                    {item.meta ? (
                      <span className={styles.meta}> — {item.meta}</span>
                    ) : null}
                  </p>
                </div>
              </div>
            </div>

            <div className={`${styles.row} ${styles.answerSlot}`}>
              <div
                className={`${styles.message} ${styles.answer}`}
                data-faq-message
              >
                <div className={styles.typing} data-typing aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </div>
                <div className={styles.content}>
                  <p data-faq-copy>{item.body}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
