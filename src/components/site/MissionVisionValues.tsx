import { Target, Eye, Heart, Shield, Sparkles, Users } from "lucide-react";

const items = [
  { Icon: Target, eyebrow: "Notre Mission", title: "Concrétiser vos projets",
    text: "Accompagner particuliers, entreprises et collectivités du Bénin avec rigueur, transparence et excellence à chaque étape de leur projet de construction." },
  { Icon: Eye, eyebrow: "Notre Vision", title: "Bâtir la référence",
    text: "Devenir le cabinet de référence en Afrique de l'Ouest pour la conception, le suivi et la réalisation d'ouvrages durables, modernes et responsables." },
  { Icon: Heart, eyebrow: "Nos Valeurs", title: "Confiance & engagement",
    text: "Écoute, intégrité, qualité, respect des délais et durabilité — quatre principes qui guident chacune de nos décisions sur le terrain comme au bureau." },
];

const pillars = [
  { Icon: Shield, label: "Garantie décennale" },
  { Icon: Sparkles, label: "Finitions premium" },
  { Icon: Users, label: "Équipe pluridisciplinaire" },
];

const MissionVisionValues = () => (
  <section className="relative bg-background py-24 md:py-32">
    <div className="container-wide">
      <div className="mx-auto mb-16 max-w-2xl text-center">
        <p className="eyebrow mb-4">Notre ADN</p>
        <h2 className="font-display text-4xl font-bold leading-tight md:text-5xl">
          Mission · Vision · <span className="text-gradient-gold">Valeurs</span>
        </h2>
      </div>

      <div className="grid gap-px bg-border md:grid-cols-3">
        {items.map(({ Icon, eyebrow, title, text }) => (
          <article key={eyebrow} className="group relative overflow-hidden bg-card p-10 transition-all duration-500 hover:bg-secondary">
            <div className="absolute inset-x-0 top-0 h-1 scale-x-0 bg-gradient-gold transition-transform duration-500 group-hover:scale-x-100" />
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-sm bg-secondary text-primary transition-all duration-500 group-hover:rotate-6 group-hover:bg-gradient-gold group-hover:text-primary-foreground">
              <Icon className="h-7 w-7" strokeWidth={1.5} />
            </div>
            <p className="eyebrow mb-2">{eyebrow}</p>
            <h3 className="mb-3 font-display text-2xl font-bold">{title}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{text}</p>
          </article>
        ))}
      </div>

      <div className="mt-16 flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
        {pillars.map(({ Icon, label }) => (
          <div key={label} className="flex items-center gap-3 text-sm uppercase tracking-[0.28em] text-muted-foreground">
            <Icon className="h-5 w-5 text-primary" /> {label}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default MissionVisionValues;
