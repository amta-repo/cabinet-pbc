import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, ArrowUp } from "lucide-react";

const navLinks = [
  { label: "Accueil", to: "/" },
  { label: "À propos", to: "/a-propos" },
  { label: "Services", to: "/services" },
  { label: "Projets", to: "/projets" },
  { label: "Équipe", to: "/equipe" },
  { label: "FAQs", to: "/faq" },
  { label: "Contact", to: "/contact" },
];

const Footer = () => {
  return (
    <footer className="relative bg-navy pt-20">
      <div className="container-wide grid gap-12 pb-16 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-14 w-14 items-center justify-center rounded-sm bg-gradient-gold text-primary-foreground shadow-gold">
              <span className="font-display text-xl font-black">PBC</span>
            </div>
            <div>
              <div className="font-display text-2xl font-bold tracking-wider">
                CABINET <span className="text-gradient-gold">PBC</span>
              </div>
              <div className="text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
                Plans Bâtiments &amp; Constructions
              </div>
            </div>
          </Link>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
            BATI Moderne Constructions accompagne particuliers, entreprises et collectivités au Bénin pour la conception de plans, le suivi de chantier et la construction d'ouvrages durables.
          </p>
          <div className="mt-6 flex gap-3">
            {[Facebook, Instagram, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Réseau social"
                className="flex h-10 w-10 items-center justify-center rounded-sm border border-border text-foreground/70 transition-all hover:border-primary hover:bg-primary/10 hover:text-primary"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="mb-5 text-xs font-semibold uppercase tracking-[0.32em] text-primary">
            Navigation
          </h4>
          <ul className="space-y-3 text-sm">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-muted-foreground transition-colors hover:text-primary">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-5 text-xs font-semibold uppercase tracking-[0.32em] text-primary">
            Contact
          </h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li>C8RH+PJ Abomey-Calavi<br />Bénin</li>
            <li><a href="tel:+2290197767048" className="hover:text-primary">+229 01 97 76 70 48</a></li>
            <li><a href="mailto:info@batimoderne.com" className="hover:text-primary">info@batimoderne.com</a></li>
            <li>Lun – Sam : 8h00 – 17h30</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-wide flex flex-wrap items-center justify-between gap-4 py-6 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} BATI Moderne Constructions. Tous droits réservés.</p>
          <div className="flex items-center gap-6">
            <Link to="/faq" className="hover:text-primary">FAQs</Link>
            <a href="#" className="hover:text-primary">Mentions légales</a>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex h-9 w-9 items-center justify-center rounded-sm bg-gradient-gold text-primary-foreground transition-transform hover:-translate-y-0.5"
              aria-label="Retour en haut"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
