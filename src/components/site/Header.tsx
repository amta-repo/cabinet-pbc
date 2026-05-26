import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Phone, Mail, Clock, Facebook, Instagram, Linkedin, ChevronDown, ArrowUpRight } from "lucide-react";
import logo from "@/assets/bati-logo.png";
import { services } from "@/data/services";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import about from "@/assets/about-genie-civil.jpg";
import founder from "@/assets/Founder.jpg";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";

type SubItem = { label: string; short: string; to: string; image: string };
type NavItem = { label: string; to: string; subItems?: SubItem[]; tagline?: string };

const serviceSubItems: SubItem[] = services.map((s) => ({
  label: s.title,
  short: s.short,
  to: `/services/${s.slug}`,
  image: s.image,
}));

const navItems: NavItem[] = [
  {
    label: "Accueil",
    to: "/",
    tagline: "Bienvenue chez BATI Moderne",
    subItems: [
      { label: "Présentation", short: "Découvrez l'univers BATI Moderne en un coup d'œil.", to: "/", image: hero1 },
      { label: "Nos services", short: "Une offre complète : plans, construction, suivi.", to: "/services", image: hero2 },
      { label: "Nos projets", short: "Nos réalisations récentes au Bénin.", to: "/projets", image: p1 },
      { label: "Actualités", short: "Suivez nos dernières actualités et chantiers.", to: "/actualites", image: p2 },
    ],
  },
  {
    label: "À propos",
    to: "/a-propos",
    tagline: "Notre identité",
    subItems: [
      { label: "Notre histoire", short: "10+ années d'expertise au service du bâtiment.", to: "/a-propos", image: about },
      { label: "Mission & valeurs", short: "Ce qui guide chacune de nos décisions.", to: "/a-propos", image: hero3 },
      { label: "Notre équipe", short: "Architectes, ingénieurs, chefs de chantier.", to: "/equipe", image: p3 },
      { label: "Le fondateur", short: "Rencontrez Christel DEGAN, Directeur Général.", to: "/a-propos", image: founder },
      { label: "FAQ", short: "Réponses aux questions les plus fréquentes.", to: "/faqs", image: p4 },
    ],
  },
  { label: "Services", to: "/services", tagline: "Notre savoir-faire", subItems: serviceSubItems },
  {
    label: "Projets",
    to: "/projets",
    tagline: "Nos réalisations",
    subItems: [
      { label: "Tous les projets", short: "Vue d'ensemble de nos réalisations.", to: "/projets", image: p1 },
      { label: "Bâtiments résidentiels", short: "Villas, immeubles, logements collectifs.", to: "/projets", image: p2 },
      { label: "Infrastructures", short: "Voirie, réseaux divers, ouvrages d'art.", to: "/projets", image: p3 },
      { label: "Rénovations", short: "Réhabilitation et modernisation.", to: "/projets", image: p4 },
    ],
  },
  {
    label: "Contact",
    to: "/contact",
    tagline: "Restons en contact",
    subItems: [
      { label: "Demander un devis", short: "Réponse personnalisée sous 48h.", to: "/contact", image: hero1 },
      { label: "Nous appeler", short: "+229 01 97 76 70 48 — Lun-Sam 8h-17h30.", to: "/contact", image: hero2 },
      { label: "Nous écrire", short: "info@batimoderne.com — réponse rapide.", to: "/contact", image: hero3 },
      { label: "Nous rendre visite", short: "Abomey-Calavi, Bénin — C8RH+PJ.", to: "/contact", image: about },
    ],
  },
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
  const [hoverImages, setHoverImages] = useState<Record<string, string>>(
    Object.fromEntries(navItems.filter((n) => n.subItems).map((n) => [n.to, n.subItems![0].image])),
  );

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
                      {item.subItems && <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />}
                      <span className={`absolute -bottom-1 left-0 h-px bg-gradient-gold transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"}`} />
                    </>
                  )}
                </NavLink>

                {item.subItems && (
                  <div className="invisible absolute left-1/2 top-full z-50 w-[920px] -translate-x-1/2 pt-6 opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100">
                    <div className="grid grid-cols-5 overflow-hidden rounded-sm border border-border bg-[hsl(215_40%_6%)] shadow-elegant">
                      <div className="col-span-3 grid grid-cols-2 gap-x-4 gap-y-1 p-8">
                        {item.subItems.map((s) => (
                          <Link
                            key={s.label + s.to}
                            to={s.to}
                            onMouseEnter={() => setHoverImages((prev) => ({ ...prev, [item.to]: s.image }))}
                            className="group/item block rounded-sm p-4 transition-colors hover:bg-secondary/60"
                          >
                            <div className="flex items-center justify-between">
                              <h4 className="text-[15px] font-semibold text-foreground transition-colors group-hover/item:text-primary">
                                {s.label}
                              </h4>
                              <ArrowUpRight className="h-4 w-4 text-primary opacity-0 transition-all group-hover/item:opacity-100" />
                            </div>
                            <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{s.short}</p>
                          </Link>
                        ))}
                      </div>
                      <div className="relative col-span-2 min-h-[340px] overflow-hidden">
                        <img src={hoverImages[item.to]} alt={`Aperçu ${item.label}`} className="absolute inset-0 h-full w-full object-cover transition-opacity duration-300" />
                        <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-primary">{item.tagline}</p>
                          <p className="mt-2 font-display text-xl font-bold text-foreground">Construire l'excellence au Bénin</p>
                          <Link to={item.to} className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-foreground hover:text-primary">
                            Voir {item.label.toLowerCase()} <ArrowUpRight className="h-3.5 w-3.5" />
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
