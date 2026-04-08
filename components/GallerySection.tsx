// components/GallerySection.tsx
import Image from "next/image";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";
import { SectionContainer } from "@/components/ui/section-container";
import type { GalleryItem } from "@/lib/domain/types";

interface GallerySectionProps {
  items: GalleryItem[];
}

export function GallerySection({ items }: GallerySectionProps) {
  return (
    <section
      aria-labelledby="gallery-heading"
      className="bg-[#faf8f6] px-4 py-24 sm:py-32"
    >
      <SectionContainer>
        <div className="mb-16 text-center">
          <SectionEyebrow className="mb-4">Nosso Portfólio</SectionEyebrow>
          <h2
            id="gallery-heading"
            className="font-serif text-4xl font-bold text-gray-900 sm:text-5xl"
          >
            Trabalhos que inspiram
          </h2>
          <p className="mt-5 mx-auto max-w-lg text-base leading-relaxed text-gray-500">
            Cada resultado reflete cuidado, técnica e atenção aos detalhes.
            Veja alguns dos nossos trabalhos recentes.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <article
              key={item.id}
              className="group relative overflow-hidden rounded-2xl bg-wine-100"
            >
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  quality={80}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/60 via-transparent to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <h3 className="font-serif text-lg font-bold text-white">
                    {item.title}
                  </h3>
                  {item.description && (
                    <p className="mt-1 text-sm text-white/80">
                      {item.description}
                    </p>
                  )}
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-white/20 px-2.5 py-0.5 text-[10px] font-medium text-white backdrop-blur-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}
