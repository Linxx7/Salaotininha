// components/about/about-values-section.tsx
import { Sparkles, Heart, TrendingUp } from "lucide-react";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";
import { SectionContainer } from "@/components/ui/section-container";
import type { AboutValue } from "@/types/about";

const VALUES: AboutValue[] = [
  {
    icon: Sparkles,
    title: "Excelência",
    description:
      "Padrão elevado em cada serviço. Usamos produtos premium e técnicas atualizadas para garantir resultados que superam as expectativas.",
  },
  {
    icon: Heart,
    title: "Cuidado",
    description:
      "Cada cliente é única. Ouvimos com atenção, adaptamos o atendimento e criamos experiências que fazem você se sentir em casa desde o primeiro momento.",
  },
  {
    icon: TrendingUp,
    title: "Tendência",
    description:
      "Estamos em constante atualização, sempre atentos ao que há de mais novo na beleza global para trazer o melhor para o nosso espaço.",
  },
];

export function AboutValuesSection() {
  return (
    <section
      aria-labelledby="values-heading"
      className="bg-wine-50 py-20 sm:py-28"
    >
      <SectionContainer>
        <div className="mb-14 text-center">
          <SectionEyebrow className="mb-4">Nossos Pilares</SectionEyebrow>
          <h2
            id="values-heading"
            className="font-serif text-4xl font-bold text-gray-900 sm:text-5xl"
          >
            Fundamentos do Santuário
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-3">
          {VALUES.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="group rounded-3xl border border-wine-100 bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-wine-100 text-wine-600 transition-colors group-hover:bg-wine-700 group-hover:text-white">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="mb-3 font-serif text-xl font-bold text-gray-900">
                {title}
              </h3>
              <p className="text-sm leading-relaxed text-gray-500">
                {description}
              </p>
            </article>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}
