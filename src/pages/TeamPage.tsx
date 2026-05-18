import Seo from "@/components/site/Seo";
import PageHero from "@/components/site/PageHero";
import Team from "@/components/site/Team";

const TeamPage = () => (
  <>
    <Seo
      title="Notre équipe — BATI Moderne Constructions | Architectes & ingénieurs au Bénin"
      description="Rencontrez l'équipe de BATI Moderne Constructions : architectes, ingénieurs, chefs de projet et designers basés à Abomey-Calavi."
      path="/equipe"
    />
    <PageHero
      eyebrow="Notre Équipe"
      title="Des experts"
      highlight="passionnés"
      description="Une équipe pluridisciplinaire qui conjugue créativité, rigueur technique et engagement client."
      current="Équipe"
    />
    <Team />
  </>
);

export default TeamPage;
