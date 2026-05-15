import { useEffect, useState } from "react";
import { Menu, X, Phone, Mail, Clock, Facebook, Instagram, Linkedin } from "lucide-react";
import logo from "@/assets/hena-logo.png";

const navItems = [
  { label: "Accueil", href: "#accueil" },
  { label: "À propos", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projets", href: "#projets" },
  { label: "Équipe", href: "#equipe" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Top utility bar */}
      <div className="hidden border-b border-border/40 bg-navy/80 backdrop-blur md:block">
        <div className="container-wide flex h-10 items-center justify-between text-xs text-muted-foreground">
          <div className="flex items-center gap-6">
            <a href="tel:+33123456789" className="flex items-center gap-2 transition-colors hover:text-primary">
              <Phone className="h-3.5 w-3.5 text-primary" /> +33 1 23 45 67 89
            </a>
            <a href="mailto:contact@henabtp.fr" className="flex items-center gap-2 transition-colors hover:text-primary">
              <Mail className="h-3.5 w-3.5 text-primary" /> contact@henabtp.fr
            </a>
            <span className="flex items-center gap-2">
              <Clock className="h-3.5 w-3.5 text-primary" /> Lun–Sam 8h00 – 17h30 · Dim Fermé
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" aria-label="Facebook" className="transition-colors hover:text-primary"><Facebook className="h-4 w-4" /></a>
            <a href="#" aria-label="Instagram" className="transition-colors hover:text-primary"><Instagram className="h-4 w-4" /></a>
            <a href="#" aria-label="LinkedIn" className="transition-colors hover:text-primary"><Linkedin className="h-4 w-4" /></a>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div
        className={`transition-all duration-500 ${
          scrolled ? "bg-navy/95 shadow-elegant backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="container-wide flex h-20 items-center justify-between md:h-24">
          <a href="#accueil" className="flex items-center gap-3">
            <img src={logo} alt="HENA BTP" width={56} height={56} className="h-12 w-12 md:h-14 md:w-14" />
            <div className="leading-tight">
              <div className="font-display text-xl font-bold tracking-wider text-foreground md:text-2xl">
                HENA <span className="text-gradient-gold">BTP</span>
              </div>
              <div className="text-[10px] uppercase tracking-[0.32em] text-muted-foreground">
                Construction · Excellence
              </div>
            </div>
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="group relative text-sm font-medium uppercase tracking-wider text-foreground/85 transition-colors hover:text-primary"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-gold transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="hidden rounded-sm bg-gradient-gold px-6 py-3 text-sm font-semibold uppercase tracking-wider text-primary-foreground shadow-gold transition-transform hover:-translate-y-0.5 lg:inline-block"
          >
            Devis Gratuit
          </a>

          <button
            className="rounded-sm border border-border p-2 text-foreground lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="border-t border-border bg-navy lg:hidden">
            <nav className="container-wide flex flex-col gap-1 py-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-sm px-3 py-3 text-sm font-medium uppercase tracking-wider text-foreground/90 transition-colors hover:bg-secondary hover:text-primary"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-sm bg-gradient-gold px-4 py-3 text-center text-sm font-semibold uppercase tracking-wider text-primary-foreground"
              >
                Devis Gratuit
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
