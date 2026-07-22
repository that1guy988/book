// Idiomas suportados. Adicione novos aqui — o site inteiro se adapta.
export const languages = {
  pt: 'Português',
  en: 'English',
  es: 'Español',
  fr: 'Français',
  ja: '日本語',
  uk: 'Українська',
  ru: 'Русский',
  zh: '中文',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'pt';

// Idiomas com escrita da direita pra esquerda (nenhum aqui ainda, mas fica pronto)
export const rtlLangs: Lang[] = [];
