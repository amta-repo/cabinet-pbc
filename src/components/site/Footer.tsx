import { Facebook, Instagram, Linkedin, Twitter, ArrowUp } from "lucide-react";
import logo from "@/assets/hena-logo.png";

const Footer = () => {
  return (
    <footer className="relative bg-navy pt-20">
      <div className="container-wide grid gap-12 pb-16 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <a href="#accueil" className="flex items-center gap-3">
            <img src={logo} alt="HENA BTP" width={56} height={56} className="h-14 w-14" />
            <div>
              <div className="font-display text-2xl font-bold tracking-wider">
                HENA <span className="text-gradient-gold">BTP</span>
              </div>
              <div className="text-[10px] uppercase tracking-[0.32em] text-muted-foreground">
                Construction · Excellence
              </div>
            </div>
          </a>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
            HENA BTP est une entreprise de bâtiment et de travaux publics dédiée à la réalisation d'ouvrages durables, innovants et porteurs de valeur pour ses clients.
          </p>
          <div className="mt-6 flex gap-3">
            {[Facebook, Instagram, Linkedin, Twitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social"
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
            {["Accueil", "À propos", "Services", "Projets", "Équipe", "Contact"].map((l) => (
              <li key={l}>
                <a
                  href={`#${l === "Accueil" ? "accueil" : l === "À propos" ? "about" : l === "Projets" ? "projets" : l === "Équipe" ? "equipe" : l.toLowerCase()}`}
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-5 text-xs font-semibold uppercase tracking-[0.32em] text-primary">
            Contact
          </h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li>12 Avenue des Bâtisseurs<br />75008 Paris, France</li>
            <li><a href="tel:+33123456789" className="hover:text-primary">+33 1 23 45 67 89</a></li>
            <li><a href="mailto:contact@henabtp.fr" className="hover:text-primary">contact@henabtp.fr</a></li>
            <li>Lun – Sam : 8h00 – 17h30</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-wide flex flex-wrap items-center justify-between gap-4 py-6 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} HENA BTP. Tous droits réservés.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-primary">Mentions légales</a>
            <a href="#" className="hover:text-primary">Politique de confidentialité</a>
            <a
              href="#accueil"
              className="flex h-9 w-9 items-center justify-center rounded-sm bg-gradient-gold text-primary-foreground transition-transform hover:-translate-y-0.5"
              aria-label="Retour en haut"
            >
              <ArrowUp className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
