import { FadeInSection } from "./FadeInSection";
import logoImg from "@/assets/logo.png";

export function SolutionSection() {
  return (
    <section id="solucao" className="scroll-anchor relative px-6 py-24 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <FadeInSection>
          <p className="text-xs tracking-[0.3em] uppercase text-accent mb-3">A Solução</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
            A mesma essência.<br />
            <span className="text-gradient italic">Novas raízes.</span>
          </h2>
          <p className="text-lg text-foreground/80 leading-relaxed mb-6">
            <strong className="font-semibold">Starroots</strong> mantém a alma do café que você conhece —
            mas planta novas bases. <em className="text-accent">Roots</em> são raízes, origem, natureza:
            o ponto onde a marca se reconecta com a terra.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Uma identidade que cresce a partir do que sustenta o produto: o solo, as plantações,
            as comunidades. Cada elemento — da sereia coroada de folhas às embalagens kraft — fala
            essa mesma língua.
          </p>
        </FadeInSection>

        <FadeInSection delay={0.2}>
          <div className="relative aspect-square max-w-md mx-auto">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 blur-3xl" />
            <div className="relative h-full flex items-center justify-center">
              <img src={logoImg} alt="Logo Starroots" className="w-3/4 drop-shadow-2xl" />
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
