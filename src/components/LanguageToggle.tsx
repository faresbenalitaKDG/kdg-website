"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function LanguageToggle() {
  const { locale, setLocale } = useLanguage();

  return (
    <div
      role="group"
      aria-label="Language selection"
      className="flex items-center rounded-full border border-zinc-200 bg-zinc-100 p-1 dark:border-zinc-700 dark:bg-zinc-800"
    >
      <button
        type="button"
        onClick={() => setLocale("en")}
        className={`rounded-full px-3 py-1.5 text-sm font-medium transition-all duration-200 ${
          locale === "en"
            ? "bg-white text-zinc-900 shadow-sm dark:bg-zinc-600 dark:text-white"
            : "text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-300"
        }`}
        aria-label="English"
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLocale("nl")}
        className={`rounded-full px-3 py-1.5 text-sm font-medium transition-all duration-200 ${
          locale === "nl"
            ? "bg-white text-zinc-900 shadow-sm dark:bg-zinc-600 dark:text-white"
            : "text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-300"
        }`}
        aria-label="Nederlands"
      >
        NL
      </button>
    </div>
  );
}
