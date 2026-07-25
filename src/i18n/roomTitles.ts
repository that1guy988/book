// Título estilizado de cada sala, traduzido por idioma de leitura.
// Compartilhado entre ChapterCover.astro (capa) e [slug].astro (cabeçalho
// da leitura + etiqueta discreta acima do texto).
export const ROOM_TITLES: Record<string, Record<string, string>> = {
  neve: {
    pt: 'Neve', en: 'Snow', es: 'Nieve', fr: 'Neige',
    ja: '雪', zh: '雪', uk: 'Сніг', ru: 'Снег',
  },
  artista: {
    pt: 'Cores', en: 'Colors', es: 'Colores', fr: 'Couleurs',
    ja: '色彩', zh: '色彩', uk: 'Кольори', ru: 'Цвета',
  },
  nevoa: {
    pt: 'Névoa', en: 'Mist', es: 'Niebla', fr: 'Brume',
    ja: '霧', zh: '迷雾', uk: 'Туман', ru: 'Туман',
  },
  matcha: {
    pt: 'Matcha', en: 'Matcha', es: 'Matcha', fr: 'Matcha',
    ja: '抹茶', zh: '抹茶', uk: 'Матча', ru: 'Матча',
  },
  cafeteria: {
    pt: 'Café', en: 'Coffee', es: 'Café', fr: 'Café',
    ja: 'コーヒー', zh: '咖啡', uk: 'Кава', ru: 'Кофе',
  },
  'minha-sala': {
    pt: 'Minha Sala', en: 'My Room', es: 'Mi Sala', fr: 'Ma Salle',
    ja: '私の部屋', zh: '我的房间', uk: 'Моя кімната', ru: 'Моя комната',
  },
  introducao: {
    pt: 'Introdução', en: 'Introduction', es: 'Introducción', fr: 'Introduction',
    ja: '序章', zh: '序言', uk: 'Вступ', ru: 'Введение',
  },
};

export function getRoomTitle(slug: string, lang: string): string {
  return ROOM_TITLES[slug]?.[lang] ?? ROOM_TITLES.introducao[lang] ?? ROOM_TITLES.introducao.pt;
}
