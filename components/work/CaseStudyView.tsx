"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { CaseStudy } from "@/lib/content/types";
import { UtopianBreak } from "@/components/ui/UtopianBreak";
import styles from "@/styles/work/CaseStudyView.module.css";

gsap.registerPlugin(ScrollTrigger);

type Props = {
  item: CaseStudy;
  nextItem?: CaseStudy;
};

type Act = {
  tag: string;
  title: string;
  body: string[];
};

/**
 * Case study cinema — continuous Belief-density theaters.
 * Pinned hero → pinned acts → pinned impact → pinned shipped → voice → next.
 */
export function CaseStudyView({ item, nextItem }: Props) {
  const acts: Act[] = [
    {
      tag: "01 — Friction",
      title: "The Challenge",
      body: [item.challenge],
    },
    {
      tag: "02 — Move",
      title: "The Insight",
      body: [item.insight, item.move],
    },
    {
      tag: "03 — Systems",
      title: "What We Built",
      body: [item.build, item.result],
    },
  ];

  return (
    <article className={styles.root}>
      <CaseHero item={item} />
      <CaseActs acts={acts} image={item.image} client={item.client} />
      {item.stats && item.stats.length > 0 ? (
        <CaseImpact stats={item.stats} image={item.image} />
      ) : null}
      {item.deliverables && item.deliverables.length > 0 ? (
        <CaseShipped items={item.deliverables} image={item.image} />
      ) : null}
      {item.testimonial ? (
        <CaseVoice
          quote={item.testimonial.quote}
          author={item.testimonial.author}
          role={item.testimonial.role}
          image={item.image}
          lesson={item.lesson}
          stack={item.stack}
        />
      ) : null}
      {nextItem ? <CaseNext item={nextItem} /> : null}
    </article>
  );
}

