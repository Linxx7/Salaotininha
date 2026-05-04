// components/booking/cal-embed-fallback.tsx
// Renderizado quando NEXT_PUBLIC_CAL_USERNAME não está configurado.
// Orienta a cliente a agendar pelo WhatsApp.
import Link from "next/link";
import { CalendarClock, MessageCircle } from "lucide-react";
import { CONTACT_INFO } from "@/config/contact-data";

export function CalEmbedFallback() {
  return (
    <div className="flex min-h-[500px] flex-col items-center justify-center gap-8 rounded-2xl border border-dashed border-wine-200 bg-muted/30 px-6 py-16 text-center dark:border-wine-800">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-wine-100 dark:bg-wine-900/40">
        <CalendarClock className="h-8 w-8 text-wine-600 dark:text-wine-300" />
      </div>

      <div className="max-w-md space-y-3">
        <h2 className="font-serif text-2xl font-bold text-foreground">
          Agendamento Online em Breve
        </h2>
        <p className="text-base text-muted-foreground leading-relaxed">
          Nossa agenda online estará disponível em breve. Por enquanto, entre
          em contato pelo WhatsApp para agendar seu horário.
        </p>
      </div>

      <Link
        href={CONTACT_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-full bg-wine-700 px-8 py-4 text-sm font-semibold text-white shadow-lg transition-all hover:bg-wine-800 hover:shadow-wine-500/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wine-500"
      >
        <MessageCircle className="h-4 w-4" />
        Agendar pelo WhatsApp
      </Link>
    </div>
  );
}
