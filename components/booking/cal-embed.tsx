// components/booking/cal-embed.tsx
// Client Component — Cal.com embed oficial via @calcom/embed-react
// SRP: única responsabilidade é renderizar o widget de agendamento.
"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

interface CalEmbedProps {
  calUsername: string;
}

export function CalEmbed({ calUsername }: CalEmbedProps) {
  useEffect(() => {
    (async () => {
      const cal = await getCalApi({ namespace: "agendamento" });
      cal("ui", {
        styles: { branding: { brandColor: "#C4857A" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <Cal
      namespace="agendamento"
      calLink={calUsername}
      style={{ width: "100%", height: "100%", minHeight: "600px", overflow: "scroll" }}
      config={{ layout: "month_view" }}
    />
  );
}
