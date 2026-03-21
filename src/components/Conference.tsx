"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function Conference() {
  const { t } = useLanguage();

  return (
    <section className="bg-zinc-900 px-6 py-24 text-white">
      <div className="mx-auto max-w-6xl">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-zinc-400">
          {t.conference.tagline}
        </p>
        <h2 className="mb-12 text-3xl font-bold tracking-tight sm:text-4xl">
          {t.conference.title}
        </h2>
        <div className="space-y-6 text-lg leading-relaxed text-zinc-300 lg:mb-0">
          <p>{t.conference.p1}</p>
        </div>
        <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:items-start">
          <div>
            <h3 className="mb-4 text-xl font-semibold">
              {t.conference.registerTitle}
            </h3>
            <p className="mb-8 text-zinc-300">{t.conference.registerDesc}</p>
            <Link
              href="https://forms.office.com/e/EDuNpECtxi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-base font-medium text-zinc-900 transition-colors hover:bg-zinc-200"
            >
              {t.conference.register}
            </Link>
          </div>
          <div className="overflow-hidden rounded-lg border border-zinc-700">
            <iframe
              src="https://www.openstreetmap.org/export/embed.html?bbox=4.391%2C51.208%2C4.411%2C51.228&layer=mapnik&marker=51.21815%2C4.40090"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="KdG Campus - Nationalestraat 5, 2000 Antwerp"
            />
            <p className="p-3 text-center text-sm text-zinc-400">
              {t.conference.address}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
