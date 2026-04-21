import { FadeInSection } from "./FadeInSection";
import { Link } from "@tanstack/react-router";
import comboMockup from "@/assets/combo-mockup.png";

const included = [
  { n: "01", title: "Bebida", text: "À sua escolha, no copo biodegradável Starroots." },
  { n: "02", title: "Cookie", text: "Artesanal, feito na hora, com o seu nome." },
  { n: "03", title: "Impacto", text: "Cada compra financia a logística sustentável." },
];

const exclusivity = [
  "Cada cookie é feito na hora com o seu nome",
  "O copo é numerado — nenhum é igual ao outro",
  "Disponível apenas em quantidade limitada por dia",
];

export function ComboSection() {
  return (
    <section id="combo" aria-labelledby="combo-title" className="scroll-anchor">
      {/* HEADER — kraft */}
      <div
        className="relative px-6 md:px-10 py-32 md:py-40 overflow-hidden"
        style={{ backgroundColor: "#c8a97e", color: "#0a2e1a" }}
      >
        <div className="max-w-[1400px] mx-auto">
          <FadeInSection>
            <p className="text-[10px] tracking-[0.5em] uppercase mb-8 opacity-70">Capítulo 04 — Lançamento</p>
            <h2
              id="combo-title"
              className="font-display font-black leading-[0.85] tracking-[-0.03em] mb-10"
              style={{ fontSize: "clamp(3rem, 9vw, 8rem)" }}
            >
              Conheça o<br />
              <em className="italic font-semibold">Combo Starroots.</em>
            </h2>
            <p className="text-xl md:text-3xl font-display italic max-w-3xl">
              Exclusivo. Sustentável. Com o seu nome.
            </p>
          </FadeInSection>
        </div>
      </div>

      {/* Split apresentação */}
      <div className="px-6 md:px-10 py-28" style={{ backgroundColor: "#1a3d2b" }}>
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-12 gap-12 md:gap-16 items-center">
          <FadeInSection className="md:col-span-6">
            <p className="text-[10px] tracking-[0.4em] uppercase text-accent mb-6">Edição limitada</p>
            <h3
              className="font-display font-black leading-[0.92] tracking-[-0.02em] mb-8"
              style={{ fontSize: "clamp(text-6xl md:text-8xl)" }}
            >
              O copo que tem nome.<br />
              <em className="italic font-semibold text-accent">O cookie que é só seu.</em>
            </h3>
            <p className="text-base md:text-lg text-foreground/80 leading-relaxed font-body max-w-xl">
              O Combo Starroots é mais do que uma compra — é uma experiência. Sua bebida vem no copo
              biodegradável que, após o uso, vira adubo nas plantações de café. E o cookie artesanal?
              Feito com o seu nome.
            </p>
          </FadeInSection>

          <FadeInSection delay={0.2} className="md:col-span-6">
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-primary/15 blur-3xl" />
              <div className="absolute inset-6 bg-accent/10 blur-2xl" />
              <img
                src={comboMockup}
                alt="Combo Starroots: sacola kraft com logo e cookie personalizado"
                width={1600}
                height={1600}
                loading="lazy"
                decoding="async"
                className="relative w-full h-full object-contain"
              />
            </div>
          </FadeInSection>
        </div>
      </div>

      {/* O que está incluso — cards numerados */}
      <div className="px-6 md:px-10 py-28 bg-background">
        <div className="max-w-[1400px] mx-auto">
          <FadeInSection className="mb-14">
            <p className="text-[10px] tracking-[0.4em] uppercase text-accent mb-4">O que está incluso</p>
            <h3 className="font-display font-bold text-3xl md:text-5xl tracking-[-0.02em]">
              Três elementos. <em className="italic text-accent">Um propósito.</em>
            </h3>
          </FadeInSection>

          <div className="grid md:grid-cols-3 gap-px bg-border/40">
            {included.map((item, i) => (
              <FadeInSection key={item.n} delay={i * 0.1} className="bg-background">
                <div className="h-full p-8 md:p-10 top-rule">
                  <p className="font-display font-black text-6xl md:text-7xl text-primary/40 leading-none mb-6">
                    {item.n}
                  </p>
                  <h4 className="font-display text-2xl md:text-3xl font-semibold mb-3">{item.title}</h4>
                  <p className="text-sm text-foreground/65 leading-relaxed font-body">{item.text}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </div>

      {/* PREÇO + CTA — kraft */}
      <div className="px-6 md:px-10 py-32 md:py-40" style={{ backgroundColor: "#c8a97e", color: "#0a2e1a" }}>
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-12 gap-10 items-center">
          <FadeInSection className="md:col-span-7">
            <p className="text-[10px] tracking-[0.5em] uppercase mb-6 opacity-70">Por apenas</p>
            <p
              className="font-display font-black leading-[0.8] tracking-[-0.05em]"
              style={{ fontSize: "clamp(4rem, 10vw, 9rem)" }}
            >
              R$12,50
            </p>
          </FadeInSection>
          <FadeInSection delay={0.15} className="md:col-span-5">
            <p className="text-2xl md:text-3xl font-display italic mb-10 leading-snug">
              Um combo que cuida de você e do planeta.
            </p>
            <Link
              to="/comprar"
              className="group inline-flex items-center gap-5 border-2 border-[#0a2e1a] px-10 py-6 text-sm tracking-[0.3em] uppercase font-semibold bg-[#0a2e1a] text-[#c8a97e] hover:bg-transparent hover:text-[#0a2e1a] transition-colors duration-300"
            >
              Quero meu combo
              <span className="w-8 h-px bg-current transition-all group-hover:w-14" />
            </Link>
            <p className="text-[10px] tracking-[0.3em] uppercase mt-6 opacity-60">
              Disponível nas unidades participantes
            </p>
          </FadeInSection>
        </div>
      </div>

      {/* Banner — circularidade */}
      <div className="px-6 md:px-10 py-20" style={{ backgroundColor: "#1a3d2b" }}>
        <FadeInSection className="max-w-[1100px] mx-auto text-center">
          <p className="text-[10px] tracking-[0.4em] uppercase text-accent mb-6">Economia circular</p>
          <p className="text-2xl md:text-4xl font-display italic leading-snug">
            Seu copo de hoje vira{" "}
            <span className="not-italic font-semibold text-accent">o adubo do café de amanhã.</span>
          </p>
        </FadeInSection>
      </div>

      {/* Exclusividade */}
      <div className="px-6 md:px-10 py-32" style={{ backgroundColor: "#f5f0e8", color: "#0a2e1a" }}>
        <div className="max-w-[1100px] mx-auto">
          <FadeInSection className="mb-16">
            <p className="text-[10px] tracking-[0.4em] uppercase opacity-60 mb-6">Por que é exclusivo</p>
            <h3
              className="font-display font-black leading-[0.9] tracking-[-0.02em]"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
            >
              Único. <em className="italic">Numerado.</em><br />Limitado.
            </h3>
          </FadeInSection>

          <ul className="divide-y divide-[#0a2e1a]/20 mb-16">
            {exclusivity.map((item, i) => (
              <FadeInSection key={item} delay={i * 0.08}>
                <li className="flex items-start gap-8 py-6">
                  <span className="font-display font-bold text-2xl md:text-3xl tabular-nums opacity-50 shrink-0 w-12">
                    0{i + 1}
                  </span>
                  <p className="text-lg md:text-2xl font-display leading-snug pt-1">{item}</p>
                </li>
              </FadeInSection>
            ))}
          </ul>

          <FadeInSection>
            <p
              className="text-2xl md:text-3xl font-display italic text-center"
              style={{ color: "#8a6a3e" }}
            >
              "Porque sustentabilidade também pode ser especial."
            </p>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
}
