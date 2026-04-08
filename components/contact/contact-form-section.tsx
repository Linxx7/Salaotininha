"use client";

// components/contact/contact-form-section.tsx
import { SectionContainer } from "@/components/ui/section-container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ContactInfoCard } from "./contact-info-card";
import { CONTACT_INFO } from "@/config/contact-data";
import { ArrowRight, CheckCircle } from "lucide-react";
import { useContactForm } from "@/hooks/useContactForm";

export function ContactFormSection() {
  const { form, isSubmitting, result, onSubmit, reset } = useContactForm();
  const { register, formState: { errors } } = form;

  const inputClasses =
    "h-12 rounded-sm border-0 bg-[#f8f5f6] px-4 placeholder:text-gray-400 focus-visible:ring-1 focus-visible:ring-wine-300 focus-visible:ring-offset-0";
  const labelClasses =
    "text-[10px] font-semibold uppercase tracking-[0.15em] text-gray-900";
  const errorClasses = "mt-1 text-xs text-red-500";

  return (
    <section className="bg-white py-16 sm:py-24" aria-labelledby="contact-form-heading">
      <SectionContainer>
        <div className="grid gap-12 lg:grid-cols-[1fr_420px] lg:items-start lg:gap-16">

          {/* ── Left: form ── */}
          <div>
            <h2
              id="contact-form-heading"
              className="sr-only"
            >
              Formulário de contato
            </h2>

            {result?.success && (
              <div className="mb-8 flex items-start gap-3 rounded-lg border border-green-200 bg-green-50 p-4">
                <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
                <div>
                  <p className="text-sm font-medium text-green-800">{result.message}</p>
                  <button
                    onClick={reset}
                    className="mt-2 text-xs font-semibold text-green-700 underline hover:text-green-900"
                  >
                    Enviar outra mensagem
                  </button>
                </div>
              </div>
            )}

            {!result?.success && (
              <form
                onSubmit={onSubmit}
                className="flex flex-col gap-6"
                aria-label="Formulário de contato"
              >
                {/* Honeypot — hidden from real users */}
                <input
                  type="text"
                  name="_hp"
                  autoComplete="off"
                  tabIndex={-1}
                  className="absolute h-0 w-0 overflow-hidden opacity-0"
                  aria-hidden="true"
                />

                {/* Row 1: name + email */}
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="contact-name" className={labelClasses}>
                      Nome completo
                    </Label>
                    <Input
                      id="contact-name"
                      type="text"
                      {...register("name")}
                      placeholder="Seu nome"
                      autoComplete="name"
                      className={inputClasses}
                    />
                    {errors.name && (
                      <p className={errorClasses}>{errors.name.message}</p>
                    )}
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="contact-email" className={labelClasses}>
                      E-mail
                    </Label>
                    <Input
                      id="contact-email"
                      type="email"
                      {...register("email")}
                      placeholder="exemplo@email.com"
                      autoComplete="email"
                      className={inputClasses}
                    />
                    {errors.email && (
                      <p className={errorClasses}>{errors.email.message}</p>
                    )}
                  </div>
                </div>

                {/* Row 2: subject */}
                <div className="flex flex-col gap-2">
                  <Label htmlFor="contact-subject" className={labelClasses}>
                    Assunto
                  </Label>
                  <Input
                    id="contact-subject"
                    type="text"
                    {...register("subject")}
                    placeholder="Como podemos ajudar?"
                    className={inputClasses}
                  />
                  {errors.subject && (
                    <p className={errorClasses}>{errors.subject.message}</p>
                  )}
                </div>

                {/* Row 3: message */}
                <div className="flex flex-col gap-2">
                  <Label htmlFor="contact-message" className={labelClasses}>
                    Sua mensagem
                  </Label>
                  <Textarea
                    id="contact-message"
                    {...register("message")}
                    placeholder="Conte-nos seus planos..."
                    rows={5}
                    className="resize-none rounded-sm border-0 bg-[#f8f5f6] p-4 placeholder:text-gray-400 focus-visible:ring-1 focus-visible:ring-wine-300 focus-visible:ring-offset-0"
                  />
                  {errors.message && (
                    <p className={errorClasses}>{errors.message.message}</p>
                  )}
                </div>

                {/* CTA */}
                <div className="mt-4">
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="h-12 rounded-none bg-wine-900 px-10 text-[10px] font-bold uppercase tracking-[0.2em] text-white shadow-none transition-all hover:bg-wine-800 disabled:opacity-60"
                  >
                    {isSubmitting ? "Enviando..." : "Enviar mensagem"}
                    {!isSubmitting && (
                      <ArrowRight className="ml-3 h-4 w-4" aria-hidden="true" />
                    )}
                  </Button>
                </div>
              </form>
            )}
          </div>

          {/* ── Right: info card ── */}
          <ContactInfoCard info={CONTACT_INFO} />
        </div>
      </SectionContainer>
    </section>
  );
}
