import { useEffect, useRef, useState, useMemo, type CSSProperties } from "react";
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
const particles = Array.from({ length: 20 }, (_, i) => ({
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

// --- Sabores disponíveis (cor pastel para o fundo) ---
const FLAVORS = [
  { id: "classico",  name: "Café Clássico",  bg: "#efe7d8", accent: "#6b4a2b" },
  { id: "avela",     name: "Avelã",          bg: "#f0e0cb", accent: "#8a5a36" },
  { id: "caramelo",  name: "Caramelo",       bg: "#f6e3c4", accent: "#9c6b2f" },
  { id: "chocolate", name: "Chocolate",      bg: "#e8d6c6", accent: "#5a2e1a" },
  { id: "baunilha",  name: "Baunilha",       bg: "#f6efd8", accent: "#a8884a" },
  { id: "matcha",    name: "Matcha",         bg: "#dde8d2", accent: "#3d5a2a" },
  { id: "morango",   name: "Morango",        bg: "#f4d8db", accent: "#a23a4a" },
];

// --- O Gerador de Cookie (Onde a mágica acontece) ---
function CookieGenerator() {
  const [name, setName] = useState("");
  const [flavor, setFlavor] = useState(FLAVORS[0]);
  const [fontLoaded, setFontLoaded] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Edição numerada — único por sessão (detalhe exclusivo)
  const [editionNumber, setEditionNumber] = useState<number | null>(null);
  useEffect(() => {
    setEditionNumber(Math.floor(100 + Math.random() * 900));
  }, []);

  // Lógica de carregamento da fonte via TSX
  useEffect(() => {
    const loadCustomFont = async () => {
      try {
        const font = new FontFace("fontechocolate", `url(${fontechocolateUrl})`);
        const loadedFont = await font.load();
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

    const fontSize = Math.max(30, 80 - displayText.length * 5);
    ctx.font = `${fontSize}px fontechocolate`;
    ctx.fillStyle = "#4a200a";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.shadowColor = "rgba(40, 15, 5, 0.5)";
    ctx.shadowBlur = 8;
    ctx.shadowOffsetX = 2;
    ctx.shadowOffsetY = 3;
    ctx.fillText(displayText, canvas.width / 2, canvas.height / 2);
  }, [name, fontLoaded]);

  return (
    <section
      className="px-6 md:px-10 py-28 transition-colors duration-700"
      style={{ backgroundColor: flavor.bg, color: "var(--background)" }}
    >
      <div className="max-w-[1100px] mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p
            className="text-[10px] tracking-[0.4em] uppercase mb-5"
            style={{ color: flavor.accent }}
          >
            Personalize seu combo
          </p>
          <h2 className="font-display font-black leading-none mb-8" style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}>
            O seu nome vira detalhe.
          </h2>

          <label htmlFor="cookie-name" className="block text-[10px] tracking-[0.3em] uppercase mb-3 opacity-70">Seu nome</label>
          <input
            id="cookie-name"
            value={name}
            onChange={(e) => setName(e.target.value.replace(/[^A-Za-zÀ-ÿ\s]/g, "").slice(0, 10))}
            maxLength={10}
            placeholder="Digite seu nome"
            autoComplete="off"
            className="w-full border-0 border-b bg-transparent px-0 py-4 text-lg outline-none tracking-[0.2em] mb-8"
            style={{ borderColor: "var(--background)", color: "var(--background)" }}
          />

          <label className="block text-[10px] tracking-[0.3em] uppercase mb-3 opacity-70">Escolha o sabor</label>
          <div className="flex flex-wrap gap-2">
            {FLAVORS.map((f) => {
              const active = f.id === flavor.id;
              return (
                <button
                  key={f.id}
                  onClick={() => setFlavor(f)}
                  className="px-4 py-2 text-xs tracking-[0.15em] uppercase transition-all border"
                  style={{
                    borderColor: active ? f.accent : "rgba(10,46,26,0.2)",
                    backgroundColor: active ? f.accent : "transparent",
                    color: active ? f.bg : "var(--background)",
                  }}
                >
                  {f.name}
                </button>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col items-center gap-6">
          {/* Selo de edição numerada — detalhe único */}
          <div
            className="self-end -mb-2 flex items-center gap-3 px-4 py-2 border"
            style={{ borderColor: flavor.accent, color: flavor.accent }}
          >
            <span className="text-[9px] tracking-[0.3em] uppercase opacity-70">Exclusividade</span>
            <span className="font-display font-black text-lg tabular-nums">
              ID #{editionNumber ?? "—"}/ILIMITADO
            </span>
          </div>

          <div
            className="relative overflow-hidden rounded-full transition-shadow duration-700"
            style={{
              width: "min(360px, 80vw)",
              height: "min(360px, 80vw)",
              boxShadow: `0 30px 60px -20px ${flavor.accent}55`,
            }}
          >
            <img src={cookieBase} alt="Cookie Base" className="absolute inset-0 h-full w-full object-cover" />
            <canvas
              ref={canvasRef}
              width={360}
              height={360}
              className="absolute inset-0 h-full w-full"
              style={{ opacity: name.length === 0 ? 0.3 : 1, transition: "opacity 300ms ease" }}
            />
          </div>

          <p className="font-display italic text-lg" style={{ color: flavor.accent }}>
            {flavor.name} — feito para {name || "você"}
          </p>
        </div>
      </div>
    </section>
  );
}

// --- Animação de Celebração (overlay) — silhueta única ---
// Timeline (3s loop):
//   0.0–0.8s  Copo cai e morfa para "tronco vertical"
//   0.8–2.0s  Raízes orgânicas ramificadas crescem (stroke-dashoffset)
//   2.0–3.0s  As 3 raízes principais morfam para o contorno do grão de café (silhueta)
//             As raízes secundárias e capilares somem.
// Tudo em #2d6a4f, sem preenchimento, sem glow, sem 3D.

const STROKE = "#2d6a4f";

const CUP_PATH =
  "M40 35 C40 35 80 35 80 35 C80 35 78 50 76 60 C74 70 72 75 60 75 C48 75 46 70 44 60 Z";
const TRUNK_PATH =
  "M58 40 C58 40 62 40 62 40 C62 40 62 60 62 75 C62 90 62 95 60 95 C58 95 58 90 58 75 Z";

// Raízes orgânicas — apenas crescem (stroke-dashoffset) e somem antes do grão.
const ROOTS: { d: string; len: number; delay: number; sw: number }[] = [
  { d: "M60 55 C60 65 60 78 60 95",                          len: 40, delay: 0.00, sw: 1.8 },
  { d: "M60 65 C54 70 48 76 42 88",                          len: 30, delay: 0.05, sw: 1.6 },
  { d: "M60 65 C66 70 72 76 78 88",                          len: 30, delay: 0.05, sw: 1.6 },
  { d: "M50 75 C46 78 43 82 40 90",                          len: 18, delay: 0.12, sw: 1.2 },
  { d: "M70 75 C74 78 77 82 80 90",                          len: 18, delay: 0.12, sw: 1.2 },
  { d: "M44 84 C42 86 41 88 39 93",                          len: 10, delay: 0.18, sw: 0.9 },
  { d: "M76 84 C78 86 79 88 81 93",                          len: 10, delay: 0.18, sw: 0.9 },
  { d: "M58 80 C52 84 48 88 45 95",                          len: 20, delay: 0.22, sw: 1.0 },
  { d: "M62 80 C68 84 72 88 75 95",                          len: 20, delay: 0.22, sw: 1.0 },
];

// Grão de café desenhado à mão — oval alongada (vertical) com fenda em "S"
const BEAN_OUTLINE =
  "M60 18 C38 18 28 38 28 60 C28 84 40 102 60 102 C80 102 92 84 92 60 C92 38 82 18 60 18 Z";
const BEAN_FISSURE = "M58 24 C76 42 44 78 62 98";

function CelebrationOverlay({ onDone }: { onDone: () => void }) {
  const [fadingOut, setFadingOut] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFadingOut(true), 3000 * 3);
    const doneTimer = setTimeout(() => onDone(), 3000 * 3 + 1000);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(doneTimer);
    };
  }, [onDone]);

  // Perímetro aproximado do contorno do grão para o efeito de desenho
  const BEAN_LEN = 280;
  const FISSURE_LEN = 110;

  return (
    <div
      className="fixed inset-0 z-[9999] grid place-items-center"
      style={{
        background: "rgba(0,0,0,0.3)",
        animation: fadingOut ? "celebFadeOut 1s ease forwards" : "celebFadeIn 0.4s ease both",
        pointerEvents: "none",
      }}
    >
      <svg width="140" height="140" viewBox="0 0 120 120" overflow="visible">
        {/* FASE 1 — Copo cai e morfa para tronco */}
        <g style={{ animation: "cupDrop 3s ease-in-out infinite" }}>
          <path
            fill="none"
            stroke={STROKE}
            strokeWidth="2"
            strokeLinejoin="round"
            strokeLinecap="round"
          >
            <animate
              attributeName="d"
              dur="3s"
              repeatCount="indefinite"
              calcMode="spline"
              keyTimes="0;0.27;0.32;1"
              keySplines="0.42 0 0.58 1; 0.42 0 0.58 1; 0 0 1 1"
              values={`${CUP_PATH};${CUP_PATH};${TRUNK_PATH};${TRUNK_PATH}`}
            />
            <animate
              attributeName="opacity"
              dur="3s"
              repeatCount="indefinite"
              keyTimes="0;0.32;0.4;1"
              values="1;1;0;0"
            />
          </path>
        </g>

        {/* FASE 2 — Raízes crescem e depois somem */}
        <g stroke={STROKE} strokeLinecap="round" strokeLinejoin="round" fill="none">
          {ROOTS.map((r, i) => (
            <path
              key={i}
              d={r.d}
              strokeWidth={r.sw}
              strokeDasharray={r.len}
              strokeDashoffset={r.len}
              style={{ animation: `rootDraw-${i} 3s ease-out infinite` }}
            />
          ))}
        </g>

        {/* FASE 3 — Grão de café (silhueta limpa) */}
        <g style={{ animation: "beanAppear 3s ease-in-out infinite", transformOrigin: "60px 60px" }}>
          <path
            d={BEAN_OUTLINE}
            fill="none"
            stroke={STROKE}
            strokeWidth="2.4"
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeDasharray={BEAN_LEN}
            strokeDashoffset={BEAN_LEN}
            style={{ animation: "beanDraw 3s ease-out infinite" }}
          />
          <path
            d={BEAN_FISSURE}
            fill="none"
            stroke={STROKE}
            strokeWidth="2.2"
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeDasharray={FISSURE_LEN}
            strokeDashoffset={FISSURE_LEN}
            style={{ animation: "fissureDraw 3s ease-out infinite" }}
          />
        </g>
      </svg>

      <style>{`
        @keyframes celebFadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes celebFadeOut { from { opacity: 1; } to { opacity: 0; } }

        @keyframes cupDrop {
          0%   { transform: translateY(-90px); }
          27%  { transform: translateY(0); }
          100% { transform: translateY(0); }
        }

        ${ROOTS.map((r, i) => {
          const startPct = 30 + r.delay * 100;
          const endPct = Math.min(startPct + 18, 55);
          return `
          @keyframes rootDraw-${i} {
            0%, ${startPct}% { stroke-dashoffset: ${r.len}; opacity: 1; }
            ${endPct}%       { stroke-dashoffset: 0; opacity: 1; }
            62%              { opacity: 1; }
            70%, 100%        { opacity: 0; }
          }`;
        }).join("\n")}

        @keyframes beanAppear {
          0%, 65%   { opacity: 0; transform: scale(0.85); }
          72%, 92%  { opacity: 1; transform: scale(1); }
          100%      { opacity: 0; transform: scale(1); }
        }
        @keyframes beanDraw {
          0%, 65%  { stroke-dashoffset: 280; }
          85%, 100%{ stroke-dashoffset: 0; }
        }
        @keyframes fissureDraw {
          0%, 75%  { stroke-dashoffset: 110; }
          92%, 100%{ stroke-dashoffset: 0; }
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
        {useMemo(() => particles.map((p, i) => (
          <span key={i} className="coffee-particle absolute rounded-full" style={{ left: p.left, bottom: "-10vh", width: p.size, height: p.size, backgroundColor: "var(--card)", "--float-duration": p.duration, "--float-delay": p.delay } as any} />
        )), [])}
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
