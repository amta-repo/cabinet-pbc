import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const cols = [
  {
    title: "Qui Nous Sommes",
    text: "En tant que leader national dans le secteur de la construction, BATI MODERNE révolutionne ce que vous attendez d'une entreprise de bâtiment.",
  },
  {
    title: "Notre Mission",
    text: "Intégrer tout le cycle de vie du bâtiment dans une approche fluide et complète pour redéfinir la manière dont on construit au Bénin.",
  },
  {
    title: "Nos Valeurs",
    text: "Passion. Intégrité. Travail Rigoureux. Professionnalisme. Innovation.",
  },
];

const WhoWeAre = () => (
  <section className="relative overflow-hidden bg-[hsl(215_40%_6%)] py-24 md:py-32">
    <div className="container-wide">
      <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <div>
          <p className="eyebrow mb-4">À propos de nous</p>
          <h2 className="font-display text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
            Who <span className="text-gradient-gold">We Are</span>
          </h2>
        </div>
        <Link
          to="/a-propos"
          className="group inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-foreground hover:text-primary"
        >
          En savoir plus <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>

      <div className="grid gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-3">
        {cols.map((c) => (
          <div key={c.title} className="group bg-[hsl(215_40%_8%)] p-10 transition-colors hover:bg-[hsl(215_35%_10%)]">
            <div className="mb-6 h-px w-12 bg-gradient-gold transition-all group-hover:w-20" />
            <h3 className="font-display text-2xl font-bold text-foreground md:text-3xl">{c.title}</h3>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">{c.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhoWeAre;