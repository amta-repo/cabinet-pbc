import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import Seo from "@/components/site/Seo";
import PageHero from "@/components/site/PageHero";
import About from "@/components/site/About";
import Stats from "@/components/site/Stats";
import MissionVisionValues from "@/components/site/MissionVisionValues";
import Approach from "@/components/site/Approach";
import Founder from "@/components/site/Founder";
import Team from "@/components/site/Team";
import Clients from "@/components/site/Clients";
import OurSectors from "@/components/site/OurSectors";
import CtaBanner from "@/components/site/CtaBanner";
import hero2 from "@/assets/hero-2.jpg";

const reasons = [
  { n: "01", title: "Écoute & sur-mesure", text: "Chaque projet démarre par une vraie compréhension de vos envies et contraintes." },
  { n: "02", title: "Expertise pluridisciplinaire", text: "Architectes, ingénieurs, conducteurs de travaux — une seule équipe pour tout." },
  { n: "03", title: "Délais maîtrisés", text: "96% de nos chantiers sont livrés dans les délais contractuels." },
  { n: "04", title: "Garanties solides", text: "Décennale, assurances, SAV — nous restons à vos côtés après la livraison." },
];

const AboutPage = () => (
  <>
    <Seo
      title="À propos — BATI Moderne Constructions | Bureau d'études au Bénin"
      description="Découvrez BATI Moderne Constructions : mission, vision, valeurs, équipe et fondateur. 10+ ans d'expertise en plans, bâtiments et constructions à Abomey-Calavi."
      path="/a-propos"
    />
    <PageHero
      eyebrow="À propos"
      title="Bâtir l'avenir,"
      highlight="ensemble"
      description="BATI Moderne Constructions est un cabinet d'architecture et de construction basé à Abomey-Calavi, au cœur du Bénin."
      current="À propos"
    />
    <About />
    <MissionVisionValues />
    <OurSectors />
    <Approach />
    <Stats />
    <Founder />
    <Team />

    {/* Why choose us - image bg CTA */}
    <section className="relative overflow-hidden py-24 md:py-32">
      <img src={hero2} alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/85 to-navy/40" />
      <div className="container-wide relative z-10">
        <div className="max-w-2xl">
          <p className="eyebrow mb-4">Pourquoi nous choisir</p>
          <h2 className="font-display text-4xl font-bold leading-tight md:text-5xl">
            Quatre raisons de nous <span className="text-gradient-gold">faire confiance</span>
          </h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((r) => (
            <div key={r.n} className="group rounded-sm border border-border bg-card/80 p-6 backdrop-blur transition-all hover:-translate-y-1 hover:border-primary/60 hover:shadow-gold">
              <div className="mb-4 font-display text-4xl font-black text-primary/30 transition-colors group-hover:text-primary">{r.n}</div>
              <h3 className="text-lg font-bold text-foreground">{r.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{r.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-wrap gap-4">
          <Link to="/contact" className="inline-flex items-center gap-3 rounded-sm bg-gradient-gold px-7 py-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground shadow-gold hover:-translate-y-0.5 transition-transform">
            Démarrer un projet <ArrowRight className="h-4 w-4" />
          </Link>
          <a href="tel:+2290197767048" className="inline-flex items-center gap-3 rounded-sm border-2 border-primary/60 px-7 py-4 text-sm font-semibold uppercase tracking-wider text-foreground hover:bg-primary/10 hover:border-primary">
            <Phone className="h-4 w-4" /> Appelez-nous
          </a>
          <Link to="/services" className="inline-flex items-center gap-3 rounded-sm border-2 border-border px-7 py-4 text-sm font-semibold uppercase tracking-wider text-foreground hover:border-primary hover:text-primary">
            Voir nos services
          </Link>
        </div>
      </div>
    </section>

    <Clients />
    <CtaBanner />
  </>
);

export default AboutPage;
