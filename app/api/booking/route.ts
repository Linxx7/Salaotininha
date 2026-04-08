// app/api/booking/route.ts
import { NextResponse } from "next/server";
import { bookingSchema } from "@/lib/validation/bookingSchema";
import { sanitizeObject } from "@/lib/validation/sanitize";
import type { BookingResponse } from "@/lib/booking/bookingTypes";

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

    // TODO: integrate with booking provider (email, CRM, calendar)
    console.log("[Booking]", sanitized);

    return NextResponse.json<BookingResponse>({
      success: true,
      message:
        "Agendamento recebido com sucesso! Entraremos em contato para confirmar seu horário.",
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
