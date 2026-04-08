// components/services/services-info-notice.tsx
// Single Responsibility: renders the progressiva retoque information block

export function ServicesInfoNotice() {
  return (
    <aside
      role="note"
      aria-label="Informação sobre retoque de progressiva"
      className="rounded-xl border border-wine-200/60 bg-wine-50/80 px-5 py-4"
    >
      <div className="flex items-start gap-3">
        {/* Accent dot */}
        <div
          className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-wine-500"
          aria-hidden="true"
        />
        <p className="text-xs leading-relaxed text-wine-700">
          O valor do retoque de progressiva até 10 dias custa{" "}
          <strong className="font-semibold">R$80</strong> e após os 10 dias do
          procedimento será cobrado o valor integral.
        </p>
      </div>
    </aside>
  );
}
