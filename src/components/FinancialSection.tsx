const cards = [
  {
    tag: "Problema",
    tagColor: "bg-destructive",
    title: "Copo Atual",
    value: "US$ 280M",
    details: [
      "4 bilhões de copos plásticos × US$0,07",
      "Revestimento plástico interno — não recicláveis",
    ],
  },
  {
    tag: "Investimento",
    tagColor: "bg-primary",
    title: "Copo PLA",
    value: "US$ 480M",
    details: [
      "4 bilhões de copos biodegradáveis × US$0,12",
      "Custo adicional de US$200M/ano",
    ],
  },
  {
    tag: "Retorno",
    tagColor: "bg-accent",
    title: "Economia",
    value: "US$ 20M",
    details: [
      "Compostagem dos copos vira adubo nas plantações",
      "15% do adubo poluente substituído",
    ],
  },
  {
    tag: "Resultado",
    tagColor: "bg-accent",
    title: "Lucro Final",
    value: "US$ 5,1B",
    details: [
      "Lucro atual: US$3,5B",
      "+ Cookie (30% clientes): US$1,8B extra",
      "+46% sobre lucro atual",
    ],
  },
];

export function FinancialSection() {
  return (
    <section className="px-6 py-24 max-w-7xl mx-auto">
      <div className="mb-16 text-center">
        <p className="text-xs tracking-[0.3em] uppercase text-accent mb-3">Business Case</p>
        <h2 className="text-4xl md:text-5xl font-display font-bold">Análise Financeira</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {cards.map((c) => (
          <div key={c.title} className="bg-card rounded-xl p-6 border border-border flex flex-col">
            <span className={`self-start text-xs font-semibold px-2.5 py-1 rounded ${c.tagColor} text-primary-foreground mb-4`}>
              {c.tag}
            </span>
            <h3 className="text-sm uppercase tracking-wider text-muted-foreground mb-1">{c.title}</h3>
            <p className="text-3xl md:text-4xl font-display font-bold mb-1">{c.value}</p>
            <span className="text-xs text-muted-foreground mb-4">por ano</span>
            <div className="section-divider mb-4" />
            <ul className="space-y-2 text-sm text-surface-foreground">
              {c.details.map((d, i) => (
                <li key={i}>{d}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <p className="text-accent text-sm md:text-base font-medium">
          Se 30% dos clientes escolherem o combo Starroots → lucro salta de US$3,5B para US$5,1B (+46%)
        </p>
      </div>
    </section>
  );
}
