// lib/image/providers/local-image-provider.ts
// Liskov Substitution Principle (LSP): este provider concreto é substituível
// por qualquer outro que implemente IImageProvider (Sanity, CDN, etc.)
//
// Open/Closed Principle (OCP): para adicionar um novo provider (ex.: Sanity),
// basta criar um novo arquivo que implemente IImageProvider — sem alterar nada aqui.

import type {
  IImageCache,
  IImageFetcher,
  IImageProvider,
  IImageRenderer,
  ResolvedImage,
} from "@/lib/image/interfaces";

// ---------------------------------------------------------------------------
// Registry local: mapeia chaves semânticas → metadados da imagem
// ---------------------------------------------------------------------------

const LOCAL_IMAGE_REGISTRY: Record<string, ResolvedImage> = {
  "services-flatlay": {
    src: "/images/services-flatlay.png",
    alt: "Vista aérea de mesa de salão com tesoura, escova, pente, secador e outros instrumentos profissionais sobre fundo neutro em tons de bege e creme",
    width: 1792,
    height: 1024,
  },
  "hero-banner": {
    src: "/images/hero-banner.png",
    alt: "Banner principal do Salão Tininha",
    width: 1920,
    height: 1080,
  },
  "hero-interior": {
    src: "/images/hero-interior.png",
    alt: "Interior acolhedor do Salão Tininha — cadeiras estofadas em creme em frente a espelhos iluminados, bancada organizada com produtos e flores secas ao fundo",
    width: 1024,
    height: 1365,
  },
  "hero-portrait": {
    src: "/images/hero-portrait.png",
    alt: "Ambiente elegante do Salão Tininha",
    width: 800,
    height: 600,
  },
} as const;

// ---------------------------------------------------------------------------
// Implementações concretas das interfaces segregadas
// ---------------------------------------------------------------------------

/** Busca imagens a partir do registry local (arquivos em /public/images). */
class LocalImageFetcher implements IImageFetcher {
  async fetch(key: string): Promise<ResolvedImage> {
    const image = LOCAL_IMAGE_REGISTRY[key];
    if (!image) {
      throw new Error(
        `[LocalImageFetcher] Imagem não encontrada para a chave: "${key}". ` +
          `Chaves disponíveis: ${Object.keys(LOCAL_IMAGE_REGISTRY).join(", ")}`
      );
    }
    return image;
  }
}

/** Renderizador padrão — passa a imagem sem transformação.
 *  Pode ser substituído por um que adicione parâmetros de query (resize, format…). */
class PassthroughImageRenderer implements IImageRenderer {
  render(image: ResolvedImage): ResolvedImage {
    return image;
  }
}

/** Cache em memória com Map — vive durante o ciclo de vida do módulo (SSR/RSC-friendly). */
class InMemoryImageCache implements IImageCache {
  private readonly store = new Map<string, ResolvedImage>();

  get(key: string): ResolvedImage | null {
    return this.store.get(key) ?? null;
  }

  set(key: string, image: ResolvedImage): void {
    this.store.set(key, image);
  }
}

// ---------------------------------------------------------------------------
// Provider exportado — único ponto de entrada para o token local
// ---------------------------------------------------------------------------

export const localImageProvider: IImageProvider = {
  fetcher: new LocalImageFetcher(),
  renderer: new PassthroughImageRenderer(),
  cache: new InMemoryImageCache(),
};
