import { FadeInSection } from "./FadeInSection";

const origins = [
  { num: "01", country: "BRASIL", distance: "1.400 km", co2: "2,1 ton de CO₂ evitadas com frota elétrica" },
  { num: "02", country: "COLÔMBIA", distance: "4.600 km", co2: "6,9 ton de CO₂ evitadas com frota elétrica" },
  { num: "03", country: "ETIÓPIA", distance: "8.200 km", co2: "12,3 ton de CO₂ evitadas com frota elétrica" },
];

function ElectricBolts({ delay = 0 }: { delay?: number }) {
  return (
    <div className="electric-bolts" aria-hidden="true" style={{ "--bolt-delay": `${delay}s` } as React.CSSProperties}>
      <svg viewBox="0 0 180 180" fill="none">
        <path className="bolt bolt-a" d="M42 34 27 76h24l-16 54 53-70H61l21-26H42Z" />
        <path className="bolt bolt-b" d="m143 28-18 45h22l-33 63 6-47H98l45-61Z" />
        <path className="bolt bolt-c" d="m114 124-10 26h14l-21 30 4-24H87l27-32Z" />
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
            <p className="text-[10px] tracking-[0.4em] uppercase text-[#a8d5b5]/60 mb-6">
              Rota Sustentável
            </p>
            <h2 className="font-display text-5xl md:text-7xl text-foreground mb-6 leading-[0.95]">
              De onde vem o seu café.
            </h2>
            <p className="font-display italic text-xl md:text-2xl text-[#a8d5b5]/80 max-w-2xl mx-auto">
              E como a Starroots está mudando o caminho.
            </p>
          </div>
        </FadeInSection>

        <div className="flex flex-col lg:flex-row items-stretch justify-between gap-4 lg:gap-2">
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
                    <h3 className="font-display text-4xl md:text-[2.65rem] text-foreground mb-4 tracking-wide">
                      {o.country}
                    </h3>
                    <p className="text-3xl md:text-[2.2rem] font-display text-primary mb-6">
                      {o.distance}
                    </p>
                    <div className="w-full h-px bg-primary/20 mb-4" />
                    <p className="text-sm tracking-wider uppercase text-foreground/65 leading-relaxed">
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
              <p className="text-[10px] tracking-[0.3em] uppercase text-primary">
                Starroots
              </p>
              <p className="font-display text-2xl text-foreground mt-1">SP</p>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
}
