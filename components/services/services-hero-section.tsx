// components/services/services-hero-section.tsx
// Single Responsibility: editorial hero for the /servicos page only

import Image from "next/image";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";
import { SectionContainer } from "@/components/ui/section-container";

export function ServicesHeroSection() {
  return (
    <section
      aria-label="Menu de Serviços — Apresentação"
      className="relative overflow-hidden bg-[#faf8f6] pt-12 pb-0 lg:pt-16"
    >
      <SectionContainer>
        <div className="grid items-end gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left — editorial text */}
          <div className="flex flex-col pb-12 lg:pb-16">
            {/* Decorative line */}
            <div
              className="mb-8 hidden h-px w-10 bg-wine-300 lg:block"
              aria-hidden="true"
            />

            <SectionEyebrow className="mb-5">
              Experiência &amp; Cuidado
            </SectionEyebrow>

            <h1 className="font-serif text-[clamp(2.6rem,5vw,4rem)] font-bold leading-[1.06] tracking-tight text-gray-900">
              Menu de Serviços
            </h1>

            <p className="mt-6 max-w-md text-base leading-relaxed text-gray-500">
              Cada procedimento em nosso espaço é desenhado para realçar sua
              beleza natural com sofisticação e as melhores técnicas do mercado.
            </p>
          </div>

          {/* Right — image */}
          <div className="relative h-56 w-full overflow-hidden rounded-t-2xl sm:h-72 lg:h-[340px] lg:rounded-t-3xl">
            <Image
              src="/images/hero-portrait.png"
              alt="Ambiente sofisticado do Salão Tininha"
              fill
              priority
              quality={80}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-top"
            />
            {/* Warm overlay */}
            <div
              className="absolute inset-0 bg-gradient-to-t from-[#faf8f6]/30 via-transparent to-transparent"
              aria-hidden="true"
            />
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
