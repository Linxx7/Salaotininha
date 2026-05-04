// lib/contact/emailService.ts
import { Resend } from "resend";
import { env } from "@/lib/env";
import type { ContactFormData } from "./contactTypes";

/** Escapes HTML special characters to prevent XSS in email HTML */
function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function sendContactEmail(data: ContactFormData): Promise<void> {
  const { name, email, subject, message } = data;

  if (!env.RESEND_API_KEY) {
    throw new Error("RESEND_API_KEY não configurado");
  }

  if (!env.CONTACT_EMAIL) {
    throw new Error("CONTACT_EMAIL não configurado");
  }

  const resend = new Resend(env.RESEND_API_KEY);

  // Use verified domain address when configured, otherwise fall back to Resend test address.
  // Note: onboarding@resend.dev only sends to the Resend account owner's email.
  // For production, set RESEND_FROM_EMAIL to an address on a domain verified in Resend.
  const from = env.RESEND_FROM_EMAIL ?? "Salão Tininha <onboarding@resend.dev>";

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeSubject = escapeHtml(subject);
  const safeMessage = escapeHtml(message);

  const { error } = await resend.emails.send({
    from,
    to: env.CONTACT_EMAIL,
    replyTo: email,
    subject: `[Contato Site] ${safeSubject}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #5a2d3a; border-bottom: 2px solid #5a2d3a; padding-bottom: 8px;">
          Nova mensagem do site
        </h2>
        <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
          <tr>
            <td style="padding: 8px 12px; font-weight: bold; color: #333;">Nome</td>
            <td style="padding: 8px 12px;">${safeName}</td>
          </tr>
          <tr style="background: #f9f5f6;">
            <td style="padding: 8px 12px; font-weight: bold; color: #333;">E-mail</td>
            <td style="padding: 8px 12px;">
              <a href="mailto:${safeEmail}" style="color: #5a2d3a;">${safeEmail}</a>
            </td>
          </tr>
          <tr>
            <td style="padding: 8px 12px; font-weight: bold; color: #333;">Assunto</td>
            <td style="padding: 8px 12px;">${safeSubject}</td>
          </tr>
        </table>
        <div style="margin-top: 20px; padding: 16px; background: #f9f5f6; border-radius: 8px;">
          <p style="font-weight: bold; color: #333; margin: 0 0 8px;">Mensagem:</p>
          <p style="color: #555; white-space: pre-wrap; margin: 0;">${safeMessage}</p>
        </div>
        <p style="margin-top: 24px; font-size: 12px; color: #999;">
          Enviado pelo formulário de contato do site Salão Tininha
        </p>
      </div>
    `,
  });

  if (error) {
    throw new Error(error.message);
  }
}
