import { Linkedin, Mail } from "lucide-react";
import t1 from "@/assets/team-1.jpg";
import t2 from "@/assets/team-2.jpg";
import t3 from "@/assets/team-3.jpg";
import t4 from "@/assets/team-4.jpg";

const team = [
  { img: t1, name: "Pascal Houessou", role: "Architecte Principal" },
  { img: t2, name: "Aïcha Adjovi", role: "Ingénieure Génie Civil" },
  { img: t3, name: "Marc Sossa", role: "Chef de Projet" },
  { img: t4, name: "Hélène Agbessi", role: "Designer d'Intérieur" },
];

const Team = () => {
  return (
    <section className="relative bg-navy-light py-24 md:py-32">
      <div className="container-wide">
        <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <p className="eyebrow mb-4">Notre Équipe</p>
            <h2 className="font-display text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              Des <span className="text-gradient-gold">professionnels</span> passionnés
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            Architectes, ingénieurs et chefs de chantier — une équipe pluridisciplinaire au service de vos ambitions.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((m) => (
            <div key={m.name} className="group">
              <div className="relative overflow-hidden rounded-sm">
                <img src={m.img} alt={m.name} width={768} height={1024} loading="lazy" className="aspect-[3/4] w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/30 to-transparent opacity-90" />
                <div className="absolute inset-x-0 bottom-0 translate-y-4 px-6 pb-6 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="flex gap-3">
                    {[Linkedin, Mail].map((Icon, i) => (
                      <a key={i} href="#" aria-label="Contact" className="flex h-9 w-9 items-center justify-center rounded-sm bg-gradient-gold text-primary-foreground transition-transform hover:-translate-y-0.5">
                        <Icon className="h-4 w-4" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-5">
                <h3 className="font-display text-xl font-bold text-foreground transition-colors group-hover:text-primary">{m.name}</h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.32em] text-muted-foreground">{m.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
