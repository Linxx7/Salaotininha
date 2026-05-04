// components/booking/booking-hero-section.tsx
import { SectionEyebrow } from "@/components/ui/section-eyebrow";

export function BookingHeroSection() {
  return (
    <section className="bg-wine-900 px-4 py-20 sm:py-28" aria-labelledby="booking-heading">
      <div className="mx-auto max-w-3xl text-center">
        <SectionEyebrow light className="mb-5">
          Agendamento Online
        </SectionEyebrow>
        <h1
          id="booking-heading"
          className="font-serif text-4xl font-bold text-white sm:text-5xl"
        >
          Agende seu horário
        </h1>
        <p className="mt-5 text-base leading-relaxed text-wine-200 sm:text-lg">
          Escolha o melhor dia e horário para você diretamente na nossa agenda.
          A confirmação será enviada por WhatsApp.
        </p>
      </div>
    </section>
  );
}
