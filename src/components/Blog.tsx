"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

const blogImages = [
  "https://placehold.co/600x400/1f2937/9ca3af?text=Onboarding",
  "https://placehold.co/600x400/1f2937/9ca3af?text=Tech+Stack",
  "https://placehold.co/600x400/1f2937/9ca3af?text=Virtual+Tours",
  "https://placehold.co/600x400/1f2937/9ca3af?text=Learnings",
];

export default function Blog() {
  const { t } = useLanguage();

  return (
    <section
      id="blog"
      className="bg-zinc-100 px-6 py-24 dark:bg-zinc-900"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-16 text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
          {t.blog.title}
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {t.blog.posts.map((post, i) => (
            <article
              key={i}
              className="group overflow-hidden rounded-lg bg-white shadow-sm transition-shadow hover:shadow-md dark:bg-zinc-950"
            >
              <div className="relative aspect-[3/2] overflow-hidden bg-zinc-200 dark:bg-zinc-800">
                <img
                  src={blogImages[i]}
                  alt=""
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-lg font-semibold text-zinc-900 dark:text-white">
                  <Link href={`#blog`} className="hover:underline">
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
                  href={`#blog`}
                  className="text-sm font-medium text-zinc-900 hover:underline dark:text-white"
                >
                  {t.blog.readMore}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
