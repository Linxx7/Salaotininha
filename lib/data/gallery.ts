// lib/data/gallery.ts
import type { GalleryItem } from "@/lib/domain/types";

const galleryItems: GalleryItem[] = [
  {
    id: "work-1",
    title: "Balayage Dourado",
    description: "Técnica de balayage com tons dourados e acobreados",
    image: "/images/gallery/balayage.jpg",
    tags: ["coloração", "balayage"],
  },
  {
    id: "work-2",
    title: "Corte Moderno",
    description: "Corte em camadas com finalização em escova",
    image: "/images/gallery/corte-moderno.jpg",
    tags: ["corte", "escova"],
  },
  {
    id: "work-3",
    title: "Progressiva Premium",
    description: "Resultado liso e brilhante com produtos de alta performance",
    image: "/images/gallery/progressiva.jpg",
    tags: ["tratamento", "progressiva"],
  },
  {
    id: "work-4",
    title: "Nail Art Exclusiva",
    description: "Design personalizado com esmaltação de longa duração",
    image: "/images/gallery/nail-art.jpg",
    tags: ["manicure", "nail art"],
  },
  {
    id: "work-5",
    title: "Mechas Iluminadas",
    description: "Mechas sutis para iluminar o rosto e trazer leveza",
    image: "/images/gallery/mechas.jpg",
    tags: ["coloração", "mechas"],
  },
  {
    id: "work-6",
    title: "Hidratação Profunda",
    description: "Tratamento intensivo para fios danificados e ressecados",
    image: "/images/gallery/hidratacao.jpg",
    tags: ["tratamento", "hidratação"],
  },
];

export async function getGalleryItems(): Promise<GalleryItem[]> {
  return galleryItems;
}
