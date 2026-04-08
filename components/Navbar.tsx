// components/Navbar.tsx
"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/servicos", label: "Serviços" },
  { href: "/sobre", label: "Sobre" },
  { href: "/contato", label: "Contato" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMenu = useCallback(() => setMobileOpen(false), []);

  // Close mobile menu on Escape key
  useEffect(() => {
    if (!mobileOpen) return;

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") closeMenu();
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [mobileOpen, closeMenu]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-wine-100/60 bg-white/90 backdrop-blur-lg dark:border-wine-800/60 dark:bg-wine-900/90">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo / Brand */}
        <Link
          href="/"
          className="flex items-center gap-2.5 transition-opacity hover:opacity-80"
        >
          <Image
            src="/images/logo.jpg"
            alt="Salão Tininha"
            width={36}
            height={36}
            className="rounded-full object-cover ring-2 ring-wine-100"
            priority
          />
          <span className="text-base font-semibold tracking-tight text-gray-900 dark:text-white">
            Salão <span className="font-serif text-wine-600 dark:text-wine-300">Tininha</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7" aria-label="Menu principal">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm font-medium text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* CTA + theme toggle + mobile toggle */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button
            asChild
            size="sm"
            className="hidden sm:inline-flex rounded-full bg-wine-700 px-5 text-xs font-semibold uppercase tracking-widest text-white hover:bg-wine-800"
          >
            <Link href="/agendamento">Agendar agora</Link>
          </Button>

          {/* Hamburger button — mobile only */}
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            className="inline-flex md:hidden items-center justify-center rounded-xl p-2 text-gray-500 transition-colors hover:bg-wine-50 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-wine-800 dark:hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wine-500 focus-visible:ring-offset-2"
          >
            {mobileOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile nav drawer */}
      {mobileOpen && (
        <nav
          id="mobile-nav"
          className="md:hidden border-t border-wine-100/60 bg-white px-4 pb-5 pt-3 dark:border-wine-800/60 dark:bg-wine-900"
          aria-label="Menu mobile"
        >
          <ul className="flex flex-col gap-1">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-xl px-4 py-2.5 text-sm font-medium text-gray-600 transition-colors hover:bg-wine-50 hover:text-wine-700 dark:text-gray-300 dark:hover:bg-wine-800 dark:hover:text-white"
                >
                  {label}
                </Link>
              </li>
            ))}
            <li className="mt-3 pt-3 border-t border-wine-100">
              <Button
                asChild
                className="w-full rounded-full bg-wine-700 text-xs font-semibold uppercase tracking-widest text-white hover:bg-wine-800"
              >
                <Link href="/agendamento" onClick={() => setMobileOpen(false)}>
                  Agendar agora
                </Link>
              </Button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
