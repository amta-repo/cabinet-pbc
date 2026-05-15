import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import Seo from "@/components/site/Seo";
import PageHero from "@/components/site/PageHero";

const faqs = [
  {
    q: "Quels services propose Cabinet PBC ?",
    a: "Nous concevons des plans d'architecture, réalisons le gros œuvre, le génie civil, la rénovation, l'aménagement intérieur et assurons le suivi complet de chantier au Bénin.",
  },
  {
    q: "Où êtes-vous basés ?",
    a: "Nos bureaux sont situés à Abomey-Calavi (C8RH+PJ), à proximité de Cotonou. Nous intervenons sur l'ensemble du territoire béninois.",
  },
  {
    q: "Comment obtenir un devis ?",
    a: "Remplissez le formulaire de la page Contact — votre demande arrive directement sur notre WhatsApp. Vous pouvez aussi nous appeler au +229 01 97 76 70 48 ou écrire à info@cabinetpbc.com.",
  },
  {
    q: "Le devis est-il gratuit ?",
    a: "Oui. L'étude initiale et le devis sont entièrement gratuits et sans engagement.",
  },
  {
    q: "Quels types de projets réalisez-vous ?",
    a: "Villas individuelles, résidences collectives, bâtiments tertiaires et industriels, ouvrages d'art et aménagements intérieurs.",
  },
  {
    q: "Quels sont vos délais de réalisation ?",
    a: "Les délais dépendent de la nature et de la taille du projet. Nous vous communiquons un planning détaillé dès la phase d'étude et nous nous engageons sur ces délais.",
  },
  {
    q: "Travaillez-vous avec des particuliers et des entreprises ?",
    a: "Oui, nous accompagnons les particuliers, les entreprises privées et les collectivités publiques.",
  },
  {
    q: "Proposez-vous le suivi de chantier seul ?",
    a: "Oui. Nous proposons des missions de maîtrise d'œuvre et de suivi de chantier, même si les plans ont été conçus par un autre cabinet.",
  },
];

const FaqPage = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <>
      <Seo
        title="FAQs — Cabinet PBC | Questions fréquentes"
        description="Réponses aux questions fréquentes sur Cabinet PBC : services, zone d'intervention, devis, délais et suivi de chantier au Bénin."
        path="/faq"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }}
      />
      <PageHero
        eyebrow="FAQs"
        title="Questions"
        highlight="fréquentes"
        description="Tout ce que vous devez savoir sur Cabinet PBC, nos prestations et notre méthode de travail."
        current="FAQs"
      />
      <section className="bg-background py-24 md:py-32">
        <div className="container-wide max-w-3xl">
          <div className="divide-y divide-border rounded-sm border border-border bg-card">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <div key={f.q}>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left transition-colors hover:bg-secondary md:px-8"
                  >
                    <h2 className="font-display text-base font-bold text-foreground md:text-lg">{f.q}</h2>
                    <span className="flex h-9 w-9 flex-none items-center justify-center rounded-sm bg-gradient-gold text-primary-foreground">
                      {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 text-sm leading-relaxed text-muted-foreground md:px-8 md:text-base">{f.a}</div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default FaqPage;
