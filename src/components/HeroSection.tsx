import { useEffect, useState } from "react";
import logo from "@/assets/logo.png";
import { FloatingLeaves } from "./FloatingLeaves";
import { MagneticLink } from "./MagneticLink";
import { useLanguage } from "@/store/useLanguage";

const TITLE = "STARROOTS";

export function HeroSection() {
  const { t } = useLanguage();
  const [mounted, setMounted] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Parallax sutil — limita o deslocamento para evitar layout shift
  const heroParallax = Math.min(scrollY * 0.25, 120);
  const logoParallax = Math.min(scrollY * 0.15, 60);

  return (
    <section className="relative min-h-screen flex flex-col justify-between overflow-hidden grain-bg leaf-bg pt-28 pb-10 px-6 md:px-10">
      {/* Folhas flutuantes de atmosfera */}
      <FloatingLeaves />

      {/* Glows decorativos com drift suave */}
      <div
        className="absolute top-1/4 -left-20 w-[420px] h-[420px] rounded-full bg-primary/20 blur-3xl animate-drift pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 -right-20 w-[380px] h-[380px] rounded-full bg-accent/15 blur-3xl animate-drift pointer-events-none"
        style={{ animationDelay: "-7s" }}
        aria-hidden="true"
      />

      {/* top meta bar */}
      <div className="relative z-10 max-w-[1400px] w-full mx-auto flex items-center justify-between text-[10px] tracking-[0.35em] uppercase text-foreground/60">
        <span>Edição 01 — {t('nav.identidade')}</span>
        <span className="hidden md:inline">2025 / Manifesto Verde</span>
      </div>

      {/* title block */}
      <div
        className="relative z-10 max-w-[1400px] w-full mx-auto flex-1 flex flex-col items-center justify-center text-center"
        style={{ transform: `translateY(${-heroParallax * 0.3}px)` }}
      >
        <img
          src={logo}
          alt="Starroots"
          className={`w-32 md:w-44 h-auto mb-8 transition-all duration-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}
          style={{ transform: `translateY(${-logoParallax}px)` }}
        />

        <p
          className={`text-[10px] md:text-xs tracking-[0.5em] uppercase text-accent mb-6 transition-opacity duration-700 ${mounted ? "opacity-100" : "opacity-0"}`}
        >
          {t('hero.rebrand')} — Capítulo 01
        </p>

        <h1
          className="font-display font-black leading-[0.9] tracking-[-0.03em] text-foreground"
          style={{ fontSize: "clamp(2.5rem, 7vw, 6rem)" }}
        >
          {TITLE.split("").map((char, i) => (
            <span
              key={i}
              className={mounted ? "animate-letter inline-block" : "opacity-0"}
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
            {t('hero.tagline').split('\n').map((line, i) => (
              <span key={i}>{line}{i === 0 && <br />}</span>
            ))}
          </p>
          <MagneticLink>
            <a
              href="#problema"
              className="inline-flex items-center gap-4 text-[11px] tracking-[0.4em] uppercase text-foreground/80 hover:text-accent transition-colors group"
            >
              <span className="w-12 h-px bg-current transition-all duration-500 group-hover:w-24" />
              {t('hero.cta')}
            </a>
          </MagneticLink>
        </div>
      </div>

      {/* footer scroll cue */}
      <div className="relative z-10 max-w-[1400px] w-full mx-auto flex items-end justify-between text-[10px] tracking-[0.35em] uppercase text-foreground/60">
        <span className="flex items-center gap-3">
          <span
            className="inline-block w-px h-8 bg-accent/60 origin-top"
            style={{
              animation: "tick-pulse 2s ease-in-out infinite",
            }}
            aria-hidden="true"
          />
          {t('hero.scroll')}
        </span>
        <span className="hidden md:inline">{t('hero.chapters')}</span>
      </div>
    </section>
  );
}
