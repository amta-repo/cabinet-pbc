import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";
import p5 from "@/assets/project-5.jpg";
import p6 from "@/assets/project-6.jpg";

type Post = { cat: string; date: string; title: string; image: string };

const sets: Post[][] = [
  [
    { cat: "Innovation", date: "12 Mai 2026", title: "Centre logistique d'Abomey-Calavi : un chantier exemplaire", image: p1 },
    { cat: "Communauté", date: "28 Avr 2026", title: "Durabilité et construction publique : nos engagements", image: p2 },
    { cat: "Récompense", date: "10 Avr 2026", title: "Hôtel Atlantique élu « Meilleur projet commercial »", image: p3 },
  ],
  [
    { cat: "Infrastructure", date: "02 Avr 2026", title: "L'aéroport de Cotonou atteint de nouveaux sommets", image: p4 },
    { cat: "Chantier", date: "20 Mar 2026", title: "Sécurité sur chantier : nos engagements pour 2026", image: p5 },
    { cat: "Équipe", date: "08 Mar 2026", title: "Bienvenue à nos nouveaux ingénieurs civils diplômés", image: p6 },
  ],
];

const HomeNews = () => {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % sets.length), 5000);
    return () => clearInterval(t);
  }, []);

  const posts = sets[i];

  return (
    <section className="relative overflow-hidden bg-navy-light py-24 md:py-32">
      <div className="container-wide">
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow mb-4">Actualités</p>
            <h2 className="font-display text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
              Nos dernières <span className="text-gradient-gold">actualités</span>
            </h2>
          </div>
          <Link to="/actualites" className="group inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-foreground hover:text-primary">
            Toutes les actualités <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div key={i} className="grid animate-fade-in gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <article key={p.title} className="group cursor-pointer">
              <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
                <img src={p.image} alt={p.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <span className="absolute left-4 top-4 rounded-sm bg-gradient-gold px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-primary-foreground">
                  {p.cat}
                </span>
              </div>
              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.28em] text-primary">{p.date}</p>
              <h3 className="mt-3 font-display text-xl font-bold leading-snug text-foreground transition-colors group-hover:text-primary">
                {p.title}
              </h3>
              <Link to="/actualites" className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-foreground/80 hover:text-primary">
                Lire la suite <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-10 flex justify-center gap-2">
          {sets.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              aria-label={`Page ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all ${idx === i ? "w-10 bg-gradient-gold" : "w-6 bg-foreground/20 hover:bg-foreground/40"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeNews;