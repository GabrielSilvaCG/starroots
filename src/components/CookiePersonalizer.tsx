import { useState } from "react";
import { FadeInSection } from "./FadeInSection";
import { Link } from "@tanstack/react-router";
import comboMockup from "@/assets/combo-mockup.png";

const MAX = 12;

export function CookiePersonalizer() {
  const [name, setName] = useState("");

  const display = name.trim() || "Seu Nome";
  const fontSize = display.length <= 5
    ? "clamp(2rem, 5vw, 3.25rem)"
    : display.length <= 8
      ? "clamp(1.5rem, 4vw, 2.5rem)"
      : "clamp(1.15rem, 3vw, 1.9rem)";

  return (
    <section
      id="personalize"
      className="scroll-anchor px-6 md:px-10 py-32"
      style={{ backgroundColor: "#c8a97e", color: "#0a2e1a" }}
    >
      <div className="max-w-[1100px] mx-auto">
        <FadeInSection className="text-center mb-14">
          <p className="text-[10px] tracking-[0.5em] uppercase opacity-70 mb-6">Personalize</p>
          <h2
            className="font-display font-black leading-[0.9] tracking-[-0.03em] mb-6"
            style={{ fontSize: "clamp(2.5rem, 7vw, 5.5rem)" }}
          >
            Veja como fica<br /><em className="italic">o seu cookie.</em>
          </h2>
          <p className="text-xl md:text-2xl font-display italic opacity-80">
            Digite seu nome e veja a magia acontecer.
          </p>
        </FadeInSection>

        {/* Input */}
        <FadeInSection delay={0.1} className="max-w-md mx-auto mb-16">
          <div className="relative border-b-2 border-[#0a2e1a]">
            <input
              type="text"
              value={name}
              maxLength={MAX}
              onChange={(e) => setName(e.target.value)}
              placeholder="Digite seu nome aqui..."
              className="w-full bg-transparent text-center text-2xl md:text-3xl font-display py-4 pr-14 placeholder:text-[#0a2e1a]/40 focus:outline-none"
              aria-label="Seu nome para o cookie"
            />
            <span className="absolute right-2 bottom-4 text-[11px] tracking-[0.2em] uppercase opacity-60 tabular-nums">
              {name.length}/{MAX}
            </span>
          </div>
        </FadeInSection>

        {/* Cookie mockup */}
        <FadeInSection delay={0.2}>
          <div className="relative aspect-square max-w-[480px] mx-auto">
            <div className="absolute inset-0 bg-[#0a2e1a]/10 blur-3xl" />
            <img
              src={comboMockup}
              alt="Mockup do cookie Starroots personalizado"
              loading="lazy"
              decoding="async"
              width={1200}
              height={1200}
              className="relative w-full h-full object-contain"
            />
            {/* Overlay name on cookie area (centered, slightly below middle) */}
            <div
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
              style={{ paddingTop: "8%" }}
            >
              <span
                key={display}
                className="font-script font-bold text-center px-4 animate-rise"
                style={{
                  color: "#5a3e1b",
                  fontSize,
                  textShadow: "0 1px 0 rgba(255,255,255,0.25)",
                  maxWidth: "60%",
                  wordBreak: "break-word",
                  lineHeight: 1,
                }}
              >
                {display}
              </span>
            </div>
          </div>
        </FadeInSection>

        <FadeInSection delay={0.3} className="text-center mt-16">
          <p className="text-2xl md:text-3xl font-display italic mb-10 opacity-90">
            Cada cookie é único — assim como você.
          </p>
          <Link
            to="/comprar"
            className="group inline-flex items-center gap-5 border-2 border-[#0a2e1a] bg-[#0a2e1a] text-[#c8a97e] px-10 py-6 text-sm tracking-[0.3em] uppercase font-semibold hover:bg-transparent hover:text-[#0a2e1a] transition-colors duration-300"
          >
            Quero o meu — R$12,50
            <span className="w-8 h-px bg-current transition-all group-hover:w-14" />
          </Link>
        </FadeInSection>
      </div>
    </section>
  );
}
