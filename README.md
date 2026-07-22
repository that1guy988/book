# Prévia do livro

Site estático em Astro + Tailwind, com i18n manual (sem dependências extras de i18n).

## Rodando localmente

```bash
npm install
npm run dev
```

Abra http://localhost:4321 — você será redirecionado para `/pt/`.

## Estrutura

- `src/content/salas/<capitulo>/<idioma>.md` — texto de cada capítulo, um arquivo por idioma.
  Ex: `src/content/salas/nevoa/pt.md`, `src/content/salas/nevoa/en.md`.
  Só crie o arquivo do idioma que já tiver traduzido — os idiomas sem tradução simplesmente
  não aparecem na lista de salas daquele idioma.
- `src/i18n/config.ts` — lista de idiomas disponíveis. Adicionar um idioma novo aqui já
  gera as rotas automaticamente (`/xx/`, `/xx/salas/`).
- `src/i18n/ui.ts` — textos fixos da interface (menu, botões). Adicione as chaves aqui
  quando adicionar um idioma novo em `config.ts`.
- `src/layouts/BaseLayout.astro` — layout com cabeçalho e seletor de idioma.
- `public/imagens/` — imagens (capa, etc.) — coloque `capa.png` aqui.

## Adicionando um novo capítulo

1. Crie a pasta `src/content/salas/<slug>/`.
2. Dentro, crie `pt.md` (e os idiomas que já tiver traduzido) com o front-matter:

```md
---
title: "Nome do capítulo"
order: 3
lang: pt
---

Texto do capítulo aqui, em Markdown.
```

3. O capítulo aparece automaticamente na lista de salas, ordenado por `order`.

## Build e deploy (Cloudflare Pages)

```bash
npm run build
```

Gera a pasta `dist/` com HTML estático puro.

Configuração no Cloudflare Pages:
- **Build command:** `npm run build`
- **Output directory:** `dist`
- **Framework preset:** Astro (detecta automaticamente)

Basta conectar o repositório do GitHub — cada push na branch principal dispara um novo deploy.
