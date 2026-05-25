import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Phone, Mail, Clock, Facebook, Instagram, Linkedin, ChevronDown, ArrowUpRight } from "lucide-react";
import logo from "@/assets/bati-logo.png";
import { services } from "@/data/services";

const navItems = [
  { label: "Accueil", to: "/" },
  { label: "À propos", to: "/a-propos" },
  { label: "Services", to: "/services", mega: true },
  { label: "Projets", to: "/projets" },
  { label: "Contact", to: "/contact" },
];

const BrandMark = () => (
  <Link to="/" className="flex items-center gap-3" aria-label="BATI Moderne Constructions — Accueil">
    <img src={logo} alt="BATI Moderne Constructions" width={56} height={56} className="h-12 w-12 flex-none object-contain md:h-14 md:w-14" />
    <div className="leading-tight">
      <div className="font-display text-lg font-bold tracking-wider text-foreground md:text-xl">
        BATI <span className="text-gradient-gold">MODERNE</span>
      </div>
      <div className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground md:text-[11px]">
        Constructions
      </div>
    </div>
  </Link>
);

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [hoverImage, setHoverImage] = useState<string>(services[0].image);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="hidden border-b border-border/40 bg-navy/80 backdrop-blur md:block">
        <div className="container-wide flex h-10 items-center justify-between text-xs text-muted-foreground">
          <div className="flex items-center gap-6">
            <a href="tel:+2290197767048" className="flex items-center gap-2 transition-colors hover:text-primary">
              <Phone className="h-3.5 w-3.5 text-primary" /> +229 01 97 76 70 48
            </a>
            <a href="mailto:info@batimoderne.com" className="flex items-center gap-2 transition-colors hover:text-primary">
              <Mail className="h-3.5 w-3.5 text-primary" /> info@batimoderne.com
            </a>
            <span className="flex items-center gap-2">
              <Clock className="h-3.5 w-3.5 text-primary" /> Lun–Sam 8h00 – 17h30
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" aria-label="Facebook" className="transition-colors hover:text-primary"><Facebook className="h-4 w-4" /></a>
            <a href="#" aria-label="Instagram" className="transition-colors hover:text-primary"><Instagram className="h-4 w-4" /></a>
            <a href="#" aria-label="LinkedIn" className="transition-colors hover:text-primary"><Linkedin className="h-4 w-4" /></a>
          </div>
        </div>
      </div>

      <div className={`transition-all duration-500 ${scrolled ? "bg-navy/95 shadow-elegant backdrop-blur-md" : "bg-navy/40 backdrop-blur"}`}>
        <div className="container-wide flex h-20 items-center justify-between md:h-24">
          <BrandMark />

          <nav className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <div key={item.to} className="group relative">
                <NavLink
                  to={item.to}
                  end={item.to === "/"}
                  className={({ isActive }) =>
                    `relative inline-flex items-center gap-1 text-sm font-medium uppercase tracking-wider transition-colors hover:text-primary ${
                      isActive ? "text-primary" : "text-foreground/85"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {item.label}
                      {item.mega && <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />}
                      <span className={`absolute -bottom-1 left-0 h-px bg-gradient-gold transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"}`} />
                    </>
                  )}
                </NavLink>

                {item.mega && (
                  <div className="invisible absolute left-1/2 top-full z-50 w-[920px] -translate-x-1/2 pt-6 opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100">
                    <div className="grid grid-cols-5 overflow-hidden rounded-sm border border-border bg-[hsl(215_40%_6%)] shadow-elegant">
                      <div className="col-span-3 grid grid-cols-2 gap-x-4 gap-y-1 p-8">
                        {services.map((s) => (
                          <Link
                            key={s.slug}
                            to={`/services/${s.slug}`}
                            onMouseEnter={() => setHoverImage(s.image)}
                            className="group/item block rounded-sm p-4 transition-colors hover:bg-secondary/60"
                          >
                            <div className="flex items-center justify-between">
                              <h4 className="text-[15px] font-semibold text-foreground transition-colors group-hover/item:text-primary">
                                {s.title}
                              </h4>
                              <ArrowUpRight className="h-4 w-4 text-primary opacity-0 transition-all group-hover/item:opacity-100" />
                            </div>
                            <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{s.short}</p>
                          </Link>
                        ))}
                      </div>
                      <div className="relative col-span-2 min-h-[340px] overflow-hidden">
                        <img src={hoverImage} alt="Aperçu services" className="absolute inset-0 h-full w-full object-cover transition-opacity duration-300" />
                        <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-primary">Notre savoir-faire</p>
                          <p className="mt-2 font-display text-xl font-bold text-foreground">Construire l'excellence au Bénin</p>
                          <Link to="/services" className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-foreground hover:text-primary">
                            Tous les services <ArrowUpRight className="h-3.5 w-3.5" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <Link
            to="/contact"
            className="hidden rounded-sm bg-gradient-gold px-6 py-3 text-sm font-semibold uppercase tracking-wider text-primary-foreground shadow-gold transition-transform hover:-translate-y-0.5 lg:inline-block"
          >
            Devis Gratuit
          </Link>

          <button
            className="rounded-sm border border-border p-2 text-foreground lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="border-t border-border bg-navy lg:hidden">
            <nav className="container-wide flex flex-col gap-1 py-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === "/"}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `rounded-sm px-3 py-3 text-sm font-medium uppercase tracking-wider transition-colors hover:bg-secondary hover:text-primary ${
                      isActive ? "text-primary" : "text-foreground/90"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-sm bg-gradient-gold px-4 py-3 text-center text-sm font-semibold uppercase tracking-wider text-primary-foreground"
              >
                Devis Gratuit
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
