import { useEffect, useState } from "react";
import logoImg from "@/assets/logo.png";

export function HeroSection() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 leaf-bg">
      {/* Decorative leaves */}
      <svg className="absolute top-10 left-10 w-32 h-32 text-primary/15" viewBox="0 0 100 100" fill="currentColor" aria-hidden>
        <path d="M50 5 C20 25 15 60 50 95 C85 60 80 25 50 5 Z" />
      </svg>
      <svg className="absolute bottom-16 right-12 w-40 h-40 text-accent/15 rotate-45" viewBox="0 0 100 100" fill="currentColor" aria-hidden>
        <path d="M50 5 C20 25 15 60 50 95 C85 60 80 25 50 5 Z" />
      </svg>

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full bg-primary/8 blur-[120px]" />
      </div>

      <div
        className={`relative z-10 text-center max-w-4xl mx-auto transition-all duration-1000 ease-out ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <div
          className={`mb-8 flex justify-center transition-all duration-700 delay-200 ${mounted ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}
        >
          <img src={logoImg} alt="Starroots logo" className="w-36 h-36 md:w-48 md:h-48 drop-shadow-2xl" />
        </div>

        <p className={`text-xs md:text-sm tracking-[0.45em] uppercase text-accent mb-6 font-body transition-opacity duration-500 delay-500 ${mounted ? "opacity-100" : "opacity-0"}`}>
          Rebrand Sustentável
        </p>

        <h1 className="text-6xl md:text-8xl font-bold font-display tracking-tight mb-8 leading-none">
          STAR<span className="text-gradient">ROOTS</span>
        </h1>

        <p className={`text-lg md:text-2xl font-display italic text-foreground/85 max-w-2xl mx-auto leading-relaxed transition-all duration-600 delay-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}>
          "Dos campos de café até o seu copo, a natureza é a prioridade."
        </p>

        <div className="mt-12 flex items-center justify-center gap-4">
          <a
            href="#problema"
            className="group inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-full font-medium tracking-wide hover:bg-accent transition-colors duration-300"
          >
            Conheça o projeto
            <span className="transition-transform group-hover:translate-y-0.5">↓</span>
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground">
        <span className="text-xs tracking-widest uppercase">Explorar</span>
        <div className="w-px h-8 bg-border animate-pulse" />
      </div>
    </section>
  );
}
