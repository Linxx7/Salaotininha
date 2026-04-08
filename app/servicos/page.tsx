// app/servicos/page.tsx
// Services page — composed from single-responsibility section components

import { buildPageMetadata } from "@/lib/seo/metadata";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildServiceSchemas } from "@/lib/seo/schemas";
import { ServicesHeroSection } from "@/components/services/services-hero-section";
import { ServicesMenuSection } from "@/components/services/services-menu-section";
import { ServicesCTASection } from "@/components/services/services-cta-section";
import { getAllServices } from "@/lib/data/services";

export const metadata = buildPageMetadata({
  title: "Serviços",
  description:
    "Conheça o menu completo de serviços do Salão Tininha: escovas, cortes, progressiva, hidratação e manicure. Agende seu horário online.",
  path: "/servicos",
});

export default async function ServicosPage() {
  const services = await getAllServices();
  const serviceSchemas = buildServiceSchemas(services);

  return (
    <>
      {serviceSchemas.map((schema) => (
        <JsonLd key={schema.name as string} schema={schema} />
      ))}
      <ServicesHeroSection />
      <ServicesMenuSection />
      <ServicesCTASection />
    </>
  );
}
