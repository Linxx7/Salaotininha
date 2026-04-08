// components/about/about-hero-section.tsx
import Image from "next/image";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";

export function AboutHeroSection() {
  return (
    <section
      aria-labelledby="about-hero-heading"
      className="relative flex min-h-[540px] items-end overflow-hidden bg-gray-900 sm:min-h-[620px]"
    >
      {/* Background image */}
      <Image
        src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1400&q=80"
        alt="Interior elegante de salão de beleza"
        fill
        priority
        quality={80}
        sizes="100vw"
        className="object-cover"
        style={{ objectPosition: "center 30%" }}
      />

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-gray-900/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8">
        <SectionEyebrow light className="mb-5">
          Santuário da Beleza
        </SectionEyebrow>
        <h1
          id="about-hero-heading"
          className="font-serif text-5xl font-bold leading-[1.05] text-white sm:text-6xl lg:text-7xl"
        >
          O Santuário{" "}
          <span className="font-serif italic text-wine-300">
            Editorial da Beleza
          </span>
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-white/75">
          Mais do que um salão de beleza — uma experiência projetada para que
          cada visita seja um momento de cuidado, curadoria e transformação.
        </p>
      </div>
    </section>
  );
}
