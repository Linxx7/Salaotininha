// app/loading.tsx — root loading state
import { SkeletonBox, SkeletonText } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="min-h-screen" aria-label="Carregando...">
      {/* Hero skeleton */}
      <div className="flex min-h-[60vh] flex-col bg-[#faf8f6] lg:flex-row">
        <div className="flex flex-1 flex-col justify-center px-6 py-20 sm:px-12 lg:px-16">
          <SkeletonBox className="mb-5 h-4 w-40" />
          <SkeletonBox className="mb-4 h-14 w-3/4" />
          <SkeletonText className="max-w-md" />
          <div className="mt-10 flex gap-3">
            <SkeletonBox className="h-12 w-40 rounded-full" />
            <SkeletonBox className="h-12 w-32 rounded-full" />
          </div>
        </div>
        <SkeletonBox className="h-72 w-full lg:h-auto lg:w-[48%]" />
      </div>

      {/* Cards skeleton */}
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
        <SkeletonBox className="mx-auto mb-4 h-4 w-32" />
        <SkeletonBox className="mx-auto mb-16 h-10 w-64" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="rounded-2xl border border-wine-100 bg-white p-6">
              <SkeletonBox className="mb-4 h-12 w-12 rounded-xl" />
              <SkeletonBox className="mb-3 h-5 w-2/3" />
              <SkeletonText />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
