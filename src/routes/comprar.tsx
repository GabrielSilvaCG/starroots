import { useEffect, useRef, useState, type CSSProperties } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import comboMockup from "@/assets/combo-mockup.png";
import cookieBase from "@/assets/cookie-sem-nome.png";

// Importando a fonte como um módulo (o Vite transforma isso em uma URL)
// @ts-ignore - Caso o TS reclame do import de .otf
import fontechocolateUrl from "@/assets/fonts/fontechocolate.otf";

export const Route = createFileRoute("/comprar")({
  component: CheckoutPage,
});

// --- Partículas e Hooks ---
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
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setTimeout(() => setVisible(true), delay * 1000);
        observer.unobserve(el);
      }
    }, { threshold: 0.2 });
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);
  return { ref, visible };
}

// --- Componentes de Ícones (Simplificados) ---
const LeafIcon = () => <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M22 5C12 5 6 10 6 18c8 1 15-4 16-13Z" stroke="currentColor" strokeWidth="2" /><path d="M7 20c4-5 8-8 14-14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>;
const StarIcon = () => <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="m14 4 2.6 6.2 6.7.5-5.1 4.4 1.6 6.5-5.8-3.5-5.8 3.5 1.6-6.5-5.1-4.4 6.7-.5L14 4Z" stroke="currentColor" strokeWidth="2" /></svg>;

// --- O Gerador de Cookie (Onde a mágica acontece) ---
function CookieGenerator() {
  const [name, setName] = useState("");
  const [fontLoaded, setFontLoaded] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Lógica de carregamento da fonte via TSX
  useEffect(() => {
    const loadCustomFont = async () => {
      try {
        // Criando a fonte programaticamente
        const font = new FontFace("fontechocolate", `url(${fontechocolateUrl})`);
        
        // Esperando o browser baixar o arquivo
        const loadedFont = await font.load();
        
        // Adicionando a fonte ao documento para que o Canvas a enxergue
        document.fonts.add(loadedFont);
        
        setFontLoaded(true);
      } catch (error) {
        console.error("Falha ao carregar a fonte do cookie:", error);
      }
    };

    loadCustomFont();
  }, []);

  // Renderização do Canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !fontLoaded) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const displayText = name.length > 0 ? name : "Starroots";

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Configurações do texto
    const fontSize = Math.max(30,  80 - displayText.length * 5);
    ctx.font = `${fontSize}px fontechocolate`; // Referenciando o nome que demos no FontFace
    ctx.fillStyle = "#4a200a";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    // Efeito de "entalhe" no cookie
    ctx.shadowColor = "rgba(40, 15, 5, 0.5)";
    ctx.shadowBlur = 8;
    ctx.shadowOffsetX = 2;
    ctx.shadowOffsetY = 3;

    ctx.fillText(displayText, canvas.width / 2, canvas.height / 2);
  }, [name, fontLoaded]);

  return (
    <section className="px-6 md:px-10 py-28" style={{ backgroundColor: "var(--cream)", color: "var(--background)" }}>
      <div className="max-w-[1100px] mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-[10px] tracking-[0.4em] uppercase mb-5" style={{ color: "var(--accent-foreground)" }}>Personalize seu cookie</p>
          <h2 className="font-display font-black leading-none mb-8" style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}>O seu nome vira detalhe.</h2>
          <input
            value={name}
            onChange={(e) => setName(e.target.value.replace(/[^A-Za-z]/g, "").slice(0, 10))}
            maxLength={10}
            placeholder="Digite seu nome"
            className="w-full border-0 border-b bg-transparent px-0 py-4 text-lg outline-none tracking-[0.2em]"
            style={{ borderColor: "var(--background)", color: "var(--background)" }}
          />
        </div>

        <div className="flex flex-col items-center gap-6">
          <div className="relative overflow-hidden rounded-full" style={{ width: "min(360px, 80vw)", height: "min(360px, 80vw)", boxShadow: "0 30px 60px -20px rgba(0,0,0,0.2)" }}>
            <img src={cookieBase} alt="Cookie Base" className="absolute inset-0 h-full w-full object-cover" />
            <canvas ref={canvasRef} width={360} height={360} className="absolute inset-0 h-full w-full" style={{ opacity: name.length === 0 ? 0.3 : 1, transition: "opacity 300ms ease" }} />
          </div>
          <p className="font-display italic text-lg opacity-80">Cookie artesanal Starroots</p>
        </div>
      </div>
    </section>
  );
}

