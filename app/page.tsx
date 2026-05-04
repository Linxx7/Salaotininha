// app/page.tsx
import { buildPageMetadata } from "@/lib/seo/metadata";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  buildLocalBusinessSchema,
  buildFAQPageSchema,
} from "@/lib/seo/schemas";
import { HeroSection } from "@/components/hero";
import { heroConfig } from "@/config/hero.config";
import { ServicesSection } from "@/components/ServicesSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { PortfolioSection } from "@/components/portfolio";
import { TeamSection } from "@/components/TeamSection";
import { FAQSection } from "@/components/FAQSection";
import { LocationSection } from "@/components/LocationSection";
import { getProfessionals } from "@/lib/data/professionals";
import { getPortfolioItems } from "@/lib/portfolio";
import { getFAQs } from "@/lib/data/faqs";
import type { Professional, FAQItem } from "@/lib/domain/types";
import type { PortfolioItem } from "@/lib/portfolio/portfolioTypes";

export const metadata = buildPageMetadata({
  title: "Beleza & Estética",
  description:
    "Salão de beleza premium no Sudoeste, Brasília. Cortes, coloração, tratamentos capilares, manicure e muito mais. Agende online!",
  path: "/",
});

export default async function HomePage() {
  let professionals: Professional[];
  let portfolioItems: PortfolioItem[];
  let faqs: FAQItem[];

  try {
    [professionals, portfolioItems, faqs] = await Promise.all([
      getProfessionals(),
      getPortfolioItems(),
      getFAQs(),
    ]);
  } catch {
    // Fallback to empty data — sections handle empty arrays gracefully
    professionals = [];
    portfolioItems = [];
    faqs = [];
  }

  return (
    <>
      <JsonLd schema={buildLocalBusinessSchema()} />
      {faqs.length > 0 && <JsonLd schema={buildFAQPageSchema(faqs)} />}
      <HeroSection config={heroConfig} />
      <ServicesSection />
      {portfolioItems.length > 0 && (
        <PortfolioSection items={portfolioItems} />
      )}
      <TestimonialsSection />
      {professionals.length > 0 && (
        <TeamSection professionals={professionals} />
      )}
      {faqs.length > 0 && <FAQSection faqs={faqs} />}
      <LocationSection />
    </>
  );
}
