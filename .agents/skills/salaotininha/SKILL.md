---
name: salaotininha
description: Skill for planning, designing, and implementing the Salão Tininha beauty salon website (salaotininha.com.br) using Next.js 14, Tailwind CSS, shadcn/ui, Cal.com, and Sanity.io.
---

Contexto rápido
Site institucional/comercial para salão de beleza. Objetivos:

Apresentar serviços e produtos de forma atrativa
Permitir agendamento online (via Cal.com)
Gerar confiança e desejo nas clientes
Funcionar muito bem em mobile (público acessa majoritariamente pelo celular)

Domínio: salaotininha.com.br → Vercel
Fase atual: MVP — sem bot de WhatsApp, sem backend próprio de agendamento.

Stack oficial (não alterar)
CamadaTecnologiaFrameworkNext.js 14, App Router, TypeScriptEstilosTailwind CSS + shadcn/uiTemanext-themes (dark/light mode)AgendamentoCal.com (embed)CMSSanity.io (plano gratuito)BD extraSupabase — somente se Sanity não resolverHospedagemVercel

Estrutura de páginas
RotaPropósitoSeções principais/HomeHero, benefícios, serviços em destaque, depoimentos (opcional), CTA/servicosCatálogo completoLista agrupada por categoria, preço, duração, descrição/produtosProdutos à vendaNome, descrição, preço, imagem/agendamentoAgendamento onlineEmbed Cal.com + texto explicativo/sobreSobre o salãoHistória, equipe, diferenciais/contatoContatoFormulário, link WhatsApp, Google Maps
Seções adicionais permitidas: FAQ, galeria antes/depois, banner de promoções.

Convenções de código

Roteamento: App Router exclusivamente (app/<rota>/page.tsx)
Componentes reutilizáveis: components/PascalCase.tsx
Tipos: types/index.ts — PascalCase (Servico, Produto, Profissional)
Libs/clientes: lib/sanity.ts, lib/supabase.ts
Estilos: Tailwind CSS — sem CSS Modules, styled-components ou inline styles extensos
Componentes UI: usar shadcn/ui existentes antes de criar do zero
Fetch de dados: preferencialmente em Server Components
Secrets: nunca no código cliente — sempre em variáveis de ambiente

Estrutura de diretórios esperada
app/
  layout.tsx
  page.tsx                  ← Home
  servicos/page.tsx
  produtos/page.tsx
  agendamento/page.tsx
  sobre/page.tsx
  contato/page.tsx
components/
  HeroSection.tsx
  ServicesList.tsx
  ProductCard.tsx
  CalEmbed.tsx
  Footer.tsx
  Navbar.tsx
  ThemeProvider.tsx
  ThemeToggle.tsx
  ...
lib/
  sanity.ts
  supabase.ts               ← só se usado
types/
  index.ts

Variáveis de ambiente
env# Cal.com
NEXT_PUBLIC_CAL_USERNAME=           # ex.: salao-tininha

# Sanity
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=         # geralmente "production"
SANITY_API_READ_TOKEN=              # token com permissão de leitura (server-side)

# Supabase (somente se necessário)
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=

⚠️ SANITY_API_READ_TOKEN nunca deve ser exposto no cliente. Usar apenas em Server Components ou Route Handlers.


Integração: Cal.com
Usar o pacote oficial @calcom/embed-react.
O username vem de process.env.NEXT_PUBLIC_CAL_USERNAME.
tsx// components/CalEmbed.tsx
"use client";
import Cal from "@calcom/embed-react";

const CAL_USERNAME = process.env.NEXT_PUBLIC_CAL_USERNAME!;

export function CalEmbed() {
  return (
    <Cal
      calLink={CAL_USERNAME}
      style={{ width: "100%", height: "100%", overflow: "scroll" }}
      config={{ layout: "month_view" }}
    />
  );
}
tsx// app/agendamento/page.tsx
import { Suspense } from "react";
import { CalEmbed } from "@/components/CalEmbed";

export default function AgendamentoPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Agende seu horário</h1>
      <p className="mb-6 text-muted-foreground">
        Escolha o melhor dia e horário para você. A confirmação será enviada por WhatsApp.
      </p>
      <Suspense fallback={<p>Carregando agenda...</p>}>
        <CalEmbed />
      </Suspense>
    </main>
  );
}

