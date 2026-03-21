"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function Features() {
  const { t } = useLanguage();

  const features = [
    { title: t.features.modules.title, description: t.features.modules.desc },
    { title: t.features.tasks.title, description: t.features.tasks.desc },
    {
      title: t.features.virtualTours.title,
      description: t.features.virtualTours.desc,
    },
    { title: t.features.analytics.title, description: t.features.analytics.desc },
    { title: t.features.faq.title, description: t.features.faq.desc },
  ];

  return (
    <section
      id="features"
      className="bg-white px-6 py-24 dark:bg-zinc-950"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-4 text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
          {t.features.title}
        </h2>
        <p className="mb-16 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
          {t.features.subtitle}
        </p>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <div
              key={i}
              className="rounded-lg border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900"
            >
              <h3 className="mb-2 text-lg font-semibold text-zinc-900 dark:text-white">
                {feature.title}
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
