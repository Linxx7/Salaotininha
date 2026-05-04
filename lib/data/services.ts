// lib/data/services.ts
// Data access layer — OCP: add categories without changing consumers
// DIP: implements IServiceRepository contract
// Factory: escolhe StaticRepository ou CMSRepository via env var (sem alterar consumidores)

import type {
  IServiceItem,
  IServiceCategory,
  IServiceNotice,
  IServiceRepository,
} from "@/lib/domain/types";

// ── Dados — Tabela de Preços 2025 ─────────────────────────────────────

const categories: IServiceCategory[] = [
  {
    id: "alisamentos",
    name: "Alisamentos & Escovas Progressivas",
    services: [
      {
        id: "aminoacidos",
        title: "Aminoácidos",
        description:
          "Alisamento nutritivo à base de aminoácidos — reduz volume e nutre os fios sem ressecar",
        price_from: 35000,
      },
      {
        id: "definitiva",
        title: "Definitiva",
        description:
          "Alisamento de longa duração com resultado liso permanente nas partes tratadas",
        price_from: 53000,
      },
      {
        id: "inteligente",
        title: "Inteligente",
        description:
          "Escova que se adapta à estrutura do fio — alisa sem eliminar o movimento natural",
        price_from: 28500,
      },
      {
        id: "london",
        title: "London",
        description:
          "Tecnologia inglesa de alinhamento capilar com efeito natural e brilho intenso",
        price_from: 28500,
      },
      {
        id: "mista",
        title: "Mista",
        description:
          "Combina técnicas de alisamento para tratar raiz e comprimento de forma independente",
        price_from: 33000,
      },
      {
        id: "pink",
        title: "Pink (Semidefinitiva)",
        description:
          "Tratamento semidefinitivo que reduz o frizz e mantém leveza nos fios",
        price_from: 38000,
      },
      {
        id: "plastica-dos-fios",
        title: "Plástica dos Fios",
        description:
          "Reconstrução profunda da fibra capilar com efeito de alinhamento e brilho espelhado",
        price_from: 39000,
      },
      {
        id: "selagem",
        title: "Selagem",
        description:
          "Selagem térmica que controla volume e protege contra umidade — ideal para o dia a dia",
        price_from: 28500,
      },
    ],
  },
  {
    id: "corte-finalizacao",
    name: "Corte & Finalização",
    services: [
      {
        id: "corte-escova",
        title: "Corte + Escova",
        description:
          "Corte personalizado com escova modeladora inclusa — visual completo em uma sessão",
        price_from: 16000,
      },
      {
        id: "escova-normal",
        title: "Escova Normal",
        description:
          "Escova clássica com secador e escova modeladora para volume e movimento",
        price_from: 7000,
      },
      {
        id: "lavagem-secagem",
        title: "Lavagem + Secagem Pós-Escova",
        description:
          "Lavagem e secagem para renovar a escova sem refazer — praticidade para o seu dia",
        price_from: 9000,
      },
    ],
  },
  {
    id: "coloracao",
    name: "Coloração & Mechas",
    services: [
      {
        id: "aplicacao-tinta",
        title: "Aplicação de Tinta (produto da cliente)",
        description:
          "Aplicação profissional da coloração trazida pela cliente — sem escova inclusa",
        price_from: 8000,
      },
      {
        id: "coloracao-profissional",
        title: "Coloração Profissional",
        description:
          "Cobertura completa com coloração premium do salão — cor vibrante e duradoura",
        price_from: null,
      },
      {
        id: "mechas",
        title: "Mechas & Luzes",
        description:
          "Técnicas de iluminação para dar profundidade e movimento à cor dos fios",
        price_from: null,
      },
      {
        id: "balayage",
        title: "Balayage",
        description:
          "Coloração à mão livre com transição suave e efeito natural de sol nos cabelos",
        price_from: null,
      },
    ],
  },
  {
    id: "tratamentos",
    name: "Tratamentos & Cuidados",
    services: [
      {
        id: "hidratacao-escova",
        title: "Hidratação + Escova",
        description:
          "Máscara de hidratação profunda seguida de escova modeladora — nutrição e beleza",
        price_from: 15000,
      },
      {
        id: "gloss-express",
        title: "Gloss Express",
        description:
          "Banho de brilho rápido que devolve luminosidade e selamento à fibra capilar",
        price_from: 18000,
        highlight: true,
      },
    ],
  },
];

const notices: IServiceNotice[] = [
  {
    category_id: "alisamentos",
    text: "O retoque de progressiva realizado em até 10 dias após o procedimento tem valor especial de R\u00A080,00. Após esse período, será aplicado o valor integral do serviço.",
  },
];

// ── Repository (DIP) ──────────────────────────────────────

class StaticServiceRepository implements IServiceRepository {
  async getCategories(): Promise<IServiceCategory[]> {
    return categories;
  }

  async getAllServices(): Promise<IServiceItem[]> {
    return categories.flatMap((cat) => cat.services);
  }

  async getNotices(): Promise<IServiceNotice[]> {
    return notices;
  }
}

/**
 * Factory — retorna CMSServiceRepository quando Sanity está configurado,
 * caso contrário usa dados estáticos locais.
 * OCP: novos repositórios entram aqui sem alterar consumidores.
 */
function createServiceRepository(): IServiceRepository {
  const sanityConfigured = Boolean(process.env.NEXT_PUBLIC_SANITY_PROJECT_ID);

  const staticRepo = new StaticServiceRepository();

  if (sanityConfigured) {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const { CMSServiceRepository } = require("./sanity-service-repository");
    return new CMSServiceRepository(staticRepo);
  }

  return staticRepo;
}

export const serviceRepository: IServiceRepository = createServiceRepository();

// ── Convenience exports (keep existing call sites working) ────────────

export async function getServiceCategories(): Promise<IServiceCategory[]> {
  return serviceRepository.getCategories();
}

export async function getAllServices(): Promise<IServiceItem[]> {
  return serviceRepository.getAllServices();
}

export async function getServiceNotices(): Promise<IServiceNotice[]> {
  return serviceRepository.getNotices();
}
