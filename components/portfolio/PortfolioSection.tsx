// components/portfolio/PortfolioSection.tsx
//
// Single Responsibility: orchestrates the "Nosso Portfólio" section layout.
//   No data fetching, no business logic — pure structural composition.
//
// Open/Closed: layout accepts any PortfolioItem[]; adding filters, pagination,
//   or a "Load more" button does NOT require touching this component's core.
//
// The component is intentionally a React Server Component (no "use client")
// so it can be used directly in async page components.

import { SectionEyebrow } from "@/components/ui/section-eyebrow";
import { SectionContainer } from "@/components/ui/section-container";
import { PortfolioCard } from "./PortfolioCard";
import type { PortfolioItem } from "@/lib/portfolio/portfolioTypes";

interface PortfolioSectionProps {
  /**
   * Items to display in the grid. Comes from the parent Server Component
   * (page.tsx) which called getPortfolioItems() — keeps this component
   * pure and easy to test / reuse.
   */
  items: PortfolioItem[];
}

export function PortfolioSection({ items }: PortfolioSectionProps) {
  return (
    <section
      aria-labelledby="portfolio-heading"
      className="bg-[#faf8f6] px-4 py-24 sm:py-32"
    >
      <SectionContainer>
        {/* ── Section header ── */}
        <div className="mb-16 text-center">
          <SectionEyebrow className="mb-4">Nosso Portfólio</SectionEyebrow>
          <h2
            id="portfolio-heading"
            className="font-serif text-4xl font-bold text-gray-900 sm:text-5xl"
          >
            Trabalhos que inspiram
          </h2>
          <p className="mt-5 mx-auto max-w-lg text-base leading-relaxed text-gray-500">
            Cada resultado reflete cuidado, técnica e atenção aos detalhes.
            Veja alguns dos nossos trabalhos recentes.
          </p>
        </div>

        {/* ── Responsive grid ── */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <PortfolioCard key={item.id} item={item} />
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}
