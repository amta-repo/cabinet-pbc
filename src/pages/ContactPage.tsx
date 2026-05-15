import Seo from "@/components/site/Seo";
import PageHero from "@/components/site/PageHero";
import Contact from "@/components/site/Contact";

const ContactPage = () => (
  <>
    <Seo
      title="Contact — Cabinet PBC | Devis gratuit à Abomey-Calavi"
      description="Contactez Cabinet PBC à Abomey-Calavi : +229 01 97 76 70 48 · info@cabinetpbc.com. Demandez votre devis gratuit, réponse sous 24h via WhatsApp."
      path="/contact"
      jsonLd={{
        "@context": "https://schema.org",
        "@type": "ContactPage",
        name: "Contact Cabinet PBC",
        url: "/contact",
      }}
    />
    <PageHero
      eyebrow="Contact"
      title="Parlons de"
      highlight="votre projet"
      description="Notre équipe vous répond rapidement. Vous pouvez aussi nous joindre directement sur WhatsApp."
      current="Contact"
    />
    <Contact />
  </>
);

export default ContactPage;
