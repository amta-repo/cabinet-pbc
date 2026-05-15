import { ArrowUpRight } from "lucide-react";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";
import p5 from "@/assets/project-5.jpg";
import p6 from "@/assets/project-6.jpg";

const projects = [
  { img: p1, title: "Villa Contemporaine", category: "Résidentiel" },
  { img: p2, title: "Pont Métropolitain", category: "Génie Civil" },
  { img: p3, title: "Cuisine d'Exception", category: "Aménagement" },
  { img: p4, title: "Siège Corporate", category: "Tertiaire" },
  { img: p5, title: "Hangar Industriel", category: "Industrie" },
  { img: p6, title: "Résidence Prestige", category: "Habitat Collectif" },
];

const Projects = () => {
  return (
    <section id="projets" className="relative bg-background py-24 md:py-32">
      <div className="container-wide">
        <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <p className="eyebrow mb-4">Nos Réalisations</p>
            <h2 className="font-display text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              Des projets qui <span className="text-gradient-gold">marquent</span>
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            Une sélection de nos chantiers récents, témoins de notre exigence et de la diversité de notre savoir-faire.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <a
              href="#contact"
              key={p.title}
              className="group relative block overflow-hidden rounded-sm bg-card"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  width={1024}
                  height={1280}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-95" />
                <div className="absolute right-4 top-4 flex h-12 w-12 -translate-y-2 items-center justify-center rounded-full bg-gradient-gold opacity-0 shadow-gold transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <ArrowUpRight className="h-5 w-5 text-primary-foreground" />
                </div>
              </div>
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-primary">
                  {String(i + 1).padStart(2, "0")} · {p.category}
                </p>
                <h3 className="mt-2 font-display text-2xl font-bold text-foreground transition-colors group-hover:text-primary">
                  {p.title}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
