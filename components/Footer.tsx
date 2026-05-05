// components/Footer.tsx
import Link from "next/link";
import Image from "next/image";

const serviceLinks = [
  { href: "/servicos", label: "Corte & Escova" },
  { href: "/servicos", label: "Coloração" },
  { href: "/servicos", label: "Máscaras e Hidratação" },
];

const quickLinks = [
  { href: "/agendamento", label: "Agendamento" },
  { href: "/sobre", label: "Sobre nós" },
  { href: "/contato", label: "Contato" },
];

const INSTAGRAM_URL = "https://www.instagram.com/salaotininha/";
const FACEBOOK_URL = "https://www.facebook.com/salaotininha/?locale=pt_BR";
const GOOGLE_REVIEW_URL =
  "https://www.google.com/search?sca_esv=8a2b3961d0fe4bf2&sxsrf=ANbL-n41Mfi1LhUrNVJ5sf3PLv83-ioXbQ:1774906993957&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOWkOuHpnP31X-OBe8impvS7GUfbqo8Nr6A4To71wuPMRGncvN8oSunLe1Z9gvMKcypBREfQe_qcRKeBlOOZZHTyLgInYG28TE8oLYM6CdXs97XRjUA%3D%3D&q=Sal%C3%A3o+Tininha+Coment%C3%A1rios&sa=X";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.413c0-3.026 1.791-4.697 4.533-4.697 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.93-1.956 1.874v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
    </svg>
  );
}

function GoogleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor">
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
    </svg>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-wine-900 text-wine-100">
      {/* Main grid */}
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="inline-flex items-center gap-2.5 transition-opacity hover:opacity-80"
            >
              <Image
                src="/images/logo.jpg"
                alt="Salão Tininha"
                width={34}
                height={34}
                className="rounded-full object-cover ring-2 ring-wine-700"
              />
              <span className="font-serif text-lg font-semibold text-white">
                Salão Tininha
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-wine-300">
              Beleza e bem-estar com cuidado e muito carinho. Transformamos
              visitas em experiências — no Sudoeste, Brasília.
            </p>

            {/* Social links */}
            <div className="mt-6 flex items-center gap-3">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Siga o Salão Tininha no Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-wine-800 text-wine-300 transition-colors hover:bg-wine-700 hover:text-white"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Siga o Salão Tininha no Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-wine-800 text-wine-300 transition-colors hover:bg-wine-700 hover:text-white"
              >
                <FacebookIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Services column */}
          <div>
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-wine-400">
              Serviços
            </h3>
            <ul className="flex flex-col gap-3">
              {serviceLinks.map(({ href, label }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm text-wine-300 transition-colors hover:text-white"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links column */}
          <div>
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-wine-400">
              Links Úteis
            </h3>
            <ul className="flex flex-col gap-3">
              {quickLinks.map(({ href, label }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm text-wine-300 transition-colors hover:text-white"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA column */}
          <div>
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-wine-400">
              Agende já
            </h3>
            <p className="text-sm leading-relaxed text-wine-300">
              Reserve seu horário online de forma rápida e prática.
            </p>
            <Link
              href="/agendamento"
              className="mt-5 inline-block rounded-full border border-wine-600 px-5 py-2.5 text-xs font-semibold uppercase tracking-widest text-wine-200 transition-all hover:border-wine-400 hover:bg-wine-800 hover:text-white"
            >
              Agendar horário
            </Link>

            <div className="mt-6 border-t border-wine-800 pt-6">
              <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-wine-400">
                Avalie-nos
              </h3>
              <a
                href={GOOGLE_REVIEW_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Deixar avaliação no Google"
                className="inline-flex items-center gap-2 text-sm text-wine-300 transition-colors hover:text-white"
              >
                <GoogleIcon className="h-4 w-4" />
                Avaliar no Google
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-wine-800">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-5 sm:flex-row sm:px-6 lg:px-8">
          <p className="text-xs text-wine-500">
            &copy; {year} Salão Tininha. Todos os direitos reservados.
          </p>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram do Salão Tininha"
            className="inline-flex items-center gap-1.5 text-xs text-wine-500 transition-colors hover:text-wine-300"
          >
            <InstagramIcon className="h-3.5 w-3.5" />
            @salaotininha
          </a>
        </div>
      </div>
    </footer>
  );
}
