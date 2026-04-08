// components/contact/contact-map-section.tsx
import Link from "next/link";
import { MapPin } from "lucide-react";
import { SectionContainer } from "@/components/ui/section-container";
import { CONTACT_INFO, MAPS_EMBED_SRC } from "@/config/contact-data";

export function ContactMapSection() {
  return (
    <section className="bg-white py-0 pb-20 sm:pb-28" aria-label="Localização no mapa">
      <SectionContainer>
        {/* Map embed */}
        <div className="relative h-[320px] overflow-hidden rounded-3xl border border-wine-100 shadow-sm sm:h-[420px]">
          <iframe
            title="Localização do Salão Tininha no Google Maps"
            src={MAPS_EMBED_SRC}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-full w-full"
          />
          {/* Overlay CTA */}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2">
            <Link
              href={CONTACT_INFO.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-wine-700 px-6 py-2.5 text-xs font-semibold uppercase tracking-widest text-white shadow-lg transition-all hover:bg-wine-800 hover:shadow-xl"
            >
              <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
              Abrir mapa
            </Link>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
