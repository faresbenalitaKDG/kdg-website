import Image from "next/image";

export default function ImageSection() {
  return (
    <section className="bg-zinc-100 px-6 py-24 dark:bg-zinc-900">
      <div className="mx-auto max-w-6xl">
        <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-zinc-200 dark:bg-zinc-800">
          <Image
            src="https://placehold.co/1200x675/1f2937/9ca3af?text=KdG+Onboarding+Platform+Screenshot"
            alt="KdG Onboarding Platform - App screenshot"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 1200px"
            priority
            unoptimized
          />
        </div>
      </div>
    </section>
  );
}
