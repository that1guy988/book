// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// IMPORTANTE: depois de publicar (Cloudflare Pages, domínio próprio, etc.),
// troque a URL abaixo pela URL real do site — ela é usada para gerar o
// sitemap.xml e as tags og:image com endereço absoluto.
const SITE_URL = 'https://livro-preview.pages.dev';

export default defineConfig({
  site: SITE_URL,
  output: 'static',
  devToolbar: {
    enabled: false,
  },
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
