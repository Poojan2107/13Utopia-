"use client";

import React from "react";
import styles from "./about.module.css";

interface ArticleItem {
  title: string;
  source: string;
  href: string;
}

interface TalkItem {
  event: string;
  date: string;
  location: string;
}

const ARTICLES: ArticleItem[] = [
  {
    title: "Driven By Dreams",
    source: "Porsche Newsroom",
    href: "https://newsroom.porsche.com/en_US/2023/company/porsche-great-britain-wallpaper-lusion-short-film-ferry-porsche-356-london-driven-by-dreams-30982.html",
  },
  {
    title: "Driven by Dreams: Digital Alchemy",
    source: "Wallpaper*",
    href: "https://www.wallpaper.com/art/porsche-driven-by-dreams",
  },
  {
    title: "The Turn of the Screw Trailer",
    source: "Opera North",
    href: "https://www.operanorth.co.uk/news/cutting-edge-creeps-with-new-trailer-for-the-turn-of-the-screw/",
  },
];

const TALKS: TalkItem[] = [
  {
    event: "Digital Design Days",
    date: "Oct 2024",
    location: "Milan",
  },
  {
    event: "Awwwards Conference",
    date: "Oct 2023",
    location: "Amsterdam",
  },
  {
    event: "KIKK Festival",
    date: "Oct 2023",
    location: "Namur",
  },
  {
    event: "Awwwards Conference",
    date: "Oct 2022",
    location: "Amsterdam",
  },
  {
    event: "Grow Paris",
    date: "Nov 2018",
    location: "Paris",
  },
];

export function AboutPressTalks() {
  return (
    <section className={styles.pressTalksSection} id="press-talks">
      <div className={styles.pressTalksGrid}>
        {/* Articles Column */}
        <div>
          <div className={styles.sectionHeaderRow}>
            <h2 className={styles.sectionHeading}>Articles</h2>
            <span className={styles.sectionTotalBadge}>03</span>
          </div>

          <div>
            {ARTICLES.map((article) => (
              <a
                key={article.title}
                href={article.href}
                target="_blank"
                rel="noreferrer"
                className={styles.articleCard}
              >
                <div>
                  <h3 className={styles.articleTitle}>{article.title}</h3>
                  <span className={styles.talkMeta}>{article.source}</span>
                </div>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* Talks Column */}
        <div>
          <div className={styles.sectionHeaderRow}>
            <h2 className={styles.sectionHeading}>Talks</h2>
            <span className={styles.sectionTotalBadge}>05</span>
          </div>

          <div>
            {TALKS.map((talk, idx) => (
              <div key={idx} className={styles.talkItemRow}>
                <h3 className={styles.talkTitle}>{talk.event}</h3>
                <span className={styles.talkMeta}>
                  {talk.date} • {talk.location}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
