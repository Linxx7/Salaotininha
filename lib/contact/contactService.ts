// lib/contact/contactService.ts
import type { ContactFormData, ContactResponse } from "./contactTypes";

export async function submitContactForm(data: ContactFormData): Promise<ContactResponse> {
  const res = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    const body = await res.json().catch(() => null);
    return {
      success: false,
      message: body?.message ?? "Ocorreu um erro ao enviar sua mensagem. Tente novamente.",
    };
  }

  return res.json();
}
