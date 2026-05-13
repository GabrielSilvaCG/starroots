import { FadeInSection } from "./FadeInSection";
import { useLanguage } from "@/store/useLanguage";

const getProblems = (t: (key: string) => string) => [
  {
    stat: "6B",
    unit: t('problem.stat1.unit'),
    title: t('problem.stat1.title'),
    text: t('problem.stat1.text'),
    accent: "var(--accent)",
  },
  {
    stat: "+30%",
    unit: t('problem.stat2.unit'),
    title: t('problem.stat2.title'),
    text: t('problem.stat2.text'),
    accent: "var(--primary)",
  },
  {
    stat: "Tons.",
    unit: t('problem.stat3.unit'),
    title: t('problem.stat3.title'),
    text: t('problem.stat3.text'),
    accent: "var(--accent)",
  },
  {
    stat: "24/7",
    unit: t('problem.stat4.unit'),
    title: t('problem.stat4.title'),
    text: t('problem.stat4.text'),
    accent: "var(--primary)",
  },
];

export function ProblemSection() {
  const { t } = useLanguage();
  return (
    <section id="problema" className="scroll-anchor relative px-6 md:px-10 py-32 max-w-[1400px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 mb-20">
        <FadeInSection className="md:col-span-5" variant="left">
          <p className="text-[10px] tracking-[0.4em] uppercase text-accent mb-6">{t('chapter.diagnostic')}</p>
          <h2
            className="font-display font-black leading-[0.9] tracking-[-0.03em]"
            style={{ fontSize: "clamp(2.75rem, 6vw, 5.5rem)" }}
          >
            {t('chapter.diagnostic.title').split('\n').map((line, i) => (
              <span key={i}>
                {i === 2 ? <em className="italic font-semibold text-accent">{line}</em> : line}
                {i < 2 && <br />}
              </span>
            ))}
          </h2>
        </FadeInSection>
        <FadeInSection delay={0.15} variant="right" className="md:col-span-6 md:col-start-7 self-end">
          <div className="editorial-rule mb-6 text-foreground/40" />
          <p className="text-base md:text-lg text-foreground/75 leading-relaxed font-body">
            Por trás de cada copo, há um custo ambiental que precisa ser repensado. O diagnóstico não é
            confortável — mas é o ponto de partida para qualquer rebrand honesto.
          </p>
        </FadeInSection>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border/40">
        {problems.map((p, i) => (
          <FadeInSection key={p.title} delay={i * 0.08} variant="blur" className="bg-background">
            <article
              className="card-lift sheen-on-hover h-full p-8 md:p-10 transition-colors duration-300 hover:bg-card/40 cursor-default"
              style={{ borderTop: `2px solid ${p.accent}` }}
            >
              <p
                className="font-display font-bold leading-none mb-2 text-foreground"
                style={{ fontSize: "clamp(3rem, 5vw, 4.5rem)" }}
              >
                {p.stat}
              </p>
              <p className="text-[10px] tracking-[0.3em] uppercase text-foreground/50 mb-8">{p.unit}</p>
              <h3 className="font-display text-2xl font-semibold mb-3 leading-tight">{p.title}</h3>
              <p className="text-sm text-foreground/65 leading-relaxed font-body">{p.text}</p>
            </article>
          </FadeInSection>
        ))}
      </div>
    </section>
  );
}
