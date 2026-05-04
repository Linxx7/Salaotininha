// components/services/services-hero-section.tsx
// Single Responsibility: herói editorial da página /servicos.
// Consome o ImageService via DIP — nunca importa um provider diretamente.

import Image from "next/image";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";
import { SectionContainer } from "@/components/ui/section-container";
import { imageService } from "@/lib/image";

export async function ServicesHeroSection() {
  const heroImage = await imageService.resolve("services-flatlay");

  return (
    <section
      aria-label="Menu de Serviços — Apresentação"
      className="relative overflow-hidden bg-[#faf8f6] pt-12 pb-0 lg:pt-16
                 dark:bg-[#0d0608]"
    >
      {/* ── Full-bleed flat lay banner ─────────────────────────────────── */}
      <div className="relative mx-auto mb-10 h-52 w-full overflow-hidden sm:h-72 lg:mb-14 lg:h-[380px]">
        <Image
          src={heroImage.src}
          alt={heroImage.alt}
          fill
          priority
          quality={85}
          sizes="100vw"
          className="object-cover object-center
                     dark:brightness-[0.60] dark:saturate-[0.8]"
        />
        {/* Gradient overlay — espaço negativo para o texto sobreposto */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/30 to-transparent
                     dark:from-black/75 dark:via-black/50"
          aria-hidden="true"
        />

        {/* ── Texto em cima da imagem ──────────────────────────────────── */}
        <div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-10 lg:px-16">
          <SectionEyebrow className="mb-4 text-white/80 dark:text-wine-300/90">
            Experiência &amp; Cuidado
          </SectionEyebrow>

          <h1
            className="font-serif text-[clamp(2.2rem,5vw,3.8rem)] font-bold
                       leading-[1.06] tracking-tight text-white drop-shadow-sm"
          >
            Menu de Serviços
          </h1>

          <p className="mt-4 max-w-md text-sm leading-relaxed text-white/80 sm:text-base
                        dark:text-white/70">
            Cada procedimento é desenhado para realçar sua beleza natural com
            sofisticação e as melhores técnicas do mercado.
          </p>
        </div>
      </div>

      {/* ── Separator bar abaixo da imagem (desktop) ───────────────────── */}
      <SectionContainer>
        <div className="hidden pb-12 lg:flex lg:items-center lg:justify-between lg:pb-16">
          <div
            className="h-px w-10 bg-wine-300 dark:bg-wine-600"
            aria-hidden="true"
          />
          <p className="text-sm text-gray-400 tracking-widest uppercase dark:text-gray-600">
            Salão Tininha · Serviços Profissionais
          </p>
          <div
            className="h-px w-10 bg-wine-300 dark:bg-wine-600"
            aria-hidden="true"
          />
        </div>
      </SectionContainer>
    </section>
  );
}
