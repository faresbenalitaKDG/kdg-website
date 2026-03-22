"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

const blogImages = [
  "https://placehold.co/600x400/1f2937/9ca3af?text=Onboarding",
  "https://placehold.co/600x400/1f2937/9ca3af?text=Tech+Stack",
  "https://placehold.co/600x400/1f2937/9ca3af?text=Virtual+Tours",
  "https://placehold.co/600x400/1f2937/9ca3af?text=Learnings",
  "https://placehold.co/600x400/1f2937/9ca3af?text=Why+Onboarding+Is+Harder",
];

export default function Blog() {
  const { t } = useLanguage();

  return (
    <section
      id="blog"
      className="bg-zinc-100 px-6 py-24 dark:bg-zinc-900"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-4 h-1 w-12 rounded-full bg-indigo-500" />
        <h2 className="mb-16 font-[family-name:var(--font-jakarta)] text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
          {t.blog.title}
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {t.blog.posts.map((post, i) => (
            <article
              key={i}
              className="group overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/5 dark:bg-zinc-950 dark:hover:shadow-indigo-500/10"
            >
              <div className="relative aspect-[3/2] overflow-hidden bg-zinc-200 dark:bg-zinc-800">
                <img
                  src={blogImages[i]}
                  alt=""
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
              <div className="p-6">
                <h3 className="mb-2 font-[family-name:var(--font-jakarta)] text-lg font-semibold text-zinc-900 dark:text-white">
                  <Link href={`/blog/${post.slug}`} className="hover:text-indigo-600 dark:hover:text-indigo-400">
                    {post.title}
                  </Link>
                </h3>
                <p className="mb-3 text-sm text-zinc-500 dark:text-zinc-400">
                  {post.author} · {post.date}
                </p>
                <p className="mb-4 line-clamp-3 text-sm text-zinc-600 dark:text-zinc-400">
                  {post.excerpt}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-medium text-indigo-600 transition-colors hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300"
                >
                  {t.blog.readMore}
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
