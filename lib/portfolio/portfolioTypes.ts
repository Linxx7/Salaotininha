// lib/portfolio/portfolioTypes.ts
// Single Responsibility: this module owns *only* the Portfolio domain model.
// Open/Closed: add new optional fields (e.g. videoUrl, cmsSanityId) without
// touching consumers — the type is open for extension via optional props.

/**
 * All service categories that a portfolio item may belong to.
 * Keeping this as a union type (not enum) makes tree-shaking trivially possible
 * and avoids the runtime overhead of TS enums.
 */
export type PortfolioCategory =
  | "Coloração"
  | "Corte"
  | "Química"
  | "Unhas"
  | "Tratamento";

/**
 * Core domain entity for a portfolio work item.
 *
 * Fields marked optional are CMS-readiness hooks — they can be unpopulated
 * today while the static array is used, and populated transparently once
 * Sanity is integrated, without touching any component.
 */
export interface PortfolioItem {
  /** Stable, unique identifier (used as React key and future slug prefix). */
  id: string;

  /**
   * URL-safe slug for a future detail page (e.g. /portfolio/balayage-dourado).
   * Derived from id for now; will come from CMS slug field later.
   */
  slug: string;

  /** Primary display title (e.g. "Balayage Dourado"). */
  title: string;

  /**
   * One or two lines describing the technique/result shown.
   * Optional so cards without copy still render gracefully.
   */
  shortDescription?: string;

  /** Service category — drives future filter UI without changing the type. */
  category: PortfolioCategory;

  /**
   * Absolute URL or relative path to the hero image.
   * Use a Next.js-compatible path (e.g. "/images/portfolio/balayage.jpg")
   * or a Sanity CDN URL when the CMS is plugged in.
   */
  imageUrl: string;

  /**
   * Alt text for the image. Good for a11y and SEO.
   * Falls back to `title` in the card if absent.
   */
  imageAlt?: string;

  /**
   * Human-readable tags for the hover overlay (e.g. ["coloração", "balayage"]).
   * These can later drive a facet-search filter bar.
   */
  tags: string[];

  /** Pin this item to the top of a "Featured works" variant of the section. */
  featured?: boolean;

  /**
   * Explicit display order. Lower numbers appear first.
   * Allows the salon owner to reorder works in the CMS without changing code.
   */
  order: number;

  /**
   * ISO-8601 creation/publication date.
   * Used for "latest works" sorting and future RSS/feed generation.
   */
  createdAt: string;
}

// ---------------------------------------------------------------------------
// Type guards — useful when data arrives from an external source (CMS/REST)
// and must be validated at runtime before being trusted.
// ---------------------------------------------------------------------------

export function isPortfolioItem(value: unknown): value is PortfolioItem {
  if (typeof value !== "object" || value === null) return false;
  const v = value as Record<string, unknown>;
  return (
    typeof v.id === "string" &&
    typeof v.slug === "string" &&
    typeof v.title === "string" &&
    typeof v.category === "string" &&
    typeof v.imageUrl === "string" &&
    Array.isArray(v.tags) &&
    typeof v.order === "number" &&
    typeof v.createdAt === "string"
  );
}
