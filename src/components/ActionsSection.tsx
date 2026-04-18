import { FadeInSection } from "./FadeInSection";

const actions = [
  {
    icon: "🌱",
    tag: "Ambiental",
    title: "Copo que vira adubo",
    text: "Copos PLA biodegradáveis se decompõem e retornam às plantações de café como adubo. Economia circular real.",
  },
  {
    icon: "⚡",
    tag: "Ambiental",
    title: "Energia limpa",
    text: "Frota de entrega 100% elétrica, energia solar nas lojas e estações de carregamento abertas ao público.",
  },
  {
    icon: "💰",
    tag: "Econômica",
    title: "Combo Starroots",
    text: "Bebida + cookie personalizado com o nome do cliente por R$12,50 — receita que financia toda a logística verde.",
  },
  {
    icon: "❤️",
    tag: "Social",
    title: "Educação ambiental",
    text: "Parcerias com ONGs para conscientização ambiental de crianças e adolescentes em comunidades.",
  },
];

export function ActionsSection() {
  return (
    <section id="acoes" className="scroll-anchor px-6 py-24 max-w-7xl mx-auto">
      <FadeInSection>
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <p className="text-xs tracking-[0.3em] uppercase text-accent mb-3">Pilares de Ação</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Ações que regeneram
          </h2>
          <p className="text-muted-foreground">
            Quatro frentes integradas — ambiental, econômica e social — operando como um sistema vivo.
          </p>
        </div>
      </FadeInSection>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {actions.map((a, i) => (
          <FadeInSection key={a.title} delay={i * 0.1}>
            <div className="bg-card border border-border rounded-2xl p-8 h-full flex gap-5 hover:border-accent/40 transition-colors">
              <span className="text-4xl shrink-0">{a.icon}</span>
              <div>
                <span className="text-[10px] tracking-[0.25em] uppercase text-accent">{a.tag}</span>
                <h3 className="font-display text-2xl font-semibold mt-1 mb-2">{a.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{a.text}</p>
              </div>
            </div>
          </FadeInSection>
        ))}
      </div>
    </section>
  );
}
