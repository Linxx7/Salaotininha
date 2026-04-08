// components/LocationSection.tsx
import Link from "next/link";
import { MapPin, Clock, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";
import { SectionContainer } from "@/components/ui/section-container";
import { ContactInfoList, type ContactItem } from "@/components/ContactInfoList";


const GOOGLE_REVIEW_URL =
  "https://www.google.com/search?sca_esv=8a2b3961d0fe4bf2&sxsrf=ANbL-n41Mfi1LhUrNVJ5sf3PLv83-ioXbQ:1774906993957&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOWkOuHpnP31X-OBe8impvS7GUfbqo8Nr6A4To71wuPMRGncvN8oSunLe1Z9gvMKcypBREfQe_qcRKeBlOOZZHTyLgInYG28TE8oLYM6CdXs97XRjUA%3D%3D&q=Sal%C3%A3o+Tininha+Coment%C3%A1rios&sa=X";

const contactItems: ContactItem[] = [
  {
    icon: MapPin,
    label: "Endereço",
    value: "CLSW 103 Bloco C — Sala 105",
    subvalue: "St. Sudoeste, Brasília — DF, 70670-523",
  },
  {
    icon: Clock,
    label: "Horário de Funcionamento",
    value: "Terça a Sábado, 9h às 17h",
    subvalue: "Fechado às segundas e domingos",
  },
  {
    icon: Phone,
    label: "Contato",
    value: "WhatsApp disponível",
    subvalue: "Fale com a gente pelo WhatsApp",
  },
];

export function LocationSection() {
  return (
    <section
      aria-labelledby="location-heading"
      className="bg-white px-4 py-24 sm:py-32"
    >
      <SectionContainer>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
          {/* ── Left: info + CTAs ── */}
          <div>
            <SectionEyebrow className="mb-5">Localização &amp; Contato</SectionEyebrow>
            <h2
              id="location-heading"
              className="font-serif text-4xl font-bold leading-tight text-gray-900 sm:text-5xl"
            >
              Venha nos visitar
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-gray-500">
              Uma experiência além do esperado. O espaço foi projetado para que
              cada visita ao Salão Tininha seja um momento de cuidado e exclusividade.
            </p>

            <div className="mt-10">
              <ContactInfoList items={contactItems} />
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <Button
                asChild
                size="lg"
                className="rounded-full bg-wine-700 px-8 text-sm font-semibold uppercase tracking-widest text-white shadow-md transition-all hover:bg-wine-800 hover:shadow-lg"
              >
                <Link href="/agendamento">
                  Agendar horário
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full border-wine-200 px-8 text-sm font-semibold uppercase tracking-widest text-wine-700 hover:bg-wine-50 hover:border-wine-300"
              >
                <a
                  href={GOOGLE_REVIEW_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Deixar avaliação no Google Maps"
                >
                  Avaliar no Google
                </a>
              </Button>
            </div>

            <p className="mt-4 text-xs text-gray-400">
              Sua avaliação nos ajuda a crescer e atender ainda melhor.
            </p>
          </div>

          {/* ── Right: embedded Google Maps iframe ── */}
          <div className="relative h-[380px] overflow-hidden rounded-3xl border border-wine-100 shadow-sm lg:h-[460px]">
            <iframe
              title="Localização do Salão Tininha no Google Maps"
              src="https://maps.google.com/maps?cid=259397761841953463&output=embed&hl=pt-BR"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full w-full"
            />
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
