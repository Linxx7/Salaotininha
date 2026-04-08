// lib/analytics/analytics.ts
// Dependency Inversion: UI calls these functions, not GA directly.
// Swap provider without touching components.

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackPageView(url: string) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("config", getGAId(), { page_path: url });
  }
}

export function trackEvent(action: string, category: string, label?: string) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
    });
  }
}

function getGAId(): string {
  // Accessed at runtime in the browser — use process.env directly
  // since lib/env.ts is validated at build time on the server.
  return process.env.NEXT_PUBLIC_GA_ID ?? "";
}
