export default function About() {
  const features = [
    "Modules – Gestructureerde leerpaden met duidelijke stappen en voortgang.",
    "Taken – Beheersbare taken met deadlines en herinneringen.",
    "Virtual Tours – Interactieve rondleidingen door de werkplek en faciliteiten.",
    "Analytics – Inzicht in voortgang en engagement van nieuwe medewerkers.",
    "FAQ – Centrale kennisbank met veelgestelde vragen en antwoorden.",
  ];

  return (
    <section
      id="about"
      className="bg-white px-6 py-24 dark:bg-zinc-950"
    >
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-12 text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
          Experience Onboarding Like Never Before
        </h2>
        <div className="space-y-6 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
          <p>
            Welkom nieuwe medewerkers op een gestructureerde manier met ons
            KdG Onboarding Platform! Met moderne technologie brengen we
            onboarding tot leven via interactieve modules, virtuele rondleidingen
            en begeleide taken. Of je nu de campus verkent of je eerste
            procedures leert, onze app maakt de overgang soepel en overzichtelijk.
          </p>
          <p>
            Gebouwd met React voor een snelle, responsieve ervaring en ondersteund
            door Node.js en TypeScript, zorgen we voor een robuust platform. Met
            Supabase voor authenticatie en database, real-time updates en een
            schaalbare architectuur, bieden we alles wat je nodig hebt voor een
            succesvolle onboarding.
          </p>
        </div>
        <h3 className="mt-12 mb-6 text-xl font-semibold text-zinc-900 dark:text-white">
          Key features
        </h3>
        <ul className="space-y-4">
          {features.map((feature, i) => (
            <li
              key={i}
              className="flex gap-3 text-zinc-600 dark:text-zinc-400"
            >
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400 dark:bg-zinc-500" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <p className="mt-10 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
          Door technologie te combineren met duidelijke structuur, maken we
          onboarding zo eenvoudig als het hoort te zijn. Sluit je vandaag nog aan
          en herdefinieer hoe nieuwe medewerkers welkom worden geheten!
        </p>
      </div>
    </section>
  );
}
