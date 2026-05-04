// components/portfolio/PortfolioCard.tsx
//
// Single Responsibility: renders ONE portfolio item card. Zero data fetching,
// zero filtering — just display the PortfolioItem it receives as a prop.
//
// Open/Closed: the card accepts optional props (showCategory, onClick) so
// future variants (e.g., a compact list view) extend behaviour without
// modifying this component.

"use client";

import Image from "next/image";
import type { PortfolioItem } from "@/lib/portfolio/portfolioTypes";

interface PortfolioCardProps {
  item: PortfolioItem;
  /**
   * Whether to show the category badge in the overlay.
   * @default true
   */
  showCategory?: boolean;
  /**
   * Optional click handler — enables future navigation to a detail page
   * or opening a lightbox, without changing this component's core logic.
   */
  onClick?: (item: PortfolioItem) => void;
}

export function PortfolioCard({
  item,
  showCategory = true,
  onClick,
}: PortfolioCardProps) {
  const { title, shortDescription, imageUrl, imageAlt, tags, category } = item;

  const handleClick = onClick ? () => onClick(item) : undefined;
  const isInteractive = Boolean(onClick);

  return (
    <article
      // Use a semantic <article> so screen readers understand each card
      // is an independent portfolio work.
      aria-label={title}
      role={isInteractive ? "button" : undefined}
      tabIndex={isInteractive ? 0 : undefined}
      onClick={handleClick}
      onKeyDown={
        isInteractive
          ? (e) => {
              if (e.key === "Enter" || e.key === " ") handleClick?.();
            }
          : undefined
      }
      className={[
        "group relative overflow-hidden rounded-2xl bg-wine-100 dark:bg-wine-900",
        isInteractive ? "cursor-pointer focus-visible:ring-2 focus-visible:ring-wine-500 focus-visible:outline-none" : "",
      ]
        .join(" ")
        .trim()}
    >
      {/* ── Image container ── */}
      <div className="relative aspect-[4/5] w-full">
        <Image
          src={imageUrl}
          alt={imageAlt ?? title}
          fill
          quality={80}
          sizes="(max-width: 640px) 100vw, 50vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {/* ── Hover / focus overlay ── */}
        <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/60 via-transparent to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">

          {/* Category badge — shown when showCategory=true */}
          {showCategory && (
            <span className="mb-2 self-start rounded-full bg-wine-500/80 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-white backdrop-blur-sm">
              {category}
            </span>
          )}

          <h3 className="font-serif text-lg font-bold text-white">{title}</h3>

          {shortDescription && (
            <p className="mt-1 text-sm leading-snug text-white/80">
              {shortDescription}
            </p>
          )}

          {/* Tags */}
          {tags.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-1.5">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-white/20 px-2.5 py-0.5 text-[10px] font-medium text-white backdrop-blur-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
