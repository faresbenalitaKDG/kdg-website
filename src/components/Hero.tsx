"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="home"
      className="relative flex w-full min-h-[90vh] flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-indigo-950 via-zinc-900 to-zinc-950 px-6 pt-24 text-center"
    >
      {/* Subtle grid pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
      />
      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center text-center">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-indigo-400">
          {t.hero.tagline}
        </p>
        <h1 className="mb-6 font-[family-name:var(--font-jakarta)] w-full text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          {t.hero.title}
        </h1>
        <p className="mx-auto mb-10 max-w-2xl text-lg text-zinc-400 sm:text-xl">
          {t.hero.subtitle}
        </p>
        <p className="mx-auto mb-10 max-w-xl text-base text-zinc-500">
          {t.hero.description}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/#features"
            className="rounded-xl bg-indigo-500 px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-indigo-500/25 transition-all duration-300 hover:bg-indigo-600 hover:shadow-xl hover:shadow-indigo-500/30 hover:-translate-y-0.5"
          >
            {t.nav.features}
          </Link>
          <Link
            href="/#about"
            className="rounded-xl border border-zinc-600 bg-zinc-800/50 px-8 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-zinc-500 hover:bg-zinc-700/50"
          >
            {t.nav.about}
          </Link>
        </div>
      </div>
    </section>
  );
}
