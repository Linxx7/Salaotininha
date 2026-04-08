// app/contato/page.tsx
import { buildPageMetadata } from "@/lib/seo/metadata";
import { ContactHeroSection } from "@/components/contact/contact-hero-section";
import { ContactFormSection } from "@/components/contact/contact-form-section";
import { ContactMapSection } from "@/components/contact/contact-map-section";
import { ContactEditorialBanner } from "@/components/contact/contact-editorial-banner";

export const metadata = buildPageMetadata({
  title: "Contato",
  description:
    "Entre em contato com o Salão Tininha. Endereço, horários, WhatsApp e formulário de mensagem.",
  path: "/contato",
});

export default function ContatoPage() {
  return (
    <main>
      <ContactHeroSection />
      <ContactFormSection />
      <ContactMapSection />
      <ContactEditorialBanner />
    </main>
  );
}
