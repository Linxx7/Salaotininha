// app/agendamento/page.tsx
// Server Component — sem backend próprio de agendamento.
// Usa Cal.com embed via @calcom/embed-react (Client Component).
import { Suspense } from "react";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { BookingHeroSection } from "@/components/booking/booking-hero-section";
import { CalEmbed } from "@/components/booking/cal-embed";
import { CalEmbedFallback } from "@/components/booking/cal-embed-fallback";

export const metadata = buildPageMetadata({
  title: "Agendamento",
  description:
    "Agende seu horário no Salão Tininha de forma rápida e prática. Escolha o serviço, data e horário desejados.",
  path: "/agendamento",
});

const CAL_USERNAME = process.env.NEXT_PUBLIC_CAL_USERNAME;

export default function AgendamentoPage() {
  return (
    <>
      <BookingHeroSection />

      <section className="bg-background px-4 py-12 sm:py-16">
        <div className="mx-auto max-w-5xl">
          <Suspense
            fallback={
              <div className="flex min-h-[600px] items-center justify-center">
                <p className="text-muted-foreground">Carregando agenda…</p>
              </div>
            }
          >
            {CAL_USERNAME ? (
              <CalEmbed calUsername={CAL_USERNAME} />
            ) : (
              <CalEmbedFallback />
            )}
          </Suspense>
        </div>
      </section>
    </>
  );
}
