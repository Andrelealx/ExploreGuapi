# ExploreGuapi

Guia digital turistico de **Guapimirim, RJ**.

Slogan do projeto: **"Guapimirim tem muito mais do que voce imagina"**.

---

## Sobre o projeto

O ExploreGuapi foi criado para ser uma referencia online para turistas que querem conhecer Guapimirim, com foco em natureza, aventura, cultura e experiencias locais.

Tambem funciona como vitrine comercial para negocios da cidade (pousadas, restaurantes, guias e operadores locais), com planos de destaque.

---

## Principais funcionalidades

- Home com hero, dados da cidade e destaques de atracoes.
- Paginas dedicadas:
  - `/atracoes`
  - `/roteiros`
  - `/eventos`
  - `/onde-comer`
  - `/onde-ficar`
  - `/guias`
  - `/mapa`
  - `/anuncie`
- Filtros por categoria (atracoes e restaurantes).
- Mapa interativo com pins coloridos por tipo de ponto.
- Sistema de parceiros com planos comerciais.
- Formulario de cadastro de parceiros com:
  - validacao
  - persistencia no PostgreSQL
  - envio por e-mail (quando SMTP configurado)
- SEO base com metadata, Open Graph, sitemap e robots.
- Fallback de imagem, skeleton loading e pagina 404 customizada.
- Botao flutuante de WhatsApp em todas as paginas.

---

## Stack

- **Frontend:** Next.js 14 (App Router), React, TypeScript
- **UI:** Tailwind CSS, Framer Motion, Lucide Icons
- **Mapa:** React Leaflet + Leaflet
- **Backend:** Route Handlers do Next.js
- **Banco:** PostgreSQL + Prisma ORM
- **Deploy:** Railway (via GitHub)

---

## Como rodar localmente

### 1) Clonar o repositorio

```bash
git clone https://github.com/Andrelealx/ExploreGuapi.git
cd ExploreGuapi
```

### 2) Instalar dependencias

```bash
npm install
```

### 3) Configurar ambiente

Crie o arquivo `.env` com base em `.env.example`:

```bash
cp .env.example .env
```

### 4) Gerar client do Prisma

```bash
npm run prisma:generate
```

### 5) Rodar em desenvolvimento

```bash
npm run dev
```

Aplicacao em: `http://localhost:3000`

---

## Variaveis de ambiente

Use o arquivo `.env.example` como referencia.

Variaveis principais:

- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_WHATSAPP_NUMBER`
- `DATABASE_URL`
- `SMTP_HOST`
- `SMTP_PORT`
- `SMTP_USER`
- `SMTP_PASS`
- `SMTP_FROM`
- `PARTNERS_RECEIVER_EMAIL`

---

## Banco de dados (Prisma)

Gerar client:

```bash
npm run prisma:generate
```

Criar migracoes em ambiente local:

```bash
npm run prisma:migrate:dev
```

Aplicar migracoes em producao:

```bash
npm run prisma:migrate:deploy
```

---

## Scripts

- `npm run dev` - ambiente de desenvolvimento
- `npm run build` - build de producao
- `npm run start` - inicia build de producao
- `npm run lint` - analise de codigo
- `npm run prisma:generate` - gera Prisma Client
- `npm run prisma:migrate:dev` - cria/aplica migracoes locais
- `npm run prisma:migrate:deploy` - aplica migracoes em producao

---

## Observacoes

- Este repositorio foi preparado para uso publico.
- Nao inclua credenciais reais no `.env` nem em commits.
