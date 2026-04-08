// lib/portfolio/portfolioService.ts
//
// Single Responsibility: public API surface for the portfolio domain.
//   This is the *only* module that page components and Server Components
//   import from — they never touch the repository or the raw data array.
//
// Dependency Inversion Principle: the service depends on the PortfolioReader
//   *abstraction*, not on the StaticPortfolioRepository *concrete class*.
//   Swap `activeRepository` below to change the data source globally.
//
// Open/Closed: add new query functions (e.g., getLatestPortfolioItems) here
//   without modifying any existing function or consumer.

import type { PortfolioItem, PortfolioCategory } from "./portfolioTypes";
import type { PortfolioReader } from "./portfolioRepository";
import { staticPortfolioRepository } from "./portfolioData";

// ---------------------------------------------------------------------------
// Dependency injection point.
// In tests, pass a mock PortfolioReader.
// In production, the static repository is used by default.
// When Sanity is ready, replace `staticPortfolioRepository` with
// `sanityPortfolioRepository` — no component changes needed.
// ---------------------------------------------------------------------------

let activeRepository: PortfolioReader = staticPortfolioRepository;

/** @internal — for testing only; allows injecting a mock repository. */
export function _setPortfolioRepository(repo: PortfolioReader): void {
  activeRepository = repo;
}

// ---------------------------------------------------------------------------
// Public service functions — these are the stable API that all consumers use.
// ---------------------------------------------------------------------------

/**
 * Returns all portfolio items sorted by display order.
 *
 * Usage in a Server Component:
 * ```tsx
 * const items = await getPortfolioItems();
 * ```
 */
export async function getPortfolioItems(): Promise<PortfolioItem[]> {
  return activeRepository.getAll();
}

/**
 * Returns only featured portfolio items.
 * Useful for a hero carousel or a homepage "best works" strip.
 */
export async function getFeaturedPortfolioItems(): Promise<PortfolioItem[]> {
  return activeRepository.getFeatured();
}

/**
 * Returns portfolio items filtered by service category.
 * Powers a future filter bar without any component-level changes.
 *
 * @example
 * const colorItems = await getPortfolioItemsByCategory("Coloração");
 */
export async function getPortfolioItemsByCategory(
  category: PortfolioCategory
): Promise<PortfolioItem[]> {
  return activeRepository.getByCategory(category);
}

/**
 * Fetches a single portfolio item by its URL slug.
 * Ready for a future `/portfolio/[slug]` detail page.
 *
 * @returns The item, or `undefined` if not found.
 */
export async function getPortfolioItemBySlug(
  slug: string
): Promise<PortfolioItem | undefined> {
  return activeRepository.getBySlug(slug);
}
