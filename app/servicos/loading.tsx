// app/servicos/loading.tsx
import { SkeletonBox, SkeletonText } from "@/components/ui/skeleton";

export default function ServicosLoading() {
  return (
    <div className="min-h-screen" aria-label="Carregando serviços...">
      <div className="bg-wine-900 px-4 py-20 sm:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <SkeletonBox className="mx-auto mb-5 h-4 w-32 bg-wine-700" />
          <SkeletonBox className="mx-auto h-12 w-64 bg-wine-700" />
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2">
          {[1, 2].map((col) => (
            <div key={col} className="space-y-4">
              <SkeletonBox className="mb-6 h-6 w-24" />
              {[1, 2, 3, 4].map((row) => (
                <div key={row} className="flex justify-between border-b border-wine-50 pb-4">
                  <SkeletonText className="w-2/3" />
                  <SkeletonBox className="h-5 w-20" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
