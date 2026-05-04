// config/hero.config.ts
// D — Dependency Inversion Principle:
//   HeroSection não importa imagens nem textos diretamente.
//   Ela recebe um IHeroConfig que pode vir deste arquivo estático
//   ou, futuramente, de uma query ao Sanity sem alterar nenhum componente.

import type { IHeroConfig } from "@/lib/hero/interfaces";

export const heroConfig: IHeroConfig = {
  // ── Coluna textual ───────────────────────────────────────────────────────
  content: {
    eyebrow: "Beleza & Estética — Salão Tininha",
    headline: "Sua beleza em",
    headlineAccent: "boas mãos",
    description:
      "Um refúgio de sofisticação onde cada detalhe é cuidado para realçar a sua essência — com técnicas exclusivas e cuidado personalizado.",
    ctaPrimary: { label: "Agendar agora", href: "/agendamento" },
    ctaSecondary: { label: "Ver portfólio", href: "/servicos" },
    stats: [
      { value: "10+", label: "Anos de experiência" },
      { value: "500+", label: "Clientes satisfeitas" },
      { value: "5.0", label: "Avaliação Google" },
    ],
  },

  // ── Coluna de mídia ──────────────────────────────────────────────────────
  // Para trocar a imagem em produção: altere apenas `src` e `alt` abaixo.
  // Para usar uma imagem vinda do Sanity: substitua este objeto por uma query
  // server-side e passe o resultado como prop para HeroSection.
  media: {
    src: "/images/hero-interior.png",
    alt: "Interior acolhedor do Salão Tininha — cadeiras estofadas em creme em frente a espelhos iluminados, bancada organizada com produtos e flores secas ao fundo",
    badge: {
      label: "Profissionais Certificadas",
      subtitle: "Resultado garantido em cada visita",
    },
  },
};
