import { FadeInSection } from "./FadeInSection";

const comparisons = [
  {
    aspect: "Nome",
    before: "Starbucks",
    after: "Starroots",
  },
  {
    aspect: "Copos",
    before: "Plástico não reciclável",
    after: "PLA biodegradável → adubo",
  },
  {
    aspect: "Embalagem",
    before: "Materiais convencionais",
    after: "Kraft sustentável",
  },
  {
    aspect: "Propósito",
    before: "Experiência premium de café",
    after: "Sustentabilidade + experiência",
  },
  {
    aspect: "Impacto",
    before: "4B copos no lixo/ano",
    after: "4B copos compostados/ano",
  },
  {
    aspect: "Lucro",
    before: "US$ 3,5B/ano",
    after: "US$ 5,1B/ano (+46%)",
  },
];

export function ComparisonSection() {
  return (
    <section className="px-6 py-24 max-w-5xl mx-auto">
      <FadeInSection>
        <div className="mb-16 text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-accent mb-3">Evolução</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold">Antes vs Depois</h2>
        </div>
      </FadeInSection>

      <div className="overflow-hidden rounded-xl border border-border">
        {/* Header */}
        <div className="grid grid-cols-3 bg-secondary text-sm font-medium">
          <div className="p-4 text-muted-foreground" />
          <div className="p-4 text-center text-muted-foreground tracking-widest uppercase text-xs">Antes</div>
          <div className="p-4 text-center text-accent tracking-widest uppercase text-xs">Depois</div>
        </div>

        {comparisons.map((c, i) => (
          <FadeInSection key={c.aspect} delay={i * 0.05}>
            <div className="grid grid-cols-3 border-t border-border">
              <div className="p-4 text-sm font-medium text-muted-foreground">{c.aspect}</div>
              <div className="p-4 text-sm text-center text-surface-foreground/60">{c.before}</div>
              <div className="p-4 text-sm text-center text-foreground font-medium">{c.after}</div>
            </div>
          </FadeInSection>
        ))}
      </div>
    </section>
  );
}