Integração: Sanity.io
Client centralizado
ts// lib/sanity.ts
import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: "2024-01-01",
  useCdn: true,
});

const builder = imageUrlBuilder(sanityClient);
export const urlFor = (source: any) => builder.image(source);
Schemas esperados
servico
ts{
  name: string;            // "Coloração completa"
  slug: string;            // "coloracao-completa"
  categoria: string;       // "cabelo" | "unhas" | "sobrancelha" | "estética"
  descricao: string;       // texto curto
  preco?: number;          // ex.: 120.00
  duracaoMinutos?: number; // ex.: 90
  imagem?: SanityImage;
  destaque: boolean;       // aparece na home?
}
produto
ts{
  name: string;
  slug: string;
  descricao: string;
  preco: number;
  imagem?: SanityImage;
}
profissional (opcional)
ts{
  nome: string;
  funcao: string;          // "Cabeleireira", "Manicure"
  foto?: SanityImage;
  bio?: string;
}
Exemplo de query em Server Component
tsx// app/servicos/page.tsx
import { sanityClient } from "@/lib/sanity";
import type { Servico } from "@/types";

async function getServicos(): Promise<Servico[]> {
  return sanityClient.fetch(`*[_type == "servico"] | order(categoria asc)`);
}

export default async function ServicosPage() {
  const servicos = await getServicos();
  // ...renderizar
}

Modo noturno (Dark Mode)
O projeto usa next-themes para gerenciar o tema, integrado ao Tailwind com estratégia class.
O shadcn/ui já é compatível com essa abordagem por padrão.
Instalação
bashnpm install next-themes
Configuração do Tailwind
ts// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class", // ← obrigatório
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Substituir pelos valores reais da cliente
        primaria: {
          DEFAULT: "COR_PRIMARIA",
          dark: "COR_PRIMARIA_DARK",
        },
      },
    },
  },
  plugins: [],
};

export default config;
ThemeProvider no layout raiz
tsx// app/layout.tsx
import { ThemeProvider } from "@/components/ThemeProvider";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
tsx// components/ThemeProvider.tsx
"use client";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ThemeProviderProps } from "next-themes";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
Toggle de tema (botão claro/escuro)
Usar useTheme do next-themes com ícones do lucide-react (já disponível com shadcn/ui).
tsx// components/ThemeToggle.tsx
"use client";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="Alternar tema"
    >
      <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </Button>
  );
}
Incluir o <ThemeToggle /> na Navbar.
Cores nos dois modos
Usar variáveis CSS no globals.css seguindo o padrão do shadcn/ui:
css/* app/globals.css */
@layer base {
  :root {
    --background: 0 0% 98%;          /* COR_FUNDO_LIGHT */
    --foreground: 0 0% 20%;          /* COR_TEXTO_LIGHT */
    --primary: /* COR_PRIMARIA_HSL */;
    --primary-foreground: 0 0% 100%;
    /* ... demais tokens shadcn/ui */
  }

  .dark {
    --background: 0 0% 8%;           /* COR_FUNDO_DARK */
    --foreground: 0 0% 90%;          /* COR_TEXTO_DARK */
    --primary: /* COR_PRIMARIA_DARK_HSL */;
    --primary-foreground: 0 0% 100%;
    /* ... demais tokens shadcn/ui */
  }
}

