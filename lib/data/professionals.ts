// lib/data/professionals.ts
import type { Professional } from "@/lib/domain/types";

const professionals: Professional[] = [
  {
    id: "tininha",
    name: "Tininha",
    role: "Fundadora & Hair Stylist",
    bio: "Mais de 10 anos transformando vidas através da beleza. Especialista em cortes e colorações de alta performance.",
    image: "/images/professionals/tininha.jpg",
    instagram: "@salaotininha",
  },
  {
    id: "profissional-2",
    name: "Carla Mendes",
    role: "Manicure & Nail Designer",
    bio: "Apaixonada por detalhes, Carla traz as últimas tendências em nail art e cuidado completo para mãos e pés.",
    image: "/images/professionals/carla.jpg",
  },
  {
    id: "profissional-3",
    name: "Fernanda Lima",
    role: "Especialista em Tratamentos",
    bio: "Expert em cronogramas capilares e tratamentos de reconstrução. Seus resultados falam por si.",
    image: "/images/professionals/fernanda.jpg",
  },
];

export async function getProfessionals(): Promise<Professional[]> {
  return professionals;
}
