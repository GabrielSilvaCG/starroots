import { useEffect, useState } from "react";
import logo from "@/assets/logo.png";

const TITLE = "STARROOTS";

export function HeroSection() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-between overflow-hidden grain-bg leaf-bg pt-28 pb-10 px-6 md:px-10">
      {/* top meta bar */}
      <div className="relative z-10 max-w-[1400px] w-full mx-auto flex items-center justify-between text-[10px] tracking-[0.35em] uppercase text-foreground/60">
        <span>Edição 01 — Rebrand</span>
        <span className="hidden md:inline">2025 / Manifesto Verde</span>
      </div>

      {/* title block */}
      <div className="relative z-10 max-w-[1400px] w-full mx-auto flex-1 flex flex-col items-center justify-center text-center">
        <img
          src={logo}
          alt="Starroots"
          className={`w-32 md:w-44 h-auto mb-8 transition-all duration-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}
        />

        <p
          className={`text-[10px] md:text-xs tracking-[0.5em] uppercase text-accent mb-6 transition-opacity duration-700 ${mounted ? "opacity-100" : "opacity-0"}`}
        >
          Rebrand Sustentável — Capítulo 01
        </p>

        <h1
          className="font-display font-black leading-[0.9] tracking-[-0.03em] text-foreground"
          style={{ fontSize: "clamp(2.5rem, 7vw, 6rem)" }}
        >
          {TITLE.split("").map((char, i) => (
            <span
              key={i}
              className={mounted ? "animate-letter" : "opacity-0"}
              style={{ animationDelay: `${i * 60}ms` }}
            >
              {char}
            </span>
          ))}
        </h1>

        <div className="mt-10 md:mt-14 flex flex-col items-center gap-8 max-w-3xl">
          <p
            className={`text-xl md:text-3xl font-display italic leading-snug text-foreground/90 transition-all duration-1000 delay-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}
          >
            "Dos campos de café até o seu copo,<br />a natureza é a prioridade."
          </p>
          <a
            href="#problema"
            className="inline-flex items-center gap-4 text-[11px] tracking-[0.4em] uppercase text-foreground/80 hover:text-accent transition-colors group"
          >
            <span className="w-12 h-px bg-current transition-all group-hover:w-20" />
            Comece a leitura
          </a>
        </div>
      </div>

      {/* footer scroll cue */}
      <div className="relative z-10 max-w-[1400px] w-full mx-auto flex items-end justify-between text-[10px] tracking-[0.35em] uppercase text-foreground/60">
        <span>Role para baixo</span>
        <span className="hidden md:inline">07 capítulos</span>
      </div>
    </section>
  );
}
