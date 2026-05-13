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

  const handleLinkClick = (href: string, isInternal?: boolean, e?: React.MouseEvent) => {
    setMobileMenuOpen(false);
    if (!isInternal && href.startsWith('/#')) {
      if (e) e.preventDefault();
      const id = href.split('#')[1];
      const element = document.getElementById(id);
      if (element) {
        const yOffset = -80; 
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({top: y, behavior: 'smooth'});
      }
      window.history.pushState(null, '', href);
    }
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 bg-background/95 backdrop-blur-md border-b border-white/5 shadow-lg`}
    >
      <nav className="max-w-[1400px] mx-auto px-6 md:px-10 h-20 flex items-center justify-between relative">
        <Link
          to="/"
          className="font-body font-bold text-[13px] tracking-[0.4em] uppercase z-50"
          onClick={() => setMobileMenuOpen(false)}
        >
          STAR<span className="text-accent">ROOTS</span>
        </Link>
        
        {/* Desktop Links */}
        <ul className="hidden lg:flex items-center gap-8 text-[10px] tracking-[0.3em] uppercase text-foreground/80 font-medium">
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
                  onClick={(e) => handleLinkClick(l.href, false, e)}
                >
                  {l.label}
                </a>
              )}
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 text-[11px] tracking-[0.2em] font-bold z-50">
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
            className="lg:hidden p-2 text-foreground z-50 bg-foreground/5 hover:bg-foreground/10 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div 
          className={`fixed inset-0 bg-background/98 backdrop-blur-xl transition-all duration-500 ease-in-out lg:hidden flex flex-col pt-24 ${
            mobileMenuOpen ? "opacity-100 pointer-events-auto translate-x-0" : "opacity-0 pointer-events-none translate-x-full"
          }`}
        >
          <div className="flex-1 overflow-y-auto px-8 pb-12">
            <div className="mb-12">
              <span className="text-[10px] tracking-[0.5em] uppercase text-accent font-bold mb-8 block opacity-60">Menu</span>
              <ul className="flex flex-col gap-2">
                {links.map((l) => (
                  <li key={l.href}>
                    {l.isInternal ? (
                      <Link
                        to={l.href}
                        onClick={() => handleLinkClick(l.href, true)}
                        className="text-2xl font-display font-bold py-4 block hover:text-accent transition-all duration-300 border-b border-white/5"
                      >
                        {l.label}
                      </Link>
                    ) : (
                      <a
                        href={l.href}
                        onClick={(e) => handleLinkClick(l.href, false, e)}
                        className="text-2xl font-display font-bold py-4 block hover:text-accent transition-all duration-300 border-b border-white/5"
                      >
                        {l.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mt-auto pt-8 border-t border-white/5">
              <p className="text-[10px] tracking-[0.3em] uppercase opacity-40 mb-4">Starroots © 2026</p>
              <div className="flex gap-4">
                <div className="w-8 h-[1px] bg-accent/40" />
                <div className="w-4 h-[1px] bg-accent/20" />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
