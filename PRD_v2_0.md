# PRD v2.0 - Brincadeiras BeHappy

O projeto **Brincadeiras BeHappy** evoluiu para se tornar a plataforma definitiva de consulta e compartilhamento de dinâmicas para recreadores. Este documento reflete o estado atual da aplicação após os ciclos de padronização e segurança.

## 1. Visão Geral
Uma aplicação web (Mobile First) projetada para facilitar a vida de recreadores em colônias de férias, acampamentos e festas. O app permite descobrir brincadeiras, salvar "fichas técnicas" como imagem para uso offline e gamificar a experiência do recreador.

## 2. Pilares de Design (Design System)
- **Estilo**: Estilo "Flat" premium com bordas arredondadas (`12px` para cards, `24px` para modais).
- **Cores Semânticas**:
  - `primary` (#FF9500): Ações principais e identidade.
  - `blue`, `purple`, `yellow`, `green`, `red`: Tokens para categorias e status.
- **Micro-interações**: Feedback tátil (`active:scale-95`) e animações de coração com `framer-motion`.
- **Aesthetics**: Linguagem documental limpa ("Document Style") para detalhes de brincadeiras.

## 3. Funcionalidades Principais

### A. Biblioteca e Exploração
- **Busca Global**: Busca instantânea por nome, descrição ou materiais.
- **Coleções Temáticas**: Listas curadas como "Na Chuva", "Piscina", "Zero Material".
- **Ficha Técnica (Capture)**: Geração de imagem (`png`) de alta qualidade das brincadeiras para compartilhamento no WhatsApp ou consulta offline.

### B. Gamificação (Recreador de Elite)
- **Progressão**: Sistema de níveis de 1 a 100 baseado em XP.
- **Ganhos de XP**: Ações no app (publicar, comentar, usar, dar like) geram progresso.
- **Trilha de Títulos**: Títulos conquistados conforme o nível (Iniciante -> Mestre -> Inventor).
- **Títulos Exclusivos**: Reconhecimento para a elite da comunidade (ex: "Diva da Recreação").
- **Ranking Global**: Mural com os top recreadores da comunidade.

### C. Gestão de Conteúdo
- **Criação/Edição**: Interface intuitiva para cadastrar novas dinâmicas.
- **Social**: Sistema de likes, contador de uso ("Eu usei!") e seção de comentários.

## 4. Segurança e Backend
- **Trava de Títulos**: Validação no servidor para garantir que o usuário só equipe títulos que realmente desbloqueou através de XP.
- **Autenticação**: Integrada com NextAuth.
- **Permanência**: Banco de dados relacional via Prisma alimentando um backend escalável no Next.js.

## 5. Histórico da Evolução (Antigravity Era)
- Unificação da marca: De "BeHappy Hub" para **Brincadeiras BeHappy**.
- Minimalismo visual: Adoção do estilo Documental (texto livre em fundo branco).
- Estabilização de Build: Resolução de conflitos de SSR e TypeScript em CSS dinâmico.

---
*Documento vivo - Última atualização: 10 de Abril de 2026*
