// components/services/services-cta-section.tsx
// Single Responsibility: conversion CTA strip at the bottom of the services page

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SectionContainer } from "@/components/ui/section-container";

export function ServicesCTASection() {
  return (
    <section
      aria-label="Chamada para agendamento"
      className="relative overflow-hidden bg-wine-800 py-20"
    >
      {/* Subtle background texture — radial gradient */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_110%_50%,theme(colors.wine.700/0.5),transparent)]"
        aria-hidden="true"
      />

      <SectionContainer className="relative z-10">
        <div className="max-w-xl">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-wine-300">
            Agende sua visita
          </p>
          <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] font-bold leading-tight text-white">
            Pronta para sua transformação?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-wine-200">
            Sua beleza merece o melhor cuidado. Agende seu horário e sinta a
            experiência exclusiva do Salão Tininha.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button
              asChild
              size="lg"
              className="rounded-full border border-white/20 bg-white px-8 text-xs font-semibold uppercase tracking-widest text-wine-800 shadow-md transition-all hover:bg-wine-50 hover:shadow-lg"
            >
              <Link href="/agendamento">Agendar horário</Link>
            </Button>

            <Button
              asChild
              variant="ghost"
              size="lg"
              className="rounded-full border border-wine-600 px-8 text-xs font-semibold uppercase tracking-widest text-wine-100 hover:border-wine-400 hover:bg-wine-700/50 hover:text-white"
            >
              <Link href="/contato">Ver localização</Link>
            </Button>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
