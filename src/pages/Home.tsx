import Seo from "@/components/site/Seo";
import Hero from "@/components/site/Hero";
import Services from "@/components/site/Services";
import About from "@/components/site/About";
import Projects from "@/components/site/Projects";
import Stats from "@/components/site/Stats";
import Testimonials from "@/components/site/Testimonials";
import Clients from "@/components/site/Clients";

const Home = () => (
  <>
    <Seo
      title="Cabinet PBC — Plans, Bâtiments & Constructions à Abomey-Calavi"
      description="Cabinet PBC : architecture, plans, suivi de chantier et construction au Bénin. Devis gratuit. Basé à Abomey-Calavi."
      path="/"
      jsonLd={{
        "@context": "https://schema.org",
        "@type": "GeneralContractor",
        name: "Cabinet PBC (Plans Bâtiments & Constructions)",
        telephone: "+229 01 97 76 70 48",
        email: "info@cabinetpbc.com",
        address: { "@type": "PostalAddress", addressLocality: "Abomey-Calavi", addressCountry: "BJ" },
        geo: { "@type": "GeoCoordinates", latitude: 6.4417886, longitude: 2.3290464 },
        areaServed: "Bénin",
      }}
    />
    <Hero />
    <Services />
    <About />
    <Projects />
    <Stats />
    <Testimonials />
    <Clients />
  </>
);

export default Home;
