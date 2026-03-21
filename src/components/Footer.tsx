"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-zinc-200 bg-zinc-50 px-6 py-12 dark:border-zinc-800 dark:bg-zinc-950">
      <p className="text-center text-sm text-zinc-500 dark:text-zinc-400">
        {t.footer.copyright.replace("{year}", String(new Date().getFullYear()))}
      </p>
    </footer>
  );
}
