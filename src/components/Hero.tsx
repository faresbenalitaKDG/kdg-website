export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[90vh] flex-col items-center justify-center bg-gradient-to-b from-zinc-900 via-zinc-900 to-zinc-950 px-6 pt-24 text-center"
    >
      <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-zinc-400">
        Onboarding at your fingertips
      </p>
      <h1 className="mb-6 max-w-4xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
        Maak Onboarding Eenvoudig
      </h1>
      <p className="mb-8 max-w-2xl text-lg text-zinc-400 sm:text-xl">
        Gestructureerde, begeleide training voor nieuwe medewerkers
      </p>
      <p className="max-w-xl text-base text-zinc-500">
        Modern, interactief en gebruiksvriendelijk
      </p>
    </section>
  );
}
