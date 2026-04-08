"use client";

import { useEffect, useState, useCallback } from "react";
import { X } from "lucide-react";
import { CONFIG } from "@/config/config";

const STORAGE_KEY = "whatsapp-btn-dismissed";

function buildWhatsAppUrl(phone: string, message: string): string {
  const encoded = encodeURIComponent(message);
  const isMobile =
    typeof navigator !== "undefined" &&
    /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(
      navigator.userAgent
    );

  return isMobile
    ? `https://api.whatsapp.com/send?phone=${phone}&text=${encoded}`
    : `https://web.whatsapp.com/send?phone=${phone}&text=${encoded}`;
}

function readDismissed(): boolean {
  try {
    return localStorage.getItem(STORAGE_KEY) === "1";
  } catch {
    return false;
  }
}

function writeDismissed(): void {
  try {
    localStorage.setItem(STORAGE_KEY, "1");
  } catch {
    // Storage unavailable — ignore
  }
}

export function WhatsAppButton() {
  const [url, setUrl] = useState("");
  const [dismissed, setDismissed] = useState(true); // hidden by default to avoid flash
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    setUrl(
      buildWhatsAppUrl(
        CONFIG.whatsapp.phoneNumber,
        CONFIG.whatsapp.defaultMessage
      )
    );

    const wasDismissed = readDismissed();
    setDismissed(wasDismissed);

    // Show tooltip after a short delay on first visit
    if (!wasDismissed) {
      const timer = setTimeout(() => setShowTooltip(true), 2000);
      const hide = setTimeout(() => setShowTooltip(false), 8000);
      return () => {
        clearTimeout(timer);
        clearTimeout(hide);
      };
    }
  }, []);

  const handleDismiss = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    writeDismissed();
    setDismissed(true);
  }, []);

  if (dismissed) return null;

  return (
    <div className="whatsapp-float-container">
      {/* Tooltip */}
      {showTooltip && (
        <div
          role="tooltip"
          className="absolute bottom-full right-0 mb-3 w-48 rounded-lg bg-gray-900 px-3 py-2 text-xs leading-relaxed text-white shadow-lg"
        >
          Precisa de ajuda? Fale conosco pelo WhatsApp!
          <div
            className="absolute -bottom-1 right-5 h-2 w-2 rotate-45 bg-gray-900"
            aria-hidden="true"
          />
        </div>
      )}

      {/* WhatsApp link */}
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Fale conosco pelo WhatsApp"
        className="whatsapp-float group"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          fill="currentColor"
          className="h-7 w-7 transition-transform duration-200 group-hover:scale-110"
          aria-hidden="true"
        >
          <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16.004c0 3.5 1.128 6.744 3.046 9.378L1.054 31.29l6.118-1.958A15.9 15.9 0 0 0 16.004 32C24.826 32 32 24.826 32 16.004S24.826 0 16.004 0zm9.31 22.606c-.39 1.1-1.932 2.014-3.164 2.28-.844.18-1.946.322-5.656-1.216-4.748-1.966-7.804-6.78-8.038-7.094-.226-.314-1.886-2.512-1.886-4.792s1.192-3.4 1.616-3.866c.424-.466.926-.582 1.234-.582.308 0 .616.002.884.016.284.014.664-.108 1.04.792.39.932 1.322 3.212 1.438 3.446.116.234.194.506.04.814-.156.314-.234.506-.466.78-.234.274-.49.612-.7.82-.232.234-.476.488-.204.958.274.466 1.214 2.002 2.606 3.244 1.79 1.596 3.298 2.09 3.764 2.324.466.234.738.194 1.01-.116.274-.314 1.166-1.36 1.478-1.826.308-.466.62-.39 1.048-.234.426.156 2.706 1.276 3.172 1.508.466.234.776.35.892.542.116.194.116 1.1-.274 2.202z" />
        </svg>
      </a>

      {/* Dismiss button */}
      <button
        type="button"
        onClick={handleDismiss}
        aria-label="Fechar botão do WhatsApp"
        className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-gray-700 text-white shadow-sm transition-colors hover:bg-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
      >
        <X className="h-3 w-3" aria-hidden="true" />
      </button>
    </div>
  );
}
