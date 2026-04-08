// components/ServiceCard.tsx
import Link from "next/link";
import { type LucideIcon, ArrowRight } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
}

export function ServiceCard({
  icon: Icon,
  title,
  description,
  href,
}: ServiceCardProps) {
  return (
    <article className="group flex flex-col gap-5 rounded-2xl border border-wine-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-wine-200 hover:shadow-md hover:shadow-wine-100/50 dark:border-wine-700 dark:bg-wine-800 dark:hover:border-wine-600">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-wine-50 transition-colors duration-300 group-hover:bg-wine-100">
        <Icon className="h-6 w-6 text-wine-600" aria-hidden="true" />
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
        <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-300">{description}</p>
      </div>

      <Link
        href={href}
        className="mt-auto inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-wine-600 transition-colors hover:text-wine-800"
        aria-label={`Saiba mais sobre ${title}`}
      >
        Saiba mais
        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
      </Link>
    </article>
  );
}
