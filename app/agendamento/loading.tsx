// app/agendamento/loading.tsx
import { SkeletonBox } from "@/components/ui/skeleton";

export default function BookingLoading() {
  return (
    <div className="min-h-screen" aria-label="Carregando agendamento...">
      {/* Hero skeleton */}
      <div className="bg-wine-900 px-4 py-20 sm:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <SkeletonBox className="mx-auto mb-5 h-4 w-40 bg-wine-700" />
          <SkeletonBox className="mx-auto mb-4 h-12 w-72 bg-wine-700" />
          <SkeletonBox className="mx-auto h-5 w-96 bg-wine-700" />
        </div>
      </div>
      {/* Form skeleton */}
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-5 sm:grid-cols-2">
          <SkeletonBox className="h-12" />
          <SkeletonBox className="h-12" />
        </div>
        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          <SkeletonBox className="h-12" />
          <SkeletonBox className="h-12" />
        </div>
        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          <SkeletonBox className="h-12" />
          <SkeletonBox className="h-12" />
        </div>
        <SkeletonBox className="mt-5 h-20" />
        <SkeletonBox className="mt-8 h-12 w-56 rounded-full" />
      </div>
    </div>
  );
}
