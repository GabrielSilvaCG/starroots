import embalagemImg from "@/assets/embalagem.png";
import lojaImg from "@/assets/logoemloja.png";
import copoImg from "@/assets/copopequeno.png";
import sacolaImg from "@/assets/sacolaecologica.png";
import copobrImg from "@/assets/copobranco.png";

const applications = [
  { src: lojaImg, alt: "Logo aplicado na fachada da loja", label: "Fachada", span: "md:col-span-2" },
  { src: copoImg, alt: "Copo pequeno com identidade Starroots", label: "Copo", span: "" },
  { src: embalagemImg, alt: "Embalagem kraft com logo", label: "Embalagem", span: "" },
  { src: sacolaImg, alt: "Sacola ecológica kraft", label: "Sacola", span: "" },
  { src: copobrImg, alt: "Copo branco ao ar livre", label: "Lifestyle", span: "md:col-span-2" },
];

export function ApplicationsGrid() {
  return (
    <section className="px-6 py-24 max-w-7xl mx-auto">
      <div className="mb-16 text-center">
        <p className="text-xs tracking-[0.3em] uppercase text-accent mb-3">Identidade Visual</p>
        <h2 className="text-4xl md:text-5xl font-display font-bold">Aplicações</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {applications.map((item) => (
          <div
            key={item.label}
            className={`group relative overflow-hidden rounded-xl bg-card ${item.span}`}
          >
            <img
              src={item.src}
              alt={item.alt}
              className="w-full h-72 md:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-background/90 to-transparent">
              <span className="text-sm tracking-widest uppercase text-primary-foreground/80">{item.label}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
