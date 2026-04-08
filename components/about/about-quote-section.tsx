// components/about/about-quote-section.tsx

export function AboutQuoteSection() {
  return (
    <section
      aria-label="Manifesto da marca"
      className="bg-wine-800 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        {/* Opening mark */}
        <svg
          viewBox="0 0 48 36"
          className="mx-auto mb-8 h-10 w-10 text-wine-500"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M0 36V21.6C0 9.216 6.72 2.304 20.16 0l2.88 4.608C17.28 6.048 14.4 9.216 14.4 13.68H21.6V36H0zm26.4 0V21.6C26.4 9.216 33.12 2.304 46.56 0L49.44 4.608C43.68 6.048 40.8 9.216 40.8 13.68H48V36H26.4z" />
        </svg>

        <blockquote className="font-serif text-3xl font-bold italic leading-snug text-white sm:text-4xl">
          A beleza começa no momento em que você decide ser você mesma.
          Nossa missão é apenas iluminar o caminho.
        </blockquote>

        <cite className="mt-8 block not-italic text-xs font-semibold uppercase tracking-[0.25em] text-wine-300">
          Diretora Tininha
        </cite>
      </div>
    </section>
  );
}
