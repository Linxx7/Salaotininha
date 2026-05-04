// lib/env.ts
// Single source of truth for environment variables.
// Validated at import time — fails fast if a required variable is missing.

import { z } from "zod";

const envSchema = z.object({
  // Site
  NEXT_PUBLIC_SITE_URL: z
    .string()
    .url()
    .default("https://salaotininha.com.br"),

  // Google Analytics — optional (empty string = disabled)
  NEXT_PUBLIC_GA_ID: z.string().default(""),

  // Cal.com — optional (empty = embed not rendered)
  NEXT_PUBLIC_CAL_USERNAME: z.string().optional(),

  // Sanity.io — optional (empty = site uses static data)
  NEXT_PUBLIC_SANITY_PROJECT_ID: z.string().optional(),
  NEXT_PUBLIC_SANITY_DATASET: z.string().default("production"),

  // Resend — formulário de contato (server-only)
  RESEND_API_KEY: z.string().optional(),
  CONTACT_EMAIL: z.string().email().optional(),
  // Remetente do email — configure um domínio verificado no Resend para produção
  // ex: "Salão Tininha <contato@salaotininha.com.br>"
  // Sem essa variável, usa onboarding@resend.dev (funciona só para o email da conta Resend)
  RESEND_FROM_EMAIL: z.string().optional(),
});

export const env = envSchema.parse({
  NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
  NEXT_PUBLIC_GA_ID: process.env.NEXT_PUBLIC_GA_ID,
  NEXT_PUBLIC_CAL_USERNAME: process.env.NEXT_PUBLIC_CAL_USERNAME,
  NEXT_PUBLIC_SANITY_PROJECT_ID: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  NEXT_PUBLIC_SANITY_DATASET: process.env.NEXT_PUBLIC_SANITY_DATASET,
  RESEND_API_KEY: process.env.RESEND_API_KEY,
  CONTACT_EMAIL: process.env.CONTACT_EMAIL,
  RESEND_FROM_EMAIL: process.env.RESEND_FROM_EMAIL,
});
