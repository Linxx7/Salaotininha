// components/services/services-menu-section.tsx
// Single Responsibility: multi-column service menu layout with notices
// DIP: consumes IServiceRepository via data layer, not direct imports

import { SectionContainer } from "@/components/ui/section-container";
import { ServiceListColumn } from "@/components/services/service-list-column";
import { ServicesInfoNotice } from "@/components/services/services-info-notice";
import { serviceRepository } from "@/lib/data/services";

function EscovasPromoCard() {
  return (
    <div
      className="relative overflow-hidden rounded-2xl
                 border border-wine-100 bg-wine-50/60 px-6 py-5
                 dark:border-wine-800/50 dark:bg-wine-950/40"
    >
      <div
        className="pointer-events-none absolute right-4 bottom-3 z-0 select-none text-[5rem] leading-none
                   text-wine-100 dark:text-wine-900"
        aria-hidden="true"
      >
        ✂
      </div>

      <div className="relative z-10">
        <p className="text-sm font-medium italic text-gray-600 dark:text-gray-300">
          Deseja um visual completo?
        </p>
        <p className="mt-1 text-xs leading-relaxed text-gray-400 dark:text-gray-500">
          Combine sua escova com um tratamento profundo de nutrição.
        </p>
        <a
          href="/contato"
          className="mt-4 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-widest
                     text-wine-600 transition-colors hover:text-wine-800
                     dark:text-wine-400 dark:hover:text-wine-200"
        >
          Explorar tratamentos
          <span aria-hidden="true"> →</span>
        </a>
      </div>
    </div>
  );
}

export async function ServicesMenuSection() {
  const categories = await serviceRepository.getCategories();
  const notices = await serviceRepository.getNotices();

  // Split into two visual columns for desktop layout
  const leftCategories = categories.filter((c) =>
    ["alisamentos", "tratamentos"].includes(c.id)
  );
  const rightCategories = categories.filter((c) =>
    ["corte-finalizacao", "coloracao"].includes(c.id)
  );

  return (
    <section
      aria-label="Menu completo de serviços"
      className="bg-[#faf8f6] py-16 sm:py-20
                 dark:bg-[#0d0608]"
    >
      <SectionContainer>
        <div className="grid gap-x-16 gap-y-12 lg:grid-cols-2">
          {/* Column 1 — Alisamentos + Tratamentos */}
          <div className="flex flex-col gap-10">
            {leftCategories.map((cat) => (
              <ServiceListColumn key={cat.id} category={cat} />
            ))}
            <EscovasPromoCard />
          </div>

          {/* Column 2 — Corte & Finalização + Coloração + Notices */}
          <div className="flex flex-col gap-10">
            {rightCategories.map((cat) => (
              <ServiceListColumn key={cat.id} category={cat} />
            ))}
            <ServicesInfoNotice notices={notices} />
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
