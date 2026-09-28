"use client";

import Link from "next/link";
import { MotionMedia, type MotionImage } from "@/components/motion/MotionMedia";
import { PageReveal } from "@/components/motion/PageReveal";
import { ClipReveal } from "@/components/motion/ClipReveal";
import { MaskHover } from "@/components/motion/MaskHover";
import { HoverTilt } from "@/components/motion/HoverTilt";
import { SvgDraw } from "@/components/motion/SvgDraw";
import { TextSplit } from "@/components/motion/TextSplit";
import { AccordionRail } from "@/components/motion/AccordionRail";
import { HubBridge, HubCloser } from "@/components/ui/HubChrome";
import { plateForTone, type PlateTone } from "@/content/plates";
import hub from "@/styles/ui/HubBody.module.css";

type PracticeListProps = {
  title?: string;
  items: string[];
};

export function PracticeList({ title = "Practices", items }: PracticeListProps) {
  return (
    <PageReveal>
      <SvgDraw variant="rule" className={hub.detailRule} />
      <TextSplit as="h2" mode="word" className={hub.subhead}>
        {title}
      </TextSplit>
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
    <AccordionRail
      eyebrow="Phases"
      lead="How the engagement moves."
      items={phases.map((phase) => ({
        title: phase.title,
        body: phase.body,
      }))}
    />
  );
}

type ProseProps = {
  paragraphs: string[];
};

export function ProseBlock({ paragraphs }: ProseProps) {
  return (
    <PageReveal>
      <SvgDraw variant="flourish" className={hub.detailFlourish} />
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
  tone?: PlateTone;
  aspect?: "hero" | "wide" | "square" | "portrait" | "film";
  image?: MotionImage;
};

export function MediaBreak({
  need,
  tone = "warm",
  aspect = "wide",
  image,
}: MediaBreakProps) {
  return (
    <ClipReveal>
      <div className={hub.mediaBreak}>
        <MaskHover>
          <HoverTilt max={4}>
            <div data-mask-media>
              <MotionMedia
                aspect={aspect}
                tone={tone}
                need={need}
                image={image ?? plateForTone(tone)}
                fill={false}
                sizes="100vw"
              />
            </div>
          </HoverTilt>
        </MaskHover>
      </div>
    </ClipReveal>
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
  tone?: PlateTone;
  image?: MotionImage;
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
        <Link href={secondaryHref} className={hub.ctaSecondary} data-magnetic>
          {secondaryLabel}
        </Link>
      ) : null}
    </div>
  );
}
