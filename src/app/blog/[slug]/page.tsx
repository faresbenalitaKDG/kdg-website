"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";

const blogImages: Record<string, string> = {
  "onboarding-best-practices":
    "https://placehold.co/800x400/1f2937/9ca3af?text=Onboarding",
  "react-supabase-onboarding":
    "https://placehold.co/800x400/1f2937/9ca3af?text=Tech+Stack",
  "virtual-tours-future":
    "https://placehold.co/800x400/1f2937/9ca3af?text=Virtual+Tours",
  "project-learnings":
    "https://placehold.co/800x400/1f2937/9ca3af?text=Learnings",
};

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;
  const { t } = useLanguage();

  const post = t.blog.posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="mx-auto max-w-2xl px-6 py-24 text-center">
        <h1 className="mb-4 text-2xl font-bold text-zinc-900 dark:text-white">
          Post not found
        </h1>
        <Link
          href="/#blog"
          className="text-zinc-600 underline hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
        >
          {t.blog.backToBlog}
        </Link>
      </div>
    );
  }

  return (
    <article className="min-h-screen bg-white dark:bg-zinc-950">
      <div className="mx-auto max-w-3xl px-6 pt-24 pb-24">
        <Link
          href="/#blog"
          className="mb-8 inline-block text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
        >
          ← {t.blog.backToBlog}
        </Link>
        <header className="mb-12">
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-5xl">
            {post.title}
          </h1>
          <p className="text-zinc-500 dark:text-zinc-400">
            {post.author} · {post.date}
          </p>
        </header>
        <div className="relative mb-12 aspect-video overflow-hidden rounded-lg bg-zinc-200 dark:bg-zinc-800">
          <img
            src={blogImages[post.slug] || blogImages["onboarding-best-practices"]}
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
        <div className="prose prose-zinc dark:prose-invert max-w-none">
          {post.content.map((paragraph, i) => (
            <p
              key={i}
              className="mb-6 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </article>
  );
}
