"use client";

import Link from "next/link";
import { HubBridge, HubCloser } from "@/components/ui/HubChrome";
import { MediaPlaceholder } from "@/components/ui/MediaPlaceholder";
import { PageReveal } from "@/components/motion/PageReveal";
import hub from "@/styles/ui/HubBody.module.css";

type PracticeListProps = {
  title?: string;
  items: string[];
};

export function PracticeList({ title = "Practices", items }: PracticeListProps) {
  return (
    <PageReveal>
      <h2 className={hub.subhead} data-reveal>
        {title}
      </h2>
      <ul className={hub.practiceList} data-reveal>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </PageReveal>
  );
}

type PhaseProps = {
  phases: { title: string; body: string }[];
};

export function PhaseRail({ phases }: PhaseProps) {
  return (
    <PageReveal>
      <ol className={hub.phaseRail}>
        {phases.map((phase, i) => (
          <li key={phase.title} data-reveal>
            <span className={hub.phaseNum}>{String(i + 1).padStart(2, "0")}</span>
            <div>
              <h3 className={hub.phaseTitle}>{phase.title}</h3>
              <p className={hub.phaseBody}>{phase.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </PageReveal>
  );
}

type ProseProps = {
  paragraphs: string[];
};

export function ProseBlock({ paragraphs }: ProseProps) {
  return (
    <PageReveal>
      <div className={hub.prose} data-reveal>
        {paragraphs.map((p) => (
          <p key={p.slice(0, 48)}>{p}</p>
        ))}
      </div>
    </PageReveal>
  );
}

type MediaBreakProps = {
  need: string;
  brief?: string;
  tone?: "dark" | "warm" | "create" | "build" | "grow" | "strategy";
  aspect?: "hero" | "wide" | "square" | "portrait" | "film";
};

export function MediaBreak({
  need,
  brief,
  tone = "warm",
  aspect = "wide",
}: MediaBreakProps) {
  return (
    <div className={hub.mediaBreak}>
      <MediaPlaceholder aspect={aspect} tone={tone} need={need} brief={brief} />
    </div>
  );
}

type DetailCloserProps = {
  title?: string;
  lead?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export function DetailCloser({
  title = "Ready to begin?",
  lead = "Bring the outcome. We’ll assemble Create, Build, and Grow around it.",
  secondaryHref = "/capabilities",
  secondaryLabel = "Explore capabilities",
}: DetailCloserProps) {
  return (
    <HubCloser
      title={title}
      lead={lead}
      secondaryHref={secondaryHref}
      secondaryLabel={secondaryLabel}
    />
  );
}

export function DetailBridge(props: {
  eyebrow?: string;
  statement: string;
  support?: string;
  need: string;
  tone?: "dark" | "warm" | "create" | "build" | "grow" | "strategy";
}) {
  return <HubBridge {...props} />;
}

export function DetailCtaRow({
  primaryHref = "/connect/start-a-project",
  primaryLabel = "Start a Project",
  secondaryHref,
  secondaryLabel,
}: {
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}) {
  return (
    <div className={hub.ctaRow}>
      <Link href={primaryHref} className={hub.ctaPrimary} data-magnetic>
        {primaryLabel}
        <span aria-hidden="true"> →</span>
      </Link>
      {secondaryHref && secondaryLabel ? (
        <Link href={secondaryHref} className={hub.ctaSecondary}>
          {secondaryLabel}
        </Link>
      ) : null}
    </div>
  );
}
