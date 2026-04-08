// lib/seo/metadata.ts
import type { Metadata } from "next";
import { env } from "@/lib/env";

const SITE_URL = env.NEXT_PUBLIC_SITE_URL;
const SITE_NAME = "Salão Tininha";
const DEFAULT_OG_IMAGE = "/images/hero-banner.png";

interface PageMetadataOptions {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  ogImageAlt?: string;
}

export function buildPageMetadata({
  title,
  description,
  path,
  ogImage = DEFAULT_OG_IMAGE,
  ogImageAlt = `${title} — ${SITE_NAME}`,
}: PageMetadataOptions): Metadata {
  const canonicalUrl = `${SITE_URL}${path}`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${title} — ${SITE_NAME}`,
      description,
      url: canonicalUrl,
      siteName: SITE_NAME,
      locale: "pt_BR",
      type: "website",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: ogImageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} — ${SITE_NAME}`,
      description,
      images: [ogImage],
    },
  };
}
