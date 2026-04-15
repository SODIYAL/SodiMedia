import { notFound } from "next/navigation";
import Link from "next/link";
import { blogPosts } from "@/data/blog-posts";
import type { Metadata } from "next";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} — SodiMedia Blog`,
    description: post.excerpt,
  };
}

function renderContent(content: string) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let key = 0;

  for (const line of lines) {
    if (line.startsWith("## ")) {
      elements.push(
        <h2
          key={key++}
          className="mt-10 mb-4 font-heading text-2xl font-bold"
        >
          {line.slice(3)}
        </h2>
      );
    } else if (line.trim() === "") {
      // skip empty lines
    } else {
      elements.push(
        <p key={key++} className="mb-4 leading-relaxed text-muted">
          {line}
        </p>
      );
    }
  }

  return elements;
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="py-24">
      <div className="mx-auto max-w-3xl px-6">
        {/* Back link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
        >
          ← Back to Blog
        </Link>

        {/* Header */}
        <div className="mt-8">
          <div className="flex flex-wrap items-center gap-3 text-sm text-muted">
            <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
              {post.category}
            </span>
            <span>{post.date}</span>
            <span>·</span>
            <span>{post.readTime}</span>
            <span>·</span>
            <span>By {post.author}</span>
          </div>
          <h1 className="mt-4 font-heading text-3xl font-bold md:text-4xl">
            {post.title}
          </h1>
          <p className="mt-4 text-lg text-muted">{post.excerpt}</p>
        </div>

        {/* Divider */}
        <hr className="mt-8 border-border" />

        {/* Content */}
        <div className="mt-8">{renderContent(post.content)}</div>

        {/* Footer */}
        <div className="mt-16 rounded-xl border border-border bg-card p-8 text-center">
          <h3 className="font-heading text-xl font-semibold">
            Enjoyed this article?
          </h3>
          <p className="mt-2 text-muted">
            Let&apos;s work together on your next project.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-block rounded-full bg-accent px-8 py-3 text-sm font-semibold text-background transition-all hover:bg-accent/80"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </article>
  );
}
