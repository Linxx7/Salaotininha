// app/api/contact/route.ts
import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validation/contactSchema";
import { sanitizeObject } from "@/lib/validation/sanitize";
import type { ContactResponse } from "@/lib/contact/contactTypes";
import { sendContactEmail } from "@/lib/contact/emailService";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Honeypot: if filled, it's a bot
    if (body._hp) {
      return NextResponse.json<ContactResponse>({
        success: true,
        message: "Mensagem enviada com sucesso!",
      });
    }

    // Server-side validation with zod
    const result = contactSchema.safeParse(body);

    if (!result.success) {
      const firstError = result.error.issues[0]?.message
        ?? "Por favor, preencha todos os campos corretamente.";
      return NextResponse.json<ContactResponse>(
        { success: false, message: firstError },
        { status: 400 },
      );
    }

    // Sanitize validated data
    const sanitized = sanitizeObject(result.data);

    await sendContactEmail(sanitized);

    return NextResponse.json<ContactResponse>({
      success: true,
      message: "Mensagem enviada com sucesso! Responderemos em breve.",
    });
  } catch (error) {
    console.error("[Contact] Erro ao enviar email:", error);
    return NextResponse.json<ContactResponse>(
      {
        success: false,
        message: "Erro ao enviar mensagem. Por favor, tente novamente mais tarde.",
      },
      { status: 500 },
    );
  }
}
