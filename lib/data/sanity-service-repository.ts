// lib/data/sanity-service-repository.ts
// CMSServiceRepository — busca serviços do Sanity.io via GROQ.
// DIP: implementa IServiceRepository — componentes não sabem a origem dos dados.
// OCP: troca o StaticServiceRepository sem alterar os consumidores.

import { sanityClient } from "@/lib/sanity";
import type {
  IServiceCategory,
  IServiceItem,
  IServiceNotice,
  IServiceRepository,
} from "@/lib/domain/types";
import type { SanityServico } from "@/lib/domain/sanity-types";

/** Mapeia documento Sanity → IServiceItem (domínio interno) */
function toServiceItem(doc: SanityServico): IServiceItem {
  return {
    id: doc.slug.current,
    title: doc.name,
    description: doc.descricao,
    price_from: doc.preco ?? null,
    highlight: doc.destaque,
  };
}

export class CMSServiceRepository implements IServiceRepository {
  private fallback: IServiceRepository;

  constructor(fallback: IServiceRepository) {
    this.fallback = fallback;
  }

  async getCategories(): Promise<IServiceCategory[]> {
    try {
      const docs = await sanityClient.fetch<SanityServico[]>(
        `*[_type == "servico"] | order(categoria asc, name asc)`
      );

      if (!docs || docs.length === 0) {
        return this.fallback.getCategories();
      }

      // Agrupa por categoria mantendo a ordem
      const map = new Map<string, IServiceCategory>();
      for (const doc of docs) {
        const existing = map.get(doc.categoria);
        if (existing) {
          existing.services.push(toServiceItem(doc));
        } else {
          map.set(doc.categoria, {
            id: doc.categoria,
            name: toCategoriaNome(doc.categoria),
            services: [toServiceItem(doc)],
          });
        }
      }

      return Array.from(map.values());
    } catch {
      return this.fallback.getCategories();
    }
  }

  async getAllServices(): Promise<IServiceItem[]> {
    try {
      const docs = await sanityClient.fetch<SanityServico[]>(
        `*[_type == "servico"] | order(name asc)`
      );

      if (!docs || docs.length === 0) {
        return this.fallback.getAllServices();
      }

      return docs.map(toServiceItem);
    } catch {
      return this.fallback.getAllServices();
    }
  }

  async getNotices(): Promise<IServiceNotice[]> {
    return this.fallback.getNotices();
  }
}

/** Label amigável por slug de categoria */
function toCategoriaNome(categoria: string): string {
  const labels: Record<string, string> = {
    alisamentos: "Alisamentos & Escovas Progressivas",
    "corte-finalizacao": "Corte & Finalização",
    coloracao: "Coloração & Mechas",
    tratamentos: "Tratamentos & Cuidados",
  };
  return labels[categoria] ?? categoria;
}
