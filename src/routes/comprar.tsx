import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState, type CSSProperties } from "react";
import comboMockup from "@/assets/combo-mockup.png";
import cookieBase from "@/assets/cookie-sem-nome.png";

const letterModules = import.meta.glob("@/assets/letras/letras_seu_nome/*.png", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const letterMap: Record<string, string> = Object.entries(letterModules).reduce(
  (acc, [path, url]) => {
    const match = path.match(/\/([A-Za-z])\.png$/);
    if (match) acc[match[1]] = url;
    return acc;
  },
  {} as Record<string, string>,
);

export const Route = createFileRoute("/comprar")({
  component: CheckoutPage,
  head: () => ({
    meta: [
      { title: "Combo Starroots — O combo que cuida de você" },
      { name: "description", content: "Peça o Combo Starroots: copo biodegradável e cookie personalizado por R$12,50." },
      { property: "og:title", content: "Combo Starroots — O combo que cuida de você" },
      { property: "og:description", content: "Um copo, um cookie e uma escolha que financia a compostagem nas plantações de café." },
    ],
  }),
});

const particles = Array.from({ length: 28 }, (_, i) => ({
  left: `${(i * 37) % 100}%`,
  size: 4 + (i % 4) * 2,
  duration: `${10 + (i % 7) * 1.5}s`,
  delay: `${-(i % 9) * 1.2}s`,
}));

function useInView(delay = 0) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay * 1000);
          observer.unobserve(el);
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return { ref, visible };
}

function LeafIcon() {
  return <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true"><path className="leaf-icon" d="M22 5C12 5 6 10 6 18c8 1 15-4 16-13Z" stroke="currentColor" strokeWidth="2" /><path className="leaf-icon" d="M7 20c4-5 8-8 14-14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>;
}

function StarIcon() {
  return <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true"><path className="heart-icon" d="m14 4 2.6 6.2 6.7.5-5.1 4.4 1.6 6.5-5.8-3.5-5.8 3.5 1.6-6.5-5.1-4.4 6.7-.5L14 4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" /></svg>;
}

