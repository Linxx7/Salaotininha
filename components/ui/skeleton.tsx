// components/ui/skeleton.tsx
import { cn } from "@/lib/utils";

interface SkeletonProps {
  className?: string;
}

export function SkeletonBox({ className }: SkeletonProps) {
  return (
    <div
      className={cn("animate-pulse rounded-lg bg-wine-100/50", className)}
      aria-hidden="true"
    />
  );
}

export function SkeletonText({ className }: SkeletonProps) {
  return (
    <div className={cn("space-y-3", className)} aria-hidden="true">
      <div className="h-4 w-3/4 animate-pulse rounded bg-wine-100/50" />
      <div className="h-4 w-full animate-pulse rounded bg-wine-100/50" />
      <div className="h-4 w-5/6 animate-pulse rounded bg-wine-100/50" />
    </div>
  );
}

export function SkeletonCard({ className }: SkeletonProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4 rounded-2xl border border-wine-100 bg-white p-6",
        className
      )}
      aria-hidden="true"
    >
      <SkeletonBox className="h-40 w-full" />
      <div className="h-5 w-2/3 animate-pulse rounded bg-wine-100/50" />
      <SkeletonText />
    </div>
  );
}
