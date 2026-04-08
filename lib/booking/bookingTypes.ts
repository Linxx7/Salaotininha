// lib/booking/bookingTypes.ts
// Types derived from zod schema — single source of truth

import type { BookingFormValues } from "@/lib/validation/bookingSchema";

/** Request payload matches the zod-validated shape */
export type BookingRequest = BookingFormValues;

export interface BookingResponse {
  success: boolean;
  message: string;
}
