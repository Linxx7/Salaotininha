// components/services/services-menu-section.tsx
// Single Responsibility: two-column service menu layout with footer notice

import { SectionContainer } from "@/components/ui/section-container";
import { ServiceListColumn } from "@/components/services/service-list-column";
import { ServicesInfoNotice } from "@/components/services/services-info-notice";
import { serviceCategories } from "@/types/services";

// Inline cross-promo card — simple editorial call-out
function EscovasPromoCard() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-wine-100 bg-wine-50/60 px-6 py-5">
      {/* Decorative scissors watermark */}
      <div
        className="pointer-events-none absolute right-4 bottom-3 select-none text-[5rem] leading-none text-wine-100"
        aria-hidden="true"
      >
        ✂
      </div>
      <p className="text-sm font-medium italic text-gray-600">
        Deseja um visual completo?
      </p>
      <p className="mt-1 text-xs leading-relaxed text-gray-400">
        Combine sua escova com um tratamento profundo de nutrição.
      </p>
      <a
        href="/contato"
        className="mt-4 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-widest text-wine-600 transition-colors hover:text-wine-800"
      >
        Explorar tratamentos
        <span aria-hidden="true"> →</span>
      </a>
    </div>
  );
}

export function ServicesMenuSection() {
  const [escovas, servicos] = serviceCategories;

  return (
    <section
      aria-label="Menu completo de serviços"
      className="bg-[#faf8f6] py-16 sm:py-20"
    >
      <SectionContainer>
        {/* Two-column grid — stacks on mobile */}
        <div className="grid gap-x-16 gap-y-12 lg:grid-cols-2">
          {/* Column 1 — Escovas */}
          <div className="flex flex-col gap-6">
            <ServiceListColumn category={escovas} />
            <EscovasPromoCard />
          </div>

          {/* Column 2 — Serviços + notice */}
          <div className="flex flex-col gap-6">
            <ServiceListColumn category={servicos} />
            <ServicesInfoNotice />
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
