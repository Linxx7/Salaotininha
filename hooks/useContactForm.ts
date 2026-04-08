// hooks/useContactForm.ts
"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  contactSchema,
  type ContactFormValues,
} from "@/lib/validation/contactSchema";
import { submitContactForm } from "@/lib/contact/contactService";
import type { ContactResponse } from "@/lib/contact/contactTypes";

export function useContactForm() {
  const [result, setResult] = useState<ContactResponse | null>(null);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  async function onSubmit(data: ContactFormValues) {
    setResult(null);
    const response = await submitContactForm(data);
    setResult(response);

    if (response.success) {
      form.reset();
    }
  }

  function reset() {
    form.reset();
    setResult(null);
  }

  return {
    form,
    result,
    isSubmitting: form.formState.isSubmitting,
    onSubmit: form.handleSubmit(onSubmit),
    reset,
  };
}
