"use client";

import { useLanguage } from "@/context/LanguageContext";

const teamData = [
  {
    linkedin: "https://www.linkedin.com/in/fares-ben-8a8b93254/",
    image: "/fares.jpg",
  },
  {
    linkedin: "https://www.linkedin.com/in/eren-beyazit-baa1bb1b0/",
    image: "/eren.jpg",
  },
  {
    linkedin: "https://www.linkedin.com/in/haider-al-lami-851b54352/",
    image: "/haider.jpg",
  },
];

export default function Team() {
  const { t } = useLanguage();

  return (
    <section
      id="team"
      className="bg-white px-6 py-24 dark:bg-zinc-950"
    >
      <div className="mx-auto max-w-6xl">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-400">
          {t.team.tagline}
        </p>
        <div className="mb-4 h-1 w-12 rounded-full bg-indigo-500" />
        <h2 className="mb-4 font-[family-name:var(--font-jakarta)] text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
          {t.team.title}
        </h2>
        <p className="mb-16 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
          {t.team.subtitle}
        </p>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {t.team.members.map((member, i) => (
            <div
              key={i}
              className="group rounded-xl border border-zinc-200 bg-zinc-50 p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900"
            >
              <div className="relative mx-auto mb-6 aspect-square w-36 overflow-hidden rounded-full bg-zinc-200 ring-4 ring-white shadow-lg dark:bg-zinc-800 dark:ring-zinc-900">
                <img
                  src={teamData[i].image}
                  alt={member.name}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="mb-2 font-[family-name:var(--font-jakarta)] text-lg font-semibold text-zinc-900 dark:text-white">
                {member.name}
              </h3>
              <p className="mb-4 text-sm text-indigo-600 dark:text-indigo-400">
                {member.role}
              </p>
              <p className="mb-6 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {member.bio}
              </p>
              <a
                href={teamData[i].linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg border border-zinc-300 bg-white p-2.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-indigo-300 hover:bg-indigo-50 hover:shadow-md dark:border-zinc-600 dark:bg-zinc-800 dark:hover:border-indigo-600 dark:hover:bg-indigo-900/20"
                aria-label={`${member.name} on LinkedIn`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-zinc-900 dark:text-white"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
