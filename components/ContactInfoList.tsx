// components/ContactInfoList.tsx
import { type LucideIcon } from "lucide-react";

export interface ContactItem {
  icon: LucideIcon;
  label: string;
  value: string;
  subvalue?: string;
}

interface ContactInfoListProps {
  items: ContactItem[];
}

export function ContactInfoList({ items }: ContactInfoListProps) {
  return (
    <ul className="flex flex-col gap-6">
      {items.map((item) => {
        const Icon = item.icon;
        return (
          <li key={item.label} className="flex items-start gap-4">
            <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-wine-100">
              <Icon className="h-5 w-5 text-wine-600" aria-hidden="true" />
            </span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-wine-500">
                {item.label}
              </p>
              <p className="mt-0.5 text-sm font-medium text-gray-800">
                {item.value}
              </p>
              {item.subvalue && (
                <p className="text-sm text-gray-500">{item.subvalue}</p>
              )}
            </div>
          </li>
        );
      })}
    </ul>
  );
}
