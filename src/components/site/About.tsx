import { Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import about from "@/assets/about.jpg";

const points = [
  "Cabinet d'architecture et bureau d'études complet",
  "Plans, métrés et suivi de chantier rigoureux",
  "Maîtrise d'œuvre du résidentiel au tertiaire",
  "Engagement qualité, délais et budget maîtrisé",
];

const About = () => {
  return (
    <section className="relative overflow-hidden bg-navy-light py-24 md:py-32">
      <div className="absolute -right-40 top-20 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="container-wide grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div className="relative">
          <div className="relative overflow-hidden rounded-sm shadow-elegant">
            <img src={about} alt="Équipe Cabinet PBC sur chantier à Abomey-Calavi" width={1280} height={896} loading="lazy" className="h-full w-full object-cover" />
          </div>
          <div className="absolute -bottom-8 -right-4 hidden rounded-sm bg-gradient-gold p-8 shadow-gold md:block">
            <div className="font-display text-5xl font-black text-primary-foreground">10+</div>
            <div className="mt-1 text-xs font-semibold uppercase tracking-widest text-primary-foreground/80">Années d'expertise</div>
          </div>
          <div className="absolute -left-4 -top-4 hidden h-24 w-24 border-l-2 border-t-2 border-primary md:block" />
          <div className="absolute -bottom-4 right-44 hidden h-24 w-24 border-b-2 border-r-2 border-primary md:block" />
        </div>

        <div>
          <p className="eyebrow mb-4">À propos de Cabinet PBC</p>
          <h2 className="font-display text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            Plans, bâtiments &amp; <span className="text-gradient-gold">constructions</span>
          </h2>
          <p className="mt-6 text-muted-foreground">
            Basé à Abomey-Calavi, Cabinet PBC est un acteur de référence du bâtiment au Bénin. Notre approche combine rigueur technique, créativité architecturale et respect des engagements pour livrer des ouvrages d'exception.
          </p>
          <p className="mt-4 text-muted-foreground">
            Nous accompagnons particuliers, entreprises et collectivités dans la réalisation de leurs projets — de la conception des plans à la livraison clé en main.
          </p>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3 text-sm text-foreground/90">
                <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-gradient-gold">
                  <Check className="h-3 w-3 text-primary-foreground" strokeWidth={3} />
                </span>
                {p}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex items-center gap-6">
            <Link to="/projets" className="group inline-flex items-center gap-3 rounded-sm bg-gradient-gold px-7 py-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground shadow-gold transition-transform hover:-translate-y-0.5">
              Voir nos réalisations
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <div className="hidden sm:block">
              <div className="text-xs uppercase tracking-widest text-muted-foreground">Appelez-nous</div>
              <a href="tel:+2290197767048" className="font-display text-xl font-bold text-primary">+229 01 97 76 70 48</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
