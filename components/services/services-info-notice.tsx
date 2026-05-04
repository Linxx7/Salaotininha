// components/services/services-info-notice.tsx
// Single Responsibility: renders service policy notices

import type { IServiceNotice } from "@/lib/domain/types";

interface ServicesInfoNoticeProps {
  notices: IServiceNotice[];
}

export function ServicesInfoNotice({ notices }: ServicesInfoNoticeProps) {
  if (notices.length === 0) return null;

  return (
    <aside
      role="note"
      aria-label="Informações sobre nossos serviços"
      className="flex flex-col gap-3 rounded-xl border border-wine-200/60
                 bg-wine-50/80 px-5 py-4
                 dark:border-wine-800/40 dark:bg-wine-950/40"
    >
      {notices.map((notice) => (
        <div key={notice.category_id} className="flex items-start gap-3">
          <div
            className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-wine-500
                       dark:bg-wine-600"
            aria-hidden="true"
          />
          <p className="text-xs leading-relaxed text-wine-700 dark:text-wine-300">
            {notice.text}
          </p>
        </div>
      ))}
    </aside>
  );
}
