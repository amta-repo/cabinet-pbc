import { Building2, Factory, Construction, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import sustainImg from "@/assets/project-3.jpg";
import sustainImg2 from "@/assets/project-5.jpg";

const sectors = [
  {
    icon: Building2,
    title: "Bâtiments",
    text: "Une expertise substantielle en construction, des prix compétitifs, une solidité financière et un engagement envers la qualité et la sécurité de chaque chantier.",
    tags: ["Résidentiel", "Maisons", "Tertiaire"],
  },
  {
    icon: Construction,
    title: "Infrastructures Civiles",
    text: "Diversité géographique et complexité technique : nos équipes répondent aux défis exigeants des ouvrages publics et privés à travers le Bénin.",
    tags: ["Hôtellerie", "Bâtiments publics", "Hôpitaux"],
  },
  {
    icon: Factory,
    title: "Industrie Lourde",
    text: "BATI MODERNE répond aux besoins uniques des clients de l'industrie : usines, dépôts, ateliers, énergie et infrastructures logistiques durables.",
    tags: ["Usine", "Raffinerie", "Logistique"],
  },
];

const OurSectors = () => (
  <section className="relative bg-navy-light py-24 md:py-32">
    <div className="container-wide">
      <div className="mb-16 max-w-2xl">
        <p className="eyebrow mb-4">Nos secteurs</p>
        <h2 className="font-display text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
          Our <span className="text-gradient-gold">Sectors</span>
        </h2>
      </div>

      <div className="grid gap-12 md:grid-cols-3">
        {sectors.map(({ icon: Icon, title, text, tags }) => (
          <div key={title} className="group">
            <Icon className="h-12 w-12 text-primary transition-transform group-hover:-translate-y-1" strokeWidth={1.25} />
            <h3 className="mt-6 font-display text-2xl font-bold text-foreground">{title}</h3>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{text}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {tags.map((t) => (
                <span key={t} className="rounded-sm border border-border bg-card/40 px-3 py-1 text-[11px] uppercase tracking-wider text-muted-foreground">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-24 grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div className="relative h-[420px]">
          <img src={sustainImg} alt="Construction durable" className="absolute left-0 top-0 h-[70%] w-[70%] rounded-sm object-cover shadow-elegant" />
          <img src={sustainImg2} alt="Approche durable" className="absolute bottom-0 right-0 h-[60%] w-[60%] rounded-sm border-8 border-navy-light object-cover shadow-elegant" />
        </div>
        <div>
          <p className="eyebrow mb-4">Notre approche</p>
          <h3 className="font-display text-3xl font-bold leading-tight text-foreground md:text-5xl">
            Construction <span className="text-gradient-gold">Durable</span>
          </h3>
          <p className="mt-6 text-muted-foreground">
            Nos Conseillers en Construction Durable accompagnent chaque projet pour réduire l'empreinte environnementale, optimiser les coûts d'exploitation et garantir la performance long terme des ouvrages.
          </p>
          <Link
            to="/services"
            className="mt-8 inline-flex items-center gap-3 rounded-sm bg-gradient-gold px-7 py-4 text-sm font-bold uppercase tracking-[0.18em] text-primary-foreground shadow-gold transition-transform hover:-translate-y-0.5"
          >
            En savoir plus <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default OurSectors;