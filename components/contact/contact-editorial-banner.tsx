// components/contact/contact-editorial-banner.tsx
import Image from "next/image";

export function ContactEditorialBanner() {
  return (
    <section
      aria-label="Frase da marca"
      className="grid min-h-[340px] grid-cols-1 overflow-hidden sm:grid-cols-2"
    >
      {/* Left: quote block (wine bg) */}
      <div className="flex flex-col justify-center bg-wine-800 px-10 py-16 sm:px-14">
        <svg
          viewBox="0 0 32 24"
          className="mb-6 h-8 w-8 text-wine-400"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M0 24V14.4C0 6.144 4.48 1.536 13.44 0l1.92 3.072C11.52 4.032 9.6 6.144 9.6 9.12H14.4V24H0zm17.6 0V14.4C17.6 6.144 22.08 1.536 31.04 0L32.96 3.072C29.12 4.032 27.2 6.144 27.2 9.12H32V24H17.6z" />
        </svg>
        <blockquote className="font-serif text-2xl font-bold italic leading-snug text-white sm:text-3xl">
          A beleza é o ritual de encontrar-se consigo mesma.
        </blockquote>
        <cite className="mt-6 not-italic text-xs font-semibold uppercase tracking-[0.2em] text-wine-300">
          Curadoria Tininha
        </cite>
      </div>

      {/* Right: editorial image */}
      <div className="relative min-h-[220px] bg-gray-900">
        <Image
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=900&q=80"
          alt="Penteado elegante — Salão Tininha"
          fill
          quality={80}
          sizes="(max-width: 640px) 100vw, 50vw"
          className="object-cover object-top"
        />
        {/* Subtle overlay */}
        <div className="absolute inset-0 bg-wine-900/20" />
      </div>
    </section>
  );
}
