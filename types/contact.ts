// types/contact.ts

export interface ScheduleRow {
  day: string;
  hours: string;
  closed?: boolean;
}

export interface ContactInfo {
  address: string;
  addressComplement: string;
  mapsUrl: string;
  phone: string;
  whatsapp: string;
  whatsappUrl: string;
  instagram: string;
  instagramUrl: string;
  schedule: ScheduleRow[];
}
