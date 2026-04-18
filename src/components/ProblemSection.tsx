import { FadeInSection } from "./FadeInSection";

const problems = [
  {
    icon: "🥤",
    title: "Copos descartáveis",
    text: "Mais de 6 bilhões de copos por ano com revestimento plástico interno — não recicláveis.",
  },
  {
    icon: "🚛",
    title: "Emissões de CO₂",
    text: "Logística global gera emissões massivas. Em 2024, os níveis estão acima de 2019.",
  },
  {
    icon: "🍽️",
    title: "Desperdício alimentar",
    text: "Toneladas de alimentos descartadas diariamente nas lojas ao redor do mundo.",
  },
  {
    icon: "💡",
    title: "Energia & água",
    text: "Alto consumo energético e hídrico em milhares de operações simultâneas.",
  },
];

export function ProblemSection() {
  return (
    <section id="problema" className="scroll-anchor px-6 py-24 max-w-7xl mx-auto">
      <FadeInSection>
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <p className="text-xs tracking-[0.3em] uppercase text-accent mb-3">O Diagnóstico</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            O que o Starbucks causa<br />no meio ambiente
          </h2>
          <p className="text-muted-foreground">
            Por trás de cada copo, há um custo ambiental que precisa ser repensado.
          </p>
        </div>
      </FadeInSection>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {problems.map((p, i) => (
          <FadeInSection key={p.title} delay={i * 0.1}>
            <div className="bg-card border border-border rounded-2xl p-6 h-full hover:border-accent/50 transition-colors duration-300">
              <span className="text-4xl block mb-4">{p.icon}</span>
              <h3 className="font-display text-xl font-semibold mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.text}</p>
            </div>
          </FadeInSection>
        ))}
      </div>
    </section>
  );
}
