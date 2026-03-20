import Link from "next/link";

const blogPosts = [
  {
    slug: "onboarding-best-practices",
    title: "Onboarding Best Practices: Wat Werkt Echt?",
    author: "Team KdG",
    date: "20 maart 2025",
    excerpt:
      "Ontdek welke aanpakken het meest effectief zijn bij het welkom heten van nieuwe medewerkers. Van eerste dag tot eerste maand.",
    image: "https://placehold.co/600x400/1f2937/9ca3af?text=Onboarding",
  },
  {
    slug: "tech-stack-keuze",
    title: "Waarom React + Supabase voor Onboarding?",
    author: "Team KdG",
    date: "18 maart 2025",
    excerpt:
      "Een blik op onze tech stack keuzes: React voor de frontend, Node.js voor de backend, en Supabase voor real-time data.",
    image: "https://placehold.co/600x400/1f2937/9ca3af?text=Tech+Stack",
  },
  {
    slug: "virtual-tours",
    title: "Virtuele Rondleidingen: De Toekomst van Onboarding",
    author: "Team KdG",
    date: "15 maart 2025",
    excerpt:
      "Hoe virtuele tours nieuwe medewerkers helpen de campus en faciliteiten te verkennen voordat ze fysiek aanwezig zijn.",
    image: "https://placehold.co/600x400/1f2937/9ca3af?text=Virtual+Tours",
  },
  {
    slug: "project-learnings",
    title: "Project Learnings: Van Idee tot Platform",
    author: "Team KdG",
    date: "12 maart 2025",
    excerpt:
      "Reflectie op onze reis: wat we leerden over UX, technische uitdagingen en samenwerking tijdens het bouwen van dit platform.",
    image: "https://placehold.co/600x400/1f2937/9ca3af?text=Learnings",
  },
];

export default function Blog() {
  return (
    <section
      id="blog"
      className="bg-zinc-100 px-6 py-24 dark:bg-zinc-900"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-16 text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
          Recent posts
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="group overflow-hidden rounded-lg bg-white shadow-sm transition-shadow hover:shadow-md dark:bg-zinc-950"
            >
              <div className="relative aspect-[3/2] overflow-hidden bg-zinc-200 dark:bg-zinc-800">
                <img
                  src={post.image}
                  alt=""
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-lg font-semibold text-zinc-900 dark:text-white">
                  <Link
                    href={`#blog-${post.slug}`}
                    className="hover:underline"
                  >
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
                  href={`#blog-${post.slug}`}
                  className="text-sm font-medium text-zinc-900 hover:underline dark:text-white"
                >
                  Read More
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
