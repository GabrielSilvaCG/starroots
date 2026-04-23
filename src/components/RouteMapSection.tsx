import { useState } from "react";
import { FadeInSection } from "./FadeInSection";

type Origin = {
  id: string;
  name: string;
  distance: string;
  co2: string;
  // SVG coordinates (viewBox 0 0 1000 500)
  x: number;
  y: number;
};

const SAO_PAULO = { x: 360, y: 320, name: "São Paulo" };

const ORIGINS: Origin[] = [
  { id: "br", name: "Brasil", distance: "1.400 km", co2: "2,1", x: 380, y: 295 },
  { id: "co", name: "Colômbia", distance: "4.600 km", co2: "6,9", x: 305, y: 240 },
  { id: "et", name: "Etiópia", distance: "8.200 km", co2: "12,3", x: 605, y: 245 },
];

export function RouteMapSection() {
  const [hovered, setHovered] = useState<Origin | null>(null);

  return (
    <section
      className="relative px-6 md:px-10 py-32 md:py-40 overflow-hidden"
      style={{ backgroundColor: "#0a2e1a" }}
    >
      <div className="max-w-[1400px] mx-auto">
        <FadeInSection>
          <div className="flex items-center gap-4 mb-12">
            <span className="text-[10px] tracking-[0.4em] uppercase text-accent/70">
              06 — Logística Verde
            </span>
            <div className="h-px flex-1 bg-accent/20" />
          </div>
        </FadeInSection>

        <div className="grid md:grid-cols-12 gap-8 mb-16 md:mb-20">
          <FadeInSection className="md:col-span-7">
            <h2
              className="font-display leading-[0.95] tracking-tight text-foreground"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5.5rem)" }}
            >
              De onde vem<br />
              <em className="font-light italic text-accent">o seu café.</em>
            </h2>
          </FadeInSection>
          <FadeInSection className="md:col-span-5 flex md:items-end" delay={0.15}>
            <p className="text-lg md:text-xl text-foreground/70 leading-relaxed max-w-md">
              E como a Starroots está mudando o caminho — da fazenda ao copo,
              com frota 100% elétrica.
            </p>
          </FadeInSection>
        </div>

        <FadeInSection delay={0.2}>
          <div className="relative rounded-2xl border border-accent/15 bg-black/20 backdrop-blur-sm p-4 md:p-8">
            <div className="relative w-full" style={{ aspectRatio: "1000 / 500" }}>
              <svg
                viewBox="0 0 1000 500"
                className="w-full h-full"
                style={{ display: "block" }}
              >
                <defs>
                  <radialGradient id="pulseGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#a8d5b5" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#a8d5b5" stopOpacity="0" />
                  </radialGradient>
                  <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="2" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* Stylized continents — minimalist outlines */}
                <g
                  fill="#0a2e1a"
                  stroke="#a8d5b5"
                  strokeWidth="0.8"
                  strokeLinejoin="round"
                  opacity="0.85"
                >
                  {/* North America */}
                  <path d="M 130 110 L 200 95 L 270 105 L 295 145 L 285 185 L 250 215 L 220 220 L 200 200 L 175 195 L 150 175 L 135 150 Z" />
                  {/* Central America */}
                  <path d="M 250 220 L 280 235 L 290 255 L 275 265 L 260 250 Z" />
                  {/* South America */}
                  <path d="M 310 260 L 360 255 L 395 285 L 405 335 L 385 385 L 355 410 L 335 395 L 320 360 L 305 320 L 300 285 Z" />
                  {/* Europe */}
                  <path d="M 480 130 L 540 120 L 580 135 L 595 165 L 570 185 L 530 190 L 495 175 L 475 155 Z" />
                  {/* Africa */}
                  <path d="M 510 210 L 570 205 L 620 230 L 640 280 L 625 340 L 595 380 L 565 385 L 540 360 L 520 320 L 505 270 Z" />
                  {/* Asia */}
                  <path d="M 600 110 L 720 100 L 820 125 L 870 155 L 880 200 L 845 230 L 790 235 L 740 220 L 690 210 L 645 195 L 615 170 Z" />
                  {/* India */}
                  <path d="M 720 220 L 750 225 L 760 260 L 740 285 L 720 270 Z" />
                  {/* Southeast Asia / Indonesia */}
                  <path d="M 815 255 L 855 250 L 880 270 L 870 290 L 830 290 L 810 275 Z" />
                  {/* Australia */}
                  <path d="M 830 340 L 890 335 L 920 360 L 905 390 L 860 395 L 830 375 Z" />
                </g>

                {/* Routes — dashed lines with traveling light points */}
                {ORIGINS.map((origin, i) => {
                  // Curved path from origin to São Paulo
                  const dx = SAO_PAULO.x - origin.x;
                  const dy = SAO_PAULO.y - origin.y;
                  const mx = (origin.x + SAO_PAULO.x) / 2;
                  const my = (origin.y + SAO_PAULO.y) / 2 - Math.abs(dx) * 0.15 - 20;
                  const path = `M ${origin.x} ${origin.y} Q ${mx} ${my} ${SAO_PAULO.x} ${SAO_PAULO.y}`;
                  const pathId = `route-${origin.id}`;
                  const isActive = hovered?.id === origin.id;

                  return (
                    <g key={origin.id}>
                      <path
                        id={pathId}
                        d={path}
                        fill="none"
                        stroke="#a8d5b5"
                        strokeWidth={isActive ? "1.5" : "1"}
                        strokeDasharray="4 4"
                        strokeOpacity={isActive ? "0.9" : "0.45"}
                        style={{ transition: "all 0.3s ease" }}
                      />
                      {/* Traveling light */}
                      <circle r="3" fill="#ffffff" filter="url(#softGlow)">
                        <animateMotion
                          dur={`${4 + i * 0.5}s`}
                          repeatCount="indefinite"
                          path={path}
                        />
                        <animate
                          attributeName="opacity"
                          values="0;1;1;0"
                          dur={`${4 + i * 0.5}s`}
                          repeatCount="indefinite"
                        />
                      </circle>
                    </g>
                  );
                })}

                {/* São Paulo — Starroots store */}
                <g>
                  <circle
                    cx={SAO_PAULO.x}
                    cy={SAO_PAULO.y}
                    r="14"
                    fill="url(#pulseGlow)"
                  >
                    <animate
                      attributeName="r"
                      values="10;20;10"
                      dur="2.5s"
                      repeatCount="indefinite"
                    />
                  </circle>
                  <circle
                    cx={SAO_PAULO.x}
                    cy={SAO_PAULO.y}
                    r="5"
                    fill="#a8d5b5"
                    stroke="#ffffff"
                    strokeWidth="1.5"
                  />
                  <text
                    x={SAO_PAULO.x + 10}
                    y={SAO_PAULO.y + 18}
                    fill="#a8d5b5"
                    fontSize="9"
                    fontFamily="serif"
                    fontStyle="italic"
                    letterSpacing="2"
                  >
                    STARROOTS · SP
                  </text>
                </g>

                {/* Origin points */}
                {ORIGINS.map((origin) => {
                  const isActive = hovered?.id === origin.id;
                  return (
                    <g
                      key={origin.id}
                      style={{ cursor: "pointer" }}
                      onMouseEnter={() => setHovered(origin)}
                      onMouseLeave={() => setHovered(null)}
                    >
                      {/* Hit area */}
                      <circle
                        cx={origin.x}
                        cy={origin.y}
                        r="20"
                        fill="transparent"
                      />
                      <circle
                        cx={origin.x}
                        cy={origin.y}
                        r={isActive ? "16" : "12"}
                        fill="url(#pulseGlow)"
                        style={{ transition: "all 0.3s ease" }}
                      >
                        <animate
                          attributeName="opacity"
                          values="0.4;1;0.4"
                          dur="2s"
                          repeatCount="indefinite"
                        />
                      </circle>
                      <circle
                        cx={origin.x}
                        cy={origin.y}
                        r={isActive ? "5" : "4"}
                        fill="#ffffff"
                        stroke="#a8d5b5"
                        strokeWidth="1.5"
                        style={{ transition: "all 0.3s ease" }}
                      />
                      <text
                        x={origin.x}
                        y={origin.y - 12}
                        fill="#a8d5b5"
                        fontSize="9"
                        fontFamily="serif"
                        textAnchor="middle"
                        letterSpacing="1.5"
                      >
                        {origin.name.toUpperCase()}
                      </text>
                    </g>
                  );
                })}
              </svg>

              {/* Tooltip */}
              {hovered && (
                <div
                  className="absolute pointer-events-none z-10 transition-opacity duration-200"
                  style={{
                    left: `${(hovered.x / 1000) * 100}%`,
                    top: `${(hovered.y / 500) * 100}%`,
                    transform: "translate(-50%, calc(-100% - 24px))",
                  }}
                >
                  <div
                    className="rounded-lg border border-accent/40 px-5 py-4 shadow-2xl whitespace-nowrap"
                    style={{ backgroundColor: "rgba(10, 46, 26, 0.95)", backdropFilter: "blur(8px)" }}
                  >
                    <div className="text-[9px] tracking-[0.3em] uppercase text-accent/70 mb-1">
                      Origem
                    </div>
                    <div className="font-display text-2xl text-foreground mb-2">
                      {hovered.name}
                    </div>
                    <div className="flex items-center gap-3 text-xs text-foreground/80 mb-2">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 2 L19 21 L12 17 L5 21 Z" />
                      </svg>
                      <span>{hovered.distance} até São Paulo</span>
                    </div>
                    <div className="text-xs text-accent leading-snug max-w-[220px] whitespace-normal">
                      <span className="font-display italic text-base">{hovered.co2}t</span>
                      {" "}de CO₂ evitadas com frota elétrica
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Legend */}
            <div className="mt-8 flex flex-wrap gap-6 text-[10px] tracking-[0.3em] uppercase text-foreground/50">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent" />
                Origem do café
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full border border-accent" />
                Loja Starroots
              </div>
              <div className="flex items-center gap-2">
                <span className="w-6 h-px border-t border-dashed border-accent" />
                Rota de entrega elétrica
              </div>
            </div>
          </div>
        </FadeInSection>

        <FadeInSection delay={0.3}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {ORIGINS.map((o) => (
              <div
                key={o.id}
                className="border-l-2 border-accent/40 pl-5 py-2"
              >
                <div className="text-[10px] tracking-[0.3em] uppercase text-accent/70 mb-2">
                  {o.name}
                </div>
                <div className="font-display text-3xl text-foreground mb-1">
                  {o.co2}<span className="text-accent text-xl">t</span>
                </div>
                <div className="text-xs text-foreground/60">
                  CO₂ evitadas · {o.distance}
                </div>
              </div>
            ))}
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
