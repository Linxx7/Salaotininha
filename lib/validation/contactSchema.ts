// lib/validation/contactSchema.ts
// Shared between client and server — single source of truth for contact validation

import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Nome deve ter pelo menos 2 caracteres.")
    .max(100, "Nome muito longo."),
  email: z
    .string()
    .email("E-mail inválido.")
    .max(254, "E-mail muito longo."),
  subject: z
    .string()
    .min(2, "Assunto deve ter pelo menos 2 caracteres.")
    .max(200, "Assunto muito longo."),
  message: z
    .string()
    .min(10, "Mensagem deve ter pelo menos 10 caracteres.")
    .max(2000, "Mensagem muito longa."),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
