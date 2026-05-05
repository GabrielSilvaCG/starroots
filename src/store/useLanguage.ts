import { create } from 'zustand';

type Language = 'PT' | 'EN';

interface LanguageState {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  PT: {
    'nav.problema': 'Problema',
    'nav.solucao': 'Solução',
    'nav.acoes': 'Ações',
    'nav.combo': 'Combo',
    'nav.impacto': 'Impacto',
    'nav.financeiro': 'Financeiro',
    'nav.identidade': 'Identidade',
    'nav.sobre': 'Sobre',
    'hero.rebrand': 'Rebrand Sustentável',
    'hero.tagline': '"Dos campos de café até o seu copo,\na natureza é a prioridade."',
    'hero.cta': 'Comece a leitura',
    'hero.scroll': 'Role para baixo',
    'hero.chapters': '07 capítulos',
    'chapter.diagnostic': 'Capítulo 01 — Diagnóstico',
    'chapter.diagnostic.title': 'O que o\nStarbucks\ncausa.',
    'chapter.response': 'Capítulo 02 — Resposta',
    'chapter.response.title': 'Mesma sereia.\nNovas raízes.',
    'chapter.pilares': 'Capítulo 03 — Pilares',
    'chapter.pilares.title': 'Ações que regeneram.',
    'footer.developedBy': 'Projeto desenvolvido por',
    'footer.tagline': '"Dos campos de café até o seu copo,\na natureza é a prioridade."',
    'marquee.roots': 'Raízes',
    'marquee.sustainability': 'Sustentabilidade',
    'marquee.composting': 'Compostagem',
    'marquee.cleanEnergy': 'Energia limpa',
    'marquee.community': 'Comunidade',
    'marquee.responsibleCoffee': 'Café responsável',
    'marquee.origin': 'Origem',
    'marquee.electricFleet': 'Frota elétrica',
  },
  EN: {
    'nav.problema': 'Problem',
    'nav.solucao': 'Solution',
    'nav.acoes': 'Actions',
    'nav.combo': 'Combo',
    'nav.impacto': 'Impact',
    'nav.financeiro': 'Financial',
    'nav.identidade': 'Identity',
    'nav.sobre': 'About',
    'hero.rebrand': 'Sustainable Rebrand',
    'hero.tagline': '"From the coffee fields to your cup,\nnature is the priority."',
    'hero.cta': 'Start reading',
    'hero.scroll': 'Scroll down',
    'hero.chapters': '07 chapters',
    'chapter.diagnostic': 'Chapter 01 — Diagnosis',
    'chapter.diagnostic.title': 'What\nStarbucks\ncauses.',
    'chapter.response': 'Chapter 02 — Response',
    'chapter.response.title': 'Same siren.\nNew roots.',
    'chapter.pilares': 'Chapter 03 — Pillars',
    'chapter.pilares.title': 'Actions that regenerate.',
    'footer.developedBy': 'Project developed by',
    'footer.tagline': '"From the coffee fields to your cup,\nnature is the priority."',
    'marquee.roots': 'Roots',
    'marquee.sustainability': 'Sustainability',
    'marquee.composting': 'Composting',
    'marquee.cleanEnergy': 'Clean Energy',
    'marquee.community': 'Community',
    'marquee.responsibleCoffee': 'Responsible Coffee',
    'marquee.origin': 'Origin',
    'marquee.electricFleet': 'Electric Fleet',
  }
};

export const useLanguage = create<LanguageState>((set, get) => ({
  language: 'PT',
  setLanguage: (lang) => set({ language: lang }),
  t: (key) => translations[get().language][key] || key,
}));
