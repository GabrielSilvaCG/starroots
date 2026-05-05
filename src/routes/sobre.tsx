import { createFileRoute, Link } from "@tanstack/react-router";
import { NavBar } from "@/components/NavBar";
import { FadeInSection } from "@/components/FadeInSection";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/sobre")({
  component: Sobre,
  head: () => ({
    meta: [
      { title: "Sobre o Projeto — Starroots" },
      { name: "description", content: "Conheça a história e a equipe por trás do Starroots." },
    ],
  }),
});

function Sobre() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavBar />
      
      <main id="top">
        {/* Hero Section */}
        <section 
          className="min-h-[80vh] flex flex-col items-center justify-center px-6 text-center"
          style={{ backgroundColor: "#0a2e1a", color: "white" }}
        >
          <FadeInSection>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display mb-6 max-w-4xl mx-auto leading-tight">
              A história por trás das raízes.
            </h1>
            <p className="text-xl md:text-2xl font-display italic max-w-2xl mx-auto" style={{ color: "#a8d5b5" }}>
              Um projeto escolar que virou um movimento real.
            </p>
          </FadeInSection>
        </section>

        {/* Seção 1 — A origem */}
        <section className="py-32 px-6" style={{ backgroundColor: "#f5f0e8" }}>
          <div className="max-w-4xl mx-auto">
            <FadeInSection>
              <h2 className="text-xs uppercase tracking-[0.5em] mb-12 opacity-50">A Origem</h2>
              <div className="grid md:grid-cols-2 gap-12 items-start">
                <p className="text-2xl md:text-3xl font-display leading-relaxed text-balance text-[#1a3d2b]">
                  O projeto nasceu de uma aula de sustentabilidade no curso técnico de administração da <span className="underline decoration-accent underline-offset-4">Escola Estadual Catarina Jorge Gonçalves</span> em Contagem-MG.
                </p>
                <p className="text-lg leading-relaxed text-foreground/70">
                  A professora desafiou o grupo a escolher uma empresa real e propor mudanças sustentáveis genuínas. Escolheram o Starbucks para repensar como uma gigante mundial poderia adotar práticas de economia circular de forma viável e impactante.
                </p>
              </div>
            </FadeInSection>
          </div>
        </section>

        {/* Seção 2 — O grupo */}
        <section className="py-32 px-6" style={{ backgroundColor: "#1a3d2b", color: "white" }}>
          <div className="max-w-6xl mx-auto">
            <FadeInSection className="text-center mb-20">
              <h2 className="text-xs uppercase tracking-[0.5em] mb-4 opacity-50">A Equipe</h2>
              <p className="text-3xl font-display italic">Os idealizadores do Starroots</p>
            </FadeInSection>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: "Allyce", role: "PARTE ESCRITA E PESQUISA" },
                { name: "Ana Luiza", role: "ANÁLISE FINANCEIRA E DADOS" },
                { name: "Gabriel Silva", role: "DESIGN, IDENTIDADE VISUAL E DESENVOLVIMENTO" },
              ].map((member, i) => (
                <FadeInSection key={member.name} delay={i * 200}>
                  <div className="p-12 border border-white/10 flex flex-col items-center text-center h-full hover:bg-white/5 transition-colors duration-500">
                    <h3 className="text-4xl font-display mb-4">{member.name}</h3>
                    <p className="text-[10px] tracking-[0.35em] uppercase opacity-60 leading-relaxed max-w-[200px]">
                      {member.role}
                    </p>
                  </div>
                </FadeInSection>
              ))}
            </div>
          </div>
        </section>

        {/* Seção 3 — O reconhecimento */}
        <section className="py-32 px-6" style={{ backgroundColor: "#c8a97e", color: "#0a2e1a" }}>
          <div className="max-w-4xl mx-auto">
            <FadeInSection className="text-center mb-20">
              <h2 className="text-xs uppercase tracking-[0.5em] mb-4 opacity-70">Marcos</h2>
              <p className="text-3xl font-display italic">O Reconhecimento</p>
            </FadeInSection>

            <div className="relative pl-8 md:pl-0">
              {/* Vertical line for mobile */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-[#0a2e1a]/20 md:hidden" />
              
              <div className="space-y-16">
                {[
                  "A professora amou o projeto e pediu pra apresentar em cada sala da escola.",
                  "O grupo entrou em contato com o Starbucks Brasil.",
                  "O Starbucks respondeu positivamente e encaminhou para a área responsável."
                ].map((step, i) => (
                  <FadeInSection key={i} className={`flex flex-col md:flex-row items-start md:items-center ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                    <div className="flex-1 w-full" />
                    <div className="relative z-10 flex items-center justify-center w-8 h-8 rounded-full border border-[#0a2e1a] bg-[#c8a97e] -ml-[33px] md:mx-8 shrink-0">
                      <span className="text-xs font-medium">{i + 1}</span>
                    </div>
                    <div className="flex-1 pt-2 md:pt-0">
                      <p className="text-xl md:text-2xl font-display leading-tight max-w-xs mx-auto md:mx-0">
                        {step}
                      </p>
                    </div>
                  </FadeInSection>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Seção final */}
        <section 
          className="py-32 px-6 text-center"
          style={{ backgroundColor: "#0a2e1a", color: "white" }}
        >
          <FadeInSection>
            <div className="w-12 h-px bg-accent mx-auto mb-12" />
            <h2 className="text-3xl md:text-5xl font-display italic mb-12 max-w-3xl mx-auto">
              "Dos campos de café até o seu copo,<br />a natureza é a prioridade."
            </h2>
            <Link 
              to="/comprar"
              className="inline-flex items-center gap-3 px-10 py-5 bg-accent text-[#0a2e1a] text-[10px] tracking-[0.4em] uppercase font-medium hover:bg-white transition-all duration-500 group"
            >
              Comprar Agora
              <ArrowRight className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1" />
            </Link>
          </FadeInSection>
        </section>
      </main>

      <footer className="py-12 px-6 border-t border-white/5 text-center text-[10px] tracking-[0.4em] uppercase text-white/30" style={{ backgroundColor: "#0a2e1a" }}>
        <p>© {new Date().getFullYear()} Starroots</p>
      </footer>
    </div>
  );
}
