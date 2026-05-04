// lib/data/professionals.ts
import type { Professional } from "@/lib/domain/types";

const professionals: Professional[] = [
  {
    id: "tininha",
    name: "Tininha",
    role: "Fundadora & Hair Stylist",
    bio: "Mais de 15 anos transformando vidas através da beleza. Especialista em cortes, colorações e tratamentos de alta performance.",
    image: "/images/professionals/tininha.png",
    instagram: "@salaotininha",
  },
  {
    id: "edna",
    name: "Edna",
    role: "Especialista em Tratamentos",
    bio: "Com anos de experiência e muito carinho, cuida de cada cliente como se fosse da família. Especialista em hidratação e reconstrução capilar.",
    image: "/images/professionals/edna.png",
  },
];

export async function getProfessionals(): Promise<Professional[]> {
  return professionals;
}
