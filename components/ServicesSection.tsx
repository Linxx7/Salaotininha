// components/ServicesSection.tsx
import Link from "next/link";
import { Scissors, Palette, Sparkles } from "lucide-react";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";
import { SectionContainer } from "@/components/ui/section-container";
import { ServiceCard } from "@/components/ServiceCard";

// Placeholder data — replace with Sanity queries when CMS is connected
const services = [
  {
    id: 1,
    icon: Scissors,
    title: "Corte & Escova",
    description:
      "Acabamento impecável com técnicas exclusivas. Cada corte é pensado para valorizar os traços únicos de cada cliente.",
    href: "/servicos",
  },
  {
    id: 2,
    icon: Palette,
    title: "Coloração",
    description:
      "Do mechas ao babylights — do balayage ao colorido. Usamos produtos de alta performance para um resultado duradouro.",
    href: "/servicos",
  },

  {
    id: 4,
    icon: Sparkles,
    title: "Tratamentos Capilares",
    description:
      "Cronogramas personalizados, hidratação profunda e reconstrução para cabelos saudáveis e brilhantes.",
    href: "/servicos",
  },
] as const;

export function ServicesSection() {
  return (
    <section
      aria-labelledby="services-heading"
      className="bg-white px-4 py-24 sm:py-32 dark:bg-wine-900"
    >
      <SectionContainer>
        {/* Header row */}
        <div className="mb-16 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-lg">
            <SectionEyebrow className="mb-4">Nossa Expertise</SectionEyebrow>
            <h2
              id="services-heading"
              className="font-serif text-4xl font-bold leading-tight text-gray-900 dark:text-white sm:text-5xl"
            >
              Serviços Assinados
            </h2>
          </div>
          <p className="max-w-sm text-base leading-relaxed text-gray-500 dark:text-gray-300 lg:text-right">
            Combinamos técnica, tendência e personalização para que você
            sempre saia com resultados que impressionam.
          </p>
        </div>

        {/* Service cards grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 border-t border-wine-100 pt-10 text-center">
          <Link
            href="/servicos"
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-wine-600 transition-colors hover:text-wine-800"
            aria-label="Ver catálogo completo de serviços"
          >
            Ver catálogo completo
            <span aria-hidden="true" className="text-wine-400">—</span>
          </Link>
        </div>
      </SectionContainer>
    </section>
  );
}
