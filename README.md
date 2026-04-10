# Brincadeiras BeHappy 🧸✨

O aplicativo definitivo para recreadores, colônias de férias e educadores que buscam transformar qualquer momento em uma grande brincadeira.

## 🚀 Funcionalidades
- **Biblioteca de Dinâmicas**: Centenas de brincadeiras organizadas por categorias (Chuva, Piscina, Zero Material, etc).
- **Ficha Técnica Digital**: Gere imagens das brincadeiras para compartilhar no WhatsApp ou usar offline.
- **Gamificação**: Suba de nível, ganhe títulos exclusivos e apareça no Ranking dos Top Recreadores.
- **Interativo**: Comente, curta e marque as brincadeiras que você já realizou.

## 🛠️ Tech Stack
- **Framework**: [Next.js](https://nextjs.org/) (App Router + Turbopack)
- **Database**: [Prisma](https://www.prisma.io/) + PostgreSQL/SQLite
- **Auth**: [NextAuth.js](https://next-auth.js.org/)
- **UI**: Tailwind CSS + shadcn/ui + Remix Icons

## 📦 Como rodar localmente
1. Instale as dependências:
   ```bash
   npm install
   ```
2. Configure o env:
   ```bash
   cp .env.example .env
   ```
3. Prepare o banco de dados:
   ```bash
   npx prisma generate
   ```
4. Inicie o servidor:
   ```bash
   npm run dev
   ```

## 📜 Documentação
Para detalhes estratégicos, consulte o [PRD v2.0](PRD_v2_0.md).
Para o histórico de mudanças em UI/Segurança, veja [CHANGELOG_ANTIGRAVITY.md](CHANGELOG_ANTIGRAVITY.md).
