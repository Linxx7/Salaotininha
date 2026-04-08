// lib/validation/bookingSchema.ts
// Shared between client and server — single source of truth for booking validation

import { z } from "zod";

export const bookingSchema = z.object({
  name: z
    .string()
    .min(2, "Nome deve ter pelo menos 2 caracteres.")
    .max(100, "Nome muito longo."),
  phone: z
    .string()
    .min(10, "Telefone deve ter pelo menos 10 dígitos.")
    .max(20, "Telefone inválido.")
    .regex(/[\d\s()+-]{10,}/, "Formato de telefone inválido."),
  email: z
    .string()
    .email("E-mail inválido.")
    .max(254, "E-mail muito longo.")
    .or(z.literal("")),
  serviceId: z
    .string()
    .min(1, "Selecione um serviço."),
  date: z
    .string()
    .min(1, "Selecione uma data.")
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Formato de data inválido."),
  time: z
    .string()
    .min(1, "Selecione um horário.")
    .regex(/^\d{2}:\d{2}$/, "Formato de horário inválido."),
  notes: z
    .string()
    .max(500, "Observações muito longas."),
});

export type BookingFormValues = z.infer<typeof bookingSchema>;
