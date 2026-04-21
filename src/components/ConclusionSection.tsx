import { FadeInSection } from "./FadeInSection";

export function ConclusionSection() {
  return (
    <section
      className="relative px-6 md:px-10 py-40 grain-bg leaf-bg"
      style={{ backgroundColor: "#0a2e1a" }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <FadeInSection>
          <div className="w-16 h-px bg-accent mx-auto mb-10" />
          <p className="text-[10px] tracking-[0.5em] uppercase text-accent mb-8">Manifesto</p>
          <h2
            className="font-display font-black leading-[0.92] tracking-[-0.03em] mb-12"
            style={{ fontSize: "clamp(2.5rem, 6vw, 6rem)" }}
          >
            Starroots não é<br />só uma marca.<br />
            <em className="italic font-semibold text-accent">É um movimento.</em>
          </h2>
          <p className="text-xl md:text-2xl font-display italic text-foreground/80 max-w-2xl mx-auto leading-snug">
            "Dos campos de café até o seu copo, a natureza é a prioridade."
          </p>
        </FadeInSection>
      </div>
    </section>
  );
}
