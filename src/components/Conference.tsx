import Link from "next/link";

export default function Conference() {
  return (
    <section className="bg-zinc-900 px-6 py-24 text-white">
      <div className="mx-auto max-w-4xl">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-zinc-400">
          Onboarding en innovatie wachten!
        </p>
        <h2 className="mb-12 text-3xl font-bold tracking-tight sm:text-4xl">
          Join Us at the Student Conference Days
        </h2>
        <div className="space-y-6 text-lg leading-relaxed text-zinc-300">
          <p>
            We zijn verheugd ons project te presenteren op de komende Student
            Conference Days aan onze hogeschool! Sluit je aan op onze campus
            gelegen aan Nationalestraat 5, 2000 Antwerpen, voor een avond vol
            boeiende presentaties en innovatie. Het evenement start om 18:45 in
            Aula 001, met een algemene introductie en kickoff van de conferentie.
            Daarna presenteren meerdere teams hun projecten, elk met een uniek
            perspectief op de nieuwste ontwikkelingen in IT en tech. Onze
            presentatie begint om 21:00 in Zaal 208. We delen de details van ons
            KdG Onboarding Platform en laten zien hoe we technologie inzetten om
            onboarding eenvoudiger en effectiever te maken.
          </p>
        </div>
        <h3 className="mt-12 mb-4 text-xl font-semibold">Register now!</h3>
        <p className="mb-8 text-zinc-300">
          De conferentie is bedoeld voor IT-professionals en alumni die graag
          willen netwerken, leren en de nieuwste technologieën verkennen. Het
          beste nieuws? Registratie is volledig gratis—meld je aan en reserveer
          je plek!
        </p>
        <Link
          href="https://forms.office.com/e/EDuNpECtxi"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-base font-medium text-zinc-900 transition-colors hover:bg-zinc-200"
        >
          Register
        </Link>
      </div>
    </section>
  );
}
