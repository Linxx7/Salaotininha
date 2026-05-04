// components/hero/HeroImage.tsx
// S — Single Responsibility: recebe props e renderiza APENAS a mídia + badge.
//   Toda a lógica de layout e texto fica em HeroContent/HeroSection.
//
// L — Liskov: implementa o contrato IHeroMedia. Se futuramente o hero virar
//   vídeo (VideoHero), este componente é substituído sem alterar HeroSection.
//
// I — Interface Segregation: recebe IHeroMedia ({ src, alt, badge? }).
//   Não sabe nada sobre o conteúdo textual do hero.

import Image from "next/image";
import type { IHeroMedia } from "@/lib/hero/interfaces";

type HeroImageProps = IHeroMedia;

/**
 * HeroImage — responsável exclusivamente por renderizar a imagem hero
 * e o badge opcional sobreposto no canto inferior-esquerdo.
 *
 * Trocar a imagem = trocar `src` no heroConfig; este componente não muda.
 */
export function HeroImage({ src, alt, badge }: HeroImageProps) {
  return (
    <div className="relative h-72 w-full flex-shrink-0 lg:h-auto lg:w-[48%]">
      {/* Gradiente de fusão lateral esquerda → transparente */}
      <div
        className="absolute inset-0 z-10 bg-gradient-to-r from-[#faf8f6]/60 via-transparent to-transparent dark:from-wine-900/60"
        aria-hidden="true"
      />
      {/* Vinheta inferior suave */}
      <div
        className="absolute inset-x-0 bottom-0 z-10 h-24 bg-gradient-to-t from-[#faf8f6]/40 to-transparent dark:from-wine-900/30"
        aria-hidden="true"
      />

      <Image
        src={src}
        alt={alt}
        fill
        priority
        quality={85}
        sizes="(max-width: 1024px) 100vw, 48vw"
        className="object-cover"
        style={{ objectPosition: "center top" }}
      />

      {/* Badge de confiança — visível apenas em desktop */}
      {badge && (
        <div
          className="
            absolute bottom-8 left-8 z-20
            hidden rounded-2xl
            border border-wine-100/60
            bg-white/90 px-5 py-3
            shadow-sm backdrop-blur-md
            lg:block
            dark:border-wine-700/60 dark:bg-wine-900/90
          "
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-wine-600 dark:text-wine-300">
            {badge.label}
          </p>
          <p className="mt-0.5 text-sm text-gray-600 dark:text-gray-300">
            {badge.subtitle}
          </p>
        </div>
      )}
    </div>
  );
}
