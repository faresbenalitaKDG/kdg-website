"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  return (
    <section
      id="about"
      className="bg-zinc-50 px-6 py-24 dark:bg-zinc-900/50"
    >
      <div className="mx-auto max-w-4xl">
        <div className="mb-4 h-1 w-12 rounded-full bg-indigo-500" />
        <h2 className="mb-12 font-[family-name:var(--font-jakarta)] text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
          {t.about.title}
        </h2>
        <div className="space-y-6 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
          <p>{t.about.p1}</p>
          <p>{t.about.p2}</p>
        </div>
        <p className="mt-10 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
          {t.about.p3}
        </p>
      </div>
    </section>
  );
}
