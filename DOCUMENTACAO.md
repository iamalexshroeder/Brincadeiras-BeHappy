# Documentação do Projeto: Brincadeiras BeHappy

Este documento serve como referência central para entender a arquitetura, stack tecnológica e as funcionalidades do aplicativo **Brincadeiras BeHappy**.

## 1. Visão Geral do Aplicativo
O **Brincadeiras BeHappy** é um "Manual de Brincadeiras" moderno e gamificado feito especialmente para recreadores. Ele permite descobrir, favoritar, salvar e compartilhar dinâmicas e brincadeiras para diversas idades e situações (ex: sem material, piscina, etc.).

## 2. Stack Tecnológica
A aplicação é construída com tecnologias modernas, garantindo alta performance, segurança e uma interface premium ("Mobile First").

* **Framework Principal**: Next.js 16 (App Router com Turbopack)
* **Biblioteca UI**: React 19
* **Estilização**: Tailwind CSS v4, Radix UI, Shadcn UI
* **Animações e Ícones**: Framer Motion 12, Remixicon (@remixicon/react), tw-animate-css
* **Banco de Dados & ORM**: PostgreSQL, Prisma ORM (v7) e adaptadores nativos (`@prisma/adapter-pg`)
* **Infraestrutura/Backend**: Vercel (Hospedagem Serverless) e Supabase (Banco de dados e serviços extras)
* **Autenticação**: NextAuth.js v5 (Beta) integrado com JWT
* **Utilitários**: canvas-confetti, html2canvas (para captura de tela/fichas), pdf-parse, date-fns, sonner (notificações)

## 3. Funcionalidades Principais (Para Documentar/Manter)

### A. Explorar e Biblioteca (Feed)
* **Listagem de Brincadeiras**: Visualização em formato de cards ricos.
* **Filtros e Categorias**: Filtragem por "Kits Sugeridos" (ex: Sem material, Na Chuva, Piscina).
* **Busca Inteligente**: Busca debounce para encontrar brincadeiras por título ou palavra-chave.
* **Ficha Técnica Documental**: Modal detalhado com uma visão minimalista e limpa da brincadeira (idade, duração, materiais, como jogar), otimizado para leitura.
* **Captura/Compartilhamento**: Recurso para gerar uma imagem da ficha da brincadeira e compartilhar via WhatsApp (usando identidade visual padronizada do BeHappy).

### B. Perfil do Recreador e Social
* **Perfis Públicos e Privados**: O usuário tem seu próprio perfil e pode visitar o perfil de outros recreadores.
* **Sistema de Seguidores**: Os usuários podem seguir uns aos outros (Followers/Following) sem sobrecarga no banco de dados (otimizado com queries em batch).
* **Foto de Perfil Imersiva (Novo)**: Ao tocar no avatar (no perfil, na edição ou em perfis de terceiros), a imagem abre em tela cheia (Full Screen Lightbox) com fundo escuro elegante.
* **Atividades e Coleções**: Contagem de Brincadeiras Salvas, Curtidas (Favoritas) e Publicadas (Minhas).

### C. Gamificação e Conquistas
* **Patentes / Cargos**: Níveis como *Iniciante, Trainee, Nível Up, Treinador, MVP* baseados na experiência e interação do usuário.
* **XP e Notificações**: O sistema bonifica ações e notifica o usuário via *Toast* usando o componente `NotificationPoller` de forma otimizada (apenas 1 interval ativo).
* **Validação de Servidor**: Proteção rígida (Server Actions) que impede que os usuários equipem títulos ou patentes para os quais não têm o XP necessário.

### D. Criação e Edição de Conteúdo
* **Cadastro de Dinâmicas**: Formulários estruturados para inserir passos, materiais, tempo estimado e idade alvo.
* **Gerenciamento Próprio**: Os recreadores podem editar ou excluir as dinâmicas que criaram.

## 4. Estrutura de Interface (Design System)
* **Design "Mobile First" e Ergonômico**: Modais flutuantes com altura controlada (`84dvh`) para não conflitar com *notches* de celulares.
* **Safe-area**: Espaçamento adaptativo no rodapé (`safe-area-inset-bottom`) garantindo cliques confortáveis em iOS e Android.
* **Visual Premium**: Fundo claro (off-white), cartões brancos com sombras muito sutis e bordas arredondadas (24px para modais, 12px para cards). A cor primária (Laranja) é usada para destacar ações vitais.

## 5. Práticas de Performance e Backend Otimizadas
* **Pool de Conexões (Database)**: Configurado em `max: 5` no `prisma.ts` para suportar paralelismo na Vercel (Serverless).
* **Queries Batch**: Substituição de N+1 queries por agrupamentos lógicos (ex: `findMany` com array de IDs e `Set` em memória).
* **Cache e Ausência de Estado Local Excessivo**: Uso pesado de *Server Components* e *Server Actions* (`"use server"`) do Next.js, mitigando chamadas pesadas ao cliente.
