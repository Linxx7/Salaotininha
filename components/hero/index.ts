// components/hero/index.ts
// Barrel de exportação — ponto único de entrada para o módulo hero.
// Ao refatorar internamente (ex.: VideoHero), só os componentes mudam;
// os consumidores que importam de "@/components/hero" não precisam ser atualizados.

export { HeroSection } from "@/components/hero/HeroSection";
export { HeroContent } from "@/components/hero/HeroContent";
export { HeroImage } from "@/components/hero/HeroImage";
export type { IHeroConfig, IHeroContent, IHeroMedia, IHeroBadge } from "@/lib/hero/interfaces";
