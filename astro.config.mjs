// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// IMPORTANTE: depois de publicar (Cloudflare Workers, domínio próprio, etc.),
// troque a URL abaixo pela URL real do site (ex: https://book.SEU-SUBDOMINIO.workers.dev
// ou seu domínio customizado) — ela é usada para gerar o sitemap.xml e as
// tags og:image com endereço absoluto.
const SITE_URL = 'https://livro-preview.pages.dev';

export default defineConfig({
  site: SITE_URL,
  output: 'static',
  // Todos os links internos do site já usam barra final (/pt/, /pt/salas/neve/),
  // então força esse padrão na geração das páginas — evita ambiguidade na
  // resolução de index.html pelo Cloudflare Workers Assets.
  trailingSlash: 'always',
  devToolbar: {
    enabled: false,
  },
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
