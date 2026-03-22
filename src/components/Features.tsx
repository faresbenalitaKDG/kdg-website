"use client";

import { useLanguage } from "@/context/LanguageContext";

const featureIcons = [
  // Modules - layers
  <svg key="modules" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /></svg>,
  // Tasks - check square
  <svg key="tasks" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" /></svg>,
  // Virtual Tours - map
  <svg key="tours" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" /><line x1="8" y1="2" x2="8" y2="18" /><line x1="16" y1="6" x2="16" y2="22" /></svg>,
  // Analytics - chart
  <svg key="analytics" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></svg>,
  // FAQ - help circle
  <svg key="faq" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><path d="M12 17h.01" /></svg>,
];

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
        <div className="mb-4 h-1 w-12 rounded-full bg-indigo-500" />
        <h2 className="mb-4 font-[family-name:var(--font-jakarta)] text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
          {t.features.title}
        </h2>
        <p className="mb-16 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
          {t.features.subtitle}
        </p>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <div
              key={i}
              className="group rounded-xl border border-zinc-200 bg-zinc-50 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/5 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:shadow-indigo-500/10"
            >
              <div className="mb-4 inline-flex rounded-lg bg-indigo-100 p-3 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400">
                {featureIcons[i]}
              </div>
              <h3 className="mb-2 font-[family-name:var(--font-jakarta)] text-lg font-semibold text-zinc-900 dark:text-white">
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
