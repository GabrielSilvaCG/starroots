import { FadeInSection } from "./FadeInSection";

const cards = [
  {
    tag: "Problema",
    barColor: "var(--chart-1)", // red
    title: "Copo Atual",
    value: "US$280M",
    details: ["4B copos plásticos × US$0,07", "Revestimento plástico — não recicláveis"],
  },
  {
    tag: "Investimento",
    barColor: "var(--chart-2)", // green
    title: "Copo PLA",
    value: "US$480M",
    details: ["4B copos biodegradáveis × US$0,12", "Custo adicional de US$200M/ano"],
  },
  {
    tag: "Retorno",
    barColor: "var(--chart-3)", // blue
    title: "Economia",
    value: "US$20M",
    details: ["Compostagem dos copos vira adubo", "15% do adubo poluente substituído"],
  },
  {
    tag: "Resultado",
    barColor: "var(--chart-4)", // gold
    title: "Lucro Final",
    value: "US$5,1B",
    details: ["Lucro atual: US$3,5B", "+ Cookie (30% clientes): US$1,8B", "+46% sobre lucro atual"],
  },
];

export function FinancialSection() {
  return (
    <section id="financeiro" className="scroll-anchor px-6 md:px-10 py-32 max-w-[1400px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-20 items-end">
        <FadeInSection className="md:col-span-7">
          <p className="text-[10px] tracking-[0.4em] uppercase text-accent mb-6">Capítulo 06 — Business Case</p>
          <h2
            className="font-display font-black leading-[0.9] tracking-[-0.03em]"
            style={{ fontSize: "clamp(2.75rem, 6vw, 5.5rem)" }}
          >
            Um projeto que<br /><em className="italic font-semibold text-accent">se paga sozinho.</em>
          </h2>
        </FadeInSection>
        <FadeInSection delay={0.15} className="md:col-span-4 md:col-start-9">
          <p className="text-base text-foreground/70 leading-relaxed font-body">
            Dos custos operacionais ao retorno final — todos os números fecham a conta.
          </p>
        </FadeInSection>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border/40">
        {cards.map((c, i) => (
          <FadeInSection key={c.title} delay={i * 0.08} variant="blur" className="bg-background">
            <article className="card-lift sheen-on-hover h-full p-8 md:p-10 flex flex-col" style={{ borderTop: `3px solid ${c.barColor}` }}>
              <span
                className="self-start text-[10px] tracking-[0.3em] uppercase font-semibold px-3 py-1 mb-8"
                style={{ backgroundColor: c.barColor, color: "#0a2e1a" }}
              >
                {c.tag}
              </span>
              <h3 className="text-[10px] tracking-[0.3em] uppercase text-foreground/50 mb-3">{c.title}</h3>
              <p
                className="font-display font-black leading-[0.9] tracking-[-0.04em] mb-2"
                style={{ fontSize: "clamp(2.5rem, 4.5vw, 4.25rem)" }}
              >
                {c.value}
              </p>
              <span className="text-[10px] tracking-[0.3em] uppercase text-foreground/40 mb-8">por ano</span>
              <ul className="space-y-2 text-sm text-foreground/70 mt-auto font-body">
                {c.details.map((d, idx) => (
                  <li key={idx} className="flex gap-3">
                    <span className="text-accent">—</span>
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </article>
          </FadeInSection>
        ))}
      </div>

      <FadeInSection delay={0.3}>
        <p className="mt-12 text-center text-accent text-sm md:text-base tracking-wide font-body">
          Se 30% dos clientes escolherem o combo Starroots → lucro salta de US$3,5B para US$5,1B (+46%)
        </p>
      </FadeInSection>
    </section>
  );
}
