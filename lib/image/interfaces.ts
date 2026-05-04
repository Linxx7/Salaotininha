// lib/image/interfaces.ts
// Interface Segregation Principle (ISP) + Dependency Inversion Principle (DIP)
// Cada interface tem uma única responsabilidade. ImageService depende dessas
// abstrações, nunca das implementações concretas.

// ---------------------------------------------------------------------------
// Domínio
// ---------------------------------------------------------------------------

/** Metadados de uma imagem resolvida. */
export interface ResolvedImage {
  /** URL pública ou caminho relativo (ex.: "/images/services-flatlay.png") */
  src: string;
  /** Texto alternativo acessível */
  alt: string;
  /** Largura intrínseca em pixels (opcional — útil para `next/image`) */
  width?: number;
  /** Altura intrínseca em pixels (opcional) */
  height?: number;
}

// ---------------------------------------------------------------------------
// I — Interface Segregation: três contratos distintos
// ---------------------------------------------------------------------------

/**
 * IImageFetcher — busca/resolve a URL de uma imagem a partir de uma chave.
 * (ex.: busca no Sanity, CDN, sistema de arquivos local…)
 */
export interface IImageFetcher {
  fetch(key: string): Promise<ResolvedImage>;
}

/**
 * IImageRenderer — converte um ResolvedImage em props prontos para
 * renderização (pode adicionar placeholders blur, transformações de URL, etc.)
 */
export interface IImageRenderer {
  render(image: ResolvedImage): ResolvedImage;
}

/**
 * IImageCache — camada de cache opcional; evita buscas repetidas ao mesmo key.
 */
export interface IImageCache {
  get(key: string): ResolvedImage | null;
  set(key: string, image: ResolvedImage): void;
}

// ---------------------------------------------------------------------------
// O — Open/Closed: provider unificado extensível sem alterar o core
// ---------------------------------------------------------------------------

/**
 * IImageProvider — composição dos três contratos acima.
 * Novas origens de imagem (Sanity, Cloudinary, S3…) implementam esta interface
 * sem tocar em ImageService.
 */
export interface IImageProvider {
  fetcher: IImageFetcher;
  renderer: IImageRenderer;
  cache?: IImageCache;
}
