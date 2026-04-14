import { FadeInSection } from "./FadeInSection";

const phases = [
  { quarter: "Q1 2025", title: "Pesquisa & Estratégia", desc: "Análise de mercado, definição de posicionamento e conceito criativo 'Starroots'." },
  { quarter: "Q2 2025", title: "Identidade Visual", desc: "Redesign do logo, paleta de cores, tipografia e sistema de design completo." },
  { quarter: "Q3 2025", title: "Embalagens & Materiais", desc: "Transição para copos PLA biodegradáveis, sacolas kraft e nova embalagem de café." },
  { quarter: "Q4 2025", title: "Lojas Piloto", desc: "Rollout em 500 lojas selecionadas com nova sinalização, cardápio e experiência." },
  { quarter: "Q1 2026", title: "Lançamento Global", desc: "Campanha de lançamento mundial e expansão para todas as 35.000+ lojas." },
];

export function TimelineSection() {
  return (
    <section className="px-6 py-24 max-w-4xl mx-auto">
      <FadeInSection>
        <div className="mb-16 text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-accent mb-3">Roadmap</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold">Fases do Rebrand</h2>
        </div>
      </FadeInSection>

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

        {phases.map((phase, i) => {
          const isLeft = i % 2 === 0;
          return (
            <FadeInSection key={phase.quarter} delay={i * 0.1}>
              <div className={`relative flex items-start mb-12 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}>
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary -translate-x-1.5 mt-1.5 z-10 ring-4 ring-background" />

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${isLeft ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <span className="text-xs tracking-widest uppercase text-accent font-medium">{phase.quarter}</span>
                  <h3 className="text-xl font-display font-bold mt-1 mb-2">{phase.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{phase.desc}</p>
                </div>
              </div>
            </FadeInSection>
          );
        })}
      </div>
    </section>
  );
}
