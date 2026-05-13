import { FadeInSection } from "./FadeInSection";
import { Link } from "@tanstack/react-router";
import { MagneticLink } from "./MagneticLink";
import { FloatingLeaves } from "./FloatingLeaves";
import comboMockup from "@/assets/combo-mockup.png";
import { useLanguage } from "@/store/useLanguage";

const getIncluded = (t: (key: string) => string) => [
  { n: "01", title: t('combo.item1.title'), text: t('combo.item1.text') },
  { n: "02", title: t('combo.item2.title'), text: t('combo.item2.text') },
  { n: "03", title: t('combo.item3.title'), text: t('combo.item3.text') },
];

const getExclusivity = (t: (key: string) => string) => [
  t('combo.exclusivity.item1'),
  t('combo.exclusivity.item2'),
  t('combo.exclusivity.item3'),
];

export function ComboSection() {
  const { t } = useLanguage();
  const included = getIncluded(t);
  const exclusivity = getExclusivity(t);
  return (
    <section id="combo" aria-labelledby="combo-title" className="scroll-anchor">
      {/* HEADER — kraft */}
      <div
        className="relative px-6 md:px-10 py-32 md:py-40 overflow-hidden"
        style={{ backgroundColor: "#c8a97e", color: "#0a2e1a" }}
      >
        <div className="absolute inset-0 opacity-[0.06] pointer-events-none" aria-hidden="true">
          <FloatingLeaves />
        </div>
        <div className="max-w-[1400px] mx-auto relative z-10">
          <FadeInSection>
            <p className="text-[10px] tracking-[0.5em] uppercase mb-8 opacity-70">{t('chapter.launch')}</p>
            <h2
              id="combo-title"
              className="font-display font-black leading-[0.85] tracking-[-0.03em] mb-10"
              style={{ fontSize: "clamp(3rem, 9vw, 8rem)" }}
            >
              {t('chapter.launch.title').split('\n').map((line, i) => (
                <span key={i}>
                  {i === 1 ? <em className="italic font-semibold">{line}</em> : line}
                  {i === 0 && <br />}
                </span>
              ))}
            </h2>
            <p className="text-xl md:text-3xl font-display italic max-w-3xl">
              {t('chapter.launch.subtitle')}
            </p>
          </FadeInSection>
        </div>
      </div>

      {/* Split apresentação */}
      <div className="px-6 md:px-10 py-28" style={{ backgroundColor: "#1a3d2b" }}>
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-12 gap-12 md:gap-16 items-center">
          <FadeInSection className="md:col-span-6">
            <p className="text-[20px] tracking-[0.4em] uppercase text-accent mb-6">Exclusivo</p>
            <h3
              className="font-display font-black leading-[0.92] tracking-[-0.02em] mb-8"
              style={{ fontSize: "clamp(60px, 8vw, 100px)" }}
            >
              {t('combo.title1')}<br />
              <em className="italic font-semibold text-accent">{t('combo.title2')}</em>
            </h3>
            <p className="text-base md:text-lg text-foreground/80 leading-relaxed font-body max-w-xl">
              {t('chapter.launch.desc')}
            </p>
          </FadeInSection>

          <FadeInSection delay={0.2} variant="scale" className="md:col-span-6">
            <div className="relative aspect-square max-w-md mx-auto group">
              <div className="absolute inset-0 bg-primary/15 blur-3xl animate-drift" />
              <div
                className="absolute inset-6 bg-accent/10 blur-2xl animate-drift"
                style={{ animationDelay: "-5s" }}
              />
              <img
                src={comboMockup}
                alt="Combo Starroots: sacola kraft com logo e cookie personalizado"
                width={1600}
                height={1600}
                loading="lazy"
                decoding="async"
                className="relative w-full h-full object-contain transition-transform duration-700 group-hover:scale-[1.04] group-hover:-rotate-1"
              />
            </div>
          </FadeInSection>
        </div>
      </div>

      {/* O que está incluso — cards numerados */}
      <div className="px-6 md:px-10 py-28 bg-background">
        <div className="max-w-[1400px] mx-auto">
          <FadeInSection className="mb-14">
            <p className="text-[10px] tracking-[0.4em] uppercase text-accent mb-4">{t('combo.included.label')}</p>
            <h3 className="font-display font-bold text-3xl md:text-5xl tracking-[-0.02em]">
              {t('combo.included.title').split(' ').map((word, i) => (
                <span key={i}>
                  {i > 1 ? <em className="italic text-accent">{word}</em> : word}
                  {i < 3 && ' '}
                </span>
              ))}
            </h3>
          </FadeInSection>

          <div className="grid md:grid-cols-3 gap-px bg-border/40">
            {included.map((item, i) => (
              <FadeInSection key={item.n} delay={i * 0.1} className="bg-background">
                <div className="h-full p-8 md:p-10 top-rule">
                  <p className="font-display font-black text-6xl md:text-7xl text-primary/40 leading-none mb-6">
                    {item.n}
                  </p>
                  <h4 className="font-display text-2xl md:text-3xl font-semibold mb-3">{item.title}</h4>
                  <p className="text-sm text-foreground/65 leading-relaxed font-body">{item.text}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </div>

      {/* PREÇO + CTA — kraft */}
      <div className="px-6 md:px-10 py-32 md:py-40" style={{ backgroundColor: "#c8a97e", color: "#0a2e1a" }}>
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-12 gap-10 items-center">
          <FadeInSection className="md:col-span-7">
            <p className="text-[10px] tracking-[0.5em] uppercase mb-6 opacity-70">{t('combo.price.label')}</p>
            <p
              className="font-display font-black leading-[0.8] tracking-[-0.05em]"
              style={{ fontSize: "clamp(4rem, 10vw, 9rem)" }}
            >
              {t('combo.price.value')}
            </p>
          </FadeInSection>
          <FadeInSection delay={0.15} className="md:col-span-5">
            <p className="text-2xl md:text-3xl font-display italic mb-10 leading-snug">
              {t('combo.price.desc')}
            </p>
            <MagneticLink>
              <Link
                to="/comprar"
                className="sheen-on-hover group inline-flex items-center gap-5 border-2 border-[#0a2e1a] px-10 py-6 text-sm tracking-[0.3em] uppercase font-semibold bg-[#0a2e1a] text-[#c8a97e] hover:bg-transparent hover:text-[#0a2e1a] transition-colors duration-500"
              >
                {t('combo.cta')}
                <span className="w-8 h-px bg-current transition-all duration-500 group-hover:w-16" />
              </Link>
            </MagneticLink>
            <p className="text-[10px] tracking-[0.3em] uppercase mt-6 opacity-60">
              {t('combo.availability')}
            </p>
          </FadeInSection>
        </div>
      </div>

      {/* Banner — circularidade */}
      <div className="px-6 md:px-10 py-20" style={{ backgroundColor: "#1a3d2b" }}>
        <FadeInSection className="max-w-[1100px] mx-auto text-center">
          <p className="text-[10px] tracking-[0.4em] uppercase text-accent mb-6">{t('combo.circularity.label')}</p>
          <p className="text-2xl md:text-4xl font-display italic leading-snug">
            {t('combo.circularity.text').split('the fertilizer').map((part, i) => (
              <span key={i}>
                {i > 0 && <span className="not-italic font-semibold text-accent">the fertilizer</span>}
                {part}
              </span>
            ))}
          </p>
        </FadeInSection>
      </div>

      {/* Exclusividade */}
      <div className="px-6 md:px-10 py-32" style={{ backgroundColor: "#f5f0e8", color: "#0a2e1a" }}>
        <div className="max-w-[1100px] mx-auto">
          <FadeInSection className="mb-16">
            <p className="text-[10px] tracking-[0.4em] uppercase opacity-60 mb-6">{t('combo.exclusivity.label')}</p>
            <h3
              className="font-display font-black leading-[0.9] tracking-[-0.02em]"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
            >
              {t('combo.exclusivity.title').split('Numbered.').map((part, i) => (
                <span key={i}>
                  {i > 0 && <em className="italic">Numbered.</em>}
                  {part}
                </span>
              ))}
            </h3>
          </FadeInSection>

          <ul className="divide-y divide-[#0a2e1a]/20 mb-16">
            {exclusivity.map((item, i) => (
              <FadeInSection key={item} delay={i * 0.08}>
                <li className="flex items-start gap-8 py-6">
                  <span className="font-display font-bold text-2xl md:text-3xl tabular-nums opacity-50 shrink-0 w-12">
                    0{i + 1}
                  </span>
                  <p className="text-lg md:text-2xl font-display leading-snug pt-1">{item}</p>
                </li>
              </FadeInSection>
            ))}
          </ul>

          <FadeInSection>
            <p
              className="text-2xl md:text-3xl font-display italic text-center"
              style={{ color: "#8a6a3e" }}
            >
              "{t('combo.exclusivity.quote')}"
            </p>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
}
