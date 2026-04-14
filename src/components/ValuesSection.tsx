import { FadeInSection } from "./FadeInSection";

const values = [
  {
    icon: "🌱",
    title: "Sustentabilidade",
    desc: "Copos biodegradáveis PLA que se decompõem naturalmente, transformando-se em adubo para as próprias plantações de café.",
  },
  {
    icon: "♻️",
    title: "Circularidade",
    desc: "Cada copo descartado retorna ao ciclo produtivo, substituindo 15% do adubo químico poluente utilizado nas fazendas.",
  },
  {
    icon: "🤝",
    title: "Conexão",
    desc: "O combo cookie + café cria uma experiência que gera US$1,8B em receita extra, envolvendo 30% dos clientes.",
  },
];

export function ValuesSection() {
  return (
    <section className="px-6 py-24 max-w-5xl mx-auto">
      <FadeInSection>
        <div className="mb-16 text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-accent mb-3">Propósito</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold">Valores</h2>
        </div>
      </FadeInSection>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {values.map((v, i) => (
          <FadeInSection key={v.title} delay={i * 0.15}>
            <div className="text-center">
              <span className="text-4xl mb-4 block">{v.icon}</span>
              <h3 className="text-xl font-display font-bold mb-3">{v.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
            </div>
          </FadeInSection>
        ))}
      </div>
    </section>
  );
}
