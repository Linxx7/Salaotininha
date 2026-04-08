// components/FAQSection.tsx
"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";
import { SectionContainer } from "@/components/ui/section-container";
import { cn } from "@/lib/utils";
import type { FAQItem } from "@/lib/domain/types";

interface FAQSectionProps {
  faqs: FAQItem[];
}

function FAQAccordionItem({ faq }: { faq: FAQItem }) {
  const [open, setOpen] = useState(false);
  const answerId = `faq-answer-${faq.id}`;

  return (
    <div className="border-b border-wine-100 dark:border-wine-700 last:border-0">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-controls={answerId}
        className="flex w-full items-center justify-between gap-4 py-5 text-left transition-colors hover:text-wine-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wine-500 focus-visible:ring-offset-2 rounded-sm"
      >
        <span className="text-base font-medium text-gray-900 dark:text-white">{faq.question}</span>
        <ChevronDown
          className={cn(
            "h-5 w-5 flex-shrink-0 text-wine-400 transition-transform duration-200",
            open && "rotate-180"
          )}
          aria-hidden="true"
        />
      </button>
      <div
        id={answerId}
        role="region"
        aria-labelledby={`faq-btn-${faq.id}`}
        className={cn(
          "overflow-hidden transition-all duration-200",
          open ? "max-h-96 pb-5" : "max-h-0"
        )}
      >
        <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-300">{faq.answer}</p>
      </div>
    </div>
  );
}

export function FAQSection({ faqs }: FAQSectionProps) {
  return (
    <section
      aria-labelledby="faq-heading"
      className="bg-white px-4 py-24 sm:py-32 dark:bg-wine-900"
    >
      <SectionContainer narrow>
        <div className="mb-12 text-center">
          <SectionEyebrow className="mb-4">Dúvidas Frequentes</SectionEyebrow>
          <h2
            id="faq-heading"
            className="font-serif text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl"
          >
            Perguntas & Respostas
          </h2>
        </div>

        <div className="mx-auto max-w-2xl">
          {faqs.map((faq) => (
            <FAQAccordionItem key={faq.id} faq={faq} />
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}
