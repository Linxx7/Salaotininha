// lib/booking/bookingService.ts
// Dependency Inversion: components depend on this abstraction, not on fetch details
import type { BookingRequest, BookingResponse } from "./bookingTypes";

export async function submitBooking(data: BookingRequest): Promise<BookingResponse> {
  const res = await fetch("/api/booking", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    const body = await res.json().catch(() => null);
    return {
      success: false,
      message: body?.message ?? "Ocorreu um erro ao enviar seu agendamento. Tente novamente.",
    };
  }

  return res.json();
}
