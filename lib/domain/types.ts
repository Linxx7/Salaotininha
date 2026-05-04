// lib/domain/types.ts
// Central domain types — Single Responsibility: each interface models one entity

/** Single service line item — ISP: only presentation-relevant fields */
export interface IServiceItem {
  id: string;
  title: string;
  description: string;
  /** Price in cents, or null when price is not yet defined */
  price_from: number | null;
  highlight?: boolean;
}

/** A named group of services — ISP: no rendering logic, just data shape */
export interface IServiceCategory {
  id: string;
  name: string;
  services: IServiceItem[];
}

/** Policy notice attached to a category (e.g. retoque rules) */
export interface IServiceNotice {
  category_id: string;
  text: string;
}

/** DIP: components depend on this contract, not on fetch() or JSON imports */
export interface IServiceRepository {
  getCategories(): Promise<IServiceCategory[]>;
  getAllServices(): Promise<IServiceItem[]>;
  getNotices(): Promise<IServiceNotice[]>;
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
