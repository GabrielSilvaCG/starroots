import { useEffect, useRef, useState, type CSSProperties } from "react";
import { FadeInSection } from "./FadeInSection";
import { FloatingLeaves } from "./FloatingLeaves";
import logoImg from "@/assets/logo.png";

const topics = [
  { title: "Origem", text: "Café e plantação como ponto de partida.", color: "#a8d5b5", delay: 0, icon: "coffee" },
  { title: "Sustentabilidade", text: "Natureza e ambiente no centro da experiência.", color: "#a8d5b5", delay: 0.3, icon: "leaf" },
  { title: "Comunidade", text: "Pessoas e impacto social como raiz da marca.", color: "#a8d5b5", delay: 0.6, icon: "heart" },
  { title: "Economia", text: "Lucro conectado à circularidade e retorno local.", color: "#a8d5b5", delay: 0.9, icon: "profit" },
  { title: "Inovação", text: "Tecnologia elétrica para reduzir o caminho até você.", color: "#a8d5b5", delay: 1.2, icon: "bolt" },
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
    <div ref={ref} className={`roots-grow pointer-events-none absolute -left-8 -bottom-16 -top-20 w-32 md:-left-16 md:w-56 ${visible ? "is-visible" : ""}`}>
      <svg viewBox="0 0 220 720" className="h-full w-full" fill="none" aria-hidden="true">
        <path d="M118 706C126 573 104 482 112 356C119 236 153 126 104 12" strokeWidth="5.2" strokeLinecap="round" />
        <path d="M113 502C72 470 42 422 24 354" strokeWidth="3.2" strokeLinecap="round" />
        <path d="M116 392C158 354 190 303 205 232" strokeWidth="3.2" strokeLinecap="round" />
        <path d="M120 591C163 553 194 500 209 435" strokeWidth="3" strokeLinecap="round" />
        <path d="M117 638C72 606 41 558 18 491" strokeWidth="3" strokeLinecap="round" />
        <path d="M110 286C66 248 42 205 34 154" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M118 452C84 438 57 412 42 376" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M116 246C151 210 174 166 181 105" strokeWidth="2" strokeLinecap="round" />
        <path d="M119 565C91 548 70 522 58 486" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </div>
  );
}

function TopicIcon({ icon, color, visible }: { icon: string; color: string; visible: boolean }) {
  const commonProps = {
    width: "28",
    height: "28",
    viewBox: "0 0 28 28",
    fill: "none",
    style: { color }
  };

  if (icon === "coffee") {
    return (
      <svg {...commonProps}>
        <g style={{ animation: visible ? "spin 4s linear infinite" : "none", transformOrigin: "14px 14px" }}>
          <ellipse cx="14" cy="14" rx="7" ry="10" stroke="currentColor" strokeWidth="2" />
          <path d="M14 5c-3 4 3 7 0 18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </g>
      </svg>
    );
  }
  if (icon === "leaf") {
    return (
      <svg {...commonProps}>
        <g style={{ animation: visible ? "sway 2s ease-in-out infinite" : "none", transformOrigin: "14px 18px" }}>
          <path d="M22 5C12 5 6 10 6 18c8 1 15-4 16-13Z" stroke="currentColor" strokeWidth="2" />
          <path d="M7 20c4-5 8-8 14-14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </g>
      </svg>
    );
  }
  if (icon === "heart") {
    return (
      <svg {...commonProps}>
        <path
          d="M14 23S5 18 5 10.5C5 7 7.5 5 10.5 5c1.8 0 3 1 3.5 2 .5-1 1.7-2 3.5-2C20.5 5 23 7 23 10.5 23 18 14 23 14 23Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
          style={{ animation: visible ? "pulse 1.5s ease-in-out infinite" : "none", transformOrigin: "14px 14px" }}
        />
      </svg>
    );
  }
  if (icon === "profit") {
    return (
      <svg {...commonProps}>
        <g style={{ animation: visible ? "float 2s ease-in-out infinite" : "none" }}>
          <path d="M7 20 20 7m0 0v10m0-10H10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    );
  }
  return (
    <svg {...commonProps}>
      <path
        d="m16 3-9 13h7l-2 9 9-13h-7l2-9Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
        style={{ animation: visible ? "flicker 1.2s ease-in-out infinite" : "none" }}
      />
    </svg>
  );
}

function RootTopic({ title, text, color, delay, icon }: (typeof topics)[number]) {
  const { ref, visible } = useRevealOnce(delay);

  return (
    <div ref={ref} style={{ "--topic-delay": `${delay}s` } as CSSProperties} className={`roots-topic flex gap-4 ${visible ? "is-visible" : ""}`}>
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
          <div className="root-sanctuary relative mt-14 pl-20 md:pl-44">
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