As cores exatas (em HSL) devem ser definidas junto com a cliente.
Placeholder sugerido para modo escuro: fundo grafite escuro (#141414), texto off-white (#F0EDE8), mantendo o tom rosado/nude da marca.

Regras para uso de dark mode nos componentes

Sempre usar classes Tailwind com prefixo dark: para sobrescritas específicas
ex.: bg-white dark:bg-zinc-900, text-gray-800 dark:text-gray-100
Nunca usar cores absolutas (ex.: text-black) sem o correspondente dark:
Imagens e fotos do salão: verificar contraste do overlay em ambos os modos
O suppressHydrationWarning no <html> é obrigatório para evitar erro de hidratação do Next.js com next-themes


UX e identidade visual
Público-alvo
Mulheres (e parte do público masculino) que buscam serviços de beleza e bem-estar em bairro/região local. Acesso majoritariamente pelo celular.
Diretrizes

Mobile-first — testar em viewport 375px antes de qualquer outra
Navegação simples, menu com ≤ 5 itens
Botões de ação sempre visíveis: "Agendar horário", "Ver serviços"
Contraste AA/AAA para acessibilidade básica — validar nos dois modos (claro e escuro)

Tom de voz

Acolhedor, simpático, profissional, mas simples
Frases curtas, sem jargão técnico de beleza
Terminar seções com CTA quando fizer sentido

Placeholders de identidade (preencher com a cliente)
COR_PRIMARIA=         # ex.: rosa antigo (#C4857A) — HSL: 8 36% 61%
COR_PRIMARIA_DARK=    # variante mais suave para fundo escuro
COR_SECUNDARIA=       # ex.: nude (#E8D5C4)
COR_FUNDO=            # ex.: branco (#FAFAFA)
COR_FUNDO_DARK=       # ex.: grafite escuro (#141414)
COR_TEXTO=            # ex.: grafite (#333333)
COR_TEXTO_DARK=       # ex.: off-white (#F0EDE8)
FONTE_PRINCIPAL=      # ex.: 'Inter', sans-serif
NOME_SALAO=           "Salão Tininha"
ENDERECO=             "[ENDEREÇO COMPLETO]"
TELEFONE_WHATSAPP=    "[NÚMERO COM DDD]"
HORARIO_FUNC=         "[HORÁRIO DE FUNCIONAMENTO]"
Quando faltar informação real, usar esses placeholders entre colchetes para facilitar substituição posterior.

Deploy na Vercel
bash# 1. Instalar Vercel CLI (opcional, pode usar dashboard)
npm i -g vercel

# 2. Build local para validar
npm run build

# 3. Deploy
vercel --prod
Checklist pré-deploy:

 Todas as variáveis de ambiente configuradas na Vercel (não apenas no .env.local)
 Domínio salaotininha.com.br apontando para Vercel (DNS)
 SANITY_API_READ_TOKEN configurado como variável server-side (sem prefixo NEXT_PUBLIC_)
 Cal.com configurado e testado com o username correto
 Dark mode testado nos dois temas antes do deploy
 Build sem erros TypeScript


Setup inicial do projeto
bash# Criar projeto Next.js 14
npx create-next-app@latest salaotininha \
  --typescript --tailwind --eslint --app --src-dir=false \
  --import-alias "@/*"

cd salaotininha

# Instalar shadcn/ui
npx shadcn@latest init

# Adicionar componentes shadcn/ui essenciais
npx shadcn@latest add button card input label

# Instalar dependências do projeto
npm install next-sanity @sanity/image-url @calcom/embed-react next-themes

# Sanity Studio (opcional, para preview local)
npm create sanity@latest -- --project $SANITY_PROJECT_ID --dataset production

Erros comuns e anti-patterns
❌ Não fazer✅ FazerUsar Pages RouterUsar App Router (app/)Hard-code de username Cal.comprocess.env.NEXT_PUBLIC_CAL_USERNAMEExpor SANITY_API_READ_TOKEN no clienteUsar apenas em Server ComponentsCriar backend próprio para agendamentoUsar Cal.com embedAdicionar Material UI / Chakra UIUsar shadcn/ui + TailwindRemover código sem justificarAlterações incrementais e documentadasUsar Supabase para conteúdo do siteUsar Sanity para issoIncluir automações de WhatsAppFora do escopo desta faseUsar darkMode: "media" no TailwindUsar darkMode: "class" para controle manualEsquecer suppressHydrationWarning no <html>Sempre incluir no app/layout.tsx com next-themesUsar cores absolutas sem prefixo dark:text-gray-800 dark:text-gray-100

Checklist de entrega por página
Ao implementar qualquer página, informar:

 Arquivos criados
 Arquivos alterados
 Dependências instaladas
 Variáveis de ambiente necessárias
 Placeholders que precisam ser substituídos pela cliente
 Comportamento visual validado nos modos claro e escuro