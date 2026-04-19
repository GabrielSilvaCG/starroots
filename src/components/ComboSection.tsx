import { FadeInSection } from "./FadeInSection";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { Coffee, Cookie, Leaf, RefreshCw, Sprout } from "lucide-react";
import comboMockup from "@/assets/combo-mockup.png";

const included = [
  { icon: Coffee, text: "Bebida à sua escolha no copo biodegradável Starroots" },
  { icon: Cookie, text: "Cookie artesanal personalizado com o seu nome" },
  { icon: Sprout, text: "Cada compra financia a logística sustentável da Starroots" },
];

const exclusivity = [
  "Cada cookie é feito na hora com o seu nome",
  "O copo é numerado — nenhum é igual ao outro",
  "Disponível apenas em quantidade limitada por dia",
];

export function ComboSection() {
  return (
    <section id="combo" aria-labelledby="combo-title" className="scroll-anchor">
      {/* 1. Header */}
      <div className="relative px-6 py-24 md:py-32 leaf-bg overflow-hidden">
        <svg className="absolute top-8 right-8 w-40 h-40 text-primary/10 rotate-12" viewBox="0 0 100 100" fill="currentColor" aria-hidden>
          <path d="M50 5 C20 25 15 60 50 95 C85 60 80 25 50 5 Z" />
        </svg>
        <svg className="absolute bottom-8 left-8 w-32 h-32 text-accent/10 -rotate-45" viewBox="0 0 100 100" fill="currentColor" aria-hidden>
          <path d="M50 5 C20 25 15 60 50 95 C85 60 80 25 50 5 Z" />
        </svg>

        <FadeInSection className="relative max-w-5xl mx-auto text-center">
          <p className="text-xs md:text-sm tracking-[0.4em] uppercase text-accent mb-6">
            Lançamento
          </p>
          <h2 id="combo-title" className="text-5xl md:text-7xl font-display font-bold leading-tight mb-6">
            Conheça o <span className="text-gradient">Combo Starroots</span>
          </h2>
          <p className="text-xl md:text-2xl font-display italic text-foreground/80">
            Exclusivo. Sustentável. Com o seu nome.
          </p>
        </FadeInSection>
      </div>

      {/* 2. Apresentação do produto - split layout */}
      <div className="px-6 py-20 md:py-28 bg-card">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <FadeInSection>
            <span className="inline-block text-xs tracking-[0.3em] uppercase text-accent border border-accent/40 px-3 py-1 rounded-full mb-6">
              Edição Exclusiva
            </span>
            <h3 className="text-3xl md:text-5xl font-display font-bold leading-tight mb-6">
              O copo que tem nome.<br />
              <span className="text-gradient">O cookie que é só seu.</span>
            </h3>
            <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
              O Combo Starroots é mais do que uma compra — é uma experiência. Sua bebida vem no copo biodegradável que, após o uso, vira adubo nas plantações de café. E o cookie artesanal? Feito com o seu nome. Porque cada combo é único, assim como você.
            </p>
          </FadeInSection>

          <FadeInSection delay={0.2}>
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 rounded-full bg-primary/15 blur-3xl" />
              <div className="absolute inset-6 rounded-full bg-accent/10 blur-2xl" />
              <img
                src={comboMockup}
                alt="Combo Starroots: sacola kraft com logo e cookie personalizado com o seu nome"
                width={1600}
                height={1600}
                loading="lazy"
                decoding="async"
                className="relative w-full h-full object-contain drop-shadow-2xl"
              />
            </div>
          </FadeInSection>
        </div>
      </div>

      {/* 3. O que está incluso */}
      <div className="px-6 py-20 md:py-24">
        <div className="max-w-6xl mx-auto">
          <FadeInSection className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-display font-bold mb-3">O que está incluso</h3>
            <p className="text-muted-foreground">Tudo pensado para você e para o planeta</p>
          </FadeInSection>

          <div className="grid md:grid-cols-3 gap-6">
            {included.map((item, i) => {
              const Icon = item.icon;
              return (
                <FadeInSection key={item.text} delay={i * 0.15}>
                  <div className="h-full bg-card border border-border rounded-2xl p-8 text-center transition-all duration-300 hover:border-accent/60 hover:-translate-y-1 hover:shadow-xl">
                    <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-accent/15 flex items-center justify-center text-accent">
                      <Icon className="w-7 h-7" />
                    </div>
                    <p className="text-base md:text-lg leading-relaxed text-foreground/90">{item.text}</p>
                  </div>
                </FadeInSection>
              );
            })}
          </div>
        </div>
      </div>

      {/* 4. Preço e CTA */}
      <div className="px-6 py-20 md:py-24 bg-accent text-accent-foreground">
        <FadeInSection className="max-w-2xl mx-auto text-center">
          <p className="text-sm tracking-[0.35em] uppercase mb-3 opacity-80">por apenas</p>
          <p className="text-7xl md:text-9xl font-display font-bold leading-none mb-5">
            R$12,50
          </p>
          <p className="text-lg md:text-xl font-display italic mb-8 opacity-90">
            Um combo que cuida de você e do planeta.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-background text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 px-8 py-6 text-base tracking-wider uppercase shadow-lg hover:shadow-2xl hover:scale-105"
          >
            <Link to="/comprar">Quero meu Combo Starroots</Link>
          </Button>
          <p className="text-xs mt-5 opacity-70 tracking-wider">
            Disponível nas unidades participantes Starroots
          </p>
        </FadeInSection>
      </div>

      {/* 5. Detalhe sustentável - banner */}
      <div className="px-6 py-14 md:py-16 bg-background border-y border-border">
        <FadeInSection className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-5 text-center md:text-left">
          <div className="w-14 h-14 rounded-full bg-primary/15 flex items-center justify-center text-primary shrink-0">
            <RefreshCw className="w-7 h-7" />
          </div>
          <p className="text-xl md:text-2xl font-display italic">
            Seu copo de hoje vira <span className="underline decoration-accent decoration-2 underline-offset-4">o adubo do café de amanhã.</span>
          </p>
        </FadeInSection>
      </div>

      {/* 6. Exclusividade */}
      <div className="px-6 py-20 md:py-28" style={{ background: "#f5f0e8", color: "#0a2e1a" }}>
        <div className="max-w-3xl mx-auto">
          <FadeInSection className="text-center mb-12">
            <h3 className="text-4xl md:text-5xl font-display font-bold mb-4">Por que é exclusivo?</h3>
          </FadeInSection>

          <ul className="space-y-5 mb-12">
            {exclusivity.map((item, i) => (
              <FadeInSection key={item} delay={i * 0.1}>
                <li className="flex items-start gap-4 bg-white/50 rounded-xl p-5 border border-[#0a2e1a]/10">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-[#0a2e1a] text-[#c8a97e] flex items-center justify-center">
                    <Leaf className="w-5 h-5" />
                  </div>
                  <p className="text-base md:text-lg pt-1.5">{item}</p>
                </li>
              </FadeInSection>
            ))}
          </ul>

          <FadeInSection>
            <p className="text-xl md:text-2xl font-display italic text-center" style={{ color: "#c8a97e" }}>
              "Porque sustentabilidade também pode ser especial."
            </p>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
}
