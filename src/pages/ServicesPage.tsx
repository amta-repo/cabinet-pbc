import Seo from "@/components/site/Seo";
import PageHero from "@/components/site/PageHero";
import Services from "@/components/site/Services";
import Testimonials from "@/components/site/Testimonials";

const ServicesPage = () => (
  <>
    <Seo
      title="Services — Plans, construction, suivi de chantier | Cabinet PBC"
      description="Cabinet PBC à Abomey-Calavi : plans d'architecture, gros œuvre, génie civil, rénovation, aménagement intérieur et suivi de chantier au Bénin."
      path="/services"
      jsonLd={{
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Services Cabinet PBC",
        provider: { "@type": "GeneralContractor", name: "Cabinet PBC" },
        areaServed: "Bénin",
        serviceType: ["Plans d'architecture", "Gros œuvre", "Suivi de chantier", "Rénovation", "Génie civil"],
      }}
    />
    <PageHero
      eyebrow="Nos Services"
      title="Une expertise"
      highlight="complète"
      description="De la première esquisse à la remise des clés, Cabinet PBC vous accompagne sur toute la chaîne de construction."
      current="Services"
    />
    <Services />
    <Testimonials />
  </>
);

export default ServicesPage;
