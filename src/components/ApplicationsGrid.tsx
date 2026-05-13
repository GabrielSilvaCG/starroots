import embalagemImg from "@/assets/embalagem.png";
import lojaImg from "@/assets/logoemloja.png";
import copoImg from "@/assets/copopequeno.png";
import { FadeInSection } from "./FadeInSection";
import { useLanguage } from "@/store/useLanguage";

const getMain = (t: (key: string) => string) => ({ src: lojaImg, alt: "Logo aplicado na fachada da loja", label: "Fachada", caption: t('lookbook.caption1') });
const getSide = (t: (key: string) => string) => [
  { src: copoImg, alt: "Copo pequeno com identidade Starroots", label: "Copo", caption: t('lookbook.caption2') },
  { src: embalagemImg, alt: "Embalagem kraft com logo", label: "Embalagem", caption: t('lookbook.caption3') },
];

export function ApplicationsGrid() {
  const { t } = useLanguage();
  const main = getMain(t);
  const side = getSide(t);
  return (
    <section id="identidade" className="scroll-anchor px-6 md:px-10 py-32 max-w-[1400px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-20 items-end">
        <FadeInSection className="md:col-span-7">
          <p className="text-[10px] tracking-[0.4em] uppercase text-accent mb-6">{t('chapter.lookbook')}</p>
          <h2
            className="font-display font-black leading-[0.9] tracking-[-0.03em]"
            style={{ fontSize: "clamp(2.75rem, 6vw, 5.5rem)" }}
          >
            {t('chapter.lookbook.title').split('\n').map((line, i) => (
              <span key={i}>
                {i === 1 ? <em className="italic font-semibold text-accent">{line}</em> : line}
                {i === 0 && <br />}
              </span>
            ))}
          </h2>
        </FadeInSection>
        <FadeInSection delay={0.15} className="md:col-span-4 md:col-start-9">
          <p className="text-lg md:text-xl text-foreground/75 leading-relaxed font-body">
            {t('chapter.lookbook.desc')}
          </p>
        </FadeInSection>
      </div>

      <div className="brand-cluster grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
        <div className="brand-signature" aria-hidden="true">
          <svg viewBox="0 0 260 260" fill="none">
            <path className="signature-ring" d="M130 22c43 0 79 18 98 50 18 31 17 70-3 105-20 36-55 61-95 61s-75-25-95-61c-20-35-21-74-3-105 19-32 55-50 98-50Z" />
            <path className="signature-root" d="M130 42c3 43-7 73 0 108 5 27 24 47 24 80" />
            <path className="signature-root" d="M130 150c-25-17-45-39-59-68" />
            <path className="signature-root" d="M132 150c29-15 51-38 66-70" />
            <path className="signature-leaf" d="M132 68c-26 4-43 19-48 43 29 3 50-12 48-43Z" />
            <path className="signature-leaf" d="M138 88c24 1 39 14 45 35-25 5-44-8-45-35Z" />
          </svg>
        </div>
        {/* main image */}
        <FadeInSection variant="scale" className="h-full">
          <figure className="img-reveal brand-cluster-item group h-full">
            <div className="overflow-hidden h-full">
              <img
                src={main.src}
                alt={main.alt}
                loading="lazy"
                decoding="async"
                width={1600}
                height={1200}
                className="w-full h-[340px] md:h-full md:min-h-[560px] object-cover"
              />
            </div>
            <figcaption className="brand-caption text-xs md:text-sm tracking-[0.36em] uppercase text-foreground/80 transition-colors duration-500 group-hover:text-accent">
              {main.caption}
            </figcaption>
          </figure>
        </FadeInSection>

        {/* side images */}
        <div className="grid grid-cols-1 gap-4 md:gap-5">
          {side.map((item, i) => (
            <FadeInSection key={item.label} delay={(i + 1) * 0.08} variant="up">
              <figure className="img-reveal brand-cluster-item group">
                <div className="overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    decoding="async"
                    width={800}
                    height={600}
                    className="w-full h-[270px] object-cover"
                  />
                </div>
                <figcaption className="brand-caption text-xs md:text-sm tracking-[0.32em] uppercase text-foreground/80 transition-colors duration-500 group-hover:text-accent">
                  {item.caption}
                </figcaption>
              </figure>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}
