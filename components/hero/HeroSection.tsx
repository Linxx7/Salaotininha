// components/hero/HeroSection.tsx
// O — Open/Closed Principle:
//   HeroSection monta o layout split-screen mas é fechado para modificação.
//   Para trocar imagem por vídeo: passe um VideoHero como `media` — sem alterar este arquivo.
//
// D — Dependency Inversion:
//   Não importa imagem, texto ou config diretamente. Recebe IHeroConfig como prop.
//   A page.tsx (ou qualquer Server Component) injeta a config.

import { HeroContent } from "@/components/hero/HeroContent";
import { HeroImage } from "@/components/hero/HeroImage";
import type { IHeroConfig, IHeroMedia } from "@/lib/hero/interfaces";

interface HeroSectionProps {
  config: IHeroConfig;
  /**
   * Permite substituir o componente de mídia por qualquer implementação
   * de IHeroMedia sem alterar HeroSection.
   *
   * O — Open/Closed: VideoHero pode ser passado aqui no futuro.
   */
  MediaComponent?: React.ComponentType<IHeroMedia>;
}

/**
 * HeroSection — layout split-screen que compõe HeroContent + mídia.
 *
 * Uso padrão (foto):
 *   <HeroSection config={heroConfig} />
 *
 * Uso futuro (vídeo):
 *   <HeroSection config={heroConfig} MediaComponent={VideoHero} />
 */
export function HeroSection({ config, MediaComponent }: HeroSectionProps) {
  const Media = MediaComponent ?? HeroImage;

  return (
    <section
      aria-label="Apresentação do Salão Tininha"
      className="relative flex min-h-[92vh] flex-col overflow-hidden bg-[#faf8f6] dark:bg-wine-900 lg:flex-row"
    >
      <HeroContent {...config.content} />
      <Media {...config.media} />
    </section>
  );
}
