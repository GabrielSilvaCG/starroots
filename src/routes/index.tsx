import { createFileRoute } from "@tanstack/react-router";
import { NavBar } from "@/components/NavBar";
import { HeroSection } from "@/components/HeroSection";
import { ProblemSection } from "@/components/ProblemSection";
import { SolutionSection } from "@/components/SolutionSection";
import { ActionsSection } from "@/components/ActionsSection";
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
        <div className="section-divider max-w-4xl mx-auto" />
        <ProblemSection />
        <div className="section-divider max-w-4xl mx-auto" />
        <SolutionSection />
        <div className="section-divider max-w-4xl mx-auto" />
        <ActionsSection />
        <div className="section-divider max-w-4xl mx-auto" />
        <FinancialSection />
        <div className="section-divider max-w-4xl mx-auto" />
        <ApplicationsGrid />
        <ConclusionSection />

        <footer className="px-6 py-12 border-t border-border">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs tracking-widest uppercase text-muted-foreground">
            <p>@starroots.ofc</p>
            <p className="text-center">Projeto desenvolvido por Allyce, Ana Luiza e Gabriel Silva</p>
            <p>© Starroots</p>
          </div>
        </footer>
      </main>
    </>
  );
}
