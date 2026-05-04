// components/TeamSection.tsx
import Image from "next/image";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";
import { SectionContainer } from "@/components/ui/section-container";
import type { Professional } from "@/lib/domain/types";

interface TeamSectionProps {
  professionals: Professional[];
}

export function TeamSection({ professionals }: TeamSectionProps) {
  return (
    <section
      aria-labelledby="team-heading"
      className="bg-white px-4 py-24 sm:py-32 dark:bg-wine-900"
    >
      <SectionContainer>
        <div className="mb-16 text-center">
          <SectionEyebrow className="mb-4">Nossa Equipe</SectionEyebrow>
          <h2
            id="team-heading"
            className="font-serif text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl"
          >
            Profissionais dedicadas
          </h2>
          <p className="mt-5 mx-auto max-w-lg text-base leading-relaxed text-gray-500 dark:text-gray-300">
            Conheça quem vai cuidar de você. Cada profissional traz experiência,
            paixão e um olhar único para realçar a sua beleza.
          </p>
        </div>

        <div className="mx-auto grid max-w-2xl gap-8 sm:grid-cols-2">
          {professionals.map((pro) => (
            <article
              key={pro.id}
              className="group overflow-hidden rounded-2xl border border-wine-100 bg-[#faf8f6] transition-shadow hover:shadow-md dark:border-wine-700 dark:bg-wine-800"
            >
              <div className="relative h-72 w-full overflow-hidden bg-wine-100">
                <Image
                  src={pro.image}
                  alt={`${pro.name} — ${pro.role}`}
                  fill
                  quality={80}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-bold text-gray-900 dark:text-white">
                  {pro.name}
                </h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.15em] text-wine-500">
                  {pro.role}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-gray-500 dark:text-gray-300">
                  {pro.bio}
                </p>
                {pro.instagram && (
                  <a
                    href={`https://www.instagram.com/${pro.instagram.replace("@", "")}/`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-block text-xs font-semibold text-wine-500 transition-colors hover:text-wine-700"
                  >
                    {pro.instagram}
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}
