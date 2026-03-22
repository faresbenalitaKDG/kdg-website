"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

const navItems = [
  { href: "/#about", key: "about" as const },
  { href: "/#features", key: "features" as const },
  { href: "/#blog", key: "blog" as const },
  { href: "/#conference", key: "conference" as const },
  { href: "/#team", key: "team" as const },
];

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-zinc-200 bg-zinc-50 px-6 py-16 dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <h3 className="mb-4 font-[family-name:var(--font-jakarta)] text-sm font-semibold uppercase tracking-wider text-zinc-900 dark:text-white">
              {t.footer.quickLinks}
            </h3>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.key}>
                  <Link
                    href={item.href}
                    className="link-underline text-sm text-zinc-600 transition-colors hover:text-indigo-600 dark:text-zinc-400 dark:hover:text-indigo-400"
                  >
                    {t.nav[item.key]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-[family-name:var(--font-jakarta)] text-sm font-semibold uppercase tracking-wider text-zinc-900 dark:text-white">
              {t.footer.followUs}
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.linkedin.com/school/karel-de-grote-hogeschool/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline inline-flex items-center gap-2 text-sm text-zinc-600 transition-colors hover:text-indigo-600 dark:text-zinc-400 dark:hover:text-indigo-400"
                  aria-label="KdG on LinkedIn"
                >
                  <svg
                    className="h-5 w-5 shrink-0"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  {t.footer.linkedin}
                </a>
              </li>
              <li>
                <a
                  href="https://www.kdg.be"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline text-sm text-zinc-600 transition-colors hover:text-indigo-600 dark:text-zinc-400 dark:hover:text-indigo-400"
                >
                  {t.footer.website}
                </a>
              </li>
            </ul>
          </div>
          <div className="sm:col-span-2 lg:col-span-1">
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              {t.footer.copyright.replace("{year}", String(new Date().getFullYear()))}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
