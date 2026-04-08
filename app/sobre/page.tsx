// app/sobre/page.tsx
import { buildPageMetadata } from "@/lib/seo/metadata";
import { AboutHeroSection } from "@/components/about/about-hero-section";
import { AboutStorySection } from "@/components/about/about-story-section";
import { AboutValuesSection } from "@/components/about/about-values-section";
import { AboutQuoteSection } from "@/components/about/about-quote-section";
import { AboutLocationSection } from "@/components/about/about-location-section";

export const metadata = buildPageMetadata({
  title: "Sobre",
  description:
    "Conheça a história e os valores do Salão Tininha — um santuário de beleza editorial no Sudoeste, Brasília.",
  path: "/sobre",
});

export default function SobrePage() {
  return (
    <main>
      <AboutHeroSection />
      <AboutStorySection />
      <AboutValuesSection />
      <AboutQuoteSection />
      <AboutLocationSection />
    </main>
  );
}
