// lib/sanity.ts
// Client centralizado do Sanity.io — DIP: use este módulo, não createClient diretamente.
// Usa @sanity/client diretamente (compatível com Next.js 14).
// SANITY_API_READ_TOKEN é server-side only (sem prefixo NEXT_PUBLIC_).

import { createClient } from "@sanity/client";
import { createImageUrlBuilder } from "@sanity/image-url";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";

/** True quando as credenciais Sanity estão configuradas */
export const isSanityConfigured = Boolean(projectId);

export const sanityClient = createClient({
  projectId: projectId ?? "placeholder",
  dataset,
  apiVersion: "2024-01-01",
  useCdn: true,
  // Token de leitura — apenas server-side (Route Handlers / Server Components)
  token: process.env.SANITY_API_READ_TOKEN,
});

const builder = createImageUrlBuilder(sanityClient);

/**
 * Constrói a URL de uma imagem Sanity.
 * Uso: urlFor(source).width(800).url()
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function urlFor(source: any) {
  return builder.image(source);
}
