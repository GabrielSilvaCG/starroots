import { createFileRoute } from "@tanstack/react-router";
import { NavBar } from "@/components/NavBar";
import { HeroSection } from "@/components/HeroSection";
import { ProblemSection } from "@/components/ProblemSection";
import { SolutionSection } from "@/components/SolutionSection";
import { ActionsSection } from "@/components/ActionsSection";
import { ComboSection } from "@/components/ComboSection";
import { CookiePersonalizer } from "@/components/CookiePersonalizer";
import { ImpactCalculator } from "@/components/ImpactCalculator";
import { FinancialSection } from "@/components/FinancialSection";
import { ApplicationsGrid } from "@/components/ApplicationsGrid";
import { ConclusionSection } from "@/components/ConclusionSection";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Starroots — Rebrand Sustentável" },
      { name: "description", content: "Dos campos de café até o seu copo, a natureza é a prioridade. Conheça o rebrand Starroots." },
      { property: "og:title", content: "Starroots — Rebrand Sustentável" },
      { property: "og:description", content: "Uma nova identidade visual que conecta sustentabilidade, economia circular e experiência." },
    ],
  }),
});

function Index() {
  return (
    <>
      <NavBar />
      <main id="top" className="min-h-screen">
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <ActionsSection />
        <ComboSection />
        <CookiePersonalizer />
        <ImpactCalculator />
        <FinancialSection />
        <ApplicationsGrid />
        <ConclusionSection />

        <footer
          className="px-6 md:px-10 py-20 border-t border-border"
          style={{ backgroundColor: "#0a2e1a" }}
        >
          <div className="max-w-[1400px] mx-auto text-center">
            <div className="w-12 h-px bg-accent mx-auto mb-8" />
            <p className="text-2xl md:text-4xl font-display italic leading-snug max-w-3xl mx-auto mb-12">
              "Dos campos de café até o seu copo,<br />a natureza é a prioridade."
            </p>
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] tracking-[0.4em] uppercase text-foreground/50">
              <p>@starroots.ofc</p>
              <p className="text-center">Projeto desenvolvido por Allyce, Ana Luiza e Gabriel Silva</p>
              <p>© Starroots</p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
