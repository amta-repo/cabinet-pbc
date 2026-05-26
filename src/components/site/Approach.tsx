const steps = [
  {
    n: "01",
    title: "L'Étude de Faisabilité",
    text: "Cette étape permet d'avoir une vision globale des possibilités qu'offre votre projet. Elle démarre par le relevé des mesures du lieu. Nous vous proposons ensuite un rendez-vous avec la cheffe de projet qui vous est dédiée pour faire le point sur l'ensemble de vos envies et besoins. Ce cahier des charges est la base de notre travail. Sur la base du relevé et du cahier des charges, nous vous proposons deux options de plan d'aménagement ainsi qu'une enveloppe budgétaire.",
  },
  {
    n: "02",
    title: "L'Avant-Projet Sommaire (APS)",
    text: "Dans cette 2ème phase, nous travaillons les volumes, les matériaux, les couleurs, le mobilier intégré et sur-mesure.",
  },
  {
    n: "03",
    title: "L'Avant-Projet Définitif (APD)",
    text: "Une fois l'APS finalisé, nous réalisons l'Avant-Projet Définitif (APD), le dossier de plans nécessaire à la compréhension du projet pour le chiffrage des travaux et leur réalisation plus tard en chantier : plan de démolition, plan électrique, plan de plafonds, élévations ou encore dessins détaillés du mobilier sur-mesure. Nous créons un dossier complet et rigoureux, précieux allié qui permettra de définir le projet dans ses moindres détails avant le démarrage des travaux.",
  },
  {
    n: "04",
    title: "Chiffrage des Travaux",
    text: "Nous rédigeons le descriptif sommaire des travaux, organisons les visites sur place avec les entreprises interrogées et leur procurons les dossiers nécessaires aux chiffrages. Nous sommes présentes pour répondre à leurs questions. Enfin, nous vous présentons les différentes offres finalisées.",
  },
  {
    n: "05",
    title: "Suivi de Chantier",
    text: "Nous vous accompagnons tout au long des travaux. Ce suivi de chantier, complémentaire au travail de conception, nous permet de vérifier le respect de la réalisation de votre projet tel que nous l'avons conçu ensemble. Il nous permet également de réaliser les ajustements nécessaires au projet sur place, dans la réalité du chantier. Ces ajustements sont presque inévitables, et notre accompagnement permet de trouver les meilleures solutions en respectant les contraintes techniques et esthétiques.",
  },
];

const Approach = () => (
  <section className="relative overflow-hidden bg-navy py-24 md:py-32">
    <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
    <div className="container-wide">
      <div className="mx-auto mb-16 max-w-3xl text-center">
        <p className="eyebrow mb-4">Notre approche</p>
        <h2 className="font-display text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
          Une méthode <span className="text-gradient-gold">éprouvée</span> en 5 étapes
        </h2>
        <p className="mt-6 text-muted-foreground">
          De l'étude initiale à la livraison de votre chantier, nous structurons chaque projet selon une démarche rigoureuse, transparente et collaborative.
        </p>
      </div>

      <ol className="relative mx-auto max-w-5xl">
        <span className="absolute left-6 top-2 bottom-2 hidden w-px bg-gradient-to-b from-primary/60 via-primary/20 to-transparent md:block" />
        {steps.map((s, idx) => (
          <li key={s.n} className="group relative grid gap-6 pb-12 last:pb-0 md:grid-cols-[80px_1fr] md:gap-10">
            <div className="relative">
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-gold font-display text-sm font-black text-primary-foreground shadow-gold transition-transform group-hover:scale-110">
                {s.n}
              </div>
            </div>
            <div className="rounded-sm border border-border bg-card/60 p-8 transition-all hover:-translate-y-1 hover:border-primary/60 hover:shadow-elegant">
              <h3 className="font-display text-2xl font-bold text-foreground md:text-3xl">{s.title}</h3>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">{s.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export default Approach;