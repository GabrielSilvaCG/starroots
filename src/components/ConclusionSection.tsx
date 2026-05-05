import { FadeInSection } from "./FadeInSection";
import { FloatingLeaves } from "./FloatingLeaves";
import { useLanguage } from "@/store/useLanguage";

export function ConclusionSection() {
  const { t } = useLanguage();
  const MARQUEE_WORDS = [
    t('marquee.roots'), t('marquee.sustainability'), t('marquee.composting'), t('marquee.cleanEnergy'),
    t('marquee.community'), t('marquee.responsibleCoffee'), t('marquee.origin'), t('marquee.electricFleet'),
  ];

  return (
    <section
      className="relative px-6 md:px-10 py-40 grain-bg leaf-bg overflow-hidden"
      style={{ backgroundColor: "#0a2e1a" }}
    >
      <FloatingLeaves />

      {/* Glow drifting */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-accent/10 blur-3xl animate-drift pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <FadeInSection variant="blur">
          <div className="w-16 h-px bg-accent mx-auto mb-10 animate-soft-pulse" />
          <p className="text-[10px] tracking-[0.5em] uppercase text-accent mb-8">Manifesto</p>
          <h2
            className="font-display font-black leading-[0.92] tracking-[-0.03em] mb-12"
            style={{ fontSize: "clamp(2.5rem, 6vw, 6rem)" }}
          >
            Starroots não é<br />só uma marca.<br />
            <em className="italic font-semibold text-accent">É um movimento.</em>
          </h2>
          <p className="text-xl md:text-2xl font-display italic text-foreground/80 max-w-2xl mx-auto leading-snug">
            {t('footer.tagline')}
          </p>
        </FadeInSection>
      </div>

      {/* Marquee de palavras-chave */}
      <div className="relative z-10 mt-24 overflow-hidden border-y border-accent/20 py-6">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...MARQUEE_WORDS, ...MARQUEE_WORDS].map((w, i) => (
            <span
              key={i}
              className="font-display italic text-2xl md:text-4xl text-foreground/40 px-8 flex items-center gap-8"
            >
              {w}
              <span className="text-accent/60" aria-hidden="true">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
