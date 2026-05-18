import Seo from "@/components/site/Seo";
import PageHero from "@/components/site/PageHero";
import About from "@/components/site/About";
import Stats from "@/components/site/Stats";
import Clients from "@/components/site/Clients";

const AboutPage = () => (
  <>
    <Seo
      title="À propos — BATI Moderne Constructions | Bureau d'études et constructions au Bénin"
      description="Découvrez BATI Moderne Constructions : 10+ ans d'expertise en plans, bâtiments et constructions à Abomey-Calavi. Notre mission, notre équipe, nos valeurs."
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
    <Stats />
    <Clients />
  </>
);

export default AboutPage;
