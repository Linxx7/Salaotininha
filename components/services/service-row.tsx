// components/services/service-row.tsx
// Single Responsibility: renders one service line item only

import { cn } from "@/lib/utils";
import type { ServiceItem } from "@/types/services";

interface ServiceRowProps {
  service: ServiceItem;
  className?: string;
}

export function ServiceRow({ service, className }: ServiceRowProps) {
  return (
    <li
      className={cn(
        "group grid grid-cols-[1fr_auto] items-start gap-x-6 gap-y-0.5",
        "border-b border-wine-100/70 py-5 transition-colors last:border-b-0",
        "hover:bg-wine-50/40",
        className
      )}
    >
      {/* Name + description */}
      <div className="min-w-0">
        <p className="text-[15px] font-semibold leading-snug text-gray-900">
          {service.name}
        </p>
        <p className="mt-0.5 text-xs leading-relaxed text-gray-500">
          {service.description}
        </p>
      </div>

      {/* Price */}
      <div className="flex shrink-0 items-start gap-2 pt-0.5">
        <span
          className={cn(
            "text-sm font-semibold tabular-nums",
            service.highlight ? "text-wine-600" : "text-gray-700"
          )}
        >
          {service.price}
        </span>
        {/* Subtle affordance */}
        <span
          className="mt-0.5 text-wine-300 opacity-0 transition-opacity group-hover:opacity-100"
          aria-hidden="true"
        >
          +
        </span>
      </div>
    </li>
  );
}