// --- Animação de Celebração (overlay) ---
function CelebrationOverlay({ onDone }: { onDone: () => void }) {
  const [fadingOut, setFadingOut] = useState(false);

  useEffect(() => {
    // 3 ciclos de 3.5s = 10.5s, depois fade-out de 2s
    const fadeTimer = setTimeout(() => setFadingOut(true), 3500 * 3);
    const doneTimer = setTimeout(() => onDone(), 3500 * 3 + 2000);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(doneTimer);
    };
  }, [onDone]);

  return (
    <div
      className="fixed inset-0 z-[9999] grid place-items-center"
      style={{
        background: "rgba(0,0,0,0.3)",
        animation: fadingOut ? "celebFadeOut 2s ease forwards" : "celebFadeIn 0.4s ease both",
        pointerEvents: "none",
      }}
    >
      <svg
        width="120"
        height="120"
        viewBox="0 0 120 120"
        style={{ animation: "celebScale 3.5s ease-in-out infinite" }}
      >
        {/* Fase 1: Copo caindo (0 - 0.8s) */}
        <g style={{ animation: "cupFall 3.5s linear infinite", transformOrigin: "60px 60px" }}>
          <path
            d="M40 35 L80 35 L75 75 L45 75 Z"
            fill="#f5f0e8"
            stroke="#4a200a"
            strokeWidth="1.5"
          />
          <ellipse cx="60" cy="35" rx="20" ry="3" fill="#e8e0d0" stroke="#4a200a" strokeWidth="1.5" />
        </g>

        {/* Fase 2: Raízes saindo do solo (0.8s - 2.0s) */}
        <g style={{ animation: "rootsGrow 3.5s linear infinite" }}>
          <path
            d="M60 80 L60 100 M60 90 L50 105 M60 90 L70 105 M60 95 L45 110 M60 95 L75 110 M55 100 L48 115 M65 100 L72 115"
            stroke="#2d6a4f"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
            strokeDasharray="60"
            strokeDashoffset="60"
            style={{ animation: "rootsDash 3.5s linear infinite" }}
          />
        </g>

        {/* Fase 3: Grão de café com brilho (2.0s - 3.0s) */}
        <g style={{ animation: "beanAppear 3.5s linear infinite", transformOrigin: "60px 40px" }}>
          <ellipse
            cx="60"
            cy="40"
            rx="14"
            ry="20"
            fill="#4a200a"
            style={{ filter: "drop-shadow(0 0 8px #c8a97e)" }}
          />
          <path d="M60 22 Q58 40 60 58" stroke="#c8a97e" strokeWidth="1.2" fill="none" />
        </g>
      </svg>

      <style>{`
        @keyframes celebFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes celebFadeOut {
          from { opacity: 1; }
          to { opacity: 0; }
        }
        @keyframes celebScale {
          0%, 100% { transform: scale(1); }
          22%, 57%, 85% { transform: scale(1.1); }
        }
        @keyframes cupFall {
          0% { transform: translateY(-120px) rotate(-15deg); opacity: 1; }
          15% { transform: translateY(0) rotate(15deg); opacity: 1; }
          22% { transform: translateY(0) rotate(0deg); opacity: 1; }
          25% { opacity: 0; }
          100% { opacity: 0; }
        }
        @keyframes rootsDash {
          0%, 22% { stroke-dashoffset: 60; }
          57% { stroke-dashoffset: 0; }
          70% { stroke-dashoffset: 0; opacity: 1; }
          75% { opacity: 0; }
          100% { stroke-dashoffset: 0; opacity: 0; }
        }
        @keyframes rootsGrow {
          0%, 22% { opacity: 0; }
          25%, 70% { opacity: 1; }
          75%, 100% { opacity: 0; }
        }
        @keyframes beanAppear {
          0%, 57% { opacity: 0; transform: scale(0.5); }
          70% { opacity: 1; transform: scale(1); }
          78% { opacity: 0.5; transform: scale(1.05); }
          85% { opacity: 1; transform: scale(1); }
          95% { opacity: 1; transform: scale(1); }
          100% { opacity: 0; transform: scale(1); }
        }
      `}</style>
    </div>
  );
}

// --- Página Principal ---
export function CheckoutPage() {
  const { ref: priceRef, visible: priceVisible } = useInView();
  const [celebrating, setCelebrating] = useState(false);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen grid place-items-center overflow-hidden" style={{ backgroundColor: "var(--background)", color: "white" }}>
        {particles.map((p, i) => (
          <span key={i} className="coffee-particle absolute rounded-full" style={{ left: p.left, bottom: "-10vh", width: p.size, height: p.size, backgroundColor: "var(--card)", "--float-duration": p.duration, "--float-delay": p.delay } as any} />
        ))}
        <Link to="/" className="absolute left-10 top-10 text-[10px] uppercase tracking-[0.4em] text-white/60 hover:text-white transition-colors">Voltar</Link>
        <h1 className="relative z-10 font-display font-black text-center leading-[0.9]" style={{ fontSize: "clamp(3rem, 10vw, 8rem)" }}>
          O COMBO QUE <br /> <span style={{ color: "var(--primary)" }}>PLANTA O FUTURO.</span>
        </h1>
      </section>

      {/* Seção do Produto */}
      <section className="px-6 py-28" style={{ backgroundColor: "var(--cream)" }}>
        <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-20 items-center">
          <img src={comboMockup} alt="Combo" className="w-full drop-shadow-2xl" />
          <div>
            <h2 className="font-display font-black text-5xl mb-8" style={{ color: "var(--background)" }}>Sustentável & Único.</h2>
            <div className="space-y-6 mb-12">
              <div className="flex gap-4 items-center">
                <LeafIcon /> <p><strong>Copo Biodegradável</strong> — Vira adubo em 90 dias.</p>
              </div>
              <div className="flex gap-4 items-center">
                <StarIcon /> <p><strong>Cookie Personalizado</strong> — Com o seu nome gravado.</p>
              </div>
            </div>
            <div ref={priceRef} className={`font-display font-black text-7xl transition-all duration-1000 ${priceVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ color: "var(--background)" }}>
              R$12,50
            </div>
          </div>
        </div>
      </section>

      <CookieGenerator />

      {/* CTA Final */}
      <section className="py-28 text-center" style={{ backgroundColor: "var(--accent)", color: "var(--background)" }}>
        <h2 className="font-display font-black text-6xl mb-10">Peça o seu agora.</h2>
        <button
          onClick={() => setCelebrating(true)}
          disabled={celebrating}
          className="bg-background text-accent px-16 py-6 font-bold uppercase tracking-[0.3em] hover:scale-105 active:scale-95 transition-transform disabled:opacity-70"
        >
          Pedir meu combo
        </button>
      </section>

      {celebrating && <CelebrationOverlay onDone={() => setCelebrating(false)} />}
    </main>
  );
}
