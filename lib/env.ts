// lib/env.ts
// Single source of truth for environment variables.
// Validated at import time — fails fast if a required variable is missing.

import { z } from "zod";

const envSchema = z.object({
  NEXT_PUBLIC_SITE_URL: z
    .string()
    .url()
    .default("https://salaotininha.com.br"),
  NEXT_PUBLIC_GA_ID: z
    .string()
    .default(""),
});

export const env = envSchema.parse({
  NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
  NEXT_PUBLIC_GA_ID: process.env.NEXT_PUBLIC_GA_ID,
});
