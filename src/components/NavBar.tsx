import { useEffect, useState } from "react";

const links = [
  { href: "#problema", label: "Problema" },
  { href: "#solucao", label: "Solução" },
  { href: "#acoes", label: "Ações" },
  { href: "#financeiro", label: "Financeiro" },
  { href: "#identidade", label: "Identidade" },
];

export function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/85 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="font-display font-bold tracking-widest text-sm">
          STAR<span className="text-accent">ROOTS</span>
        </a>
        <ul className="hidden md:flex items-center gap-8 text-xs tracking-widest uppercase text-muted-foreground">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-accent transition-colors">{l.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
