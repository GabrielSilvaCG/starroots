import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/HeroSection";
import { ApplicationsGrid } from "@/components/ApplicationsGrid";
import { ComparisonSection } from "@/components/ComparisonSection";
import { ValuesSection } from "@/components/ValuesSection";
import { TimelineSection } from "@/components/TimelineSection";
import { FinancialSection } from "@/components/FinancialSection";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Starroots — Projeto de Rebrand" },
      { name: "description", content: "Dos campos de café até o seu copo, a natureza é a prioridade. Conheça o rebrand Starroots." },
      { property: "og:title", content: "Starroots — Projeto de Rebrand" },
      { property: "og:description", content: "Uma nova identidade visual que conecta sustentabilidade e experiência." },
    ],
  }),
});

function Index() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <div className="section-divider max-w-4xl mx-auto" />
      <ApplicationsGrid />
      <div className="section-divider max-w-4xl mx-auto" />
      <ComparisonSection />
      <div className="section-divider max-w-4xl mx-auto" />
      <ValuesSection />
      <div className="section-divider max-w-4xl mx-auto" />
      <TimelineSection />
      <div className="section-divider max-w-4xl mx-auto" />
      <FinancialSection />

      <footer className="py-16 text-center text-xs text-muted-foreground tracking-widest uppercase">
        <p>@starroots · Dos campos de café até o seu copo</p>
      </footer>
    </main>
  );
}
