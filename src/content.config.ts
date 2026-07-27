import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const salas = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/salas' }),
  schema: z.object({
    title: z.string(),
    order: z.number().default(0),
    lang: z.string(),
    // Clima visual da sala: cor de destaque + tipo de efeito de fundo.
    ambientColor: z.string().default('#7a2e2e'), // cor de acento em hex
    ambientEffect: z.enum(['fog', 'steam', 'dust', 'embers', 'snow', 'none']).default('none'),
    // Tema visual da própria página do leitor (paleta do "papel"). 'frost'
    // deixa o papel pálido e frio, com neve caindo atrás do texto. 'watercolor'
    // simula papel molhado, com tinta que reage ao ponteiro e sangra na dobra.
    // 'mist' faz a página se comportar como névoa: dissolve ao virar, bordas
    // com luz pulsante, rastro residual do texto anterior.
    readerTheme: z.enum(['default', 'frost', 'watercolor', 'mist', 'matcha', 'cafeteria', 'void', 'mediterraneo']).default('default'),
  }),
});

export const collections = { salas };
