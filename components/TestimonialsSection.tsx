// components/TestimonialsSection.tsx
import { SectionEyebrow } from "@/components/ui/section-eyebrow";
import { SectionContainer } from "@/components/ui/section-container";

// Placeholder data — replace with Sanity queries when CMS is connected
const testimonials = [
  {
    id: 1,
    name: "Mariana Silveira",
    role: "Cliente desde 2022",
    text: "Fui ao Salão Tininha não apenas uma profissional talentosa, mas um momento de paz em meio ao dia. O resultado sempre supera as expectativas, visita após visita.",
    featured: true,
  },
  {
    id: 2,
    name: "Ana Carolina",
    role: "Cliente desde 2023",
    text: "O atendimento é impecável e os resultados falam por si. Saio sempre com o cabelo dos sonhos!",
    featured: false,
  },
  {
    id: 3,
    name: "Juliana Moraes",
    role: "Cliente desde 2021",
    text: "Ambiente acolhedor, profissionais competentes. O melhor salão da região sem dúvidas.",
    featured: false,
  },
];

export function TestimonialsSection() {
  const [featured, ...secondary] = testimonials;

  return (
    <section
      aria-labelledby="testimonials-heading"
      className="bg-[#faf8f6] px-4 py-24 sm:py-32 dark:bg-wine-900/80"
    >
      <SectionContainer>
        {/* Header */}
        <div className="mb-16 text-center">
          <SectionEyebrow className="mb-4">Experiências Realizadas</SectionEyebrow>
          <h2
            id="testimonials-heading"
            className="font-serif text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl"
          >
            O que dizem nossas clientes
          </h2>
        </div>

        {/* Grid: featured quote left, secondary right */}
        <div className="grid gap-6 lg:grid-cols-5">
          {/* Featured testimonial */}
          <blockquote className="flex flex-col justify-between rounded-2xl border border-wine-100 bg-white p-10 shadow-sm lg:col-span-3 dark:border-wine-700 dark:bg-wine-800">
            <div>
              <div
                className="font-serif text-6xl leading-none text-wine-200 select-none"
                aria-hidden="true"
              >
                &ldquo;
              </div>
              <p className="mt-2 font-serif text-xl leading-relaxed text-gray-700 dark:text-gray-200 sm:text-2xl">
                {featured.text}
              </p>
            </div>
            <footer className="mt-10 flex items-center gap-4 border-t border-wine-50 pt-6">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-wine-100 font-semibold text-wine-700">
                {featured.name.charAt(0)}
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900 dark:text-white">
                  {featured.name}
                </p>
                <p className="text-xs text-gray-400 dark:text-gray-400">{featured.role}</p>
              </div>
            </footer>
          </blockquote>

          {/* Secondary testimonials + visual */}
          <div className="flex flex-col gap-6 lg:col-span-2">
            {secondary.map((t) => (
              <blockquote
                key={t.id}
                className="flex flex-1 flex-col justify-between rounded-2xl border border-wine-100 bg-white p-8 shadow-sm dark:border-wine-700 dark:bg-wine-800"
              >
                <p className="text-base leading-relaxed text-gray-600 dark:text-gray-300">
                  &ldquo;{t.text}&rdquo;
                </p>
                <footer className="mt-6 flex items-center gap-3 border-t border-wine-50 pt-4">
                  <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-wine-100 text-xs font-semibold text-wine-700">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">
                      {t.name}
                    </p>
                    <p className="text-xs text-gray-400">{t.role}</p>
                  </div>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
