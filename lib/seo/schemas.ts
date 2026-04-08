// lib/seo/schemas.ts
// Schema builders for JSON-LD structured data
// Single Responsibility: each function builds one schema type

import type { WithContext, LocalBusiness, FAQPage, Service as SchemaService } from "schema-dts";
import type { FAQItem, Service } from "@/lib/domain/types";
import { env } from "@/lib/env";

const SITE_URL = env.NEXT_PUBLIC_SITE_URL;

export function buildLocalBusinessSchema(): WithContext<LocalBusiness> {
  return {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    name: "Salão Tininha",
    description:
      "Salão de beleza premium especializado em cabelos, unhas e estética no Sudoeste, Brasília.",
    url: SITE_URL,
    telephone: "+55-61-98353-5670",
    image: `${SITE_URL}/images/hero-banner.png`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "CLSW 103 Bloco C — Sala 105",
      addressLocality: "Brasília",
      addressRegion: "DF",
      postalCode: "70670-523",
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -15.8007,
      longitude: -47.9295,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "17:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "15:00",
      },
    ],
    priceRange: "$$",
    currenciesAccepted: "BRL",
    paymentAccepted: "Cash, Credit Card, Debit Card, Pix",
  };
}

export function buildFAQPageSchema(
  faqs: FAQItem[],
): WithContext<FAQPage> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question" as const,
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer" as const,
        text: faq.answer,
      },
    })),
  };
}

export function buildServiceSchemas(
  services: Service[],
): WithContext<SchemaService>[] {
  return services.map((service) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    offers: {
      "@type": "Offer" as const,
      price: service.price,
      priceCurrency: "BRL",
    },
    provider: {
      "@type": "BeautySalon" as const,
      name: "Salão Tininha",
      url: SITE_URL,
    },
  }));
}
