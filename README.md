# ExploreGuapi

Guia digital turístico de Guapimirim, RJ.

## Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- React Leaflet
- PostgreSQL + Prisma
- Deploy target: Railway

## Funcionalidades implementadas

- Home com hero, seções de diferenciais, atrações em destaque, clima e CTA comercial.
- Páginas:
  - `/atracoes`
  - `/roteiros`
  - `/eventos`
  - `/onde-comer`
  - `/onde-ficar`
  - `/guias`
  - `/mapa`
  - `/anuncie`
- Filtros em atrações e restaurantes.
- Cards com fallback de imagem.
- Skeleton loading nos grids.
- Mapa interativo com pins coloridos por categoria.
- Botão flutuante de WhatsApp em todas as páginas.
- SEO base com metadata, Open Graph, `sitemap.xml` e `robots.txt`.
- Página 404 personalizada.
- Formulário de parceiros com:
  - Validação via Zod
  - Salvamento no PostgreSQL (Prisma)
  - Envio de e-mail via SMTP (quando configurado)

## Variáveis de ambiente

Copie `.env.example` para `.env` e ajuste:

```bash
cp .env.example .env
```

Principais variáveis:

- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_WHATSAPP_NUMBER`
- `DATABASE_URL`
- `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, `SMTP_FROM`
- `PARTNERS_RECEIVER_EMAIL`

## Rodando localmente

```bash
npm install
npm run dev
```

Abra `http://localhost:3000`.

## Prisma e banco

Gerar client:

```bash
npm run prisma:generate
```

Criar migrações localmente:

```bash
npm run prisma:migrate:dev
```

Aplicar migrações em produção:

```bash
npm run prisma:migrate:deploy
```

## Deploy na Railway via GitHub

1. Suba este repositório no GitHub.
2. No Railway, crie um novo projeto a partir do repositório.
3. Adicione o serviço PostgreSQL no projeto Railway.
4. Configure as variáveis de ambiente do app (inclusive `DATABASE_URL` do serviço Railway).
5. Em **Build Command**, use:
   - `npm install && npm run build`
6. Em **Start Command**, use:
   - `npm run start`
7. (Opcional, recomendado) Rode migração após deploy:
   - `npm run prisma:migrate:deploy`

## Scripts

- `npm run dev`
- `npm run build`
- `npm run start`
- `npm run lint`
- `npm run prisma:generate`
- `npm run prisma:migrate:dev`
- `npm run prisma:migrate:deploy`
