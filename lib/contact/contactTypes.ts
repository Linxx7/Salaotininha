// lib/contact/contactTypes.ts
// Types derived from zod schema — single source of truth

import type { ContactFormValues } from "@/lib/validation/contactSchema";

/** Request payload matches the zod-validated shape */
export type ContactFormData = ContactFormValues;

export interface ContactResponse {
  success: boolean;
  message: string;
}
