import { FadeInSection } from "./FadeInSection";

const actions = [
  {
    n: "01",
    tag: "Ambiental",
    title: "Copo que vira adubo",
    text: "Copos PLA biodegradáveis se decompõem e retornam às plantações de café como adubo. Economia circular real.",
  },
  {
    n: "02",
    tag: "Ambiental",
    title: "Energia limpa",
    text: "Frota de entrega 100% elétrica, energia solar nas lojas e estações de carregamento abertas ao público.",
  },
  {
    n: "03",
    tag: "Econômica",
    title: "Combo Starroots",
    text: "Bebida + cookie personalizado com o nome do cliente por R$12,50 — receita que financia toda a logística verde.",
  },
  {
    n: "04",
    tag: "Social",
    title: "Educação ambiental",
    text: "Parcerias com ONGs para conscientização ambiental de crianças e adolescentes em comunidades.",
  },
];

export function ActionsSection() {
  return (
    <section id="acoes" className="scroll-anchor px-6 md:px-10 py-32 max-w-[1400px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-20 items-end">
        <FadeInSection className="md:col-span-7">
          <p className="text-[10px] tracking-[0.4em] uppercase text-accent mb-6">Capítulo 03 — Pilares</p>
          <h2
            className="font-display font-black leading-[0.9] tracking-[-0.03em]"
            style={{ fontSize: "clamp(2.75rem, 6vw, 5.5rem)" }}
          >
            Ações que <em className="italic font-semibold text-accent">regeneram.</em>
          </h2>
        </FadeInSection>
        <FadeInSection delay={0.15} className="md:col-span-4 md:col-start-9">
          <p className="text-base text-foreground/70 leading-relaxed font-body">
            Quatro frentes integradas — ambiental, econômica e social — operando como um sistema vivo.
          </p>
        </FadeInSection>
      </div>

      {/* Timeline */}
      <div className="relative">
        <div className="hidden md:block absolute top-12 left-0 right-0 h-px bg-primary/30" />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-px md:gap-0">
          {actions.map((a, i) => (
            <FadeInSection key={a.n} delay={i * 0.1}>
              <div className="relative h-full p-8 md:p-10 md:border-r md:border-primary/20 md:last:border-r-0 group transition-colors hover:bg-card/40">
                <div className="hidden md:flex absolute top-12 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-primary border-2 border-background z-10 rotate-45" />
                <p
                  className="font-display font-black text-primary/30 leading-none mb-6 group-hover:text-accent/50 transition-colors"
                  style={{ fontSize: "clamp(4rem, 7vw, 6rem)" }}
                >
                  {a.n}
                </p>
                <p className="text-[10px] tracking-[0.3em] uppercase text-accent mb-3">{a.tag}</p>
                <h3 className="font-display text-2xl md:text-3xl font-semibold mb-4 leading-tight">{a.title}</h3>
                <p className="text-sm text-foreground/65 leading-relaxed font-body">{a.text}</p>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}
