import Link from "next/link";

const teamMembers = [
  {
    name: "Teamlid 1",
    role: "Frontend Developer",
    bio: "Focus op React, UX en de gebruikersinterface van het onboarding platform. Zorgt voor een soepele en intuïtieve ervaring.",
    linkedin: "https://www.linkedin.com/",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=1",
  },
  {
    name: "Teamlid 2",
    role: "Backend Developer",
    bio: "Verantwoordelijk voor de Node.js API, Supabase integratie en database architectuur. Bouwt de foundation voor schaalbaarheid.",
    linkedin: "https://www.linkedin.com/",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=2",
  },
  {
    name: "Teamlid 3",
    role: "Full Stack Developer",
    bio: "Combineert frontend en backend expertise. Werkt aan modules, taken en de analytics dashboard voor het platform.",
    linkedin: "https://www.linkedin.com/",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=3",
  },
  {
    name: "Teamlid 4",
    role: "UX/UI Designer",
    bio: "Ontwerpt de complete identiteit van de applicatie, zorgt voor optimale gebruikerservaring en aantrekkelijk design.",
    linkedin: "https://www.linkedin.com/",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=4",
  },
];

export default function Team() {
  return (
    <section
      id="team"
      className="bg-white px-6 py-24 dark:bg-zinc-950"
    >
      <div className="mx-auto max-w-6xl">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
          The Minds Bringing Onboarding to Life
        </p>
        <h2 className="mb-4 text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
          meet the team
        </h2>
        <p className="mb-16 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
          Achter ons KdG Onboarding Platform staat een team van gepassioneerde
          innovators en developers, toegewijd aan het eenvoudiger en effectiever
          maken van onboarding voor nieuwe medewerkers.
        </p>
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member, i) => (
            <div key={i} className="text-center">
              <div className="relative mx-auto mb-4 aspect-square w-32 overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-800">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="mb-1 text-lg font-semibold text-zinc-900 dark:text-white">
                {member.name}
              </h3>
              <p className="mb-3 text-sm text-zinc-500 dark:text-zinc-400">
                {member.role}
              </p>
              <p className="mb-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {member.bio}
              </p>
              <Link
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-zinc-900 hover:underline dark:text-white"
              >
                LinkedIn
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
