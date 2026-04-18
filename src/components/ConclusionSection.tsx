import { FadeInSection } from "./FadeInSection";

export function ConclusionSection() {
  return (
    <section className="relative px-6 py-32 max-w-5xl mx-auto text-center leaf-bg">
      <FadeInSection>
        <p className="text-xs tracking-[0.4em] uppercase text-accent mb-6">Manifesto</p>
        <h2 className="text-4xl md:text-6xl font-display font-bold leading-tight mb-8">
          Starroots não é só uma marca.<br />
          <span className="text-gradient italic">É um movimento.</span>
        </h2>
        <p className="text-lg md:text-xl font-display italic text-foreground/80 max-w-2xl mx-auto">
          "Dos campos de café até o seu copo, a natureza é a prioridade."
        </p>
      </FadeInSection>
    </section>
  );
}
