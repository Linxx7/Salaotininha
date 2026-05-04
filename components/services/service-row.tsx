// components/services/service-row.tsx
// Single Responsibility: renders one service line item only

import { cn } from "@/lib/utils";
import type { IServiceItem } from "@/lib/domain/types";

interface ServiceRowProps {
  service: IServiceItem;
  className?: string;
}

/** Format price_from (cents) to BRL display string */
function formatPrice(cents: number | null): string {
  if (cents === null) return "Consulte";
  return `A partir de R$${(cents / 100).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`;
}

export function ServiceRow({ service, className }: ServiceRowProps) {
  return (
    <li
      className={cn(
        "group grid grid-cols-[1fr_auto] items-start gap-x-6 gap-y-0.5",
        "border-b border-wine-100/70 py-5 transition-colors last:border-b-0",
        "hover:bg-wine-50/40",
        "dark:border-wine-900/50 dark:hover:bg-wine-950/50",
        className
      )}
    >
      {/* Title + description */}
      <div className="min-w-0">
        <p className="text-[15px] font-semibold leading-snug text-gray-900
                      dark:text-gray-100">
          {service.title}
        </p>
        <p className="mt-0.5 text-xs leading-relaxed text-gray-500
                      dark:text-gray-400">
          {service.description}
        </p>
      </div>

      {/* Price */}
      <div className="flex shrink-0 items-start gap-2 pt-0.5">
        <span
          className={cn(
            "text-sm font-semibold tabular-nums",
            service.highlight
              ? "text-wine-600 dark:text-wine-400"
              : service.price_from === null
                ? "text-gray-400 italic dark:text-gray-500"
                : "text-gray-700 dark:text-gray-300"
          )}
        >
          {formatPrice(service.price_from)}
        </span>
        {service.price_from !== null && (
          <span
            className="mt-0.5 text-wine-300 opacity-0 transition-opacity group-hover:opacity-100
                       dark:text-wine-600"
            aria-hidden="true"
          >
            +
          </span>
        )}
      </div>
    </li>
  );
}
