import Seo from "@/components/site/Seo";
import PageHero from "@/components/site/PageHero";
import Projects from "@/components/site/Projects";
import Clients from "@/components/site/Clients";

const ProjectsPage = () => (
  <>
    <Seo
      title="Projets & Réalisations — Cabinet PBC au Bénin"
      description="Découvrez les chantiers et réalisations de Cabinet PBC à Abomey-Calavi : villas, immeubles, tertiaire, génie civil et aménagement."
      path="/projets"
    />
    <PageHero
      eyebrow="Réalisations"
      title="Nos projets"
      highlight="phares"
      description="Une sélection de chantiers livrés par Cabinet PBC à travers le Bénin — résidentiel, tertiaire, industriel et génie civil."
      current="Projets"
    />
    <Projects />
    <Clients />
  </>
);

export default ProjectsPage;
