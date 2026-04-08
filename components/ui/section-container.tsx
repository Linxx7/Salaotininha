// components/ui/section-container.tsx
import { cn } from "@/lib/utils";

interface SectionContainerProps {
  children: React.ReactNode;
  className?: string;
  narrow?: boolean;
}

export function SectionContainer({
  children,
  className,
  narrow = false,
}: SectionContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-4 sm:px-6 lg:px-8",
        narrow ? "max-w-4xl" : "max-w-6xl",
        className
      )}
    >
      {children}
    </div>
  );
}
