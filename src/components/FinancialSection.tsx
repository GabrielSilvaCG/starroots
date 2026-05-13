import { FadeInSection } from "./FadeInSection";
import { useLanguage } from "@/store/useLanguage";

const getCards = (t: (key: string) => string) => [
  {
    tag: t('financial.tag1'),
    barColor: "var(--chart-1)", // red
    title: t('financial.card1.title'),
    value: "US$280M",
    details: [t('financial.card1.detail1'), t('financial.card1.detail2')],
  },
  {
    tag: t('financial.tag2'),
    barColor: "var(--chart-2)", // green
    title: t('financial.card2.title'),
    value: "US$480M",
    details: [t('financial.card2.detail1'), t('financial.card2.detail2')],
  },
  {
    tag: t('financial.tag3'),
    barColor: "var(--chart-3)", // blue
    title: t('financial.card3.title'),
    value: "US$20M",
    details: [t('financial.card3.detail1'), t('financial.card3.detail2')],
  },
  {
    tag: t('financial.tag4'),
    barColor: "var(--chart-4)", // gold
    title: t('financial.card4.title'),
    value: "US$5,1B",
    details: [t('financial.card4.detail1'), t('financial.card4.detail2'), t('financial.card4.detail3')],
  },
];

export function FinancialSection() {
  const { t } = useLanguage();
  const cards = getCards(t);
  return (
    <section id="financeiro" className="scroll-anchor px-6 md:px-10 py-32 max-w-[1400px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-20 items-end">
        <FadeInSection className="md:col-span-7">
          <p className="text-[10px] tracking-[0.4em] uppercase text-accent mb-6">{t('chapter.business')}</p>
          <h2
            className="font-display font-black leading-[0.9] tracking-[-0.03em]"
            style={{ fontSize: "clamp(2.75rem, 6vw, 5.5rem)" }}
          >
            {t('chapter.business.title').split('\n').map((line, i) => (
              <span key={i}>
                {i === 1 ? <em className="italic font-semibold text-accent">{line}</em> : line}
                {i === 0 && <br />}
              </span>
            ))}
          </h2>
        </FadeInSection>
        <FadeInSection delay={0.15} className="md:col-span-4 md:col-start-9">
          <p className="text-base text-foreground/70 leading-relaxed font-body">
            {t('chapter.business.desc')}
          </p>
        </FadeInSection>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border/40">
        {cards.map((c, i) => (
          <FadeInSection key={c.title} delay={i * 0.08} variant="blur" className="bg-background">
            <article className="card-lift sheen-on-hover h-full p-8 md:p-10 flex flex-col" style={{ borderTop: `3px solid ${c.barColor}` }}>
              <span
                className="self-start text-[10px] tracking-[0.3em] uppercase font-semibold px-3 py-1 mb-8"
                style={{ backgroundColor: c.barColor, color: "#0a2e1a" }}
              >
                {c.tag}
              </span>
              <h3 className="text-[10px] tracking-[0.3em] uppercase text-foreground/50 mb-3">{c.title}</h3>
              <p
                className="font-display font-black leading-[0.9] tracking-[-0.04em] mb-2"
                style={{ fontSize: "clamp(2.5rem, 4.5vw, 4.25rem)" }}
              >
                {c.value}
              </p>
              <span className="text-[10px] tracking-[0.3em] uppercase text-foreground/40 mb-8">por ano</span>
              <ul className="space-y-2 text-sm text-foreground/70 mt-auto font-body">
                {c.details.map((d, idx) => (
                  <li key={idx} className="flex gap-3">
                    <span className="text-accent">—</span>
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </article>
          </FadeInSection>
        ))}
      </div>

      <FadeInSection delay={0.3}>
        <p className="mt-12 text-center text-accent text-sm md:text-base tracking-wide font-body">
          {t('financial.footer')}
        </p>
      </FadeInSection>
    </section>
  );
}
