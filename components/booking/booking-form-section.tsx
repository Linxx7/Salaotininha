// components/booking/booking-form-section.tsx
"use client";

import { SectionContainer } from "@/components/ui/section-container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ArrowRight, CheckCircle, AlertCircle, MessageCircle } from "lucide-react";
import { useBookingForm } from "@/hooks/useBookingForm";
import type { IServiceCategory } from "@/lib/domain/types";

interface BookingFormSectionProps {
  serviceCategories: IServiceCategory[];
}

export function BookingFormSection({ serviceCategories }: BookingFormSectionProps) {
  const { form, isSubmitting, result, onSubmit, reset } = useBookingForm();
  const { register, formState: { errors } } = form;

  // Minimum date: tomorrow
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split("T")[0];

  if (result?.success) {
    return (
      <section className="bg-white dark:bg-zinc-950 py-16 sm:py-24">
        <SectionContainer narrow>
          <div className="mx-auto max-w-md text-center">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
              <CheckCircle className="h-8 w-8 text-green-600 dark:text-green-400" />
            </div>
            <h2 className="font-serif text-3xl font-bold text-gray-900 dark:text-gray-100">
              Agendamento enviado!
            </h2>
            <p className="mt-4 text-base leading-relaxed text-gray-500 dark:text-gray-400">
              {result.message}
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              {result.whatsappUrl && (
                <a
                  href={result.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-green-600 px-8 py-3 text-sm font-semibold uppercase tracking-widest text-white shadow-md transition-all hover:bg-green-700 hover:shadow-lg"
                >
                  <MessageCircle className="h-4 w-4" />
                  Confirmar pelo WhatsApp
                </a>
              )}
              <Button
                onClick={reset}
                variant="outline"
                className="rounded-full border-wine-300 dark:border-wine-700 px-8 text-sm font-semibold uppercase tracking-widest text-wine-700 dark:text-wine-300 hover:bg-wine-50 dark:hover:bg-wine-950"
              >
                Fazer novo agendamento
              </Button>
            </div>
          </div>
        </SectionContainer>
      </section>
    );
  }

  const inputClasses =
    "h-12 rounded-sm border-0 bg-[#f8f5f6] dark:bg-zinc-800 px-4 text-foreground placeholder:text-gray-400 dark:placeholder:text-zinc-500 focus-visible:ring-1 focus-visible:ring-wine-300 dark:focus-visible:ring-wine-500 focus-visible:ring-offset-0";
  const labelClasses =
    "text-[10px] font-semibold uppercase tracking-[0.15em] text-gray-900 dark:text-gray-100";
  const errorClasses = "mt-1 text-xs text-red-500 dark:text-red-400";

  return (
    <section className="bg-white dark:bg-zinc-950 py-16 sm:py-24" aria-labelledby="booking-form-heading">
      <SectionContainer narrow>
        <h2 id="booking-form-heading" className="sr-only">
          Formulário de agendamento
        </h2>

        {result && !result.success && (
          <div className="mb-8 flex items-start gap-3 rounded-lg border border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-950/30 p-4">
            <AlertCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-red-500 dark:text-red-400" />
            <p className="text-sm text-red-700 dark:text-red-300">{result.message}</p>
          </div>
        )}

        <form
          onSubmit={onSubmit}
          className="flex flex-col gap-6"
          aria-label="Formulário de agendamento"
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

          {/* Row 1: name + phone */}
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="flex flex-col gap-2">
              <Label htmlFor="booking-name" className={labelClasses}>
                Nome completo *
              </Label>
              <Input
                id="booking-name"
                type="text"
                {...register("name")}
                placeholder="Seu nome completo"
                autoComplete="name"
                className={inputClasses}
              />
              {errors.name && (
                <p className={errorClasses}>{errors.name.message}</p>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="booking-phone" className={labelClasses}>
                Telefone / WhatsApp *
              </Label>
              <Input
                id="booking-phone"
                type="tel"
                {...register("phone")}
                placeholder="(61) 99999-0000"
                autoComplete="tel"
                className={inputClasses}
              />
              {errors.phone && (
                <p className={errorClasses}>{errors.phone.message}</p>
              )}
            </div>
          </div>

          {/* Row 2: email + service */}
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="flex flex-col gap-2">
              <Label htmlFor="booking-email" className={labelClasses}>
                E-mail
              </Label>
              <Input
                id="booking-email"
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
            <div className="flex flex-col gap-2">
              <Label htmlFor="booking-service" className={labelClasses}>
                Serviço desejado *
              </Label>
              <select
                id="booking-service"
                {...register("serviceId")}
                className={`${inputClasses} appearance-none text-foreground`}
              >
                <option value="">Selecione um serviço</option>
                {serviceCategories.map((cat) => (
                  <optgroup key={cat.id} label={cat.name}>
                    {cat.services.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.title}{s.price_from !== null ? ` — A partir de R$${(s.price_from / 100).toFixed(0)}` : ""}
                      </option>
                    ))}
                  </optgroup>
                ))}
              </select>
              {errors.serviceId && (
                <p className={errorClasses}>{errors.serviceId.message}</p>
              )}
            </div>
          </div>

          {/* Row 3: date + time */}
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="flex flex-col gap-2">
              <Label htmlFor="booking-date" className={labelClasses}>
                Data desejada *
              </Label>
              <Input
                id="booking-date"
                type="date"
                {...register("date")}
                min={minDate}
                className={inputClasses}
              />
              {errors.date && (
                <p className={errorClasses}>{errors.date.message}</p>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="booking-time" className={labelClasses}>
                Horário desejado *
              </Label>
              <Input
                id="booking-time"
                type="time"
                {...register("time")}
                min="09:00"
                max="17:00"
                className={inputClasses}
              />
              {errors.time && (
                <p className={errorClasses}>{errors.time.message}</p>
              )}
            </div>
          </div>

          {/* Row 4: notes */}
          <div className="flex flex-col gap-2">
            <Label htmlFor="booking-notes" className={labelClasses}>
              Observações
            </Label>
            <Textarea
              id="booking-notes"
              {...register("notes")}
              placeholder="Alguma informação adicional? (opcional)"
              rows={3}
              className="resize-none rounded-sm border-0 bg-[#f8f5f6] dark:bg-zinc-800 p-4 text-foreground placeholder:text-gray-400 dark:placeholder:text-zinc-500 focus-visible:ring-1 focus-visible:ring-wine-300 dark:focus-visible:ring-wine-500 focus-visible:ring-offset-0"
            />
            {errors.notes && (
              <p className={errorClasses}>{errors.notes.message}</p>
            )}
          </div>

          {/* CTA */}
          <div className="mt-4">
            <Button
              type="submit"
              size="lg"
              disabled={isSubmitting}
              className="h-12 w-full rounded-full bg-wine-700 px-10 text-sm font-bold uppercase tracking-[0.2em] text-white shadow-md transition-all hover:bg-wine-800 hover:shadow-lg disabled:opacity-60 sm:w-auto"
            >
              {isSubmitting ? "Enviando..." : "Confirmar agendamento"}
              {!isSubmitting && (
                <ArrowRight className="ml-3 h-4 w-4" aria-hidden="true" />
              )}
            </Button>
          </div>

          <p className="text-xs text-gray-400 dark:text-zinc-500">
            * Campos obrigatórios. Entraremos em contato pelo WhatsApp para confirmar.
          </p>
        </form>
      </SectionContainer>
    </section>
  );
}
