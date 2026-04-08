// lib/portfolio/portfolioRepository.ts
//
// Interface Segregation Principle (ISP):
//   PortfolioReader is intentionally narrow — read-only queries only.
//   If a future admin panel needs write operations, it gets a separate
//   PortfolioWriter interface, not a bloated combined interface.
//
// Dependency Inversion Principle (DIP):
//   High-level modules (portfolioService, page components) depend on this
//   abstraction. Low-level modules (static array, Sanity SDK, REST API) are
//   the concrete implementations that fulfil the contract.

import type { PortfolioItem, PortfolioCategory } from "./portfolioTypes";

/**
 * Read-only contract for any portfolio data source.
 *
 * Concrete implementations:
 *  - StaticPortfolioRepository   → backed by a local TS array (current)
 *  - SanityPortfolioRepository   → backed by Sanity GROQ queries (future)
 *  - RestPortfolioRepository     → backed by an external REST API (hypothetical)
 *
 * The service layer and UI components are NEVER aware of which implementation
 * is active — they always depend on this interface. This is the Liskov
 * Substitution Principle (LSP) in practice: any implementation can replace
 * another without changing callers.
 */
export interface PortfolioReader {
  /**
   * Returns all portfolio items, ordered by `item.order` ascending.
   */
  getAll(): Promise<PortfolioItem[]>;

  /**
   * Returns only `featured === true` items, ordered by `item.order`.
   * Useful for a hero carousel or a condensed "best works" strip.
   */
  getFeatured(): Promise<PortfolioItem[]>;

  /**
   * Returns items belonging to a specific service category.
   * Enables a future filter bar without changing component contracts.
   */
  getByCategory(category: PortfolioCategory): Promise<PortfolioItem[]>;

  /**
   * Fetches a single item by slug for a future detail page.
   * Returns `undefined` if not found, consistent with safe navigation patterns.
   */
  getBySlug(slug: string): Promise<PortfolioItem | undefined>;
}
