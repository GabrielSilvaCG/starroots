import { FadeInSection } from "./FadeInSection";
import { useLanguage } from "@/store/useLanguage";

const problems = [
  {
    stat: "6B",
    unit: "copos / ano",
    title: "Descartáveis com plástico",
    text: "Mais de 6 bilhões de copos por ano com revestimento plástico interno — não recicláveis em larga escala.",
    accent: "var(--accent)",
  },
  {
    stat: "+30%",
    unit: "CO₂ vs 2019",
    title: "Emissões em alta",
    text: "Logística global gera emissões massivas. Em 2024 os níveis seguem acima do patamar pré-pandemia.",
    accent: "var(--primary)",
  },
  {
    stat: "Tons.",
    unit: "diariamente",
    title: "Desperdício alimentar",
    text: "Toneladas de alimentos descartadas todos os dias nas lojas ao redor do mundo, sem reaproveitamento.",
    accent: "var(--accent)",
  },
  {
    stat: "24/7",
    unit: "consumo intenso",
    title: "Energia & água",
    text: "Alto consumo energético e hídrico em milhares de operações simultâneas, com pouca recuperação.",
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