function CaseHero({ item }: { item: CaseStudy }) {
  const rootRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const stage = root.querySelector<HTMLElement>("[data-case-stage]");
    const plate = root.querySelector<HTMLElement>("[data-case-plate]");
    const mask = root.querySelector<HTMLElement>("[data-case-mask]");
    const lines = root.querySelectorAll("[data-case-line]");

    if (!stage) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const ctx = gsap.context(() => {
      if (plate) gsap.set(plate, { scale: 1.18 });
      if (mask) gsap.set(mask, { clipPath: "inset(14% 12% 14% 12%)" });
      gsap.set(lines, { autoAlpha: 0, y: 40 });

      // Enter: copy visible immediately — pin only deepens the plate
      gsap
        .timeline({ defaults: { ease: "power3.out" } })
        .to(
          mask,
          {
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 1.2,
            ease: "power3.inOut",
          },
          0,
        )
        .to(
          lines,
          { autoAlpha: 1, y: 0, duration: 0.8, stagger: 0.08 },
          0.25,
        );

      ScrollTrigger.create({
        trigger: stage,
        start: "top top",
        end: () => `+=${Math.round(window.innerHeight * 2.2)}`,
        pin: true,
        pinSpacing: true,
        scrub: 0.7,
        anticipatePin: 1,
        onUpdate: (self) => {
          if (plate) {
            gsap.set(plate, {
              scale: gsap.utils.interpolate(1.18, 1, self.progress),
            });
          }
        },
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <header ref={rootRef} className={styles.hero}>
      <div className={styles.heroStage} data-case-stage>
        <div className={styles.heroMask} data-case-mask>
          {item.image ? (
            <div className={styles.heroPlate} data-case-plate>
              <Image
                src={item.image}
                alt={`${item.client} — ${item.title}`}
                fill
                priority
                sizes="100vw"
                className={styles.heroImg}
              />
            </div>
          ) : (
            <div className={styles.heroFallback} />
          )}
          <div className={styles.heroVeil} aria-hidden="true" />
        </div>

        <div className={styles.heroInner}>
          <div className={styles.heroTop} data-case-line>
            <UtopianBreak size="sm" className={styles.break} />
            <nav className={styles.crumbs} aria-label="Breadcrumb">
              <Link href="/work">Work</Link>
              <span aria-hidden="true">/</span>
              <span>{item.client}</span>
            </nav>
          </div>

          <p className={styles.heroClient} data-case-line>
            {item.client}
          </p>
          <h1 className={styles.heroTitle} data-case-line>
            {item.title}
          </h1>
          <p className={styles.heroSummary} data-case-line>
            {item.summary}
          </p>

          <dl className={styles.credits} data-case-line>
            <div>
              <dt>Industry</dt>
              <dd>{item.industry}</dd>
            </div>
            {item.year ? (
              <div>
                <dt>Year</dt>
                <dd>{item.year}</dd>
              </div>
            ) : null}
            {item.liveUrl ? (
              <div>
                <dt>Live</dt>
                <dd>
                  <a
                    href={item.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.liveUrl.replace(/^https?:\/\//, "")} ↗
                  </a>
                </dd>
              </div>
            ) : null}
          </dl>
        </div>
      </div>
    </header>
  );
}

function CaseActs({
  acts,
  image,
  client,
}: {
  acts: Act[];
  image?: string;
  client: string;
}) {
  const rootRef = useRef<HTMLElement | null>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const root = rootRef.current;
    if (!root || acts.length === 0) return;

    const stage = root.querySelector<HTMLElement>("[data-acts-stage]");
    const panels = gsap.utils.toArray<HTMLElement>(
      root.querySelectorAll("[data-act-panel]"),
    );
    const plate = root.querySelector<HTMLElement>("[data-acts-plate]");
    const reveal = root.querySelector<HTMLElement>("[data-acts-reveal]");

    if (!stage || panels.length === 0) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      gsap.set(panels, { autoAlpha: 0 });
      gsap.set(panels[0], { autoAlpha: 1 });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.set(panels, { autoAlpha: 0, y: 28 });
      gsap.set(panels[0], { autoAlpha: 1, y: 0 });
      if (plate) gsap.set(plate, { scale: 1.14 });
      if (reveal) gsap.set(reveal, { clipPath: "inset(0% 100% 0% 0%)" });

      const seg = 1 / acts.length;
      let last = -1;

      ScrollTrigger.create({
        trigger: stage,
        start: "top top",
        end: () =>
          `+=${Math.round(window.innerHeight * Math.max(4.2, acts.length * 1.45))}`,
        pin: true,
        pinSpacing: true,
        scrub: 0.65,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const idx = Math.min(
            acts.length - 1,
            Math.floor(self.progress / seg + 0.001),
          );
          const local = (self.progress - idx * seg) / seg;

          if (idx !== last) {
            last = idx;
            setActive(idx);
            panels.forEach((p, i) => {
              gsap.to(p, {
                autoAlpha: i === idx ? 1 : 0,
                y: i === idx ? 0 : 20,
                duration: 0.35,
                overwrite: true,
              });
            });
          }

          if (plate) {
            gsap.set(plate, {
              scale: gsap.utils.interpolate(1.14, 1, self.progress),
            });
          }
          if (reveal) {
            const wipe = gsap.utils.clamp(0, 1, local * 1.15);
            const open = Math.round((1 - wipe) * 100);
            gsap.set(reveal, {
              clipPath: `inset(0% ${open}% 0% 0%)`,
            });
          }
        },
      });
    }, root);

    return () => ctx.revert();
  }, [acts.length]);

  return (
    <section ref={rootRef} className={styles.acts} aria-label="Case narrative">
      <div className={styles.actsStage} data-acts-stage>
        <div className={styles.actsMedia} aria-hidden="true">
          {image ? (
            <div className={styles.actsPlate} data-acts-plate>
              <div data-acts-reveal className={styles.actsReveal}>
                <Image
                  src={image}
                  alt=""
                  fill
                  sizes="100vw"
                  className={styles.actsImg}
                />
              </div>
            </div>
          ) : null}
          <div className={styles.actsVeil} />
        </div>

        <div className={styles.actsHead}>
          <div className={styles.actsHeadTop}>
            <UtopianBreak size="sm" className={styles.break} />
            <p className={styles.actsEyebrow}>Narrative · {client}</p>
          </div>
          <p className={styles.actsCounter} aria-live="polite">
            {String(active + 1).padStart(2, "0")}
            <span>/</span>
            {String(acts.length).padStart(2, "0")}
          </p>
        </div>

        <div className={styles.actsPanels}>
          {acts.map((act) => (
            <div key={act.tag} className={styles.actsPanel} data-act-panel>
              <p className={styles.actTag}>{act.tag}</p>
              <h2 className={styles.actTitle}>{act.title}</h2>
              {act.body.map((para) => (
                <p key={para.slice(0, 48)} className={styles.actBody}>
                  {para}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseImpact({
  stats,
  image,
}: {
  stats: NonNullable<CaseStudy["stats"]>;
  image?: string;
}) {
  const rootRef = useRef<HTMLElement | null>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const root = rootRef.current;
    if (!root || stats.length === 0) return;

    const stage = root.querySelector<HTMLElement>("[data-impact-stage]");
    const panels = gsap.utils.toArray<HTMLElement>(
      root.querySelectorAll("[data-impact-panel]"),
    );
    const plate = root.querySelector<HTMLElement>("[data-impact-plate]");

    if (!stage || panels.length === 0) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      gsap.set(panels, { autoAlpha: 0 });
      gsap.set(panels[0], { autoAlpha: 1 });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.set(panels, { autoAlpha: 0, y: 40, scale: 0.96 });
      gsap.set(panels[0], { autoAlpha: 1, y: 0, scale: 1 });
      if (plate) gsap.set(plate, { scale: 1.12 });

      const seg = 1 / stats.length;
      let last = -1;

      ScrollTrigger.create({
        trigger: stage,
        start: "top top",
        end: () =>
          `+=${Math.round(window.innerHeight * Math.max(3.6, stats.length * 1.1))}`,
        pin: true,
        pinSpacing: true,
        scrub: 0.7,
        anticipatePin: 1,
        onUpdate: (self) => {
          const idx = Math.min(
            stats.length - 1,
            Math.floor(self.progress / seg + 0.001),
          );
          if (idx !== last) {
            last = idx;
            setActive(idx);
            panels.forEach((p, i) => {
              gsap.to(p, {
                autoAlpha: i === idx ? 1 : 0,
                y: i === idx ? 0 : 28,
                scale: i === idx ? 1 : 0.96,
                duration: 0.4,
                overwrite: true,
              });
            });
          }
          if (plate) {
            gsap.set(plate, {
              scale: gsap.utils.interpolate(1.12, 1, self.progress),
            });
          }
        },
      });
    }, root);

    return () => ctx.revert();
  }, [stats.length]);

  return (
    <section ref={rootRef} className={styles.impact} aria-label="Impact">
      <div className={styles.impactStage} data-impact-stage>
        {image ? (
          <div className={styles.impactMedia} aria-hidden="true">
            <div className={styles.impactPlate} data-impact-plate>
              <Image
                src={image}
                alt=""
                fill
                sizes="100vw"
                className={styles.impactImg}
              />
            </div>
            <div className={styles.impactVeil} />
          </div>
        ) : null}

        <div className={styles.impactHead}>
          <UtopianBreak size="sm" className={styles.break} />
          <p className={styles.sectionEyebrow}>Impact</p>
          <p className={styles.impactCounter} aria-live="polite">
            {String(active + 1).padStart(2, "0")}
            <span>/</span>
            {String(stats.length).padStart(2, "0")}
          </p>
        </div>

        <div className={styles.impactPanels}>
          {stats.map((stat) => (
            <div key={stat.label} className={styles.impactPanel} data-impact-panel>
              <p className={styles.statValue}>{stat.value}</p>
              <h2 className={styles.statLabel}>{stat.label}</h2>
              {stat.detail ? (
                <p className={styles.statDetail}>{stat.detail}</p>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseShipped({
  items,
  image,
}: {
  items: NonNullable<CaseStudy["deliverables"]>;
  image?: string;
}) {
  const rootRef = useRef<HTMLElement | null>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const root = rootRef.current;
    if (!root || items.length === 0) return;

    const stage = root.querySelector<HTMLElement>("[data-ship-stage]");
    const panels = gsap.utils.toArray<HTMLElement>(
      root.querySelectorAll("[data-ship-panel]"),
    );
    const plate = root.querySelector<HTMLElement>("[data-ship-plate]");

    if (!stage || panels.length === 0) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      gsap.set(panels, { autoAlpha: 0 });
      gsap.set(panels[0], { autoAlpha: 1 });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.set(panels, { autoAlpha: 0, y: 32 });
      gsap.set(panels[0], { autoAlpha: 1, y: 0 });
      if (plate) gsap.set(plate, { scale: 1.1 });

      const seg = 1 / items.length;
      let last = -1;

      ScrollTrigger.create({
        trigger: stage,
        start: "top top",
        end: () =>
          `+=${Math.round(window.innerHeight * Math.max(3.2, items.length * 0.95))}`,
        pin: true,
        pinSpacing: true,
        scrub: 0.65,
        anticipatePin: 1,
        onUpdate: (self) => {
          const idx = Math.min(
            items.length - 1,
            Math.floor(self.progress / seg + 0.001),
          );
          if (idx !== last) {
            last = idx;
            setActive(idx);
            panels.forEach((p, i) => {
              gsap.to(p, {
                autoAlpha: i === idx ? 1 : 0,
                y: i === idx ? 0 : 24,
                duration: 0.35,
                overwrite: true,
              });
            });
          }
          if (plate) {
            gsap.set(plate, {
              scale: gsap.utils.interpolate(1.1, 1, self.progress),
            });
          }
        },
      });
    }, root);

    return () => ctx.revert();
  }, [items.length]);

  return (
    <section ref={rootRef} className={styles.shipped} aria-label="Deliverables">
      <div className={styles.shipStage} data-ship-stage>
        {image ? (
          <div className={styles.shipMedia} aria-hidden="true">
            <div className={styles.shipPlate} data-ship-plate>
              <Image
                src={image}
                alt=""
                fill
                sizes="100vw"
                className={styles.shipImg}
              />
            </div>
            <div className={styles.shipVeil} />
          </div>
        ) : null}

        <div className={styles.shipHead}>
          <div className={styles.shipHeadTop}>
            <UtopianBreak size="sm" className={styles.break} />
            <p className={styles.sectionEyebrow}>Shipped</p>
          </div>
          <p className={styles.shipCounter} aria-live="polite">
            {String(active + 1).padStart(2, "0")}
            <span>/</span>
            {String(items.length).padStart(2, "0")}
          </p>
        </div>

        <div className={styles.shipPanels}>
          {items.map((item, i) => (
            <div key={item.title} className={styles.shipPanel} data-ship-panel>
              <p className={styles.shippedNum}>
                DELIVERABLE {String(i + 1).padStart(2, "0")}
              </p>
              <h2 className={styles.shippedTitle}>{item.title}</h2>
              <p className={styles.shippedDesc}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseVoice({
  quote,
  author,
  role,
  image,
  lesson,
  stack,
}: {
  quote: string;
  author: string;
  role: string;
  image?: string;
  lesson?: string;
  stack?: string[];
}) {
  const rootRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const stage = root.querySelector<HTMLElement>("[data-voice-stage]");
    const plate = root.querySelector<HTMLElement>("[data-voice-plate]");
    const lines = root.querySelectorAll("[data-voice-line]");
    if (!stage) return;

    const ctx = gsap.context(() => {
      if (plate) gsap.set(plate, { scale: 1.12 });
      gsap.set(lines, { autoAlpha: 0, y: 28 });

      ScrollTrigger.create({
        trigger: stage,
        start: "top top",
        end: () => `+=${Math.round(window.innerHeight * 1.8)}`,
        pin: true,
        pinSpacing: true,
        scrub: 0.65,
        onUpdate: (self) => {
          if (plate) {
            gsap.set(plate, {
              scale: gsap.utils.interpolate(1.12, 1, self.progress),
            });
          }
          const reveal = gsap.utils.clamp(0, 1, (self.progress - 0.1) / 0.4);
          lines.forEach((el, i) => {
            const local = gsap.utils.clamp(0, 1, (reveal - i * 0.08) / 0.35);
            gsap.set(el, {
              autoAlpha: local,
              y: gsap.utils.interpolate(28, 0, local),
            });
          });
        },
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={rootRef} className={styles.voice} aria-label="Client voice">
      <div className={styles.voiceStage} data-voice-stage>
        {image ? (
          <div className={styles.voicePlate} data-voice-plate aria-hidden="true">
            <Image src={image} alt="" fill sizes="100vw" className={styles.voiceImg} />
            <div className={styles.voiceVeil} />
          </div>
        ) : null}
        <div className={styles.voiceInner}>
          <div data-voice-line>
            <UtopianBreak size="sm" className={styles.break} />
          </div>
          <blockquote className={styles.voiceQuote} data-voice-line>
            {quote}
          </blockquote>
          <footer className={styles.voiceFooter} data-voice-line>
            <cite className={styles.voiceAuthor}>{author}</cite>
            <span className={styles.voiceRole}>{role}</span>
          </footer>
          {lesson ? (
            <p className={styles.lesson} data-voice-line>
              {lesson}
            </p>
          ) : null}
          {stack && stack.length > 0 ? (
            <ul className={styles.stackList} data-voice-line>
              {stack.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </section>
  );
}

function CaseNext({ item }: { item: CaseStudy }) {
  return (
    <Link href={`/work/${item.slug}`} className={styles.next}>
      {item.image ? (
        <div className={styles.nextPlate} aria-hidden="true">
          <Image
            src={item.image}
            alt=""
            fill
            sizes="100vw"
            className={styles.nextImg}
          />
          <div className={styles.nextVeil} />
        </div>
      ) : null}
      <div className={styles.nextInner}>
        <p className={styles.nextLabel}>Next case</p>
        <p className={styles.nextClient}>{item.client}</p>
        <h2 className={styles.nextTitle}>{item.title}</h2>
        <span className={styles.nextCta}>
          Continue <span aria-hidden="true">→</span>
        </span>
      </div>
    </Link>
  );
}
