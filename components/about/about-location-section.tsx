// components/about/about-location-section.tsx
import Link from "next/link";
import { MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";
import { SectionContainer } from "@/components/ui/section-container";
import { CONTACT_INFO, MAPS_EMBED_SRC } from "@/config/contact-data";

export function AboutLocationSection() {
  return (
    <section
      aria-labelledby="location-about-heading"
      className="bg-white py-20 sm:py-28"
    >
      <SectionContainer>
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">

          {/* Left: info */}
          <div>
            <SectionEyebrow className="mb-5">Localização</SectionEyebrow>
            <h2
              id="location-about-heading"
              className="font-serif text-4xl font-bold leading-tight text-gray-900 sm:text-5xl"
            >
              No coração do{" "}
              <span className="font-serif italic text-wine-600">Sudoeste</span>
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-gray-500">
              A um passo de casa, no bairro que respira elegância e sofisticação.
              Estamos no Sudoeste — um espaço de fácil acesso e estacionamento,
              pensado para o seu conforto.
            </p>

            <ul className="mt-8 flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-wine-600" aria-hidden="true" />
                <div>
                  <p className="text-sm font-semibold text-gray-800">
                    {CONTACT_INFO.address}
                  </p>
                  <p className="text-sm text-gray-500">
                    {CONTACT_INFO.addressComplement}
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 flex-shrink-0 text-wine-600" aria-hidden="true" />
                <div>
                  {CONTACT_INFO.schedule.map((row) => (
                    <p
                      key={row.day}
                      className={`text-sm ${row.closed ? "text-wine-400" : "text-gray-500"}`}
                    >
                      <span className="font-medium text-gray-800">
                        {row.day}:
                      </span>{" "}
                      {row.hours}
                    </p>
                  ))}
                </div>
              </li>
            </ul>

            <div className="mt-10">
              <Button
                asChild
                size="lg"
                className="rounded-full bg-wine-700 px-8 text-xs font-semibold uppercase tracking-widest text-white shadow-md hover:bg-wine-800 hover:shadow-lg"
              >
                <Link
                  href={CONTACT_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Traçar rota
                </Link>
              </Button>
            </div>
          </div>

          {/* Right: map */}
          <div className="relative h-[340px] overflow-hidden rounded-3xl border border-wine-100 shadow-sm sm:h-[420px]">
            <iframe
              title="Localização do Salão Tininha"
              src={MAPS_EMBED_SRC}
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
