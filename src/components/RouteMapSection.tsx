import { FadeInSection } from "./FadeInSection";
import type { CSSProperties } from "react";

const origins = [
  { num: "01", country: "BRASIL", distance: "1.400 km", co2: "2,1 ton de CO₂ evitadas com frota elétrica" },
  { num: "02", country: "COLÔMBIA", distance: "4.600 km", co2: "6,9 ton de CO₂ evitadas com frota elétrica" },
  { num: "03", country: "ETIÓPIA", distance: "8.200 km", co2: "12,3 ton de CO₂ evitadas com frota elétrica" },
];

function ElectricBolts({ delay = 0 }: { delay?: number }) {
  return (
    <div className="electric-bolts" aria-hidden="true" style={{ "--bolt-delay": `${delay}s` } as CSSProperties}>
      <svg viewBox="0 0 180 180" fill="none">
        <path className="bolt bolt-a" d="M42 34 27 76h24l-16 54 53-70H61l21-26H42Z" />
        <path className="bolt bolt-b" d="m143 28-18 45h22l-33 63 6-47H98l45-61Z" />
        <path className="bolt bolt-c" d="m114 124-10 26h14l-21 30 4-24H87l27-32Z" />
        <path className="energy-line energy-a" d="M16 132C54 104 84 99 119 72c18-14 32-29 45-48" />
        <path className="energy-line energy-b" d="M22 44c35 20 67 29 109 23" />
        <circle className="energy-dot dot-a" cx="0" cy="0" r="3" />
        <circle className="energy-dot dot-b" cx="0" cy="0" r="2.3" />
      </svg>
    </div>
  );
}

export function RouteMapSection() {
  return (
    <section
      className="px-6 md:px-10 py-24 md:py-32"
      style={{ backgroundColor: "#0a2e1a" }}
    >
      <div className="max-w-[1400px] mx-auto">
        <FadeInSection>
          <div className="text-center mb-20">
            <p className="text-xs tracking-[0.42em] uppercase text-primary/60 mb-6">
              Rota Sustentável
            </p>
            <h2 className="font-display text-6xl md:text-8xl text-foreground mb-6 leading-[0.9]">
              De onde vem o seu café.
            </h2>
            <p className="font-display italic text-2xl md:text-4xl text-primary/80 max-w-3xl mx-auto">
              E como a Starroots está mudando o caminho.
            </p>
          </div>
        </FadeInSection>

        <div className="electric-route flex flex-col lg:flex-row items-stretch justify-between gap-4 lg:gap-2">
          {origins.map((o, i) => (
            <div
              key={o.num}
              className="flex flex-col lg:flex-row items-stretch lg:items-center gap-4 lg:gap-2 flex-1"
            >
              <FadeInSection delay={i * 0.15} variant="up" className="flex-1">
                <div className="card-lift sheen-on-hover route-card relative border border-primary/20 p-8 md:p-10 bg-background h-full flex flex-col justify-between min-h-[320px]">
                  <ElectricBolts delay={i * 0.45} />
                  <div
                    className="font-display text-7xl md:text-8xl leading-none mb-4 transition-all duration-500"
                    style={{ color: "rgba(168, 213, 181, 0.18)" }}
                  >
                    {o.num}
                  </div>
                  <div>
                    <h3 className="font-display text-[2.8rem] md:text-[3.35rem] text-foreground mb-4 tracking-wide leading-none">
                      {o.country}
                    </h3>
                    <p className="text-[2.35rem] md:text-[2.9rem] font-display text-primary mb-6 leading-none">
                      {o.distance}
                    </p>
                    <div className="w-full h-px bg-primary/20 mb-4" />
                    <p className="text-base md:text-lg tracking-wider uppercase text-foreground/75 leading-relaxed">
                      {o.co2}
                    </p>
                  </div>
                </div>
              </FadeInSection>

              <div
                className="text-primary text-3xl font-light px-2 self-center rotate-90 lg:rotate-0 flex items-center gap-2"
                aria-hidden="true"
              >
                <span className="hidden lg:inline-block w-2 h-2 rounded-full bg-accent animate-soft-pulse" />
                →
                <span className="hidden lg:inline-block w-2 h-2 rounded-full bg-accent animate-soft-pulse" style={{ animationDelay: "1.2s" }} />
              </div>
            </div>
          ))}

          <FadeInSection delay={0.6} className="flex-shrink-0 self-stretch lg:self-auto">
            <div className="route-card border border-primary/40 bg-primary/5 px-6 py-8 flex flex-col items-center justify-center text-center min-w-[160px] h-full min-h-[320px]">
              <ElectricBolts delay={1.3} />
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="mb-3 text-primary"
                aria-hidden="true"
              >
                <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8z" />
              </svg>
              <p className="text-xs tracking-[0.32em] uppercase text-primary">
                Starroots
              </p>
              <p className="font-display text-4xl text-foreground mt-1">SP</p>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
}
