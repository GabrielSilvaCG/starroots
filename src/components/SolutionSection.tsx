import { useEffect, useRef, useState } from "react";
import { FadeInSection } from "./FadeInSection";
import { FloatingLeaves } from "./FloatingLeaves";
import logoImg from "@/assets/logo.png";

const topics = [
  { title: "Origem", text: "Café e plantação como ponto de partida.", color: "var(--primary)", delay: 0, icon: "coffee" },
  { title: "Sustentabilidade", text: "Natureza e ambiente no centro da experiência.", color: "var(--primary)", delay: 0.3, icon: "leaf" },
  { title: "Comunidade", text: "Pessoas e impacto social como raiz da marca.", color: "var(--accent)", delay: 0.6, icon: "heart" },
  { title: "Economia", text: "Lucro conectado à circularidade e retorno local.", color: "var(--accent)", delay: 0.9, icon: "profit" },
  { title: "Inovação", text: "Tecnologia elétrica para reduzir o caminho até você.", color: "var(--primary)", delay: 1.2, icon: "bolt" },
];

function useRevealOnce(delay = 0) {
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

function OrganicRoots() {
  const { ref, visible } = useRevealOnce();

  return (
    <div ref={ref} className={`roots-grow pointer-events-none absolute left-0 bottom-0 top-0 w-12 md:w-16 ${visible ? "is-visible" : ""}`}>
      <svg viewBox="0 0 72 280" className="h-full w-full" fill="none" aria-hidden="true">
        <path d="M38 276C39 220 35 174 37 128C39 82 46 48 36 4" strokeWidth="3" strokeLinecap="round" />
        <path d="M37 160C24 145 15 130 10 111" strokeWidth="2" strokeLinecap="round" />
        <path d="M38 132C52 117 60 99 64 76" strokeWidth="2" strokeLinecap="round" />
        <path d="M38 210C51 199 59 184 62 166" strokeWidth="2" strokeLinecap="round" />
        <path d="M38 235C25 225 17 212 14 194" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </div>
  );
}

function TopicIcon({ icon, color }: { icon: string; color: string }) {
  if (icon === "coffee") return <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><ellipse className="coffee-bean" cx="14" cy="14" rx="7" ry="10" stroke={color} strokeWidth="2" /><path className="coffee-bean" d="M14 5c-3 4 3 7 0 18" stroke={color} strokeWidth="1.6" strokeLinecap="round" /></svg>;
  if (icon === "leaf") return <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path className="leaf-icon" d="M22 5C12 5 6 10 6 18c8 1 15-4 16-13Z" stroke={color} strokeWidth="2" /><path className="leaf-icon" d="M7 20c4-5 8-8 14-14" stroke={color} strokeWidth="1.6" strokeLinecap="round" /></svg>;
  if (icon === "heart") return <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path className="heart-icon" d="M14 23S5 18 5 10.5C5 7 7.5 5 10.5 5c1.8 0 3 1 3.5 2 .5-1 1.7-2 3.5-2C20.5 5 23 7 23 10.5 23 18 14 23 14 23Z" stroke={color} strokeWidth="2" strokeLinejoin="round" /></svg>;
  if (icon === "profit") return <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path className="profit-icon" d="M7 20 20 7m0 0v10m0-10H10" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>;
  return <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path className="bolt-icon" d="m16 3-9 13h7l-2 9 9-13h-7l2-9Z" stroke={color} strokeWidth="2" strokeLinejoin="round" /></svg>;
}

function RootTopic({ title, text, color, delay, icon }: (typeof topics)[number]) {
  const { ref, visible } = useRevealOnce(delay);

  return (
    <div ref={ref} style={{ "--topic-delay": `${delay}s` } as React.CSSProperties} className={`roots-topic flex gap-4 ${visible ? "is-visible" : ""}`}>
      <div className="mt-1 shrink-0"><TopicIcon icon={icon} color={color} /></div>
      <div>
        <h3 className="font-display text-xl text-foreground">{title}</h3>
        <p className="text-sm leading-relaxed text-foreground/65">{text}</p>
      </div>
    </div>
  );
}

export function SolutionSection() {
  return (
    <section
      id="solucao"
      className="scroll-anchor relative overflow-hidden px-6 md:px-10 py-32"
      style={{ backgroundColor: "#1a3d2b" }}
    >
      <FloatingLeaves />
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center relative z-10">
        <FadeInSection className="md:col-span-7" variant="left">
          <p className="text-[10px] tracking-[0.4em] uppercase text-accent mb-6">Capítulo 02 — Resposta</p>
          <h2
            className="font-display font-black leading-[0.88] tracking-[-0.03em] mb-10"
            style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}
          >
            Mesma sereia.<br />
            <em className="italic font-semibold text-accent">Novas raízes.</em>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl">
            <p className="text-base md:text-lg text-foreground/85 leading-relaxed font-body">
              <strong className="font-semibold text-foreground">Starroots</strong> mantém a alma do café que você conhece —
              mas planta novas bases. <em className="text-accent not-italic">Roots</em> são raízes,
              origem, natureza: o ponto onde a marca se reconecta com a terra.
            </p>
            <p className="text-sm md:text-base text-foreground/65 leading-relaxed font-body">
              Uma identidade que cresce a partir do que sustenta o produto: o solo, as plantações,
              as comunidades. Cada elemento — da sereia coroada de folhas às embalagens kraft —
              fala essa mesma língua.
            </p>
          </div>
          <div className="relative mt-14 pl-10 md:pl-20">
            <OrganicRoots />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5">
              {topics.map((topic) => (
                <RootTopic key={topic.title} {...topic} />
              ))}
            </div>
          </div>
        </FadeInSection>

        <FadeInSection delay={0.2} variant="scale" className="md:col-span-5">
          <div className="relative aspect-square max-w-md mx-auto group">
            <div className="absolute inset-0 bg-primary/15 blur-3xl animate-drift" />
            <div
              className="absolute inset-8 bg-accent/10 blur-2xl animate-drift"
              style={{ animationDelay: "-4s" }}
            />
            <img
              src={logoImg}
              alt="Logo Starroots"
              loading="lazy"
              decoding="async"
              width={500}
              height={500}
              className="relative w-full h-full object-contain transition-transform duration-700 group-hover:scale-[1.04]"
            />
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
