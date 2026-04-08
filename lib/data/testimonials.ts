// lib/data/testimonials.ts
import type { Testimonial } from "@/lib/domain/types";

const testimonials: Testimonial[] = [
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

export async function getTestimonials(): Promise<Testimonial[]> {
  return testimonials;
}