function InfinityIcon() {
  return <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true"><path className="coffee-bean" d="M6 14c2.2-4 5.2-4 8 0 2.8 4 5.8 4 8 0-2.2-4-5.2-4-8 0-2.8 4-5.8 4-8 0Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

function CycleIcon({ type }: { type: "cup" | "soil" | "plant" }) {
  if (type === "cup") return <svg width="72" height="72" viewBox="0 0 72 72" fill="none"><path className="sr-cycle-icon" d="M23 16h26l-4 42H27L23 16Z" stroke="currentColor" strokeWidth="2.5" /><path className="sr-cycle-icon" d="M27 25h18" stroke="currentColor" strokeWidth="2" /></svg>;
  if (type === "soil") return <svg width="72" height="72" viewBox="0 0 72 72" fill="none"><path className="sr-cycle-icon" d="M18 49c9-8 27-8 36 0" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" /><circle className="sr-cycle-icon" cx="27" cy="39" r="3" fill="currentColor" /><circle className="sr-cycle-icon" cx="38" cy="35" r="2.5" fill="currentColor" /><circle className="sr-cycle-icon" cx="47" cy="41" r="2" fill="currentColor" /></svg>;
  return <svg width="72" height="72" viewBox="0 0 72 72" fill="none"><path className="leaf-icon" d="M36 57V28" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" /><path className="leaf-icon" d="M36 33c-10 0-16-6-17-16 10 0 16 6 17 16Z" stroke="currentColor" strokeWidth="2.5" /><path className="leaf-icon" d="M37 40c10-1 16-7 16-17-10 1-16 7-16 17Z" stroke="currentColor" strokeWidth="2.5" /></svg>;
}

function ProductPrice() {
  const { ref, visible } = useInView();
  return <div ref={ref} className={`typewriter-in font-display font-black leading-none ${visible ? "is-visible" : ""}`} style={{ fontSize: "clamp(3rem, 8vw, 7rem)", color: "var(--background)" }}>R$12,50</div>;
}

function CookieGenerator() {
  const [name, setName] = useState("");

  const displayLetters = useMemo(() => {
    const source = name.length > 0 ? name : "Starroots";
    return source.split("").filter((char) => letterMap[char]);
  }, [name]);

  const isPlaceholder = name.length === 0;
  // Letras em % do container — escalam de ~17% (poucas letras) a ~8% (10 letras)
  const letterSizePct = Math.max(8, 17 - displayLetters.length * 0.9);
  const letterGap = Math.max(-15, 4 - displayLetters.length);

  return (
    <section
      className="px-6 md:px-10 py-28"
      style={{ backgroundColor: "var(--cream)", color: "var(--background)" }}
    >
      <div className="max-w-[1100px] mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p
            className="text-[10px] tracking-[0.4em] uppercase mb-5"
            style={{ color: "var(--accent-foreground)" }}
          >
            Personalize seu cookie
          </p>
          <h2
            className="font-display font-black leading-none mb-8"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
          >
            O seu nome vira detalhe.
          </h2>
          <input
            value={name}
            onChange={(e) =>
              setName(e.target.value.replace(/[^A-Za-z]/g, "").slice(0, 10))
            }
            maxLength={10}
            placeholder="Digite seu nome"
            className="w-full border-0 border-b bg-transparent px-0 py-4 text-lg outline-none tracking-[0.2em]"
            style={{
              borderColor: "var(--background)",
              color: "var(--background)",
            }}
          />
          <div
            className="mt-3 text-[11px] tracking-[0.3em] uppercase opacity-60"
            style={{ color: "var(--background)" }}
          >
            {name.length}/10
          </div>
        </div>

        <div className="flex flex-col items-center gap-6">
          <div
            className="relative overflow-hidden rounded-full"
            style={{
              width: "min(360px, 80vw)",
              height: "min(360px, 80vw)",
              boxShadow:
                "inset 0 -18px 40px color-mix(in oklab, var(--background) 22%, transparent), 0 30px 60px -30px color-mix(in oklab, var(--background) 50%, transparent)",
            }}
          >
            <img
              src={cookieBase}
              alt="Cookie Starroots sem nome"
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
              decoding="async"
            />
            <div
              className="absolute inset-0 flex items-center justify-center"
              style={{
                gap: `${letterGap}px`,
                padding: "0 14%",
                opacity: isPlaceholder ? 0.5 : 1,
                transition: "opacity 300ms ease",
              }}
            >
              {displayLetters.map((char, index) => (
                <img
                  key={`${char}-${index}`}
                  src={letterMap[char]}
                  alt={char}
                  style={{
                    height: `${letterSizePct}%`,
                    width: "auto",
                    transition: "height 250ms ease",
                  }}
                />
              ))}
            </div>
          </div>
          <p
            className="font-display italic text-base md:text-lg text-center"
            style={{ color: "var(--background)" }}
          >
            Cada cookie é único — assim como você.
          </p>
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  const { ref, visible } = useInView();
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    window.setTimeout(() => setClicked(false), 2000);
  };

  return (
    <section className="px-6 md:px-10 py-28 text-center" style={{ backgroundColor: "var(--accent)", color: "var(--background)" }}>
      <h2 className="font-display font-black leading-none mb-8" style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}>Pronto para fazer parte?</h2>
      <div ref={ref} className={`price-pop font-display font-black leading-none mb-10 ${visible ? "is-visible" : ""}`} style={{ fontSize: "clamp(4rem, 10vw, 9rem)" }}>R$12,50</div>
      <button onClick={handleClick} className="w-full md:w-auto px-12 py-5 uppercase tracking-[0.28em] text-sm font-bold transition-transform active:scale-95" style={{ backgroundColor: "var(--background)", color: "var(--accent)" }}>
        {clicked ? "🌱 Pedido anotado!" : "Pedir meu combo"}
      </button>
      <p className="mt-7 text-[10px] tracking-[0.35em] uppercase">Disponível nas unidades participantes Starroots</p>
    </section>
  );
}

