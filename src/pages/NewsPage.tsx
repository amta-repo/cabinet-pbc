import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Seo from "@/components/site/Seo";
import CtaBanner from "@/components/site/CtaBanner";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";
import p5 from "@/assets/project-5.jpg";
import p6 from "@/assets/project-6.jpg";

const featured = {
  category: "Innovation",
  title: "Le futur centre logistique d'Abomey-Calavi : un chantier exemplaire",
  excerpt:
    "Par sa conception, sa durabilité et sa programmation, le nouveau centre logistique illustre une nouvelle génération de bâtiments tertiaires au Bénin. 4 niveaux, 12 000 m² livrés en 18 mois.",
  image: p1,
};

const posts = [
  { cat: "Communauté", title: "Résoudre l'équation de la durabilité dans la construction publique", image: p2 },
  { cat: "Communauté", title: "Hôtel Atlantique récompensé « Meilleur projet commercial » de l'année", image: p3 },
  { cat: "Communauté", title: "L'aéroport de Cotonou atteint de nouveaux sommets architecturaux", image: p4 },
  { cat: "Chantier", title: "Sécurité sur chantier : nos engagements pour 2026", image: p5 },
  { cat: "Équipe", title: "Bienvenue à nos nouveaux ingénieurs civils diplômés", image: p6 },
  { cat: "Innovation", title: "Béton bas carbone : nos premiers retours d'expérience", image: p1 },
];

const NewsPage = () => (
  <>
    <Seo
      title="Actualités — BATI Moderne Constructions"
      description="Actualités, projets phares et innovations de BATI Moderne Constructions au Bénin."
      path="/actualites"
    />

    <section className="bg-navy pt-36 pb-16 md:pt-44">
      <div className="container-wide grid items-end gap-10 md:grid-cols-2">
        <h1 className="font-display text-6xl font-bold leading-none text-foreground md:text-8xl">
          Actualités<span className="text-primary">.</span>
        </h1>
        <p className="max-w-md text-muted-foreground md:justify-self-end">
          Nos équipes relèvent chaque jour de nouveaux défis. Ces histoires en sont le reflet — projets, innovations et engagements.
        </p>
      </div>
    </section>

    <section className="bg-navy pb-24">
      <div className="container-wide">
        <div className="grid items-stretch gap-0 overflow-hidden rounded-sm border border-border md:grid-cols-2">
          <div className="flex flex-col justify-center bg-navy-light p-10 md:p-16">
            <p className="eyebrow mb-4">{featured.category}</p>
            <h2 className="font-display text-3xl font-bold leading-tight text-foreground md:text-4xl">
              {featured.title}
            </h2>
            <p className="mt-6 text-muted-foreground">{featured.excerpt}</p>
            <Link to="/contact" className="group mt-8 inline-flex items-center gap-3 text-sm font-bold uppercase tracking-[0.18em] text-primary">
              Lire l'article <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="min-h-[420px]">
            <img src={featured.image} alt={featured.title} className="h-full w-full object-cover" />
          </div>
        </div>
      </div>
    </section>

    <section className="bg-navy-light py-24">
      <div className="container-wide">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <article key={p.title} className="group cursor-pointer">
              <div className="aspect-[4/3] overflow-hidden rounded-sm">
                <img src={p.image} alt={p.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.28em] text-primary">{p.cat}</p>
              <h3 className="mt-3 font-display text-xl font-bold leading-snug text-foreground transition-colors group-hover:text-primary">
                {p.title}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>

    <CtaBanner />
  </>
);

export default NewsPage;