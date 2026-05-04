// lib/data/gallery.ts
import type { GalleryItem } from "@/lib/domain/types";

const galleryItems: GalleryItem[] = [
  {
    id: "work-1",
    title: "Corte Moderno",
    description: "Corte em camadas com finalização em escova",
    image: "/images/gallery/corte-moderno.jpg",
    tags: ["corte", "escova"],
  },
  {
    id: "work-2",
    title: "Progressiva Premium",
    description: "Resultado liso e brilhante com produtos de alta performance",
    image: "/images/gallery/progressiva.jpg",
    tags: ["tratamento", "progressiva"],
  },
  {
    id: "work-3",
    title: "Mechas Iluminadas",
    description: "Mechas sutis para iluminar o rosto e trazer leveza",
    image: "/images/gallery/mechas.jpg",
    tags: ["coloração", "mechas"],
  },
  {
    id: "work-4",
    title: "Hidratação Profunda",
    description: "Tratamento intensivo para fios danificados e ressecados",
    image: "/images/gallery/hidratacao.jpg",
    tags: ["tratamento", "hidratação"],
  },
  {
    id: "salao-1",
    title: "Nosso Espaço",
    description: "Ambiente acolhedor e moderno para o seu conforto",
    image: "/images/gallery/salao-interior.jpg",
    tags: ["salão", "espaço"],
  },
  {
    id: "salao-2",
    title: "Recepção",
    description: "Bem-vinda ao Salão Tininha — onde tudo começa",
    image: "/images/gallery/recepcao.jpg",
    tags: ["salão", "recepção"],
  },
];

export async function getGalleryItems(): Promise<GalleryItem[]> {
  return galleryItems;
}
