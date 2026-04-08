// lib/data/posts.ts
import type { BlogPost } from "@/lib/domain/types";

const posts: BlogPost[] = [
  {
    slug: "cuidados-cabelo-verao",
    title: "5 Cuidados Essenciais para o Cabelo no Verão",
    summary: "Descubra como proteger seus fios do sol, cloro e sal para manter o cabelo saudável durante todo o verão.",
    content: `O verão é uma estação maravilhosa, mas pode ser desafiadora para os cabelos. O sol forte, a água do mar e o cloro das piscinas podem deixar os fios ressecados e sem brilho.

**1. Use protetor solar capilar**
Assim como a pele, os cabelos precisam de proteção contra os raios UV. Aplique produtos com filtro solar antes da exposição.

**2. Hidrate com frequência**
Intensifique a hidratação durante o verão. Máscaras capilares semanais fazem toda a diferença.

**3. Evite água quente no banho**
Prefira água morna ou fria para lavar os cabelos. A água quente resseca ainda mais os fios.

**4. Lave o cabelo após piscina ou mar**
O cloro e o sal podem danificar a fibra capilar. Enxágue os fios o mais rápido possível.

**5. Invista em leave-in com proteção térmica**
Além de proteger do calor, o leave-in ajuda a manter a hidratação ao longo do dia.`,
    date: "2026-01-15",
    tags: ["cuidados", "verão", "hidratação"],
  },
  {
    slug: "tendencias-coloracao-2026",
    title: "Tendências de Coloração para 2026",
    summary: "Das mechas iluminadas ao ruivo acobreado: conheça as cores que estão dominando os salões neste ano.",
    content: `As tendências de coloração para 2026 trazem uma mistura de naturalidade com ousadia. Confira as principais apostas:

**Balayage Natural**
Continua forte, mas agora com tons mais quentes e acobreados, criando um efeito sol de verão.

**Ruivo Acobreado**
O tom copper está em alta. Versátil, funciona em diferentes tons de pele e pode ser sutil ou intenso.

**Morena Iluminada**
Para quem quer manter o cabelo escuro com mais vida, as mechas sutis em tons de caramelo e mel são a escolha perfeita.

**Loiro Champagne**
Um loiro sofisticado, com nuances rosadas que trazem elegância e modernidade.

Agende uma avaliação conosco para descobrir qual tendência combina mais com você!`,
    date: "2026-02-20",
    tags: ["coloração", "tendências", "balayage"],
  },
  {
    slug: "progressiva-mitos-verdades",
    title: "Progressiva: Mitos e Verdades",
    summary: "Tudo que você precisa saber sobre o alisamento progressivo — sem medo e com informação.",
    content: `A progressiva é um dos tratamentos mais procurados nos salões brasileiros. Mas ainda existem muitas dúvidas e mitos em torno dele.

**Mito: Progressiva estraga o cabelo**
Verdade parcial. Quando feita com produtos de qualidade e por profissionais capacitadas, a progressiva não danifica os fios. No Salão Tininha, usamos apenas produtos premium.

**Verdade: É preciso manutenção**
O retoque geralmente é necessário a cada 3-4 meses, dependendo do crescimento do cabelo.

**Mito: Não pode molhar o cabelo por dias**
Com as fórmulas modernas, o tempo de espera é muito menor. Consulte sua profissional sobre o produto utilizado.

**Verdade: Cada cabelo reage de forma diferente**
Por isso a avaliação presencial é fundamental. Venha conversar com nossas especialistas!`,
    date: "2026-03-10",
    tags: ["progressiva", "tratamento", "cuidados"],
  },
];

export async function getPosts(): Promise<BlogPost[]> {
  return posts;
}

export async function getPostBySlug(slug: string): Promise<BlogPost | undefined> {
  return posts.find((p) => p.slug === slug);
}
