// lib/domain/types.ts
// Central domain types — Single Responsibility: each interface models one entity

export interface Service {
  id: string;
  name: string;
  description: string;
  price: string;
  highlight?: boolean;
}

export interface ServiceCategory {
  id: string;
  title: string;
  items: Service[];
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  text: string;
  featured: boolean;
}

export interface Professional {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  instagram?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  description?: string;
  image: string;
  tags: string[];
}

/** Known FAQ categories — extend this union when adding new categories */
export type FAQCategory =
  | "agendamento"
  | "pagamento"
  | "localização"
  | "preços"
  | "geral";

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: FAQCategory;
}

export interface BlogPost {
  slug: string;
  title: string;
  summary: string;
  content: string;
  date: string;
  tags: string[];
}