function CheckoutPage() {
  return (
    <main className="min-h-screen overflow-hidden">
      <section className="relative min-h-screen px-6 md:px-10 grid place-items-center overflow-hidden" style={{ backgroundColor: "var(--background)", color: "white" }}>
        {particles.map((particle, index) => (
          <span key={index} className="coffee-particle absolute rounded-full" style={{ left: particle.left, bottom: "-10vh", width: particle.size, height: particle.size, backgroundColor: "var(--card)", "--float-duration": particle.duration, "--float-delay": particle.delay } as CSSProperties} />
        ))}
        <Link to="/" className="absolute left-6 top-6 md:left-10 md:top-10 text-[10px] uppercase tracking-[0.35em] text-white/70 hover:text-primary">Voltar</Link>
        <div className="relative z-10 max-w-[1200px] text-center">
          <div className="border-pulse inline-flex border px-5 py-3 text-[10px] tracking-[0.35em] uppercase mb-10" style={{ borderColor: "var(--primary)", color: "var(--primary)" }}>Exclusivo · peça o seu</div>
          <h1 className="font-display font-black leading-[0.88]" style={{ fontSize: "clamp(3.5rem, 9vw, 8rem)" }}>
            O combo que cuida de você<br /><span style={{ color: "var(--primary)" }}>e do planeta.</span>
          </h1>
        </div>
        <div className="scroll-bounce absolute bottom-9 text-4xl" style={{ color: "var(--primary)" }}>↓</div>
      </section>

      <section className="px-6 md:px-10 py-28" style={{ backgroundColor: "var(--cream)", color: "var(--background)" }}>
        <div className="max-w-[1300px] mx-auto grid md:grid-cols-2 gap-14 items-center">
          <img src={comboMockup} alt="Combo Starroots com copo biodegradável e cookie" className="w-full transition-transform duration-700 hover:scale-[1.03]" loading="lazy" decoding="async" />
          <div>
            <h2 className="font-display font-black leading-none mb-10" style={{ fontSize: "clamp(2.75rem, 6vw, 5.5rem)" }}>Um copo. Um cookie. Uma escolha.</h2>
            <div className="border-y" style={{ borderColor: "color-mix(in oklab, var(--background) 22%, transparent)" }}>
              {[
                [<LeafIcon />, "Biodegradável", "vira adubo nas plantações"],
                [<StarIcon />, "Personalizado", "com o seu nome"],
                [<InfinityIcon />, "Ilimitado", "disponível todos os dias"],
              ].map(([icon, title, text], index) => (
                <div key={String(title)} className="roots-topic is-visible flex items-center gap-4 py-5 border-b last:border-b-0" style={{ borderColor: "color-mix(in oklab, var(--background) 18%, transparent)", color: index === 1 ? "var(--accent)" : "var(--background)", "--topic-delay": `${index * 0.3}s` } as CSSProperties}>
                  <div>{icon}</div><p><strong>{title}</strong> — {text}</p>
                </div>
              ))}
            </div>
            <div className="mt-10"><ProductPrice /></div>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-10 py-28 text-center" style={{ backgroundColor: "var(--card)", color: "white" }}>
        <h2 className="font-display font-black leading-none mb-5" style={{ fontSize: "clamp(2.8rem, 7vw, 6rem)" }}>Um café que planta o futuro.</h2>
        <p className="font-display italic text-xl md:text-3xl max-w-4xl mx-auto mb-16" style={{ color: "var(--primary)" }}>Cada combo vendido financia a coleta e compostagem dos copos nas plantações de café.</p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12" style={{ color: "var(--primary)" }}>
          <CycleIcon type="cup" /><span className="text-4xl">→</span><CycleIcon type="soil" /><span className="text-4xl">→</span><CycleIcon type="plant" />
        </div>
      </section>

      <CookieGenerator />
      <FinalCta />
    </main>
  );
}
