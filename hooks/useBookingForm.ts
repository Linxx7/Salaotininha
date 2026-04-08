// hooks/useBookingForm.ts
"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  bookingSchema,
  type BookingFormValues,
} from "@/lib/validation/bookingSchema";
import { submitBooking } from "@/lib/booking/bookingService";
import type { BookingResponse } from "@/lib/booking/bookingTypes";

export function useBookingForm() {
  const [result, setResult] = useState<BookingResponse | null>(null);

  const form = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      serviceId: "",
      date: "",
      time: "",
      notes: "",
    },
  });

  async function onSubmit(data: BookingFormValues) {
    setResult(null);
    const response = await submitBooking(data);
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
