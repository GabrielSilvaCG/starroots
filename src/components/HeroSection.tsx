import { useEffect, useState } from "react";
import logoImg from "@/assets/logo.png";

export function HeroSection() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full bg-primary/8 blur-[120px]" />
      </div>

      <div
        className={`relative z-10 text-center max-w-4xl mx-auto transition-all duration-1000 ease-out ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <div
          className={`mb-8 flex justify-center transition-all duration-700 delay-200 ${mounted ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}
        >
          <img src={logoImg} alt="Starroots logo" className="w-40 h-40 md:w-52 md:h-52 drop-shadow-2xl" />
        </div>

        <p
          className={`text-sm tracking-[0.35em] uppercase text-muted-foreground mb-4 font-body transition-opacity duration-500 delay-500 ${mounted ? "opacity-100" : "opacity-0"}`}
        >
          Projeto de Rebrand
        </p>

        <h1 className="text-6xl md:text-8xl font-bold font-display tracking-tight mb-6">
          Star<span className="text-gradient">roots</span>
        </h1>

        <p
          className={`text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-light transition-all duration-600 delay-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}
        >
          Dos campos de café até o seu copo, a natureza é a prioridade.
          Uma nova identidade visual que conecta sustentabilidade e experiência.
        </p>

        <div className="mt-12 flex items-center justify-center gap-3 text-sm text-muted-foreground">
          <span className="w-8 h-px bg-border" />
          <span className="tracking-widest uppercase text-xs">@starroots</span>
          <span className="w-8 h-px bg-border" />
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground">
        <span className="text-xs tracking-widest uppercase">Explorar</span>
        <div className="w-px h-8 bg-border animate-pulse" />
      </div>
    </section>
  );
}
