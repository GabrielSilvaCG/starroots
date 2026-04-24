import { useEffect, useRef, useState, type ReactNode } from "react";
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
