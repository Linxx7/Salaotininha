// components/services/service-list-column.tsx
// Single Responsibility: renders one category column with its service list

import { cn } from "@/lib/utils";
import type { IServiceCategory } from "@/lib/domain/types";
import { ServiceRow } from "@/components/services/service-row";

interface ServiceListColumnProps {
  category: IServiceCategory;
  className?: string;
}

export function ServiceListColumn({
  category,
  className,
}: ServiceListColumnProps) {
  return (
    <section
      aria-labelledby={`category-${category.id}-heading`}
      className={cn("flex flex-col", className)}
    >
      {/* Category heading */}
      <h2
        id={`category-${category.id}-heading`}
        className="mb-6 font-serif text-2xl font-bold text-gray-900
                   dark:text-gray-100"
      >
        {category.name}
      </h2>

      {/* Service list */}
      <ul role="list" className="flex flex-col">
        {category.services.map((item) => (
          <ServiceRow key={item.id} service={item} />
        ))}
      </ul>
    </section>
  );
}
