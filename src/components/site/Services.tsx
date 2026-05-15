import { Building2, HardHat, Hammer, Ruler, Truck, Paintbrush, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  { icon: Ruler, title: "Plans & Conception", text: "Plans d'architecture, plans d'exécution, métrés et études techniques sur mesure." },
  { icon: Building2, title: "Gros Œuvre", text: "Fondations, structures béton armé, maçonnerie et charpente durables." },
  { icon: HardHat, title: "Suivi de Chantier", text: "Coordination, contrôle qualité et reporting régulier jusqu'à la livraison." },
  { icon: Hammer, title: "Rénovation", text: "Réhabilitation, extension et modernisation de bâtiments existants." },
  { icon: Paintbrush, title: "Aménagement Intérieur", text: "Cloisons, revêtements, peinture et finitions soignées." },
  { icon: Truck, title: "Génie Civil", text: "Voirie, réseaux divers, terrassement et ouvrages d'art." },
];

const Services = () => {
  return (
    <section className="relative bg-background py-24 md:py-32">
      <div className="container-wide">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="eyebrow mb-4">Nos Services</p>
          <h2 className="font-display text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            Une expertise <span className="text-gradient-gold">complète</span> du bâtiment
          </h2>
          <p className="mt-6 text-muted-foreground">
            De la conception des plans à la livraison clé en main, Cabinet PBC vous accompagne sur l'ensemble de la chaîne de construction.
          </p>
        </div>

        <div className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, text }, i) => (
            <article key={title} className="group relative overflow-hidden bg-card p-8 transition-all duration-500 hover:bg-secondary md:p-10">
              <div className="absolute inset-x-0 top-0 h-px scale-x-0 bg-gradient-gold transition-transform duration-500 group-hover:scale-x-100" />
              <div className="mb-6 flex items-center justify-between">
                <div className="flex h-16 w-16 items-center justify-center rounded-sm bg-secondary text-primary transition-all duration-500 group-hover:bg-gradient-gold group-hover:text-primary-foreground">
                  <Icon className="h-7 w-7" strokeWidth={1.5} />
                </div>
                <span className="font-display text-5xl font-black text-primary/10 transition-colors group-hover:text-primary/30">0{i + 1}</span>
              </div>
              <p className="eyebrow mb-3 text-muted-foreground">Découvrir</p>
              <h3 className="mb-3 text-2xl font-bold tracking-tight text-foreground">{title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{text}</p>
              <Link to="/contact" className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary opacity-0 transition-all duration-500 group-hover:opacity-100">
                En savoir plus <ArrowUpRight className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
