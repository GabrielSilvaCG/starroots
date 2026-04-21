import embalagemImg from "@/assets/embalagem.png";
import lojaImg from "@/assets/logoemloja.png";
import copoImg from "@/assets/copopequeno.png";
import sacolaImg from "@/assets/sacolaecologica.png";
import copobrImg from "@/assets/copobranco.png";
import { FadeInSection } from "./FadeInSection";

const main = { src: lojaImg, alt: "Logo aplicado na fachada da loja", label: "Fachada", caption: "01 — Identidade no ponto de venda" };
const side = [
  { src: copoImg, alt: "Copo pequeno com identidade Starroots", label: "Copo", caption: "02 — Embalagem primária" },
  { src: embalagemImg, alt: "Embalagem kraft com logo", label: "Embalagem", caption: "03 — Material kraft" },
  { src: sacolaImg, alt: "Sacola ecológica kraft", label: "Sacola", caption: "04 — Take-away sustentável" },
  { src: copobrImg, alt: "Copo branco ao ar livre", label: "Lifestyle", caption: "05 — Uso no cotidiano" },
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

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* main image */}
        <FadeInSection className="md:col-span-8 md:row-span-2">
          <figure className="group">
            <div className="overflow-hidden">
              <img
                src={main.src}
                alt={main.alt}
                loading="lazy"
                decoding="async"
                width={1600}
                height={1200}
                className="w-full h-[400px] md:h-[720px] object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </div>
            <figcaption className="mt-4 text-[10px] tracking-[0.4em] uppercase text-foreground/60">
              {main.caption}
            </figcaption>
          </figure>
        </FadeInSection>

        {/* side images */}
        {side.map((item, i) => (
          <FadeInSection key={item.label} delay={(i + 1) * 0.08} className="md:col-span-4">
            <figure className="group">
              <div className="overflow-hidden">
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  decoding="async"
                  width={800}
                  height={600}
                  className="w-full h-56 md:h-[345px] object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
              <figcaption className="mt-3 text-[10px] tracking-[0.35em] uppercase text-foreground/60">
                {item.caption}
              </figcaption>
            </figure>
          </FadeInSection>
        ))}
      </div>
    </section>
  );
}
