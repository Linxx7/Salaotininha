// lib/image/image-service.ts
// Single Responsibility Principle (SRP): ImageService tem UMA responsabilidade —
//   orquestrar a busca, cache e renderização de imagens.
//
// Dependency Inversion Principle (DIP): depende de IImageProvider (abstração),
//   nunca de LocalImageFetcher ou qualquer implementação concreta.

import type { IImageProvider, ResolvedImage } from "@/lib/image/interfaces";

// ---------------------------------------------------------------------------
// S — Single Responsibility: serviço focado exclusivamente em imagens
// ---------------------------------------------------------------------------

export class ImageService {
  constructor(private readonly provider: IImageProvider) {}

  /**
   * Resolve uma imagem pela chave semântica.
   * Usa cache quando disponível; delega busca ao fetcher e renderização ao renderer.
   *
   * @param key  Chave semântica (ex.: "services-flatlay", "hero-banner")
   * @returns    Metadados da imagem prontos para uso em <Image /> do Next.js
   */
  async resolve(key: string): Promise<ResolvedImage> {
    // 1. Tenta cache (se o provider disponibilizar um)
    const cached = this.provider.cache?.get(key);
    if (cached) return cached;

    // 2. Busca via fetcher
    const raw = await this.provider.fetcher.fetch(key);

    // 3. Processa via renderer (transformações, blur hash, etc.)
    const processed = this.provider.renderer.render(raw);

    // 4. Armazena em cache para próximas requisições
    this.provider.cache?.set(key, processed);

    return processed;
  }
}
