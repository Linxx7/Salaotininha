// components/ui/section-eyebrow.tsx
import { cn } from "@/lib/utils";

interface SectionEyebrowProps {
  children: React.ReactNode;
  className?: string;
  light?: boolean;
}

export function SectionEyebrow({
  children,
  className,
  light = false,
}: SectionEyebrowProps) {
  return (
    <span
      className={cn(
        "inline-block text-xs font-semibold uppercase tracking-[0.2em]",
        light ? "text-wine-200" : "text-wine-500",
        className
      )}
    >
      {children}
    </span>
  );
}
