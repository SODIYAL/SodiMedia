"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { blogPosts } from "@/data/blog-posts";

export default function BlogPage() {
  return (
    <div className="py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-12 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading text-4xl font-bold md:text-5xl"
          >
            Our <span className="gradient-text">Blog</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-lg text-muted"
          >
            Insights, tutorials, and thoughts on modern web development.
          </motion.p>
        </div>

        <div className="space-y-8">
          {blogPosts.map((post, i) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <Link
                href={`/blog/${post.slug}`}
                className="group block rounded-xl border border-border bg-card p-8 transition-all hover:border-accent/50 hover:shadow-lg hover:shadow-accent/5"
              >
                <div className="flex flex-wrap items-center gap-3 text-sm text-muted">
                  <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                    {post.category}
                  </span>
                  <span>{post.date}</span>
                  <span>·</span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="mt-4 font-heading text-2xl font-semibold transition-colors group-hover:text-accent">
                  {post.title}
                </h2>
                <p className="mt-3 text-muted leading-relaxed">
                  {post.excerpt}
                </p>
                <span className="mt-4 inline-block text-sm font-medium text-accent">
                  Read More →
                </span>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
