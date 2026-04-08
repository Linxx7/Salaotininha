// components/about/about-story-section.tsx
import Image from "next/image";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";
import { SectionContainer } from "@/components/ui/section-container";

export function AboutStorySection() {
  return (
    <section
      aria-labelledby="about-story-heading"
      className="bg-white py-20 sm:py-28"
    >
      <SectionContainer>
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">

          {/* Left: image */}
          <div className="relative h-[380px] w-full overflow-hidden rounded-3xl bg-wine-100 sm:h-[460px]">
            <Image
              src="https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=900&q=80"
              alt="Detalhe de penteado — Salão Tininha"
              fill
              quality={80}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />
          </div>

          {/* Right: narrative */}
          <div>
            <SectionEyebrow className="mb-5">Identidade</SectionEyebrow>
            <h2
              id="about-story-heading"
              className="font-serif text-4xl font-bold leading-tight text-gray-900 sm:text-5xl"
            >
              Curadoria de detalhes,{" "}
              <span className="font-serif italic text-wine-600">
                celebração da alma.
              </span>
            </h2>
            <div className="mt-6 flex flex-col gap-4 text-base leading-relaxed text-gray-500">
              <p>
                O Salão Tininha nasceu de uma crença simples: que a beleza vai
                além da superfície. Aqui, cada atendimento começa com escuta e
                termina com resultado — porque entendemos que cuidar de si é
                também cuidar da própria história.
              </p>
              <p>
                Cada detalhe do espaço foi pensado com intenção: a iluminação,
                a música, o aroma, o tempo dedicado. Porque acreditamos que uma
                experiência de beleza de verdade começa muito antes das tesouras.
              </p>
              <p>
                Para nós, o salão não é apenas um lugar. É um ritual.
              </p>
            </div>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
