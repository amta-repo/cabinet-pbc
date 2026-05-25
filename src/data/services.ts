import cleEnMain from "@/assets/service-cle-en-main.jpg";
import plans from "@/assets/service-plans.jpg";
import genieCivil from "@/assets/service-genie-civil.jpg";
import renovation from "@/assets/service-renovation.jpg";
import hero2 from "@/assets/hero-2.jpg";
import suivChantier from "@/assets/US.jpg";

export interface ServiceItem {
  slug: string;
  title: string;
  short: string;
  icon: string;
  image: string;
  eyebrow: string;
  description: string;
  deliverables: string[];
  process: { title: string; text: string }[];
  stats: { label: string; value: number; color: string }[];
}

export const services: ServiceItem[] = [
  {
    slug: "construction-cle-en-main",
    title: "Construction Clé en Main",
    short: "De la première esquisse à la remise des clés, nous gérons l'intégralité de votre projet.",
    icon: "Building2",
    image: cleEnMain,
    eyebrow: "Service signature",
    description: "Notre formule clé en main vous libère de toute contrainte. Nous coordonnons architectes, ingénieurs, artisans et fournisseurs pour livrer un bâtiment achevé, contrôlé et conforme à vos attentes — dans le budget et le délai convenus.",
    deliverables: ["Étude de faisabilité et plans complets","Gestion administrative et permis de construire","Coordination de tous les corps de métier","Contrôle qualité hebdomadaire sur chantier","Garantie décennale et livraison clé en main"],
    process: [
      { title: "Étude & conception", text: "Cahier des charges, plans d'architecture, plans techniques, métré." },
      { title: "Chiffrage & contrats", text: "Devis détaillé, négociation fournisseurs, signature des marchés." },
      { title: "Réalisation", text: "Suivi quotidien, reporting hebdomadaire, contrôle qualité indépendant." },
      { title: "Livraison", text: "Réception, levée de réserves, garantie et SAV." }
    ],
    stats: [
      { label: "Projets clé en main", value: 75, color: "hsl(var(--primary))" },
      { label: "Délais respectés", value: 96, color: "hsl(var(--primary-glow))" },
      { label: "Satisfaction client", value: 98, color: "hsl(var(--primary-deep))" }
    ]
  },
  {
    slug: "plans-conception",
    title: "Plans & Conception",
    short: "Plans d'architecture, plans d'exécution et métrés sur mesure pour donner vie à vos idées.",
    icon: "Ruler",
    image: plans,
    eyebrow: "Bureau d'études",
    description: "Notre équipe d'architectes et de dessinateurs conçoit des plans précis, conformes aux normes du Bénin, et optimisés pour vos contraintes de site, d'usage et de budget.",
    deliverables: ["Plans d'esquisse et d'avant-projet","Plans d'exécution (APD) et détails techniques","Métré quantitatif et descriptif","Plans 3D et perspectives photoréalistes","Dossier de permis de construire"],
    process: [
      { title: "Relevés & cahier des charges", text: "Visite de site, mesures, échange sur vos besoins." },
      { title: "Esquisses", text: "Deux options d'aménagement, ambiances et volumes." },
      { title: "Avant-projet définitif", text: "Plans techniques détaillés, choix matériaux, mobilier." },
      { title: "Dossier d'exécution", text: "Plans cotés, élévations, détails, dossier marché." }
    ],
    stats: [
      { label: "Plans livrés", value: 220, color: "hsl(var(--primary))" },
      { label: "Précision technique", value: 99, color: "hsl(var(--primary-glow))" },
      { label: "Validation 1er passage", value: 92, color: "hsl(var(--primary-deep))" }
    ]
  },
  {
    slug: "gros-oeuvre",
    title: "Gros Œuvre",
    short: "Fondations, structures béton armé et maçonnerie : la solidité au cœur de votre ouvrage.",
    icon: "HardHat",
    image: hero2,
    eyebrow: "Structure & maçonnerie",
    description: "Le gros œuvre est la fondation de tout. Nous mettons en œuvre des techniques éprouvées et des matériaux certifiés pour garantir la pérennité, la sécurité et la conformité de vos ouvrages.",
    deliverables: ["Terrassement et fondations","Béton armé et structure","Maçonnerie traditionnelle et moderne","Charpente et couverture","Étanchéité et fondations spéciales"],
    process: [
      { title: "Étude de sol", text: "Sondages, analyse géotechnique, choix des fondations." },
      { title: "Implantation", text: "Bornage, traçage, préparation du terrain." },
      { title: "Élévation", text: "Coulage, montage, suivi qualité béton." },
      { title: "Hors d'eau / hors d'air", text: "Couverture, menuiseries extérieures, étanchéité." }
    ],
    stats: [
      { label: "Mètres cubes coulés", value: 4500, color: "hsl(var(--primary))" },
      { label: "Conformité normes", value: 100, color: "hsl(var(--primary-glow))" },
      { label: "Sécurité chantier", value: 99, color: "hsl(var(--primary-deep))" }
    ]
  },
  {
    slug: "suivi-de-chantier",
    title: "Suivi de Chantier",
    short: "Coordination rigoureuse, contrôle qualité et reporting transparent jusqu'à la livraison.",
    icon: "ClipboardCheck",
    image: suivChantier,
    eyebrow: "Maîtrise d'œuvre",
    description: "Notre maîtrise d'œuvre indépendante protège vos intérêts. Nous coordonnons les entreprises, vérifions la qualité, contrôlons les budgets et vous tenons informé chaque semaine.",
    deliverables: ["Planification et suivi de planning","Réunions de chantier hebdomadaires","Reporting photographique et rapports","Contrôle des situations de travaux","Réception et levée des réserves"],
    process: [
      { title: "Lancement", text: "OS, planning détaillé, installation de chantier." },
      { title: "Suivi quotidien", text: "Présence terrain, contrôle qualité, gestion imprévus." },
      { title: "Pilotage", text: "Réunions hebdo, comptes-rendus, suivi budgétaire." },
      { title: "Clôture", text: "Réception, garanties, dossier d'ouvrages exécutés." }
    ],
    stats: [
      { label: "Chantiers suivis", value: 110, color: "hsl(var(--primary))" },
      { label: "Délais respectés", value: 94, color: "hsl(var(--primary-glow))" },
      { label: "Économies budget", value: 12, color: "hsl(var(--primary-deep))" }
    ]
  },
  {
    slug: "renovation-extension",
    title: "Rénovation & Extension",
    short: "Réhabilitation, modernisation et extension de bâtiments existants avec finitions premium.",
    icon: "Hammer",
    image: renovation,
    eyebrow: "Transformation",
    description: "Donnez une seconde vie à votre bâtiment. Nous transformons l'existant tout en préservant son caractère et en améliorant performance, confort et esthétique.",
    deliverables: ["Diagnostic technique complet","Plans de rénovation et permis","Démolition contrôlée","Mise aux normes électriques et plomberie","Finitions, peinture, revêtements"],
    process: [
      { title: "Diagnostic", text: "Audit structurel, électrique, plomberie, thermique." },
      { title: "Conception", text: "Plans avant/après, choix matériaux, optimisation espaces." },
      { title: "Travaux", text: "Démolition, gros œuvre, second œuvre, finitions." },
      { title: "Livraison", text: "Tests, nettoyage, remise des clés, garanties." }
    ],
    stats: [
      { label: "Rénovations livrées", value: 65, color: "hsl(var(--primary))" },
      { label: "Valeur ajoutée moyenne", value: 35, color: "hsl(var(--primary-glow))" },
      { label: "Satisfaction post-livraison", value: 97, color: "hsl(var(--primary-deep))" }
    ]
  },
  {
    slug: "genie-civil",
    title: "Génie Civil",
    short: "Voirie, réseaux divers, terrassement et ouvrages d'art pour vos projets d'infrastructure.",
    icon: "Truck",
    image: genieCivil,
    eyebrow: "Infrastructures",
    description: "Nous concevons et réalisons les infrastructures de demain : voiries, réseaux humides et secs, ouvrages d'art et aménagements urbains.",
    deliverables: ["Études techniques et plans VRD","Terrassement et nivellement","Voirie et assainissement","Réseaux eau, électricité, télécom","Ouvrages d'art (ponts, dalles, soutènements)"],
    process: [
      { title: "Études préalables", text: "Topographie, géotechnique, hydrologie." },
      { title: "Conception", text: "Plans VRD, dimensionnement structures." },
      { title: "Exécution", text: "Terrassement, réseaux, ouvrages, voirie." },
      { title: "Réception", text: "Essais, contrôles, DOE, garanties." }
    ],
    stats: [
      { label: "Mètres linéaires de VRD", value: 8200, color: "hsl(var(--primary))" },
      { label: "Conformité réglementaire", value: 100, color: "hsl(var(--primary-glow))" },
      { label: "Projets publics livrés", value: 14, color: "hsl(var(--primary-deep))" }
    ]
  }
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
