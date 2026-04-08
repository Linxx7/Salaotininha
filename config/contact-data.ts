// config/contact-data.ts
import type { ContactInfo } from "@/types/contact";

export const CONTACT_INFO: ContactInfo = {
  address: "CLSW 103 Bloco C — Sala 105",
  addressComplement: "St. Sudoeste, Brasília — DF, 70670-523",
  mapsUrl:
    "https://www.google.com/maps?cid=259397761841953463&hl=pt-BR",
  phone: "(61) 98353-5670",
  whatsapp: "(61) 98353-5670",
  whatsappUrl: "https://wa.me/5561983535670",
  instagram: "@salaotininha",
  instagramUrl: "https://www.instagram.com/salaotininha/",
  schedule: [
    { day: "Segunda a Sexta", hours: "09h às 17h" },
    { day: "Sábado", hours: "09h às 15h" },
    { day: "Domingo", hours: "Fechado", closed: true },
  ],
};

export const MAPS_EMBED_SRC =
  "https://maps.google.com/maps?cid=259397761841953463&output=embed&hl=pt-BR";
