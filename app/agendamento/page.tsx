// app/agendamento/page.tsx
import { buildPageMetadata } from "@/lib/seo/metadata";
import { BookingHeroSection } from "@/components/booking/booking-hero-section";
import { BookingFormSection } from "@/components/booking/booking-form-section";
import { getServiceCategories } from "@/lib/data/services";

export const metadata = buildPageMetadata({
  title: "Agendamento",
  description:
    "Agende seu horário no Salão Tininha de forma rápida e prática. Escolha o serviço, data e horário desejados.",
  path: "/agendamento",
});

export default async function AgendamentoPage() {
  const serviceCategories = await getServiceCategories();

  return (
    <>
      <BookingHeroSection />
      <BookingFormSection serviceCategories={serviceCategories} />
    </>
  );
}
