// app/api/booking/route.ts
import { NextResponse } from "next/server";
import { bookingSchema } from "@/lib/validation/bookingSchema";
import { sanitizeObject } from "@/lib/validation/sanitize";
import type { BookingResponse } from "@/lib/booking/bookingTypes";
import { CONTACT_INFO } from "@/config/contact-data";

// Extract number from whatsappUrl (e.g. "https://wa.me/5561983535670" → "5561983535670")
const WHATSAPP_NUMBER = CONTACT_INFO.whatsappUrl.replace("https://wa.me/", "");

function buildWhatsAppUrl(data: {
  name: string;
  phone: string;
  email: string;
  serviceId: string;
  date: string;
  time: string;
  notes: string;
}): string | undefined {
  if (!WHATSAPP_NUMBER) return undefined;

  const [year, month, day] = data.date.split("-");
  const formattedDate = `${day}/${month}/${year}`;

  const lines = [
    `*Novo Agendamento — Salão Tininha*`,
    ``,
    `*Nome:* ${data.name}`,
    `*Telefone:* ${data.phone}`,
    data.email ? `*E-mail:* ${data.email}` : null,
    `*Serviço:* ${data.serviceId}`,
    `*Data:* ${formattedDate}`,
    `*Horário:* ${data.time}`,
    data.notes ? `*Obs:* ${data.notes}` : null,
  ]
    .filter(Boolean)
    .join("\n");

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines)}`;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Honeypot: if filled, it's a bot
    if (body._hp) {
      return NextResponse.json<BookingResponse>({
        success: true,
        message: "Agendamento recebido com sucesso!",
      });
    }

    // Server-side validation with zod
    const result = bookingSchema.safeParse(body);

    if (!result.success) {
      const firstError = result.error.issues[0]?.message
        ?? "Por favor, preencha todos os campos obrigatórios corretamente.";
      return NextResponse.json<BookingResponse>(
        { success: false, message: firstError },
        { status: 400 },
      );
    }

    // Sanitize validated data
    const sanitized = sanitizeObject(result.data);

    const whatsappUrl = buildWhatsAppUrl(sanitized);

    return NextResponse.json<BookingResponse>({
      success: true,
      message: whatsappUrl
        ? "Agendamento recebido! Clique no botão abaixo para confirmar pelo WhatsApp."
        : "Agendamento recebido com sucesso! Entraremos em contato para confirmar seu horário.",
      whatsappUrl,
    });
  } catch {
    return NextResponse.json<BookingResponse>(
      {
        success: false,
        message: "Erro interno. Por favor, tente novamente mais tarde.",
      },
      { status: 500 },
    );
  }
}
