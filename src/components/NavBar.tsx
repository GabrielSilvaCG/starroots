import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";

const links = [
  { href: "/#problema", label: "Problema" },
  { href: "/#solucao", label: "Solução" },
  { href: "/sobre", label: "Sobre", isInternal: true },
  { href: "/#acoes", label: "Ações" },
  { href: "/#combo", label: "Combo" },
  { href: "/#impacto", label: "Impacto" },
  { href: "/#financeiro", label: "Financeiro" },
  { href: "/#identidade", label: "Identidade" },
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
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-500 ${
        scrolled ? "bg-background/85 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <nav className="max-w-[1400px] mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <Link
          to="/"
          className="font-body font-medium text-[11px] tracking-[0.4em] uppercase"
        >
          STAR<span className="text-accent">ROOTS</span>
        </Link>
        <ul className="hidden md:flex items-center gap-10 text-[10px] tracking-[0.35em] uppercase text-foreground/70">
          {links.map((l) => (
            <li key={l.href}>
              {l.isInternal ? (
                <Link
                  to={l.href}
                  className="link-grow inline-block hover:text-accent transition-colors duration-300"
                >
                  {l.label}
                </Link>
              ) : (
                <a
                  href={l.href}
                  className="link-grow inline-block hover:text-accent transition-colors duration-300"
                >
                  {l.label}
                </a>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
