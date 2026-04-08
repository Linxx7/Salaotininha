// components/HeroSection.tsx
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";

export function HeroSection() {
  return (
    <section
      aria-label="Apresentação do Salão Tininha"
      className="relative flex min-h-[92vh] flex-col overflow-hidden bg-[#faf8f6] dark:bg-wine-900 lg:flex-row"
    >
      {/* ── Left content column ── */}
      <div className="relative z-10 flex flex-1 flex-col justify-center px-6 py-20 sm:px-12 lg:max-w-[54%] lg:px-16 lg:py-0 xl:px-24">
        {/* Subtle decorative line */}
        <div className="mb-10 hidden h-px w-12 bg-wine-300 lg:block" aria-hidden="true" />

        <SectionEyebrow className="mb-5">
          Beleza &amp; Estética — Salão Tininha
        </SectionEyebrow>

        <h1 className="font-serif text-[clamp(2.6rem,5.5vw,4.5rem)] font-bold leading-[1.08] tracking-tight text-gray-900 dark:text-white">
          Sua beleza em{" "}
          <span className="text-wine-600">
            boas mãos
          </span>
        </h1>

        <p className="mt-6 max-w-md text-base leading-relaxed text-gray-500 dark:text-gray-300 sm:text-lg">
          Um refúgio de sofisticação onde cada detalhe é cuidado para realçar
          a sua essência — com técnicas exclusivas e cuidado personalizado.
        </p>

        {/* CTA buttons */}
        <div className="mt-10 flex flex-wrap gap-3">
          <Button
            asChild
            size="lg"
            className="rounded-full bg-wine-700 px-8 text-sm font-semibold uppercase tracking-widest text-white shadow-md transition-all hover:bg-wine-800 hover:shadow-lg"
          >
            <Link href="/agendamento">Agendar agora</Link>
          </Button>
          <Button
            asChild
            variant="ghost"
            size="lg"
            className="rounded-full px-8 text-sm font-semibold uppercase tracking-widest text-wine-700 hover:bg-wine-50 hover:text-wine-800"
          >
            <Link href="/servicos">Ver portfólio</Link>
          </Button>
        </div>

        {/* Trust strip */}
        <div className="mt-14 flex items-center gap-6 border-t border-wine-100 pt-8">
          <div className="text-center">
            <p className="font-serif text-2xl font-bold text-gray-900 dark:text-white">10+</p>
            <p className="text-xs text-gray-400 dark:text-gray-400 uppercase tracking-wider">Anos de experiência</p>
          </div>
          <div className="h-8 w-px bg-wine-100 dark:bg-wine-700" aria-hidden="true" />
          <div className="text-center">
            <p className="font-serif text-2xl font-bold text-gray-900 dark:text-white">500+</p>
            <p className="text-xs text-gray-400 dark:text-gray-400 uppercase tracking-wider">Clientes satisfeitas</p>
          </div>
          <div className="h-8 w-px bg-wine-100 dark:bg-wine-700" aria-hidden="true" />
          <div className="text-center">
            <p className="font-serif text-2xl font-bold text-gray-900 dark:text-white">5.0</p>
            <p className="text-xs text-gray-400 dark:text-gray-400 uppercase tracking-wider">Avaliação Google</p>
          </div>
        </div>
      </div>

      {/* ── Right image column ── */}
      <div className="relative h-72 w-full flex-shrink-0 lg:h-auto lg:w-[48%]">
        {/* Soft left-edge blend into the content column */}
        <div
          className="absolute inset-0 z-10 bg-gradient-to-r from-[#faf8f6]/60 via-transparent to-transparent"
          aria-hidden="true"
        />
        {/* Bottom vignette */}
        <div
          className="absolute inset-x-0 bottom-0 z-10 h-24 bg-gradient-to-t from-[#faf8f6]/40 to-transparent"
          aria-hidden="true"
        />
        <Image
          src="/images/hero-banner.png"
          alt="Profissional do Salão Tininha em ambiente elegante e acolhedor"
          fill
          priority
          quality={80}
          sizes="(max-width: 1024px) 100vw, 48vw"
          className="object-cover object-center-top"
          style={{ objectPosition: "center top" }}
        />
        {/* Accent badge */}
        <div className="absolute bottom-8 left-8 z-20 hidden rounded-2xl border border-wine-100/60 bg-white/90 px-5 py-3 shadow-sm backdrop-blur-md lg:block">
          <p className="text-xs font-semibold uppercase tracking-widest text-wine-600">
            Profissionais certificadas
          </p>
          <p className="mt-0.5 text-sm text-gray-600">
            Resultado garantido em cada visita
          </p>
        </div>
      </div>
    </section>
  );
}
