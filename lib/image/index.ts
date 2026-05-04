// lib/image/index.ts
// Barrel de exportação — ponto único de entrada para consumidores externos.
// Ao trocar de provider (ex.: Sanity), só este arquivo muda.

import { ImageService } from "@/lib/image/image-service";
import { localImageProvider } from "@/lib/image/providers/local-image-provider";

// Instância singleton pré-configurada com o provider local.
// Para migrar ao Sanity: troque localImageProvider por sanityImageProvider aqui.
export const imageService = new ImageService(localImageProvider);

// Re-exporta tipos para uso em componentes
export type { ResolvedImage } from "@/lib/image/interfaces";
