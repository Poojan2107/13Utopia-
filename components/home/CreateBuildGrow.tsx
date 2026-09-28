"use client";

import Image from "next/image";
import Link from "next/link";
import { plates } from "@/content/plates";
import { liveServices } from "@/content/site";
import styles from "@/styles/home/CreateBuildGrow.module.css";

const WORLDS = [
  {
    slug: "create",
    title: "Create",
    verb: "What should exist.",
    body: "Brand, design, experience, and CGI — how a business is understood and felt before it is sold.",
    services: liveServices.filter((s) => s.world === "create").map((s) => s.title),
    plate: plates.create,
    cta: "Explore Create",
  },
  {
    slug: "build",
    title: "Build",
    verb: "What does not exist yet.",
    body: "Web development and digital products — sites and systems that have to work on day one.",
    services: liveServices.filter((s) => s.world === "build").map((s) => s.title),
    plate: plates.build,
    cta: "Explore Build",
  },
  {
    slug: "grow",
    title: "Grow",
    verb: "What you have made.",
    body: "SEO, digital marketing, email, and reputation — attention turned into durable demand.",
    services: liveServices.filter((s) => s.world === "grow").map((s) => s.title),
    plate: plates.grow,
    cta: "Explore Grow",
  },
] as const;

export function CreateBuildGrow() {
  return (
    <section
      id="worlds"
      className={styles.wrap}
      aria-labelledby="capabilities-title"
    >
      <div className={styles.stage}>
        <header className={styles.top}>
          <p className={styles.kicker}>Capabilities</p>
          <h2 id="capabilities-title" className={styles.sectionTitle}>
            Create. Build. Grow.
          </h2>
          <p className={styles.eyebrow}>
            Six live services — organized so you can compare them side by side.
          </p>
        </header>

        <ul className={styles.grid}>
          {WORLDS.map((w, i) => (
            <li
              key={w.slug}
              className={styles.card}
              data-world={w.slug}
              style={{ ["--i" as string]: i }}
            >
              <Link href={`/capabilities/${w.slug}`} className={styles.cardLink}>
                <div className={styles.media}>
                  <Image
                    src={w.plate.src}
                    alt={w.plate.alt}
                    fill
                    sizes="(max-width: 900px) 100vw, 33vw"
                    className={styles.mediaImg}
                    style={{ objectPosition: w.plate.objectPosition }}
                    priority={w.slug === "create"}
                  />
                  <span className={styles.mediaVeil} aria-hidden="true" />
                  <span className={styles.mediaIndex} aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className={styles.copy}>
                  <h3 className={styles.title}>{w.title}</h3>
                  <p className={styles.verb}>{w.verb}</p>
                  <p className={styles.body}>{w.body}</p>
                  {w.services.length ? (
                    <ul className={styles.serviceList}>
                      {w.services.map((s) => (
                        <li key={s}>{s}</li>
                      ))}
                    </ul>
                  ) : null}
                  <span className={styles.link}>
                    {w.cta}
                    <span aria-hidden="true"> →</span>
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>

        <Link href="/capabilities" className={styles.all}>
          All capabilities
          <span aria-hidden="true"> →</span>
        </Link>
      </div>
    </section>
  );
}
