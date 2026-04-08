// components/contact/contact-info-card.tsx
import Link from "next/link";
import { MapPin } from "lucide-react";
import type { ContactInfo } from "@/types/contact";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

interface ContactInfoCardProps {
  info: ContactInfo;
}

export function ContactInfoCard({ info }: ContactInfoCardProps) {
  return (
    <div className="flex flex-col gap-10 rounded-xl bg-[#f8f5f6] p-10 mt-10 lg:mt-0 lg:p-12 shadow-sm">
      {/* Address */}
      <div>
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-wine-600">
          Localização
        </p>
        <div className="flex flex-col gap-2">
          <p className="font-serif text-2xl font-bold text-gray-900 leading-tight">
            {info.address} <br />
            {info.addressComplement}
          </p>
          <Link
            href={info.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gray-500 transition-colors hover:text-wine-700"
          >
            <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
            Ver no Google Maps
          </Link>
        </div>
      </div>

      {/* Contact + Social */}
      <div className="grid grid-cols-2 gap-6">
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-wine-600">
            Contato
          </p>
          <div className="flex flex-col gap-2 text-sm text-gray-600">
            <Link
              href={`tel:${info.phone.replace(/\D/g, "")}`}
              className="transition-colors hover:text-wine-700"
            >
              {info.phone}
            </Link>
            <Link
              href={info.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-wine-700"
            >
              {info.whatsapp} <br />
              (WhatsApp)
            </Link>
          </div>
        </div>

        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-wine-600">
            Social
          </p>
          <Link
            href={info.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-gray-600 transition-colors hover:text-wine-700"
          >
            {info.instagram} <InstagramIcon className="mt-px h-3 w-3" />
          </Link>
        </div>
      </div>

      {/* Schedule */}
      <div>
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-wine-600">
          Horários
        </p>
        <dl className="flex flex-col gap-3">
          {info.schedule.map((row) => (
            <div key={row.day} className="flex items-center justify-between border-b border-gray-200/50 pb-2 last:border-0 last:pb-0">
              <dt className="text-sm text-gray-600">{row.day}</dt>
              <dd
                className={`text-sm ${
                  row.closed ? "italic text-gray-400" : "font-medium text-gray-900"
                }`}
              >
                {row.hours}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}

