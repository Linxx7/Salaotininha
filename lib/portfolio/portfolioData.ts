// lib/portfolio/portfolioData.ts
//
// Single Responsibility: owns *only* the static dataset + its PortfolioReader
// implementation. Zero UI, zero business rules.
//
// Open/Closed: to add a new work, append an object to `PORTFOLIO_ITEMS`.
// No existing code changes. To swap data source, replace this module's
// export without touching portfolioService.ts or any component.

import type { PortfolioReader } from "./portfolioRepository";
import type { PortfolioItem, PortfolioCategory } from "./portfolioTypes";

// ---------------------------------------------------------------------------
// Static dataset — mirrors the 4 works already shown in the UI.
// imageUrl values use placeholder paths; swap for real images or Sanity URLs.
// ---------------------------------------------------------------------------

const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: "work-1",
    slug: "corte-moderno",
    title: "Corte Moderno",
    shortDescription:
      "Corte em camadas com finalização em escova — estrutura e movimento.",
    category: "Corte",
    imageUrl: "/images/gallery/corte-moderno.jpg",
    imageAlt: "Cabelo com corte em camadas e finalização em escova",
    tags: ["corte", "escova"],
    featured: true,
    order: 1,
    createdAt: "2025-03-12T10:00:00Z",
  },
  {
    id: "work-2",
    slug: "progressiva-premium",
    title: "Progressiva Premium",
    shortDescription:
      "Resultado liso e com brilho intenso usando produtos de alta performance.",
    category: "Química",
    imageUrl: "/images/gallery/progressiva.jpg",
    imageAlt: "Cabelo liso e brilhante após progressiva premium",
    tags: ["química", "progressiva"],
    featured: true,
    order: 2,
    createdAt: "2025-03-15T10:00:00Z",
  },
  {
    id: "work-3",
    slug: "mechas-iluminadas",
    title: "Mechas Iluminadas",
    shortDescription:
      "Mechas sutis que iluminam o rosto e trazem leveza ao visual.",
    category: "Coloração",
    imageUrl: "/images/gallery/mechas.jpg",
    imageAlt: "Cabelo com mechas iluminadas sutis e naturais",
    tags: ["coloração", "mechas"],
    featured: true,
    order: 3,
    createdAt: "2025-03-20T10:00:00Z",
  },
  {
    id: "work-4",
    slug: "hidratacao-profunda",
    title: "Hidratação Profunda",
    shortDescription:
      "Tratamento intensivo que recupera fios danificados, devolve maciez e brilho.",
    category: "Tratamento",
    imageUrl: "/images/gallery/hidratacao.jpg",
    imageAlt: "Cabelo brilhante após tratamento de hidratação profunda",
    tags: ["tratamento", "hidratação"],
    featured: false,
    order: 4,
    createdAt: "2025-03-22T10:00:00Z",
  },
];

// ---------------------------------------------------------------------------
// StaticPortfolioRepository — implements PortfolioReader using the local array.
//
// Liskov Substitution: this class can be replaced by SanityPortfolioRepository
// (see bottom of file for the future implementation stub) without any consumer
// noticing the difference.
// ---------------------------------------------------------------------------

class StaticPortfolioRepository implements PortfolioReader {
  private items: PortfolioItem[];

  constructor(items: PortfolioItem[]) {
    // Sort once at construction time; all query methods below receive
    // a pre-sorted list and avoid repeated sort operations.
    this.items = [...items].sort((a, b) => a.order - b.order);
  }

  async getAll(): Promise<PortfolioItem[]> {
    return this.items;
  }

  async getFeatured(): Promise<PortfolioItem[]> {
    return this.items.filter((item) => item.featured === true);
  }

  async getByCategory(category: PortfolioCategory): Promise<PortfolioItem[]> {
    return this.items.filter((item) => item.category === category);
  }

  async getBySlug(slug: string): Promise<PortfolioItem | undefined> {
    return this.items.find((item) => item.slug === slug);
  }
}

// ---------------------------------------------------------------------------
// Singleton repository instance — one shared instance keeps memory usage low.
// ---------------------------------------------------------------------------

export const staticPortfolioRepository: PortfolioReader =
  new StaticPortfolioRepository(PORTFOLIO_ITEMS);

// ---------------------------------------------------------------------------
// Future: SanityPortfolioRepository (stub for documentation purposes)
//
// When Sanity is connected, create this class in
// lib/portfolio/sanityPortfolioRepository.ts and swap the export in
// portfolioService.ts — zero component changes needed.
//
// import { sanityClient } from "@/lib/sanity";
//
// class SanityPortfolioRepository implements PortfolioReader {
//   async getAll() {
//     return sanityClient.fetch<PortfolioItem[]>(
//       `*[_type == "portfolioItem"] | order(order asc) {
//         "id": _id,
//         slug,
//         title,
//         shortDescription,
//         category,
//         "imageUrl": image.asset->url,
//         imageAlt,
//         tags,
//         featured,
//         order,
//         "createdAt": _createdAt,
//       }`
//     );
//   }
//   // ... other methods
// }
// ---------------------------------------------------------------------------
