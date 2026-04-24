import embalagemImg from "@/assets/embalagem.png";
import lojaImg from "@/assets/logoemloja.png";
import copoImg from "@/assets/copopequeno.png";
import { FadeInSection } from "./FadeInSection";

const main = { src: lojaImg, alt: "Logo aplicado na fachada da loja", label: "Fachada", caption: "01 — Identidade no ponto de venda" };
const side = [
  { src: copoImg, alt: "Copo pequeno com identidade Starroots", label: "Copo", caption: "02 — Embalagem primária" },
  { src: embalagemImg, alt: "Embalagem kraft com logo", label: "Embalagem", caption: "03 — Material kraft" },
];

export function ApplicationsGrid() {
  return (
    <section id="identidade" className="scroll-anchor px-6 md:px-10 py-32 max-w-[1400px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-20 items-end">
        <FadeInSection className="md:col-span-7">
          <p className="text-[10px] tracking-[0.4em] uppercase text-accent mb-6">Capítulo 07 — Lookbook</p>
          <h2
            className="font-display font-black leading-[0.9] tracking-[-0.03em]"
            style={{ fontSize: "clamp(2.75rem, 6vw, 5.5rem)" }}
          >
            Aplicações<br /><em className="italic font-semibold text-accent">da marca.</em>
          </h2>
        </FadeInSection>
        <FadeInSection delay={0.15} className="md:col-span-4 md:col-start-9">
          <p className="text-base text-foreground/70 leading-relaxed font-body">
            Folhas integradas à sereia, paleta verde-kraft e embalagens em papel reciclado — cada
            peça reforça a narrativa de origem.
          </p>
        </FadeInSection>
      </div>

      <div className="brand-cluster grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5">
        {/* main image */}
        <FadeInSection variant="scale" className="md:col-span-6 md:row-span-2">
          <figure className="img-reveal brand-cluster-item group h-full">
            <div className="overflow-hidden h-full">
              <img
                src={main.src}
                alt={main.alt}
                loading="lazy"
                decoding="async"
                width={1600}
                height={1200}
                className="w-full h-[360px] md:h-full min-h-[520px] object-cover"
              />
            </div>
            <figcaption className="brand-caption text-[10px] tracking-[0.4em] uppercase text-foreground/75 transition-colors duration-500 group-hover:text-accent">
              {main.caption}
            </figcaption>
          </figure>
        </FadeInSection>

        {/* side images */}
        {side.map((item, i) => (
          <FadeInSection key={item.label} delay={(i + 1) * 0.08} variant="up" className="md:col-span-6">
            <figure className="img-reveal brand-cluster-item group">
              <div className="overflow-hidden">
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  decoding="async"
                  width={800}
                  height={600}
                  className="w-full h-[250px] md:h-[252px] object-cover"
                />
              </div>
              <figcaption className="brand-caption text-[10px] tracking-[0.35em] uppercase text-foreground/75 transition-colors duration-500 group-hover:text-accent">
                {item.caption}
              </figcaption>
            </figure>
          </FadeInSection>
        ))}
      </div>
    </section>
  );
}
