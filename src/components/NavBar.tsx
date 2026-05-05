import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { useLanguage } from "@/store/useLanguage";
import { Menu, X } from "lucide-react";

export function NavBar() {
  const { language, setLanguage, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const links = [
    { href: "/#problema", label: t('nav.problema') },
    { href: "/#solucao", label: t('nav.solucao') },
    { href: "/sobre", label: t('nav.sobre'), isInternal: true },
    { href: "/#acoes", label: t('nav.acoes') },
    { href: "/#combo", label: t('nav.combo') },
    { href: "/#impacto", label: t('nav.impacto') },
    { href: "/#financeiro", label: t('nav.financeiro') },
    { href: "/#identidade", label: t('nav.identidade') },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-500 ${
        scrolled || mobileMenuOpen ? "bg-background/85 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <nav className="max-w-[1400px] mx-auto px-6 md:px-10 h-16 flex items-center justify-between relative">
        <Link
          to="/"
          className="font-body font-medium text-[11px] tracking-[0.4em] uppercase z-50"
          onClick={() => setMobileMenuOpen(false)}
        >
          STAR<span className="text-accent">ROOTS</span>
        </Link>
        
        {/* Desktop Links */}
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

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 text-[10px] tracking-[0.2em] font-medium z-50">
            <button
              onClick={() => setLanguage('PT')}
              className={`transition-colors duration-300 ${language === 'PT' ? 'text-accent' : 'text-foreground/40'}`}
            >
              PT
            </button>
            <span className="text-foreground/20">/</span>
            <button
              onClick={() => setLanguage('EN')}
              className={`transition-colors duration-300 ${language === 'EN' ? 'text-accent' : 'text-foreground/40'}`}
            >
              EN
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-foreground z-50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div 
          className={`fixed inset-0 bg-background transition-all duration-500 md:hidden flex flex-col pt-24 pb-10 px-6 overflow-y-auto ${
            mobileMenuOpen ? "opacity-100 pointer-events-auto translate-y-0" : "opacity-0 pointer-events-none -translate-y-4"
          }`}
        >
          <ul className="flex flex-col items-center gap-6 text-[11px] tracking-[0.4em] uppercase text-foreground/70">
            {links.map((l) => (
              <li key={l.href} className="w-full text-center">
                {l.isInternal ? (
                  <Link
                    to={l.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="hover:text-accent transition-colors duration-300 block py-3 border-b border-foreground/5"
                  >
                    {l.label}
                  </Link>
                ) : (
                  <a
                    href={l.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="hover:text-accent transition-colors duration-300 block py-3 border-b border-foreground/5"
                  >
                    {l.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
