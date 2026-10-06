"use client";

import { useState } from "react";
import Link from "next/link";
import { ReviewHeader } from "@/components/review/ReviewHeader";
import { AmbientField, SmoothScrollProvider } from "@/components/motion";
import { SiteFooter } from "@/components/layout";
import { REVIEW_BLOG_POSTS, ReviewBlogPost } from "@/data/reviewContent";
import styles from "@/styles/blog/Blog.module.css";

const CATEGORIES = [
  "ALL PERSPECTIVES",
  "BRAND & DESIGN",
  "ENGINEERING",
  "GROWTH SYSTEMS",
  "CGI & SPATIAL",
  "REPUTATION",
] as const;

export default function ReviewBlogIndexPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL PERSPECTIVES");

  const filteredPosts =
    selectedCategory === "ALL PERSPECTIVES"
      ? REVIEW_BLOG_POSTS
      : REVIEW_BLOG_POSTS.filter((p) => p.category === selectedCategory);

  return (
    <SmoothScrollProvider>
      <AmbientField />
      <ReviewHeader />

      <main className={styles.blogPage} style={{ paddingTop: "140px" }}>
        {/* Editorial Hero Lockup */}
        <section className={styles.heroBlock}>
          <div className={styles.topMeta}>
            <span>01 // DRAFT JOURNAL</span>
            <span className={styles.metaDot}>·</span>
            <span className={styles.metaTag}>10 REAL ARTICLES FROM 13UTOPIA.COM</span>
          </div>

          <h1 className={styles.title}>
            PERSPECTIVES &amp;<br />
            ARCHITECTURAL DISPATCHES
          </h1>

          <p className={styles.subtitle}>
            Actual real-world dispatches from 13utopia.com — rewritten into first-principles engineering and brand strategy with zero AI slop, zero mythology tropes, and high-contrast typography.
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
          {filteredPosts.map((post: ReviewBlogPost) => (
            <Link
              key={post.slug}
              href={`/review/blog/${post.slug}`}
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
                  <span>Review Draft</span>
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
