// app/not-found.tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SectionContainer } from "@/components/ui/section-container";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center bg-[#faf8f6] px-4 py-24 dark:bg-wine-900">
      <SectionContainer narrow>
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-wine-500">
            Erro 404
          </p>
          <h1 className="mt-4 font-serif text-5xl font-bold text-gray-900 dark:text-white sm:text-6xl">
            Página não encontrada
          </h1>
          <p className="mt-5 text-base leading-relaxed text-gray-500 dark:text-gray-300">
            A página que você está procurando não existe ou foi movida.
            Mas estamos aqui para ajudar!
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-wine-700 px-8 text-sm font-semibold uppercase tracking-widest text-white hover:bg-wine-800"
            >
              <Link href="/">Voltar ao início</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full border-wine-200 px-8 text-sm font-semibold uppercase tracking-widest text-wine-700 hover:bg-wine-50 hover:border-wine-300 dark:border-wine-600 dark:text-wine-300 dark:hover:bg-wine-800"
            >
              <Link href="/agendamento">Agendar agora</Link>
            </Button>
          </div>

          {/* Suggested links */}
          <div className="mt-12 border-t border-wine-100 pt-8 dark:border-wine-700">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-gray-400">
              Talvez você estivesse procurando
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link href="/servicos" className="text-sm text-wine-600 hover:text-wine-800 dark:text-wine-300 dark:hover:text-white">
                Serviços
              </Link>
              <Link href="/sobre" className="text-sm text-wine-600 hover:text-wine-800 dark:text-wine-300 dark:hover:text-white">
                Sobre nós
              </Link>
              <Link href="/blog" className="text-sm text-wine-600 hover:text-wine-800 dark:text-wine-300 dark:hover:text-white">
                Blog
              </Link>
              <Link href="/contato" className="text-sm text-wine-600 hover:text-wine-800 dark:text-wine-300 dark:hover:text-white">
                Contato
              </Link>
            </div>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
