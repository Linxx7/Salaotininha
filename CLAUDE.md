# Salão Tininha

## Project Overview
Site de salão de beleza premium em Brasília (Sudoeste), com agendamento online, portfólio, blog e formulário de contato. Desenvolvido em Next.js 14 App Router com TypeScript.

## Tech Stack
- **Framework**: Next.js 14.2.35 — App Router, TypeScript strict mode
- **Styling**: Tailwind CSS v3 + custom CSS variables (tema com variante `wine`)
- **UI**: shadcn/ui (button, card, input, label, textarea) + Radix UI primitives
- **Icons**: lucide-react
- **Fonts**: Inter (sans) + Playfair Display (serif) via `next/font/google`
- **CMS**: Sanity.io (opcional — fallback para dados estáticos em `/lib/data/`)
- **Email**: Resend (`resend` SDK) — formulário de contato
- **Booking**: Cal.com embed (`@calcom/embed-react`)
- **Forms**: react-hook-form + zod + @hookform/resolvers
- **Analytics**: Google Analytics via componente `GoogleAnalytics`
- **Theme**: hook customizado `useTheme` (não usa `next-themes` apesar de instalado)
- **Deployment**: Vercel (inferido pela estrutura)

## Project Structure
```
/app                    — Rotas do App Router
  /api/contact          — POST handler do formulário de contato (Resend)
  /api/booking          — Handler de agendamento
  /agendamento          — Página de agendamento (Cal.com embed)
  /sobre                — Página sobre o salão
  /servicos             — Cardápio de serviços
  /contato              — Formulário de contato
  /blog                 — Blog com posts
  /blog/[slug]          — Post individual
  sitemap.ts            — Sitemap automático
  robots.ts             — robots.txt

/components             — Componentes organizados por feature
  /ui                   — Componentes base (shadcn/ui)
  /hero                 — Seção hero da home
  /booking              — Componentes de agendamento + Cal embed
  /contact              — Seções da página de contato
  /about                — Seções da página sobre
  /services             — Seções da página de serviços
  /portfolio            — Galeria de portfólio
  /seo                  — JsonLd para schema markup
  Navbar.tsx            — Navegação principal
  Footer.tsx            — Rodapé
  ThemeToggle.tsx       — Botão dark/light mode
  WhatsAppButton        — Botão flutuante do WhatsApp
  GoogleAnalytics.tsx   — GA4 script

/lib                    — Lógica e dados
  /data                 — Dados estáticos (professionals, faqs, services, posts)
  /contact              — emailService.ts + types (usa Resend)
  /booking              — bookingService.ts + types
  /portfolio            — portfolioRepository, portfolioService, types
  /seo                  — metadata helpers + JSON-LD schemas
  /validation           — contactSchema.ts, bookingSchema.ts, sanitize.ts
  /image                — image-service com provider local
  /domain               — types.ts, sanity-types.ts
  /analytics            — analytics.ts
  env.ts                — Variáveis de ambiente validadas com zod
  sanity.ts             — Cliente Sanity

/config                 — Configuração do site
  config.ts             — WhatsApp number + breakpoints
  contact-data.ts       — Dados de contato do salão
  hero.config.ts        — Configuração da seção hero
```

## Development Commands
```bash
npm run dev      # Servidor de desenvolvimento na porta 3000
npm run build    # Build de produção (SEMPRE rodar antes de reportar conclusão)
npm run lint     # ESLint
npx tsc --noEmit # Verificação de tipos sem compilar
```

## Environment Variables
Configuradas em `.env.local` — todas validadas em `lib/env.ts`:

| Variável | Obrigatória | Descrição |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Não (default: salaotininha.com.br) | URL pública do site |
| `NEXT_PUBLIC_GA_ID` | Não | Google Analytics ID (G-XXXXXXXX) |
| `NEXT_PUBLIC_CAL_USERNAME` | Não | Username do Cal.com para o embed de agendamento |
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | Não | Project ID do Sanity (sem ele usa dados estáticos) |
| `NEXT_PUBLIC_SANITY_DATASET` | Não (default: production) | Dataset do Sanity |
| `RESEND_API_KEY` | Sim (para email funcionar) | API Key do Resend — resend.com/api-keys |
| `CONTACT_EMAIL` | Sim (para email funcionar) | Email que recebe os contatos do formulário |

## Key Conventions
- **Server vs Client**: componentes com hooks, eventos ou APIs do browser precisam de `'use client'` — sempre verificar antes de adicionar useState/useEffect
- **Dados com Sanity**: funções em `/lib/data/` tentam buscar do Sanity e fazem fallback para dados estáticos — não remover o fallback
- **Validação de env**: adicionar novas variáveis em `lib/env.ts` com zod para validação na inicialização
- **Path alias**: usar `@/` para imports (mapeia para a raiz do projeto)
- **Componentes UI**: usar os componentes em `/components/ui/` — baseados em shadcn/ui, não criar do zero
- **Formulários**: usar react-hook-form + zod schema — ver `contactSchema.ts` como referência

## Known Gotchas
- **Dark mode**: usa hook customizado `useTheme` (em `@/hooks/useTheme`) com `suppressHydrationWarning` no `<html>` e `<body>` — não substituir por script injection
- **ThemeToggle**: renderiza um placeholder `<div>` antes do mount para evitar hydration mismatch — manter esse padrão em qualquer componente que dependa de `window`/`localStorage`
- **Imagens remotas**: apenas `images.unsplash.com` está liberado no `next.config.mjs` — adicionar novos domínios em `remotePatterns` se necessário
- **Cal.com embed**: precisa do `NEXT_PUBLIC_CAL_USERNAME` definido — sem ele o componente `cal-embed.tsx` não renderiza
- **Sanity opcional**: sem `NEXT_PUBLIC_SANITY_PROJECT_ID`, o site usa dados estáticos de `/lib/data/` — isso é intencional

## Workflow Rules
- Sempre rodar `npm run build` após mudanças para verificar erros antes de reportar conclusão
- Para mudanças em múltiplos arquivos, usar `/phase-features` com fases de máx 3 changes
- Antes de implementar nova integração de terceiros, rodar `/check-integration [serviço]`
- Ao adicionar nova variável de ambiente, registrá-la em `lib/env.ts` com validação zod
