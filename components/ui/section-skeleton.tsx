// components/ui/section-skeleton.tsx
// Reusable skeleton for below-fold sections (grid cards, testimonials, etc.)

import { SkeletonBox, SkeletonText } from "@/components/ui/skeleton";

interface SectionSkeletonProps {
  columns?: 2 | 3 | 4;
  cardCount?: number;
  showImage?: boolean;
}

const gridCols: Record<number, string> = {
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-2 lg:grid-cols-3",
  4: "sm:grid-cols-2 lg:grid-cols-4",
};

export function SectionSkeleton({
  columns = 3,
  cardCount = 3,
  showImage = true,
}: SectionSkeletonProps) {
  return (
    <div
      className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8"
      aria-hidden="true"
    >
      {/* Heading skeleton */}
      <div className="mb-16 flex flex-col items-center gap-4">
        <SkeletonBox className="h-4 w-28" />
        <SkeletonBox className="h-10 w-64" />
        <SkeletonBox className="h-4 w-80" />
      </div>

      {/* Cards skeleton */}
      <div className={`grid gap-8 ${gridCols[columns]}`}>
        {Array.from({ length: cardCount }, (_, i) => (
          <div
            key={i}
            className="rounded-2xl border border-wine-100 bg-[#faf8f6] p-6"
          >
            {showImage && <SkeletonBox className="mb-4 h-48 w-full" />}
            <SkeletonBox className="mb-3 h-5 w-2/3" />
            <SkeletonText />
          </div>
        ))}
      </div>
    </div>
  );
}
