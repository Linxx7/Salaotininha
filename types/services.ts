// types/services.ts
// Centralized, typed service data structures — following Interface Segregation Principle

export interface ServiceItem {
  id: string;
  name: string;
  description: string;
  price: string;
  highlight?: boolean;
}

export interface ServiceCategory {
  id: string;
  title: string;
  items: ServiceItem[];
}

export const serviceCategories: ServiceCategory[] = [
  {
    id: "escovas",
    title: "Escovas",
    items: [
      {
        id: "escova-curta",
        name: "Escova Curta",
        description: "Finalização clássica para fios curtos",
        price: "R$55,00",
      },
      {
        id: "escova-media",
        name: "Escova Média",
        description: "Modelagem ideal para comprimento médio",
        price: "R$65,00",
      },
      {
        id: "escova-longa",
        name: "Escova Longa",
        description: "Tratamento e brilho para cabelos longos",
        price: "R$75,00",
      },
      {
        id: "escova-extra-longa",
        name: "Escova Extra Longa",
        description: "Cuidado especializado para super fios",
        price: "R$85,00",
      },
    ],
  },
  {
    id: "servicos",
    title: "Serviços",
    items: [
      {
        id: "corte-feminino",
        name: "Corte Feminino",
        description: "Visagismo e tendências personalizadas",
        price: "R$120,00",
      },
      {
        id: "progressiva",
        name: "Progressiva",
        description: "Alinhamento e redução de frizz premium",
        price: "A partir R$250",
        highlight: true,
      },
      {
        id: "hidratacao",
        name: "Hidratação",
        description: "Reposição de água e nutrientes essenciais",
        price: "R$90,00",
      },
      {
        id: "manicure-pedicure",
        name: "Manicure & Pedicure",
        description: "Cuidado completo para suas mãos e pés",
        price: "R$60,00",
      },
    ],
  },
];
