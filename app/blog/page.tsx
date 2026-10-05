"use client";

import { useState } from "react";
import Link from "next/link";
import { SiteHeader, SiteFooter } from "@/components/layout";
import { AmbientField, SmoothScrollProvider } from "@/components/motion";
import { BLOG_POSTS, BlogPost } from "@/data/blog";
import styles from "@/styles/blog/Blog.module.css";

const CATEGORIES = [
  "ALL PERSPECTIVES",
  "BRAND & DESIGN",
  "ENGINEERING",
  "GROWTH SYSTEMS",
  "CGI & SPATIAL",
  "REPUTATION",
  "AI & AUTOMATION",
] as const;

export default function BlogIndexPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL PERSPECTIVES");

  const filteredPosts =
    selectedCategory === "ALL PERSPECTIVES"
      ? BLOG_POSTS
      : BLOG_POSTS.filter((p) => p.category === selectedCategory);

  return (
    <SmoothScrollProvider>
      <AmbientField />
      <SiteHeader />

      <main className={styles.blogPage}>
        {/* Editorial Hero Lockup */}
        <section className={styles.heroBlock}>
          <div className={styles.topMeta}>
            <span>05 // JOURNAL</span>
            <span className={styles.metaDot}>·</span>
            <span className={styles.metaTag}>PERSPECTIVES &amp; ARCHITECTURAL ESSAYS</span>
          </div>

          <h1 className={styles.title}>
            PERSPECTIVES &amp;<br />
            ARCHITECTURAL ESSAYS
          </h1>

          <p className={styles.subtitle}>
            Deep dives into brand strategy, full-stack systems engineering, autonomous AI workflows,
            and growth mechanics from 13 Utopia practitioners.
          </p>
        </section>

        {/* Category Filter Bar */}
        <div className={styles.categoryFilterBar}>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`${styles.filterBtn} ${
                selectedCategory === cat ? styles.filterBtnActive : ""
              }`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Post Grid */}
        <div className={styles.postsGrid}>
          {filteredPosts.map((post: BlogPost) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className={styles.postCard}
            >
              <div className={styles.cardHeader}>
                <span className={styles.cardCategory}>{post.category}</span>
                <span className={styles.cardReadTime}>{post.readTime}</span>
              </div>

              <h2 className={styles.cardTitle}>{post.title}</h2>
              <p className={styles.cardExcerpt}>{post.excerpt}</p>

              <div className={styles.cardFooter}>
                <div className={styles.cardAuthor}>
                  <span className={styles.authorName}>{post.author.name}</span>
                  <span className={styles.authorRole}>{post.author.role}</span>
                </div>

                <span className={styles.readLink}>
                  <span>Read Essay</span>
                  <span className={styles.readArrow}>↗</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <SiteFooter />
    </SmoothScrollProvider>
  );
}
