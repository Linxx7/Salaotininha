// lib/hero/interfaces.ts
// Interface Segregation Principle (ISP): cada interface tem um único papel.
// Dependency Inversion Principle (DIP): os componentes dependem destas abstrações,
// nunca das implementações concretas (NextImage, <video>, etc.).

// ---------------------------------------------------------------------------
// I — Interfaces segregadas: media, badge e config
// ---------------------------------------------------------------------------

/**
 * IHeroBadge — dado opcional de confiança exibido sobre a imagem.
 * Separado de IHeroMedia para que o badge possa mudar sem tocar na imagem.
 */
export interface IHeroBadge {
  /** Linha principal em destaque (ex.: "Profissionais Certificadas") */
  label: string;
  /** Linha complementar (ex.: "Resultado garantido em cada visita") */
  subtitle: string;
}

/**
 * IHeroMedia — contrato mínimo para qualquer elemento visual do hero.
 * Implementado por HeroImage (foto) e, futuramente, por VideoHero.
 *
 * L — Liskov: VideoHero deve ser substituível por HeroImage sem quebrar HeroSection.
 */
export interface IHeroMedia {
  src: string;
  alt: string;
  /** Badge sobreposto na área inferior-esquerda da mídia (opcional). */
  badge?: IHeroBadge;
}

/**
 * IHeroContent — dados da coluna textual do hero.
 * Separado de IHeroMedia para trocar texto sem tocar na lógica de imagem.
 */
export interface IHeroContent {
  eyebrow: string;
  headline: string;
  /** Trecho de destaque dentro do headline (será colorido em vinho). */
  headlineAccent: string;
  description: string;
  ctaPrimary: { label: string; href: string };
  ctaSecondary: { label: string; href: string };
  stats: Array<{ value: string; label: string }>;
}

/**
 * IHeroConfig — configuração completa do hero.
 * D — Dependency Inversion: HeroSection recebe IHeroConfig e não importa nada
 * diretamente. Trocar texto ou imagem = trocar o config, não o componente.
 */
export interface IHeroConfig {
  content: IHeroContent;
  media: IHeroMedia;
}
