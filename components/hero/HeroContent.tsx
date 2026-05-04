// components/hero/HeroContent.tsx
// S — Single Responsibility: renderiza APENAS a coluna textual do hero.
//   Não sabe nada sobre imagens, vídeos ou mídia.
//
// I — Interface Segregation: recebe IHeroContent isoladamente.
//   Badge e imagem ficam em HeroImage — sem acoplamento cruzado.

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";
import type { IHeroContent } from "@/lib/hero/interfaces";

type HeroContentProps = IHeroContent;

/**
 * HeroContent — coluna textual do hero.
 * Pode ser reutilizado em qualquer layout que precise do conteúdo textual
 * sem estar acoplado à imagem ou estrutura de split-screen.
 */
export function HeroContent({
  eyebrow,
  headline,
  headlineAccent,
  description,
  ctaPrimary,
  ctaSecondary,
  stats,
}: HeroContentProps) {
  return (
    <div className="relative z-10 flex flex-1 flex-col justify-center px-6 py-20 sm:px-12 lg:max-w-[54%] lg:px-16 lg:py-0 xl:px-24">
      {/* Linha decorativa sutil */}
      <div
        className="mb-10 hidden h-px w-12 bg-wine-300 lg:block"
        aria-hidden="true"
      />

      <SectionEyebrow className="mb-5">{eyebrow}</SectionEyebrow>

      <h1 className="font-serif text-[clamp(2.6rem,5.5vw,4.5rem)] font-bold leading-[1.08] tracking-tight text-gray-900 dark:text-white">
        {headline}{" "}
        <span className="text-wine-600 dark:text-wine-400">
          {headlineAccent}
        </span>
      </h1>

      <p className="mt-6 max-w-md text-base leading-relaxed text-gray-500 dark:text-gray-300 sm:text-lg">
        {description}
      </p>

      {/* CTAs */}
      <div className="mt-10 flex flex-wrap gap-3">
        <Button
          asChild
          size="lg"
          className="rounded-full bg-wine-700 px-8 text-sm font-semibold uppercase tracking-widest text-white shadow-md transition-all hover:bg-wine-800 hover:shadow-lg"
        >
          <Link href={ctaPrimary.href}>{ctaPrimary.label}</Link>
        </Button>
        <Button
          asChild
          variant="ghost"
          size="lg"
          className="rounded-full px-8 text-sm font-semibold uppercase tracking-widest text-wine-700 hover:bg-wine-50 hover:text-wine-800 dark:text-wine-300 dark:hover:bg-wine-900/30"
        >
          <Link href={ctaSecondary.href}>{ctaSecondary.label}</Link>
        </Button>
      </div>

      {/* Faixa de confiança */}
      <div className="mt-14 flex items-center gap-6 border-t border-wine-100 pt-8 dark:border-wine-800">
        {stats.map((stat, i) => (
          <div key={stat.label} className="flex items-center gap-6">
            {i > 0 && (
              <div
                className="h-8 w-px bg-wine-100 dark:bg-wine-700"
                aria-hidden="true"
              />
            )}
            <div className="text-center">
              <p className="font-serif text-2xl font-bold text-gray-900 dark:text-white">
                {stat.value}
              </p>
              <p className="text-xs uppercase tracking-wider text-gray-400">
                {stat.label}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
