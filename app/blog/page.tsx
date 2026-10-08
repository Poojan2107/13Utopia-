"use client";

import Link from "next/link";
import Image from "next/image";
import { SiteHeader, SiteFooter } from "@/components/layout";
import { AmbientField, SmoothScrollProvider, ScrollBlurText } from "@/components/motion";
import { BLOG_POSTS, BlogPost } from "@/data/blog";
import styles from "@/styles/blog/Blog.module.css";

export default function BlogIndexPage() {
  return (
    <SmoothScrollProvider>
      {/* Signature 3D Titanium "13" Emblem & Nebula Atmosphere - Centered */}
      <AmbientField showEmblem={false} />
      <SiteHeader />

      <main className={styles.blogPage}>
        {/* Full Viewport Centered Hero */}
        <section className={styles.heroBlock}>
          <div className={styles.heroContent}>
            <ScrollBlurText isHero maxBlur={16} interactiveFocus glowOnFocus>
              <h1 className={styles.title}>
                INSIGHTS. SIGNALS. DISPATCHES.
              </h1>
            </ScrollBlurText>

            <p className={styles.subtitle}>
              Architectural perspectives on brand systems, high-performance engineering, and compounding commercial growth.
            </p>
          </div>
        </section>

        {/* Visual-First Editorial Journal Grid */}
        <section className={styles.postsSection}>
          <div className={styles.postsGrid}>
            {BLOG_POSTS.map((post: BlogPost, idx: number) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className={styles.postCard}
                data-cursor="hover"
              >
                {/* Visual Media Showcase */}
                <div className={styles.cardVisualContainer}>
                  <Image
                    src={post.image || "/images/world-create.jpg"}
                    alt={post.title}
                    fill
                    sizes="(max-width: 900px) 100vw, 50vw"
                    className={styles.cardImage}
                    priority={idx < 2}
                  />
                  <div className={styles.cardVisualScrim} />
                  
                  <div className={styles.cardVisualBadges}>
                    <span className={styles.cardIndex}>0{idx + 1}</span>
                    <span className={styles.cardCategory}>{post.category}</span>
                  </div>
                </div>

                {/* Minimalist Info Block */}
                <div className={styles.cardContent}>
                  <div className={styles.cardMetaRail}>
                    <span className={styles.cardReadTime}>{post.readTime}</span>
                    <span className={styles.cardDot}>·</span>
                    <span className={styles.cardDate}>{post.date}</span>
                  </div>

                  <h2 className={styles.cardTitle}>{post.title}</h2>

                  <div className={styles.cardFooter}>
                    <span className={styles.authorName}>{post.author.name}</span>

                    <span className={styles.readLink}>
                      <span>VIEW DISPATCH</span>
                      <span className={styles.readArrow} aria-hidden="true">→</span>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <SiteFooter />
    </SmoothScrollProvider>
  );
}

