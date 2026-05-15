import { Building2, HardHat, Hammer, Ruler, Truck, Paintbrush, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Gros Œuvre",
    text: "Fondations, structures béton, maçonnerie et charpente pour des bâtiments durables.",
  },
  {
    icon: Ruler,
    title: "Conception & Études",
    text: "Étude de faisabilité, plans d'exécution et coordination technique sur mesure.",
  },
  {
    icon: HardHat,
    title: "Travaux Publics",
    text: "Voirie, réseaux divers, terrassement et infrastructures urbaines clé en main.",
  },
  {
    icon: Hammer,
    title: "Rénovation",
    text: "Réhabilitation, extension et modernisation de bâtiments existants.",
  },
  {
    icon: Paintbrush,
    title: "Aménagement Intérieur",
    text: "Cloisons, revêtements, peinture et finitions haut de gamme.",
  },
  {
    icon: Truck,
    title: "Génie Civil",
    text: "Ouvrages d'art, ponts, structures industrielles et grands chantiers.",
  },
];

const Services = () => {
  return (
    <section id="services" className="relative bg-background py-24 md:py-32">
      <div className="container-wide">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="eyebrow mb-4">Nos Services</p>
          <h2 className="font-display text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            Une expertise <span className="text-gradient-gold">complète</span> du bâtiment
          </h2>
          <p className="mt-6 text-muted-foreground">
            De la conception à la livraison, HENA BTP vous accompagne sur l'ensemble de la chaîne de construction avec un savoir-faire reconnu.
          </p>
        </div>

        <div className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, text }, i) => (
            <article
              key={title}
              className="group relative overflow-hidden bg-card p-8 transition-all duration-500 hover:bg-secondary md:p-10"
            >
              <div
                className="absolute inset-x-0 top-0 h-px scale-x-0 bg-gradient-gold transition-transform duration-500 group-hover:scale-x-100"
              />
              <div className="mb-6 flex items-center justify-between">
                <div className="flex h-16 w-16 items-center justify-center rounded-sm bg-secondary text-primary transition-all duration-500 group-hover:bg-gradient-gold group-hover:text-primary-foreground">
                  <Icon className="h-7 w-7" strokeWidth={1.5} />
                </div>
                <span className="font-display text-5xl font-black text-primary/10 transition-colors group-hover:text-primary/30">
                  0{i + 1}
                </span>
              </div>
              <p className="eyebrow mb-3 text-muted-foreground">Découvrir</p>
              <h3 className="mb-3 text-2xl font-bold tracking-tight text-foreground">{title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{text}</p>
              <a
                href="#contact"
                className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary opacity-0 transition-all duration-500 group-hover:opacity-100"
              >
                En savoir plus <ArrowUpRight className="h-4 w-4" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
