import { FadeInSection } from "./FadeInSection";
import { useLanguage } from "@/store/useLanguage";

const getActions = (t: (key: string) => string) => [
  {
    n: "01",
    tag: t('action.1.tag'),
    title: t('action.1.title'),
    text: t('action.1.text'),
  },
  {
    n: "02",
    tag: t('action.2.tag'),
    title: t('action.2.title'),
    text: t('action.2.text'),
  },
  {
    n: "03",
    tag: t('action.3.tag'),
    title: t('action.3.title'),
    text: t('action.3.text'),
  },
  {
    n: "04",
    tag: t('action.4.tag'),
    title: t('action.4.title'),
    text: t('action.4.text'),
  },
];

export function ActionsSection() {
  const { t } = useLanguage();
  const actions = getActions(t);
  return (
    <section id="acoes" className="scroll-anchor px-6 md:px-10 py-32 max-w-[1400px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-20 items-end">
        <FadeInSection className="md:col-span-7">
          <p className="text-[10px] tracking-[0.4em] uppercase text-accent mb-6">{t('chapter.pilares')}</p>
          <h2
            className="font-display font-black leading-[0.9] tracking-[-0.03em]"
            style={{ fontSize: "clamp(2.75rem, 6vw, 5.5rem)" }}
          >
            {t('chapter.pilares.title').split(' ').map((word, i, arr) => (
              <span key={i}>
                {word === 'regeneram.' || word === 'regenerate.' ? <em className="italic font-semibold text-accent">{word}</em> : word}
                {i < arr.length - 1 && ' '}
              </span>
            ))}
          </h2>
        </FadeInSection>
        <FadeInSection delay={0.15} className="md:col-span-4 md:col-start-9">
          <p className="text-lg md:text-xl text-foreground/75 leading-relaxed font-body">
            {t('chapter.pilares.desc')}
          </p>
        </FadeInSection>
      </div>

      {/* Timeline */}
      <div className="relative">
        <div className="hidden md:block absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-px md:gap-0">
          {actions.map((a, i) => (
            <FadeInSection key={a.n} delay={i * 0.1} variant="up">
              <div className="card-lift relative h-full p-8 md:p-10 md:border-r md:border-primary/20 md:last:border-r-0 group transition-colors hover:bg-card/40">
                <div
                  className="hidden md:flex absolute top-12 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-accent border-2 border-background z-10 rotate-45 animate-tick"
                  style={{ animationDelay: `${i * 0.4}s` }}
                />
                <p
                  className="font-display font-black text-primary/30 leading-none mb-6 group-hover:text-accent/60 transition-colors duration-500"
                  style={{ fontSize: "clamp(4rem, 7vw, 6rem)" }}
                >
                  {a.n}
                </p>
                <p className="text-xs tracking-[0.32em] uppercase text-accent mb-4">{a.tag}</p>
                <h3 className="font-display text-[2.15rem] md:text-[2.65rem] font-semibold mb-5 leading-[0.95]">{a.title}</h3>
                <p className="text-lg md:text-xl text-foreground/75 leading-relaxed font-body">{a.text}</p>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}
