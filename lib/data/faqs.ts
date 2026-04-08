// lib/data/faqs.ts
import type { FAQItem } from "@/lib/domain/types";

const faqs: FAQItem[] = [
  {
    id: "faq-1",
    question: "Como faço para agendar um horário?",
    answer: "Você pode agendar pelo nosso site na página de agendamento, pelo WhatsApp (61) 98353-5670 ou ligando diretamente para o salão.",
    category: "agendamento",
  },
  {
    id: "faq-2",
    question: "Qual a política de cancelamento?",
    answer: "Pedimos que cancelamentos sejam feitos com pelo menos 24 horas de antecedência. Cancelamentos em cima da hora podem estar sujeitos a taxa.",
    category: "agendamento",
  },
  {
    id: "faq-3",
    question: "Quais formas de pagamento são aceitas?",
    answer: "Aceitamos dinheiro, cartões de débito e crédito (todas as bandeiras), e Pix.",
    category: "pagamento",
  },
  {
    id: "faq-4",
    question: "Tem estacionamento no local?",
    answer: "Sim, há estacionamento disponível nas proximidades do bloco. A região do Sudoeste também conta com vagas na rua.",
    category: "localização",
  },
  {
    id: "faq-5",
    question: "Os preços podem variar?",
    answer: "Sim, dependendo do comprimento e tipo dos cabelos, os valores podem sofrer ajustes. Consulte-nos para um orçamento personalizado.",
    category: "preços",
  },
  {
    id: "faq-6",
    question: "Posso levar crianças ao salão?",
    answer: "Sim! Crianças são bem-vindas. Recomendamos agendar horário para garantir atendimento tranquilo.",
    category: "geral",
  },
];

export async function getFAQs(): Promise<FAQItem[]> {
  return faqs;
}
