import { FadeInSection } from "./FadeInSection";

const origins = [
  { num: "01", country: "BRASIL", distance: "1.400 km", co2: "2,1 ton de CO₂ evitadas com frota elétrica" },
  { num: "02", country: "COLÔMBIA", distance: "4.600 km", co2: "6,9 ton de CO₂ evitadas com frota elétrica" },
  { num: "03", country: "ETIÓPIA", distance: "8.200 km", co2: "12,3 ton de CO₂ evitadas com frota elétrica" },
];

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
              <FadeInSection delay={i * 0.15} className="flex-1">
                <div className="relative border border-[#a8d5b5]/20 p-8 md:p-10 bg-[#0a2e1a] h-full flex flex-col justify-between min-h-[320px]">
                  <div
                    className="font-display text-7xl md:text-8xl leading-none mb-4"
                    style={{ color: "rgba(168, 213, 181, 0.18)" }}
                  >
                    {o.num}
                  </div>
                  <div>
                    <h3 className="font-display text-3xl md:text-4xl text-foreground mb-4 tracking-wide">
                      {o.country}
                    </h3>
                    <p className="text-2xl md:text-3xl font-display text-[#a8d5b5] mb-6">
                      {o.distance}
                    </p>
                    <div className="w-full h-px bg-[#a8d5b5]/20 mb-4" />
                    <p className="text-xs tracking-wider uppercase text-foreground/60 leading-relaxed">
                      {o.co2}
                    </p>
                  </div>
                </div>
              </FadeInSection>

              <div
                className="text-[#a8d5b5] text-3xl font-light px-2 self-center rotate-90 lg:rotate-0"
                aria-hidden="true"
              >
                →
              </div>
            </div>
          ))}

          <FadeInSection delay={0.6} className="flex-shrink-0 self-stretch lg:self-auto">
            <div className="border border-[#a8d5b5]/40 bg-[#a8d5b5]/5 px-6 py-8 flex flex-col items-center justify-center text-center min-w-[160px] h-full min-h-[320px]">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#a8d5b5"
                strokeWidth="1.5"
                className="mb-3"
                aria-hidden="true"
              >
                <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8z" />
              </svg>
              <p className="text-[10px] tracking-[0.3em] uppercase text-[#a8d5b5]">
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
